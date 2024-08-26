'use client';

import React, { useState, useEffect } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { RedirectToSignIn, SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs';
import { Logo } from './NavbarLogo'; 
import ToggleMode from './toggleMode';

interface NavbarProps {
  LogoImg?: string;
  title?: string;
  LogoImgDark?: string;
  navigation: { name: string; href: string }[];
}

export default function Navbar({
  LogoImg,
  title = "Sixtusdev", // Default title if none provided
  LogoImgDark,
  navigation,
}: NavbarProps) {
  const { user } = useUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      for (let item of navigation) {
        const section = document.querySelector(`#${item.href.substring(1)}`);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
            setActiveSection(item.href.substring(1));
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navigation]);

  const handleClick = (href: string) => {
    setActiveSection(href.substring(1));
  };

  return (
    <>
      <SignedIn>
        <header className={`fixed inset-x-0 top-0 z-50 transition-colors border-b bg-secondary duration-500 ${scrolling ? 'border-b border-secondary' : 'bg-transparent'}`}>
          <nav aria-label="Global" className="flex items-center justify-between p-4 lg:px-8">
            <div className="flex lg:flex-1">
              <Logo src={LogoImg} alt="Sixtusdev Logo" title={title} />
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center cursor-pointer justify-center rounded-md p-2.5"
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={`#${item.href.substring(1)}`}
                  className={`text-sm font-medium leading-6 cursor-pointer tracking-wider ${activeSection === item.href.substring(1) ? 'text-primary' : 'text-default'} hover:text-primary`}
                  onClick={() => handleClick(item.href)}
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-5 items-center">
              <ToggleMode />
              <SignedIn>
                <div className="flex items-center gap-4">
                  {user && <span className="hidden lg:block text-sm font-semibold">{user.firstName}</span>}
                  <UserButton />
                </div>
              </SignedIn>
            </div>
          </nav>
          <Dialog open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="lg:hidden">
            <div className="fixed inset-0 z-40" />
            <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-black-100 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Logo src={LogoImgDark} alt="Chatter Logo" title={title} />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 rounded-md p-2.5"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={`#${item.href.substring(1)}`}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-medium tracking-wider leading-7 hover:bg-secondary"
                        onClick={() => handleClick(item.href)}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-3">
                    <div className="flex items-center gap-2">
                      <UserButton />
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </header>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
      
    </>
  );
}








