import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';
import { useInitialState } from '../hooks/useInitialState';
import { AppContext } from '../context/AppContext';
import { Login } from '../containers/login/Login';
import { Products } from '../containers/productos/Products';
import { CreateDocument } from '../containers/CreateDocument/CreateDocument';
import { AuthContext } from '../context/AppContext';
import { UseAuth } from '../hooks/UseAuth';
import { Customers } from '../containers/customers/Customers';

export const App = () => {
  const initialState = useInitialState();
  const authState = UseAuth();
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const defaultPath = isLoggedIn === 'true' ? '/aplicacion/productos' : '/';

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );

  return (
    <AuthContext.Provider value={authState}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {isLoggedIn === 'true' ? (
              <Redirect to="/aplicacion/productos" />
            ) : (
              <Login />
            )}
          </Route>
          <PrivateRoute path="/aplicacion">
            <Layout>
              <AppContext.Provider value={initialState}>
                <PrivateRoute
                  exact
                  path="/aplicacion/productos"
                  component={Products}
                />
                <PrivateRoute
                  exact
                  path="/aplicacion/creardocumento"
                  component={CreateDocument}
                />
                <PrivateRoute
                  exact
                  path="/aplicacion/misclientes"
                  component={Customers}
                />
              </AppContext.Provider>
            </Layout>
          </PrivateRoute>
          <Redirect to={defaultPath} />
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};
