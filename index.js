const server = require('./api/server.js');
const PORT = process.env.PORT || 3000;
if(!module.parent){
server.listen(PORT, () => {
  console.log(`Port I love you ${PORT}`);
});
}
 module.exports = server