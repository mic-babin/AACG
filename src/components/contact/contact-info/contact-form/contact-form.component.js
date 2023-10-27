import React, { useState } from "react"
import { useForm } from "../../../../utils/form.hook"
import { validate } from "../../../../utils/form.validators"
import { Section } from "./contact-form.styles"
import ContactFormInput from "./contact-form-input.component"
import ContactFormModal from "./contact-form-modal.component"

const ContactForm = () => {
  const [show, setShow] = useState(false)
  const { handleChange, fields, handleSubmit, errors } = useForm(
    validate,
    setShow
  )
  const contactForm = [
    {
      id: 1,
      type: "text",
      placeHolder: "Prénom*",
      required: true,
      name: "firstName",
    },
    {
      id: 2,
      type: "text",
      placeHolder: "Nom de famille*",
      required: true,
      name: "lastName",
    },
    {
      id: 3,
      type: "text",
      placeHolder: "Téléphone",
      required: false,
      name: "phone",
    },
    {
      id: 4,
      type: "email",
      placeHolder: "Courriel*",
      required: true,
      name: "email",
    },
    {
      id: 5,
      type: "textarea",
      placeHolder: "Message",
      required: false,
      name: "message",
    },
  ]

  const handleClose = () => setShow(false)

  return (
    <Section>
      <form className="pt-md-5 mt-md-5 mt-0 pe-sm-3 pe-lg-0">
        <div className="row ps-lg-5 pt-5 mt-5">
          {contactForm &&
            contactForm.map(field => (
              <div className="col-12 mb-3" key={field.id}>
                <ContactFormInput
                  field={field}
                  handleChange={handleChange}
                  fields={fields}
                  errors={errors}
                />
              </div>
            ))}
        </div>

        <div className="ps-5 pt-3 mb-4 d-flex justify-content-end">
          <button
            className="button-black mt-3"
            onClick={e => handleSubmit(e)}
            data-analytics="ContactForm"
          >
            Soumettre
          </button>
        </div>
      </form>
      <ContactFormModal show={show} handleClose={handleClose} />
    </Section>
  )
}

export default ContactForm
