import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import ListMain from './list-main'

it('renders without crashing', () => {
    const props = {
        match: {
          params: {
            list_id: 'THIS_ITEM_ID'
          }
        }
      }
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <ListMain {...props}/>
    </BrowserRouter>,
    div
  )
expect(div.querySelector('button').textContent).toBe('Back')

  ReactDOM.unmountComponentAtNode(div)
})