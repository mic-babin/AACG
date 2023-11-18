import styled from "styled-components"

export const Section = styled.section`
  .col-lg-4:nth-child(3n - 1) {
    transform: translateY(80px);
  }

  .row {
    padding-top: 50px;
    padding-bottom: 100px;
  }

  .pink-3 {
    position: absolute;
    // top: 200px;
    right: -120px;
    z-index: 0;
  }

  .wrapper {
    width: 100vw;
    overflow-x: hidden;
  }

  @media only screen and (max-width: 991px) {
    .col-lg-4:nth-child(2n) {
      transform: translateY(0px);
    }
  } ;
`
