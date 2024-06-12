'use client';

import {
  Bell,
  Bookmark,
  Home,
  List,
  Mail,
  MoreHorizontal,
  User,
  Users,
} from 'lucide-react';
import { SidebarDesktop } from './sidebar-desktop';
import { SidebarItems } from '@/types';
import { SidebarButton } from './sidebar-button';
import { useMediaQuery } from 'usehooks-ts';
import { SidebarMobile } from './sidebar-mobile';
import { SignInButton, SignOutButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const { isSignedIn } = useUser();
  const pathname = usePathname();

  const isDesktop = useMediaQuery('(min-width: 640px)', {
    initializeWithValue: false,
  });

  const sidebarItems: SidebarItems = {
    links: [
      { label: 'Mock Tests', href: '/', icon: Home },
      { label: 'Discount Codes', href: '/toefl-voucher', icon: Bell },
      { label: 'Score Reporting', href: '/score-reporting', icon: Mail },
      {
        href: '/book',
        icon: List,
        label: 'Books/ Materials',
      },
      {
        href: '/study-partner',
        icon: Bookmark,
        label: 'Find study partner',
      },
      {
        href: '/university-shortlisting',
        icon: Users,
        label: 'University Shortlisting',
      },
      {
        href: '/profile',
        icon: User,
        label: 'Profile',
      },
    ],
    extras: (
      <div className='flex flex-col gap-2'>
        <SidebarButton icon={MoreHorizontal} className={`w-full ${pathname === '/discover' ? 'bg-gray-200' : ''}`}>
          <Link href="/discover">Discover</Link>
        </SidebarButton>
        {isSignedIn ?
          <a target="_blank" href="https://chat.whatsapp.com/CHwPiz6xEpHC0WSivb2UN7" className="inline-flex items-center justify-center w-full px-5 py-3 text-sm text-center text-black font-semibold border border-gray-500 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 bg-white dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 gap-1">
            <svg xmlns="http:/  /www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" /></svg> Join Whatsapp Group
          </a>
          : <Link href="/profile"><button className='w-[90%] justify-center text-white bg-black text-center p-2 rounded-lg font-semibold'>Sign In</button></Link>}
      </div>
    ),
  };

  if (isDesktop) {
    return <SidebarDesktop sidebarItems={sidebarItems} />;
  }

  return <SidebarMobile sidebarItems={sidebarItems} />;
}
