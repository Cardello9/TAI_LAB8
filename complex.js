var Complex = /** @class */ (function () {
    function Complex(re, im) {
        this.re = re;
        this.im = im;
    }
    Complex.prototype.getRe = function () {
        return this.re;
    };
    Complex.prototype.getIm = function () {
        return this.im;
    };
    Complex.prototype.add = function (c) {
        return new Complex(this.getRe() + c.getRe(), this.getIm() + c.getIm());
    };
    Complex.prototype.substract = function (c) {
        return new Complex(this.getRe() - c.getRe(), this.getIm() - c.getIm());
    };
    Complex.prototype.abs = function () {
        return Math.sqrt((this.getIm()) ^ 2 + (this.getRe()) ^ 2);
    };
    Complex.prototype.toString = function () {
        return "re: " + this.getRe().toString() + " im: " + this.getIm().toString();
    };
    return Complex;
}());
var c1 = new Complex(3, 4);
var c2 = new Complex(4, 3);
var cSum = c1.add(c2);
console.log(cSum);
var cDiff = cSum.substract(c1);
console.log(cDiff);
var cAbs = cSum.abs();
console.log(cAbs);
