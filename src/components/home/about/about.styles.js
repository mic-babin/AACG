import styled from "styled-components"

export const Style = styled.div`
  h2 {
    font-weight: 500 !important;
    line-height: 1.5;
  }

  .bottom-line {
    border-bottom: 1.5px solid black;
  }

  .beige-2 {
    position: absolute;
    top: 0px;
    left: 190px;
    z-index: -1;
  }

  @media only screen and (max-width: 992px) {
    .beige-2 {
      position: absolute;
      top: 100px;
      left: 140px;
      z-index: -1;
    }
  }
`
