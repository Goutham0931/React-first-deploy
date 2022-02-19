import React,{useState, useEffect} from 'react';
import Datatable from './Datatable'


require("es6-promise").polyfill()
require("isomorphic-fetch");
export default function FetchJson() {
    const[data , setData] = useState([]);
    const [query,setQuery]=useState("");

    useEffect(() => 
    {
        fetch('http://api.nobelprize.org/v1/prize.json')
        .then((response) => response.json())
        .then((json) => setData(json));
        console.log(data.prizes);
     }, [])
    

    return (
    <div>
            
            <Datatable data={data.prizes}/>
            <div> chintu</div>
    </div>
  )
}
