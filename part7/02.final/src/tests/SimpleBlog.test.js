import React from 'react'
import SimpleBlog from './SimpleBlog'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'

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

test('clicking the button calls event handler once', () => {
  const simpleBlog = {
    title: 'alguma coisa',
    author: 'alguma pessoa',
    likes: 100
  }

  const mockHandler = jest.fn()

  const { getByText } = render(
    <SimpleBlog blog={simpleBlog} onClick={mockHandler}/>
  )

  const button = getByText('like')
  fireEvent.click(button)
  fireEvent.click(button)
  //fireEvent.click(button)

  expect(mockHandler.mock.calls.length).toBe(2)

})
