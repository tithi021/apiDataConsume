var path = require('path')
  , rootPath = path.normalize(__dirname + '/..')

module.exports = {
  development: {
    db: 'mongodb://localhost/consumedata',
    root: rootPath,
    app: {
      name: 'consumedata'
    }
  }
  
}