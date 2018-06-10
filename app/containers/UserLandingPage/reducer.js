/*
 *
 * UserLandingPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  TOGGLE_SIDEBAR,
} from './constants';

const initialState = fromJS({
  parentClassName: 'hold-transition skin-blue sidebar-mini',
  isSideBarOpen: true,
});

function userLandingPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case TOGGLE_SIDEBAR:
      return state
        .set('isSideBarOpen', action.isSideBarOpen);
    default:
      return state;
  }
}

export default userLandingPageReducer;
