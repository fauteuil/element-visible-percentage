"use strict";
/**
 * Get the percentage of the height of an Element currently within the viewport.
 * @param {Element | null} element
 */
var getPercentVisible = function (element) {
    if (element === null) {
        return 0;
    }
    var _a = element.getBoundingClientRect(), top = _a.top, bottom = _a.bottom, height = _a.height;
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    return top > viewportHeight
        ? 0
        : (Math.min(viewportHeight, bottom) - Math.max(0, top)) / height;
};
