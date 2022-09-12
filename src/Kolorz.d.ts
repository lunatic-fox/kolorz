/**
 @author Josélio de S. C. Júnior <joseliojrx25@gmail.com>
 @copyright Josélio de S. C. Júnior - 2022
 @license MIT
  
  MIT License

  Copyright (c) 2022 Josélio Júnior

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.

*//***/

interface ResponseOptions {
  /** 
  Returns the hexadecimal color pattern string.
  
  If no or invalid color pattern, the value is an empty string. */
  toHex: string;

  /** 
  Returns the HSL color pattern string.
  
  If no or invalid color pattern, the value is an empty string. */
  toHSL: string;

  /** 
  Returns the RGB color pattern string.
  
  If no or invalid color pattern, the value is an empty string. */
  toRGB: string;

  /** 
  Returns the hexadecimal-alpha color pattern string.
    
  If no or invalid color pattern, the value is an empty string. */
  toHexa: string;

  /** 
  Returns the HSLA color pattern string.
    
  If no or invalid color pattern, the value is an empty string. */
  toHSLA: string;

  /** 
  Returns the RGBA color pattern string.
    
  If no or invalid color pattern, the value is an empty string. */
  toRGBA: string;

  /** Returns the color pattern string in the same color system. */
  value: string;
}

interface HSLAMethods {
  /** Increase or decrease the hue value of the color pattern.
  @param degree A number between 0 and 360. */
  hue(degree: number): object

  /** Increase or decrease the saturation value of the color pattern.
  @param percentage A number between 0 and 1. */
  saturation(percentage: number): object

  /** Increase or decrease the lightness value of the color pattern.
  @param percentage A number between 0 and 1. */
  lightness(percentage: number): object

  /** Increase or decrease the alpha value of the color pattern.
  @param percentage A number between 0 and 1. */
  alpha(percentage: number): object
}

interface HSLMethods extends Omit<HSLAMethods, 'alpha'> {}

type CSSToBefore = Pick<ResponseOptions, 'toRGB' | 'toHSL' | 'toHex'> & HSLMethods;
type CSSToAfter = Pick<ResponseOptions, 'toRGB' | 'toHSL' | 'toHex'>;
type HexToBefore = Pick<ResponseOptions, 'toRGB' | 'toHSL'> & HSLMethods;
type HexToAfter = Pick<ResponseOptions, 'toRGB' | 'toHSL' | 'value'>;
type RGBToBefore = Pick<ResponseOptions, 'toHex' | 'toHSL'> & HSLMethods;
type RGBToAfter = Pick<ResponseOptions, 'toHex' | 'toHSL' | 'value'>;
type HSLToBefore = Pick<ResponseOptions, 'toHex' | 'toRGB'> & HSLMethods;
type HSLToAfter = Pick<ResponseOptions, 'toHex' | 'toRGB' | 'value'>;
type HexaToBefore = Pick<ResponseOptions, 'toRGBA' | 'toHSLA'> & HSLAMethods;
type HexaToAfter = Pick<ResponseOptions, 'toRGBA' | 'toHSLA' | 'value'>;
type RGBAToBefore = Pick<ResponseOptions, 'toHexa' | 'toHSLA'> & HSLAMethods;
type RGBAToAfter = Pick<ResponseOptions, 'toHexa' | 'toHSLA' | 'value'>;
type HSLAToBefore = Pick<ResponseOptions, 'toHexa' | 'toRGBA'> & HSLAMethods;
type HSLAToAfter = Pick<ResponseOptions, 'toHexa' | 'toRGBA' | 'value'>;

interface CSSOptions extends CSSToBefore {
  hue(degree: number): CSSToAfter
  saturation(percentage: number): CSSToAfter
  lightness(percentage: number): CSSToAfter
}

interface HexOptions extends HexToBefore {
  hue(degree: number): HexToAfter
  saturation(percentage: number): HexToAfter
  lightness(percentage: number): HexToAfter
}

interface RGBOptions extends RGBToBefore {
  hue(degree: number): RGBToAfter
  saturation(percentage: number): HexToAfter
  lightness(percentage: number): HexToAfter
}

interface HSLOptions extends HSLToBefore {
  hue(degree: number): HSLToAfter
  saturation(percentage: number): HexToAfter
  lightness(percentage: number): HexToAfter
}

interface HexaOptions extends HexaToBefore {
  hue(degree: number): HexaToAfter
  saturation(percentage: number): HexaToAfter
  lightness(percentage: number): HexaToAfter
  alpha(percentage: number): HexaToAfter
}

interface RGBAOptions extends RGBAToBefore {
  hue(degree: number): RGBAToAfter
  saturation(percentage: number): RGBAToAfter
  lightness(percentage: number): RGBAToAfter
  alpha(percentage: number): RGBAToAfter
}

interface HSLAOptions extends HSLAToBefore {
  hue(degree: number): HSLAToAfter
  saturation(percentage: number): HSLAToAfter
  lightness(percentage: number): HSLAToAfter
  alpha(percentage: number): HSLAToAfter
}

interface Kolorz {
  /** Validate the color pattern.
  @param color A valid CSS color name. */
  css(color: 'aliceblue'|'antiquewhite'|'aqua'|'aquamarine'|'azure'|'beige'|'bisque'|'black'|'blanchedalmond'|'blue'|'blueviolet'|'brown'|'burlywood'|'cadetblue'|'chartreuse'|'chocolate'|'coral'|'cornflowerblue'|'cornsilk'|'crimson'|'cyan'|'darkblue'|'darkcyan'|'darkgoldenrod'|'darkgray'|'darkgrey'|'darkgreen'|'darkkhaki'|'darkmagenta'|'darkolivegreen'|'darkorange'|'darkorchid'|'darkred'|'darksalmon'|'darkseagreen'|'darkslateblue'|'darkslategray'|'darkslategrey'|'darkturquoise'|'darkviolet'|'deeppink'|'deepskyblue'|'dimgray'|'dimgrey'|'dodgerblue'|'firebrick'|'floralwhite'|'forestgreen'|'fuchsia'|'gainsboro'|'ghostwhite'|'gold'|'goldenrod'|'gray'|'grey'|'green'|'greenyellow'|'honeydew'|'hotpink'|'indianred'|'indigo'|'ivory'|'khaki'|'lavender'|'lavenderblush'|'lawngreen'|'lemonchiffon'|'lightblue'|'lightcoral'|'lightcyan'|'lightgoldenrodyellow'|'lightgray'|'lightgrey'|'lightgreen'|'lightpink'|'lightsalmon'|'lightseagreen'|'lightskyblue'|'lightslategray'|'lightslategrey'|'lightsteelblue'|'lightyellow'|'lime'|'limegreen'|'linen'|'magenta'|'maroon'|'mediumaquamarine'|'mediumblue'|'mediumorchid'|'mediumpurple'|'mediumseagreen'|'mediumslateblue'|'mediumspringgreen'|'mediumturquoise'|'mediumvioletred'|'midnightblue'|'mintcream'|'mistyrose'|'moccasin'|'navajowhite'|'navy'|'oldlace'|'olive'|'olivedrab'|'orange'|'orangered'|'orchid'|'palegoldenrod'|'palegreen'|'paleturquoise'|'palevioletred'|'papayawhip'|'peachpuff'|'peru'|'pink'|'plum'|'powderblue'|'purple'|'rebeccapurple'|'red'|'rosybrown'|'royalblue'|'saddlebrown'|'salmon'|'sandybrown'|'seagreen'|'seashell'|'sienna'|'silver'|'skyblue'|'slateblue'|'slategray'|'slategrey'|'snow'|'springgreen'|'steelblue'|'tan'|'teal'|'thistle'|'tomato'|'turquoise'|'violet'|'wheat'|'white'|'whitesmoke'|'yellow'|'yellowgreen'): CSSOptions;

  /** Validate the color pattern.
  @param color A valid hexadecimal color pattern string. */
  hex(color: string): HexOptions;

  /** Validate the color pattern.
  @param color A valid RGB color pattern string. */
  rgb(color: string): RGBOptions;

  /** Validate the color pattern.
  @param color A valid HSL color pattern string. */
  hsl(color: string): HSLOptions;

  /** Validate the color pattern.
  @param color A valid hexadecimal-alpha color pattern string. */
  hexa(color: string): HexaOptions;

  /** Validate the color pattern.
  @param color A valid RGBA color pattern string. */
  rgba(color: string): RGBAOptions;

  /** Validate the color pattern.
  @param color A valid HSLA color pattern string. */
  hsla(color: string): HSLAOptions;
}

declare var Kolorz: Kolorz;
export = Kolorz;
