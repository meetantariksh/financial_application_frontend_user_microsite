/**
 *
 * Asynchronously loads the component for SideMenu
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
