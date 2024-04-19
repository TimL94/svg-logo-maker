class Shape {
    constructor(text, textColor, shapeColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }

    render() {
        return `<svg width="300" height="200">
                    <polygon points="150,0 0,200 300,200" style="fill:${this.shapeColor}" />
                    <text x="20" y="150" fill="${this.textColor}">${this.text}</text>
                </svg>`;
    }
}

class Circle extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }

    render() {
        return `<svg width="300" height="200">
                    <circle cx="150" cy="100" r="100" style="fill:${this.shapeColor}" />
                    <text x="20" y="150" fill="${this.textColor}">${this.text}</text>
                </svg>`;
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor){
        super(text, textColor, shapeColor);
    }

    render() {
        return `<svg width="300" height="200">
                    <rect width="300" height="200" style="fill:${this.shapeColor}" />
                    <text x="20" y="150" fill="${this.textColor}">${this.text}</text>
                </svg>`;
    }
}

module.exports = { Triangle, Circle, Square };