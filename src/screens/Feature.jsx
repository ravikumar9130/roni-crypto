import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'
import { useNavigate } from "react-router-dom";


export default function Feature() {

   let Navigate = useNavigate();
  
    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    const navigateToChart = (data) => {
       
     Navigate(`/chart`, { state:data  });
    };
    // console.log(data)

    if (!data) return null

   
    console.log()
    return (
        <div className='featured'>
            <div className='container'>


                <div className='right'>
                  

             
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>S.no</th>
                                <th>Coin</th>
                                <th></th>
                                <th>price</th>
                                <th>24th volume</th>
                                <th>Mkt cap</th>
                                <th>last 7 days</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((data,i)=>{
                                 let num = data.image.split("/")
                             return (
                                    <tr key={i} className='point' onClick={()=>navigateToChart(data.id)}>
                                        <td>{i + 1}</td>
                                        <td><span className='coin'> <img src={data.image} className="image" width='18' height='18' alt='' />{data.name}</span> </td>


                                        <td>{data.symbol}</td>

                                        <td>{data.current_price.toLocaleString()}</td>
                                        <td>  {data.price_change_percentage_24h < 0 ? (
                            <span className='red'>
                                <FiArrowDown className='icon' />
                                {data.price_change_percentage_24h.toFixed(2)}%
                            </span>
                        ) : (
                            <span className='green'>
                                <FiArrowUpRight className='icon' />
                                {data.price_change_percentage_24h.toFixed(2)}%
                            </span>
                        )}</td>
                                        <td>{data.market_cap}</td>
                                        <td><img  src={`https://www.coingecko.com/coins/${num[5]}/sparkline`} alt="" /></td>

                                    </tr>
                                   
                                   ) 
                                
})}

                               


                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    )

}
