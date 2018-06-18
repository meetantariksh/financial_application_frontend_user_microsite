/**
*
* AuthenticationGuard
*
*/
import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

function authenticationGuard() {
  const authToken = window.sessionStorage.getItem(_globals.config.login_session_storage_name);
  console.log(authToken);
  if (authToken && authToken !== '') {
        /* let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;*/
      return true;
    }
  return false;
}

export const ProtectedRoute = ({ component: Component, ...extras }) => (
  <Route
    {...extras} render={(props) => (
        authenticationGuard() ? (
          <Component {...props} />
        ) : (
            <Redirect
              to={{
              pathname: _globals.config.home_page_redirection,
              state: { from: props.location },
            }}
          />
        )
      )}
    />
);
