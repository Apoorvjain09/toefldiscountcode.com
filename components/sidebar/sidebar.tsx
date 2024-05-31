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
import { SignInButton } from '@clerk/nextjs';
import Link from 'next/link';

const sidebarItems: SidebarItems = {
  links: [
    { label: 'Mock Tests', href: '/', icon: Home },
    { label: 'Discount Codes', href: '/toefl-voucher', icon: Bell },
    { label: 'Score Reporting', href: 'score-reporting', icon: Mail },
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
      <SidebarButton icon={MoreHorizontal} className='w-full'>
        <Link href="/discover">Discover</Link>
      </SidebarButton>
      <SidebarButton
        className='w-[90%] justify-center text-white bg-black'
        variant='default'
      >
        Sign In
      </SidebarButton>
    </div>
  ),
};

export default function Sidebar() {
  const isDesktop = useMediaQuery('(min-width: 640px)', {
    initializeWithValue: false,
  });

  if (isDesktop) {
    return <SidebarDesktop sidebarItems={sidebarItems} />;
  }

  return <SidebarMobile sidebarItems={sidebarItems} />;
}