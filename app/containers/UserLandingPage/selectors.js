import { createSelector } from 'reselect';

/**
 * Direct selector to the userLandingPage state domain
 */
const selectUserLandingPageDomain = (state) => state.get('userLandingPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by UserLandingPage
 */

const makeSelectUserLandingPage = () => createSelector(
  selectUserLandingPageDomain,
  (substate) => substate.toJS()
);

const makeSelectParentClassName = () => createSelector(
  selectUserLandingPageDomain,
  (substate) => substate.get('parentClassName')
);

export default makeSelectUserLandingPage;
export {
  selectUserLandingPageDomain,
  makeSelectParentClassName,
};
