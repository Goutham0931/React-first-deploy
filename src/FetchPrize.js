import React,{useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

  export default function FetchPrize() {
    const [posts, setPosts]= useState([])

    useEffect(() => {
        axios
        .get('http://api.nobelprize.org/v1/prize.json')
        .then(res=> {
            console.log(res.data.prizes)
            setPosts(res.data.prizes)
        })
        .catch(err => {
            console.log(err)
        })
    })
    const lists=  posts.map((dataFirst,index) => (<tr key= {index}> 
        
        <tr>
            <th width="15%">ID</th>
            <th width="35%">Firstname</th>
            <th width="35%">Surname</th>
            <th width="15%">Share</th>

        </tr>
        {
        (typeof(dataFirst.laureates)=='object')?
        <>    
        {
                dataFirst.laureates.map((dataSec)=>
                {
                return(
                <>   
                    
                    <tr>
                    <td>{dataSec.id}</td>
                    <td>{dataSec.firstname}</td>
                    <td>{dataSec.surname}</td>
                    <td>{dataSec.share}</td>
                    </tr>
                </>
                )})
            }
        </>
        :
        null

        } 
        {/* <td>{post.index.laureates}</td> */}
        {/* {post.laureates.map(arr => (<td key={arr.id}></td>))} */}

      
        
        <td>{dataFirst.year}</td>
        <td>{dataFirst.category}</td>
     </tr>))
    return (
    <div>
        <table>
            <tr>
                <th>Laureates</th>
                <th>Year</th>
                <th>Category</th>
            </tr>
            {lists}
        </table>
    </div>
  )
}
