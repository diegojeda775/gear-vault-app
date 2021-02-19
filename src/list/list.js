import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './list.css';

export default class List extends Component {

  
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
                    <ul>
                        {this.props.items.map((item, i) => {
                                return(
                                    <div key={i} className='list-div'>
                                        <hr />
                                        <li key={item.id} className='list-item-dark'>
                                            <Link to={`/list/${item.id}`}>
                                                <p>{item.name}</p>
                                            </Link>
                                            <p>{item.brand}</p>
                                            <p>$ {item.price}</p>
                                        </li>
                                    </div>
                                )
                                
                            }
                        )}
                    </ul>
                </div>
                
            </div>
        )
    }
}
