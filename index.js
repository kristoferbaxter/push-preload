const restify = require('restify');
const path = require('path');
const {exec} = require('child_process');

const server = restify.createServer({
  name: 'push and preload'
});
server.get(/\/static\/?.*\//, restify.plugins.serveStatic({
  directory: __dirname,
  default: path.resolve(__dirname, 'header', 'templates.gbx')
}));

server.get(/\/element\/?.*\//, restify.plugins.serveStatic({
  directory: __dirname,
  default: path.resolve(__dirname, 'element', 'index.html')
}));
server.get(/\/header\/?.*\//, function(req, res, next) {
  res.setHeader('Link', '</static/templates.gbx>; rel=preload; as=fetch');
  next();
}, restify.plugins.serveStatic({
  directory: __dirname,
  default: path.resolve(__dirname, 'header', 'index.html')
}));

server.listen(5001, function() {
  console.log(`${server.name} listening at ${server.url}`)
});

exec('simplehttp2server -config ./push/config.json');