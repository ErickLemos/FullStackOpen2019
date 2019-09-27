import React from 'react'
import SimpleBlog from './SimpleBlog'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'

test('renders content', () => {
  const simpleBlog = {
    title: 'alguma coisa',
    author: 'alguma pessoa',
    likes: 100
  }

  const component = render(
    <SimpleBlog blog={simpleBlog}></SimpleBlog>
  )

  expect(component.container).toHaveTextContent('alguma coisa')
  expect(component.container).toHaveTextContent('alguma pessoa')
  expect(component.container).toHaveTextContent(100)
})
