'use client';
import { SidebarItems } from '@/types';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Banknote, EarthLock, LogOut, Menu, MoreHorizontal, ReceiptText, Settings, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Separator } from '@/components/ui/separator';
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useUser, UserButton, SignInButton, SignOutButton } from '@clerk/nextjs';
import React, { Suspense, lazy, useEffect, useState } from 'react';
import Sidebarskeleton from '../ui/SidebarLoadingSkeleton';

// Lazy load SidebarButton component
const SidebarButton = lazy(() => import('./sidebar-button'));

interface SidebarMobileProps {
  sidebarItems: SidebarItems;
}

export function SidebarMobile(props: SidebarMobileProps) {
  const pathname = usePathname();
  const { isSignedIn, user } = useUser();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' variant='ghost' className='fixed top-3 left-3 z-[400]'>
          <div className='border p-3 bg-slate-50 rounded-2xl z-[400]'>
            <Menu size={20} />
          </div>
        </Button>
      </SheetTrigger>
      <SheetContent side='left' className='px-3 py-4 bg-gray-50' hideClose>
        <Suspense fallback={<div><Sidebarskeleton /></div>}>
          <SheetHeader className='flex flex-row justify-between items-center space-y-0'>
            <span className='text-lg font-semibold text-foreground mx-3'>
              MJ Study Abroad
            </span>
            <SheetClose asChild>
              <Button className='h-7 w-7 p-0' variant='ghost'>
                <X size={15} />
              </Button>
            </SheetClose>
          </SheetHeader>
          <div className='h-full'>
            <div className='sm:mt-5 mt-3 flex flex-col w-full gap-1 overflow-y-scroll h-[80%]'>
              {props.sidebarItems.links.map((link, idx) => (
                <Link key={idx} href={link.href}>
                  <SheetClose asChild>
                    <SidebarButton
                      variant={pathname === link.href ? 'secondary' : 'ghost'}
                      icon={link.icon}
                      className={`w-full ${pathname === link.href ? 'bg-gray-200' : ''}`}
                    >
                      {link.label}
                    </SidebarButton>
                  </SheetClose>
                </Link>
              ))}
              {props.sidebarItems.extras}
            </div>
            <div className='absolute w-full bottom-4 px-1 left-0'>
              <Separator className='absolute -top-3 left-0 w-full' />
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant='ghost' className='w-full justify-start'>
                    <div className='flex justify-between items-center w-full'>
                      <div className='flex gap-2 items-center'>
                        <Avatar className=''>
                          {isSignedIn ? <UserButton /> : <AvatarImage src='https://github.com/max-programming.png' />}
                        </Avatar>
                        {isSignedIn ? <span>{user?.firstName}</span> : <span>Guest 100849</span>}
                      </div>
                      <MoreHorizontal size={20} />
                    </div>
                  </Button>
                </DrawerTrigger>
                <DrawerContent className='p-2 z-[500] border-black bg-white text-black'>
                  <div className='flex flex-col space-y-2 mt-2'>
                    {/* <Link href='/profile' className='w-full border-black'>
                      <SheetClose asChild>
                        <SidebarButton size='sm' icon={Settings} className='w-full'>
                          Account Settings
                        </SidebarButton>
                      </SheetClose>
                    </Link> */}
                    <Link href='/privacy-policy'>
                      <DrawerClose asChild>
                        <SidebarButton size='sm' icon={EarthLock} className='w-full'>
                          Privacy Policy
                        </SidebarButton>
                      </DrawerClose>
                    </Link>
                    <Link href='/privacy-policy/cancellation-and-refund-policy'>
                      <DrawerClose asChild>
                        <SidebarButton size='sm' icon={Banknote} className='w-full'>
                          Cancel & Refunds
                        </SidebarButton>
                      </DrawerClose>
                    </Link>
                    <Link href='/privacy-policy/terms-conditions'>
                      <DrawerClose asChild>
                        <SidebarButton size='sm' icon={ReceiptText} className='w-full'>
                          Terms & Conditions
                        </SidebarButton>
                      </DrawerClose>
                    </Link>
                    <SidebarButton size='sm' icon={LogOut} className='w-full'>
                      {!isSignedIn ? <SignInButton /> : <SignOutButton />}
                    </SidebarButton>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </Suspense>
      </SheetContent>
    </Sheet >
  );
}
