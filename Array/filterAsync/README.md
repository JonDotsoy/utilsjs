## How to install

```
npm install @jondotsoy/filter-async
```

## How to use

```javascript
// ES5
const {filterAsync} = require("@jondotsoy/filter-async")
// ES6
import filterAsync from "@jondotsoy/filter-async"

await filterAsync([1, 2, 3, 4, 5, 6, 7, 8], async (el, indexEl, arr) => (el % 2 === 0))
// => [2, 4, 6, 8]
```

### use as array.filterAsync

```javascript
// ES5
require("@jondotsoy/filter-async/polyfill")
// ES6
import "@jondotsoy/filter-async/polyfill"

await [1, 2, 3, 4, 5, 6, 7, 8].filterAsync(async (el, indexEl, arr) => (el % 2 === 0))
// .then(console.log)
// => [2, 4, 6, 8]
```
