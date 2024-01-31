import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'Hello Vitest' } })

    // const computedStyle = getComputedStyle(wrapper);
    // expect(computedStyle.maxHeight).toBe(maxHeight);
    // expect(computedStyle.overflowY).toBe("auto");

    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
