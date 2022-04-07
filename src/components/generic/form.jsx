import React, { forwardRef } from "react"

export const Input = forwardRef((props, inputRef) => {
  return <input ref={props.inputRef} />
})