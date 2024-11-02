import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import "./Shipping.css";
import { Country, State } from "country-state-city";
import CheckoutSteps from "../cart/CheckoutSteps";
import MetaData from "../layout/MetaData";
import { saveShippingInfo } from "../../actions/cartAction";
function Shipping() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { shippingInfo } = useSelector((state) => state.cart);
  const [address, setAddress] = useState(shippingInfo.address);
  const [city, setCity] = useState(shippingInfo.city);

  const [state, setState] = useState(shippingInfo.state);

  const [country, setCountry] = useState(shippingInfo.country);

  const [pinCode, setPinCode] = useState(shippingInfo.pinCode);

  const [phoneNo, setPhoneNo] = useState(shippingInfo.phoneNo);

   const shippingSubmit = () => {
     dispatch(saveShippingInfo({address,city, state, country, phoneNo,pinCode }))
     navigate('/order/confirm')
   }
  return (
    <div style={{paddingTop:"80px" , background:"black"}}>

      <MetaData title="Shipping Details"/>
        
       <CheckoutSteps activeStep={0}/>

      <div className="shippingContainer">

        <div className="shippingBox">
          <h2>Shipping Details</h2>
          <form className="shippingForm" onSubmit={shippingSubmit}>
            <div>
              <p>Address</p>
              <input
                type="text"
                name=""
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            <div>
              <p>City</p>
              <input
                type="text"
                name=""
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            <div>
              <p>PinCode</p>
              <input
                type="number"
                name=""
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
              />
            </div>
            <div>
              <p>Phone No.</p>
              <input
                type="number"
                name=""
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
            </div>

           
            <div>
              <p>Country</p>
              <select
                type="text"
                name=""
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">country</option>
                {Country &&
                  Country.getAllCountries().map((item) => (
                    <option value={item.isoCode} key={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            {country &&
             <div>
             <p>state</p>
             <select
               type="text"
               name=""
               value={state}
               onChange={(e) => setState(e.target.value)}
             >
               <option value="">State</option>
               {State &&
                 State.getStatesOfCountry(country).map((item) => (
                   <option value={item.isoCode} key={item.isoCode}>
                     {item.name}
                   </option>
                 ))}
             </select>
           </div>}
           <input type="submit" name="" value="Continue"/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
