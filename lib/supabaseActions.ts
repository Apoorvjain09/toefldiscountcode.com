import { createClient } from '@supabase/supabase-js'
import { userAgent } from 'next/server'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export async function submitVoucherForm(formData: {
  firstName: string
  lastName: string
  email: string
  contactNumber: string
  voucher: string
}) {
  let session_id = localStorage.getItem('session_id') || crypto.randomUUID()

  if (!session_id) {
    session_id = crypto.randomUUID()
    localStorage.setItem('session_id', session_id)
  }

  const { error } = await supabase.from('vouchers').insert([
    {
      session_id,
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      contact_number: formData.contactNumber,
      voucher: formData.voucher,
      submitted_at: new Date().toISOString(),
      remarks: '',
    }
  ])

  if (error) throw error
}

type usersessions = {
  user_referringlink?: string
  user_timezone?: string
  user_device?: string
  user_networkspeed?: string
  user_networkconnection?: string
  user_useragent?: string
  user_tabmonitoring?: string
  user_operatingsystem?: string
  user_homecountry?: string
  user_ipaddress?: string
  user_isp?: string
  user_city?: string
  user_region?: string
  user_longitude?: string
  user_latitude?: string
}

type voucher = {
  session_id: string
  first_name: string
  last_name: string
  email: string
  contact_number: string
  submitted_at: string
  voucher: string
  remarks: string
  usersessions?: usersessions
}

export async function fetchVoucherSubmissions() {
  const { data, error } = await supabase
    .from("vouchers")
    .select(`
      session_id,
      first_name,
      last_name,
      email,
      contact_number,
      submitted_at,
      voucher,
      remarks,
      usersessions (
        user_ipaddress,
        user_referringlink,
        user_timezone,
        user_homecountry,
        user_device,
        user_networkspeed,
        user_networkconnection,
        user_tabmonitoring,
        user_useragent,
        user_isp,
        user_operatingsystem,
        user_city,
        user_region,
        user_longitude,
        user_latitude
      )
    `)
    .order("submitted_at", { ascending: false });

  if (error || !data) throw error;

  return (data as voucher[]).map(
    ({
      session_id,
      first_name,
      last_name,
      email,
      contact_number,
      submitted_at,
      voucher,
      remarks,
      usersessions = {}
    }) => ({
      session_id,
      firstName: first_name,
      lastName: last_name,
      email,
      contactNumber: contact_number,
      submittedAt: submitted_at,
      voucher,
      remarks,
      usersessions: {
        ip: usersessions.user_ipaddress ?? "",
        referrer: usersessions.user_referringlink ?? "",
        timeZone: usersessions.user_timezone ?? "",
        country: usersessions.user_homecountry ?? "",
        device: usersessions.user_device ?? "",
        speed: usersessions.user_networkspeed ?? "",
        connection: usersessions.user_networkconnection ?? "",
        tabStatus: usersessions.user_tabmonitoring ?? "",
        userAgent: usersessions.user_useragent ?? "",
        isp: usersessions.user_isp ?? "",
        os: usersessions.user_operatingsystem ?? "",
        city: usersessions.user_city ?? "",
        region: usersessions.user_region ?? "",
        longitude: usersessions.user_longitude ?? "",
        latitude: usersessions.user_latitude ?? "",
      }
    })
  );
}

export async function updateVoucherRemarks(session_id: string, remarks: string) {
  const { error } = await supabase
    .from('vouchers')
    .update({ remarks })
    .eq('session_id', session_id)

  if (error) throw error
}

export async function trackUserMetadata() {
  let session_id = localStorage.getItem('session_id')
  if (session_id) return

  session_id = crypto.randomUUID()
  localStorage.setItem('session_id', session_id)

  const connection = (navigator as any).connection || {}
  const userAgent = navigator.userAgent.toLowerCase()

  let ipInfo: any = {};
  try {
    const res = await fetch('https://ipapi.co/json')
    ipInfo = await res.json()
  } catch (e) {
    // silent fail
  }

  await supabase.from('usersessions').insert([{    
    session_id: session_id,
    user_id: null,
    user_timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    user_referringlink: document.referrer || '',
    user_device: /mobile|android|iphone/.test(userAgent) ? 'mobile' : 'desktop',
    user_networkspeed: connection.downlink || '',
    user_networkconnection: connection.effectiveType || '',
    user_operatingsystem: getOS(userAgent),
    user_useragent: navigator.userAgent,
    user_tabmonitoring: `${document.visibilityState === 'visible' ? 'active' : 'inactive'}`,
    user_ipaddress: ipInfo.ip || '',
    user_homecountry: ipInfo.country_name || '',
    user_isp: ipInfo.org || '',
    user_city: ipInfo.city || '',
    user_region: ipInfo.region || '',
    user_latitude: ipInfo.latitude || '',
    user_longitude: ipInfo.longitude || '',
    created_at: new Date().toISOString()
  }])
}

function getOS(agent: string) {
  if (agent.includes('windows')) return 'Windows'
  if (agent.includes('mac')) return 'MacOS'
  if (agent.includes('linux')) return 'Linux'
  if (agent.includes('android')) return 'Android'
  if (agent.includes('iphone')) return 'iOS'
  return 'Unknown'
}