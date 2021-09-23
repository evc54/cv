/**
 * Element scrolling with mouse move.
 * @param {HTMLElement} node html node
 * @returns {object}
 */
export function movable(node: HTMLElement) {
  let x: number;
  let y: number;

  function onMoveStart(e: MouseEvent) {
    x = e.clientX;
    y = e.clientY;
    node.addEventListener('mousemove', onMove);
    node.addEventListener('mouseup', onMoveEnd);
    node.addEventListener('mouseout', onMoveEnd);
  }

  function onMove(e: MouseEvent) {
    const dx = x - e.clientX;
    const dy = y - e.clientY;
    node.scrollLeft += dx;
    node.scrollTop += dy;
    x = e.clientX;
    y = e.clientY;
  }

  function onMoveEnd(e: MouseEvent) {
    node.removeEventListener('mousemove', onMove);
    node.removeEventListener('mouseup', onMoveEnd);
    node.removeEventListener('mouseout', onMoveEnd);
  }

  node.style.cursor = 'move';
  node.addEventListener('mousedown', onMoveStart);

  return {
    destroy() {
      node.style.cursor = null;
      node.removeEventListener('mousedown', onMoveStart);
    },
  };
}
