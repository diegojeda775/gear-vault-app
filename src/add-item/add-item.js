import React, { Component } from 'react'

export default class AddItem extends Component {

    handleSubmit = e => {
        e.preventDefault()
        const newItem = {
            id: this.props.items.length,
            name: e.target['name'].value,
            brand: e.target['brand'].value,
            serial_number: e.target['serial'].value,
            price: e.target['price'].value,
            purchase_date: e.target['date'].value,
            purchase_place: e.target['place'].value
        }

        this.props.addItems(newItem);
        this.props.history.push('/list');
    }

    goList = to => {
        this.props.history.push('/list');
    }

    render() {
        return (
            <div>
                <form> 
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" />
                    <br />
                    <label htmlFor="brand">Brand</label>
                    <input type="text" id="brand" name="brand" />
                    <br />
                    <label htmlFor="serial">Serial Number</label>
                    <input type="text" id="serial" name="serial" />
                    <br />
                    <label htmlFor="price">Price</label>
                    <input type="number" id="price" name="price" min="0" step="any" />
                    <br />
                    <label htmlFor="date">Purchase Date</label>
                    <input type="date" id="date" name="date" min="1990-01-01" />
                    <br />
                    <label htmlFor="place">Purchase Place</label>
                    <input type="text" id="place" name="place" />
                </form>
                <div>
                    <button type='submit' onClick={this.handleSubmit}>Save</button>
                    <button onClick={this.goList}>Cancel</button>
                </div>
            </div>
        )
    }
}
