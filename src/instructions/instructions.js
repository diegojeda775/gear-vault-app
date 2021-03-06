import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './instructions.css'

export default class Instructions extends Component {
    render() {
        return (
            <div>
                 <h4>Welcome to Gear Vault</h4>

                 <h6>
                    This is an web-app where you can keep information of your equipment/gear for tracking or insurance purposes!
                </h6>

                <h5>Instructions</h5>

                <h6>
                    In this web-app you'll be able to input items to a list where you can add the name, brand, price, serial number, date of purchase and place of purchase.
                    In addition, you will be able to remove and/or update existing items. There are few examples in the list which you can delete and add your own specifi items. 
                    Once in the List tab, you can access all the information of the desired item by clicking on the name.
                    If you would like to give it a try, please got to the "list" tab on the navigation menu or click the button below!
                </h6>
                <h6>
                    If you would like to know the inspiration behind this web-app, go to the "About" section on the navigation menu.
                </h6>
                <h6>
                    Thank you for visiting!
                </h6>

                <Link to='/list'>
                    <button className="start-button">Go to List</button>
                </Link>

            </div>
        )
    }
}
