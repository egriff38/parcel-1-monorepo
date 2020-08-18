const Parcel = require("parcel-bundler")
const {resolve, join} = require("path")
module.exports = new Parcel(resolve(__dirname, "src/*.html"), {
  sourceMaps: false,
  outDir: join(__dirname, "../backend/dist")
})
