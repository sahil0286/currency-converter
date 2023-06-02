import { Autocomplete, Grid, Skeleton, TextField } from "@mui/material"
import useAxios from "../hooks/useAxios"

const SelectCountry=(pro)=> {
  const {value, setValue, label}=pro;
  const [data, loaded, error] = useAxios("https://restcountries.com/v3.1/all");
  
  if(loaded){
    return(
      <Grid item xs={12} md={3}>
        <Skeleton variant="rounded" height={60}/>
      </Grid>
    )
  }

 
  return (
    
  )
}

export default SelectCountry