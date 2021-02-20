import './App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderNav from './nav-header/nav-header';
import ListMain from './list-main/list-main';
import List from './list/list';
import Instructions from './instructions/instructions';
import About from './about/about';
import AddItem from './add-item/add-item';
import itemsContext from './items-context'
import config from './config';



class App extends Component {
 
  state = {
    items: []
  }
  
  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/items`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      }
    })
      .then( res => {
        if(!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(res => {
        this.setState({
          items: res
        })
      })
      .catch(error => {
        console.log({ error })
      })
  }
  

  handleAddItem = item => {
    this.setState({
      items: [
        ...this.state.items,
        item
      ]
    })
  }

  handleDeleteItem = itemId => {
    this.setState({
      items: this.state.items.filter(it => it.id !== itemId)
    })
  }
  

  render() {
    const value = {
      items: this.state.items,
      addItem: this.handleAddItem,
      deleteItem: this.handleDeleteItem
    }
    return (
      <itemsContext.Provider value={value}>
        <div className='App'>
          <HeaderNav />
          <main className='app-main' >
            <Route 
              exact
              path='/'
              component={Instructions}
            />
            <Route 
              exact
              path='/list'
              component={List}
            />
            <Route 
              exact
              path='/list/:list_id'
              component={ListMain}
            />
            <Route 
              path='/about'
              component={About}
            />
            <Route 
              path='/add-item'
              component={AddItem}
            />
          </main>
        </div>
      </itemsContext.Provider>
    );
  }
  
}

export default App;
