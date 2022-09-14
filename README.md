# Kolorz ![](https://gh-tags.vercel.app/api?lang=javascript)
### A Node.js library to convert color into different color systems.

<div align="center">
  
  ### [Donations ❤](https://github.com/lunatic-fox/gh-tags/blob/main/docs/donation/README.md)
</div>


## Install

~~~
npm i kolorz
~~~

## Overview

&nbsp; Documentation is also provided in Typescript, so Intellisense will give you more information of how to use on VS Code.

### Kolorz
~~~typescript
kolorz
  hex(color: string): toRGB | toHSL | <HSLMethods>;
  rgb(color: string): toHex | toHSL | <HSLMethods>;
  hsl(color: string): toRGB | toHex | <HSLMethods>;
  css(color: string): toRGB | toHSL | toHex | <HSLMethods>;
  hexa(color: string): toRGBA | toHSLA | <HSLMethods> & alpha();
  rgba(color: string): toHEXA | toHSLA | <HSLMethods> & alpha();
  hsla(color: string): toRGBA | toHEXA | <HSLMethods> & alpha();
~~~

&nbsp; The `color` parameter is a valid correspondent color pattern with some tolerances:

> `hex`
~~~javascript
'#DAD'      // #DDAADD
'A1D'       // #AA11DD
'#C00FEE'   // #C00FEE
'F1A5C0'    // #F1A5C0
~~~

> `hexa`
~~~javascript
'#FACE'       // #FFAACCEE
'AC1D'        // #AACC11DD
'#BA5EC0DE'   // #BA5EC0DE
'BEAD5BED'    // #BEAD5BED
~~~

> `rgb`
~~~javascript
'rgb(255, 30, 6)'   // rgb(255, 30, 6)
'(255, 30, 6)'      // rgb(255, 30, 6)
'255, 30, 6'        // rgb(255, 30, 6)
'255,30,6'          // rgb(255, 30, 6)
~~~

> `rgba`
~~~javascript 
'rgba(255, 30, 6, .3)'  // rgba(255, 30, 6, 0.3)
'(255, 30, 6, .3)'      // rgba(255, 30, 6, 0.3)
'255, 30, 6, 1'         // rgba(255, 30, 6, 1)
'255,30,6,.4'           // rgba(255, 30, 6, 0.4)
~~~

> `hsl`
~~~javascript
'hsl(255, 30, 6)'   // hsl(255, 30%, 6%)
'(315, 30, 6)'      // hsl(315, 30%, 6%)
'25, 30, 6'         // hsl(25, 30%, 6%)
'25,100,6'          // hsl(25, 100%, 6%)
~~~

> `hsla`
~~~javascript
'hsla(255, 30, 6, .453)'  // hsla(255, 30%, 6%, 0.453)
'(315, 30, 6, .453)'      // hsla(315, 30%, 6%, 0.453)
'25, 30, 6, .453'         // hsla(25, 30%, 6%, 0.453)
'25,100,6,.453'           // hsla(25, 100%, 6%, 0.453)
~~~

&nbsp;
### First layer properties
~~~typescript
<FirstLayerProperties> 
  toHex: string
  toRGB: string
  toHSL: string
  toHexa: string
  toRGBA: string
  toHSLA: string
~~~

&nbsp;
### HSL methods
#### Hue
&nbsp; Increase or decrease the hue value of the color pattern.
~~~typescript
hue(degree: number): <FirstLayerProperties> | value
~~~
&nbsp; `degree` - A number between 0 and 360.

#### Saturation
&nbsp; Increase or decrease the saturation value of the color pattern.
~~~typescript
saturation(percentage: number): <FirstLayerProperties> | value
~~~
&nbsp; `percentage` - A number between 0 and 1.

#### Lightness
&nbsp; Increase or decrease the lightness value of the color pattern.
~~~typescript
lightness(percentage: number): <FirstLayerProperties> | value
~~~
&nbsp; `percentage` - A number between 0 and 1.

&nbsp;
### Alpha
&nbsp; Increase or decrease the alpha value of the color pattern.
~~~typescript
alpha(percentage: number): <FirstLayerProperties> | value
~~~
&nbsp; `percentage` - A number between 0 and 1.

&nbsp;
### Value
&nbsp; Returns the color pattern string in the same color system.
~~~typescript
value: string
~~~

&nbsp;
## Examples
#### Simple convertion
> Hexadecimal to RGB and HSL
~~~javascript
const kolorz = require('kolorz');
const color = '#28ee00';

console.log(kolorz.hex(color).toRGB);
// rgb(40, 238, 0)

console.log(kolorz.hex(color).toHSL);
// hsl(110, 100%, 47%)
~~~
&nbsp;
> Hexadecimal-alpha to RGBA and HSLA
~~~javascript
const kolorz = require('kolorz');
const color = '#28ee0001';

console.log(kolorz.hexa(color).toRGBA);
// rgba(40, 238, 0, 0.004)

console.log(kolorz.hexa(color).toHSLA); 
// hsla(110, 100%, 47%, 0.004)
~~~


#### Adjusting alpha
~~~javascript
console.log(kolorz.hexa(color).alpha(.5).toRGBA);
// rgba(40, 240, 0, 0.506)

console.log(kolorz.hexa(color).alpha(.5).toHSLA);
// hsla(110, 100%, 47%, 0.506)
~~~


#### HSL adjusting

>saturation
~~~javascript
const kolorz = require('kolorz');
const color = '#28ee00ff';

console.log(kolorz.hexa(color).saturation(.5).toRGBA);
// rgba(40, 240, 0, 1)

console.log(kolorz.hexa(color).saturation(.5).toHSLA);
// hsla(110, 100%, 47%, 1)
~~~

>lightness
~~~javascript
console.log(kolorz.hexa(color).lightness(.5).toRGBA);
// rgba(242, 255, 240, 1)

console.log(kolorz.hexa(color).lightness(.5).toHSLA);
// hsla(112, 100%, 97%, 1)
~~~

>hue
~~~javascript
console.log(kolorz.hexa(color).hue(120).toRGBA);
// rgba(0, 40, 240, 1)

console.log(kolorz.hexa(color).hue(120).toHSLA);
// hsla(230, 100%, 47%, 1)
~~~


&nbsp;
<div align="center">

Made with ❤️ by me.

**Josélio Júnior (Lunatic Fox) - 2022**
</div>

