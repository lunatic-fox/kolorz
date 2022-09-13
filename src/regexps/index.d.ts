/**
 @author Josélio de S. C. Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio de S. C. Júnior - 2022
 @license MIT
*//***/

interface RGX {
  /** Valid hexadecimal color pattern. */
  vHex: RegExp;
  
  /** Valid RGB color pattern. */
  vRGB: RegExp;
  
  /** Valid HSL color pattern. */
  vHSL: RegExp;
  
  /** Valid hexadecimal-alpha color pattern. */
  vHexa: RegExp;
  
  /** Valid RGBA color pattern. */
  vRGBA: RegExp;
  
  /** Valid HSLS color pattern. */
  vHSLA: RegExp;
  
  /** Remove hexadecimal pattern decorations. */
  hex: RegExp;
  
  /** Remove RGBA pattern decorations. */
  rgba: RegExp;
  
  /** Remove HSLA pattern decorations. */
  hsla: RegExp;
  
  /** Remove whitespace. */
  space: RegExp;
}

declare const rgx: RGX;
export = rgx;
