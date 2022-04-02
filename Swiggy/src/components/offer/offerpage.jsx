import { margin } from "@mui/system"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import HotelMenu from "../Landing/HotelMenu"
import { useDispatch } from "react-redux";
import { RestaurantAction } from "../../ReduxFiles/Restaurant/RestaurantAction";
import Skeleton from "@mui/material/Skeleton";



export const OfferPage =()=>{

    const dispatch = useDispatch();
    const [filter,setfilter]=useState([])
    const [focused, setFocused] = useState(false)
    const [loading, setloading] = useState(false);
    const [Error, setError] = useState(false);
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false);


    useEffect(()=>{getData()},[])

    const [db,setdb]=useState([])
  

    const handleSearch=()=>{
      
        const filteredContacts = e.length === 0 ? db : 
        db.filter(contact => contact.rating>3.5)

                    console.log(filteredContacts,"filter")
                    setfilter(filteredContacts)
    }
    const getData =()=>{
        axios.get("https://swiggy-list.herokuapp.com/rest").then(({data})=>{
            setdb(data)
            setloading(true);
        }).catch((err) => {
            setloading(false);
            setError(true);
          });
    }



    return (

        <>


      
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
              {filter.map((item) => (
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

      </>
    )
    
}