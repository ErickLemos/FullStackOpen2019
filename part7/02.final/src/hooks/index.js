import { useState } from 'react'

// const counter = userCounter()
export const useCounter = () => {
  const [value, setValue] = useState(0)

  const increase = () => {
    setValue(value + 1)
  }

  const decrease = () => {
    setValue(value - 1)
  }

  const zero = () => {
    setValue(0)
  }

  return {
    value,
    increase,
    decrease,
    zero
  }
}

// const name = useField('text')
// <input {...name} />
export const useField = (type) => {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onSubmit = () => {
    setValue('')
  }

  return {
    type,
    value,
    onChange,
    onSubmit
  }
}
