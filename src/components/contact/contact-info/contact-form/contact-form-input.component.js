import React from "react"
import { Input, InputGroup, TextArea } from "./contact-form.styles"

const ContactFormInput = ({ field, handleChange, fields, errors }) => {
  return (
    <InputGroup>
      {field.type !== "textarea" ? (
        <Input
          key={field.id}
          type={field.type}
          placeholder={field.placeHolder}
          required={field.required}
          onChange={e => handleChange(e)}
          name={field.name}
          value={fields[field.name.toLowerCase()]}
        />
      ) : (
        <TextArea
          rows="7"
          required={false}
          onChange={e => handleChange(e)}
          name={field.name}
          value={fields[field.name]}
          placeholder={field.placeHolder}
        />
      )}

      {errors[field.name] && <span>{errors[field.name]}</span>}
    </InputGroup>
  )
}

export default ContactFormInput
