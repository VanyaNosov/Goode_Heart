import React from "react";
import Tittle from "../generic/tittle.jsx";
import { Input } from "../generic/form.jsx"
import "./style.css"
import { useForm } from "react-hook-form";

function Form() {
  const { register, hundleSubmit, formState: { errors } } = useForm({
    mode: "onBlur",
  })
  return (
    <div>
      <Tittle text={'Заповніть форму'} />
      <div className="button_switch">
        <button className="physical_person_btn">Фіз.особа</button>
        <button className="legal_person_btn">Юр.особа</button>
        <Input inputRef={register} id="ім'я" type="text" name="ім'я" label="ім'я" />
      </div>
    </div>
  )
}

export default Form;