import { createSelector } from 'reselect';

/**
 * Direct selector to the seccondfactorAuthentication state domain
 */
const selectSeccondfactorAuthenticationDomain = (state) => state.get('seccondfactorAuthentication');

/**
 * Other specific selectors
 */


/**
 * Default selector used by SeccondfactorAuthentication
 */

const makeSelectSeccondfactorAuthentication = () => createSelector(
  selectSeccondfactorAuthenticationDomain,
  (substate) => substate.toJS()
);

export default makeSelectSeccondfactorAuthentication;
export {
  selectSeccondfactorAuthenticationDomain,
};
