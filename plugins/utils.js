export const getPhotosFromDir = (dir) => {
  function importAll(r) {
    let images = {}
    r.keys().map((item, index) => {
      images[item.replace('./', '')] = r(item)
    })
    return images
  }

  return importAll(require.context(dir, false, /\.(png|jpe?g|svg)$/))
}
