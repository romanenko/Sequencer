!function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/dist/",e(e.s=2)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="ontouchstart"in window||navigator.msMaxTouchPoints;e.default={hasTouch:i}},function(t,e,n){"use strict";function i(t,e,n){return e.repeat(Math.max(0,n-t.length))+t}function o(t,e,n){return t<e?e:t>n?n:t}Object.defineProperty(e,"__esModule",{value:!0}),String.prototype.repeat=String.prototype.repeat||function(t){return t<=1?this:this+this.repeat(t-1)},e.default={padLeft:i,constrain:o}},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t){var e=new I(t);return!1!==e&&y.push(e),e}function r(t,e){e.id>t.lastLoaded&&t.config.showLoadedImages&&(t.drawImage(e.id),t.lastLoaded=e.id),"function"==typeof t.config.imageLoad&&(e.sequencer=t,t.config.imageLoad(e)),"function"==typeof t.imageLoad&&(e.sequencer=t,t.imageLoad(e)),0===e.id&&(t.config.fitFirstImage&&(t.size(e.img.width,e.img.height),t.config.fitFirstImage=!1),t.drawImage(0),t.current=0)}function s(t,e){"function"==typeof t.config.queueComplete&&(e.sequencer=t,t.config.queueComplete(e)),"function"==typeof t.queueComplete&&t.queueComplete(e),t.run(),t.config.showLoadedImages||"none"===t.config.playMode||t.drawImage(0)}function c(t,e){var n=void 0,i=void 0;e.touches?(n=e.touches[0].pageX-e.touches[0].target.offsetLeft,i=e.touches[0].pageY-e.touches[0].target.offsetTop):(n=e.offsetX,i=e.offsetY),t.pointer={x:n,y:i,down:!0,currentId:t.current}}function h(t,e){t.pointer.down=!1}function u(t,e){if(t.pointer.down){var n=t.images.length,i=void 0,o=void 0;e.touches?(i=e.touches[0].pageX-e.touches[0].target.offsetLeft,o=e.touches[0].pageY-e.touches[0].target.offsetTop):(i=e.offsetX,o=e.offsetY);var a=0;/x/.test(t.config.direction)?a=(i-t.pointer.x)*t.directionSign:/y/.test(t.config.direction)&&(a=(o-t.pointer.y)*t.directionSign);var r=t.pointer.currentId+Math.floor(a/t.config.dragAmount);r<0?r=n- -r%n:r>n&&(r%=n),r!=t.current&&(t.drawImage(r),t.current=r),e.preventDefault()}}function f(t,e){var n=t.images.length,i=t.config.retina?window.devicePixelRatio:1,o=void 0,a=void 0;e.touches?(o=e.touches[0].pageX-e.touches[0].target.offsetLeft,a=e.touches[0].pageY-e.touches[0].target.offsetTop):(o=e.offsetX,a=e.offsetY);var r=void 0,s=void 0;"x"==t.config.direction?(s=t.ctx.canvas.width/i,r=o):"-x"==t.config.direction?(s=t.ctx.canvas.width/i,r=s-o-1):"y"==t.config.direction?(s=t.ctx.canvas.height/i,r=a):"-y"==t.config.direction&&(s=t.ctx.canvas.height/i,r=s-a-1);var c=w.default.constrain(Math.floor(r/s*n),0,n-1);c!=t.current&&(t.drawImage(c),t.current=c),e.preventDefault()}function g(t,e){function n(t){return Math.log(t)/Math.LN10}for(var i=Math.min(t.length,e.length),o=Math.max(0,t.lastIndexOf("/"));t.charAt(o)==e.charAt(o)&&!/[1-9]/.test(t.charAt(o))&&o<i;)o++;var a=t.slice(o,t.lastIndexOf(".")),r=e.slice(o,e.lastIndexOf(".")),s=parseInt(a),c=parseInt(r);return{from:s,to:c,base:t.substr(0,o),ext:t.substr(t.lastIndexOf(".")),zeroes:a.length==r.length&&Math.floor(n(s))<Math.floor(n(c))?a.length:0,length:Math.abs(c-s)+1}}function d(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=[],i=t.from>t.to?-1:1,o=0;o<t.length;o+=e){var a=(t.from+o*i).toString(),r=w.default.padLeft(a,"0",t.zeroes);n.push(t.base+r+t.ext)}return n}function l(t,e,n,i){function o(){if(!(r>=e.length-1)){r++;var a=new Image;a.src=e[r],function(t){a.onload=function(r){"function"==typeof n&&n({id:t,img:a,count:++s,total:e.length}),s<e.length&&o(),s==e.length&&"function"==typeof i&&i({total:e.length})},a.onerror=function(n){console.error("Error with: "+e[t])}}(r),t.push(a)}}for(var a=Math.min(e.length,4),r=t.length-1,s=t.length,c=0;c<a;c++)o()}Object.defineProperty(e,"__esModule",{value:!0});var v=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),p=n(0),m=i(p),x=n(1),w=i(x),y=[],I=function(){function t(e){o(this,t);var n={canvas:null,from:"",to:"",step:1,scaleMode:"cover",direction:"x",playMode:"drag",loop:"loop",interval:0,autoLoad:"all",fitFirstImage:!1,showLoadedImages:!1,dragAmount:10,hiDPI:!0};if(this.config=Object.assign({},n,e),e.hasOwnProperty("retina")&&(this.config.hiDPI=e.retina),""==this.config.from&&""==this.config.to)return console.error("Missing filenames."),!1;if(!this.config.canvas){var i=document.createElement("canvas");document.body.appendChild(i),this.config.canvas=i,this.config.fitFirstImage=!0}this.pointer={x:0,y:0,down:!1},this.current=-1,this.images=[],this.directionSign=/-/.test(this.config.direction)?-1:1,this.lastLoaded=-1,this.pongSign=1,this.ctx=this.config.canvas.getContext("2d");var a=g(this.config.from,this.config.to);this.fileList=d(a,this.config.step),this.size(this.ctx.canvas.width,this.ctx.canvas.height),"first"==this.config.autoLoad?new l(this.images,[this.fileList.shift()],r.bind(null,this)):"all"==this.config.autoLoad&&this.load()}return v(t,[{key:"load",value:function(){this.load=function(){console.log("load() can be called only once.")},new l(this.images,this.fileList,r.bind(null,this),s.bind(null,this))}},{key:"run",value:function(){var t=this,e=m.default.hasTouch?"touchmove":"mousemove",n=m.default.hasTouch?"touchstart":"mousedown",i=m.default.hasTouch?"touchend":"mouseup";if("hover"===this.config.playMode)this.ctx.canvas.addEventListener(e,f.bind(null,this));else if("drag"===this.config.playMode)this.ctx.canvas.addEventListener(e,u.bind(null,this)),this.ctx.canvas.addEventListener(n,c.bind(null,this)),document.addEventListener(i,h.bind(null,this));else if("auto"===this.config.playMode){var o=0,a=function e(n){var i=n-o;i>=t.config.interval&&(t.nextImage(),o=Math.max(n,n-(i-t.config.interval))),requestAnimationFrame(e)};requestAnimationFrame(a)}}},{key:"nextImage",value:function(t){t||(t=this.config.loop),"pong"===t?(this.current+=this.pongSign,this.current>=this.images.length-1?(this.pongSign=-1,this.current=this.images.length-1):this.current<=0&&(this.pongSign=1,this.current=0),this.drawImage(this.current)):this.drawImage(++this.current%this.images.length)}},{key:"drawImage",value:function(t){if(void 0===t&&(t=this.current),!(t<0||t>=this.images.length)){var e=this.config.hiDPI?window.devicePixelRatio:1,n=this.ctx.canvas.width/e,i=this.ctx.canvas.height/e,o=n/i,a=this.images[t],r=a.width/a.height,s=void 0,c=void 0;"cover"==this.config.scaleMode?o>r?(s=n,c=s/r):(c=i,s=c*r):"contain"==this.config.scaleMode?o<r?(s=n,c=s/r):(c=i,s=c*r):(s=a.width,c=a.height);var h=n/2-s/2,u=i/2-c/2;this.ctx.save(),this.ctx.scale(e,e),this.ctx.clearRect(0,0,n,i),this.ctx.drawImage(a,0,0,a.width,a.height,~~h,~~u,~~s,~~c),this.ctx.restore()}}},{key:"size",value:function(t,e){var n=this.config.hiDPI?window.devicePixelRatio:1,i=this.ctx.canvas;i.width=t*n,i.height=e*n,i.style.width=t+"px",i.style.height=e+"px",this.drawImage()}}]),t}();e.default={make:a,instances:y}}]);