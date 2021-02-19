import './App.css';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HeaderNav from './nav-header/nav-header';
import ListMain from './list-main/list-main';
import List from './list/list';
import Instructions from './instructions/instructions';
import About from './about/about';
import AddItem from './add-item/add-item';



class App extends Component {

  

  render() {
    
    const Items = [
      {
        id: 1,
        name: 'Mac Pro',
        brand: 'Apple',
        serial_number: 'afhjieugl568',
        price: 6600.00,
        purchase_date: '2020-11-18',
        purchase_place: 'Apple.com'
      },
      {
        id: 2,
        name: 'Fuji X-t4',
        brand: 'Fujifilm',
        serial_number: 'kuabfleubl768',
        price: 1600.00,
        purchase_date: '2021-01-11',
        purchase_place: 'Samy\'s Camera'
      },
      {
        id: 3,
        name: 'Sandisk Extreme SSD',
        brand: 'Sandisk',
        serial_number: 'balebfugb278',
        price: 159.59,
        purchase_date: '2020-12-24',
        purchase_place: 'Amazon.com'
      }
    ]

    function addItems(item) {
      Items.push(item);
    }

    return (
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
            render={(props) => <List {...props} items={Items}/>}
          />
          <Route 
            exact
            path='/list/:list_id'
            render={(props) => <ListMain {...props} items={Items}/>}
          />
          <Route 
            path='/about'
            component={About}
          />
          <Route 
            path='/add-item'
            render={(props) => <AddItem {...props} addItems={addItems} lth={Items.length}/>}
          />
        </main>
      </div>
    );
  }
  
}

export default App;
