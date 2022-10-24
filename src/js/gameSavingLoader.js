
import json from './parser.js';

import read from './reader.js';

export default class gameSavingLoader{
    static load(){ 
        const result = (async () => {
            const rd = await read();
            const result = await json(rd);
            return result;
          })();
          return result;
    }
}




gameSavingLoader.load().then(value =>{
    console.log(value)
})

//export default