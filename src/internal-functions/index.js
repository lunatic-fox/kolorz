/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior - 2022
 @license MIT
*//***/

const rgx = require('../regexps');
const cfn = require('../conversion-functions');

const ifn = {
  color: '',
  system: '',
  returns: {},
  get toHex() {
    return this.system === 'hsl' ? cfn.HSLtoHEX(this.color)
      : this.system === 'rgb' ? cfn.RGBtoHEX(this.color)
      : null;
  },
  get toRGB() {
    return this.system === 'hsl' ? cfn.HSLtoRGB(this.color)
      : this.system === 'hex' ? cfn.HEXtoRGB(this.color)
      : null;
  },
  get toHSL() {      
    return this.system === 'rgb' ? cfn.RGBtoHSL(this.color)
      : this.system === 'hex' ? cfn.HEXtoHSL(this.color)
      : null;
  },
  get toHexa() {
    return this.system === 'hsla' ? cfn.HSLAtoHEXA(this.color)
      : this.system === 'rgba' ? cfn.RGBAtoHEXA(this.color)
      : null;
  },
  get toRGBA() {
    return this.system === 'hsla' ? cfn.HSLAtoRGBA(this.color)
      : this.system === 'hexa' ? cfn.HEXAtoRGBA(this.color)
      : null;
  },
  get toHSLA() {
    return this.system === 'rgba' ? cfn.RGBAtoHSLA(this.color)
      : this.system === 'hexa' ? cfn.HEXAtoHSLA(this.color)
      : null;
  },
  hslValues(n, nf) {
    n ??= 0;
    let baseColor = '';

    if (this.system === 'hexa' || this.system === 'rgba') {
      baseColor = this.toHSLA.replace(rgx.hsla, '')
        .split(',')
        .map(e => +e);        
    } else if (this.system === 'hsla' || this.system === 'hsl') {
      baseColor = this.color.replace(rgx.hsla, '')
        .split(',')
        .map(e => +e);
    } else {
      baseColor = this.toHSL.replace(rgx.hsla, '')
        .split(',')
        .map(e => +e);
    }

    if (nf === 0) {
      baseColor[nf] += n;
      baseColor[nf] =
          baseColor[nf] > 360 ? 360
        : baseColor[nf] < 0 ? 0
        : baseColor[nf];
      baseColor[nf] = Math.round(baseColor[nf]);
    } else if (nf === 3) {
      baseColor[nf] += n;
      baseColor[nf] = Math.round(baseColor[nf] * 1e3) / 1e3;
      baseColor[nf] =
          baseColor[nf] > 1 ? 1 
        : baseColor[nf] < 0 ? 0
        : baseColor[nf];
    } else {
      baseColor[nf] += n * 100;
      baseColor[nf] =
          baseColor[nf] > 100 ? 100 
        : baseColor[nf] < 0 ? 0
        : baseColor[nf];
      baseColor[nf] = Math.round(baseColor[nf]);
    }
    
    baseColor = baseColor.join(',');
    

    if (baseColor.match(rgx.vHSL) || baseColor.match(rgx.vHSLA)) {
      switch (this.system) {
        case 'hex':
          this.color = cfn.HSLtoHEX(baseColor);
          break;
        case 'rgb':
          this.color = cfn.HSLtoRGB(baseColor);
          break;
        case 'hsl':
          baseColor = baseColor.split(',');
          this.color = `hsl(${baseColor[0]}, ${baseColor[1]}%, ${baseColor[2]}%)`;
          break;
        case 'hexa':
          this.color = cfn.HSLAtoHEXA(baseColor);
          break;
        case 'rgba':
          this.color = cfn.HSLAtoRGBA(baseColor);
          break;
        case 'hsla':
          baseColor = baseColor.split(',');
          this.color = baseColor[3] ? `hsla(${baseColor[0]}, ${baseColor[1]}%, ${baseColor[2]}%, ${baseColor[3]})` : '';
          break;
      }
      return this.color;
    }
    return '';
  }
};

module.exports = ifn;
