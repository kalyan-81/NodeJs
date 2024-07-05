const fs = require("node:fs");

const zlib = require("node:zlib");

const gzip = zlib.createGzip();
const readableFileStream = fs.createReadStream("./file1.txt", {
  encoding: "utf-8",
  highWaterMark: 2,
});

readableFileStream.pipe(gzip).pipe(fs.WriteStream("./file2.txt.gz"));
const writableFileStream = fs.createWriteStream("./file2.txt");

readableFileStream.pipe(writableFileStream);
