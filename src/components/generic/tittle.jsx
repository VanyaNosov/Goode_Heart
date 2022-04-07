import React from "react";
import styled from 'styled-components'

function Tittle(props) {
  return (
    <Text>{props.text}</Text>
  )
}

const Text = styled.h1`
  color: #191E47;
`
export default Tittle;