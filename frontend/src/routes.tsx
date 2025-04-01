import { Routes, Route } from 'react-router-dom';

import { ClientList } from './pages/ClientList';
import { ClientRegister } from './pages/ClientRegister';
import { DashboardClient } from './pages/Dashboard';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/clientes"
        element={
          <DashboardClient>
            <ClientList />{' '}
          </DashboardClient>
        }
      />

      <Route
        path="/clientes/cadastro"
        element={
          <DashboardClient>
            <ClientRegister />{' '}
          </DashboardClient>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
