
import { fromJS } from 'immutable';
import userLandingPageReducer from '../reducer';

describe('userLandingPageReducer', () => {
  it('returns the initial state', () => {
    expect(userLandingPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
