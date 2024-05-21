const { Triangle, Circle, Square } = require('./shapes');

describe('Shape rendering', () => {
    const text = 'XXX';
    const textColor = 'black';
    const shapeColor = 'blue';

    test('Triangle renders correctly', () => {
        const triangle = new Triangle(text, textColor, shapeColor);
        const expectedSvg = `
        <svg width="300" height="200">
            <polygon points="150, 18 244, 182 56, 182" style="fill:blue" />
            <text x="95" y="145" fill="black" font-size="63" dominant-baseline="middle">XXX</text>
        </svg>`.replace(/\s+/g, '');
        expect(triangle.render().replace(/\s+/g, '')).toBe(expectedSvg);
    });

    test('Circle renders correctly', () => {
        const circle = new Circle(text, textColor, shapeColor);
        const expectedSvg = `
        <svg width="300" height="200">
            <circle cx="150" cy="100" r="100" style="fill:blue" />
            <text x="60" y="110" fill="black" font-size="100" dominant-baseline="middle">XXX</text>
        </svg>`.replace(/\s+/g, '');
        expect(circle.render().replace(/\s+/g, '')).toBe(expectedSvg);
    });

    test('Square renders correctly', () => {
        const square = new Square(text, textColor, shapeColor);
        const expectedSvg = `
        <svg width="300" height="200">
            <rect width="300" height="200" style="fill:blue" />
            <text x="20" y="115" fill="black" font-size="150" dominant-baseline="middle">XXX</text>
        </svg>`.replace(/\s+/g, '');
        expect(square.render().replace(/\s+/g, '')).toBe(expectedSvg);
    });
});