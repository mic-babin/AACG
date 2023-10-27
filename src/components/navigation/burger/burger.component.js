import React, { useState } from "react";
import { BurgerIcon, customStyles } from "./burger.styles";
import Modal from "react-modal";
import { motion } from "framer-motion";
import MobileMenu from "../mobile-menu/mobile-menu.component";

const Burger = ({ navLinks }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function toggleModal() {
    setIsOpen(!modalIsOpen);
  }
  return (
    <>
      <BurgerIcon
        alt=""
        onClick={toggleModal}
        id="burger"
        className={modalIsOpen && "is-open"}
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 0.75,
          delay: 0.1,
          type: "linear",
        }}
        viewport={{ once: true }}
      >
        <div className="menu-icon">
          <label htmlFor="toggleMenu">Menu</label>
          <input
            className="menu-icon__cheeckbox"
            name="toggleMenu"
            id="toggleMenu"
            type="checkbox"
          />
          <div>
            <span></span>
            <span></span>
          </div>
        </div>
      </BurgerIcon>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{
            duration: 1,
            delay: 0.1,
            type: "linear",
          }}
        >
          <MobileMenu
            navLinks={navLinks}
            modalIsOpen={modalIsOpen}
            setIsOpen={setIsOpen}
          ></MobileMenu>
        </motion.div>
      </Modal>
    </>
  );
};

export default Burger;
