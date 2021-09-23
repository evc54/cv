import { fade, blur, fly, slide, scale } from 'svelte/transition';
import { cubicIn } from 'svelte/easing';

const params = {
  duration: 400,
  easing: cubicIn,
};
const transitions = [
  {
    fn: fade,
    params,
  },
  {
    fn: blur,
    params,
  },
  {
    fn: fly,
    params: {
      ...params,
      y: 100,
    },
  },
  {
    fn: slide,
    params,
  },
  {
    fn: scale,
    params,
  },
];

export default (node: Element, _) => {
  const index = Math.floor(Math.random() * transitions.length);
  const { fn, params } = transitions[index];

  return fn(node, params);
};
