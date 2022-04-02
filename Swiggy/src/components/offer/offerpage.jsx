import { margin } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import HotelMenu from "../Landing/HotelMenu"
import { useDispatch } from "react-redux";
import { RestaurantAction } from "../../ReduxFiles/Restaurant/RestaurantAction";
import Skeleton from "@mui/material/Skeleton";
import { FaRoad } from "react-icons/fa"
import Footer from "../Finalfooter/footer"



export const OfferPage =()=>{

    const dispatch = useDispatch();
    const [fil,setfil]=useState([])
    const [focused, setFocused] = useState(false)
    const [loading, setloading] = useState(false);
    const [Error, setError] = useState(false);
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false);


    useEffect(()=>{getData()
      },[])

    const [db,setdb]=useState([])


    
    const getData =()=>{
        axios.get("https://swiggy-list.herokuapp.com/rest").then(({data})=>{
         
           console.log(data)
                setdb(data)
                setloading(true);
           
          
        }).catch((err) => {
            setloading(false);
            setError(true);
          });
    }



    return (

        <>
        <img src="https://raw.githubusercontent.com/kushagra-01/random/main/offerpage.png" alt="offerpage" />
        <br />
        <br />
        <br />

     <div
          className="row row-cols-4"
          style={{
            width: "100%",
            margin: "auto",
          }}
        >
          {" "}
          {loading ? (
            <>
              {db.filter((el)=>{if(el.rating>4.2){
                  console.log(el)
                  return true
              }else{
                  return false
              }
            })
              .map((item) => (
                <Link
                  to={"/restaurent"}
                  key={item._id}
                  onClick={() => dispatch(RestaurantAction(item))}
                >
                  <HotelMenu data={item} key={item._id} />
                </Link>
              ))}
            </>
          ) : (
            <Skeleton height="300px" width="40%" />
          )}
        </div>
        <Footer/>

      </>
    )
    
}