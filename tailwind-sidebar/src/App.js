import './tailwind.css'
import { TailwindSidebarProvider } from './navigation/tailwindSidebarContext';
import TailwindSidebar from './navigation/tailwindSidebar';
import TailwindSidebarLink from './navigation/tailwindSidebarLink';
import TailwindSidebarToggleButton from './navigation/tailwindSidebarToggleButton';
import TailwindSidebarSubMenu from './navigation/tailwindSidebarSubMenu';

function App() {
  return (
    <div className='min-h-screen flex'>
      <TailwindSidebarProvider>
        <TailwindSidebar>
          <TailwindSidebarLink href='https://google.com' display='Google' />
          <TailwindSidebarLink href='https://yahoo.com' display='Yahoo' />
          <TailwindSidebarSubMenu display="Email Providers">
            <TailwindSidebarLink href="https://gmail.com" display="Gmail"></TailwindSidebarLink>
            <TailwindSidebarLink href="https://outlook.com" display="Outlook"></TailwindSidebarLink>
          </TailwindSidebarSubMenu>
        </TailwindSidebar>
        <div>
          <TailwindSidebarToggleButton />
        </div>
      </TailwindSidebarProvider>
    </div>
  );
}

export default App;
