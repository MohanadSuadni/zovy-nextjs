'use client'
import { useEffect } from 'react'

const TawkTo = () => {
  useEffect(() => {
    var Tawk_API = (window as any).Tawk_API || {};
    var Tawk_LoadStart = new Date();
    
    const s1 = document.createElement('script');
    const s0 = document.getElementsByTagName('script')[0];
    
    s1.async = true;
s1.src='https://embed.tawk.to/612d0396d6e7610a49b2be28/1febtc13f';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    
    s0?.parentNode?.insertBefore(s1, s0);
  }, []);


  
  return null;
}

export default TawkTo;