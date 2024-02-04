import './tailwind.css'
import { TailwindSidebarProvider } from './navigation/tailwindSidebarContext';
import TailwindSidebar from './navigation/tailwindSidebar';
import TailwindSidebarLink from './navigation/tailwindSidebarLink';
import TailwindSidebarToggleButton from './navigation/tailwindSidebarToggleButton';
import TailwindSidebarSubMenu from './navigation/tailwindSidebarSubMenu';
import { FaGoogle, FaYahoo, FaEnvelope, FaRegUserCircle, FaCog } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import TailwindLogoHeaderBar from './layout/tailwindLogoHeaderBar';
import TailwindMainArea from './layout/tailwindMainArea';
import { TailwindRightSidebarProvider } from './navigation/tailwindRightSidebarContext';
import TailwindRightSidebarToggleButton from './navigation/tailwindRightSidebarToggleButton';
import TailwindRightSidebar from './navigation/tailwindRightSidebar';



function App() {
  return (
    <div className='min-h-screen flex'>
      <TailwindSidebarProvider>
        <TailwindRightSidebarProvider>
        <TailwindSidebar>
          <TailwindSidebarLink href='https://google.com' target="_blank"><FaGoogle className='text-4xl'/>&nbsp;Google</TailwindSidebarLink>
          <TailwindSidebarLink href='https://yahoo.com'><FaYahoo className='text-4xl' />&nbsp;Yahoo</TailwindSidebarLink>
          <TailwindSidebarSubMenu display={<><FaEnvelope className='text-4xl' />&nbsp;Email Providers</>}>
            <TailwindSidebarLink href="https://gmail.com"><BiLogoGmail className='text-4xl'/>&nbsp;Gmail</TailwindSidebarLink>
            <TailwindSidebarLink href="https://outlook.com"><PiMicrosoftOutlookLogo className='text-4xl' />&nbsp;Outlook</TailwindSidebarLink>
          </TailwindSidebarSubMenu>
        </TailwindSidebar>
        <TailwindMainArea>
          <TailwindLogoHeaderBar left={<TailwindSidebarToggleButton />} right={<TailwindRightSidebarToggleButton icon={<FaRegUserCircle />} />} logoUrl={'/images/logo.png'} />
        </TailwindMainArea>
        <TailwindRightSidebar>
          <TailwindSidebarSubMenu display={<><FaCog />&nbsp;Settings</>}>
            <TailwindSidebarLink href="https://google.com">Account</TailwindSidebarLink>
          </TailwindSidebarSubMenu>
        </TailwindRightSidebar>
        </TailwindRightSidebarProvider>
      </TailwindSidebarProvider>
    </div>
  );
}

export default App;
