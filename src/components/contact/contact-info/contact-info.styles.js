import styled from "styled-components"

export const Section = styled.section`
  .p-holder {
    z-index: -1 !important;
    position: relative;
  }

  .beige-1 {
    position: absolute;
    top: 30px;
    right: 60px;
  }

  .red-1 {
    position: absolute;
    top: 350px;
    right: -130px !important;
  }

  .pink-1 {
    position: absolute;
    top: 600px;
    left: -70px !important;
  }

  .p-nav {
    width: 100vw;
    overflow-x: hidden;
  }

  @media only screen and (max-width: 767px) {
    h1 {
      font-size: 80px !important;
    }
  }

  @media only screen and (max-width: 575px) {
    h1 {
      font-size: 50px !important;
    }
    h2 {
      font-size: 22px !important;
    }
  }
`
