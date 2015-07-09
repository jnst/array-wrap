# array-wrap

Wrap to array


## Install

```
$ npm install --save array-wrap
```


## Usage

```js
var wrap = require('array-wrap');

wrap(0);
//=> [0]

wrap('a');
//=> ['a']

wrap([]);
//=> []

wrap(['x', 'y', 'z']);
//=> ['x', 'y', 'z']

wrap(null);
//=> []
```


## License

MIT © Jun Sato
