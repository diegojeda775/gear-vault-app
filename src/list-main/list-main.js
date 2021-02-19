import React, { Component } from 'react'


export default class ListMain extends Component {

    render() {
        const { list_id } = this.props.match.params || 1;
        const item = this.props.items.find(it => it.id == list_id)         
        return (
            <div className='item-main'>
                <h4>{item.name}</h4>
                <h5>Brand: {item.brand}</h5>
                <h5>Price: ${item.price}</h5>
                <h5>Serial Num: {item.serial_number}</h5>
                <h5>Purchase Date: {item.purchase_date}</h5>
                <h5>Purchase Place: {item.purchase_place}</h5>
            </div>
        )
    }
}
