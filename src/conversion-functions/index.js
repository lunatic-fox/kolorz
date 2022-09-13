/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior - 2022
 @license MIT
*//***/

const rgx = require('../regexps');

const cfn = {
  HEXtoRGB(str) {
    if (str.match(rgx.vHex)) {
      const
        conv = (x) => x.map(x => parseInt(x, 16)).join(', '),
        v = str.replace(rgx.hex, '');
      
      if (v.length === 3)
        return `rgb(${conv(v.split('').map(x => x.repeat(2)))})`;

      const arr = [];
      for (let i = 0; i < v.length; i += 2) 
        arr.push(v.slice(i, i + 2));

      if (v.length === 6)
        return `rgb(${conv(arr)})`;
    }
    return '';
  },
  RGBtoHEX(str) {
    if (str.match(rgx.vRGB)) {
      const v = str.replace(rgx.rgba, '').split(',');
      return `#${
        v.map(x => 
          +x < 16 ? `0${(+x).toString(16)}`
          : (+x).toString(16)).join('')
      }`;
    }
    return '';
  },
  HEXtoHSL(str) {
    if (str.match(rgx.vHex)) {
      const v = this.HEXtoRGB(str)
        .replace(rgx.rgba, '')
        .split(',')
        .map(x => +x)
        .join(',');

      return this.RGBtoHSL(v ?? '');
    }
    return '';
  },
  RGBtoHSL(str) {
    if (str.match(rgx.vRGB)) {
      const 
        v = str
          .replace(rgx.rgba, '')
          .split(',')
          .map(x => +x),
        
        c = v.slice(0, 3)
          .map(x => x / 255),
            
        cmax = Math.max(...c),
        cmin = Math.min(...c),
        d = cmax - cmin,

        h = d === 0 ? 0
        : cmax == c[0] ? 60 * (((c[1] - c[2]) / d) % 6)
        : cmax == c[1] ? 60 * (((c[2] - c[0]) / d) + 2)
        : 60 * (((c[0] - c[1]) / d) + 4),
                        
        H = h < 0 ? 360 + h : h,
        L = (cmax + cmin) / 2,
        S = d === 0 ? 0 : d / (1 - Math.abs(2 * L - 1)),
            
        hsl = [
          H.toFixed(), 
          `${(S * 100).toFixed()}%`,
          `${(L * 100).toFixed()}%`
        ].join(', ');
  
      return `hsl(${hsl})`;
    }
    return '';
  },
  HSLtoRGB(str) {
    if (str.match(rgx.vHSL)) {
      const v = str
        .replace(rgx.hsla, '')
        .split(',')
        .map(x => +x);

      const 
        H = v[0],
        S = v[1] / 100,
        L = v[2] / 100,
        Z = (1 - Math.abs(2 * L - 1)) * S,
        X = Z * (1 - Math.abs((H / 60) % 2 - 1)),
        m = L - Z / 2,
        rgb = 
            (H >= 0 && H < 60 ? [Z, X, 0]
          : H >= 60 && H < 120 ? [X, Z, 0]
          : H >= 120 && H < 180 ? [0, Z, X]
          : H >= 180 && H < 240 ? [0, X, Z]
          : H >= 240 && H < 300 ? [X, 0, Z]
          : [Z, 0, X])
            .map(x => (Math.abs((x + m) * 255)).toFixed())
            .join(', ');

      return `rgb(${rgb})`;
    }
    return '';
  },
  HSLtoHEX(str) {
    return this.RGBtoHEX(this.HSLtoRGB(str).replace(rgx.space, ''));
  },
  alpha(str, toDecimal) {
    if (toDecimal) 
      return `${Math.round((parseInt(str, 16) / 255) * 1e3) / 1e3}`;
    const hex = Math.round(+str * 255);
    return hex < 16 ? `0${hex.toString(16)}` : hex.toString(16);
  },
  HEXAtoRGBA(str) {
    if (str.match(rgx.vHexa)) {
      const v = str.replace(rgx.hex, '');
      if (v.length === 4) {
        const 
          w = this.HEXtoRGB(v.substring(0, 3))
            .replace('rgb', 'rgba')
            .replace(')', ''),
          a = this.alpha(v.substring(3).repeat(2), true);
        return `${w}, ${a})`;
      }
      if (v.length === 8) {
        const 
          w = this.HEXtoRGB(v.substring(0, 6))
            .replace('rgb', 'rgba')
            .replace(')', ''),
          a = this.alpha(v.substring(6), true);
        return `${w}, ${a})`;
      }
    }
    return '';
  },
  RGBAtoHEXA(str) {
    if (str.match(rgx.vRGBA)) {
      const v = str.replace(rgx.rgba, '').split(',');
      const p = this.RGBtoHEX(v.slice(0, 3).join(','));
      const a = this.alpha(v[3]);
      return `${p}${a}`;
    }
    return '';
  },
  HEXAtoHSLA(str) {
    if (str.match(rgx.vHexa)) {
      const v = str.replace(rgx.hex, '');
      if (v.length === 4) {
        const 
          w = this.HEXtoHSL(v.substring(0, 3))
            .replace('hsl', 'hsla')
            .replace(')', ''),
          a = this.alpha(v.substring(3).repeat(2), true);
        return `${w}, ${a})`;
      }
      if (v.length === 8) {
        const 
          w = this.HEXtoHSL(v.substring(0, 6))
            .replace('hsl', 'hsla')
            .replace(')', ''),
          a = this.alpha(v.substring(6), true);
        return `${w}, ${a})`;
      }
    }
    return '';
  },
  RGBAtoHSLA(str) {
    if (str.match(rgx.vRGBA)) {
      const v = str.replace(rgx.rgba, '').split(',');
      const p = this.RGBtoHSL(v.slice(0, 3).join(','))
        .replace('hsl', 'hsla')
        .replace(')', '');
      return `${p}, ${Math.round(+v[3] * 1e3) / 1e3})`;
    }
    return '';
  },
  HSLAtoRGBA(str) {
    if (str.match(rgx.vHSLA)) {
      const v = str.replace(rgx.hsla, '').split(',');
      const p = this.HSLtoRGB(v.slice(0, 3).join(','))
        .replace('rgb', 'rgba')
        .replace(')', '');
      return `${p}, ${Math.round(+v[3] * 1e3) / 1e3})`;
    }
    return '';
  },
  HSLAtoHEXA(str) {
    if (str.match(rgx.vHSLA)) {
      const v = str.replace(rgx.hsla, '').split(',');
      const p = this.RGBtoHEX(this.HSLtoRGB(v.slice(0, 3).join(',')).replace(rgx.space, ''));
      const a = this.alpha(v[3]);
      return `${p}${a}`;
    }
    return '';
  }
};

module.exports = cfn;
