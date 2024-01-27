import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { DarkModeToggle } from './DarkModeToggle';

import {
  IconHome,
  IconNotification,
  IconOnOff,
  IconParameter,
  IconSidebarClose,
  IconSidebarOpen,
  IconUser
} from '@assets/index';
import { clearLS } from '@services/localStorageService';

interface ISidebarProps {
  isOpenSidebar: boolean;
  setIsOpenSidebar: (value: boolean) => void;
}

export const Sidebar = ({ isOpenSidebar, setIsOpenSidebar }: ISidebarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  const handleLogout = () => {
    clearLS();
    navigate(0);
  };

  useEffect(() => {
    if (isMobile) setIsOpenSidebar(false);
  }, [location.pathname]);

  const items = [
    {
      icon: <IconHome width={32} height={32} className="shrink-0" />,
      title: 'Accueil',
      link: '/'
    },
    {
      icon: <IconUser width={32} height={32} className="shrink-0" />,
      title: 'Profil',
      link: '/profil'
    },
    {
      icon: <IconNotification width={32} height={32} className="shrink-0" />,
      title: 'Notifications',
      link: '/notifications'
    },
    {
      icon: <IconParameter width={32} height={32} className="shrink-0" />,
      title: 'Paramètres',
      link: '/parametres'
    }
  ];

  if (isMobile && !isOpenSidebar)
    return (
      <div className="fixed left-2 top-2 text-primary-500">
        <IconSidebarOpen
          size={32}
          onClick={() => setIsOpenSidebar(!isOpenSidebar)}
        />
      </div>
    );

  return (
    <aside
      className={
        isOpenSidebar
          ? 'sidebar sidebar--open shadow-md'
          : 'sidebar sidebar--closed shadow-md'
      }>
      <header
        className={`flex items-center border-b-[1px] py-2 dark:border-gray-700 ${
          isOpenSidebar ? 'justify-between pr-4' : 'justify-center'
        }`}>
        {isOpenSidebar ? (
          <IconSidebarClose
            className="shrink-0 cursor-pointer text-primary-500"
            size={32}
            onClick={() => setIsOpenSidebar(!isOpenSidebar)}
          />
        ) : (
          <IconSidebarOpen
            className="shrink-0 cursor-pointer text-primary-500"
            size={32}
            onClick={() => setIsOpenSidebar(!isOpenSidebar)}
          />
        )}
        {isOpenSidebar && <h3>LOGO</h3>}
      </header>

      <ul className="mt-5">
        {items.map((item, index) => (
          <li key={index} className="">
            <Link
              className={`my-1 flex items-center rounded p-1 text-base hover:bg-gray-200 dark:hover:bg-gray-700 ${
                isOpenSidebar ? 'justify-between pr-4' : 'justify-center'
              }
              ${location.pathname === item.link ? 'text-primary-500' : ''}`}
              to={item.link}>
              {item.icon}
              {isOpenSidebar && (
                <p
                  className={
                    location.pathname === item.link ? 'font-bold' : ''
                  }>
                  {item.title}
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>

      <footer className="fixed bottom-2">
        <div
          className={`
          ${isOpenSidebar ? 'w-[170px]' : ''} 
          flex cursor-pointer items-center justify-between border-b-[1px] pb-2 text-base dark:border-gray-700`}
          onClick={handleLogout}>
          <IconOnOff width={32} height={32} className="shrink-0 text-red-600" />
          {isOpenSidebar && <p>Déconnexion</p>}
        </div>
        <div
          className={`flex pt-2 ${
            isOpenSidebar ? 'justify-end' : 'justify-center'
          }`}>
          <DarkModeToggle />
        </div>
        <p
          className={`pt-2 text-xs text-gray-400 ${
            isOpenSidebar ? 'text-right' : ''
          }`}>
          {isOpenSidebar ? 'Version ' + APP_VERSION : APP_VERSION}
        </p>
      </footer>
    </aside>
  );
};
