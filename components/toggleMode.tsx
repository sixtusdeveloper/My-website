'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { SunIcon, MoonIcon } from 'lucide-react';
import { Button } from './ui/button';

const toggleMode = () => {
   const { theme, setTheme } = useTheme();
   const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        
        return <Button variant="secondary" size="icon" disabled={true}></Button>
    }

    const dark = theme === 'dark';  

    return (
        <Button 
            variant="secondary" 
            size="icon" 
            onClick={() => setTheme(dark ? 'light' : 'dark')}>
                {
                dark ? 
                    <SunIcon 
                       className="hover:cursor-pointer text-primary hover:text-primary" 
                    />
                 : 
                    <MoonIcon 
                       className="hover:cursor-pointer text-primary hover:text-primary" 
                    />
                 }
        </Button>
    )

}

export default toggleMode