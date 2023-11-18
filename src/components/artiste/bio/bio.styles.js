import { styled } from "styled-components"

export const Section = styled.div`
  .bio-wrapper {
    padding-top: 110px;
  }
  div {
    font-size: 14px !important;
    font-weight: 300 !important;
  }

  strong {
    font-weight: 600 !important;
  }

  .container {
    z-index: 2 !important;
  }

  h1 {
    padding-top: 150px;
    line-height: 180px;
    max-width: 800px;
  }

  h2 {
    font-weight: 400 !important;
  }

  .p-title {
    padding-top: 340px;
  }

  @media only screen and (max-width: 767px) {
    .p-title {
      padding-top: 390px;
    }
  }

  .col-4,
  .col-8 {
    padding: 0.9rem 0;
  }

  .b-line {
    border-bottom: 1px solid white;
  }

  .red-2 {
    position: absolute;
    top: 110px;
    left: -30px;
    z-index: -1;
  }

  .pink-2 {
    position: absolute;
    top: 800px;
    right: 100px;
    z-index: 0;
  }

  .first-letter-capital {
    display: inline-block; /* Thanks to Fanky (https://stackoverflow.com/users/2095642/fanky) */
    text-transform: lowercase;
  }

  .first-letter-capital::first-letter {
    text-transform: uppercase;
  }

  @media only screen and (max-width: 1199px) {
    .ps-7 {
      padding-left: 0 !important;
    }

    .ps-6 {
      padding-left: 0 !important;
    }

    .row {
      margin: auto !important;
    }
  }

  @media only screen and (max-width: 991px) {
    .pink-2 {
      top: 1200px;
    }
  }

  @media only screen and (max-width: 575px) {
    .bio-wrapper {
      padding-top: 30px;
    }
    h1 {
      font-size: 50px !important;
    }
    .p-title {
      padding-top: 360px;
    }
  }

  #fade-right {
    opacity: 0;
  }
`
