<script>
export default {
  name: 'ModalJsx',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      required: true,
    },
  },
  render() {
    return (this.show) ? <div class="modal">
      <p>{this.message}</p>
      <button onClick={this.clickCancelHandler}>Cancel</button>
      <button onClick={this.clickOkHandler}>Ok</button>
    </div> : null
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
