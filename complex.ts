class Complex {
    private re: number;
    private im: number;

    constructor(re: number, im: number) {
        this.re = re;
        this.im = im;
    }

    getRe() {
        return this.re;
    }

    getIm() {
        return this.im;
    }

    add(c: Complex) {
        return new Complex(this.getRe() + c.getRe(), this.getIm() + c.getIm());
    }

    substract(c: Complex) {
        return new Complex(this.getRe() - c.getRe(), this.getIm() - c.getIm());
    }

    abs() {
        return Math.sqrt((this.getIm())^2 + (this.getRe())^2);
    }

    toString() {
        return "re: " + this.getRe().toString() + " im: " + this.getIm().toString();
    }
}

let c1 = new Complex(3, 4);
let c2 = new Complex(4, 3);

let cSum = c1.add(c2);
console.log(cSum);

let cDiff = cSum.substract(c1);
console.log(cDiff);

let cAbs = cSum.abs();
console.log(cAbs);
