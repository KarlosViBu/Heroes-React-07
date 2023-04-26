import { Navigate, Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
    <>
      <Routes>

        // RUTAS PUBLICAS
        {/* <Route path="login" element={ <LoginPage /> }/>
        <Route path="/*" element={<HeroesRoutes />} /> */}

        <Route path="login/*" element={
          <PublicRoute>
            <Routes>
              <Route path="/*" element={<LoginPage />} />
            </Routes>
          </PublicRoute>
          }
        />
        
        //otra forma
        {/* <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
          }
        /> */}

        // RUTAS PRIVADAS
        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />
        
      </Routes>
    </>
  )
}
