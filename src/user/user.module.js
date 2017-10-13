import modularize from 'lib/modularize';

import userList from './list/user.list.component';
import {routes} from './user.config';

export default modularize({
  components: {userList},
  routes
});