import { shallowMount } from '@vue/test-utils'
import Test from '../src/Test'
import Wrapper from '../src/Wrapper'
import Child from '../src/Child'

it('should find child component', () => {
  const wrapper = shallowMount(Test, {
    stubs: {
      Wrapper
    }
  })

  const found = wrapper.find('[data-test-id=child]')
  found.vm.$emit('click')

  expect(wrapper.emitted('click')[0][0]).toBe(1)
})

it('workaround', () => {
  const wrapper = shallowMount(Test, {
    stubs: {
      Wrapper
    }
  })

  const found = wrapper
    .findAll(Child)
    .wrappers.filter(w => w.is('[data-test-id=child]'))[0]
  found.vm.$emit('click')

  expect(wrapper.emitted('click')[0][0]).toBe(1)
})
