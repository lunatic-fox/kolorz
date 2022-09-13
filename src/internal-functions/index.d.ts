/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior - 2022
 @license MIT
*//***/

interface InternalFunctions {
  color: string;
  system: string;
  returns: object;
  readonly toHex: string | null;
  readonly toRGB: string | null;
  readonly toHSL: string | null;
  readonly toHexa: string | null;
  readonly toRGBA: string | null;
  readonly toHSLA: string | null;
  hslValues(n: number | null, nf: 0 | 1 | 2 | 3): string;
}

declare const ifn: InternalFunctions;
export = ifn;
