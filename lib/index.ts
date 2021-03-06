/**
 * Get the percentage of the height of an Element currently within the viewport.
 * @param {Element | null} element
 */
export const getPercentVisible = (element: Element | null): number => {
  if (element === null) {
    return 0;
  }
  const { top, bottom, height } = element.getBoundingClientRect();
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;

  return top > viewportHeight
    ? 0
    : (Math.min(viewportHeight, bottom) - Math.max(0, top)) / height;
};
