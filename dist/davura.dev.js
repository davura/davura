/**
* DEVELOPED BY
* GIL LOPES BUENO
* gilbueno.mail@gmail.com
*
* WORKS WITH:
* IE8*, IE 9+, FF 4+, SF 5+, WebKit, CH 7+, OP 12+, BESEN, Rhino 1.7+
* For IE8 (and other legacy browsers) WatchJS will use dirty checking
*
* FORK:
* https://github.com/melanke/Watch.JS
*
* LICENSE: MIT
*/
!function(a){"object"==typeof exports?module.exports=a():"function"==typeof define&&define.amd?define(a):(window.WatchJS=a(),window.watch=window.WatchJS.watch,window.unwatch=window.WatchJS.unwatch,window.callWatchers=window.WatchJS.callWatchers)}(function(){function x(){w=null;for(var a=0;a<v.length;a++)v[a]();v.length=0}var a={noMore:!1,useDirtyCheck:!1},b=[],c=[],d=[],e=!1;try{e=Object.defineProperty&&Object.defineProperty({},"x",{})}catch(a){}var f=function(a){var b={};return a&&"[object Function]"==b.toString.call(a)},h=function(a){return"[object Array]"===Object.prototype.toString.call(a)},i=function(a){return"[object Object]"==={}.toString.apply(a)},j=function(a,b){var c=[],d=[];if("string"!=typeof a&&"string"!=typeof b){if(h(a)&&b)for(var e=0;e<a.length;e++)void 0===b[e]&&c.push(e);else for(var e in a)a.hasOwnProperty(e)&&b&&void 0===b[e]&&c.push(e);if(h(b)&&a)for(var f=0;f<b.length;f++)void 0===a[f]&&d.push(f);else for(var f in b)b.hasOwnProperty(f)&&a&&void 0===a[f]&&d.push(f)}return{added:c,removed:d}},k=function(a){if(null==a||"object"!=typeof    a)return a;var b=a.constructor();for(var c in a)b[c]=a[c];return b},l=function(a,b,c,d){try{Object.observe(a,function(a){a.forEach(function(a){a.name===b&&d(a.object[a.name])})})}catch(e){try{Object.defineProperty(a,b,{get:c,set:function(a){d.call(this,a,!0)},enumerable:!0,configurable:!0})}catch(e){try{Object.prototype.__defineGetter__.call(a,b,c),Object.prototype.__defineSetter__.call(a,b,function(a){d.call(this,a,!0)})}catch(c){n(a,b,d)}}}},m=function(a,b,c){try{Object.defineProperty(a,b,{enumerable:!1,configurable:!0,writable:!1,value:c})}catch(d){a[b]=c}},n=function(a,b,d){c[c.length]={prop:b,object:a,orig:k(a[b]),callback:d}},o=function(){f(arguments[1])?p.apply(this,arguments):h(arguments[1])?q.apply(this,arguments):r.apply(this,arguments)},p=function(a,b,c,d){if("string"!=typeof a&&(a instanceof Object||h(a))){if(h(a)){if(D(a,"__watchall__",b,c),void 0===c||c>0)for(var f=0;f<a.length;f++)p(a[f],b,c,d)}else{var f,g=[];for(f in a)"$val"==f||!e&&"watchers"===f||Object.prototype.hasOwnProperty.call(a,f)&&g.push(f);q(a,g,b,c,d)}d&&R(a,"$$watchlengthsubjectroot",b,c)}},q=function(a,b,c,d,e){if("string"!=typeof a&&(a instanceof Object||h(a)))for(var f=0;f<b.length;f++){var g=b[f];r(a,g,c,d,e)}},r=function(a,b,c,d,e){"string"!=typeof a&&(a instanceof Object||h(a))&&(f(a[b])||(null!=a[b]&&(void 0===d||d>0)&&p(a[b],c,void 0!==d?d-1:d),D(a,b,c,d),e&&(void 0===d||d>0)&&R(a,b,c,d)))},s=function(){f(arguments[1])?t.apply(this,arguments):h(arguments[1])?u.apply(this,arguments):I.apply(this,arguments)},t=function(a,b){if(!(a instanceof String)&&(a instanceof Object||h(a)))if(h(a)){for(var c=["__watchall__"],d=0;d<a.length;d++)c.push(d);u(a,c,b)}else{var e=function(a){var c=[];for(var d in a)a.hasOwnProperty(d)&&(a[d]instanceof Object?e(a[d]):c.push(d));u(a,c,b)};e(a)}},u=function(a,b,c){for(var d in b)b.hasOwnProperty(d)&&I(a,b[d],c)},v=[],w=null,y=function(){return w||(w=setTimeout(x)),w},z=function(a){null==w&&y(),v[v.length]=a},A=function(){var a=f(arguments[2])?C:B;a.apply(this,arguments)},B=function(a,b,c,d){var i,e=null,f=-1,g=h(a),j=function(c,d,h,i){var j=y();if(f!==j&&(f=j,e={type:"update"},e.value=a,e.splices=null,z(function(){b.call(this,e),e=null})),g&&a===this&&null!==e){if("pop"===d||"shift"===d)h=[],i=[i];else if("push"===d||"unshift"===d)h=[h],i=[];else if("splice"!==d)return;e.splices||(e.splices=[]),e.splices[e.splices.length]={index:c,deleteCount:i?i.length:0,addedCount:h?h.length:0,added:h,deleted:i}}};i=1==c?void 0:0,p(a,j,i,d)},C=function(a,b,c,d,e){a&&b&&(r(a,b,function(a,b,f,g){var j={type:"update"};j.value=f,j.oldvalue=g,(d&&i(f)||h(f))&&B(f,c,d,e),c.call(this,j)},0),(d&&i(a[b])||h(a[b]))&&B(a[b],c,d,e))},D=function(b,c,d,e){var f=!1,g=h(b);b.watchers||(m(b,"watchers",{}),g&&H(b,function(a,d,f,g){if(N(b,a,d,f,g),0!==e&&f&&(i(f)||h(f))){var j,k,l,m,n=b.watchers[c];for((m=b.watchers.__watchall__)&&(n=n?n.concat(m):m),l=n?n.length:0,j=0;j<l;j++)if("splice"!==d)p(f,n[j],void 0===e?e:e-1);else for(k=0;k<f.length;k++)p(f[k],n[j],void 0===e?e:e-1)}})),b.watchers[c]||(b.watchers[c]=[],g||(f=!0));for(var j=0;j<b.watchers[c].length;j++)if(b.watchers[c][j]===d)return;if(b.watchers[c].push(d),f){var k=b[c],o=function(){return k},q=function(d,f){var g=k;if(k=d,0!==e&&b[c]&&(i(b[c])||h(b[c]))&&!b[c].watchers){var j,l=b.watchers[c].length;for(j=0;j<l;j++)p(b[c],b.watchers[c][j],void 0===e?e:e-1)}return K(b,c)?void L(b,c):void(a.noMore||g!==d&&(f?N(b,c,"set",d,g):E(b,c,"set",d,g),a.noMore=!1))};a.useDirtyCheck?n(b,c,q):l(b,c,o,q)}},E=function(a,b,c,d,e){if(void 0!==b){var f,g,h=a.watchers[b];(g=a.watchers.__watchall__)&&(h=h?h.concat(g):g),f=h?h.length:0;for(var i=0;i<f;i++)h[i].call(a,b,c,d,e)}else for(var b in a)a.hasOwnProperty(b)&&E(a,b,c,d,e)},F=["pop","push","reverse","shift","sort","slice","unshift","splice"],G=function(a,b,c,d){m(a,c,function(){var f,g,h,i,e=0;if("splice"===c){var j=arguments[0],k=j+arguments[1];for(h=a.slice(j,k),g=[],f=2;f<arguments.length;f++)g[f-2]=arguments[f];e=j}else g=arguments.length>0?arguments[0]:void 0;return i=b.apply(a,arguments),"slice"!==c&&("pop"===c?(h=i,e=a.length):"push"===c?e=a.length-1:"shift"===c?h=i:"unshift"!==c&&void 0===g&&(g=i),d.call(a,e,c,g,h)),i})},H=function(a,b){if(f(b)&&a&&!(a instanceof String)&&h(a))for(var d,c=F.length;c--;)d=F[c],G(a,a[d],d,b)},I=function(a,b,c){if(b){if(a.watchers[b])if(void 0===c)delete a.watchers[b];else for(var d=0;d<a.watchers[b].length;d++){var e=a.watchers[b][d];e==c&&a.watchers[b].splice(d,1)}}else delete a.watchers;S(a,b,c),T(a,b)},J=function(a,b){if(a.watchers){var c="__wjs_suspend__"+(void 0!==b?b:"");a.watchers[c]=!0}},K=function(a,b){return a.watchers&&(a.watchers.__wjs_suspend__||a.watchers["__wjs_suspend__"+b])},L=function(a,b){z(function(){delete a.watchers.__wjs_suspend__,delete a.watchers["__wjs_suspend__"+b]})},M=null,N=function(a,b,c,e,f){d[d.length]={obj:a,prop:b,mode:c,newval:e,oldval:f},null===M&&(M=setTimeout(O))},O=function(){var a=null;M=null;for(var b=0;b<d.length;b++)a=d[b],E(a.obj,a.prop,a.mode,a.newval,a.oldval);a&&(d=[],a=null)},P=function(){for(var a=0;a<b.length;a++){var d=b[a];if("$$watchlengthsubjectroot"===d.prop){var e=j(d.obj,d.actual);(e.added.length||e.removed.length)&&(e.added.length&&q(d.obj,e.added,d.watcher,d.level-1,!0),d.watcher.call(d.obj,"root","differentattr",e,d.actual)),d.actual=k(d.obj)}else{var e=j(d.obj[d.prop],d.actual);if(e.added.length||e.removed.length){if(e.added.length)for(var f=0;f<d.obj.watchers[d.prop].length;f++)q(d.obj[d.prop],e.added,d.obj.watchers[d.prop][f],d.level-1,!0);E(d.obj,d.prop,"differentattr",e,d.actual)}d.actual=k(d.obj[d.prop])}}var g,h;if(c.length>0)for(var a=0;a<c.length;a++)g=c[a],h=g.object[g.prop],Q(g.orig,h)||(g.orig=k(h),g.callback(h))},Q=function(a,b){var c,d=!0;if(a!==b)if(i(a)){for(c in a)if((e||"watchers"!==c)&&a[c]!==b[c]){d=!1;break}}else d=!1;return d},R=function(a,c,d,e){var f;f=k("$$watchlengthsubjectroot"===c?a:a[c]),b.push({obj:a,prop:c,actual:f,watcher:d,level:e})},S=function(a,c,d){for(var e=0;e<b.length;e++){var f=b[e];f.obj==a&&(c&&f.prop!=c||d&&f.watcher!=d||b.splice(e--,1))}},T=function(a,b){for(var d,e=0;e<c.length;e++){var f=c[e],g=f.object.watchers;d=f.object==a&&(!b||f.prop==b)&&g&&(!b||!g[b]||0==g[b].length),d&&c.splice(e--,1)}};return setInterval(P,50),a.watch=o,a.unwatch=s,a.callWatchers=E,a.suspend=J,a.onChange=A,a});

// SDOM compatibility AND Animate.css
(function(){
    // Compatibility
    // if no exist remove in Element
    if (!("remove" in Element.prototype)) {
        Element.prototype.remove = function() {
            if (this.parentNode) {
                this.parentNode.removeChild(this);
            }
        };
    }
    //  if no exist includes in string
    if (!String.prototype.includes) {
        String.prototype.includes = function(search, start) {
            if (typeof start !== "number") {
                start = 0;
            }
            if (start + search.length > this.length) {
                return false;
            } else {
                return this.indexOf(search, start) !== -1;
            }
        };
    }
    // if not exits forEach in NodeList
    if (!("forEach" in NodeList.prototype)) {
        NodeList.prototype.forEach = function(callback) {
            Array.prototype.forEach.call(this, function(x, i) {
                callback(x, i);
            });
        };
    }

    // add animate.css style
    var _css =
        ".animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated.infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.animated.hinge{-webkit-animation-duration:2s;animation-duration:2s}@-webkit-keyframes jackInTheBox{from{opacity:0;-webkit-transform:scale(0.1) rotate(30deg);transform:scale(0.1) rotate(30deg);-webkit-transform-origin:center bottom;transform-origin:center bottom}50%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}70%{-webkit-transform:rotate(3deg);transform:rotate(3deg)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}@keyframes jackInTheBox{from{opacity:0;-webkit-transform:scale(0.1) rotate(30deg);transform:scale(0.1) rotate(30deg);-webkit-transform-origin:center bottom;transform-origin:center bottom}50%{-webkit-transform:rotate(-10deg);transform:rotate(-10deg)}70%{-webkit-transform:rotate(3deg);transform:rotate(3deg)}to{opacity:1;-webkit-transform:scale(1);transform:scale(1)}}.jackInTheBox{-webkit-animation-name:jackInTheBox;animation-name:jackInTheBox}.animated.flipOutX,.animated.flipOutY,.animated.bounceIn,.animated.bounceOut{-webkit-animation-duration:.75s;animation-duration:.75s}@-webkit-keyframes bounce{from,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.610,.355,1.000);animation-timing-function:cubic-bezier(.215,.610,.355,1.000);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.050,.855,.060);animation-timing-function:cubic-bezier(.755,.050,.855,.060);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.050,.855,.060);animation-timing-function:cubic-bezier(.755,.050,.855,.060);-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}@keyframes bounce{from,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.610,.355,1.000);animation-timing-function:cubic-bezier(.215,.610,.355,1.000);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.050,.855,.060);animation-timing-function:cubic-bezier(.755,.050,.855,.060);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.050,.855,.060);animation-timing-function:cubic-bezier(.755,.050,.855,.060);-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}.bounce{-webkit-animation-name:bounce;animation-name:bounce;-webkit-transform-origin:center bottom;transform-origin:center bottom}@-webkit-keyframes flash{from,50%,to{opacity:1}25%,75%{opacity:0}}@keyframes flash{from,50%,to{opacity:1}25%,75%{opacity:0}}.flash{-webkit-animation-name:flash;animation-name:flash}@-webkit-keyframes pulse{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes pulse{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}50%{-webkit-transform:scale3d(1.05,1.05,1.05);transform:scale3d(1.05,1.05,1.05)}to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}.pulse{-webkit-animation-name:pulse;animation-name:pulse}@-webkit-keyframes rubberBand{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes rubberBand{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}30%{-webkit-transform:scale3d(1.25,.75,1);transform:scale3d(1.25,.75,1)}40%{-webkit-transform:scale3d(.75,1.25,1);transform:scale3d(.75,1.25,1)}50%{-webkit-transform:scale3d(1.15,.85,1);transform:scale3d(1.15,.85,1)}65%{-webkit-transform:scale3d(.95,1.05,1);transform:scale3d(.95,1.05,1)}75%{-webkit-transform:scale3d(1.05,.95,1);transform:scale3d(1.05,.95,1)}to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}.rubberBand{-webkit-animation-name:rubberBand;animation-name:rubberBand}@-webkit-keyframes shake{from,to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}@keyframes shake{from,to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}10%,30%,50%,70%,90%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}20%,40%,60%,80%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}}.shake{-webkit-animation-name:shake;animation-name:shake}@-webkit-keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}@keyframes headShake{0%{-webkit-transform:translateX(0);transform:translateX(0)}6.5%{-webkit-transform:translateX(-6px) rotateY(-9deg);transform:translateX(-6px) rotateY(-9deg)}18.5%{-webkit-transform:translateX(5px) rotateY(7deg);transform:translateX(5px) rotateY(7deg)}31.5%{-webkit-transform:translateX(-3px) rotateY(-5deg);transform:translateX(-3px) rotateY(-5deg)}43.5%{-webkit-transform:translateX(2px) rotateY(3deg);transform:translateX(2px) rotateY(3deg)}50%{-webkit-transform:translateX(0);transform:translateX(0)}}.headShake{-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;-webkit-animation-name:headShake;animation-name:headShake}@-webkit-keyframes swing{20%{-webkit-transform:rotate3d(0,0,1,15deg);transform:rotate3d(0,0,1,15deg)}40%{-webkit-transform:rotate3d(0,0,1,-10deg);transform:rotate3d(0,0,1,-10deg)}60%{-webkit-transform:rotate3d(0,0,1,5deg);transform:rotate3d(0,0,1,5deg)}80%{-webkit-transform:rotate3d(0,0,1,-5deg);transform:rotate3d(0,0,1,-5deg)}to{-webkit-transform:rotate3d(0,0,1,0deg);transform:rotate3d(0,0,1,0deg)}}@keyframes swing{20%{-webkit-transform:rotate3d(0,0,1,15deg);transform:rotate3d(0,0,1,15deg)}40%{-webkit-transform:rotate3d(0,0,1,-10deg);transform:rotate3d(0,0,1,-10deg)}60%{-webkit-transform:rotate3d(0,0,1,5deg);transform:rotate3d(0,0,1,5deg)}80%{-webkit-transform:rotate3d(0,0,1,-5deg);transform:rotate3d(0,0,1,-5deg)}to{-webkit-transform:rotate3d(0,0,1,0deg);transform:rotate3d(0,0,1,0deg)}}.swing{-webkit-transform-origin:top center;transform-origin:top center;-webkit-animation-name:swing;animation-name:swing}@-webkit-keyframes tada{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg);transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg);transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg);transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)}to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes tada{from{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}10%,20%{-webkit-transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg);transform:scale3d(.9,.9,.9) rotate3d(0,0,1,-3deg)}30%,50%,70%,90%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg);transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,3deg)}40%,60%,80%{-webkit-transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg);transform:scale3d(1.1,1.1,1.1) rotate3d(0,0,1,-3deg)}to{-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}.tada{-webkit-animation-name:tada;animation-name:tada}@-webkit-keyframes wobble{from{-webkit-transform:none;transform:none}15%{-webkit-transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg);transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg);transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg);transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg);transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg);transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg)}to{-webkit-transform:none;transform:none}}@keyframes wobble{from{-webkit-transform:none;transform:none}15%{-webkit-transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg);transform:translate3d(-25%,0,0) rotate3d(0,0,1,-5deg)}30%{-webkit-transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg);transform:translate3d(20%,0,0) rotate3d(0,0,1,3deg)}45%{-webkit-transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg);transform:translate3d(-15%,0,0) rotate3d(0,0,1,-3deg)}60%{-webkit-transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg);transform:translate3d(10%,0,0) rotate3d(0,0,1,2deg)}75%{-webkit-transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg);transform:translate3d(-5%,0,0) rotate3d(0,0,1,-1deg)}to{-webkit-transform:none;transform:none}}.wobble{-webkit-animation-name:wobble;animation-name:wobble}@-webkit-keyframes jello{from,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}@keyframes jello{from,11.1%,to{-webkit-transform:none;transform:none}22.2%{-webkit-transform:skewX(-12.5deg) skewY(-12.5deg);transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{-webkit-transform:skewX(6.25deg) skewY(6.25deg);transform:skewX(6.25deg) skewY(6.25deg)}44.4%{-webkit-transform:skewX(-3.125deg) skewY(-3.125deg);transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{-webkit-transform:skewX(1.5625deg) skewY(1.5625deg);transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{-webkit-transform:skewX(-.78125deg) skewY(-.78125deg);transform:skewX(-.78125deg) skewY(-.78125deg)}77.7%{-webkit-transform:skewX(.390625deg) skewY(.390625deg);transform:skewX(.390625deg) skewY(.390625deg)}88.8%{-webkit-transform:skewX(-.1953125deg) skewY(-.1953125deg);transform:skewX(-.1953125deg) skewY(-.1953125deg)}}.jello{-webkit-animation-name:jello;animation-name:jello;-webkit-transform-origin:center;transform-origin:center}@-webkit-keyframes bounceIn{from,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.610,.355,1.000);animation-timing-function:cubic-bezier(.215,.610,.355,1.000)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}@keyframes bounceIn{from,20%,40%,60%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.610,.355,1.000);animation-timing-function:cubic-bezier(.215,.610,.355,1.000)}0%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}20%{-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}40%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}60%{opacity:1;-webkit-transform:scale3d(1.03,1.03,1.03);transform:scale3d(1.03,1.03,1.03)}80%{-webkit-transform:scale3d(.97,.97,.97);transform:scale3d(.97,.97,.97)}to{opacity:1;-webkit-transform:scale3d(1,1,1);transform:scale3d(1,1,1)}}.bounceIn{-webkit-animation-name:bounceIn;animation-name:bounceIn}@-webkit-keyframes bounceInDown{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.610,.355,1.000);animation-timing-function:cubic-bezier(.215,.610,.355,1.000)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}to{-webkit-transform:none;transform:none}}@keyframes bounceInDown{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.610,.355,1.000);animation-timing-function:cubic-bezier(.215,.610,.355,1.000)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}to{-webkit-transform:none;transform:none}}.bounceInDown{-webkit-animation-name:bounceInDown;animation-name:bounceInDown}@-webkit-keyframes bounceInLeft{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.610,.355,1.000);animation-timing-function:cubic-bezier(.215,.610,.355,1.000)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}to{-webkit-transform:none;transform:none}}@keyframes bounceInLeft{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.610,.355,1.000);animation-timing-function:cubic-bezier(.215,.610,.355,1.000)}0%{opacity:0;-webkit-transform:translate3d(-3000px,0,0);transform:translate3d(-3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(25px,0,0);transform:translate3d(25px,0,0)}75%{-webkit-transform:translate3d(-10px,0,0);transform:translate3d(-10px,0,0)}90%{-webkit-transform:translate3d(5px,0,0);transform:translate3d(5px,0,0)}to{-webkit-transform:none;transform:none}}.bounceInLeft{-webkit-animation-name:bounceInLeft;animation-name:bounceInLeft}@-webkit-keyframes bounceInRight{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.610,.355,1.000);animation-timing-function:cubic-bezier(.215,.610,.355,1.000)}from{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-webkit-transform:none;transform:none}}@keyframes bounceInRight{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.610,.355,1.000);animation-timing-function:cubic-bezier(.215,.610,.355,1.000)}from{opacity:0;-webkit-transform:translate3d(3000px,0,0);transform:translate3d(3000px,0,0)}60%{opacity:1;-webkit-transform:translate3d(-25px,0,0);transform:translate3d(-25px,0,0)}75%{-webkit-transform:translate3d(10px,0,0);transform:translate3d(10px,0,0)}90%{-webkit-transform:translate3d(-5px,0,0);transform:translate3d(-5px,0,0)}to{-webkit-transform:none;transform:none}}.bounceInRight{-webkit-animation-name:bounceInRight;animation-name:bounceInRight}@-webkit-keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.610,.355,1.000);animation-timing-function:cubic-bezier(.215,.610,.355,1.000)}from{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes bounceInUp{from,60%,75%,90%,to{-webkit-animation-timing-function:cubic-bezier(.215,.610,.355,1.000);animation-timing-function:cubic-bezier(.215,.610,.355,1.000)}from{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.bounceInUp{-webkit-animation-name:bounceInUp;animation-name:bounceInUp}@-webkit-keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}@keyframes bounceOut{20%{-webkit-transform:scale3d(.9,.9,.9);transform:scale3d(.9,.9,.9)}50%,55%{opacity:1;-webkit-transform:scale3d(1.1,1.1,1.1);transform:scale3d(1.1,1.1,1.1)}to{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}}.bounceOut{-webkit-animation-name:bounceOut;animation-name:bounceOut}@-webkit-keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}@keyframes bounceOutDown{20%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}.bounceOutDown{-webkit-animation-name:bounceOutDown;animation-name:bounceOutDown}@-webkit-keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}@keyframes bounceOutLeft{20%{opacity:1;-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}.bounceOutLeft{-webkit-animation-name:bounceOutLeft;animation-name:bounceOutLeft}@-webkit-keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}@keyframes bounceOutRight{20%{opacity:1;-webkit-transform:translate3d(-20px,0,0);transform:translate3d(-20px,0,0)}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}.bounceOutRight{-webkit-animation-name:bounceOutRight;animation-name:bounceOutRight}@-webkit-keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}@keyframes bounceOutUp{20%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}40%,45%{opacity:1;-webkit-transform:translate3d(0,20px,0);transform:translate3d(0,20px,0)}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}.bounceOutUp{-webkit-animation-name:bounceOutUp;animation-name:bounceOutUp}@-webkit-keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}@-webkit-keyframes fadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInDown{from{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}@-webkit-keyframes fadeInDownBig{from{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInDownBig{from{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInDownBig{-webkit-animation-name:fadeInDownBig;animation-name:fadeInDownBig}@-webkit-keyframes fadeInLeft{from{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInLeft{from{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInLeft{-webkit-animation-name:fadeInLeft;animation-name:fadeInLeft}@-webkit-keyframes fadeInLeftBig{from{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInLeftBig{from{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInLeftBig{-webkit-animation-name:fadeInLeftBig;animation-name:fadeInLeftBig}@-webkit-keyframes fadeInRight{from{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInRight{from{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInRight{-webkit-animation-name:fadeInRight;animation-name:fadeInRight}@-webkit-keyframes fadeInRightBig{from{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInRightBig{from{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInRightBig{-webkit-animation-name:fadeInRightBig;animation-name:fadeInRightBig}@-webkit-keyframes fadeInUp{from{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInUp{from{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}@-webkit-keyframes fadeInUpBig{from{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes fadeInUpBig{from{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInUpBig{-webkit-animation-name:fadeInUpBig;animation-name:fadeInUpBig}@-webkit-keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@-webkit-keyframes fadeOutDown{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes fadeOutDown{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}@-webkit-keyframes fadeOutDownBig{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}@keyframes fadeOutDownBig{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,2000px,0);transform:translate3d(0,2000px,0)}}.fadeOutDownBig{-webkit-animation-name:fadeOutDownBig;animation-name:fadeOutDownBig}@-webkit-keyframes fadeOutLeft{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes fadeOutLeft{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.fadeOutLeft{-webkit-animation-name:fadeOutLeft;animation-name:fadeOutLeft}@-webkit-keyframes fadeOutLeftBig{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}@keyframes fadeOutLeftBig{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(-2000px,0,0);transform:translate3d(-2000px,0,0)}}.fadeOutLeftBig{-webkit-animation-name:fadeOutLeftBig;animation-name:fadeOutLeftBig}@-webkit-keyframes fadeOutRight{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes fadeOutRight{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.fadeOutRight{-webkit-animation-name:fadeOutRight;animation-name:fadeOutRight}@-webkit-keyframes fadeOutRightBig{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}@keyframes fadeOutRightBig{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(2000px,0,0);transform:translate3d(2000px,0,0)}}.fadeOutRightBig{-webkit-animation-name:fadeOutRightBig;animation-name:fadeOutRightBig}@-webkit-keyframes fadeOutUp{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}.fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}@-webkit-keyframes fadeOutUpBig{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}@keyframes fadeOutUpBig{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-2000px,0);transform:translate3d(0,-2000px,0)}}.fadeOutUpBig{-webkit-animation-name:fadeOutUpBig;animation-name:fadeOutUpBig}@-webkit-keyframes flip{from{-webkit-transform:perspective(400px) rotate3d(0,1,0,-360deg);transform:perspective(400px) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{-webkit-transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95);transform:perspective(400px) scale3d(.95,.95,.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}@keyframes flip{from{-webkit-transform:perspective(400px) rotate3d(0,1,0,-360deg);transform:perspective(400px) rotate3d(0,1,0,-360deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}40%{-webkit-transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-190deg);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}50%{-webkit-transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);transform:perspective(400px) translate3d(0,0,150px) rotate3d(0,1,0,-170deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}80%{-webkit-transform:perspective(400px) scale3d(.95,.95,.95);transform:perspective(400px) scale3d(.95,.95,.95);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}to{-webkit-transform:perspective(400px);transform:perspective(400px);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}}.animated.flip{-webkit-backface-visibility:visible;backface-visibility:visible;-webkit-animation-name:flip;animation-name:flip}@-webkit-keyframes flipInX{from{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotate3d(1,0,0,10deg);transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-5deg);transform:perspective(400px) rotate3d(1,0,0,-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInX{from{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotate3d(1,0,0,10deg);transform:perspective(400px) rotate3d(1,0,0,10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-5deg);transform:perspective(400px) rotate3d(1,0,0,-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}.flipInX{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInX;animation-name:flipInX}@-webkit-keyframes flipInY{from{-webkit-transform:perspective(400px) rotate3d(0,1,0,90deg);transform:perspective(400px) rotate3d(0,1,0,90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(0,1,0,-20deg);transform:perspective(400px) rotate3d(0,1,0,-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotate3d(0,1,0,10deg);transform:perspective(400px) rotate3d(0,1,0,10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(0,1,0,-5deg);transform:perspective(400px) rotate3d(0,1,0,-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}@keyframes flipInY{from{-webkit-transform:perspective(400px) rotate3d(0,1,0,90deg);transform:perspective(400px) rotate3d(0,1,0,90deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;opacity:0}40%{-webkit-transform:perspective(400px) rotate3d(0,1,0,-20deg);transform:perspective(400px) rotate3d(0,1,0,-20deg);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}60%{-webkit-transform:perspective(400px) rotate3d(0,1,0,10deg);transform:perspective(400px) rotate3d(0,1,0,10deg);opacity:1}80%{-webkit-transform:perspective(400px) rotate3d(0,1,0,-5deg);transform:perspective(400px) rotate3d(0,1,0,-5deg)}to{-webkit-transform:perspective(400px);transform:perspective(400px)}}.flipInY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipInY;animation-name:flipInY}@-webkit-keyframes flipOutX{from{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}@keyframes flipOutX{from{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(1,0,0,-20deg);transform:perspective(400px) rotate3d(1,0,0,-20deg);opacity:1}to{-webkit-transform:perspective(400px) rotate3d(1,0,0,90deg);transform:perspective(400px) rotate3d(1,0,0,90deg);opacity:0}}.flipOutX{-webkit-animation-name:flipOutX;animation-name:flipOutX;-webkit-backface-visibility:visible!important;backface-visibility:visible!important}@-webkit-keyframes flipOutY{from{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(0,1,0,-15deg);transform:perspective(400px) rotate3d(0,1,0,-15deg);opacity:1}to{-webkit-transform:perspective(400px) rotate3d(0,1,0,90deg);transform:perspective(400px) rotate3d(0,1,0,90deg);opacity:0}}@keyframes flipOutY{from{-webkit-transform:perspective(400px);transform:perspective(400px)}30%{-webkit-transform:perspective(400px) rotate3d(0,1,0,-15deg);transform:perspective(400px) rotate3d(0,1,0,-15deg);opacity:1}to{-webkit-transform:perspective(400px) rotate3d(0,1,0,90deg);transform:perspective(400px) rotate3d(0,1,0,90deg);opacity:0}}.flipOutY{-webkit-backface-visibility:visible!important;backface-visibility:visible!important;-webkit-animation-name:flipOutY;animation-name:flipOutY}@-webkit-keyframes lightSpeedIn{from{-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{-webkit-transform:skewX(20deg);transform:skewX(20deg);opacity:1}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg);opacity:1}to{-webkit-transform:none;transform:none;opacity:1}}@keyframes lightSpeedIn{from{-webkit-transform:translate3d(100%,0,0) skewX(-30deg);transform:translate3d(100%,0,0) skewX(-30deg);opacity:0}60%{-webkit-transform:skewX(20deg);transform:skewX(20deg);opacity:1}80%{-webkit-transform:skewX(-5deg);transform:skewX(-5deg);opacity:1}to{-webkit-transform:none;transform:none;opacity:1}}.lightSpeedIn{-webkit-animation-name:lightSpeedIn;animation-name:lightSpeedIn;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}@-webkit-keyframes lightSpeedOut{from{opacity:1}to{-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}@keyframes lightSpeedOut{from{opacity:1}to{-webkit-transform:translate3d(100%,0,0) skewX(30deg);transform:translate3d(100%,0,0) skewX(30deg);opacity:0}}.lightSpeedOut{-webkit-animation-name:lightSpeedOut;animation-name:lightSpeedOut;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}@-webkit-keyframes rotateIn{from{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate3d(0,0,1,-200deg);transform:rotate3d(0,0,1,-200deg);opacity:0}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateIn{from{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate3d(0,0,1,-200deg);transform:rotate3d(0,0,1,-200deg);opacity:0}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:none;transform:none;opacity:1}}.rotateIn{-webkit-animation-name:rotateIn;animation-name:rotateIn}@-webkit-keyframes rotateInDownLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg);opacity:0}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInDownLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg);opacity:0}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}.rotateInDownLeft{-webkit-animation-name:rotateInDownLeft;animation-name:rotateInDownLeft}@-webkit-keyframes rotateInDownRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInDownRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}.rotateInDownRight{-webkit-animation-name:rotateInDownRight;animation-name:rotateInDownRight}@-webkit-keyframes rotateInUpLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInUpLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:none;transform:none;opacity:1}}.rotateInUpLeft{-webkit-animation-name:rotateInUpLeft;animation-name:rotateInUpLeft}@-webkit-keyframes rotateInUpRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,-90deg);transform:rotate3d(0,0,1,-90deg);opacity:0}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}@keyframes rotateInUpRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,-90deg);transform:rotate3d(0,0,1,-90deg);opacity:0}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:none;transform:none;opacity:1}}.rotateInUpRight{-webkit-animation-name:rotateInUpRight;animation-name:rotateInUpRight}@-webkit-keyframes rotateOut{from{-webkit-transform-origin:center;transform-origin:center;opacity:1}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate3d(0,0,1,200deg);transform:rotate3d(0,0,1,200deg);opacity:0}}@keyframes rotateOut{from{-webkit-transform-origin:center;transform-origin:center;opacity:1}to{-webkit-transform-origin:center;transform-origin:center;-webkit-transform:rotate3d(0,0,1,200deg);transform:rotate3d(0,0,1,200deg);opacity:0}}.rotateOut{-webkit-animation-name:rotateOut;animation-name:rotateOut}@-webkit-keyframes rotateOutDownLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0}}@keyframes rotateOutDownLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,45deg);transform:rotate3d(0,0,1,45deg);opacity:0}}.rotateOutDownLeft{-webkit-animation-name:rotateOutDownLeft;animation-name:rotateOutDownLeft}@-webkit-keyframes rotateOutDownRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg);opacity:0}}@keyframes rotateOutDownRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg);opacity:0}}.rotateOutDownRight{-webkit-animation-name:rotateOutDownRight;animation-name:rotateOutDownRight}@-webkit-keyframes rotateOutUpLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg);opacity:0}}@keyframes rotateOutUpLeft{from{-webkit-transform-origin:left bottom;transform-origin:left bottom;opacity:1}to{-webkit-transform-origin:left bottom;transform-origin:left bottom;-webkit-transform:rotate3d(0,0,1,-45deg);transform:rotate3d(0,0,1,-45deg);opacity:0}}.rotateOutUpLeft{-webkit-animation-name:rotateOutUpLeft;animation-name:rotateOutUpLeft}@-webkit-keyframes rotateOutUpRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,90deg);transform:rotate3d(0,0,1,90deg);opacity:0}}@keyframes rotateOutUpRight{from{-webkit-transform-origin:right bottom;transform-origin:right bottom;opacity:1}to{-webkit-transform-origin:right bottom;transform-origin:right bottom;-webkit-transform:rotate3d(0,0,1,90deg);transform:rotate3d(0,0,1,90deg);opacity:0}}.rotateOutUpRight{-webkit-animation-name:rotateOutUpRight;animation-name:rotateOutUpRight}@-webkit-keyframes hinge{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate3d(0,0,1,80deg);transform:rotate3d(0,0,1,80deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}40%,80%{-webkit-transform:rotate3d(0,0,1,60deg);transform:rotate3d(0,0,1,60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}to{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0}}@keyframes hinge{0%{-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}20%,60%{-webkit-transform:rotate3d(0,0,1,80deg);transform:rotate3d(0,0,1,80deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out}40%,80%{-webkit-transform:rotate3d(0,0,1,60deg);transform:rotate3d(0,0,1,60deg);-webkit-transform-origin:top left;transform-origin:top left;-webkit-animation-timing-function:ease-in-out;animation-timing-function:ease-in-out;opacity:1}to{-webkit-transform:translate3d(0,700px,0);transform:translate3d(0,700px,0);opacity:0}}.hinge{-webkit-animation-name:hinge;animation-name:hinge}@-webkit-keyframes rollIn{from{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate3d(0,0,1,-120deg);transform:translate3d(-100%,0,0) rotate3d(0,0,1,-120deg)}to{opacity:1;-webkit-transform:none;transform:none}}@keyframes rollIn{from{opacity:0;-webkit-transform:translate3d(-100%,0,0) rotate3d(0,0,1,-120deg);transform:translate3d(-100%,0,0) rotate3d(0,0,1,-120deg)}to{opacity:1;-webkit-transform:none;transform:none}}.rollIn{-webkit-animation-name:rollIn;animation-name:rollIn}@-webkit-keyframes rollOut{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate3d(0,0,1,120deg);transform:translate3d(100%,0,0) rotate3d(0,0,1,120deg)}}@keyframes rollOut{from{opacity:1}to{opacity:0;-webkit-transform:translate3d(100%,0,0) rotate3d(0,0,1,120deg);transform:translate3d(100%,0,0) rotate3d(0,0,1,120deg)}}.rollOut{-webkit-animation-name:rollOut;animation-name:rollOut}@-webkit-keyframes zoomIn{from{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes zoomIn{from{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}50%{opacity:1}}.zoomIn{-webkit-animation-name:zoomIn;animation-name:zoomIn}@-webkit-keyframes zoomInDown{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.550,.055,.675,.190);animation-timing-function:cubic-bezier(.550,.055,.675,.190)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.320,1);animation-timing-function:cubic-bezier(.175,.885,.320,1)}}@keyframes zoomInDown{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-1000px,0);-webkit-animation-timing-function:cubic-bezier(.550,.055,.675,.190);animation-timing-function:cubic-bezier(.550,.055,.675,.190)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.320,1);animation-timing-function:cubic-bezier(.175,.885,.320,1)}}.zoomInDown{-webkit-animation-name:zoomInDown;animation-name:zoomInDown}@-webkit-keyframes zoomInLeft{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.550,.055,.675,.190);animation-timing-function:cubic-bezier(.550,.055,.675,.190)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.320,1);animation-timing-function:cubic-bezier(.175,.885,.320,1)}}@keyframes zoomInLeft{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(-1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.550,.055,.675,.190);animation-timing-function:cubic-bezier(.550,.055,.675,.190)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(10px,0,0);transform:scale3d(.475,.475,.475) translate3d(10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.320,1);animation-timing-function:cubic-bezier(.175,.885,.320,1)}}.zoomInLeft{-webkit-animation-name:zoomInLeft;animation-name:zoomInLeft}@-webkit-keyframes zoomInRight{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.550,.055,.675,.190);animation-timing-function:cubic-bezier(.550,.055,.675,.190)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.320,1);animation-timing-function:cubic-bezier(.175,.885,.320,1)}}@keyframes zoomInRight{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);transform:scale3d(.1,.1,.1) translate3d(1000px,0,0);-webkit-animation-timing-function:cubic-bezier(.550,.055,.675,.190);animation-timing-function:cubic-bezier(.550,.055,.675,.190)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);transform:scale3d(.475,.475,.475) translate3d(-10px,0,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.320,1);animation-timing-function:cubic-bezier(.175,.885,.320,1)}}.zoomInRight{-webkit-animation-name:zoomInRight;animation-name:zoomInRight}@-webkit-keyframes zoomInUp{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.550,.055,.675,.190);animation-timing-function:cubic-bezier(.550,.055,.675,.190)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.320,1);animation-timing-function:cubic-bezier(.175,.885,.320,1)}}@keyframes zoomInUp{from{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);transform:scale3d(.1,.1,.1) translate3d(0,1000px,0);-webkit-animation-timing-function:cubic-bezier(.550,.055,.675,.190);animation-timing-function:cubic-bezier(.550,.055,.675,.190)}60%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.175,.885,.320,1);animation-timing-function:cubic-bezier(.175,.885,.320,1)}}.zoomInUp{-webkit-animation-name:zoomInUp;animation-name:zoomInUp}@-webkit-keyframes zoomOut{from{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}to{opacity:0}}@keyframes zoomOut{from{opacity:1}50%{opacity:0;-webkit-transform:scale3d(.3,.3,.3);transform:scale3d(.3,.3,.3)}to{opacity:0}}.zoomOut{-webkit-animation-name:zoomOut;animation-name:zoomOut}@-webkit-keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.550,.055,.675,.190);animation-timing-function:cubic-bezier(.550,.055,.675,.190)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.320,1);animation-timing-function:cubic-bezier(.175,.885,.320,1)}}@keyframes zoomOutDown{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);transform:scale3d(.475,.475,.475) translate3d(0,-60px,0);-webkit-animation-timing-function:cubic-bezier(.550,.055,.675,.190);animation-timing-function:cubic-bezier(.550,.055,.675,.190)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.320,1);animation-timing-function:cubic-bezier(.175,.885,.320,1)}}.zoomOutDown{-webkit-animation-name:zoomOutDown;animation-name:zoomOutDown}@-webkit-keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0);-webkit-transform-origin:left center;transform-origin:left center}}@keyframes zoomOutLeft{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(42px,0,0);transform:scale3d(.475,.475,.475) translate3d(42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(-2000px,0,0);transform:scale(.1) translate3d(-2000px,0,0);-webkit-transform-origin:left center;transform-origin:left center}}.zoomOutLeft{-webkit-animation-name:zoomOutLeft;animation-name:zoomOutLeft}@-webkit-keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center}}@keyframes zoomOutRight{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(-42px,0,0);transform:scale3d(.475,.475,.475) translate3d(-42px,0,0)}to{opacity:0;-webkit-transform:scale(.1) translate3d(2000px,0,0);transform:scale(.1) translate3d(2000px,0,0);-webkit-transform-origin:right center;transform-origin:right center}}.zoomOutRight{-webkit-animation-name:zoomOutRight;animation-name:zoomOutRight}@-webkit-keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.550,.055,.675,.190);animation-timing-function:cubic-bezier(.550,.055,.675,.190)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.320,1);animation-timing-function:cubic-bezier(.175,.885,.320,1)}}@keyframes zoomOutUp{40%{opacity:1;-webkit-transform:scale3d(.475,.475,.475) translate3d(0,60px,0);transform:scale3d(.475,.475,.475) translate3d(0,60px,0);-webkit-animation-timing-function:cubic-bezier(.550,.055,.675,.190);animation-timing-function:cubic-bezier(.550,.055,.675,.190)}to{opacity:0;-webkit-transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);transform:scale3d(.1,.1,.1) translate3d(0,-2000px,0);-webkit-transform-origin:center bottom;transform-origin:center bottom;-webkit-animation-timing-function:cubic-bezier(.175,.885,.320,1);animation-timing-function:cubic-bezier(.175,.885,.320,1)}}.zoomOutUp{-webkit-animation-name:zoomOutUp;animation-name:zoomOutUp}@-webkit-keyframes slideInDown{from{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes slideInDown{from{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);visibility:visible}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.slideInDown{-webkit-animation-name:slideInDown;animation-name:slideInDown}@-webkit-keyframes slideInLeft{from{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes slideInLeft{from{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.slideInLeft{-webkit-animation-name:slideInLeft;animation-name:slideInLeft}@-webkit-keyframes slideInRight{from{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes slideInRight{from{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);visibility:visible}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.slideInRight{-webkit-animation-name:slideInRight;animation-name:slideInRight}@-webkit-keyframes slideInUp{from{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}@keyframes slideInUp{from{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);visibility:visible}to{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.slideInUp{-webkit-animation-name:slideInUp;animation-name:slideInUp}@-webkit-keyframes slideOutDown{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}to{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes slideOutDown{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}to{visibility:hidden;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.slideOutDown{-webkit-animation-name:slideOutDown;animation-name:slideOutDown}@-webkit-keyframes slideOutLeft{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}to{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes slideOutLeft{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}to{visibility:hidden;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}.slideOutLeft{-webkit-animation-name:slideOutLeft;animation-name:slideOutLeft}@-webkit-keyframes slideOutRight{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}to{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes slideOutRight{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}to{visibility:hidden;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}.slideOutRight{-webkit-animation-name:slideOutRight;animation-name:slideOutRight}@-webkit-keyframes slideOutUp{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes slideOutUp{from{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}to{visibility:hidden;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}.slideOutUp{-webkit-animation-name:slideOutUp;animation-name:slideOutUp}";
    
    // add DAVURA style
    _css += "*, *:before, *:after{-webkit-box-sizing: inherit;box-sizing: inherit;}html{-webkit-box-sizing: border-box;box-sizing: border-box;}div, *[davu-id]{display:block;}";
    var style = document.createElement("style");
    style.id = "_global_style";
    style.innerHTML = _css;
    document.querySelector("head").appendChild(style);

    // add davura global style
    var style = document.createElement("style")

    Element.prototype.forEach = function(callback) {
        callback(this,0);
    }
    // ajax request
    var request = function(url, data, header, type) {
        return new Promise(function(done, reject) {
            if (url) {
                var xhttp = new XMLHttpRequest();
                if (typeof type == "undefined") type = "post";
                if (typeof header == "undefined") header = "JSON";

                if (header.toUpperCase() == "JSON") {
                    header = "application/x-www-form-urlencoded";
                } else if (header.toUpperCase() == "TEXT") {
                    header = "text/html";
                }

                var _data = "",
                    c = 0;
                if (typeof data === "object") {
                    for (var key in data) {
                        if (c >= 1) {
                            _data += "&";
                        }
                        _data += key + "=" + data[key];
                        c++;
                    }
                }

                // set data in get
                if(type.toUpperCase() === "GET" && typeof data === "object") {
                    if( url.indexOf("?")<0 ) {
                        url+="?";
                    } else {
                        url+="&"
                    }
                    var count = 0;
                    for (var key in data) {
                        if (count > 0) {
                            url+="&";
                        }
                        url+= key + "=" + data[key];
                        count++;
                    }
                }

                xhttp.open(type.toUpperCase(), url, true);
                xhttp.setRequestHeader("Content-type", header);

                xhttp.onreadystatechange = function() {
                    if (this.readyState == 4) {
                        if (this.status == 200) {
                            var res = this.responseText;
                            if (
                                header === "application/x-www-form-urlencoded"
                            ) {
                                try {
                                    res = JSON.parse(res);
                                } catch (error) {}
                            }
                            done(res);
                        } else {
                            reject(this.statusText);
                        }
                    }
                };
                xhttp.send(encodeURI(_data));
            }
        });
    };

    // sdom selector 
    var selector = "_";

    // SDOM
    var SDOM = new (function() {

        // single NODE
        this.singleNode = (function(){
            return function(node) {
                return Object.create(document.createDocumentFragment().childNodes, {
                    0: { value: node, enumerable: true },
                    length: { value: node.length }
                });
            };
        })()

        this.attr = function(a, b) {
            if (typeof a === "string" && typeof b == "string") {
                this.forEach(function(x) {
                    x.setAttribute(a, b);
                    return this;
                });
                return this;
            } else if (typeof a === "string" && !b) {
                if (this instanceof HTMLElement) {
                    return this.getAttribute(a);
                } else if (this[0]) {
                    return this[0].getAttribute(a);
                } else {
                    return null;
                }
            }
        };
        this.addClass = function(a) {
            var list;
            if (typeof a === "string") {
                list = a.split(" ");
            } else {
                list = a;
            }
            this.forEach(function(x) {
                if (x) {
                    list.forEach(function(_class) {
                        if (x.classList) {
                            x.classList.add(_class);
                        } else {
                            x[_class] += " " + _class;
                        }
                    });
                }
            });
            return this;
        };
        this.removeClass = function(a) {
            var list;
            if (typeof a === "string") {
                list = a.split(" ");
            } else {
                list = a;
            }
            this.forEach(function(x) {
                if (x) {
                    list.forEach(function(_class) {
                        if (x.classList) {
                            x.classList.remove(_class);
                        } else if (x[_class]) {
                            x[_class] = x[_class].replace(
                                new RegExp(
                                    "(^|\\b)" +
                                        _class.split(" ").join("|") +
                                        "(\\b|$)",
                                    "gi"
                                ),
                                " "
                            );
                        }
                    });
                }
            });
            return this;
        };
        this.toggleClass = function(a) {
            this.forEach(function(x) {
                x.classList.toggle(a);
            });
            return this;
        };
        this.html = function(a) {
            if (a === undefined) {
                if (this instanceof HTMLElement) {
                    return this.innerHTML;
                } else {
                    if (this[0]) {
                        return this[0].innerHTML;
                    } else {
                        return "";
                    }
                }
            } else if (a) {
                this.forEach(function(x) {
                    x.innerHTML = a;
                });
                return this;
            }
        };
        this.css = function(a, b) {
            var include = [
                "border-radius",
                "border-bottom-left-radius",
                "border-top-left-radius",
                "border-bottom-right-radius",
                "border-top-right-radius",
                "left",
                "top",
                "bottom",
                "right"
            ];
            if (
                typeof a === "string" &&
                (typeof b === "string" || typeof b === "number")
            ) {
                if (typeof b === "number") {
                    b = b + "px";
                }
                this.forEach(function(x) {
                    x.style[a] = b;
                });
            } else if (typeof a === "object" && !b) {
                var self = this;
                var action = function(key, a) {
                    self.forEach(function(x) {
                        if (
                            typeof a[key] === "number" &&
                            a[key] !== 0 &&
                            (include.includes(key) ||
                                /width|padding|margin|height/.test(key))
                        ) {
                            a[key] = a[key] + "px";
                        }
                        x.style[key] = a[key];
                    });
                };

                for (var key in a) {
                    action(key, a);
                }
            } else if (typeof a === "string" && !b) {
                // GET STYLE
                var style;
                if (this instanceof HTMLElement) {
                    style = this.currentStyle || window.getComputedStyle(this);
                } else {
                    style =
                        this[0].currentStyle ||
                        window.getComputedStyle(this[0]);
                }
                return style[a];
            }
            return this;
        };
        this.px = function(a) {
            var el;
            if (this instanceof HTMLElement) {
                el = this;
            } else if (this[0]) {
                el = this[0];
            } else {
                return null;
            }
            var style = el.currentStyle || window.getComputedStyle(el);
            if (!style[a]) return null;
            return Number(style[a].match(/\d/g).join(""));
        };
        this.width = function(a) {
            if (a) {
                if (typeof a === "number") {
                    a = a + "px";
                }
                this.forEach(function(x) {
                    x.offsetWidth = a;
                });
                return this;
            } else if (this instanceof HTMLElement) {
                return this.offsetWidth;
            } else if (this[0]) {
                return this[0].offsetWidth;
            } else {
                return null;
            }
        };
        this.height = function(a) {
            if (a) {
                if (typeof a === "number") {
                    a = a + "px";
                }
                this.forEach(function(x) {
                    x.offsetHeight = a;
                });
                return this;
            } else if (this instanceof HTMLElement) {
                return this.offsetHeight;
            } else if (this[0]) {
                return this[0].offsetHeight;
            } else {
                return null;
            }
        };
        this.parent = function() {
            if (this instanceof HTMLElement) {
                return this.parentElement;
            } else if (this[0]) {
                return this[0].parentElement;
            } else {
                return false;
            }
        };
        this.visible = function(a) {
            if (a === true || a === false) {
                var val;
                if (a === true) {
                    val = "block";
                } else if (a === false) {
                    val = "none";
                } else {
                    val = a;
                }
                this.forEach(function(x) {
                    x.style.display = val;
                });
                return this;
            } else if (typeof a === "string") {
                this.forEach(function(x) {
                    x.style.display = a;
                });
                return this;
            } else {
                var el;
                if (this instanceof HTMLElement) {
                    el = this;
                } else if (this[0]) {
                    el = this[0];
                } else {
                    return false;
                }

                if (!el.style) {
                    return false;
                }

                if (el.style.display === "none") {
                    return false;
                } else {
                    return true;
                }
            }
        };
        this.next = function() {
            var el;
            if (this instanceof HTMLElement) {
                el = this;
            } else if (this[0]) {
                el = this[0];
            } else {
                return false;
            }
            return el.nextElementSibling;
        };
        this.prev = function() {
            var el;
            if (this instanceof HTMLElement) {
                el = this;
            } else if (this[0]) {
                el = this[0];
            } else {
                return false;
            }
            return el.previousElementSibling;
        };
        this.on = function(a, b) {
            this.forEach(function(x) {
                x["on" + a] = b;
            });
        };
        this.click = function(a) {
            if (a) {
                this.forEach(function(x) {
                    x.onclick = a;
                });
            } else {
                this.forEach(function(x) {
                    x.click();
                });
            }
        };
        this.in = function(a) {
            var _arguments = arguments;
            var self = this;
            return new Promise(function(done) {
                var time = 800,
                    display = "block",
                    fx = a;
                for (var arg in _arguments) {
                    var aux = _arguments[arg];
                    if (arg !== 0) {
                        if (aux === "block" || aux === "flex") {
                            display = aux;
                        } else if (typeof aux === "number") {
                            time = aux;
                        }
                    }
                }
                var _class = ["animated", fx];
                self.forEach(function(x) {
                    x.removeAttribute("hidden");
                    x.style.display = display;
                    _class.forEach(function(c) {
                        if (x.classList) {
                            x.classList.add(c);
                        } else {
                            x[c] += " " + c;
                        }
                    });
                    x.style.animationDuration = time + "ms";
                });
                setTimeout(function() {
                    self.removeClass(_class);
                    done(self);
                }, time);
            });
        };
        this.out = function(a) {
            var self = this;
            var _arguments = arguments;
            return new Promise(function(done) {
                var time = 800;
                for (var arg in _arguments) {
                    var aux = _arguments[arg];
                    if (arg !== 0) {
                        if (typeof aux === "number") {
                            time = aux;
                        }
                    }
                }
                var _class = ["animated", a];
                self.forEach(function(x) {
                    x.style.animationDuration = time + "ms";
                    _class.forEach(function(c) {
                        if (x.classList) {
                            x.classList.add(c);
                        } else {
                            x[c] += " " + c;
                        }
                    });
                });
                setTimeout(function() {
                    self.style.display = "none";
                    self.removeClass(_class);
                    done(self);
                }, time);
            });
        };
        this.animate = function(a, time) {
            var self = this;
            var _class = ["animated", a];
            if (!time) {
                time = 800;
            }
            return new Promise(function(done) {
                self.forEach(function(x) {
                    x.style.animationDuration = time + "ms";
                    _class.forEach(function(c) {
                        if (x.classList) {
                            x.classList.add(c);
                        } else {
                            x[c] += " " + c;
                        }
                    });
                });
                setTimeout(function() {
                    self.removeClass(_class);
                    done(self);
                }, time);
            });
        };
        this.focus = function(a, b) {
            if (!a && !b) {
                if (this instanceof HTMLElement) {
                    return this.hasFocus();
                } else if (this[0]) {
                    return this[0].hasFocus();
                } else {
                    return false;
                }
            }

            if (a) {
                this.forEach(function(x) {
                    x.onfocus = a;
                });
            }
            if (b) {
                this.forEach(function(x) {
                    x.onblur = b;
                });
            }
            return this;
        };
        this.val = function(a) {
            if (a !== undefined) {
                this.forEach(function(x) {
                    x.value = a;
                });
                return this;
            } else {
                if (this instanceof HTMLElement) {
                    return this.value;
                } else if (this[0]) {
                    return this[0].value;
                } else {
                    return false;
                }
            }
        };
        this.append = function(a) {
            var tmp;
            if (typeof a == "string") {
                tmp = document.createElement("div");
                tmp.innerHTML = a;
            }
            this.forEach(function(x) {
                if (typeof a == "string") {
                    while (tmp.children.length > 0) {
                        x.appendChild(tmp.children[0]);
                    }
                } else {
                    x.appendChild(a);
                }
            });
            return this;
        };
        this.prepend = function(a) {
            var tmp;
            if (typeof a == "string") {
                tmp = document.createElement("div");
                tmp.innerHTML = a;
            }
            this.forEach(function(x) {
                if (typeof a == "string") {
                    while (tmp.children.length > 0) {
                        x.insertBefore(
                            tmp.children[tmp.children.length - 1],
                            x.firstChild
                        );
                    }
                } else {
                    x.insertBefore(a, x.firstChild);
                }
            });
            return this;
        };

        // DABULA implements
        this.appendDav = function(a) {
            var tmp = a.replace(/ /g,'');
            if(tmp[0]!="<" && tmp[tmp.length-1]!=">"){
                a="<"+a+">";
            }
            this.forEach(function(x){
                x.prepend(a);
            });
            DAVURA.load();
            return this;
        }
        this.prependDav = function(a) {
            var tmp = a.replace(/ /g,'');
            if(tmp[0]!="<" && tmp[tmp.length-1]!=">"){
                a="<"+a+">";
            }
            this.forEach(function(x){
                x.append(a);
            });
            DAVURA.load();
            return this;
        }
    })();

    // add SDOM in Prototype NodeList and Element

    NodeList.prototype.attr = SDOM.attr;
    Element.prototype.attr = SDOM.attr;

    NodeList.prototype.addClass = SDOM.addClass;
    Element.prototype.addClass = SDOM.addClass;

    NodeList.prototype.removeClass = SDOM.removeClass;
    Element.prototype.removeClass = SDOM.removeClass;

    NodeList.prototype.hasClass = function(a) {
        return this[0].classList.contains(a);
    };
    Element.prototype.hasClass = function(a) {
        return this.classList.contains(a);
    };

    NodeList.prototype.toggleClass = SDOM.toggleClass;
    Element.prototype.toggleClass = SDOM.toggleClass;

    NodeList.prototype.html = SDOM.html;
    Element.prototype.html = SDOM.html;

    NodeList.prototype.text = function(a) {
        if (!this[0]) return;
        if (a == undefined) {
            if (this[0]) {
                return this[0].textContent || this[0].innerText;
            } else {
                return false;
            }
        } else {
            if (this[0].textContent) {
                this[0].textContent = a;
                this[0].innerText = a;
            }
            return this;
        }
    };

    NodeList.prototype.css = SDOM.css;
    Element.prototype.css = SDOM.css;

    NodeList.prototype.px = SDOM.px;
    Element.prototype.px = SDOM.px;

    NodeList.prototype.width = SDOM.width;
    Element.prototype.width = SDOM.width;

    NodeList.prototype.height = SDOM.height;
    Element.prototype.height = SDOM.height;

    NodeList.prototype.parent = SDOM.parent;
    Element.prototype.parent = SDOM.parent;
    NodeList.prototype.position = function() {
        if (this[0]) {
            return this[0].getBoundingClientRect();
        } else {
            return {};
        }
    };
    Element.prototype.position = function() {
        return this.getBoundingClientRect();
    };
    NodeList.prototype.visible = SDOM.visible;
    Element.prototype.visible = SDOM.visible;

    NodeList.prototype.next = SDOM.next;
    Element.prototype.next = SDOM.next;

    NodeList.prototype.prev = SDOM.prev;
    Element.prototype.prev = SDOM.prev;

    Element.prototype.APPEND = Element.prototype.append;
    Element.prototype.append = SDOM.append;
    NodeList.prototype.append = SDOM.append;

    Element.prototype.PREPEND = Element.prototype.prepend;
    Element.prototype.prepend = SDOM.prepend;
    NodeList.prototype.prepend = SDOM.prepend;

    NodeList.prototype.addBefore = SDOM.addBefore;
    Element.prototype.addBefore = SDOM.addBefore;

    NodeList.prototype.addAfter = SDOM.addAfter;
    Element.prototype.addAfter = SDOM.addAfter;

    NodeList.prototype.eq = function(a) {
        if (this[a]) {
            return window[selector](this[a]);
        }
        return null;
    };
    NodeList.prototype.on = SDOM.on;
    Element.prototype.on = SDOM.on;

    NodeList.prototype.click = SDOM.click;
    Element.prototype.click = SDOM.click;

    NodeList.prototype.in = SDOM.in;
    Element.prototype.in = SDOM.in;

    NodeList.prototype.out = SDOM.out;
    Element.prototype.out = SDOM.out;

    NodeList.prototype.animate = SDOM.animate;
    Element.prototype.animate = SDOM.animate;

    NodeList.prototype.focus = SDOM.focus;
    Element.prototype.focus = SDOM.focus;
    NodeList.prototype.find = function(a) {
        return this[0].querySelectorAll(a);
    };
    Element.prototype.find = function(a) {
        return this.querySelectorAll(a);
    };
    NodeList.prototype.findOne = function(a) {
        return window[selector](this[0].querySelector(a));
    };
    Element.prototype.findOne = function(a) {
        return this.querySelector(a);
    };
    NodeList.prototype.remove = function() {
        this.forEach(function(x) {
            x.remove();
        });
    };
    NodeList.prototype.val = SDOM.val;
    Element.prototype.val = SDOM.val;

    NodeList.prototype.scrollAt = function(block, behavior) {
        if (block === undefined) {
            block = "start";
        }
        if (behavior === undefined) {
            behavior = "smooth";
        }
        if (this[0]) {
            this[0].scrollIntoView({
                block: block,
                behavior: behavior
            });
        }
        return this;
    };
    Element.prototype.scrollAt = function(block, behavior) {
        if (!block) {
            block = "start";
        }
        if (!behavior) {
            behavior = "smooth";
        }
        this.scrollIntoView({
            block: block,
            behavior: behavior
        });
        return this;
    };

    // DAVURA ----------------------------------------
    NodeList.prototype.appendDav = SDOM.appendDav;
    Element.prototype.appendDav = SDOM.appendDav;

    NodeList.prototype.prepenDav = SDOM.prependDav;
    Element.prototype.prependDav = SDOM.prependDav;

    // INIT SELECTOR
    window[selector] = function(a) {
        if (typeof a === "string") {
            return document.querySelectorAll(a);
        } else {
            return SDOM.singleNode(a);
        }
    };
    // request get
    window[selector].get = function(url, data, header) {
        return new Promise(function(done, reject) {
            request(url, data, header, "get")
                .then(function(r) {
                    done(r);
                })
                .catch(function(e) {
                    reject(e);
                });
        });
    };
    // request post
    window[selector].post = function(url, data, header) {
        return new Promise(function(done, reject) {
            request(url, data, header, "post")
                .then(function(r) {
                    done(r);
                })
                .catch(function(e) {
                    reject(e);
                });
        });
    };
})()

// DAVURA --------------------------------------------------------------

/**
* DAVURA
* DEVELOPED BY
* Bonarja
* Bonarja@gmail.com
* Bonarja.com
* FORK:
* https://github.com/davura/davura
* https://www.npmjs.com/package/davura
*
* LICENSE: MIT
*
**/

// DAVURA PROTOTYPES
Number.prototype.toLowerCase = function(){
    return this;
}
Array.prototype.draw = function(callback){
    var r="";
    for (var index = 0; index < this.length; index++) {
        r+=callback(this[index],index);
    }
    return r;
}
Array.prototype.orderBy = function(p) {
    return this.slice(0).sort(function(a,b) {
    return (a[p].toLowerCase() > b[p].toLowerCase()) ? 1 : (a[p].toLowerCase() < b[p].toLowerCase()) ? -1 : 0;
    });
}
String.prototype.d_replace = function(str1, str2, ignore) {
    return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);   
}

// DAVURA MAIN
var DAVURA = new (function(){
    // ROUTE REDIRECTION to #/
    var tmp_url = window.location.href;
    if(tmp_url.indexOf("#/")<0){
        window.location.href = tmp_url + "#/";
    }
    
    var dabu_list = {}; // Components list
    this.ready = false;  // DAVURA load is ready
    var _id = 0; // id for components
    var dimport = "./dmodules"; // dir for import componenst
    var selector = "_"; // SDOM selector in component
    var call = "D"; // call DAVURA
    var onreadyFunction; // function callba onready DAVURA
    var components_in_route = {}; // componets using in routes
    //  MATCHS --------------
    var matchs = {
        r1:/{{([\s\S]*?)}}/g,
        r2:/\({2}([\s\S]*?)\){2}/g,
        r3:/#{\[\{([\s\S]*?)}\]\}|{\[\{([\s\S]*?)}\]\}/g,
        r4:/\({2}([\s\S]*?)\){2}|{{([\s\S]*?)}}/g,
        r5:/:([^- \/\?:]*)*/g,
    }
    // end MATCHS -----------
    var route_list = {};
    var route_callback_run = {};
    var no_route = {};
    var navigateByUrl = false;
    var superWatchList = {};
    this.d_update_list = {}; // d-update functions list for eval
    
    // route objects in observable vars 
    var routeObject = function(data,base,_data,dav) {

        // set root
        if(base && data!=null){
            Object.defineProperty(data, '__root__', {
                enumerable: false,
                configurable: false,
                writable: true,
                value:base
            });
        }
        var PARENT=function(select,parent,parent_name){
            if( select && typeof select==="object"){
                if(!select.__parent__){
                    Object.defineProperty(select, '__parent__', {
                        enumerable: false,
                        configurable: false,
                        writable: true,
                        value:parent
                    });
                }else{
                    select.__parent__=parent;
                }
                if(!select.__parentname__){
                    Object.defineProperty(select, '__parentname__', {
                        enumerable: false,
                        configurable: false,
                        writable: true,
                        value:parent_name
                    });
                }else{
                    select.__parentname__=parent_name;
                }
            }
        }
        var set = function(s){

            if( Array.isArray(s) ){
                Object.defineProperty(s, 'remove', {
                    enumerable: false,
                    configurable: false,
                    writable: true,
                    value: function(num){
                        array_remove(_data,this,num,dav)
                    }
                });
                Object.defineProperty(s, 'new', {
                    enumerable: false,
                    configurable: false,
                    writable: true,
                    value: function(array){
                        array_new(_data,this,dav,array);
                    }
                });
            }

            if(typeof s==="array"){
                for (var x = 0; x < s.length; x++) {
                    var ele = s[x];
                    PARENT(ele,s,x);
                    set(x);
                }
                
            }
            else if(typeof s==="object"){
                for(var key in s){
                    PARENT(s[key],s,key);
                    set(s[key]);
                }
            }
        }
        set(data);
    }
    // try eval
    var _eval = function(__data__,value) {
        try {
            value = eval(value);
        } catch (e) {
            return value;
        }
        return value;
    }
    // regex by matchs list
    var _regex = function(str,type,callback) {
        var re = matchs['r'+type];
        var grupos; var result=[];
        while ((grupos = re.exec(str)) !== null) { 
            result.push({
                type:grupos[0][0],
                val:grupos[1] || grupos[2]
            }); 
        }
        result.forEach(function(item){
            callback(item.val,item.type);
        });
    }
    // unscape string in html
    var unscape_string = function(s) {
        var re = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g;
        var unescaped = {
          '&amp;': '&',
          '&#38;': '&',
          '&lt;': '<',
          '&#60;': '<',
          '&gt;': '>',
          '&#62;': '>',
          '&apos;': "'",
          '&#39;': "'",
          '&quot;': '"',
          '&#34;': '"'
        };
        return s.replace(re, function (m) {
          return unescaped[m];
        });
    }
    var isNumber = function(n){
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    // copy object (used in case clone_object is not supported)
    var copy_object = function(obj) {
        // basic type deep copy
        if (obj === null || obj === undefined || typeof obj !== 'object')  {
            return obj
        }
        // array deep copy
        if (obj instanceof Array) {
            var cloneA = [];
            for (var i = 0; i < obj.length; ++i) {
                cloneA[i] = clone_object(obj[i]);
            }
            return cloneA;
        }
        // object deep copy
        var cloneO = {};
        for (var i in obj) {
            cloneO[i] = clone_object(obj[i]);
        }
        return cloneO;
    }
    // clone object
    var clone_object = function(obj) {
        try {
            return new Object.assign({}, obj);
        } catch (error) {
            return copy_object(obj)
        }
    }
    // retur new unique id
    var get_id = function() {
        _id++;
        return "d" + _id + Math.random().toString(36).substr(2, 10);
    }
    // remove davura from selector D.label
    var removeDavuraFromLabel = function(el) {
        for (var x = 0; x < el.attributes.length; x++) {
            var name = el.attributes[x].name;
            if(name.indexOf("#")===0){
                delete window[call][name.slice(1,name.length)];
            }
        }
    }
    // process this in css
    var process_css = function(css,id) {
        if(css.includes("this&%#")){
            return css.replace(/this&%#/g,"#" + id);
        } else {
            return DAVURA.microsass.convert(css, {dabu_id: id});
        }
    }
    // load arguments in components
    var _arguments = function(el, dabu_component){
        if (!el) return;
        var data={};
        for (var x = 0; x < el.attributes.length; x++) {
            var value = el.attributes[x].value;
            var name = el.attributes[x].name;
            var asigned = false;
            if(name.indexOf("#")!=0){
                try {
                    value = eval(value);
                } catch (error) {
                    try {
                        var __;
                        eval("__ = " + value);
                        if (__) {
                            if (typeof __ === "object") {
                                if (!Array.isArray(__)) {
                                    data[name] = {};
                                    for(var key in __) {
                                        asigned = true;
                                        data[name][key] = __[key];
                                    }
                                }
                            }
                        }
                    } catch (error) {}
                }
                if(!asigned) {
                    data[name] = value;
                }
            } else if (dabu_component) {
                name = name.slice(1, name.length);
                if(name!=="all" && name !=="route" && name !=="post" && name!=="get") {
                    el.setAttribute("davu-label", name);
                    Object.defineProperty(window[call], name,{
                        enumerable: false,
                        configurable: true,
                        writable: false,
                        value: dabu_component
                    })
                }
            }
        }
        return data;
    }
    var _watch = function(context,varName,set,get){
        var value = context[varName];
        Object.defineProperty(context, varName, {
            get: function () {
                if(get){ get(varName,value); }
                return value;
            },
            set: function (v) {
                value = v;
                if(set){ set(varName,value); }
            }
        });
    }
    var watchGet = function(context, varName, get){
        var value = context[varName];
        Object.defineProperty(context, varName, {
            get: function () {
                return get(varName, value, context);
            }
        });
    }
    // asign super watch in list
    var superWatch = function(val, id, davu){
        if(!superWatchList[davu.id]) {
            superWatchList[davu.id] = {};
        }
        superWatchList[davu.id][id] = val;
    }
    // run superwatch
    var runSuperWatch = function(){
        for( var dabu_id in this.superWatchList) {
            var el = document.querySelector("#__" + dabu_id);
            
            for( var id in this.superWatchList[dabu_id]) {
                var select = el.querySelector("davu[d-watch='"+ id +"']");
                if (select) {
                    try {
                        // eval value
                        select.innerHTML = eval(superWatchList[dabu_id][id]);
                        select.setAttribute("d-sw",id);
                    } catch (error) {}
                } else {
                    //  is from value
                    select = el.querySelector("*[d-val-id='"+ id +"']");
                    try {
                        // eval value
                        select.value = eval(superWatchList[dabu_id][id]);
                        select.setAttribute("d-sw",id);
                    } catch (error) {}
                }
              
            }
        }
    }
    // update super watch
    var updateSuperWatch = function(dabu_component, name, value){
        if (!dabu_component) return;
        var label = dabu_component.getAttribute("davu-label");
        for(var dabu_id in superWatchList) {
            for (var id in superWatchList[dabu_id]) {
                var value = superWatchList[dabu_id][id];
                if(value.includes("D." + label)) {
                    var select = document.querySelector("#__"+ dabu_id + " davu[d-watch='"+ id +"']");
                    if (select) {
                        try {
                            select.innerHTML = eval(value);
                        } catch (error) {}
                    } else {
                        // from value
                        select = document.querySelector("#__"+ dabu_id + " *[d-val-id='"+ id +"']");
                        try {
                            select.value = eval(value);
                        } catch (error) {}
                    }
                    if (select) {
                        set_routes_on_click(select);
                    }
                }
            }
        }
    }
    // process d-for
    var process_for = function(el,data,dav){
        var __data__ = data;
        Array.prototype.forEach.call(el.querySelectorAll("*[d-for]"), function (x) {
            var par = x.getAttribute("d-for");
            if(par.toUpperCase().indexOf(" IN ")<=0){
                var result = _eval(data, par);
                var 
                    r="",
                    id = get_id(),
                    html = x.innerHTML
                ;
                dabu_list[dav.el].list[dav.id].for[id]={};
                if(!/^[0-9]+$/.test(result)){
                    // Dynamic iteration
                    par = par.d_replace("this.", "__data__.");
                    result = _eval(data,par);
                    if(!dabu_list[dav.el].list[dav.id].dynamicFor){
                        dabu_list[dav.el].list[dav.id].dynamicFor={};
                    }
                    dabu_list[dav.el].list[dav.id].dynamicFor[par.d_replace("__data__.","")]=id;
                }
                var r="";
                
                x.setAttribute("d-for-id",id);

                // WATCH {{}}

                _regex(html,1,function(item){
                    var tmp = item;
                    tmp = tmp.d_replace("this.", "__data__.");
                    // WATCH
                    dabu_list[dav.el].list[dav.id].onWatch = true;
                    _eval(data,tmp);
                    
                    dabu_list[dav.el].list[dav.id].tmp.forEach(function(_r){
                        if(!dabu_list[dav.el].list[dav.id].watcher[_r]){ dabu_list[dav.el].list[dav.id].watcher[_r]=[]; }
                        dabu_list[dav.el].list[dav.id].watcher[_r].push(id);
                    });

                    dabu_list[dav.el].list[dav.id].onWatch=false;
                    dabu_list[dav.el].list[dav.id].tmp=[];
                    
                    html= html.d_replace('{{'+item+'}}', '{[{'+tmp+'}]}');
                });


                for (var i = 0; i < Number(result); i++) { 
                    r += html.d_replace("#C", i);
                }
                dabu_list[dav.el].list[dav.id].for[id].html=html;
                dabu_list[dav.el].list[dav.id].for[id].iteration=result;
                x.innerHTML=r;
            }else{
                if(par.indexOf(" in ")>=0){ par = par.split(" in "); }
                else if(par.indexOf(" IN ")>=0){ par = par.split(" IN "); }

                var 
                    _var = par[0].d_replace(" ", ""),
                    list = par[1].d_replace(" ", ""),
                    r="",
                    id = get_id(),
                    html = x.innerHTML
                ;
                var current = _eval( data, list.d_replace("this", "__data__") );
                if(typeof current=="string") return false;


                dabu_list[dav.el].list[dav.id].for[id]={ html:"",var:_var,list:list }
                x.setAttribute("d-for-id",id);
                x.setAttribute("d-for-key",list.replace("this.",""));

                // replace object in {{ }}

                var isArray = Array.isArray(current);
                // WATCH {{}} save in html

                _regex(html,4,function(item){
                    item = item.replace(/\\/g, "/");
                    var tmp = item;
                    if(isArray){
                        tmp = tmp.d_replace(_var + '.', list+'[#C].');
                        tmp = tmp.d_replace(_var, list+'[#C]');
                    }
                    tmp = tmp.d_replace("this.", "__data__.");

                    if(!isArray){
                        tmp = tmp.d_replace(_var, list + '.#k');
                        tmp = tmp.d_replace(_var + '.', '__data__.' + list + '.#K.');
                        tmp = tmp.d_replace("this.", "__data__.");
                        html= html.d_replace('{{'+item+'}}', '{[{'+tmp+'}]}');
                    }

                    // WATCH
                    dabu_list[dav.el].list[dav.id].onWatch=true;
                    _eval(data,tmp);
                    
                    dabu_list[dav.el].list[dav.id].tmp.forEach(function(_r){
                        if(!dabu_list[dav.el].list[dav.id].watcher[_r]){ dabu_list[dav.el].list[dav.id].watcher[_r]=[]; }
                        dabu_list[dav.el].list[dav.id].watcher[_r].push(id);
                    });

                    dabu_list[dav.el].list[dav.id].onWatch=false;
                    dabu_list[dav.el].list[dav.id].tmp=[];
                    
                    html = html.d_replace('{{'+item+'}}', '{[{'+tmp+'}]}');

                })

                // d-for in html
                var c=0;
                for(var key in current){
                    if(!isNumber(key)) continue;
                    var K = key;
                    var tmp = html.d_replace("#C", c);
                    var tmp = tmp.d_replace("#K", key);
                    if(isNumber(key)){ 
                        key="["+key+"]"; 
                    }else{
                        key="."+key;
                    }
                    var route = get_route_object(current)+key;
                    r+='<d-for d-for-item="'+route+'" d-for-k="'+K+'" d-for-count="'+c+'">'+tmp+'</d-for>';
                    c++;
                }
                x.innerHTML=r;
                dabu_list[dav.el].list[dav.id].for[id].html=html;
            }
            process_davura_in_for(x, dav, false);
        });
    }
    var update_dynamic_for = function(name ,value, dav, __data__){
        if(!isNumber(value) || !dabu_list[dav.el].list[dav.id].dynamicFor) return; // close if value is not number or no exist dybanucFor
        var id = dabu_list[dav.el].list[dav.id].dynamicFor[name];
        if(!id) return; // close if not exist id
        // UPDATE
        var el = dabu_list[dav.el].list[dav.id].el.querySelector('*[d-for-id="'+id+'"]');
        var html = dabu_list[dav.el].list[dav.id].for[id].html;
        var r ="";
        for (var index = 0; index < value; index++) {         
            r += html.d_replace("#C", index);            
        }
        el.innerHTML = r;
        eval_for(el, __data__, dav);
        process_davura_in_for(el, dav, true);
    }
    var active_onclick = function(el, id){
        Array.prototype.forEach.call(el.querySelectorAll("*[onclick]"), function (ele) {
            var action = ele.getAttribute("onclick");
            action = action.d_replace("__data__.", "this.");
            action = action.d_replace("this.", "DAVURA.getById('"+id+"').");
            action = action.d_replace("#E", "this");
            ele.setAttribute("onclick",action);
        })
        active_keypress(el,id);
    }
    // active onkeypress, onkeydown, onkeyup
    var active_keypress = function(el, id){
        Array.prototype.forEach.call(el.querySelectorAll("*[onkeypress], *[onkeydown], *[onkeyup]"), function (ele) {
            var events = {
                onkeypress : ele.getAttribute("onkeypress"),
                onkeydown : ele.getAttribute("onkeydown"),
                onkeyup : ele.getAttribute("onkeyup")
            }

            for(var key in events) {
                if (events[key]) {
                    var action = events[key].d_replace("__data__." ,"this.");
                    action = action.d_replace("this.", "DAVURA.getById('"+id+"').");
                    action = action.d_replace("#E", "this");
                    ele.setAttribute(key, action);
                }
            }
        })
    }
    var process_davura_in_for = function(el, dav, remove){
        // LOAD DAVURA components
        load({
            el:el
        });
        if(!dabu_list[dav.el].list[dav.id].ctrash) {
            dabu_list[dav.el].list[dav.id].ctrash = {};
        }
        // SEARCH DAVURA components
        Array.prototype.forEach.call(el.querySelectorAll('*[davu-id]'),function(c){
            dabu_list[dav.el].list[dav.id].ctrash[c.getAttribute("davu-id")]=true;
        });
        if(remove){
            // REMOVE INACTIVE DAVURA components
            var list = dabu_list[dav.el].list[dav.id].ctrash;
            for(var id in list){
                var exist = el.querySelector("*[davu-id='"+id+"']");
                if(!exist){
                    delete list[id];
                    var remove = DAVURA.getById(id)
                    if(remove) remove.destruct();
                }
            }
        }
    }
    var eval_update = function(html, __data__){
        html = html.replace(/"#'\+/g,'"'+"'+");
        _regex(html,3,function(item, type){
            if (type === "{") {
                html=html.d_replace("{[{"+item+"}]}", eval(item));
            } else {
                html=html.d_replace("#{[{"+item+"}]}", eval(item));
            }
        });
        return html;
    }
    var process_update = function(el, __data__, dav){
       
        if(!dabu_list[dav.el].list[dav.id].update){
            dabu_list[dav.el].list[dav.id].update={};
        }
        if(!dabu_list[dav.el].ctrash) dabu_list[dav.el].ctrash={}; // for davura trash
        Array.prototype.forEach.call(el.querySelectorAll("*[d-update]"), function (x) {
            var html = unscape_string(x.innerHTML);
            var id = get_id();
            x.setAttribute("d-update-id",id);
            var vars = [];
            _regex(html,4,function(item){
                item = item.replace(/\\/g, "/");
                var tmp = item.d_replace("this.", "__data__.");
                vars.push(tmp);
                html = html.d_replace('{{'+item+'}}', '{[{'+tmp+'}]}');
            });
            dabu_list[dav.el].list[dav.id].update[id]={
                html:html,
                vars:vars,
                davura:{}
            };
            x.innerHTML = html;
            // active onclick
            active_onclick(x, dav.id);
            active_keypress(x, dav.id);
            set_routes_on_click(x);

            // process match {[]}
            eval_for(x, __data__, dav);

            // LOAD DAVURA
            load({
                el:x,
                f_update:true,
                onready:function(list){
                    list.forEach(function(x){
                        dabu_list[dav.el].list[dav.id].update[id].davura[x.D.getAttribute("davu-id")]=true;
                    })
                }
            });
        })
    }
    var change_in_update = function(name, dav ,__data__){
        var updateList = [];
        for(var davura_id in dabu_list[dav.el].list[dav.id].update){
            for (var x = 0; x < dabu_list[dav.el].list[dav.id].update[davura_id].vars.length; x++) {
                var _var = dabu_list[dav.el].list[dav.id].update[davura_id].vars[x];

                if(_var.includes("__data__." + name)){
                    updateList.push({
                        id: davura_id,
                        html: dabu_list[dav.el].list[dav.id].update[davura_id].html
                    });
                    break;
                }
            }
        }

        if(updateList.length){
            updateList.forEach(function(item){
                var el = dabu_list[dav.el].list[dav.id].el.querySelector('*[d-update-id="'+item.id+'"]');
                if(el){
                    var tmp = eval_update(item.html, __data__);
                    el.innerHTML = tmp;
                    active_onclick(el,dav.id);
                    active_keypress(el,dav.id);
                    set_routes_on_click(el);
                    // LOAD DAVURA
                    load({
                        el:el,
                        f_update:true,
                        onready:function(list){
                            list.forEach(function(x){
                                dabu_list[dav.el].list[dav.id].update[item.id].davura[x.D.getAttribute("davu-id")]=true;
                            })

                            var from_remove = [];
                            for( var id in dabu_list[dav.el].list[dav.id].update[item.id].davura){
                                if( !document.querySelector("*[davu-id='"+id+"']") ){
                                    from_remove.push(id);
                                    var remove = DAVURA.getById(id);
                                    if(remove) remove.destruct();
                                }
                            }

                            from_remove.forEach(function(id){
                                delete dabu_list[dav.el].list[dav.id].update[item.id].davura[id];
                            })
                        }
                    });
                }
            })
        }
 
    }
    var process_vars = function(el, __data__, dav){
        var html = unscape_string(el.innerHTML);
        _regex(html,1,function(item){
            item = item.replace(/\\/g, "/");
 
            var id = get_id();
            // watch change
            dabu_list[dav.el].list[dav.id].onWatch = true;
            var item_replace = item.replace(/this./g, "__data__.");

            dabu_list[dav.el].list[dav.id].subcriber[id] = item_replace;

            var value = _eval(__data__, item_replace); // || "";
            if (value === undefined) {
                value = "";
            }

            if(item_replace.includes("D.")) {
                superWatch(item_replace, id, dav);
            }
            html = html.replace('{{'+item+'}}','<davu d-watch='+id+'>'+value+'</davu>');

            dabu_list[dav.el].list[dav.id].tmp.forEach(function(_var){
                if(!dabu_list[dav.el].list[dav.id].watcher[_var]){ dabu_list[dav.el].list[dav.id].watcher[_var]=[]; }
                dabu_list[dav.el].list[dav.id].watcher[_var].push(id);
            })
            dabu_list[dav.el].list[dav.id].onWatch=false;
            dabu_list[dav.el].list[dav.id].tmp=[];
        });
        el.innerHTML=html;
        // SEARCH ALL # SELECTOR IN DOOM AND ADD IN THE DATA
        if(!window["_DAVURA_IS_COMPILED"]){
            Array.prototype.forEach.call(el.querySelectorAll('*'), function (x) {
                Array.prototype.forEach.call(x.attributes, function(attr){
                    attr = attr.name;
                    if (attr.indexOf("#") === 0) {
                        var name = attr.slice(1,attr.length);
                        x.setAttribute("davura-el-label",name);
                        __data__[name] = true;
                        watchGet(__data__, name, function(varName, value, context) {
                            var id = context.D.getAttribute("davu-id");
                            return document.querySelector("#__"+ id + " *[davura-el-label='"+ varName +"']");
                        });
                    }
                });
            });
        } else {
            // IS COMPILED
            Array.prototype.forEach.call(el.querySelectorAll('*[_ddref]'), function (x) {
                var name = x.getAttribute("_ddref");
                __data__[name] = true;
                watchGet(__data__, name, function(varName, value, context) {
                    var id = context.D.getAttribute("davu-id");
                    return document.querySelector("#__"+ id + " *[_ddref='"+ varName +"']");
                });
            });
        }
    }
    var listen = function(data, el, dav){
        var __data__=data;
        for(var key in data){
            var ele = data[key];
            if(typeof ele=="object"){
                routeObject(ele,key,data,dav);
                var isArray = Array.isArray(ele);
                watch(data[key],function(name,type,val,oldval){
                    var _this=this;
                    var route = get_route_object(this);

                    if(!dabu_list[dav.el].list[dav.id] || dabu_list[dav.el].list[dav.id].unwatch){
                        return false;
                    }
                    if(type=="set"){
                        // d-for-key
                        Array.prototype.forEach.call(el.querySelectorAll('*[d-for-item="'+route+'"],*[d-for-key="'+route+'"]'), function (item) {
                            // get parent id
                            var id = item.parentElement.getAttribute("d-for-id") || item.getAttribute("d-for-id");
    
                            var html = dabu_list[dav.el].list[dav.id].for[id].html;
  

                            if(!isArray){
                                item = item.querySelector('*[d-for-item="'+route+'.'+name+'"]');
                            }

                            // get index
                            var C = item.getAttribute("d-for-count");
                            // get key
                            var K = item.getAttribute("d-for-k");
                            html = html.replace(/#C/g, C);
                            html = html.replace(/#K/g, K);

                            _regex(html,3,function(x, type){
                                var ev = _eval(data,x);
                                if (type === "{"){
                                    html = html.d_replace("{[{"+x+"}]}", ev);
                                } else {
                                    html = html.d_replace("#{[{"+x+"}]}", ev);
                                }
                            })

                            item.innerHTML = html;

                            // Update onclick
                            active_onclick(item,dav.id);
                            active_keypress(item,dav.id);
                            set_routes_on_click(item);
                            process_davura_in_for(item,dav,true);
                        })
                        array_vars_update(route,name,data,dav);
                    }
                    else if(type=="push"){
                        if(typeof val=="object"){
                            routeObject(val,null,data,dav);
                            if(!val.__parent__){
                                Object.defineProperty(val, '__parent__', {
                                    enumerable: false,
                                    configurable: false,
                                    writable: true,
                                    value:_this
                                });
                                Object.defineProperty(val, '__parentname__', {
                                    enumerable: false,
                                    configurable: false,
                                    writable: true,
                                    value:name
                                });
                            }
                        }
                        // var route = get_route_object(_this);
                        Array.prototype.forEach.call(data.D.querySelectorAll('*[d-for-key="'+route+'"]'), function (item) {
                            var _route=route;   
                            var id = item.getAttribute("d-for-id");
                            var html = dabu_list[dav.el].list[dav.id].for[id].html;
                            html = html.d_replace("#C", name);
                            // eval
                            _regex(html,3,function(x, type){
                                var ev = eval(x);
                                if (type ==="{") {
                                    html=html.d_replace("{[{"+x+"}]}", ev);
                                } else {
                                    html=html.d_replace("#{[{"+x+"}]}", ev);
                                }
                            });
                            var tmp = document.createElement("d-for");

                            if(isNumber(name)){
                                _route = _route+"["+name+"]";
                            }else{
                                _route = _route+"."+name;
                            }

                            tmp.setAttribute("d-for-item",_route);
                            tmp.setAttribute("d-for-count", name);
                            tmp.innerHTML=html;


                            // update onclick
                            active_onclick(tmp,dav.id);
                            active_keypress(tmp,dav.id);
                            set_routes_on_click(tmp);
                            item.append(tmp);
                            array_vars_update(route,name,data,dav);;
                            process_davura_in_for(item,dav);
                        })
                    }
                    // PROCESS
                    change_in_update(route,dav,data,route);
                })
                // update vars
            }
            else if(typeof ele!=="function"){
                _watch(data,key,function set(name,value){
                    updateSuperWatch(data.D, name, value);
                    
                    // update in var
                    var select = dabu_list[dav.el].list[dav.id].watcher[name] || false;
                    if(select){
                        select.forEach(function(id){
                            var html = dabu_list[dav.el].list[dav.id].subcriber[id] || false;
                            if(html){
                                html = eval(html);
                                if(html === undefined) return;
                                dabu_list[dav.el].list[dav.id].el.querySelector('davu[d-watch="'+id+'"]').innerHTML=html;
                            }else{
                                // search in for
                                var aux = dabu_list[dav.el].list[dav.id].for[id] || false;
                                if(aux){
                                    // update for
                                    var result = "";
                                    var count = 0;

                                    // update in simple for of number iteration
                                    if(aux.iteration){
                                        for (var index = 0; index < aux.iteration; index++) {
                                            result += aux.html.replace(/#C/g, index);         
                                        }
                                        var _el = dabu_list[dav.el].list[dav.id].el.querySelector('*[d-for-id="'+id+'"]');
                                        _el.innerHTML = result;
                                        eval_for(_el, data, dav);
                                    }
                                    else{
                                        // Update en for list
                                        if(dabu_list[dav.el].list[dav.id].data[aux.list]){
                                            for(var key in dabu_list[dav.el].list[dav.id].data[aux.list]){
                                                var html = aux.html.replace(/#C/g, count);
                                                html = html.replace(/#K/g, '"'+key+'"');
                                                result += '<d-for d-for-item="'+count+'">'+html+'</d-for>';
                                                count++;
                                            }
                                            var _el = dabu_list[dav.el].list[dav.id].el.querySelector('*[d-for-id="'+id+'"]');
                                            _el.innerHTML=result;
                                            eval_for(_el,data, dav);
                                        }
                                    }
                                }
                            }
                        })
                    }
                    // update in input
                    var select = dabu_list[dav.el].list[dav.id].cval[name] || false;
                    if(select){
                        select.forEach(function(id){
                            Array.prototype.forEach.call(dabu_list[dav.el].list[dav.id].el.querySelectorAll('*[d-val-id="'+id+'"'), function (item) {
                                var value = item.getAttribute("d-val");
                                var v="";
                                try {
                                    v = eval(value.replace(/this./g, "__data__."));
                                } catch (error) {}
                                item.value=v;
                            });
                        })
                    }
                    // CHANGE IN UPDATE
                    change_in_update(name, dav, __data__);
                    // CHANGE IN DINAMYC FOR
                    update_dynamic_for(name, value, dav, __data__);


                },function get(name){
                    if(dabu_list[dav.el].list[dav.id].onWatch){
                        dabu_list[dav.el].list[dav.id].tmp.push(name);
                    }
                });
            }
        }
    }
    var array_update = function(data, array, dav){
        var __data__ = data;
        var route = get_route_object(array);
        var list = data.D.querySelectorAll('*[d-for-key="'+route+'"]');
        // update doom
        Array.prototype.forEach.call(list, function (item) {
            var id = item.getAttribute("d-for-id");
            var html = dabu_list[dav.el].list[dav.id].for[id].html;
            html = unscape_string(html);
            var r="", c=0;
            for(var key in array){
                if(!isNumber(key)) continue;
                var tmp = html.replace(/#C/g, c);
                tmp = tmp.replace(/#K/g,key);

                _regex(tmp,3,function(item, type){
                    var ev = _eval(data,item);
                    if (type === "{") {
                        tmp = tmp.d_replace('{[{'+item+'}]}', ev);
                    } else {
                        tmp = tmp.d_replace('#{[{'+item+'}]}', ev);
                    }
                });
                array_vars_update(route, key, data, dav);
                if(isNumber(key)){ 
                    key = "["+key+"]"; 
                }else{
                    key = "."+key;
                }
                r += '<d-for d-for-item="'+route+key+'" d-for-count="'+c+'">'+tmp+'</d-for>';
                c++;
            }
            item.innerHTML=r;
  
            // Update onclick
            active_onclick(item, dav.id);
            active_keypress(item, dav.id);
            set_routes_on_click(item);
            process_davura_in_for(item, dav, true);
        });
    }
    var array_remove = function(data, array, key, dav){
        var root = get_route_object(array);
        if(!root){ return false; }
        var route = root+"["+key+"]";
        var current = _eval(data,"__data__."+route);
        if(!current) return false;
        // remove
        if(isNumber(key)){
            if(current.__parent__){
                var parent = current.__parent__;
                if(Array.isArray(parent)){
                    parent.splice(key, 1);
                    // update route array
                    for(var k in parent){
                        if(parent[k].__parentname__){
                            parent[k].__parentname__=k;
                        }
                    }
                }
            } else {
                data[root].splice(key,1);
            }
        }

        // update all array
        array_update(data,array,dav);
        change_in_update(array.__root__, dav, data);
        dabu_list[dav.el].list[dav.id].unwatch=false;

    }
    var array_new = function(data, array, dav, _new){
        var __data__ = data;
        dabu_list[dav.el].list[dav.id].unwatch = true;
        while(array.length > 0) {
            array.pop();
        }
        _new.forEach(function(x){
            array.push(x);
        });
        var route = get_route_object(array);
        var root = route.split(".")[0];

        var current = _eval(data, "__data__."+root);
        routeObject(current,root,data,dav);

        // return false
        Array.prototype.forEach.call(data.D.querySelectorAll('*[d-for-key="'+route+'"]'), function (x) {
            var id = x.getAttribute("d-for-id");
            var html = dabu_list[dav.el].list[dav.id].for[id].html;
            html = unscape_string(html);
            var r="", c=0;

            for(var key in array){
                if(!isNumber(key)) continue;
                var tmp = html.d_replace("#C", c);
                tmp = tmp.d_replace("#K", key);

                _regex(tmp,3,function(item, type){
                    var ev = _eval(data,item);
                    if (type === "{") {
                        tmp= tmp.d_replace('{[{'+item+'}]}',ev);
                    } else {
                        tmp= tmp.d_replace('#{[{'+item+'}]}',ev);
                    }
                });

                array_vars_update(route,key,data,dav);
                if(isNumber(key)){ 
                    key="["+key+"]"; 
                }else{
                    key="."+key;
                }
                r+='<d-for d-for-item="'+route+key+'" d-for-count="'+c+'">'+tmp+'</d-for>';
                c++;

            }

            x.innerHTML=r;

            // Update onclick
            process_davura_in_for(x,dav,true);
            active_onclick(x,dav.id);
            active_keypress(x,dav.id);
            set_routes_on_click(x);
        });
        setTimeout(function(){
            if (dabu_list[dav.el].list[dav.id]) {
                dabu_list[dav.el].list[dav.id].unwatch=false;
                if (array.__root__) { 
                    change_in_update(array.__root__, dav, data);
                }
            }
        });
    }
    var array_vars_update = function(route, name, __data__, dav){
        if(isNumber(name)){ 
            name="["+name+"]"; 
        }else{
            name="."+name;
        }
        var search1 = "__data__."+route+name;
        var search2 = "__data__."+route+".length";
        var  subcribers = dabu_list[dav.el].list[dav.id].subcriber;
        for(var key in subcribers){
            if(subcribers[key].indexOf(search1)>=0 || subcribers[key].indexOf(search2)>=0){
                // update
                var html = _eval(__data__, subcribers[key]);
                __data__.D.querySelector("davu[d-watch='"+key+"']").innerHTML=html;
            }
        }
    }
    var eval_for = function(el, __data__, dav){
        var html = unscape_string(el.innerHTML);
        html = html.replace(/#\${/g,"$"+"{"); 
        html = html.replace(/"#'\+/g,'"'+"'+");

        _regex(html,3,function(x, type){

            var ev = _eval(__data__, x.d_replace('=""',''));
            if (type === "{") {
                html = html.d_replace("{[{"+x+"}]}", ev);
            } else {
                html = html.d_replace("#{[{"+x+"}]}", ev);
            }
        })
        el.innerHTML=html;
    }
    var get_route_object = function(object){
        var _obj=object;
        if(object.__route__){
            return object.__route__;
        }
        var r="";
        var repeat=true;
        var route=[];
        while(repeat){
            if(object.__root__){
                route.push(object.__root__);
                repeat = false;
            }
            else{
                if(object.__parent__ && !object.__root__){
                    if( isNumber(object.__parentname__) ){
                        route.push(object.__parentname__);
                        route.push(".")
                    }else{
                        route.push("["+object.__parentname__+"]");
                    }
                    object=object.__parent__;
                }else{
                    repeat=false;
                }
            }
        }
        if(route.length){
            for (var i = route.length-1; i >=0; i--) {
                r+=route[i];
            }
        }
        Object.defineProperty(_obj, '__route__', {
            enumerable: false,
            configurable: false,
            writable: true,
            value: r
        });
        return r;
    }
    var vinculate = function(el, data, dav){
        var __data__ = data;
        // vinculate input, select and textarea
        Array.prototype.forEach.call(el.querySelectorAll('input[value],textarea[value],select[value]'), function (item) {

            var val = item.getAttribute("value");
           
            item.setAttribute( "d-val", val );
            var id = get_id();
            item.setAttribute("d-val-id", id);

            if(val.includes("D.")) {
                superWatch(val, id, dav);
            }

            dabu_list[dav.el].list[dav.id].onWatch = true;
            
            val = val.replace(/this./g, "__data__.");
        
            var value = val;
            try {
                value = eval(val);
            } catch (error) {}

            dabu_list[dav.el].list[dav.id].tmp.forEach(function(_var){
                if(!dabu_list[dav.el].list[dav.id].cval[_var]){ dabu_list[dav.el].list[dav.id].cval[_var]=[]; }
                dabu_list[dav.el].list[dav.id].cval[_var].push(id);
            })
            dabu_list[dav.el].list[dav.id].onWatch = false;
            dabu_list[dav.el].list[dav.id].tmp = [];

            item.value = value;

            var update = function(){
                var cval= this.getAttribute("d-val");

                var csw = this.getAttribute("d-sw");
                if(csw) {
                    var for_eval = cval + "='" + this.value + "'";
                    try {
                        eval(for_eval);
                    } catch (error) {}
                }

                var val = this.value;
                var type = this.getAttribute("type");
                if(type === "number"){
                    if(isNumber(val)){ val = Number(val); }
                }
                cval = cval.replace(/this./g,"");
                if(data[cval] !== undefined) {
                    data[cval] = val;
                }
            
            };
            item.onkeyup = update;
            item.onchange = update;
        });
        // vinculate onclick
        active_onclick(el,dav.id);
        active_keypress(el,dav.id);
        set_routes_on_click(el);
    }
    var _import = function(){
        var list = [];
        Array.prototype.forEach.call(document.querySelectorAll('link[d-import]'), function (item) {
            item.getAttribute("d-import")
            .replace(new RegExp(' |\n','g'),'')
            .split(",")
            .forEach(function(x){ list.push(x); });

            item.remove();
        });
        var goal=list.length;
        var count=0;

        var construct = function(){
            for(var _dab in dabu_list.list){
                for(var _id in dabu_list[_dab].list){
                    var select = dabu_list[_dab].list[_id];
                    if(typeof select.data.constructor == "function"){
                        select.data.constructor(select.data.props);
                    }
                }
            }
        }

        var prove = function(){
            count++;
            if(count === goal){
                construct();
                load();
                ready=true;
                runSuperWatch();
                if(onreadyFunction){
                    onreadyFunction();
                    onreadyFunction=null;
                }
                verifyRoute();
            }
        }

        list.forEach(function(_module){
            if(_module == "") return false;
            var request = new XMLHttpRequest();
            request.open('GET', dimport+'/'+_module+"/"+_module+".js", true);
            request.onreadystatechange = function() {
                if (this.readyState === 4) { if (this.status >= 200 && this.status < 400) {
                    var _count_goal=0;
                    var _count=0;
                    var d;
                    eval(this.responseText);

                    var check=function(){
                        _count++;
                        if(_count == _count_goal){
                            _new(d,false,true);
                            prove();
                        }
                    }

                    if(d){
                        d.import=true;
                        d.el=_module;
                        if(d.template===true){ _count_goal++; }
                        if(d.style===true){ _count_goal++; }

                        if(d.template===true){
                            var request = new XMLHttpRequest();
                            request.open('GET', dimport+'/'+_module+"/"+_module+".html", true);
                            request.onreadystatechange = function() {
                                if(this.readyState===4) if(this.status >= 200 && this.status < 400) {
                                    d.template = this.responseText;
                                    check();
                                }
                            }
                            request.send(); request = null;
                        }
                        if(d.style === true){
                            var request = new XMLHttpRequest();
                            request.open('GET',dimport+'/'+_module+"/"+_module+".scss", true);
                            request.onreadystatechange = function() {
                                if(this.readyState===4) if(this.status >= 200 && this.status < 400) {
                                    d.style = this.responseText;
                                    check();
                                }
                            }
                            request.send(); request = null;
                        }
                    }
                }}
            };
            request.send(); request = null;
        })
    }
    var load = function(arg){
  
        // recursive reload davura
        if(!arg) arg={};

        var repeat=false;

        if(!arg.list) arg.list=[]; // list of davura added
        for(var _dab in dabu_list){
            var site;
            if(arg.el){
                site = arg.el.querySelectorAll(_dab);
                // add f-update from correct davura
                if(arg.el.getAttribute("d-update")!==null){
                    Array.prototype.forEach.call(site, function (x) {
                        x.setAttribute("f-update","");
                    })
                }
            }else{
                site = document.querySelectorAll(_dab)
            }


            Array.prototype.forEach.call(site, function (x) {
               
                if(!x.getAttribute("davu-id")){
                    if(!arg.f_update && x.getAttribute("f-update")!==null) return;
                    var dav={};
                    var id = get_id();
                    dav.id=id;
                    dav.el=_dab;

                    dav.template = dabu_list[dav.el].html;
                    dav.style = dabu_list[dav.el].style;
                    dav.data = clone_object(dabu_list[dav.el].data);
                    dabu_list[dav.el].list[id]={ for:{}, subcriber:{}, watcher:{}, tmp:[], cval:{} };
                    var data = dav.data;

                    Object.defineProperty(data, 'props', {
                        enumerable: false,
                        configurable: false,
                        writable: true,
                        value: _arguments(x,data)
                    });


                    listen(data, x, dav);
                    var html="";
                    var tmp = document.createElement("div");
                    // scss
                    if(dav.style){
                        var css = process_css(dav.style,"__"+id,data,dav);
                        tmp.innerHTML+='<style davu-style>'+css+'</style>';
                    }

                    if(dav.template){
                        tmp.innerHTML += dav.template;
                    }else{
                        tmp.innerHTML += x.innerHTML;
                    }

                    process_update(tmp,data,dav);
                    process_for(tmp,data,dav);
                   
                    process_vars(tmp,data,dav);
                    eval_for(tmp,data,dav);
                    html = tmp.innerHTML;
                    tmp.remove();

                    // create
                    var result=null;
                    x.innerHTML = html;
                    result = x;

                    dabu_list[dav.el].list[id].el=result;
        
                    Object.defineProperty(data, 'D', {
                        enumerable: false,
                        configurable: false,
                        writable: false,
                        value: result
                    });

                    Object.defineProperty(data, 'route', {
                        enumerable: false,
                        configurable: false,
                        writable: false,
                        value:function(value){
                            route(value);
                        }
                    });
                    Object.defineProperty(data, 'destruct', {
                        enumerable: false,
                        configurable: false,
                        writable: false,
                        value:function(){
                            destruct(this);
                        }
                    });
                    arg.list.push(data);
                    x.setAttribute("davu-id",id);
                    x.setAttribute("id","__"+id);
                    dabu_list[dav.el].list[id].data = data;
                    vinculate(result,data,dav);
                    set_routes_on_click(result);
                    // add data
                    data._ = add_sdom;
                    // repeat
                    repeat=true;
                }
            });
        }
        if(repeat){
            load(arg);
        }else{
            // start constructor
            arg.list.forEach(function(x){
                if(typeof x.constructor=="function") x.constructor();
            })
            // remove unused components
            if(arg.onready) arg.onready(arg.list); 
        }
        
    }
    // public load
    this.load = load;
    this.getById = function(id){
        for(var key in dabu_list){
            for(var _id in dabu_list[key].list){
                if(_id === id){
                    return dabu_list[key].list[_id].data;
                }
            }
        }
    }
    var add_sdom = function(s){
        if(typeof s==="string" && s !==""){
            return this.D.querySelectorAll(s);
        }else if(s.D){
            return window[selector](this.D);
        }else{
            return s;
        }
    }
    var set_routes_on_click = function(el) {
        Array.prototype.forEach.call(el.querySelectorAll("[route]"), function (x) {
            if (x.getAttribute("d-route") == "") return;
            x.setAttribute("d-route", "");
            
            x.addEventListener("click", function(){
                var navigateby = this.getAttribute("navigate-by");
                if (navigateby || navigateby == "") {
                    _CAPSULA.navigateByUrl = navigateby;
                }
                route_go(x.getAttribute("route"))
            }, false); 
        });
    }
    var destruct = function(data){
        var el = data.D;
        var id = el.getAttribute("davu-id");
        var name = el.localName;
        
        removeDavuraFromLabel(el);

        // remove inside componentes recursive
        el.querySelectorAll("*[davu-id]").forEach(function(x){
            var select = DAVURA.getById(x.getAttribute("davu-id"));
            if (select) {
                select.destruct();
            }
        });
        // onDestruct
        if(typeof data.onDestruct === "function") {
            data.onDestruct();
        }
        
        el.remove();
        // remove form list
        if (dabu_list[name].list[id]) {
            delete dabu_list[name].list[id];
        }
    }
    var _new = function(dav, constructor, fromImport){
        if(constructor==undefined){
            constructor=true;
        }
        if(typeof dav.data!="object"){ dav.data={}; }
        if(!dav.el) return false;  // if no exist el value
        if(dabu_list[dav.el]) return false; // if exist dabsule declarated
        // save dabsule
        dabu_list[dav.el]={ list:{}, html:dav.template, style:dav.style, data:dav.data };

        if(fromImport) return;

        var select = document.querySelectorAll(dav.el);
        var addList = []; // list of dabsula added in this execution

        Array.prototype.forEach.call(select, function (x) {
            var id = get_id();
            dabu_list[dav.el].list[id]={ for:{}, subcriber:{}, watcher:{}, tmp:[], cval:{}, watchcss:{}, timeUpdateCss:null };
            var data = clone_object(dav.data);

            addList.push(id);
            // start watch
            var ref ={el:dav.el,id:id};

            Object.defineProperty(data, 'props', {
                enumerable: false,
                configurable: false,
                writable: true,
                value: _arguments(x, data)
            });

            listen(data,x,ref);
            // process
            var html="";
            var tmp = document.createElement("div");

            // css
            if(dav.style){
                var css = process_css(dav.style,"__"+id,data,ref);
                tmp.innerHTML+='<style davu-style>'+css+'</style>';
            }

            // HTML
            if(dav.template){
                tmp.innerHTML += dav.template;
            }else{
                tmp.innerHTML += x.innerHTML;
            }
            process_update(tmp,data,ref);
            process_for(tmp,data,ref);
            
            process_vars(tmp,data,ref);
            eval_for(tmp,data,ref);
            html = tmp.innerHTML;
            tmp.remove();

            // create
            var result=null;
            x.innerHTML = html;
            result=x;

            dabu_list[dav.el].list[id].el=result;


            Object.defineProperty(data, 'D', {
                enumerable: false,
                configurable: false,
                writable: false,
                value: result
            });

            Object.defineProperty(data, 'route', {
                enumerable: false,
                configurable: false,
                writable: false,
                value:function(value){
                    route(value);
                }
            });

            Object.defineProperty(data, 'destruct', {
                enumerable: false,
                configurable: false,
                writable: false,
                value: function(){
                    destruct(this);
                }
            });

            x.setAttribute("davu-id", id);
            x.setAttribute("id","__"+ id);
            dabu_list[dav.el].list[id].data = data;
            vinculate(result,data,ref);
            set_routes_on_click(result);

            // add data
            data._ = add_sdom;
        });
        return addList;
    }
    var addRoute = function(data){
        var re = "([^-\/]*)";
        if(Array.isArray(data)) {
            if (!route_list["d-route"]) {
                route_list["d-route"] = [];
            }
            data.forEach(function(x){
                x.url = x.path.replace(/\//g,"\\/");
                if(x.url === "*") return no_route = x;
                x.vars = [];
                x.query = key;
                _regex(x.path,5, function(result){
                    x.url = x.url.replace(":"+result,re);
                    x.vars.push(result);
                })
                route_list["d-route"].push(x);
            });
        } else if (typeof data === "object") {
            for(var key in data) {
                var select = data[key];
                route_list[key] = [];
                select.forEach(function(x){
                    x.url = x.path.replace(/\//g,"\\/");
                    if(x.url === "*") return no_route[key] = x;
                    x.vars = [];
                    x.query = key;
                    _regex(x.path, 5, function(result){
                        x.url = x.url.replace(":"+result,re);
                        x.vars.push(result);
                    })
                    route_list[key].push(x);
                });
            }
        }
        window.onhashchange = function(e) {
            route_reset_callbacks();
            verifyRoute();
        };
        verifyRoute();
    }
    var verifyRoute =  function() {
        
        var tmp = window.location.href.split("#/");
        var url = "/" + tmp[1];
        var existRoute = false;

        if (url !== undefined) {
            if( url[url.length-1] === "/") {
                url = url.slice(0,url.length-1);
            }
            if(url === ""){
                url = "/";
            }
        }

        for(var site in route_list) {
            var select = route_list[site];
            var el = document.querySelector(site);
            if (el) {
                var d_route_id = el.getAttribute("d-route-id");
                if(!d_route_id) {
                    el.setAttribute("d-route-id", get_id());
                }
                for (var x = 0; x < select.length; x++) {
                    var current = select[x];
                    
                    var check_urls = [];
                    var tmp;

                    if (current.url[current.url.length-1] === "?") {
                        current.url = current.url.replace("?","([^-]*)");
                    }

                    current.url.split("?").forEach(function(x,i) {
                        if (i>0) {
                            tmp += x;
                        } else {
                            tmp = x;
                        }
                        check_urls.push(tmp);
                    });
                    
                    for (var i = 0; i < check_urls.length; i++) {
                        var curent_url = check_urls[i];
                        var match = url.match(new RegExp(curent_url, "y"));
                        
                        if(
                            match && 
                            ( url.replace(match[0],"") === "" )
                        ) {
                            existRoute = true;
                            // load vars
                            current.props = {};
                            var m;
                            var count = -1;
                            var re = new RegExp(curent_url, "g");
                            while ((m = re.exec(url)) !== null) {
                                if (m.index === curent_url.lastIndex) {
                                    curent_url.lastIndex++;
                                }
                                m.forEach(function(match, groupIndex){
                                    if(groupIndex>=1 && match){
                                        count++;
                                        current.props[current.vars[count]] = match;
                                    }
                                });
                            }
                            showRoute(current,el);

                            if (!current.continue) {
                                break;
                            }
                        }
                    };
                }
            }
        }
        if (!existRoute){
            for (var site in no_route) {
                var el = document.querySelector(site);
                if (el) {
                    showRoute(no_route[site], el);
                }
            }
        }
    }
    var loadDavuraInRoute = function(davura, droute) {
        return new Promise(function(done) {
            if (davura.replace(/ /g,"").indexOf("<")!==0){
                davura = "<"+davura+">";
            }
            droute.innerHTML = davura;
            load({
                el: droute,
                onready: function(list) {
                    trash_components_in_route(list, droute);
                    setTimeout(function(){
                        done();
                    }, 30);
                }
            });
        });
    }
    var trash_components_in_route = function(list, droute) {

        var route_id = droute.getAttribute("d-route-id");
        // remove unused components in route
        if(!components_in_route[route_id]) {
            components_in_route[route_id] = {};
        }
        list.forEach(function(x){
            components_in_route[route_id][x.D.getAttribute("davu-id")] = true;
        })  
        var from_remove = [];
        for( var id in components_in_route[route_id]){
            if( !droute.querySelector("*[davu-id='"+id+"']") ){
                from_remove.push(id);
                var remove = DAVURA.getById(id);;
                if(remove) remove.destruct();
            }
        }
        from_remove.forEach(function(id){
            delete components_in_route[route_id][id];
        })
    }
    var route_reset_callbacks = function() {
        for (var key in route_callback_run) {
            route_callback_run[key].run = false;
        }
    }
    var showRoute = function(current, droute){
        var execute_callback = false;
        function callback(current, droute) {
            if (current.delay) {
                setTimeout(function() {
                    current.after(current.props, function(dav) {
                        return new Promise(function(done){
                            setTimeout(function(){
                                loadDavuraInRoute(dav, droute).then(function() {
                                    done();
                                })
                            },10);
                        });
                    }, droute);
                }, current.delay);
            } else {
                current.after(current.props, function(davu) {
                    return new Promise(function(done){
                        setTimeout(function(){
                            loadDavuraInRoute(davu, droute).then(function() {
                                done();
                            })
                        },10);
                    });
                }, droute);
            }
        }
        function process(){
            var done = function (){
                if (droute) {
                    try {
                        droute.scrollTo(0,0);
                    } catch (error) {}
                }
                var davura = current.D || current.d || current.davura;
                if(davura) {
                    loadDavuraInRoute(davura, droute).then(function() {
                        if (current.after) {
                            execute_callback = true;
                            callback(current, droute);
                            route_verify_callback(current);
                        }
                    });
                } else if (current.template){
                    // load vars
                    var html = current.template + "";
                    _regex(current.template, 1, function(x){
                        var replace = "{{"+x+"}}";
                        if(current.props[x] !== undefined){
                            html = html.replace(new RegExp(replace, "g"), current.props[x])
                        }else{
                            html = html.replace(new RegExp(replace, "g"), x);
                        }
                    })
                    droute.innerHTML = html;
                }
                if(typeof current.after === "function" && !davura) {
                    callback(current, droute);
                    route_verify_callback(current);
                } else if (!execute_callback) {
                    route_verify_callback(current);
                }
            }
            if(typeof current.before === "function") {
                current.before(done);
            } else {
                done();
            }
        }
        process();
    }
    var route = function(route){
        var url = window.location.href;
        if(url.indexOf("#/")<0) {
            url+="#/";
        }
        window.location.href = url + route;
    }
    var get_current_route = function() {
        var url = window.location.href;
        if(url.indexOf("#/")<0) {
            return "/";
        }
        return url.split("#/")[1];
    }
    var route_go = function(go){
        route_reset_callbacks();
        var tmp = window.location.href.split("#/");
        var route;
        if (go[0] === "/") {
            go = go.slice(1,go.length);
        }
        var hastag = "#/";
        if (navigateByUrl[0] === "/") {
            hastag = "#";
        }

        if (navigateByUrl) {
            var separator = "";
            if (navigateByUrl[navigateByUrl.length-1] !== "/" && go[0] !== "/") {
                separator = "/";
            }
            route = tmp[0] + hastag + navigateByUrl + separator + go;
        } else {
            route = tmp[0] + hastag + go;
        }
        if (route) {
            if (window.location.href === route) {
                verifyRoute();
            } else {
                window.location.href = route;
            }
        }
    }
    var route_verify_callback = function(current) {
        if (!route_callback_run[current.query]) return;

        if (!route_callback_run[current.query].run) {
            route_callback_run[current.query].run = true;
            route_callback_run[current.query].callback();
        }
    }
    this.get_dupdate = function(update_id, __data__) {
        DAVURA.d_update_list[update_id].replace("(void 0)", "__data__");
        var result = eval(DAVURA.d_update_list[update_id].replace(/(void 0)/g, "__data__"));
        return result;
    }
    // microsass
    this.microsass = new (function() {
        var self = this;
        var global = {};
        var colors = ["black","navy","darkblue","mediumblue","blue","darkgreen","green","teal","darkcyan","deepskyblue","darkturquoise","mediumspringgreen","lime","springgreen","aqua","cyan","midnightblue","dodgerblue","lightseagreen","forestgreen","seagreen","darkslategray","darkslategrey","limegreen","mediumseagreen","turquoise","royalblue","steelblue","darkslateblue","mediumturquoise","indigo  ","darkolivegreen","cadetblue","cornflowerblue","rebeccapurple","mediumaquamarine","dimgray","dimgrey","slateblue","olivedrab","slategray","slategrey","lightslategray","lightslategrey","mediumslateblue","lawngreen","chartreuse","aquamarine","maroon","purple","olive","gray","grey","skyblue","lightskyblue","blueviolet","darkred","darkmagenta","saddlebrown","darkseagreen","lightgreen","mediumpurple","darkviolet","palegreen","darkorchid","yellowgreen","sienna","brown","darkgray","darkgrey","lightblue","greenyellow","paleturquoise","lightsteelblue","powderblue","firebrick","darkgoldenrod","mediumorchid","rosybrown","darkkhaki","silver","mediumvioletred","indianred ","peru","chocolate","tan","lightgray","lightgrey","thistle","orchid","goldenrod","palevioletred","crimson","gainsboro","plum","burlywood","lightcyan","lavender","darksalmon","violet","palegoldenrod","lightcoral","khaki","aliceblue","honeydew","azure","sandybrown","wheat","beige","whitesmoke","mintcream","ghostwhite","salmon","antiquewhite","linen","lightgoldenrodyellow","oldlace","red","fuchsia","magenta","deeppink","orangered","tomato","hotpink","coral","darkorange","lightsalmon","orange","lightpink","pink","gold","peachpuff","navajowhite","moccasin","bisque","mistyrose","blanchedalmond","papayawhip","lavenderblush","seashell","cornsilk","lemonchiffon","floralwhite","snow","yellow","lightyellow","ivory","white","aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgrey","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkslategrey","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dimgrey","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred ","indigo  ","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgrey","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightslategrey","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","slategrey","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"];
        var native_list = ["animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","backface-visibility","background-clip","background-composite","background-origin","background-size","border-bottom-left-radius","border-bottom-right-radius","border-horizontal-spacing","border-image","border-radius","border-top-left-radius","border-top-right-radius","border-vertical-spacing","box-align","box-direction","box-flex","box-flex-group","box-lines","box-ordinal-group","box-orient","box-pack","box-reflect","box-shadow","box-sizing","column-break-after","column-break-before","column-break-inside","column-count","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-width","columns","dashboard-region","line-break","margin-bottom-collapse","margin-collapse","margin-start","margin-top-collapse","marquee","marquee-direction","marquee-increment","marquee-repetition","marquee-speed","marquee-style","mask","mask-attachment","mask-box-image","mask-clip","mask-composite","mask-image","mask-origin","mask-position","mask-position-x","mask-position-y","mask-repeat","mask-size","nbsp-mode","padding-start","perspective","perspective-origin","rtl-ordering","tap-highlight-color","text-fill-color","text-security","text-size-adjust","text-stroke","text-stroke-color","text-stroke-width","touch-callout","transform","transform-origin","transform-origin-x","transform-origin-y","transform-origin-z","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","user-drag","user-modify","user-select"];
        var native = ["-webkit-","-moz-","-o-","-ms"];
        var _regex = function(string, regex, callback) {
            var m;
            while ((m = regex.exec(string)) !== null) {
                if (m.index === regex.lastIndex) {
                    regex.lastIndex++;
                }
                m.forEach(function(match, groupIndex) {
                    callback(match, groupIndex);
                });
            }
        };
        var isNumber = function(num){
            return !isNaN(parseFloat(num)) && isFinite(num);
        }
        var removeComents = function(scss){
            return scss.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm,"");
        }
        var clear = function() {
            global = {
                json: [], // final json css result
                vars: {},
                remove: [], // save vars for remove after
                brackets: [], // brackets count syntax
                media_brackets: false, // media brackets count for determinate if no have in @media converting this in array
                keyframes_brackets: false, // keyframes brackets count for determinate if no have in @media converting this in array
                json_end: [] // save pointers from the json and omited the unused selector
            }
        }
        var native_property = function(property, callback) {
            // verify the property and turn natives property in loop callback
            property = property.split(":");
            property[0] = property[0].trim();
            property[1] = property[1].trim();
            if (native_list.includes(property[0])) {
                native.forEach(function(nav) {
                    callback(nav + property[0] + ":" + property[1]);
                });
            }
            // return the normal property
            callback(property[0] + ":" + property[1]);
        }
        var getSize = function(operation) {
            var initial_value = operation;
            // get size from variable
            var size = "";
            var regex = /px|em|wv|ex|ch|rem|vh|vmin|vmax|%|ms|s|cm|mm|pt|pc/g;
            operation = operation.toLowerCase().match(regex);
            if (operation) {
                size = operation[0];
            }
            return {
                size: size, 
                result: initial_value.replace(regex, "")
            };
        };
        var eval_value_result_in_property = function(operation) {
       
            // evaluate the operations in property
            var re = /([^ ]*)[0-9](px|em|vw|ex|ch|rem|vh|vmin|vmax|%|ms|s|cm|mm|pt|pc)/g;
            var size = /px|em|vw|ex|ch|rem|vh|vmin|vmax|%|ms|s|cm|mm|pt|pc/g;
            var re2 = /([^]*)[0-9]([^()]*)([^]-|\+|\/|\*)([^]*)[0-9]([^()]*)/;
    
            // var saved_size = 
    
            var match_size = operation.match(size);
            var saved_size = false;
            
            if (re2.test(operation) && match_size) {
                saved_size = match_size[0];
                operation = operation.replace(size, "");
            }
    
            var result = getSize(operation); // {size, result}
            if (saved_size){
                _regex(result.result, /([0-9 +-/*.()]*)([^;]\+|-|\/|\*)([0-9 +-/*.(){}]*)/g, function(match,index) {
                    if (index !== 0) return;
                    try {
                        // eval and add final symbol
                        var replace = eval(match) + result.size;
                        
                        // remove all sise symbols
                        _regex(operation, re, function(a,b){
                            if (b !== 0) return
                            operation = operation.replace(a, a.replace(/[A-z]/g,""));
                        })
                        
                        // replace in operation with removed symbol the match witout symbol for replace (eval value result)
                        operation = operation.replace(match, " "+replace);
                    } catch (error) {}
                })
                operation += saved_size;
            }
            return operation;
        };
        var customSCSS = function(scss) {
            var regex = /@if/;
            if (regex.test(scss)) {
                // search if
                _regex(scss, /@if([^{]*){/g, function(match, index) {
                    if (index === 0) {
                        var arg = [];
                        match.split(" ").forEach(function(x) {
                            if (x !== "") arg.push(x);
                        });
                        var widthorheight = "width";
                        if (arg[1] === "y") widthorheight = "height";
                        var maxormin = "max";
                        if (arg[2] === ">=") maxormin = "min";
                        var size = arg[3];
                        if (!size.includes("px")) size = size + "px";
                        scss = scss.replace(
                            match,
                            "@media screen and (" +
                                maxormin +
                                "-" +
                                widthorheight +
                                ": " +
                                size +
                                "){"
                        );
                    }
                });
    
                return scss;
            } else {
                return scss;
            }
        };
        var processVars = function(scss) { // search all declaration variables
            var regex = /\$([^-;!:(){}]*):([^-;!:(){}]*);/g;
            _regex(scss, regex, function(match, index) {
                if (index === 0) {
                    var val = match
                        .trim()
                        .replace(/\$|;/g, "")
                        .split(":");
                    global.remove.push(match);
                    global.vars["$" + val[0].replace(/ /g, "")] = val[1].trim();
                }
            });
            global.remove.forEach(function(x) {
                scss = scss.replace(x, "");
            });
            return scss;
        };
        var get_var_value_in_property = function(property) {
            // replace vars in property
            _regex(property, /\$([^;{() ]*)/g, function(match, index) {
                if (index === 1) return;
    
                if (global.vars[match]) {
                    property = property.replace(match, global.vars[match]);
                }
            });
            return property;
        }
        var eval_property = function(line) {  // <-- MAIN EVAL PROPERTY VARS AND VALUES

            line = line.split(":");
            line[1] = line[1].trim();
    
            // prevent infinite while iteration, compare values ant with line[1]
            var ant;
            while(line[1].includes("$") && ant !== line[1]) {
                ant = line[1];
                line[1] = get_var_value_in_property(line[1]);
            }
    
            // eval
            var result = eval_value_result_in_property(line[1]);
            if (result) {
                line[1] = result;
            }        
            return line[0] + ": " + line[1];
        }
        var json_to_css = function() {
            if (global.options.format || global.options.html) {
                return json_to_css_with_format();
            }
            var css = ""; // concatenate final css in string
            global.json.forEach(function(x) {
                var selector = x[0];
                css += selector + "{";
    
                if (selector.indexOf("@keyframe") === 0) { // if selector is keyframe
                    x[1].forEach(function(select) { 
                        css += select[0] + "{" // select is from or to o percentage
                        select[1].forEach(function(property){
                            native_property(property, function(result) {
                                css += result + ";";
                            });
                        });
                        css += "}";
                    });
                
                } else if (selector.indexOf("@media") === 0) {
                    x[1].forEach(function(select) {
                        css += select[0] + "{";
                        select[1].forEach(function(property) {
                            native_property(property, function(result) {
                                css += result + ";";
                            });
                        })
                        css += "}";
                    })
                } else {     // no keyframe
                    x[1].forEach(function(property){
                        native_property(property, function(result) {
                            css += result + ";";
                        });
                    });
                }
                css += "}";
            });
            return css;
        }
        var get_span_from_css = function(val , _class) {
            return '<span class="_microsass_'+_class+'">'+ val +'</span>';
        }
        var inject_scss_for_css_color_style = function() {
            var head = document.querySelector("head");
            var exist_css = head.querySelector("style#_microsass_css");
            if (!exist_css) {
                var style = document.createElement("style");
                style.id = "_microsass_css";
                style.innerHTML = "._mirosass_wrap{color:#aab1bf;background-color: #343842;font-family: sans-serif;font-size: 16px;letter-spacing: 0.17px;line-height: 20px;padding: 20px;}._mirosass_wrap label{position:relative}._mirosass_wrap label div{    width: 10px;height: 10px;position: absolute;top: 4px;right: -21px;}._microsass_id,._microsass_colon{color:#5dadec}._microsass_class, ._microsass_property, ._microsass_attr_left{color:#d19965}._microsass_decorator,._microsass_attr,._microsass_important{color:#d57cda}._microsass_attr_right{color:#97c279}._microsass_base{color:#aab1bf}";
                head.appendChild(style);
            }
        }
        var get_color_css = function(val, type) { 
            // return the color and element from css if format and html is true
            if (type === "normal") {
                return get_span_from_css(val, "base");
            }
            if (type === "selector") {
                val = get_span_from_css(val, "base");
                
    
                // @decorator
                _regex(val, /@([^#.,:<{} ]*)/g, function(a,b) {
                    if (b === 1) return;
                    val = val.replace(new RegExp(a, "g"), get_span_from_css(a, "decorator"));
                })
    
                // [] attr
                _regex(val, /\[([^#.,:<{} ]*)]/g, function(a,b) {
                    if (b === 1) return;
                    var result;
                    var content = a.slice(1, a.length -1);
                    
                    if (content.includes("=")) {
                            // if include =
                        content = content.split("=");
                        result = get_span_from_css("[", "attr") + 
                        get_span_from_css(content[0], "attr_left") + "=" +
                        get_span_from_css(content[1], "attr_right") +
                        get_span_from_css("]", "attr");
                    } else {
                        // if no include =
                        result = get_span_from_css("[", "attr") +
                        get_span_from_css(content, "attr_left") +
                        get_span_from_css("]", "attr");
                    }
                    val = val.replace(a, result);
                })
    
                // id
                _regex(val, /#([^#.,:<{} ]*)/g, function(a,b) {
                    if (b === 1) return;
                    val = val.replace(new RegExp(a, "g"), get_span_from_css(a, "id"));
                })
                // class
                _regex(val, /\.([^#.,:<{} ]*)/g, function(a,b) {
                    if (b === 1) return;
                    val = val.replace(new RegExp(a, "g"), get_span_from_css(a, "class"));
                })
                // :hover etc
                _regex(val, /:([^#;{}:<,. ]){2,}/g, function(a,b) {
                    if (b === 1) return;
    
                    // remove :
                    a = a.slice(1, a.length);
                    val = val.replace(":" + a, get_span_from_css(":", "colon") + get_span_from_css(a, "colon"));
                })
                return val;
            }
            if (type === "property"){
                var property = val.split(":");
                var is_important = "";
    
                // !important
                if (property[1].includes("!important")) {
                    // create importan html
                    is_important = get_span_from_css(" !important", "important");
                    // remove importante in property
                    property[1] = property[1].replace(/!important/g, "").trim();
                } 
    
                // check if is color property
                if (property[1].indexOf("#") === 0 || property[1].indexOf("rgb") === 0 || colors.includes(property[1])) {
                    property[1] = '<label class="_microsass_property">'+ property[1] + is_important +'<div style="background:'+ property[1] +'"></div></label>';
                } else {
                    property[1] = get_span_from_css(property[1], "property") + is_important;
                }
    
                return get_span_from_css(property[0], "base") + ": " + property[1];
            }
        }
        var json_to_css_with_format = function() {
            var spaces = [""]; // num of tabs
            var css = ""; // contatenate string result
            var newline = "\n";
            var blank_space = "    ";
            if (global.options.html) {
                newline = "<br>";
                blank_space = "&nbsp;&nbsp;&nbsp;&nbsp;";
                if (global.options.colors === undefined) {
                    global.options.colors = true;
                    inject_scss_for_css_color_style();
                }
                css += '<div class="_mirosass_wrap">';
            }
            global.json.forEach(function(x) {
                var selector = x[0];
    
                // \n from all , in selector
                selector = selector.replace(/,/g, "," + newline + spaces.join(blank_space));
                css += get_color_css(selector, "selector");
                css += get_color_css(" {" + newline, "normal")
                spaces.push("");
                if (selector.indexOf("@keyframes") === 0) { // if selector is keyframe
                    x[1].forEach(function(select) {
                        css += spaces.join(blank_space);
    
                        select[0] = select[0].replace(/,/g, "," + newline + spaces.join(blank_space));
    
                        css += get_color_css(select[0], "selector") + "{" + newline; // select is from or to o percentage
                        spaces.push("");
                        select[1].forEach(function(property){
                            native_property(property, function(result) {
                                css += spaces.join(blank_space);
                                css += get_color_css(result, "property") + ";" + newline; // property in keyframe
                            });
                        });
                        spaces.pop();
                        css += spaces.join(blank_space);
                        css += "}" + newline;
                    });
                
                } else if (selector.indexOf("@media") === 0) { 
                    x[1].forEach(function(select) {
                        css += spaces.join(blank_space);
                        select[0] = select[0].replace(/,/g, "," + newline + spaces.join(blank_space));
                        css += get_color_css(select[0], "selector") + "{" + newline;
                        spaces.push("");
                        select[1].forEach(function(property) {
                            native_property(property, function(result) {
                                css += spaces.join(blank_space);
                                css += get_color_css(result, "property") + ";" + newline; // property in media
                            });
                        })
                        spaces.pop();
                        css += spaces.join(blank_space);
                        css += "}" + newline;
                        
                    })
                } else {     // no keyframe
                    x[1].forEach(function(property){
                        native_property(property, function(result) {
                            css += spaces.join(blank_space);
                            css += get_color_css(result, "property") + ";" + newline; // normal property
                        })
                    });
                }
                spaces.pop();
                css += "}" + newline;
                
            });
    
            if (global.options.html) {
                css += '</div>';
            }
            return css;
        }
        var scsstocss = function(scss, options) { // main process 
             // remove coments
            scss = removeComents(scss);
            // remove spaces
            scss = scss.replace(/\n|\r/g,""); 
            // reset global data
            clear();
            
            // save options in global --------------------
            /**/    if (typeof options !== "object") {  //
            /**/        options = {};                   //
            /**/    }                                   //
            /**/    global.options = options;           //
            // end save options in global ---------------
    
            // load variables and remove variables declaration from scss
            scss = processVars(scss);
            // process custom scss structures
            scss = customSCSS(scss);
            // get lines separate by brackets and includes in list
            var list = scss.split(/({|})|;|\n/);
            list.forEach(function(line,index) {
                if (!line) return;
                line = line.trim();
                if (!line) return;
                var next = false;
    
                if(index+1 < list.length){
                    next = list[index+1];
                }
                processLine(line, next);
            });
            // convert json data to css
            var css = json_to_css();
            return css;
        };
        var is_close_media_bracket = function(val) {
            // set o remove media brack with parameter, if exist parameter it return if is close media bracket
            if (val === true) {
                if (global.media_brackets === false) {
                    global.media_brackets = [];
                }
                global.media_brackets.push(true);
                return false;
            }
            if (val === false) {
                global.media_brackets.pop();
                if (!global.media_brackets.length) {
                    global.media_brackets = false;
                    return true;
                } else {
                    return false;
                }
            }
            if (global.media_brackets === false) {
                return true;
            } else {
                return false;
            }
        }
        var is_close_keyframes_bracket = function(val) {
            // set o remove media brack with parameter, if exist parameter it return if is close keyframes bracket
            if (val === true) {
                if (global.keyframes_brackets === false) {
                    global.keyframes_brackets = [];
                }
                global.keyframes_brackets.push(true);
                return false;
            }
            if (val === false) {
                global.keyframes_brackets.pop();
                if (!global.keyframes_brackets.length) {
                    global.keyframes_brackets = false;
                    return true;
                } else {
                    return false;
                }
            }
            if (global.keyframes_brackets === false) {
                return true;
            } else {
                return false;
            }
        }
        var get_last_selector = function() { // return the last selector from list
    
            // search the last selector in json_end, 
            // if this is @ in start search one space up more, if not return []
            if(global.json_end.length) {
                var index = global.json_end.length -1;
                var repeat = true;
                while(repeat) {
                    var last = global.json_end[index][0];
                    if (last.indexOf("@") === 0) {
                        if (index === 0) {
                            repeat = false;
                            last = "";
                        } else {
                            index--;
                        }
                    } else {
                        repeat = false;
                    }
                }
                return last.split(",");
            } else {
                return [];
            }
        }
        var save_in_json_end = function() {
            // save end selector from json data in the json_end
            global.json_end.push(global.json[global.json.length - 1]);
        }
        var remove_in_json_end = function() {
            if(global.json_end.length) {
                global.json_end.pop();
            }
        }
        var get_last_json = function() { // return the last array property from json
            // var last =  global.json[global.json.length - 1][1];
            var last = global.json_end[global.json_end.length -1][1];
            // var last =  global.json[global.json.length - 1][1];
            return last;
        }
        var create_new_selector = function(current) { // create new selector last selector + current selector
            var result = []; // array result for save new selector
    
            // separate selector line in array
            current = current.split(",");
            // get last selector from array
            var last_selector = get_last_selector(); // return the last selector
    
            // concatenate last selector with current selector
            last_selector.forEach(function(last_item) {
                current.forEach(function(current_item) {
                    result.push(last_item.trim() + " " + current_item.trim());
                })
            });
            return result.join(","); // return new selector in string
        }
        var process_selector = function(line) {
            // if exist selector save in current parent
            if (global.json_end.length) {
                // create new selector last selector + current selector and save in selectors
                var new_selector = create_new_selector(line); 
                global.json.push([new_selector,[]]); // save css in json data
            } else {
                // save selector in json
                global.json.push([line,[]]); // save css in json data
            }
            // set last with last json data
        }
        var process_decorator = function(line) { // process decorator that start with @
    
            if (line.indexOf("@media") === 0) {
                // add media breacket array count for determinate media breackend main end in the end bracket function
                is_close_media_bracket(true);
            } else {
                // @keyframes
                is_close_keyframes_bracket(true);
            }
            global.json.push([line,[]]);
            save_in_json_end();
        }
        var process_property = function(line) { // process property from inside selector
            line = eval_property(line); // eval vars in property
            // return the last array property from json
            var last_selector = get_last_json();
            var property = line.split(":");
            last_selector.push( 
                property[0].trim()+ ":"+ property[1].trim() 
            );
        }
        var brackets_count = function(add /*true o false*/) { // brackets count in array, add o remove
            if (add) {
                global.brackets.push(true);
            } else {
                // check sintaxy bracket
                if (!global.brackets.length) return console.error("Bracket close error");
                // remove bracket
                global.brackets.pop();
            }
        }
        var process_bracket = function(bracket) {
            if (bracket === "{") {  // open bracket
                // save breackets array 
                brackets_count(true);
            } else {  // close bracket
                brackets_count(false);
    
                var decorator_type = type_decorator();
    
                if(decorator_type) {
                    if (decorator_type === "@media") {
                        // close media bracket
                        if (is_close_media_bracket(false)) {
                            // remove last selector in json_end
                            remove_in_json_end();
                        }
                    } else {
                        // close keyframes bracket
                        if (is_close_keyframes_bracket(false)) {
                            // remove last selector in json_end
                            remove_in_json_end();
                        }
                    }
                    
                } else {
                    // remove last selector in json_end
                    remove_in_json_end();
                }
            }
        }
        var process_keyframes_property = function(line) {
            line = eval_property(line); // eval vars in property
            // get the last keyframe
            var last_keyframe = global.json[global.json.length - 1][1];
            last_keyframe = last_keyframe[last_keyframe.length -1][1]; 
    
            // separate for remove blank spaces in property with trim function
            line = line.split(":");
            // save in the json last keyframe
            last_keyframe.push(
                line[0].trim() + ":" + line[1].trim()
            );
        }
        var process_media_selector = function(line) {
            // create new selector from previus selectores and add in the selector list
            var new_selector = create_new_selector(line); 
            
            var last_media = global.json[global.json.length -1][1];
            last_media.push([new_selector, []]);
            is_close_media_bracket(true);
        }
        var process_media_property = function(line) {
            line = eval_property(line); // eval vars in property
            var property = line.split(":");
            var last_media_selector = global.json[global.json.length-1][1];
            last_media_selector = last_media_selector[last_media_selector.length-1][1];
            
            last_media_selector.push(
                property[0] + ":" + property[1]
            );
        }
        var process_self_selector = function(line) { // process & selector (self selector)
            var result = []; // new selector result
            // get last selector from json
            var last_selector = get_last_selector();
            // remove fist character & from line
            line = line.slice(1, line.length);
            // lopp last selector and concatenate line without & symbol
            last_selector.forEach(function(selector){
                // create the new selector result
                result.push(selector + line);
            });
            result = result.join(",");
            // add new selector in the json data
            global.json.push([result, []]);
        }
        var process_self_selector_in_media = function(line) {
            // result selector
            var result = [];
            // get last selector
            var last_selector = get_last_selector();
            // remove & character from line
            line = line.slice(1, line.length);
            // loop last selector and concatenate with line
            last_selector.forEach(function(selector) {
                result.push(selector + line);
            });
            // get last media
            var last_media = global.json[global.json.length -1][1];
            // conver array selector in string
            var new_selector = result.join(",");
            // save selector in last media
            last_media.push([new_selector, []]);
            // add new breacked open in array media bracket
            global.media_brackets.push(true);
        }
        var type_decorator = function() {
            var last = global.json_end[global.json_end.length - 1];
            if (!last) return false;
        
            if (last[0].indexOf("@keyframes") === 0) return "@keyframes";
            if (last[0].indexOf("@media") === 0) return "@media";
    
            return false;
        }
        var if_exist_id_in_options_replace = function(line) {
            // if exist id in options, replace this for id from options
            if (global.options.dabu_id) {
                if (line === "this") {
                    line = "#" + global.options.dabu_id;
                }
            }
            return line;
        }
        var processLine = function(line, next) { // lopp process from all lines y the scss
            if (/{|}/.test(line)) {  // is bracket ?
                // capture brackets
                process_bracket(line);
                return;
            }
    
            if(line.indexOf("@") === 0) { // is decorator ?
                // debugger;
                process_decorator(line);
                return;
            }
    
            if (line === "from" || line === "to" || isNumber(line[0])) {  // is animation parameter  ?
    
                // save parameter in the last json
                get_last_json().push([line,[]]);
                is_close_keyframes_bracket(true);
                return;
            }
            var decorator_type = type_decorator();  //  get type decortar or false 
    
            if ( !decorator_type && next === "{") { // is normal selector ? <-
    
                line = if_exist_id_in_options_replace(line);
    
                if (line.indexOf("&") === 0) {
                    process_self_selector(line);
                } else {
                    process_selector(line);
                }
                save_in_json_end();
                return;
            }
    
            if (!decorator_type) {
                process_property(line);  // process normal property  <-
                return;
            }
    
            if (decorator_type === "@keyframes") {   // process @keyframe property <-
    
                process_keyframes_property(line);
                return;
            }
    
            // @media property or selector -------------------
    
            if (!line.includes(":")) { // process @media selector
                if (line.indexOf("&") === 0) {
                    process_self_selector_in_media(line);
                } else {
                    process_media_selector(line);
                }
            } else {
                process_media_property(line) // process @media property
            }
        }
        var injectcss = function(data) {
            return new Promise(function(done) {
                var head = document.querySelector("head");
                for (var key in data) {
                    var style = document.createElement("style");
                    style.innerHTML = self.convert(data[key]);
                    head.appendChild(style);
                }
                done();
            });
        };
        this.convert = function(scss, options) {
            return scsstocss(scss, options);
        };
        this.import = function(data) {
            return new Promise(function(done) {
                if (!Array.isArray(data)) data = [data];
                var count = 0;
                var list = {};
                function check(index, css) {
                    list[index] = css;
                    count++;
                    if (count === data.length) {
                        injectcss(list).then(function() {
                            done();
                        });
                    }
                }
                data.forEach(function(x, i) {
                    var request = new XMLHttpRequest();
                    if(!x.includes(".scss")) {
                        x = x + ".scss";
                    }
                    request.open("GET", x, true);
                    request.onreadystatechange = function() {
                        if (
                            this.readyState === 4 &&
                            this.status >= 200 &&
                            this.status < 400
                        ) {
                            check(i, this.responseText);
                        } else if (this.status >= 400) {
                            console.error("Error: " + this.status + " in -> " + x);
                        }
                    };
                    request.send();
                });
            });
        };
        this.load = function() {
            if (typeof window !== "object") return;
            var list = [];
            Array.prototype.forEach.call(document.querySelectorAll('link[sass]'), function (item) {
                item.getAttribute("sass").replace(/\n| /g, "").split(",").forEach(function(x){
                    list.push(x);
                });
                item.remove();
            });
            this.import(list);
        }
        this.load();
        // END MICROSASS
    })();
    var summon = function(d) {
        if(typeof d==="object"){
            var addList=[];
    
            if (Array.isArray(d)) {
                d.forEach(function(x) {
                    addList.push({
                        el: x.el,
                        list: _new(x)
                    });
                });
            } else {
                for (var x = 0; x < arguments.length; x++) {
                    addList.push({
                        el:arguments[x].el,
                        list: _new(arguments[x])
                    });
                }
            }
    
            var finish = function() {
                verifyRoute();
                if(window["_DAVURA_IS_COMPILED"]){
                    if(onreadyFunction){
                        onreadyFunction();
                        onreadyFunction=null;
                    }
                }
            }
    
            // constructor and load Components in html
            addList.forEach(function(item, index){
                var end = index === addList.length -1 ? true : false;
                if (end && !item.list.length) {
                    finish();
                }
                item.list.forEach(function(id, i){
                    var data = dabu_list[item.el].list[id].data;
                    load({ 
                        el: data.davura,
                        onready: function() {
                            if (end && i === item.list.length -1) {
                                finish();
                            }
                        }
                    });
                    // load constructor
                    if(typeof data.constructor==="function"){
                        data.constructor( _arguments(data.davura) );
                    }
                });
            })
        }
    }
    // bind
    summon = summon.bind(this);
    // CALL 
    window[call] = summon;

    // PROPERTY
    Object.defineProperty(window[call], 'all', {
        enumerable: false,
        configurable: false,
        writable: false,
        value:function(name, callback) {
            var select = dabu_list[name];
            if(!select) return;
            for(var id in select.list){
                callback(select.list[id].data,id);
            }
        }
    });
    Object.defineProperty(window[call], 'route',{
        enumerable: false,
        configurable: false,
        writable: false,
        value: function(data) {
            if(data === undefined) {
                // show current route
                return get_current_route();
            }
            addRoute(data);
        }
    });
    Object.defineProperty(window[call]['route'], 'navigateBy',{
        enumerable: false,
        configurable: false,
        writable: false,
        value: function(url) {
            if (url !== undefined) {
                navigateByUrl = url;
            } else {
                return navigateByUrl;
            }
        }
    });
    Object.defineProperty(window[call]['route'], 'go',{
        enumerable: false,
        configurable: false,
        writable: false,
        value: function(url) {
            route_go(url);
        }
    });
    Object.defineProperty(window[call]['route'], 'onchange',{
        enumerable: false,
        configurable: false,
        writable: false,
        value: function(url, callback) {
            
            route_callback_run[url] = {
                callback : callback,
                run : false,
            }
        }
    });
    // INIT
    _import();
})()