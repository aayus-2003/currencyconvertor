import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'
import InputBox from './components/Input'

function App() {

  const [amount, setAmount] = useState('')
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [covertAmount, setConcertAmount] = useState('')

  const currencyInfo = useCurrencyInfo(from)
  const option = Object.keys(currencyInfo)

  const convert = () => {
    setConcertAmount(amount * currencyInfo[to])
  }

  const swap = () => {
    setAmount(covertAmount)
    setConcertAmount(amount)
    setFrom(to)
    setTo(from)
  }
  
  const img  = 'https://wallpapers.com/images/hd/dark-background-b59iy2towqy5yrgb.jpg'

  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundImage: `url('${img}')`,
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      onSubmit={(e) => {
                          e.preventDefault();
                          convert()
                         
                      }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={amount}
                              selectCurrency={from}
                              onCurrencyChange={(curr) => setFrom(curr)}
                              onAmountChange={(amount) => setAmount(amount)}
                              currencyOption={option}
                              
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}

                              
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={covertAmount}
                              selectCurrency={to}
                              onCurrencyChange={(curr) => setTo(curr)}
                              currencyOption={option}
                              onAmountDisable
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button>
                  </form>
              </div>
          </div>
      </div>
  );

}

export default App
