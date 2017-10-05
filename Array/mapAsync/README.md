## How to install

```
npm install @jondotsoy/map-async
```

## How to use

```javascript
// ES5
const {mapAsync} = require("@jondotsoy/map-async")
// ES6
import mapAsync from "@jondotsoy/map-async"

await mapAsync([1, 2, 3, 4, 5, 6, 7, 8], async (el, indexEl, arr) => (el * 2))
// => [2, 4, 6, 8, 10, 12, 14, 16]
```

### use as array.mapAsync

```javascript
// ES5
require("@jondotsoy/map-async/polyfill")
// ES6
import "@jondotsoy/map-async/polyfill"

await [1, 2, 3, 4, 5, 6, 7, 8].mapAsync(async (el, indexEl, arr) => (el * 2))
// => [2, 4, 6, 8, 10, 12, 14, 16]
```
