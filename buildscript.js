
const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
        './dist/main-es2015.js',
        './dist/polyfills-es2015.js',
        './dist/runtime-es2015.js'
]
await fs.ensureDir('elements')
await concat(files, 'elements/blocksurvey-widget.js')})()
