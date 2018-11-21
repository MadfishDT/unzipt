const Zlib = require('../unzip.min').Zlib;
const fs = require('fs');
const path = require('path');
var compressed = fs.readFileSync(path.resolve(__dirname , './test.zip'));
var unzip = new Zlib.Unzip(compressed);

var filenames = unzip.getFilenames();
var externalFileAtt = unzip.getFileHeaderAttribute(filenames[0],'externalFileAttributes');
var compressedSize = unzip.getFileHeaderAttribute(filenames[0],'compressedSize');
var plainSize = unzip.getFileHeaderAttribute(filenames[0],'plainSize');
var permission = (externalFileAtt>>>16) & 0xfff
var uncompress = unzip.decompress(filenames[3]);

fs.writeFileSync(path.resolve(__dirname ,'./test'),uncompress);