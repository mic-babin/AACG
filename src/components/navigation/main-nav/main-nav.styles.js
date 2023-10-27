import { motion } from "framer-motion"
import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--teal);

  .search-input {
    position: absolute;
    top: 0px;
    right: 0;
    width: 300px;
    height: 50px;
    background-color: var(--teal);
    color: #ffffff;
    border-color: #ffffff;
  }

  ::placeholder {
    color: #ffffff;
    opacity: 1; /* Firefox */
  }

  .hide {
    padding: 0;
    margin: 0;
    width: 0;
  }

  .search-results-wrapper {
    position: absolute;
    top: 30px;
    right: 0;
    display: block;
    width: 300px;
    margin: 0;
    padding: 0.75rem 1.5rem 0.5rem 0.75rem;
    -webkit-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
    color: black;
    border: 1.5px solid black;
    border-radius: 4px;
    outline: 0;
    background-color: #ffffff;
    // font-family: $font-secondary !important;
    font-weight: 500;
    font-size: 13px !important;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.2);

    ul {
      list-style: none !important;
      padding: 0 15px;

      li {
        margin: 0;
        cursor: pointer;
        padding: 15px;
      }
    }
  }

  .close-icon {
    position: absolute;
    height: 25px;
    width: 25px;
    top: 12px;
    right: 15px;
  }

  .p-holder {
    -webkit-transition: all 0.2s ease-out;
    transition: all 0.2s ease-out;
    transition-delay: 0.1s;
  }

  .small-text {
    font-size: 12px !important;
    font-weight: 400 !important;
  }
`

export const Logo = styled(motion.img)`
  height: 4rem;
`

export const LinkList = styled.div`
  display: flex;
`

export const Button = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 32px;

  .link {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    text-decoration: none;
    transition: all 0.2s ease;
    font-weight: 400;
    color: #ffffff;

    &:hover {
      font-weight: 500;
      color: var(--blue);
    }

    @media (max-width: 1249px) {
      font-size: 12px;
      letter-spacing: 2.4px;
    }

    &.cta {
      display: inline-block;
      border: 1px solid #ffffff;
      padding: 0.66rem 2.3rem;
      margin: 0;
      text-decoration: none;
      border-radius: 30px;
      background: transparent;
      color: #ffffff;
      font-size: 14px;
      cursor: pointer;
      text-align: center;
      transition: background-color 150ms ease-in-out, transform 50ms ease;
      -webkit-appearance: none;
      -moz-appearance: none;

      &:hover {
        background: #ffffff;
        color: var(--teal);
      }

      &:active {
        transform: scale(0.99);
      }
    }
  }
`

export const SearchInput = styled(motion.div)`
  width: 0;
`
export const SearchWrapper = styled.span``
