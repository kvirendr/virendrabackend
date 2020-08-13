import React, { Component } from 'react';
import StockComponentService from '../services/StockComponentService';
class DisplayComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            stocks: []
        }
        this.addStock = this.addStock.bind(this);
        this.editStock = this.editStock.bind(this);
    }

    editStock(id) {
        this.props.history.push('/update-stock/${id}');
    }

    componentDidMount() {
        StockComponentService.display().then(res => {
            this.setState({ stocks: res.data })
        });
    }

    addStock() {
        this.props.history.push('/add-stock');
    }
    render() {
        return (
            <div>
                <h2 className="text-centre">Display Stocks</h2>
                <button className="btn btn-primary" onClick={this.addStock}>Add Stock</button>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Stock Number</th>
                            <th>Stock Name</th>
                            <th>Purchasing Price</th>
                            <th>Purchase Date</th>
                            <th>Selling Price</th>
                            <th>Selling Date</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.stocks.map(
                                stock =>
                                    <tr key={stock.id}>
                                        <td>{stock.stockNumber}</td>
                                        <td>{stock.stockName}</td>
                                        <td>{stock.purchasingPrice}</td>
                                        <td>{stock.purchaseDate}</td>
                                        <td>{stock.sellingPrice}</td>
                                        <td>{stock.sellingDate}</td>
                                        <td>{stock.quantity}</td>
                                        <td>
                                            <button onClick={() => this.editStock(stock.id)} className="btn btn-info">Update</button>
                                        </td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default DisplayComponent;