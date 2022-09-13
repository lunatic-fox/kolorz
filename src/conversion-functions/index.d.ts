/**
 @author Josélio de S. C. Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio de S. C. Júnior - 2022
 @license MIT
*//***/

interface ConvertionFunctions {
  /** Converts a hexadecimal color patter into a RGB color pattern. */
  HEXtoRGB(str: string): string
  
  /** Converts a RGB color patter into a hexadecimal color pattern. */
  RGBtoHEX(str: string): string
  
  /** Converts a hexadecimal color patter into a HSL color pattern. */
  HEXtoHSL(str: string): string
  
  /** Converts a RGB color patter into a HSL color pattern. */
  RGBtoHSL(str: string): string
  
  /** Converts a HSL color patter into a RGB color pattern. */
  HSLtoRGB(str: string): string
  
  /** Converts a HSL color patter into a hexadecimal color pattern. */
  HSLtoHEX(str: string): string
  
  /** Converts alpha into decimal or hexadecimal. */
  alpha(str: string, toDecimal: boolean): string
  
  /** Converts a hexadecimal-alpha color patter into a RGBA color pattern. */
  HEXAtoRGBA(str: string): string
  
  /** Converts a RGBA color patter into a hexadecimal-alpha color pattern. */
  RGBAtoHEXA(str: string): string
  
  /** Converts a hexadecimal-alpha color patter into a HSLA color pattern. */
  HEXAtoHSLA(str: string): string
  
  /** Converts a RGBA color patter into a HSLA color pattern. */
  RGBAtoHSLA(str: string): string
  
  /** Converts a HSLA color patter into a RGBA color pattern. */
  HSLAtoRGBA(str: string): string

  /** Converts a HSLA color patter into a hexadecimal-alpha color pattern. */
  HSLAtoHEXA(str: string): string
}

declare const cfn: ConvertionFunctions;
export = cfn;
