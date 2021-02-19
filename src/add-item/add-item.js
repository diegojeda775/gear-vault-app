import React, { Component } from 'react'

export default class AddItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: null,
            name: null,
            brand: null,
            serial_number: null,
            price: null,
            purchase_date: null,
            purchase_place: null
        }

    }

    handleSubmit = e => {
        e.preventDefault()
        
        const newItem = {
            id: this.state.id,
            name: this.state.name,
            brand: this.state.brand,
            serial_number: this.state.serial_number,
            price: this.state.price,
            purchase_date: this.state.purchase_date,
            purchase_place: this.state.purchase_place
        }

        this.props.addItems(newItem);
        this.props.history.push('/list');
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

    componentDidMount(){
        const createdId = this.props.lth + 1;
        this.setState({
            id: createdId
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" onChange={this.handleChange}/>
                    <br />
                    <label htmlFor="brand">Brand</label>
                    <input type="text" id="brand" name="brand" onChange={this.handleChange}/>
                    <br />
                    <label htmlFor="serial">Serial Number</label>
                    <input type="text" id="serial" name="serial_number" onChange={this.handleChange}/>
                    <br />
                    <label htmlFor="price">Price</label>
                    <input type="number" id="price" name="price" min="0" step="any" onChange={this.handleChange}/>
                    <br />
                    <label htmlFor="date">Purchase Date</label>
                    <input type="date" id="date" name="purchase_date" min="1990-01-01" onChange={this.handleChange}/>
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
