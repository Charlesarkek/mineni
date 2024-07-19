const noop = () => {};

const config = {
  sphere: noop,
  // other properties...
};

// Somewhere in the code
config.sphere(); // This will do nothing
