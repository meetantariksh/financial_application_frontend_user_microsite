
import { fromJS } from 'immutable';
import seccondfactorAuthenticationReducer from '../reducer';

describe('seccondfactorAuthenticationReducer', () => {
  it('returns the initial state', () => {
    expect(seccondfactorAuthenticationReducer(undefined, {})).toEqual(fromJS({}));
  });
});
