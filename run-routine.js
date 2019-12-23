var fs = require('fs');
const fileName = 'mona-lisa-leonardo-da-vinci-la-gioconda-oil-painting-40997.jpeg'
const fA = 'mona-sml.jpeg'
const fB = 'test-image.png'
const fC = 'square20x20.png'
const PNG = require('pngjs').PNG
const outDisplay = []
fs.createReadStream(fB)
  .pipe(new PNG())
  .on('parsed', function () {
    console.log(this.width)
    for (var y = 0; y < this.height; y++) {
      for (var x = 0; x < this.width; x++) {
        var idx = (this.width * y + x) << 2;
        // invert color
        this.data[idx] = 255 - this.data[idx];
        this.data[idx + 1] = 255 - this.data[idx + 1];
        this.data[idx + 2] = 255 - this.data[idx + 2];
        // and reduce opacity
        this.data[idx + 3] = this.data[idx + 3] >> 1;
        const total = this.data[idx] + this.data[idx + 1] + this.data[idx + 2]
        total === 0 && outDisplay.push(' ') // black
        total > 0 && outDisplay.push('X') // whites
      }
      outDisplay.push('\n')
    }
    this.pack().pipe(fs.createWriteStream('out.png'));
    console.log(outDisplay.join(''))
  })

