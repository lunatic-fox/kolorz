/**
 @author Josélio Júnior (Lunatic Fox) <joseliojrx25@gmail.com>
 @copyright Josélio Júnior - 2022
 @license MIT
*//***/

import Kolorz from "../util";

declare function hslMethods(context: Kolorz, isCSS: boolean): {
  hue(degree: number): Function;
  saturation(percentage: number): Function;
  lightness(percentage: number): Function;
  alpha(percentage: number): Function;
};

export = hslMethods;
