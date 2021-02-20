import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import itemsContext from '../items-context';
import './list.css';

export default class List extends Component {

    static contextType = itemsContext
  
    render() {
        return (
            <div className='list'>

                <header className='list-header'>
                    <h4>List of items</h4>
                    <Link to='/add-item'>
                        <button>Add Item</button>
                    </Link>
                </header>

                <div className='list-items'>
                    <ul className='list-ul'>
                        {this.context.items.map((item, i) => {
                                return(
                                    <Link key={i} to={`/list/${item.id}`}>
                                        <div key={item.id} className='list-div'>
                                            <hr />
                                            <li className='list-item-dark'>
                                                <p>{item.name}</p>
                                                <p>{item.brand}</p>
                                                <p>${item.price}</p>
                                            </li>
                                        </div>
                                    </Link>
                                )
                                
                            }
                        )}
                    </ul>
                </div>
                
                
            </div>
        )
    }
}
