import styled from "styled-components"

export const Style = styled.div`
  overflow: visible;

  .ovy {
    position: absolute;
    top: 0;
    left: 0;
    height: 800px !important;
    background-color: var(--teal);

    div {
      position: absolute;
    }
  }

  h1 {
    position: absolute;
    top: 250px;
    left: 0;
    width: 50vw;
    z-index: 2 !important;
    max-width: 725px;
  }

  @media only screen and (max-width: 1399px) {
    h1 {
      width: 55vw;
    }
  }

  @media only screen and (min-width: 992px) and(max-width: 1200px) {
    h1 {
      font-size: 63px !important;
      line-height: 85px;
    }
  }
  @media only screen and (max-width: 992px) {
    h1 {
      top: 120px;
      left: -12px;
      height: 800px !important;
      width: 100vw !important;
      padding-left: 10vw !important;
      padding-top: 20vh !important;
      background-color: #406b635b;
      margin: 0 !important;
      max-width: 100vw;
    }

    .scroll-down {
      bottom: 0px !important;
      padding-left: 9vw !important;
    }
  }

  @media only screen and (max-width: 767px) {
    h1 {
      padding-top: 22vh !important;
      line-height: 100px !important;
    }
  }
  @media only screen and (max-width: 575px) {
    h1 {
      padding-top: 22vh !important;
      line-height: 80px !important;
      padding-left: 1.5rem !important;
      height: 92vh !important;
    }
    .ovy {
      height: 92vh !important;
    }
  }

  @media only screen and (max-width: 400px) {
    h1 {
      padding-top: 17vh !important;
      line-height: 80px !important;
      padding-left: 1rem !important;
    }
  }

  .scroll-down {
    cursor: pointer;
    position: absolute;
    color: white;
    bottom: 120px;
    left: 0;
    width: 350px;
    z-index: 2 !important;
  }

  .container {
    z-index: 2;
  }

  .float {
    transform: translatey(0px);
    animation: float 4s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-5px);
    }
    100% {
      transform: translatey(0px);
    }
  }
`
