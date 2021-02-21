import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import config from '../config';
import itemsContext from '../items-context';
import './list-main.css'



export default class ListMain extends Component {
    
    static contextType = itemsContext

    handleDelete(id) {
        fetch(`${config.API_ENDPOINT}/items/${id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(() => {
            this.context.deleteItem(id);
            this.props.history.push('/list');
        })
        .catch( error =>{
            console.log({ error })
        })
    }

    render() {
        const { list_id } = this.props.match.params;
        // eslint-disable-next-line
        const item = this.context.items.find(it => it.id == list_id) || { content: ''};
        const _date = new Date(item.purchase_date).toLocaleDateString();     
        return (
            <div className='item-main'>
                <h4>{item.name}</h4>
                <h5>Brand: {item.brand}</h5>
                <h5>Price: ${item.price}</h5>
                <h5>Serial Num: {item.serial_number}</h5>
                <h5>Purchase Date: {_date}</h5>
                <h5>Purchase Place: {item.purchase_place}</h5>
                <div className='list-buttons'>
                    <div className='list-back-button'>
                        <Link to='/list'>
                            <button className="btn-back" type='button'>Back</button>
                        </Link>
                    </div>
                    <div className='list-delete-button'>
                        <button 
                            className="btn-del"
                            type='button'
                            disabled={item.content === '' ? true : false} 
                            onClick={() => this.handleDelete(item.id)}
                        >
                            Delete
                        </button>
                    </div>
                </div>
                
            </div>
            
        )
    }
}
