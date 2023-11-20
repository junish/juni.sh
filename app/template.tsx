'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    document.dispatchEvent(new Event('karte-blocks-force-activate'));
  }, [pathname]);

  return <>{children}</>;
}
