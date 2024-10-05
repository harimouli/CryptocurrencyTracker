import './index.css'

const CryptocurrencyItem = props => {
  const {eachItem} = props
  const {currencyName, usdValue, euroValue, id, currencyLogo} = eachItem
  return (
    <li className="currency-item">
      <div className="coin-image-coin-type">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="currency-type-container">
        <p className="currency-name">{usdValue}</p>
        <p className="currency-name">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
