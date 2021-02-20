import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import itemsContext from '../items-context';


export default class ListMain extends Component {
    
    static contextType = itemsContext

    render() {
        const { list_id } = this.props.match.params;
        const item = this.context.items.find(it => it.id == list_id) || { content: ''}        
        return (
            <div className='item-main'>
                <h4>{item.name}</h4>
                <h5>Brand: {item.brand}</h5>
                <h5>Price: ${item.price}</h5>
                <h5>Serial Num: {item.serial_number}</h5>
                <h5>Purchase Date: {item.purchase_date}</h5>
                <h5>Purchase Place: {item.purchase_place}</h5>
                <div className='list-back-button'>
                    <Link to='/list'>
                        <button>Back</button>
                    </Link>
                </div>
            </div>
            
        )
    }
}
