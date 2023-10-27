import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import MainNav from "../main-nav/main-nav.component"

const Header = () => {
  return (
    <HeaderWrapper>
      <MainNav />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled(motion.header)`
  position: fixed !important;
  top: 0;
  width: 100%;
  z-index: 10;
`

export default Header
