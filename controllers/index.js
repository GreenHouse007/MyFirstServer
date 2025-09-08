const awesomeFunction = (req, res, next) => {
  res.write("Hello, World!\n");
  next();
};

const tooeleTech = (req, res) => {
  res.end("Tooele Tech is Awesome!");
};

module.exports = { awesomeFunction, tooeleTech };
