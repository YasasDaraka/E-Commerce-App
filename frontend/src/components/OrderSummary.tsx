import { Dialog } from '@mui/material';
import { useAppContext } from "../context/AppContext";
import { useEffect, useState } from "react";
import AddCard from './AddCard';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

interface OrderProps{
  cart:any
  setPaymentForm: any
  paymentForm:any
  setSelectedAddress: any
  selectedAddress:string
  onSubmit:any
}
const OrderSummary = ({cart,paymentForm,selectedAddress,setPaymentForm,setSelectedAddress,onSubmit}:OrderProps) => {
  const { getCartCount, getCartAmount, getShipCost, getTax } = useAppContext()
  const [isCardOpen, setIsCardOpen] = useState(false); 
  const [confirm, setConfirem] = useState(false);

  // const navigate = useNavigate();
// const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const fetchUserAddresses = async () => {
//     setUserAddresses(addressDummyData);
//   }

  // const handleAddressSelect = (address:any) => {
  //   setSelectedAddress(address);
  //   setIsDropdownOpen(false);
  // };

  const handleChange = (e:any) => {
    const { value } = e.target;
    setSelectedAddress(value);
  };
  useEffect(() => {
    if(!paymentForm.cardNumber){
      setConfirem(false)
      return;
    }
    }, [paymentForm.cardNumber])

  return (
    <div className="w-full md:w-96 bg-gray-500/5 p-5 rounded-2xl">
      <h2 className="text-xl md:text-2xl font-medium text-gray-500">
        Order Summary
      </h2>
      <hr className="border-gray-500/30 my-5" />
      <div className="space-y-6">
        <div>
          <label className="text-base font-medium uppercase text-gray-500 block mb-2">
            Select Address
          </label>
          <div className="relative inline-block w-full text-sm ">
              <input
                type="text"
                id="address"
                name="address"
                value={selectedAddress}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-transparent"
              />
            {/* <button
              className="peer w-full text-left px-4 pr-2 py-2 bg-gray-300/5 text-gray-700 focus:outline-none"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className='text-gray-600'>
                {selectedAddress
                  ? `${selectedAddress.fullName}, ${selectedAddress.area}, ${selectedAddress.city}, ${selectedAddress.state}`
                  : "Select Address"}
              </span>
              <svg className={`w-5 h-5 inline float-right transition-transform duration-200 ${isDropdownOpen ? "rotate-0" : "-rotate-90"}`}
                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6B7280"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <ul className="absolute w-full bg-white border border-gray-300 shadow-md mt-1 z-10 rounded-b-md">
                {userAddresses.map((address:any, index:any) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-500/10 cursor-pointer text-gray-500"
                    onClick={() => handleAddressSelect(address)}
                  >
                    {address.fullName}, {address.area}, {address.city}, {address.state}
                  </li>
                ))}
                <li
                  onClick={() => navigate("/add-address")}
                  className="px-4 py-1.5 hover:bg-orange-600 cursor-pointer  text-white text-center bg-[#F88655] rounded-md"
                >
                  + Add New Address
                </li>
              </ul>
            )} */}
          </div>
        </div>

        <div>
          <label className="text-base font-medium uppercase text-gray-500 block mb-2">
            Payment Information
          </label>
          <div className="flex flex-col items-start gap-2">
            {!confirm ? <div className='text-base text-gray-400'>No card added</div>:
              <div className='flex justify-center items-center w-full'>
                <label className="text-base font-medium text-gray-500 block mr-4">Card Number</label>
                <label className="text-base text-gray-500 block">********{paymentForm.cardNumber.replace(/\s+/g, '').slice(-3)}</label>
                <img
                    className="h-15 w-15 ml-2"
                    src={assets.money}
                    alt="heart_icon"
                    />
                  <img
                    className="h-10 w-10 ml-2"
                    src={assets.credit_card}
                    alt="heart_icon"
                    />
              </div>
            }
            <button onClick={()=>{setIsCardOpen(true)}} className="bg-[#F88655] text-sm text-white px-3 py-1 hover:bg-orange-600 rounded-md">
              {confirm ? "Replace Card" : "Add Card"}
            </button>
          </div>
        </div>

        <hr className="border-gray-500/30 my-5" />

        <div className="space-y-4">
          <div className="flex justify-between text-base font-medium">
            <p className=" text-gray-500 uppercase">
              Items <span className="font-medium text-orange-600"> {getCartCount()}</span>
            </p>

            <p className="text-gray-500">$ {getCartAmount(cart)}</p>
          </div>
          <div className="flex justify-between">
            <p className=" text-gray-500">Shipping Fee</p>
            <p className=" text-gray-500">$ {getShipCost(cart)}</p>
          </div>
          <div className="flex justify-between">
            <p className=" text-gray-500">Tax</p>
            <p className=" text-gray-500">$ {Math.floor(getCartAmount(cart) * getTax(cart))}</p>
          </div>
          <div className="flex justify-between text-lg md:text-xl font-medium border-t border-t-gray-500/40 pt-3">
            <p className='text-gray-500'>Total</p>
            <p className='text-gray-500'>${getShipCost(cart) + getCartAmount(cart) + Math.floor(getCartAmount(cart) * getTax(cart))}</p>
          </div>
        </div>
      </div>

      <button disabled={getCartCount() == 0} onClick={onSubmit} className={`w-full ${getCartCount() == 0 ? "bg-gray-400/50 " : "bg-[#F88655] hover:bg-orange-600/80"} text-white py-3 mt-5  rounded-md `}>
        Place Order
      </button>

      <Dialog
        open={isCardOpen}
        onClose={()=>{setIsCardOpen(false);}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
       <AddCard setPaymentForm={setPaymentForm} paymentForm={paymentForm} setReady={()=>{setConfirem(true); setIsCardOpen(false)}}/>
      </Dialog>
    </div>
  );
};

export default OrderSummary;