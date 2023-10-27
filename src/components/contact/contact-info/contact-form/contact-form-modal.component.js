import React from "react"
import { ModalCard, ModalButton } from "./contact-form.styles"

const ContactFormModal = ({ show, handleClose }) => {
  return (
    <ModalCard show={show} onHide={handleClose} centered>
      <ModalCard.Body>
        <div className="py-4 ">
          <h1 className="text-center">Merci</h1>
          <p className="px-3 text-center pt-4 mb-0">
            Merci, nous traitons votre demande et vous recevrez une réponse sous
            peu.
          </p>
        </div>
        <ModalButton className="pe-3" onClick={handleClose}>
          Fermer
        </ModalButton>
      </ModalCard.Body>
    </ModalCard>
  )
}

export default ContactFormModal
