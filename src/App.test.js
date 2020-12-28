import React from 'react'
import { render } from '@testing-library/react'

import App from './App'

describe('true is truthy and false is falsy', () => {
  test('true is truthy', () => {
    expect(true).toBe(true)
  })

  test('false is falsy', () => {
    expect(false).toBe(false)
  })

  test('Renders without crashing', () => {
    const { getByText } = render(<App />)
    expect(getByText('Organise My Life')).toBeInTheDocument()
  })
})
