import { SidebarButton } from './sidebar-button';
import { SidebarItems } from '@/types';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOut, MoreHorizontal, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { UserButton, useAuth, useUser, SignOutButton, SignInButton } from '@clerk/nextjs';
import { currentUser } from "@clerk/nextjs/server";
import { Suspense } from 'react';
import Sidebarskeleton from '../ui/SidebarLoadingSkeleton';
import styles from './SidebarDesktop.module.css'; // import the CSS module

interface SidebarDesktopProps {
  sidebarItems: SidebarItems;
}

export function SidebarDesktop(props: SidebarDesktopProps) {
  const pathname = usePathname();
  const { isSignedIn, user } = useUser();

  return (
    <aside className='w-[270px] max-w-xs h-screen fixed left-0 top-0 z-10 mt-1'>
      <div className='h-full px-3 py-4'>
        <h3 className='mx-3 text-lg font-semibold text-foreground'>MJ Study Abroad</h3>
        <div className={`mt-5 ${styles.scrollable}`}>
          <div className='flex flex-col gap-1 w-full'>
            {props.sidebarItems.links.map((link, index) => (
              <Link key={index} href={link.href}>
                <SidebarButton
                  variant={pathname === link.href ? 'secondary' : 'ghost'}
                  icon={link.icon}
                  className='w-full'
                >
                  {link.label}
                </SidebarButton>
              </Link>
            ))}
            {props.sidebarItems.extras}
          </div>
          <div className={`absolute left-0 bottom-3 w-full px-3`}>
            <Separator className='absolute -top-3 left-0 w-full' />
            <Popover>
              <PopoverTrigger asChild>
                <Button variant='ghost' className='w-full justify-start'>
                  <div className='flex justify-between items-center w-full'>
                    <div className='flex gap-2 items-center'>
                      <Avatar className='h-7 w-7'>
                        {isSignedIn ? <UserButton /> : <AvatarImage src='https://github.com/max-programming.png' />}
                      </Avatar>
                      {isSignedIn ? <span>{user?.firstName}</span> : <span>Guest 100849</span>}
                    </div>
                    <MoreHorizontal size={20} />
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className='bg-white mb-2 w-56 p-3 rounded-[1rem]'>
                <div className='space-y-1'>
                  <Link href='/'>
                    <SidebarButton size='sm' icon={Settings} className='w-full'>
                      <Link href="/profile">Account Settings</Link>
                    </SidebarButton>
                  </Link>
                  <SidebarButton size='sm' icon={LogOut} className='w-full'>
                    {!isSignedIn ? <SignInButton /> : <SignOutButton />}
                  </SidebarButton>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </aside>
  );
}
