export class LayoutMainController {

  get methods() {
    return {
      toggleLeftSidenav() {
        this.$refs.leftSidenav.toggle();
      },
      toggleRightSidenav() {
        this.$refs.rightSidenav.toggle();
      },
      closeRightSidenav() {
        this.$refs.rightSidenav.close();
      },
      open(ref) {
        console.log('Opened: ' + ref);
      },
      close(ref) {
        console.log('Closed: ' + ref);
      }
    }
  }

  data() {
    return {
      toolbarMenu: [{
        label: 'About Us',
        href: '#'
      },{
        label: 'Contact Us',
        href: '#'
      }]
    }
  }
}