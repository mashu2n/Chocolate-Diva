import React, { Component } from 'react';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items:[
                {
                    id:0,
                    foodItem: "chocolate covered strawberries and cheese cake bites",
                    image: "Assets/images/choc-gift1.webp",
                    price: "$35"
                },
                {
                    id:1,
                    foodItem: "chocolate covered marshmallow bars",
                    image: "Assets/images/choc-gift2.webp",
                    price: "$10"
                },
                {
                    id:2,
                    foodItem: "chocolate covered party favor treats",
                    image: "Assets/images/choc-gift3.webp",
                    price: "$45"
                },
                {
                    id:3,
                    foodItem: "chocolate covered pretzels",
                    image: "Assets/images/choc-gift4.webp",
                    price: "$13"
                },
                {
                    id:4,
                    foodItem: "chocolate covered gift set",
                    image: "Assets/images/choc-gift5.webp",
                    price: "$30"
                },
                {
                    id:5,
                    foodItem: "chocolate covered donut and cake pops assortment",
                    image: "Assets/images/choc-gift6.webp",
                    price: "$40"
                },
                {
                    id:6,
                    foodItem: "chocolate covered peppers",
                    image: "Assets/images/choc-gift7.webp",
                    price: "$20"
                },
                {
                    id:7,
                    foodItem: "chocolate covered assorted fruit tray",
                    image: "Assets/images/choc-gift8.webp",
                    price: "$50"
                },
                {
                    id:8,
                    foodItem: "chocolate covered birthday treats",
                    image: "Assets/images/choc-gift9.webp",
                    price: "$35"
                },
            ]
            
        };
    }

    render() {
        const directory = this.state.items.map(item => {
            return (
                <div key={item.id} className="col">
                    <img src={item.image} alt={item.foodItem} />
                    <h2>{item.foodItem}</h2>
                    <p>{item.price}</p>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;