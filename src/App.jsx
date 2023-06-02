import { Box, Container, Grid, Typography } from '@mui/material'
import './App.css'
import InputAmount from './components/InputAmount'
import SelectCountry from './components/SelectCountry'
import SwitchCurrency from './components/SwitchCurrency'
import { useContext, useEffect, useState } from 'react'
import { CurrencyContext } from './context/CurrencyContext'
import axios from 'axios'

function App() {
  const {
    fromCurrency, setFromCurrency, toCurrency, setToCurrency, firstAmount , setFirstAmount 
  } = useContext(CurrencyContext)
  const [resultCurrency, setResultCurrency] = useState(0)
  const codeFromCurrency = fromCurrency.split(" ") [0];
  const codeToCurrency = toCurrency.split(" ") [0];

  useEffect(()=>{
    if(firstAmount){
      axios("https://api.freecurrencyapi.com/v1/latest", {
        params: {
          apikey: "FfOXtIHOP8gNMbjtd1SQuIIlM6RXhmGV9B26CIHf",
          base_currency: codeFromCurrency,
          currencies: codeToCurrency
        }
      })
      .then(res => setResultCurrency(res.data.data[codeToCurrency]))
      .catch(error => console.log(error))

    }
  },[firstAmount, fromCurrency, toCurrency])

  
  return (
    
  )
}

export default App
