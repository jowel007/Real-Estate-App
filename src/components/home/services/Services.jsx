import React from "react"
import Back from "../../common/Back"
import "../../home/featured/Featured.css"
import img from "../../images/services.jpg"
import FeaturedCard from "../featured/FeaturedCard"


const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
            <div className='featured container'>
                <FeaturedCard />
            </div>
      </section>
    </>
  )
}

export default Services