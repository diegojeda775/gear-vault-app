import React from 'react'
import ReactDOM from 'react-dom'
import HeaderNav from './nav-header'
import { BrowserRouter } from 'react-router-dom'

it('renders without crashing', () => {
  const header = document.createElement('header')
  ReactDOM.render(
    <BrowserRouter>
      <HeaderNav />
    </BrowserRouter>,
    header
  )

expect(header.querySelector('h1').textContent).toBe('Gear Vault')

  ReactDOM.unmountComponentAtNode(header)
})