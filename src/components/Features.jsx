import { FiPhoneCall } from "react-icons/fi"
import {  LiaGiftSolid, LiaMoneyBillWaveSolid, LiaShippingFastSolid } from "react-icons/lia"
import { FeatureCard } from "./FeatureCard"

const data = [
  {
  title:"Free Shipping", icon:<LiaShippingFastSolid/>
},
{
title:"Best Price Guarantee", icon:<LiaMoneyBillWaveSolid/>
},
{
title:"Free Curbside Pickup", icon:<LiaGiftSolid/>
},
{
title:"Support 24/7", icon:<FiPhoneCall/>
},
]

const Features = () => {
  return (
    <div className="container pt-16">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data.map((item) => <FeatureCard key={item.title} item={item} />)}
      </div>
    </div>
  )
}

export default Features