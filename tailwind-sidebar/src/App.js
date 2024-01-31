import './tailwind.css'
import TailwindSidebar from './navigation/tailwindSidebar';
import TailwindSidebarLink from './navigation/tailwindSidebarLink';

function App() {
  return (
    <div className='min-h-screen'>
      <TailwindSidebar>
        <TailwindSidebarLink href='https://google.com' display='Google' />
        <TailwindSidebarLink href='https://yahoo.com' display='Yahoo' />
      </TailwindSidebar>
    </div>
  );
}

export default App;
