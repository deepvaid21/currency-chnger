import { data } from 'autoprefixer'
import axios from 'axios'
import {useState,useEffect} from 'react'
// custom hook 
function UseCurrencyInfo(currency) {
    const [Data, setData] = useState({})
    useEffect(() => {
      const getdata = async() =>{
        const data = await axios.get(`https://v6.exchangerate-api.com/v6/59d560835c4e8d4f996adc83/latest/USD`)
        console.log(data.data);
        setData(data.data)
      }
    getdata()
    }, [currency])
  return Data
}

export default UseCurrencyInfo
