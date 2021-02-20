import React, { Component } from 'react';
import itemsContext from '../items-context';
import config from '../config';

export default class AddItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: null,
            brand: null,
            serial_number: null,
            price: null,
            purchase_date: null,
            purchase_place: null
        }

    }

    static contextType = itemsContext;

    handleSubmit = e => {
        e.preventDefault()
        
        const newItem = {
            name: this.state.name,
            brand: this.state.brand,
            serial_number: this.state.serial_number,
            price: this.state.price,
            purchase_date: this.state.purchase_date,
            purchase_place: this.state.purchase_place
        }

        fetch(`${config.API_ENDPOINT}/items`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
        .then(res => {
            if (!res.ok){
                return res.json().then(e => Promise.reject(e))
            }
            return res.json()
        })
        .then(item => {
            this.context.addItem(item);
            this.props.history.push('/list');
        })
        .catch(error => {
            console.log({ error })
        })
    }

    goList = to => {
        this.props.history.push('/list');
    }

    handleChange = e => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // componentDidMount(){
    //     const createdId = this.props.lth + 1;
    //     this.setState({
    //         id: createdId
    //     })
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={this.handleChange} required/>
                    <br />
                    <label htmlFor="brand">Brand</label>
                    <input type="text" id="brand" name="brand" onChange={this.handleChange}/>
                    <br />
                    <label htmlFor="serial">Serial Number</label>
                    <input type="text" id="serial" name="serial_number" onChange={this.handleChange} required/>
                    <br />
                    <label htmlFor="price">Price</label>
                    <input type="number" id="price" name="price" min="0" step="any" onChange={this.handleChange} required/>
                    <br />
                    <label htmlFor="date">Purchase Date</label>
                    <input type="date" id="date" name="purchase_date" min="1990-01-01" onChange={this.handleChange} required/>
                    <br />
                    <label htmlFor="place">Purchase Place</label>
                    <input type="text" id="place" name="purchase_place" onChange={this.handleChange}/>
                </form>
                <div>
                    <button type='submit' onClick={this.handleSubmit}>Save</button>
                    <button onClick={this.goList}>Cancel</button>
                </div>
            </div>
        )
    }
}
