[//]: # (author: Josélio Júnior <joseliojrx25@gmail.com>)
[//]: # (copyright: Josélio Júnior 2022)
[//]: # (license: MIT)

# Kolorz ![](https://gh-tags.vercel.app/api?lang=javascript)
### A Node.js library to convert color into different color systems.

## Usage
&nbsp; Documentation is provided in Typescript, so Intellisense will give you more information of how to use in VS Code.

### Examples
> *Hexadecimal to RGB and HSL*
~~~javascript
const Kolorz = require('./Kolorz');

const color = '#28ee00';

console.log(Kolorz.hex(color).toRGB);
// rgb(40, 238, 0)

console.log(Kolorz.hex(color).toHSL);
// hsl(110, 100%, 47%)
~~~

&nbsp;
> *Hexadecimal-alpha to RGBA and HSLA*
~~~javascript
const Kolorz = require('./Kolorz');

const color = '#28ee0001';

console.log(Kolorz.hexa(color).toRGBA);
// rgba(40, 238, 0, 0.004)

console.log(Kolorz.hexa(color).toHSLA); 
// hsla(110, 100%, 47%, 0.004)
~~~
>*Adjusting alpha*
~~~javascript
console.log(Kolorz.hexa(color).alpha(.5).toRGBA);
// rgba(40, 240, 0, 0.506)

console.log(Kolorz.hexa(color).alpha(.5).toHSLA);
// hsla(110, 100%, 47%, 0.506)
~~~

&nbsp;
>*HSL adjusting*

>*saturation*
~~~javascript
const Kolorz = require('./Kolorz');

const color = '#28ee00ff';

console.log(Kolorz.hexa(color).saturation(.5).toRGBA);
// rgba(40, 240, 0, 1)

console.log(Kolorz.hexa(color).saturation(.5).toHSLA);
// hsla(110, 100%, 47%, 1)
~~~

>*lightness*
~~~javascript
console.log(Kolorz.hexa(color).lightness(.5).toRGBA);
// rgba(242, 255, 240, 1)

console.log(Kolorz.hexa(color).lightness(.5).toHSLA);
// hsla(112, 100%, 97%, 1)
~~~

>*hue*
~~~javascript
console.log(Kolorz.hexa(color).hue(120).toRGBA);
// rgba(0, 40, 240, 1)

console.log(Kolorz.hexa(color).hue(120).toHSLA);
// hsla(230, 100%, 47%, 1)
~~~

&nbsp;
<div align="center">

Made with ❤️ by me.

**Josélio Júnior (Lunatic Fox) - 2022**

</div>
