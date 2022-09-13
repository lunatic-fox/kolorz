/**
 @author Josélio de S. C. Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio de S. C. Júnior - 2022
 @license MIT
*//***/

const ifn = require('../internal-functions');

const hslMethods = (context, isCSS) => {
  const deletePProps = (x) => {
    delete x.hue;
    delete x.saturation;
    delete x.lightness;
    delete x.alpha;
  };

  /**
  @param {number} param 
  @param {number} fnN */
  const response = (param, fnN) => {
    const view = ifn.hslValues(param, fnN);
    const obj = {
      ...context[ifn.system](view),
      [isCSS ? 'toHex' : 'value']: view
    }
    deletePProps(obj);

    if (typeof param !== 'number')
      return Object.fromEntries(
        Object.keys(obj)
          .map(k => [k, ''])
      );

    return param ? obj : ifn.color;
  }

  const methods = {
    hue: (degree) => response(degree, 0),
    saturation: (percentage) => response(percentage, 1),
    lightness: (percentage) => response(percentage, 2),
    alpha: (percentage) => response(percentage, 3)
  };

  if (ifn.system === 'hex' || ifn.system === 'rgb' || ifn.system === 'hsl')
    delete methods.alpha;

  return methods;
};

module.exports = hslMethods;
