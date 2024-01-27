import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { App as AntApp, ConfigProvider } from 'antd';
import frFR from 'antd/locale/fr_FR';
import { useRegisterSW } from 'virtual:pwa-register/react';

// import { ModalReloadSW } from '@components/index';
import { Home, NotFound } from '@pages/index';
import AppWrapper from '@services/AppWrapper';

const App = () => {
  const {
    // offlineReady: [offlineReady, setOfflineReady],
    // needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker
  } = useRegisterSW({
    onNeedRefresh() {
      updateServiceWorker();
    },
    onOfflineReady() {
      console.log('Ready to work offline');
    },
    onRegistered() {
      // eslint-disable-next-line prefer-template
      console.log('SW Registered');
    },
    onRegisterError(error: any) {
      console.log('SW registration error', error);
    }
  });

  // const close = () => {
  //   setOfflineReady(false);
  //   setNeedRefresh(false);
  // };

  return (
    <ConfigProvider
      locale={frFR}
      theme={{
        token: {
          colorPrimary: '#f0811f',
          borderRadius: 3
        }
      }}>
      <AntApp>
        <BrowserRouter>
          {/* <ModalReloadSW
            offlineReady={offlineReady}
            needRefresh={needRefresh}
            close={close}
            updateServiceWorker={updateServiceWorker}
          /> */}
          <Routes>
            <Route element={<AppWrapper />}>
              <Route element={<Home />} path="/" />
              <Route
                element={
                  <h1 className="my-5 text-center dark:text-slate-100">
                    Profil
                  </h1>
                }
                path="/profil"
              />
              <Route
                element={
                  <h1 className="my-5 text-center dark:text-slate-100">
                    Notifications
                  </h1>
                }
                path="/notifications"
              />
              <Route
                element={
                  <h1 className="my-5 text-center dark:text-slate-100">
                    Paramètres
                  </h1>
                }
                path="/parametres"
              />
            </Route>

            {/* 404 */}
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AntApp>
    </ConfigProvider>
  );
};

export default App;
