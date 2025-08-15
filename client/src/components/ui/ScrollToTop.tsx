import { useLayoutEffect } from 'react';
import { useLocation } from 'wouter';

const ScrollToTop = () => {
  const [pathname] = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;