// Filename: ComplexCalculator.js
// Description: A complex calculator that performs various mathematical operations

// Complex number class
class ComplexNumber {
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }
  
  add(complex) {
    return new ComplexNumber(
      this.real + complex.real,
      this.imaginary + complex.imaginary
    );
  }
  
  subtract(complex) {
    return new ComplexNumber(
      this.real - complex.real,
      this.imaginary - complex.imaginary
    );
  }
  
  multiply(complex) {
    return new ComplexNumber(
      this.real * complex.real - this.imaginary * complex.imaginary,
      this.imaginary * complex.real + this.real * complex.imaginary
    );
  }
  
  divide(complex) {
    const denominator = Math.pow(complex.real, 2) + Math.pow(complex.imaginary, 2);
    return new ComplexNumber(
      (this.real * complex.real + this.imaginary * complex.imaginary) / denominator,
      (this.imaginary * complex.real - this.real * complex.imaginary) / denominator
    );
  }
  
  magnitude() {
    return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imaginary, 2));
  }
  
  toString() {
    let sign = this.imaginary < 0 ? '-' : '+';
    return `${this.real} ${sign} ${Math.abs(this.imaginary)}i`;
  }
}

// Complex calculator class
class ComplexCalculator {
  constructor() {
    this.result = new ComplexNumber(0, 0);
  }
  
  reset() {
    this.result.real = 0;
    this.result.imaginary = 0;
  }
  
  add(real, imaginary) {
    let complex = new ComplexNumber(real, imaginary);
    this.result = this.result.add(complex);
  }
  
  subtract(real, imaginary) {
    let complex = new ComplexNumber(real, imaginary);
    this.result = this.result.subtract(complex);
  }
  
  multiply(real, imaginary) {
    let complex = new ComplexNumber(real, imaginary);
    this.result = this.result.multiply(complex);
  }
  
  divide(real, imaginary) {
    let complex = new ComplexNumber(real, imaginary);
    this.result = this.result.divide(complex);
  }
  
  printResult() {
    console.log(`Result: ${this.result}`);
  }
}

// Example usage
const calculator = new ComplexCalculator();
calculator.add(3, 4);
calculator.subtract(1, 2);
calculator.multiply(2, 2);
calculator.divide(4, 2);
calculator.printResult();
calculator.reset();
calculator.printResult();