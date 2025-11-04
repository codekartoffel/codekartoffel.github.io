"use client"

import { Constants } from '@/app/constants/constants';
import { useMounted } from '@/app/hooks/useMounted';
import 'react';
import { Ref, RefObject, useEffect, useRef, useState } from "react";
import HeaderButton from '../atoms/HeaderButton';
import ClickableText from '../atoms/ClickableText';
import { useRouter } from 'next/navigation';

export default function PageHeader() {
  const componentRef: RefObject<HTMLElement | null> = useRef(null);
  const [isMobile, setIsMobile] = useState((componentRef?.current?.clientWidth ?? 2000) < Constants.UI.MOBILE_WIDTH);
  const mounted = useMounted();
  const router = useRouter();
  // Use a useEffect to synchronize component with external system
  // All logic talking to outside should be in a use effect, but why?
  useEffect(() => {   
    if (!mounted) {
      return;
    }
    
    const handleResize = () => {
      setIsMobile((componentRef.current?.clientWidth ?? 2000) < Constants.UI.MOBILE_WIDTH);
    };

    componentRef.current?.addEventListener('resize', handleResize);

    // Instruct that cleanup code should remove resize event listener
    return () => componentRef.current?.removeEventListener('resize', handleResize);
  }, [mounted]);

  return (
    <header ref={componentRef} className='sticky top-0'>
      <div className="flex h-14 w-full px-[32px] bg-fuchsia-900">
        <div className="text-xl mt-auto mb-auto text-white">Marcus Panozzo</div>
        <div className='mt-auto mb-auto ml-auto grid grid-flow-col auto-cols-max gap-[12px]'>
          {/* Header Button Area */}
          <ClickableText className='mt-auto mb-auto'><a href='Resume_MarcusPanozzo_10_22_2025.pdf'>Resume (PDF)</a></ClickableText>
          <div className="mt-auto mb-auto h-full w-[1px] mt-[4px] mb-[4px] bg-gray-200 mx-[4px]"></div>
          <ClickableText className='mt-auto mb-auto' onClick={() => router.push('https://www.linkedin.com/in/marcus-panozzo/')}><i className='fa-brands fa-linkedin fa-xl'></i></ClickableText>
          <ClickableText className='mt-auto mb-auto' onClick={() => router.push('https://codekartoffel.github.io')}><i className='fa-brands fa-github fa-xl'></i></ClickableText>
        </div>
      </div>      
    </header>
  );
}
