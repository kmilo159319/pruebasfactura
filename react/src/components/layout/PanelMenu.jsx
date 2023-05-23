import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import {
  LinkTo,
  LogoPanel,
  MenuSectionDashboard,
  MenuSectionPanel,
  Panel,
} from '../../styles/components/layouts/Main';

export const PanelMenu = () => {
  const documentoMatch = useRouteMatch('/aplicacion/creardocumento');
  const productosMatch = useRouteMatch('/aplicacion/productos');
  const clientesMatch = useRouteMatch('/aplicacion/misclientes');
  const documentosMatch = useRouteMatch('/aplicacion/documentoscreados');

  return (
    <Panel>
      <LogoPanel className="mb-5" />
      <MenuSectionDashboard className="d-flex align-items-center ms-2">
        <div className="ms-2" />
        <h2 className="mt-2">Dashboard</h2>
      </MenuSectionDashboard>
      <MenuSectionPanel className="ms-2">
        <LinkTo
          to="/aplicacion/creardocumento"
          className={`my-3 d-flex align-items-center ${
            documentoMatch ? 'active' : ''
          }`}
        >
          <div className="my-3 d-flex align-items-center">
            <i class="fa-solid fa-truck-ramp-box mx-3"></i>Crear documento
          </div>
        </LinkTo>
        <LinkTo
          to="/aplicacion/productos"
          className={`my-3 d-flex align-items-center ${
            productosMatch ? 'active' : ''
          }`}
        >
          <div className="my-3 d-flex align-items-center">
            <i class="fa-solid fa-box-open mx-3"></i>Mis productos
          </div>
        </LinkTo>
        <LinkTo
          to="/aplicacion/misclientes"
          className={`my-3 d-flex align-items-center ${
            clientesMatch ? 'active' : ''
          }`}
        >
          <div className="my-3 d-flex align-items-center">
            <i class="fa-regular fa-user mx-3"></i>Mis clientes
          </div>
        </LinkTo>
        <LinkTo
          to="/aplicacion/documentoscreados"
          className={`my-3 d-flex align-items-center ${
            documentosMatch ? 'active' : ''
          }`}
        >
          <div className="my-3 d-flex align-items-center">
            <i class="fa-solid fa-box-archive mx-3"></i>Documentos creados
          </div>
        </LinkTo>
      </MenuSectionPanel>
    </Panel>
  );
};
