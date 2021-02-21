import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import List from './list'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <List />
    </BrowserRouter>,
    div
  )


expect(div.querySelector('button').textContent).toBe('Add Item')
  ReactDOM.unmountComponentAtNode(div)
})