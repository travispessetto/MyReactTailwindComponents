import './tailwind.css'
import { TailwindSidebarProvider } from './navigation/tailwindSidebarContext';
import TailwindSidebar from './navigation/tailwindSidebar';
import TailwindSidebarLink from './navigation/tailwindSidebarLink';
import TailwindSidebarToggleButton from './navigation/tailwindSidebarToggleButton';
import TailwindSidebarSubMenu from './navigation/tailwindSidebarSubMenu';
import { FaGoogle, FaYahoo, FaEnvelope } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import TailwindLogoHeaderBar from './layout/tailwindLogoHeaderBar';
import TailwindMainArea from './layout/tailwindMainArea';



function App() {
  return (
    <div className='min-h-screen flex'>
      <TailwindSidebarProvider>
        <TailwindSidebar>
          <TailwindSidebarLink href='https://google.com'><FaGoogle className='text-4xl' />&nbsp;Google</TailwindSidebarLink>
          <TailwindSidebarLink href='https://yahoo.com'><FaYahoo className='text-4xl' />&nbsp;Yahoo</TailwindSidebarLink>
          <TailwindSidebarSubMenu display={<><FaEnvelope className='text-4xl' />&nbsp;Email Providers</>}>
            <TailwindSidebarLink href="https://gmail.com"><BiLogoGmail className='text-4xl'/>&nbsp;Gmail</TailwindSidebarLink>
            <TailwindSidebarLink href="https://outlook.com"><PiMicrosoftOutlookLogo className='text-4xl' />&nbsp;Outlook</TailwindSidebarLink>
          </TailwindSidebarSubMenu>
        </TailwindSidebar>
        <TailwindMainArea>
          <TailwindLogoHeaderBar left={<TailwindSidebarToggleButton />} logoUrl={'/images/logo.png'} />
        </TailwindMainArea>
      </TailwindSidebarProvider>
    </div>
  );
}

export default App;
