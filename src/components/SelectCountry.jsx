import { Autocomplete, Grid, Skeleton, TextField } from "@mui/material"
import useAxios from "../hooks/useAxios"

const SelectCountry=(pro)=> {
  const {value, setValue, label}=pro;
  const [data, loaded, error] = useAxios("https://restcountries.com/v3.1/all");
  
  return (
    
  )
}

export default SelectCountry