import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class List extends Component {

    // handleList = list =>{
    //     return 
    // }
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
                        {this.props.items.map(item => {
                                if(item.id%2 === 0){
                                    return(
                                        <li key={item.id} className='list-item-dark'>
                                            <p>{item.name}</p>
                                            <p>{item.brand}</p>
                                            <p>{item.price}</p>
                                        </li>
                                    )
                                }else{
                                    return(
                                        <li key={item.id} className='list-item-light'>
                                            <p>{item.name}</p>
                                            <p>{item.brand}</p>
                                            <p>{item.price}</p>
                                        </li>
                                    )
                                }
                            }
                        )}
                    </ul>
                </div>
                
            </div>
        )
    }
}
