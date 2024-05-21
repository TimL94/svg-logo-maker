const inquirer = require('inquirer');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

// used to ensure that the use inputs exactly 3 characters
const validateInput = (input) => {
    if (input.length === 3) {
        return true;
    } else {
        return "Please enter exactly 3 characters.";
    }
};

// prompts the user for questions and saves the information as data
const questions = [
        {
            type: 'input',
            message: 'Enter three characters',
            name: 'text',
            validate: validateInput

        },
        {
            type: 'input',
            message: 'enter a color or hex code for text color',
            name: 'textColor'
        },
        {
            type: 'list',
            message: 'Choose your shape',
            name: 'shape',
            choices: [
                'Triangle',
                'Circle',
                'Square'
            ]
        },
        {
            type: 'input',
            message: 'enter a color or hex code for your shape',
            name: 'shapeColor'
        }
    ]

    // intitializes the application and and creates an svg file based on user input
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        switch(answers.shape){
            case 'Triangle':
                var shape = new Triangle(answers.text, answers.textColor, answers.shapeColor);
                break;
            case 'Circle':
                var shape = new Circle(answers.text, answers.textColor, answers.shapeColor);
                break;
            case 'Square':
                var shape = new Square(answers.text, answers.textColor, answers.shapeColor);
                break;
        }
        const svg = shape.render();
        fs.writeFile('logo.svg', svg, (error) => {
            if (error) throw error;
            console.log('The file has been saved!')
        }
        )
})}

// calls the init function to start the application
init();