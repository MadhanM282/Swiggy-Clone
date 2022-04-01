 import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components"
 import HotelMenu from "./HotelMenu";
 const Wrapper = styled.div`
 color: #171a29;
 font-family: sans-serif;

 h3 {
     margin: 0px 0px 10px 0px;
     font-weight: bolder;
 }

 .big-box {
     padding: 40px 0px 25px 0px;
 }

 .list-inline-item {
     font-size: 16px;
     font-weight: 300;
     line-height: 1.2;
     color: #686b78;
     cursor: pointer;
     border-radius: 0px;
     &:hover {
         border-bottom: 1px solid black;
     }
 }

 .filter {
     color: black;
 }

 box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.15);
`;
const Equal = styled.img`
width: 34px;
height: 34px;
border: 1px solid transparent;
border-radius: 50%;
margin-right: 16px;
cursor: pointer;
margin-left: 2px;
box-shadow: 0 1px 4px 0 rgba(40, 44, 63, 0.4);
`;
 
 export  const Landing = () =>{

    const [rest , setRest] = useState([])
    const [filter, setFilter] = useState('')

  useEffect(() =>{
      getData()
  },[])

  useEffect(() =>{
     filterData()
  },[])


    const getData = () =>{

        axios.get("https://swiggy-list.herokuapp.com/rest").then((res) =>{
        setRest(res.data)
        }).then(() =>{
            getData()
        })
    }

    const filterData = (sort) =>{
       axios.get(`https://swiggy-list.herokuapp.com/rest?lat=12.9259&lng=77.6229&filter=${filter}&sort=${sort}`).then((res) =>{
           setRest(res.data)
           console.log(res.data)
       })
    }





    return(
        <Wrapper>
        <div className='container-fluid '>
            <div className='big-box align-self-center'>
                <div
                    className='row mb-0 pb-0'
                    style={{ borderBottom: '3px solid whitesmoke' }}
                >
                    <div className='col-md-8'>
                        <h3 className='text-left'>
                            <button
                                className='btn btn-sm'
                                onClick={getData()}
                            >
                                <Equal
                                    src="../../../Icons/equal.svg"
                                    alt='restaurant'
                                />
                            </button>
                            {rest.length} restaurants
                        </h3>
                    </div>

                    <ul className='list-inline'>
                        <button
                            className='list-inline-item btn'
                            onClick={() => filterData('average_time')}
                        >
                            Relevance
                        </button>
                        <button
                            className='btn list-inline-item'
                            onClick={() => filterData('average_cost')}
                        >
                            Cost for Two
                        </button>
                        <button
                            className='list-inline-item btn'
                            onClick={() => filterData('rating')}
                        >
                            Rating
                        </button>
                        <button className='list-inline-item btn filter'>
                            Filters
                            <img
                                src="../../../Icons/filter.svg"
                                // 'Icons/filter.svg'
                                alt='filter icon'
                                style={{
                                    width: '30px',
                                    height: '30px',
                                    border: '1.5px solid #fc8019 ',
                                    borderRadius: '50%',
                                    marginLeft: '8px',
                                }}
                            />
                        </button>
                    </ul>
                </div>
            </div>
        </div>
        <div
            className='row row-cols-4'
            style={{
                width: '100%',
                margin: 'auto',
            }}
        >
            {rest.map((item) => (
                <HotelMenu data={item} key={item._id} />
            ))}
        </div>
    </Wrapper>
    )
}