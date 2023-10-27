import styled from "styled-components"

export const Style = styled.div`
  .f-row {
    display: flex;
    flex-wrap: wrap;
  }

  .f-col {
    flex: 1 0 18%;
    margin: 5px;

    color: black;
  }

  // ul {
  //   list-style: none;
  //   margin-left: 0;
  // }

  p {
    font-weight: 400 !important;
    font-size: 12px !important;
    line-height: 18px !important;
  }

  a {
    color: white !important;
    &:hover {
      color: var(--blue) !important;
      font-weight: bold;
    }
  }

  @media only screen and (max-width: 575px) {
    .footer-logo {
      max-width: 90%;
    }
  }
`
