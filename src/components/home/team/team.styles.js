import styled from "styled-components"
import { motion } from "framer-motion"

export const Style = styled(motion.div)`
  h4 {
    font-size: 25px !important;
    font-weight: 500 !important;
    letter-spacing: 0 !important;
  }

  button {
    background: none;
    border: none;
    text-align: left;
  }

  .col-md-6:nth-child(2n) {
    transform: translateY(100px);
  }

  p {
    font-weight: 400 !important;
  }

  .top-line {
    border-top: 1px solid black;
  }

  .small {
    font-size: 13px !important;
    letter-spacing: 0;
  }

  .contact {
    font-size: 13px !important;
    font-weight: 600 !important;
    letter-spacing: 1px;
  }

  .up {
    transform: translateY(-5px);
  }

  .bg-blue {
    background-color: var(--blue);
    height: 382px;
  }

  .pb-200 {
    padding-bottom: 200px;
  }

  .equipe-collapsible:hover {
    background-color: transparent;
  }
  @media only screen and (max-width: 575px) {
    .pb-200 {
      padding-bottom: 0px !important;
    }
  }

  .pink-3 {
    position: absolute;
    top: 100px;
    left: 170px;
    z-index: -1;
  }
  .beige-3 {
    position: absolute;
    top: 1000px;
    left: -80px;
    z-index: -1;
  }
  .teal-1 {
    position: absolute;
    top: 1330px;
    left: 130px;
    z-index: -1;
  }

  .employee-picture {
    object-fit: cover !important;
    object-position: center center;
    height: 382px;
  }

  a {
    color: black !important;

    &:hover {
      color: var(--teal) !important;
    }
  }

  .collapse {
    height: 0%;
    overflow: hidden;
    transition: height 0.3s ease-in;
    &.show {
      height: 100%;
      transition: height 0.3s ease-in;
    }
  }

  @media only screen and (max-width: 1399px) {
    .bg-blue,
    .employee-picture {
      height: 316px;
    }
  }
  @media only screen and (max-width: 1199px) {
    .bg-blue,
    .employee-picture {
      height: 250px;
    }
  }

  @media only screen and (max-width: 991px) {
    .p-header {
      padding-top: 0 !important;
    }
    .bg-blue,
    .employee-picture {
      height: 350px;
    }
  }

  @media only screen and (max-width: 767px) {
    .col-md-6:nth-child(2n) {
      transform: translateY(0px);
    }
    .bg-blue,
    .employee-picture {
      height: 576px;
    }
  }

  @media only screen and (max-width: 575px) {
    .bg-blue,
    .employee-picture {
      height: 418px;
    }
  }
  @media only screen and (max-width: 375px) {
    .bg-blue,
    .employee-picture {
      height: 369px;
    }
  }
  @media only screen and (max-width: 360px) {
    .bg-blue,
    .employee-picture {
      height: 350px;
    }
  }
`
