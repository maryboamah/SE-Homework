import { useState, useEffect} from 'react'
import axios from "axios"
function FetchData(url){

    const [data, setData] = useState(null);
    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);
    const [data3, setData3] = useState(null);


    const allData =  async()=>{
      const response =  await axios.get(`${url}`)
      setData(response.data)
      setData1(response.data)
      setData2(response.data)
      setData3(response.data)
    }

  useEffect(() => {
   allData()
  }, []);
  return {data, data1, data2, data3}
 
}
export default FetchData