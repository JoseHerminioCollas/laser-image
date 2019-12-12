var fs = require('fs');
const fileName = 'mona-lisa-leonardo-da-vinci-la-gioconda-oil-painting-40997.jpeg'
const fA = 'mona-sml.jpeg'
const fB = 'test-image.png'
// fs.readFile(fB, function (err, data) {
//   console.log(data)
//   const arr = new Uint8Array(data);
//   let i = 0
//   let j = 0
//   const out = []
//   while (i < arr.length) {
//     // console.log(arr[j], arr[j + 1], arr[j + 2])
//     const total = arr[j] + arr[j + 1] + arr[j + 2]
//     if (arr[j] > 150) {
//       out.push('X')
//     } else {
//       out.push(' ')
//     }
//     i += 1
//     j += 4
//     if (i % 100 === 0) out.push('\n')
//   }
//   console.log(out.join(''))
// });
function b64ToUint6 (nChr) {

  return nChr > 64 && nChr < 91 ?
      nChr - 65
    : nChr > 96 && nChr < 123 ?
      nChr - 71
    : nChr > 47 && nChr < 58 ?
      nChr + 4
    : nChr === 43 ?
      62
    : nChr === 47 ?
      63
    :
      0;

}
function base64DecToArr (sBase64, nBlockSize) {

  var
    sB64Enc = sBase64.replace(/[^A-Za-z0-9\+\/]/g, ""), nInLen = sB64Enc.length,
    nOutLen = nBlockSize ? Math.ceil((nInLen * 3 + 1 >>> 2) / nBlockSize) * nBlockSize : nInLen * 3 + 1 >>> 2, aBytes = new Uint8Array(nOutLen);

  for (var nMod3, nMod4, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
    nMod4 = nInIdx & 3;
    nUint24 |= b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
    if (nMod4 === 3 || nInLen - nInIdx === 1) {
      for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
        aBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
      }
      nUint24 = 0;
    }
  }

  return aBytes;
}
// function _base64ToArrayBuffer(base64) {
//   var binary_string = window.atob(base64);
//   var len = binary_string.length;
//   var bytes = new Uint8Array(len);
//   for (var i = 0; i < len; i++) {
//       bytes[i] = binary_string.charCodeAt(i);
//   }
//   return bytes.buffer;
// }
const {encode, decode} = require('base64-arraybuffer');

function base64_encode(file) {
  // read binary data
  var bitmap = fs.readFileSync(file);
  // convert binary data to base64 encoded string
  // var uintArray = Base64Binary.decode(base64_string);  
  const buff = new Buffer(bitmap).toString('base64');
  // const arr = _base64ToArrayBuffer(buff)
  var view = new Int32Array(decode(buff));
  console.log(view.length)
  let arr = view
  let i = 0
  let j = 0
  const out = []
  while (i < arr.length) {
    // console.log(arr[j], arr[j + 1], arr[j + 2])
    const total = arr[j] + arr[j + 1] + arr[j + 2]
    if (total > 50) {
      out.push('X')
    } else {
      out.push('-')
    }
    i += 4
    j += 4
    if (i % (200) === 0) out.push('\n')
  }
  console.log(out.join(''))
}
//for (var i = 0; i < decodedData.length; i++) 
// array[i] = characters.charCodeAt(i);
// }
base64_encode(fB);
