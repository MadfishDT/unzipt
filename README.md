# unzipt
* **zlib js customizing for typescript and javscript**
* **zlib.js base. PKZIP implementation in JavaScript.**

**original zlibjs code**
* zlib min file: https://github.com/imaya/zlib.js.git

**version**
-
- 0.0.1: unzip buffer
- 0.0.2: files attribute method support
- 0.0.3: remove unecessary dependencies
- 0.0.4: readme change

**installation**
-
```
npm inatall unzipt
```

**support features:**
-
* unzip.min.js functions support
* typescript support
* pure javascript and d.ts code. no dependencies

**dependency:**
-
there is no dependencies

**Zlibjs PKZIP APIS**
* decompress(filename)
* getFileHeaderAttribute(filename, attributeName) : 0.0.2 or higher version
    - support attribute name
        1. 'needVersion'
        2. 'flags'
        3. 'compression'
        4. 'time'
        5. 'date'
        6. 'crc32'
        7. 'compressedSize'
        8. 'plainSize'
        9. 'internalFileAttributes'
        10. 'externalFileAttributes'
    - how to get file permission number like '0o777'
        ```javascript
        const unzip = new Zlib.Unzip(compressed, null);
        const filenames =  unzip.getFilenames();
        const externalFA = unzip.getFileHeaderAttribute(filenames[0], 'externalFileAttributes');
        const filemode = (externalFA >>> 16) & 0xffff;
        ```
    -in case windows file system, do not use 'externalFileAttibute'. if you file zipped in windows, all files in zip file have externalFileAttribute '0'. so if you write file with node fs and apply externlaFileAttribute '0', all of files might be read only file. in case of windows, if externlaFileAttribute is '0', assign fs write file mode = 0o777
     
* getFilenames()
* setPassword(password)
* Zlib TypeScript

```Typescript
import { Zlib } from 'zlibt';
import * as fs from 'fs';
    //compress
    const compressed = fs.readFileSync('./aig.zip');
    const unzip = new Zlib.Unzip(compressed, null);
    const names =  unzip.getFilenames();
    const uncompress = unzip.decompress(names[0]);
```
* Zlib JavaScript

```javascript
var  Zlib = require('zlibt').Zlib;

    //compress
    const Zlib = require('unzipt').Zlib;
    const fs = require('fs');

    var compressed = fs.readFileSync('./aig.zip');
    var unzip = new Zlib.Unzip(compressed);

    var filenames = unzip.getFilenames();
    var uncompress = unzip.decompress(filenames[0]);

```
