<script>
export default {
  name: 'ModalCreateElement',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  render (createElement) {
    return (this.show) ? createElement('div', {
      class: 'modal',
    }, [
      createElement('div', {
        class: 'content',
      }, this.$slots.default),
      createElement('button', {
        class: 'btn',
        on: {
          click: this.clickCancelHandler,
        }
      }, 'Cancel'),
      createElement('button', {
        class: 'btn',
        on: {
          click: this.clickOkHandler,
        }
      }, 'Ok'),
    ]) : null
  },
  methods: {
    clickCancelHandler() {
      console.log('Click on Cancel');
    },
    clickOkHandler() {
      console.log('Click on Ok');
    }
  }
}
</script>
