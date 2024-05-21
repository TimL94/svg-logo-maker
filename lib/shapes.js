
// parent class for shapes
class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}
// used to create a triangle shape and has a render method to create the SVG for a traingle
class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }

    render() {
        return `
<svg width="300" height="200">
    <polygon points="150, 18 244, 182 56, 182" style="fill:${this.shapeColor}" />
    <text x="95" y="145" fill="${this.textColor}" font-size="63" dominant-baseline="middle">${this.text}</text>
</svg>`;
    }
}

// used to create a cirlce shape and has a render method to create the SVG for a circle
class Circle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }

    render() {
        return `
<svg width="300" height="200">
    <circle cx="150" cy="100" r="100" style="fill:${this.shapeColor}" />
    <text x="60" y="110" fill="${this.textColor}" font-size="100"  dominant-baseline="middle">${this.text}</text>
</svg>`;
    }
}

// used to create a square shape and has a render method to create the SVG for a square
class Square extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }

    render() {
        return `
<svg width="300" height="200">
    <rect width="300" height="200" style="fill:${this.shapeColor}" />
    <text x="20" y="115" fill="${this.textColor}" font-size="150"  dominant-baseline="middle">${this.text}</text>
</svg>`;
    }
}

module.exports = { Triangle, Circle, Square };