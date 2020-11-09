# element-visible-percentage

Get the percentage of the height of an Element currently visible within the viewport.

- This function returns a `Number` with a value between 0 and 1, depending upon the vertical scroll position and size of the given `Element`.
- This is useful for determining the extent to which an element is within the viewport within vertically scrollable layouts.

**This package is compatible with Typescript**

## **Installation**

> `npm install element-visible-percentage --save`

or  

> `yarn add element-visible-percentage`  

---

## **Syntax**

> **`getPercentVisible(element);`**

### **Parameters**

- `element`:
  DOM `Element` to be measured (via `getBoundingClientRect()`).

### **Return value**  

- `getPercentVisible()` will return a `Number` with a value between 0 and 1, depending upon the vertical scroll position and size of the element.

---

## **Usage**

**Import the `getPercentVisible` function**

```
import { getPercentVisible } from "element-visible-percentage";
```

or

```
const { getPercentVisible } = require("element-visible-percentage")
```

**Sample implementations**

```  
// Returns a number between 0 and 1.
const elementVisiblePct = getPercentVisible(myElement); // 0.37629334
```
