/*
 *
 * UserLandingPage actions
 *
 */

import {
  DEFAULT_ACTION,
  TOGGLE_SIDEBAR,
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function toggleSidebar(isSideBarOpen) {
  return {
    type: TOGGLE_SIDEBAR,
    isSideBarOpen,
  };
}
