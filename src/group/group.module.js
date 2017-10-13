import modularize from 'lib/modularize';

import groupForm from './form/group.form.component';
import groupList from './list/group.list.component';
import groupProfile from './profile/group.profile.component';

import {routes} from './group.config';

export default modularize({
  components: {groupForm, groupList, groupProfile},
  routes
});