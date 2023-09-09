/** @format */

const sizes = {
  mobile: 320,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
};

const device = Object.keys(sizes).reduce((accumulator, currentValue) => {
  const deviceSize = sizes[currentValue];
  accumulator[currentValue] = `(min-width: ${deviceSize}px)`;
  return accumulator;
}, {});

export default device;
