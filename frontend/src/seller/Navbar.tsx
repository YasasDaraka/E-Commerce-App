import { useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {

  const { logOut } = useAppContext()
  const navigate = useNavigate();

  return (
    <div className='flex items-center px-4 md:px-8 py-3 justify-between shadow-md border-[#F5ECE6] text-gray-700 bg-[#EEF0F6]'>
      <img onClick={()=> navigate('/')} className='w-28 lg:w-32 cursor-pointer' src={assets.logo} alt="" />
      <button onClick={()=>{logOut(); navigate("/auth")}}className='text-white rounded-full bg-[#F88655] hover:bg-orange-500 px-5 py-2 sm:px-7 sm:py-2 text-xs sm:text-sm font-medium'>Logout</button>
    </div>
  )
}

export default Navbar