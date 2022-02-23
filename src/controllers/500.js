const path = require('path');
const handle500 = (err, req, res, next) => {
  res.status(500).sendfile(path.join(__dirname, '..', '..', 'public', 'pages', '500.html'));
};
module.exports = handle500;
