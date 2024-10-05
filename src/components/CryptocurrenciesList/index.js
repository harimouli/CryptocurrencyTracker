import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    currenyList: [],
    isLoading: true,
  }
  componentDidMount() {
    this.getCurrencyList()
  }
  getCurrencyList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
      id: eachData.id,
      currencyLogo: eachData.currency_logo,
    }))
    this.setState({currenyList: updatedData, isLoading: false})
  }
  renderCryptocurrenciesList() {
    const {currenyList} = this.state
    return (
      <div className="cryptocurrency-container">
        <h1 className = "main-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="main-image"
        />

        <ul className="cryptocurrency-list-container">
          <div className="attributes-container">
            <p>Coin Type</p>
            <div className="type-container">
              <p>USD</p>
              <p>EURO</p>
            </div>
          </div>
          {currenyList.map(eachItem => (
            <CryptocurrencyItem key={eachItem.id} eachItem={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
  render() {
    const {isLoading} = this.state
    return (
      <div className="main-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          this.renderCryptocurrenciesList()
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
