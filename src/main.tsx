import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  QueryCache,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { App as AntdApp } from 'antd';

import App from './App';

import { EErrorCodes } from '@interfaces/index';
import { messageObject, toastObject } from '@utils/formatters';

import './styles/index.css';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: queryCacheOnError
  })
});

function queryCacheOnError(error: any, query: any) {
  const { notification, message } = AntdApp.useApp();

  switch (query.meta?.errorCode) {
    case EErrorCodes.GET_USER_404:
      return message.error(
        messageObject('error', "Cet utilisateur n'existe pas.")
      );
    case EErrorCodes.SOME_QUERY_ERROR:
      return notification.error(
        toastObject(
          'error',
          'Impossible de récupérer les données',
          "Vérifiez votre connexion internet ou contactez l'administrateur"
        )
      );
    case EErrorCodes.SOME_QUERY_BY_ID_ERROR:
      return notification.error(
        toastObject(
          'error',
          `Impossible de récupérer les données de l'id ${query.meta.id}`,
          "Vérifiez votre connexion internet ou contactez l'administrateur"
        )
      );

    default:
      return notification.error(
        toastObject(
          'error',
          'Impossible de récupérer les données',
          `Une erreur est survenue. Code : ${
            error.response ? error.response.status : error.message
          }`
        )
      );
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
