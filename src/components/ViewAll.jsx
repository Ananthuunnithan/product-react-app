import React, { useState } from 'react'
import NavBar from './NavBar'

const ViewAll = () => {

const [data,changeData] = useState(
    [
        {"model":"Iphone 17","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZuaA6RNqgOCu14Bl7H0OtHimQFNLho9-X8rLappcM0g&s=10","description":"Latest on Amazon"},
        {"model":"Motorola Edge 60 series","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPx8hP9hWy7zRvurxHy71FORHv-FfrLZ6SXS2NnZeEOw&s","description":"Latest on Amazon"},
        {"model":"Nothing 2a","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrJb_8jLOuk7uo0iLMzg3i2um1K-UwJ8GX8Hr9Wh8uag&s=10","description":"Latest on Amazon"},
        {"model":"One Plus Nord 6","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVOCSYXRUNG39xeoTV-ANfHxxUmTuzGALbwngCu9OLEQ&s=10","description":"Latest on Amazon"},
        {"model":"Samsung Galaxy 25","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5xlBZQLrC6KjPS6R7_-KVi1Il4ivbiWmd4dRx9H_JTg&s=10","description":"Latest on Amazon"},

    ]
)

  return (
    <div>
<NavBar/>
<div class="container mt-4">
        <div class="row">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <div class="row g-4">
                    {data.map(
                        (value,index) => {
                            return(
                                <div class="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">

                        <div class="card">
                            <img src={value.avatar} class="card-img-top" alt="..." height="350px"/>
                            <div class="card-body">
                                <h5 class="card-title">{value.model}</h5>
                                <p class="  card-text">{value.description}</p>
                                <a href="#" class="btn btn-primary">Buy now</a>
                            </div>
                        </div>

                    </div>
                            )
                        }
                    )}
                    

                </div>

            </div>
        </div>
    </div>
        
    </div>
  )
}

export default ViewAll