import 'vue-material/dist/vue-material.css';
import modularize from 'lib/modularize';

import layoutMain from './main/layout.main.component';
import layoutPitch from './pitch/layout.pitch.component';

export default modularize({
  components: {layoutMain, layoutPitch}
});