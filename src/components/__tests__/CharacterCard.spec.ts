import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import CharacterCard from '../CharacterCard.vue'
import type { ICharacter } from '@/types';
import mockCharacter from "@/components/__tests__/mockCharacter.json";

const characterObject = JSON.parse(JSON.stringify(mockCharacter)) as ICharacter;

describe('CharacterCard', () => {

  it('renders properly', () => {
    const wrapper = mount(CharacterCard, {
      props: { characterData: characterObject }
    });

    expect(wrapper).toBeTruthy();
    expect(wrapper.text()).toContain('Last known location');
    expect(wrapper.text()).toMatchSnapshot();
  });

  describe('CharacterCard UI Design', () => {

    const wrapper = mount(CharacterCard, {
      props: { characterData: characterObject }
    });

    const imgElem = wrapper.find("img");

    it('img element exist', () => {
        expect(imgElem.exists()).toBe(true);
      });

    it('render image properly', () => {
      const computedStyle = getComputedStyle(imgElem.element);

      expect(imgElem.classes()).toContain('card__image');
      expect(computedStyle.width).toBe('140px');
      expect(computedStyle.height).toBe('140px');
    });
  });
});
