import styled from "styled-components"

export const Style = styled.div`
  /* overflow-x: hidden; */

  button {
    font-size: 14px !important;
    letter-spacing: 1px !important;
    font-weight: 600 !important;
  }

  .img-position:first-of-type {
    .img {
      position: absolute;
      top: -50px;
      left: 100px;
      height: 200px;
      width: 200px;
      object-fit: cover;
      z-index: 1;
    }
  }
  .img-position:nth-of-type(2) {
    .img {
      position: absolute;
      top: 75px;
      left: 350px;
      height: 175px;
      width: 175px;
      object-fit: cover !important;
      z-index: 1;
    }
  }
  .img-position:nth-of-type(3) {
    .img {
      position: absolute;
      top: -75px;
      right: 240px;
      height: 275px;
      width: 275px;
      object-fit: cover;
      z-index: 1;
    }
  }
  .img-position:nth-of-type(4) {
    .img {
      position: absolute;
      top: 300px;
      left: 0px;
      height: 275px;
      width: 275px;
      object-fit: cover;
      z-index: 1;
    }
  }
  .img-position:nth-of-type(5) {
    .img {
      position: absolute;
      top: 500px;
      right: 280px;
      height: 200px;
      width: 200px;
      object-fit: cover;
      z-index: 1;
    }
  }
  .img-position:nth-of-type(6) {
    .img {
      position: absolute;
      top: 240px;
      right: 0px;
      height: 220px;
      width: 220px;
      object-fit: cover;
      z-index: 1;
    }
  }

  .red-5 {
    position: absolute;
    top: 00px;
    right: -190px;
    z-index: 0;
  }

  @media only screen and (max-width: 1399px) {
    .img-position:first-of-type {
      .img {
        top: -10px;
      }
    }
    .img-position:nth-of-type(2) {
      .img {
        top: 115px;
      }
    }
    .img-position:nth-of-type(3) {
      .img {
        top: -35px;
      }
    }
    .img-position:nth-of-type(4) {
      .img {
        top: 340px;
      }
    }
    .img-position:nth-of-type(5) {
      .img {
        top: 540px;
        right: 180px;
      }
    }
    .img-position:nth-of-type(6) {
      .img {
        top: 280px;
      }
    }
  }

  @media only screen and (max-width: 991px) {
    .img-position:first-of-type {
      .img {
        top: -10px;
        height: 180px;
        width: 180px;
      }
    }
    .img-position:nth-of-type(2) {
      .img {
        top: 115px;
        display: none;
      }
    }
    .img-position:nth-of-type(3) {
      .img {
        top: -35px;
        right: 140px;
        height: 220px;
        width: 220px;
      }
    }
    .img-position:nth-of-type(4) {
      .img {
        top: 340px;
        height: 220px;
        width: 220px;
      }
    }
    .img-position:nth-of-type(5) {
      .img {
        top: 590px;
        right: 130px;
        height: 160px;
        width: 160px;
      }
    }
    .img-position:nth-of-type(6) {
      .img {
        top: 280px;
        height: 180px;
        width: 180px;
      }
    }
    .red-5 {
      top: 1100px;
    }
  }

  @media only screen and (max-width: 767px) {
    .img-position:first-of-type {
      img {
        top: 80px;
        height: 180px;
        width: 180px;
      }
    }

    .img-position:nth-of-type(3) {
      img {
        top: 255px;
        right: 70px;
        height: 220px;
        width: 220px;
      }
    }
    .img-position:nth-of-type(4) {
      img {
        top: 490px;
        height: 220px;
        width: 220px;
      }
    }
    .img-position:nth-of-type(5) {
      img {
        top: 740px;
        right: 70px;
      }
    }
    .img-position:nth-of-type(6) {
      img {
        top: 480px;
        height: 180px;
        width: 180px;
      }
    }
    .red-5 {
      top: 1900px;
    }
  }

  @media only screen and (max-width: 575px) {
    .img-position:first-of-type {
      img {
        display: none;
      }
    }

    .img-position:nth-of-type(3) {
      img {
        top: 155px;
        right: 70px;
        height: 220px;
        width: 220px;
      }
    }
    .img-position:nth-of-type(4) {
      img {
        top: 540px;
        height: 220px;
        width: 220px;
      }
    }
    .img-position:nth-of-type(5) {
      img {
        display: none;
      }
    }
    .img-position:nth-of-type(6) {
      img {
        display: none;
      }
    }
    .red-5 {
      top: 1700px;
    }
  }

  @media only screen and (max-width: 575px) {
    .bg-pink {
      // height: 100vh !important;
    }
  }
`
