import React from 'react'
import Messages from "./en.json"

const FormatText = ({text}) => {
  const result = Messages[text]
  return `${result}`
}

export default FormatText