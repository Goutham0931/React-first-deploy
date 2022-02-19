import React from 'react'
import './App.css';

export default function Datatable({data}) {
    const columns= data[0] && Object.keys(data[0]);

    const lists=  data.map((dataFirst,index) => (<tr key= {index}> 
        
        <tr>
            <th width="15%">ID</th>
            <th width="45%">Firstname</th>
            <th width="45%">Surname</th>
            <th width="15%">Share</th>

        </tr>
        {
        (typeof(dataFirst.laureates)=='object')?
        <>    
        {
                dataFirst.laureates.map((dataSec,i)=>(
                <tr key={i}>
                
                    <td>{dataSec.id}</td>
                    <td>{dataSec.firstname}</td>
                    <td>{dataSec.surname}</td>
                    <td>{dataSec.share}</td>
                
                </tr>
                )
                )
            }
        </>
        :
        null

        } 
        <td>{dataFirst.year}</td>
        <td>{dataFirst.category}</td>
     </tr>))


  return (<table>
      

    
            <tr>
                <th width="45%">Laureates</th>
                <th width="20%">Year</th>
                <th width="20%">Category</th>
            </tr>
            {lists}
        </table>
  
  );
}