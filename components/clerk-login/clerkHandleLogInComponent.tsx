'use client'
import { useUser } from '@clerk/nextjs'
import { useEffect } from 'react'
import { supabase } from '@/lib/supabaseActions'

const encrypt = (text: string) => btoa(unescape(encodeURIComponent(text)))
const decrypt = (text: string) => decodeURIComponent(escape(atob(text)))

export default function ClerkHandleLogInComponent() {
    const { user } = useUser()

    useEffect(() => {
        if (!user?.id) return

        const session_id = localStorage.getItem('session_id') || crypto.randomUUID()
        localStorage.setItem('session_id', session_id)

        const storedEncrypted = localStorage.getItem('encrypted_user_id')
        const currentEncrypted = encrypt(user.id)

        if (storedEncrypted === currentEncrypted) return

        const upsertUser = async () => {
            await supabase.from('users').upsert([
                {
                    user_id: user.id,
                    session_id: session_id,
                    user_fullname: user.fullName,
                    user_email: user.emailAddresses[0].emailAddress,
                }
            ])
            localStorage.setItem('encrypted_user_id', currentEncrypted)
        }

        upsertUser()
    }, [user?.id])

    return null
}