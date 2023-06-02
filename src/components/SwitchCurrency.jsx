import { Button, Grid } from '@mui/material'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

function SwitchCurrency() {
  const {
    fromCurrency, setFromCurrency, toCurrency, setToCurrency
  } = useContext(CurrencyContext)
  const handleSwich = ()=>{
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
  }
  return (
    <Grid item xs={12} md="auto">
      <Button onClick={handleSwich} sx={{borderRadius: "15px", 
      height: "100%"
      }}>
         <CompareArrowsIcon sx={{ fontSize: 30}}/>
      </Button>
    </Grid>
  )
}

export default SwitchCurrency