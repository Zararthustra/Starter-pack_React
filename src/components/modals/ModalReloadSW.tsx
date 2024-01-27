import { Modal } from 'antd';

import { IconInfo } from '@assets/index';
import { Button } from '@components/index';

interface IModalReloadSWProps {
  needRefresh: boolean;
  offlineReady: boolean;
  close: () => void;
  updateServiceWorker: () => void;
}

export const ModalReloadSW = ({
  needRefresh,
  offlineReady,
  close,
  updateServiceWorker
}: IModalReloadSWProps) => {
  return (
    <Modal
      centered
      open={needRefresh || offlineReady}
      width={400}
      closable={false}
      footer={
        <div className="flex flex-col items-center gap-1">
          <Button onClick={updateServiceWorker} className="w-full" primary>
            <p className="w-full">Mettre à jour</p>
          </Button>

          <Button secondary className="w-full" onClick={close}>
            <p className="w-full">Annuler</p>
          </Button>
        </div>
      }>
      <div>
        <h2 className="text-center">🎉 Nouvelle version 🎉</h2>

        <p className="my-5 text-center text-base">
          Une nouvelle version est disponible !
        </p>

        <div className="bubble bubble--info">
          <IconInfo className="shrink-0 text-blue-500" />
          <p className="text-xs">
            La mise à jour est recommandée pour éviter tout conflit, sauf si
            vous n'avez pas de connexion internet.
          </p>
        </div>
      </div>
    </Modal>
  );
};
