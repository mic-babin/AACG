import styled from "styled-components"

export const Style = styled.div`
  .bio-carousel-wrapper {
    z-index: 2;
    transform: translateY(0px);
    height: 760px !important;
    width: 645px !important;
    img {
      height: 760px !important;
      width: 645px !important;
      object-fit: cover !important;
    }
    .caption {
      font-size: 10px !important;
    }
  }

  .dots {
    height: 12px;
    width: 12px;
    border: 1px solid white;
    padding: 0;
    margin: 2rem 0.5rem;
    transform: translateY(-40px);
    &.active {
      background-color: white;
    }
  }
  @media only screen and (max-width: 1399px) {
    .bio-carousel-wrapper {
      width: 546px !important;
      img {
        width: 546px !important;
      }
    }
  }
  @media only screen and (max-width: 1199px) {
    .bio-carousel-wrapper {
      width: 615px !important;
      img {
        width: 615px !important;
      }
    }
  }

  @media only screen and (max-width: 992px) {
    .bio-carousel-wrapper {
      width: 100vw !important;
      img {
        width: 100vw !important;
      }
    }
  }

  @media only screen and (max-width: 575px) {
    .bio-carousel-wrapper {
      height: 92vh !important;

      img {
        height: 92vh !important;
      }
    }
  }

  .red-3 {
    position: absolute;
    top: 550px;
    right: -80px;
    z-index: 2;
  }
`
