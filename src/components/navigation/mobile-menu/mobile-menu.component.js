import React, { useEffect, useState } from "react";
import { Overlay, MenuLinks, MenuLink } from "./mobile-menu.styles";
import { AnimatePresence } from "framer-motion";
import { ModalAnimation } from "./mobile-menu.animation";

const MobileMenu = ({ modalIsOpen, setIsOpen, navLinks }) => {
  const close = () => {
    document.querySelector(".menu-icon__cheeckbox").click();
    setIsOpen(false);
  };
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (modalIsOpen) setTimeout(() => setShowMenu(true), 250);
  }, [modalIsOpen]);

  return (
    <Overlay>
      <AnimatePresence initial={false} custom={ModalAnimation}>
        {showMenu && (
          <MenuLinks
            variants={ModalAnimation}
            animate="visible"
            initial="hidden"
            exit="hidden"
          >
            {navLinks &&
              navLinks.map((link) => (
                <MenuLink
                  key={link.id}
                  to={link.url}
                  onClick={() => {
                    close();
                  }}
                >
                  {link.text}
                </MenuLink>
              ))}
          </MenuLinks>
        )}
      </AnimatePresence>
    </Overlay>
  );
};

export default MobileMenu;
