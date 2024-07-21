import React from 'react';
import ReactDOM from 'react-dom/client';
import restaurant from './utils/mockData';


const Header = ()=>{
  return(
    <div className='header'>
        <div className='logoContainer'>
          <img src='https://logowik.com/content/uploads/images/free-food-delivery4702.logowik.com.webp' width={120} height={100} alt='logo' title='logo'/>
        </div>
        <div className='nav-items'>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
    </div>
  )
}

const RestaurantCard=({res})=>{
  console.log(res?.info?.cuisines)
  return(
    <>
    <div className='res-card' style={{backgroundColor:"#f0f0f0", width:"280px"}}>
      <div className='food-image' style={{display:"flex"}}>
      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+res?.info?.cloudinaryImageId} width={286} height={191} alt='logo' title='logo'/>
      </div>
      <h3>{res?.info?.name}</h3>
      <h4>{res?.info?.locality}</h4>
      <h4>{res?.info?.cuisines.join(", ")}</h4>
      <h4>{res?.info?.avgRating}</h4>
      <h5>Delivery Time : {res?.info?.sla?.deliveryTime}</h5>
    </div>
    </>
  )
}

const Body = ()=>{
      // const res = restaurant[0].info.name;
      // console.log(res);
  return(
    <div className='body'>
      <div className='Search'>
          Search
      </div>
      <div className='res-container'>
        {restaurant.map((res)=> <RestaurantCard res={res} key={res.info.id} /> )}
      </div>
    </div>
  )
}

const AppLayout = ()=>{
  return(
  <div className='app'>
    <Header />
    <Body />
  </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
