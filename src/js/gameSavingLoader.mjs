
import json from './parser.mjs';

import read from './reader.mjs';

export default class gameSavingLoader{
    static load(){ 
        const result = (async () => {
            const rd = await read();
            const result = await json(rd);
            return result;
          })(); // Прошу объяснить как работает эта конструкция из двух круглых скобок
          return result;
    }
}




//gameSavingLoader.load().then(value =>{
  //  console.log(value)
//})