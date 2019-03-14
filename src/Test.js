import Wrapper from './Wrapper'
import Child from './Child'

export default {
  components: {
    Wrapper,
    Child
  },

  template: `
  <transition>
    <Wrapper>
      <Child data-test-id="child" @click="$emit('click', 1)" />
    </Wrapper>
  </transition>
  `
}
