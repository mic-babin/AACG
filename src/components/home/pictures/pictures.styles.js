import styled from "styled-components"

export const Style = styled.div`
  .move-down {
    transform: translateY(120px);
  }

  @media only screen and (max-width: 1399px) {
    .img-2 {
      height: 700px !important;
      object-fit: cover !important;
    }
  }

  .img-1 {
    height: 600px !important;
    width: 100% !important;
    object-fit: cover;
  }
  .img-2 {
    height: 775px !important;
    max-width: 600px;
    object-fit: cover !important;
  }
  .red-1 {
    position: absolute;
    top: 330px;
    left: -200px;
    z-index: 1;
  }

  .caption-2 {
    max-width: 600px;
  }
`
