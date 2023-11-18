import styled from "styled-components"
export const Section = styled.section`
  .artist-card img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    object-position: center center;
  }

  @media only screen and (max-width: 1199px) {
    .artist-card img {
      height: 400px;
    }
  }

  .line {
    width: 100%;
    height: 1px !important;
    background-color: white;
  }

  .btn-filter {
    color: white;
    background-color: transparent;
    border: none !important;

    border-radius: 0 !important;
    padding-left: 0;
    padding-right: 0;
  }

  .arrow {
    height: 8px;
    width: auto;
  }

  ul {
    list-style: none;

    padding-left: 0;

    li {
      margin-left: 0;
      cursor: pointer;
      color: white;
      padding-bottom: 7px;
    }
  }

  .artist-card:nth-child(3n - 1) {
    transform: translateY(107px);
  }

  .first-letter-capital {
    display: inline-block; /* Thanks to Fanky (https://stackoverflow.com/users/2095642/fanky) */
    text-transform: lowercase;
  }

  .first-letter-capital::first-letter {
    text-transform: uppercase;
  }

  @media only screen and (max-width: 1399px) {
    .artist-card:nth-child(3n - 1) {
      transform: translateY(140px);
    }
  }

  @media only screen and (max-width: 991px) {
    .artist-card:nth-child(3n - 1) {
      transform: translateY(0px);
    }

    .artist-card:nth-child(2n) {
      transform: translateY(140px);
    }
  }

  @media only screen and (max-width: 767px) {
    .artist-card:nth-child(2n) {
      transform: translateY(0px);
    }
    .artist-card img {
      height: 600px;
    }
  }

  @media only screen and (max-width: 575px) {
    .artist-card:nth-child(2n) {
      transform: translateY(0px);
    }
    .artist-card img {
      height: 500px;
    }
  }

  .load-btn {
    height: 45px;
    width: auto;
    cursor: pointer;
  }

  .blue-2 {
    position: absolute;
    top: 230px;
    right: 30px;
    z-index: -1;
  }

  .beige-4 {
    position: absolute;
    top: 530px;
    left: 0px;
    z-index: -1;
  }

  .red-2 {
    position: absolute;
    top: 830px;
    right: -125px;
    z-index: -1;
  }
  .pink-5 {
    position: absolute;
    top: 2250px;
    left: -50px;
    z-index: -1;
  }

  .search {
    width: 350px;
    max-width: 100%;
  }

  .search-icon {
    transform: translate(-10px, -40px);
    height: 30px;
    width: 30px;
  }
`
