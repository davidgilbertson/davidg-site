var someOtherFile = require('./someOther');

console.log('  --  >  main.js:1 > ');

var it = someOtherFile.getIt();

console.log('  --  >  main.js:7 >  > two:', it);