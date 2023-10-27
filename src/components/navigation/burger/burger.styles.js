import styled from "styled-components";
import { motion } from "framer-motion";

export const BurgerIcon = styled(motion.div)`
  height: 50px;
  width: 50px;
  right: 30px;
  top: 50px;
  position: fixed;
  z-index: 1000;

  @media (max-width: 576px) {
    right: 18px;
    top: 42px;
  }
  @media (max-width: 400px) {
    right: 12px;
  }

  label {
    height: 0;
    width: 0;
    opacity: 0;
  }

  .menu-icon {
    position: relative;
    width: 50px;
    height: 50px;
    transform: scale(1.5);

    .menu-icon__cheeckbox {
      margin-top: -20px;
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 2;
      -webkit-touch-callout: none;
      position: absolute;
      opacity: 0;
    }

    div {
      margin: auto;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 22px;
      height: 12px;
    }
    span {
      position: absolute;
      display: block;
      width: 100%;
      height: 1px; // 2 for bolder
      background-color: #2b2929;
      border-radius: 1px;
      transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

      &:first-of-type {
        top: 0;
      }
      &:last-of-type {
        bottom: 0;
      }
    }
    &.active,
    .menu-icon__cheeckbox:checked + div {
      span {
        &:first-of-type {
          transform: rotate(45deg);
          top: 6px; //5 for bolder
        }
        &:last-of-type {
          transform: rotate(-45deg);
          bottom: 5px;
        }
      }
    }

    &.active:hover span:first-of-type,
    &.active:hover span:last-of-type,
    &:hover .menu-icon__cheeckbox:checked + div span:first-of-type,
    &:hover .menu-icon__cheeckbox:checked + div span:last-of-type {
      width: 22px;
    }

    &:hover {
      // no need hover effect on mobile.
      @media (min-width: 1024px) {
        span:first-of-type {
          width: 26px;
        }

        span:last-of-type {
          width: 12px;
        }
      }
    }
  }
`;

export const customStyles = {
  content: {
    top: "0",
    left: "0",
    right: "auto",
    bottom: "auto",
    width: "100%",
    height: "100%",
    marginRight: "-50%",
    background: "transparent",
    overflow: "hidden",
    position: "fixed",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.3)",
  },
};
