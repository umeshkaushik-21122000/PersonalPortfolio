import React, { useRef, useState, useEffect } from "react";
import Logo from "./Headercomp/Logo";
import DesktopMenu from "./Headercomp/DesktopMenu";
import MobileMenu from "./Headercomp/MobileMenu";
import  {motion}  from "framer-motion";


const Header = (
  ) => {
  const RefNavBar = useRef<HTMLDivElement>(null);
  const [ShowElement, setShowElement] = useState(false);
  const [rotate, setRotate] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setShowElement(true);
    }, 1400);
  }, []);

  return (
    <>
      <motion.div
        ref={RefNavBar}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { delay:1.4, duration: 1.2 } }}
        className={`w-full bg-black fixed ${ShowElement ? `bg-opacity-70 shadow-xl` : `bg-opacity-0 `} bg-AAprimary flex 
      justify-between px-6 sm:px-12 py-2 sm:py-4  transition duration-4000 translate-y-0 z-20`}
      >
        <Logo 
        finishedLoading={ShowElement} 
        />

        <DesktopMenu finishedLoading={ShowElement} />
      </motion.div>
    </>
  );
};
export default Header;
