import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    // If we have a state telling us to scroll to the blog, 
    // do NOT force scroll to the very top.
    if (state?.scrollToBlog) {
      return; 
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname, state]);

  return null;
};

export default ScrollToTop;