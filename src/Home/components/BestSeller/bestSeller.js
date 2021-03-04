
import {useEffect,useState} from 'react';
import axios from "axios";
import './bestSeller.css'
function BestSeller() {

    const [bestSeller,setBestSeller] = useState([]);
    useEffect(async () => {
    try{
      const brandsArray = await axios
        .get("../../../data.json")
        .then(({ data }) => {
          return data;
        })
        setBestSeller(brandsArray.data);
    }
    catch (e) {
        console.error(e);
    }
    });
    return (
            <div>
            <div className="best_style">
              <h3>Best Sellers</h3>
              <div style={{display:'flex', gap:'30px'}}>
              {bestSeller && bestSeller.length !== 0 && bestSeller.map ((items)  => 
              items.categories.map((item) => {
                  return item.name=== "Best_Sellers" && <img  key={items.id} className= "bestSeller_style"src={`${items.featured}`}alt=""/> 
              })
            )
            }
            </div>
            </div>
            <div  className="best_style">
              <h3>Top Deals</h3>
              <div style={{display:'flex', gap:'30px'}}>
              {bestSeller && bestSeller.length !== 0 && bestSeller.map ((items)  => 
              items.categories.map((item) => {
                  return item.name=== "Top_Deals" && <img key={items.id} className= "bestSeller_style"src={`${items.featured}`}alt=""/> 
              })
              )
            }
            </div>
            </div>
            </div>
    )
    }
    
    export default BestSeller;