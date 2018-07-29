/*
 *
 * SeccondfactorAuthentication reducer
 *
 */

import { fromJS } from 'immutable';
import {
  SET_SECCOND_FACTOR_AUTHENTICATION,
  VALIDATE_AUTHENTICATION_LOADING,
  VALIDATE_AUTHENTICATION_COMPLETE,
  VALIDATE_AUTHENTICATION_ERROR,
  RESET_VALIDATE_AUTHENTICATION,
} from './constants';

const initialState = fromJS({
  seccond_factor_validation: {},
  validate_authentication_loading: false,
  validate_authentication_complete: false,
  validate_authentication_error: false,
  authentication_result: {},
  authentication_error: {},
});

function seccondfactorAuthenticationReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SECCOND_FACTOR_AUTHENTICATION:
      return state
        .set('seccond_factor_validation', action.seccondFactorValidation);
    case VALIDATE_AUTHENTICATION_LOADING:
      return state
        .set('validate_authentication_loading', true)
        .set('validate_authentication_complete', false)
        .set('validate_authentication_error', false);
    case VALIDATE_AUTHENTICATION_COMPLETE:
      return state
        .set('validate_authentication_loading', false)
        .set('validate_authentication_complete', true)
        .set('validate_authentication_error', false)
        .set('authentication_result', action.validationResult);
    case VALIDATE_AUTHENTICATION_ERROR:
      return state
        .set('validate_authentication_loading', false)
        .set('validate_authentication_complete', false)
        .set('validate_authentication_error', true)
        .set('authentication_error', action.error);
    case RESET_VALIDATE_AUTHENTICATION:
      return state
        .set('validate_authentication_loading', false)
        .set('validate_authentication_complete', false)
        .set('validate_authentication_error', false)
        .set('authentication_error', {})
        .set('authentication_result', {});

    default:
      return state;
  }
}

export default seccondfactorAuthenticationReducer;
