import React, { useEffect, useState } from "react";
import axios from "axios";
import '../index.css'

function CountryFlags() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://xcountries-backend.azurewebsites.net/all"
        );
        // console.log(response.data)
        if (response.status === 200) {
          const resData = response.data;
          setData(resData);
        }
      } catch {
        console.error("Error fetching data");
      }
    }
    fetchData()
  }, []);

//   console.log(data)
  return <div className="grid-container">
    {
        data?.map((index)=>(
           <div key={index} className="card">
            <img src={index.flag} alt={index.name}/>
            <p>{index.name}</p>
           </div> 
        ))
    }
  </div>;
}

export default CountryFlags;
