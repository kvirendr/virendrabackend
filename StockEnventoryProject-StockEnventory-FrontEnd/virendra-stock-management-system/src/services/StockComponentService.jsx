import axios from 'axios';
const STOCKCOMPONENT_API_BASE_URL = 'http://localhost:8075/api/v1/stocks';
class StockComponentService {
    display() {
        return axios.get(STOCKCOMPONENT_API_BASE_URL);
    }

    createStock(stock) {
        return axios.post(STOCKCOMPONENT_API_BASE_URL, stock);
    }

    displayStocksByName(stockName) {
        return axios.get(STOCKCOMPONENT_API_BASE_URL + '/stockName/' + '/' + stockName);

    }
    
    displayStockById(id){
        return axios.get(STOCKCOMPONENT_API_BASE_URL + '/id/' + '/' + id);
    }
    update(stocks){
       return axios.put(STOCKCOMPONENT_API_BASE_URL+ '/' +stocks) 
    }
}
export default new StockComponentService()