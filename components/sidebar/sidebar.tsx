'use client';

import {
  Bell,
  Bookmark,
  Home,
  List,
  Mail,
  MoreHorizontal,
  BookCopy,
  TicketPercent,
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
      { label: 'Toefl Mock Tests', href: '/', icon: Home },
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
        href: 'https://gre-resources.com/gre-books',
        icon: BookCopy,
        label: 'Gre Resources',
      },
      {
        href: 'https://gre-resources.com/gre-vouchers',
        icon: TicketPercent,
        label: 'Gre Discount Vouchers',
      },
      {
        href: '/profile',
        icon: User,
        label: 'Profile',
      },
    ],
    extras: (
      <div className='flex flex-col gap-2'>
        <Link href="/discover">
          <SidebarButton icon={MoreHorizontal} className={`w-full ${pathname === '/discover' ? 'bg-gray-200' : ''}`}>
            Discover
          </SidebarButton>
        </Link>
        {isSignedIn ?
          (
            <a target="_blank" href="https://chat.whatsapp.com/CHwPiz6xEpHC0WSivb2UN7" className="inline-flex items-center justify-center w-[90%] px-5 py-3 text-sm text-center text-black font-semibold border border-gray-500 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 bg-white dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 gap-3 sm:gap-1">
              <img src="assets/whatsapp.png" alt="whatsapp link" className='w-[27px]' /> Join MS in US community
            </a>
          ) :
          (
            <>
              <Link href="/profile"><button className='w-[90%] sm:w-[100%] justify-center text-white bg-black text-center p-2 rounded-lg font-semibold'>Sign In</button></Link>
              <a target="_blank" href="https://chat.whatsapp.com/CHwPiz6xEpHC0WSivb2UN7" className="inline-flex items-center justify-center w-[90%] px-5 py-3 text-sm text-center text-black font-semibold border border-gray-500 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 bg-white dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 gap-3 sm:gap-1">
                <img src="assets/whatsapp.png" alt="whatsapp link" className='w-[27px]' /> Join MS in US community
              </a>
            </>
          )}
      </div>
    ),
  };

  if (isDesktop) {
    return <SidebarDesktop sidebarItems={sidebarItems} />;
  }

  return <SidebarMobile sidebarItems={sidebarItems} />;
}
