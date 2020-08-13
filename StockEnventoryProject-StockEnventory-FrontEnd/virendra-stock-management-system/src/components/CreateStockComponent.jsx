import React, {Component} from 'react';
import StockComponentService from '../services/StockComponentService';
class CreateStockComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            stockNumber: '',
            stockName: '',
            purchasingPrice: '',
            purchaseDate: '',
            sellingPrice: '',
            sellingDate: '',
            quantity: ''
        }
        this.changeStockNumberHandler = this.changeStockNumberHandler.bind(this);
        this.changeStockNameHandler = this.changeStockNameHandler.bind(this);
        this.changePurchasingPriceHandler = this.changePurchasingPriceHandler.bind(this);  
        this.changePurchaseDateHandler = this.changePurchaseDateHandler.bind(this);
        this.changeSellingPriceHandler = this.changeSellingPriceHandler.bind(this);
        this.changeSellingDateHandler =  this.changeSellingDateHandler.bind(this);
        this.changeQuantityHandler = this.changeQuantityHandler.bind(this);

        this.saveStock = this.saveStock.bind(this);
    }

    saveStock = (e) =>{
        e.preventDefault();
        let stock = {stockNumber: this.state.stockNumber, stockName: this.state.stockName, purchasingPrice: this.state.purchasingPrice, purchaseDate: this.state.purchaseDate, sellingPrice: this.state.sellingPrice, sellingDate: this.state.sellingDate, quantity: this.state.quantity};
        console.log('stock =>' +JSON.stringify(stock));
        
        StockComponentService.createStock(stock).then(res =>{
            this.props.history.push("/stocks");
        });
    }

    cancel(){
        this.props.history.push("/stocks");
    }


    changeStockNumberHandler= (event) =>{ 
        this.setState({stockNumber: event.target.value});

    }

    changeStockNameHandler= (event) =>{
        this.setState({stockName: event.target.value});

    }
    changePurchasingPriceHandler= (event) =>{
        this.setState({purchasingPrice: event.target.value});

    }
    changePurchaseDateHandler= (event) =>{
        this.setState({purchaseDate: event.target.value});

    }
    changeSellingPriceHandler= (event) =>{
        this.setState({sellingPrice: event.target.value});
    }    

    changeSellingDateHandler= (event) =>{
        this.setState({sellingDate: event.target.value});
    } 

    changeQuantityHandler= (event) =>{
        this.setState({quantity: event.target.value});

    }
    render() {
        return (
            <div className = "container">
                <div className = "card col-md-6 offset-md-3 offset-md-3">
                      <h3 className = "text-centre">Create Stocks</h3>  
                      <div className = "card-body">
                          <form>
                              <div className = "form-group">
                                  <label>Stock Number(Asc):</label>
                                  <input placeholder = "Stock Number(Asc)" name = "stockNumber" className = "form-control"
                                  value={this.state.stockNumber} onChange={this.changeStockNumberHandler}></input>
                              </div>

                              <div className = "form-group">
                                  <label>Stock Name:</label>
                                  <input placeholder = "Stock Name" name = "stockName" className = "form-control"
                                  value={this.state.stockName} onChange={this.changeStockNameHandler}></input>
                              </div>

                              <div className = "form-group">
                                  <label>Purchasing Price:</label>
                                  <input placeholder = "Purchasing Price" name = "purchasingPrice" className = "form-control"
                                  value={this.state.purchasingPrice} onChange={this.changePurchasingPriceHandler}></input>
                              </div>

                              <div className = "form-group">
                                  <label>Purchase Date:</label>
                                  <input placeholder = "Purchase Date" name = "purchaseDate" className = "form-control"
                                   value={this.state.purchaseDate} onChange={this.changePurchaseDateHandler}></input>
                              </div>

                              <div className = "form-group">
                                  <label>Selling Price:</label>
                                  <input placeholder = "Selling Price" name = "sellingPrice" className = "form-control"
                                  value={this.state.sellingPrice} onChange={this.changeSellingPriceHandler}></input>
                              </div>

                              <div className = "form-group">
                                  <label>Selling Date:</label>
                                  <input placeholder = "Selling Date" name = "sellingDate" className = "form-control"
                                   value={this.state.sellingDate} onChange={this.changeSellingDateHandler}></input>
                              </div>


                              <div className = "form-group">
                                  <label>Quantity:</label>
                                  <input placeholder = "Quantity" name = "quantity" className = "form-control"
                                  value={this.state.quantity} onChange={this.changeQuantityHandler}></input>
                              </div>
                              <button className="btn btn-success" onClick={this.saveStock}>Save</button>
                              <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                          </form>    
                      </div> 
                </div>
                
            </div>
        );
    }
}

export default CreateStockComponent;