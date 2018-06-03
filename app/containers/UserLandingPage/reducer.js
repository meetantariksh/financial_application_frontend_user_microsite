/*
 *
 * UserLandingPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({
  parentClassName: 'hold-transition skin-blue sidebar-mini',
});

function userLandingPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}

export default userLandingPageReducer;
