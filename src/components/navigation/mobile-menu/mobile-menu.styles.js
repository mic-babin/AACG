import styled from "styled-components";
import { Link } from "gatsby";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  height: 100svh;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: end;
`;

export const MenuLinks = styled(motion.div)`
  padding-top: 115px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  height: 100%;
  background-color: #e7e3da;

  @media (max-width: 576px) {
    padding-top: 100px;
  }
`;

export const MenuLink = styled(Link)`
  color: #2b2929;
  text-decoration: none;
  text-transform: uppercase;
  padding: 0.5rem 0;
  font-size: 20px;
  letter-spacing: 4px;

  &:hover {
    color: #2b2929;
  }
`;
