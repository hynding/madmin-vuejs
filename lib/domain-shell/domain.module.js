import modularize from 'lib/modularize';

import domainForm from './form/domain.form.component';
import domainList from './list/domain.list.component';
import domainProfile from './profile/domain.profile.component';

import {routes} from './domain.config';

export default modularize({
  components: {domainForm, domainList, domainProfile},
  routes
});