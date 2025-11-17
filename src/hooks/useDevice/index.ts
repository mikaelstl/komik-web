import { useEffect, useState } from "react";

type DeviceType = 'mobile' | 'tablet' | 'desktop';

export function useDevice() {
  const [device, setDevice] = useState<DeviceType>('desktop');

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) setDevice("mobile");
      else if (window.innerWidth < 1024) setDevice("tablet");
      else setDevice("desktop");
    }

    window.addEventListener('load', handleResize);
    window.addEventListener('reload', handleResize);
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize)

    return () => {
      window.removeEventListener('load', handleResize);
      window.removeEventListener('reload', handleResize);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    }
  }, []);

  return device;
}