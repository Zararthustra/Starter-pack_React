import { useState } from 'react';
import { App } from 'antd';

import { Button } from '@components/Button';
import { ModalReconnect } from '@components/index';
import { messageObject, toastObject } from '@utils/formatters';

export const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const { notification, message } = App.useApp();
  return (
    <>
      <ModalReconnect
        logout={() => setShowModal(false)}
        showReconnectModal={showModal}
      />
      <main className="flex flex-col items-center px-2">
        <h1 className="my-5 text-center dark:text-slate-100">Accueil</h1>

        {/* Buttons */}
        <div className="my-5 flex flex-wrap gap-5">
          <h2 className="w-[200px] dark:text-slate-100">Buttons</h2>
          <div className="flex w-[200px] flex-col gap-1">
            <Button variant="ok">Confirmer</Button>
            <Button variant="ko">Refuser</Button>
            <Button primary onClick={() => setShowModal(true)}>
              Primaire
            </Button>
            <Button secondary>Secondaire</Button>
          </div>
        </div>

        {/* Notifications */}
        <div className="my-5 flex flex-wrap gap-5">
          <h2 className="w-[200px] dark:text-slate-100">Notifications</h2>
          <div className="flex w-[200px] flex-col gap-1">
            <Button
              primary
              onClick={() =>
                notification.success(
                  toastObject(
                    'success',
                    'Notification succès',
                    'Ceci est un message de succès'
                  )
                )
              }>
              Succès
            </Button>
            <Button
              primary
              onClick={() =>
                notification.error(
                  toastObject(
                    'error',
                    'Notification erreur',
                    "Ceci est un message d'erreur"
                  )
                )
              }>
              Erreur
            </Button>
            <Button
              primary
              onClick={() =>
                notification.warning(
                  toastObject(
                    'warning',
                    'Notification danger',
                    'Ceci est un message de danger'
                  )
                )
              }>
              Danger
            </Button>
            <Button
              primary
              onClick={() =>
                notification.info(
                  toastObject(
                    'info',
                    'Notification information',
                    "Ceci est un message d'information"
                  )
                )
              }>
              Information
            </Button>
            <Button
              primary
              onClick={() =>
                notification.open(
                  toastObject(
                    'loading',
                    'Notification chargement',
                    'Ceci est un message de chargement'
                  )
                )
              }>
              Chargement
            </Button>
          </div>
        </div>

        {/* Messages */}
        <div className="my-5 flex flex-wrap gap-5">
          <h2 className="w-[200px] dark:text-slate-100">Messages</h2>
          <div className="flex w-[200px] flex-col gap-1">
            <Button
              primary
              onClick={() =>
                message.success(
                  messageObject('success', 'Ceci est un message de succès')
                )
              }>
              Succès
            </Button>
            <Button
              primary
              onClick={() =>
                message.error(
                  messageObject('error', "Ceci est un message d'erreur")
                )
              }>
              Erreur
            </Button>
            <Button
              primary
              onClick={() =>
                message.warning(
                  messageObject('warning', 'Ceci est un message de danger')
                )
              }>
              Danger
            </Button>
            <Button
              primary
              onClick={() =>
                message.info(
                  messageObject('info', "Ceci est un message d'information")
                )
              }>
              Information
            </Button>
            <Button
              primary
              onClick={() =>
                message.loading(
                  messageObject('loading', 'Ceci est un message de chargement')
                )
              }>
              Chargement
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};
