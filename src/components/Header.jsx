import Button from '@mui/material/Button'
import { useContext } from 'react';
import { RiMenuUnfold2Line, RiMenuUnfoldLine } from "react-icons/ri";
import { AppContext } from '../stores/AppContext';
import LogoDark from '../assets/images/msc-dark.png';
import LogoLight from '../assets/images/msc-light.png';
import ThemeMode from './ThemeMode';
import NotificationBtn from './NotificationBtn';
import UserSettings from './UserSettings';


function Header() {
    const {handleSidebar, isSidebarOpen, avtarImg, theme} = useContext(AppContext)
  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white dark:bg-gray-950 shadow-sm z-50">
    <div className="flex items-center justify-between px-6 h-full">      
      <div className="flex items-center gap-8">
        <span className="py-2 w-52">
          {theme === "dark" ? <img src={LogoDark} alt="" className='max-w-full' /> : <img src={LogoLight} alt="" className='max-w-full' />}
          
        </span>
        <Button onClick={handleSidebar} className='min-w-auto! w-9 h-9 text-2xl! text-gray-600! bg-gray-200! rounded-full! hidden! lg:block! dark:bg-blue-900! dark:text-white!' title='button '>{isSidebarOpen ? <RiMenuUnfold2Line /> : <RiMenuUnfoldLine />}</Button>
      </div>

      
      <div className="flex items-center gap-4">
        <ThemeMode />
        <NotificationBtn />
        <UserSettings avtar={avtarImg} />   
      </div>

    </div>
  </header>
  )
}

export default Header