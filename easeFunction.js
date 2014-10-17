//Animation function 
jsObject.easeInQuad = function (t, b, c, d) {
    return c*(t/=d)*t + b;
};
jsObject.easeOutQuad = function (t, b, c, d) {
    return -c *(t/=d)*(t-2) + b;
};
jsObject.easeInOutQuad = function (t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t + b;
    return -c/2 * ((--t)*(t-2) - 1) + b;
};
jsObject.easeInCubic = function (t, b, c, d) {
    return c*(t/=d)*t*t + b;
};
jsObject.easeOutCubic = function (t, b, c, d) {
    return c*((t=t/d-1)*t*t + 1) + b;
};
jsObject.easeInOutCubic = function (t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t + b;
    return c/2*((t-=2)*t*t + 2) + b;
};
jsObject.easeInQuart = function (t, b, c, d) {
    return c*(t/=d)*t*t*t + b;
};
jsObject.easeOutQuart = function (t, b, c, d) {
    return -c * ((t=t/d-1)*t*t*t - 1) + b;
};
jsObject.easeInOutQuart = function (t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
    return -c/2 * ((t-=2)*t*t*t - 2) + b;
};
jsObject.easeInQuint = function (t, b, c, d) {
    return c*(t/=d)*t*t*t*t + b;
};
jsObject.easeOutQuint = function (t, b, c, d) {
    return c*((t=t/d-1)*t*t*t*t + 1) + b;
};
jsObject.easeInOutQuint = function (t, b, c, d) {
    if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
    return c/2*((t-=2)*t*t*t*t + 2) + b;
};
jsObject.easeInSine = function (t, b, c, d) {
    return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
};
jsObject.easeOutSine = function (t, b, c, d) {
    return c * Math.sin(t/d * (Math.PI/2)) + b;
};
jsObject.easeInOutSine = function (t, b, c, d) {
    return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
};
jsObject.easeInExpo = function (t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
};
jsObject.easeOutExpo = function (t, b, c, d) {
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
};
jsObject.easeInOutExpo = function (t, b, c, d) {
    if (t==0) return b;
    if (t==d) return b+c;
    if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
    return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
};
jsObject.easeInCirc = function (t, b, c, d) {
    return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
};
jsObject.easeOutCirc = function (t, b, c, d) {
    return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
};
jsObject.easeInOutCirc = function (t, b, c, d) {
    if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
    return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
};
jsObject.easeInElastic = function (t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
};
jsObject.easeOutElastic = function (t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
};
jsObject.easeInOutElastic = function (t, b, c, d) {
    var s=1.70158;var p=0;var a=c;
    if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
    if (a < Math.abs(c)) { a=c; var s=p/4; }
    else var s = p/(2*Math.PI) * Math.asin (c/a);
    if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
    return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
};
jsObject.easeInBack = function (t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*(t/=d)*t*((s+1)*t - s) + b;
};
jsObject.easeOutBack = function (t, b, c, d, s) {
    if (s == undefined) s = 1.70158;
    return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
};
jsObject.easeInOutBack = function (t, b, c, d, s) {
    if (s == undefined) s = 1.70158; 
    if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
    return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
};
jsObject.easeInBounce = function (t, b, c, d) {
    return c - this.easeOutBounce (d-t, 0, c, d) + b;
};
jsObject.easeOutBounce = function (t, b, c, d) {
    if ((t/=d) < (1/2.75)) {
        return c*(7.5625*t*t) + b;
    } else if (t < (2/2.75)) {
        return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
    } else if (t < (2.5/2.75)) {
        return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
    } else {
        return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
    }
};
jsObject.easeInOutBounce = function (t, b, c, d) {
    if (t < d/2) return this.easeInBounce (t*2, 0, c, d) * .5 + b;
    return this.easeOutBounce (t*2-d, 0, c, d) * .5 + c*.5 + b;
};