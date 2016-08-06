# pump

Promise-enhancing wrapper for (pump)[https://github.com/mafintosh/pump].


```
npm install pump
```

## Usage

Simply pass the streams you want to pipe together to pump and add an optional callback

``` js
var pump = require('pump-promise')
var fs = require('fs')

var source = fs.createReadStream('/dev/random')
var dest = fs.createWriteStream('/dev/null')

pump(source, dest).then(function() {
  console.log('pipe finished', err)
}).catch(function(err) {
  console.log('pipe error', err)
});
```
