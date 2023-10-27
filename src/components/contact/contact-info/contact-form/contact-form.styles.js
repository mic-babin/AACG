import styled from "styled-components"
import Modal from "react-bootstrap/Modal"

export const ModalButton = styled.p`
  cursor: pointer;
  text-align: right;
  font-weight: bold;
  color: #2b2929;
  font-size: 20px;
`

export const ModalCard = styled(Modal)`
  cursor: default;
  .modal-content {
    background-color: #eeede8;
  }
`

export const Section = styled.section`
  .modal-body {
    background-color: var(--teal);
  }
`

export const InputGroup = styled.div`
  span {
    color: red;
  }
`
export const TextArea = styled.textarea`
  /* width: 100%;

  height: 300px;
  border: 1px solid #2b2929;
  padding: 1.35rem 2.2rem;
  background-color: #f7f7f1;
  @media (max-width: 576px) {
    padding: 1.35rem 1.25rem;
  }

  &:focus {
    border: 2px solid #2b2929;
    outline: none !important;
  }

  ::placeholder {
    font-size: 14px;
    letter-spacing: 2.8px;
    color: #2b2929;
    text-transform: uppercase;

    @media (max-width: 576px) {
      font-size: 12px;
      letter-spacing: 0.2px;
    }
  } */
`

export const Input = styled.input`
  /* width: 100%;
  border: 1px solid #2b2929;
  padding: 1.35rem 2.2rem;
  background-color: #f7f7f1;

  @media (max-width: 576px) {
    padding: 1.35rem 1.25rem;
  }

  &:focus {
    border: 2px solid #2b2929;
    outline: none !important;
  }

  ::placeholder {
    font-size: 14px;
    letter-spacing: 2.8px;
    color: #2b2929;
    text-transform: uppercase;

    @media (max-width: 576px) {
      font-size: 12px;
      letter-spacing: 0.2px;
    }
  } */
`
