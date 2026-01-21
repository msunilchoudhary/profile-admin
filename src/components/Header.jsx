import Button from '@mui/material/Button'
import { useContext } from 'react';
import { RiMenuFold3Line } from "react-icons/ri";
import { AppContext } from '../App';


function Header() {
    const {handleSidebar, avtarImg} = useContext(AppContext)
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-md z-50">
    <div className="flex items-center justify-between px-6 h-full">      
      <div className="flex items-center gap-1">
        <span className="text-xl w-60 font-bold text-blue-600">AdminPanel</span>
        <Button onClick={handleSidebar} className='min-w-auto! w-9 h-9 text-2xl! text-gray-600! bg-gray-200! rounded-full! hidden! lg:block!' title='button '><RiMenuFold3Line /></Button>
      </div>

      
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2a2 2 0 01-.6 1.4L4 17h5" />
          </svg>
          <span className='rounded-full bg-red-500 py-0.5 px-1.5 absolute -top-2 text-white text-[10px]'>0</span>
        </button>
        <div className="flex items-center gap-2 cursor-pointer">
          <img src={avtarImg} className="rounded-full border border-gray-300 w-9 h-9" />
          <span className="text-sm font-medium text-gray-700 text-ellipsis text-nowrap overflow-hidden max-w-30">Sunil Choudhary</span>
        </div>
      </div>

    </div>
  </header>
  )
}

export default Header