module.exports = {
  pluginOptions: {
    electronBuilder: {
      preload: 'src/bridge/preload.ts'
    }
  }
}