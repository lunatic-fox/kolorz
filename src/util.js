/**
 @author Josélio de S. C. Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio de S. C. Júnior - 2022
 @license MIT
*//***/

const rgx = require('./regexps');
const ifn = require('./internal-functions');
const hslMethods = require('./hsl-methods');
const CSSColorList = require('./css-color-list');

const Kolorz = Object.freeze({
  css(color = '') {
    const found = Object.keys(CSSColorList).find(e => e === color);

    ifn.system = 'css';
    
    return Object.freeze({
      toHex: found ? CSSColorList[found] : '',
      ...this.hex(found ? CSSColorList[found] : '')
    });
  },
  hex(color = '') {
    ifn.color = color.replace(rgx.space, '') ?? '';

    let hslM = hslMethods(this);

    if (ifn.system === 'css')
      hslM = hslMethods(this, true);

    ifn.system = 'hex';

    return Object.freeze({
      get toRGB() {
          return ifn.toRGB;
        },
      get toHSL() {
        return ifn.toHSL;
      },
      ...hslM
    });
  },
  hexa(color = '') {
    ifn.color = color.replace(rgx.space, '') ?? '';
    ifn.system = 'hexa';

    return Object.freeze({
      get toRGBA() {
        return ifn.toRGBA;
      },
      get toHSLA() {
        return ifn.toHSLA;
      },
      ...hslMethods(this)
    });
  },
  rgb(color = '') {
    ifn.color = color.replace(rgx.space, '') ?? '';
    ifn.system = 'rgb';

    return Object.freeze({
      get toHex() {
        return ifn.toHex;
      },
      get toHSL() {
        return ifn.toHSL;
      },
      ...hslMethods(this)
    });
  },
  rgba(color = '') {
    ifn.color = color.replace(rgx.space, '') ?? '';
    ifn.system = 'rgba';

    return Object.freeze({
      get toHexa() {
        return ifn.toHexa;
      },
      get toHSLA() {
        return ifn.toHSLA;
      },
      ...hslMethods(this)
    });
  },
  hsl(color = '') {
    ifn.color = color.replace(rgx.space, '') ?? '';
    ifn.system = 'hsl';

    return Object.freeze({
      get toHex() {
        return ifn.toHex;
      },
      get toRGB() {
        return ifn.toRGB;
      },
      ...hslMethods(this)
    });
  },
  hsla(color = '') {
    ifn.color = color.replace(rgx.space, '') ?? '';
    ifn.system = 'hsla';

    return Object.freeze({
      get toHexa() {
        return ifn.toHexa;
      },
      get toRGBA() {
        return ifn.toRGBA;
      },
      ...hslMethods(this)
    });
  }
});

module.exports = Kolorz;
