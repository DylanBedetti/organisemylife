import React from "react"
import { render, fireEvent, cleanup } from "@testing-library/react"

import App from "./App"

// what do I actually care about when testing?
// press different buttons and different things get displayed?
// make CRUD actions and test if they happen

describe("true is truthy and false is falsy", () => {
  test("true is truthy", () => {
    expect(true).toBe(true)
  })

  test("false is falsy", () => {
    expect(false).toBe(false)
  })

  test("Renders without crashing", () => {
    const { getByText } = render(<App />)
    expect(getByText("Organise My Life")).toBeInTheDocument()
  })

  test("Loads TO DO's after button click", () => {
    const { getByText } = render(<App />)
    const button = getByText("TO DO's")
    fireEvent.click(button)
    expect(getByText("Add task")).toBeInTheDocument()
  })

  test("Loads Completed after button click", () => {
    const { getByText } = render(<App />)
    const button = getByText("Completed")
    fireEvent.click(button)
    expect(getByText("Add task")).toBeInTheDocument()
  })

  afterEach(cleanup)
})
