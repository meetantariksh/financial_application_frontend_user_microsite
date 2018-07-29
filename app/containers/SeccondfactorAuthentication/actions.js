/*
 *
 * SeccondfactorAuthentication actions
 *
 */

import {
  DEFAULT_ACTION,
  SET_SECCOND_FACTOR_AUTHENTICATION,
  VALIDATE_AUTHENTICATION_LOADING,
  VALIDATE_AUTHENTICATION_COMPLETE,
  VALIDATE_AUTHENTICATION_ERROR,
  RESET_VALIDATE_AUTHENTICATION,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function setSeccondFactorValidation(seccondFactorValidation) {
  return {
    type: SET_SECCOND_FACTOR_AUTHENTICATION,
    seccondFactorValidation,
  };
}

export function validateAuthentication(authenticationInput) {
  return {
    type: VALIDATE_AUTHENTICATION_LOADING,
    authenticationInput,
  };
}

export function authenticationValidationComplete(validationResult) {
  return {
    type: VALIDATE_AUTHENTICATION_COMPLETE,
    validationResult,
  };
}

export function validationError(error) {
  return {
    type: VALIDATE_AUTHENTICATION_ERROR,
    error,
  };
}

export function resetSeccondFactorAuthentication() {
  return {
    type: RESET_VALIDATE_AUTHENTICATION,
  };
}
