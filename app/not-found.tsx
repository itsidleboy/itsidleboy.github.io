"use client"

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import LottiePlayer from '@/components/LottiePlayer'
import Link from 'next/link'
import { ArrowUpRightIcon, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const [countdown, setCountdown] = useState(7);
  const router = useRouter();

  useEffect(() => {
    // 2. Visual countdown: decrease by 1 every second
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    // 3. Update timeout to 7000ms (7 seconds)
    const timeout = setTimeout(() => {
      router.push('/');
    }, 7000);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, [router]);

  return (
    <div className='my-24 w-full flex flex-col items-center justify-center gap-6'>
        <LottiePlayer src="/404.lottie" className='w-2/4'/>
      <h2>Error 404</h2>
      <p>Could not find requested page. You will be redirected to the home page in         <Badge
          variant="secondary"
        >
          <Clock />
          {countdown}
        </Badge> seconds.</p>
        <Button size="sm" variant="outline" asChild>
      <Link href="/">Click here to return home immediately <ArrowUpRightIcon /></Link></Button>
    </div>
  )
}
