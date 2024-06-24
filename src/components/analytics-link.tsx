"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect, ReactNode } from 'react';
import { Button } from './ui/button';

interface AnalyticsLinkProps {
  href: string;
  children: ReactNode;
  dealName: string;
  [key: string]: any;
}

interface Geolocation {
  latitude: number;
  longitude: number;
}

const AnalyticsLink: React.FC<AnalyticsLinkProps> = ({ 
  href, 
  children, 
  dealName,
  
  ...props }) => {
  const router = useRouter();
  const [geolocation, setGeolocation] = useState<Geolocation | null>(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setGeolocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting geolocation:', error);
        }
      );
    }
  }, []);

  const handleClick = async (e:any | React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const params = {
      href: href,
      longitude: geolocation?.longitude,
      latitude: geolocation?.latitude,
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      screenResolution: window.screen.width+ "x" + window.screen.height,
      language: navigator.language,
      dealName: dealName,
      ...props
    }

    try {
      console.log("params", params)
      await fetch('/api/analytics', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(params),
      });
    } catch (error) {
      console.error('Error logging click:', error);
    }

    router.push(href);
  };

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
};

export default AnalyticsLink;
