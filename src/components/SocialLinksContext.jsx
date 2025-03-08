import { createContext, useContext, useState, useEffect } from "react";

const SocialLinksContext = createContext();

export const SocialLinksProvider = ({ children }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(window.innerWidth >= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarVisible(window.innerWidth >= 1024); // lg breakpoint
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <SocialLinksContext.Provider value={{ isSidebarVisible }}>
      {children}
    </SocialLinksContext.Provider>
  );
};

export const useSocialLinks = () => useContext(SocialLinksContext);
