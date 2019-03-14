export default {
  name: 'Wrapper',

  render() {
    const children = this.$slots.default
    return children[0]
  }
}
