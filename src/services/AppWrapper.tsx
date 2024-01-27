import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Outlet } from 'react-router-dom';

import { getLS } from './localStorageService';

import { Sidebar } from '@components/index';
import AppContext from '@services/AppContext';

const AppWrapper = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const [darkMode, setDarkMode] = useState<boolean>(
    getLS('darkmode') === 'true' ? true : false
  );

  return (
    <AppContext.Provider value={{ darkMode, setDarkMode }}>
      <div
        className={`${isOpenSidebar ? 'fmd:pl-[200px]' : 'fmd:pl-[50px]'} flex`}>
        <Sidebar
          isOpenSidebar={isOpenSidebar}
          setIsOpenSidebar={setIsOpenSidebar}
        />
        <div
          onClick={() => setIsOpenSidebar(false)}
          className={`w-full px-1 ${isMobile ? 'mt-10' : ''}`}>
          <Outlet />
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default AppWrapper;
