const inquirer = require('inquirer');
const { Shape , Triangle, Circle, Square } = require('./lib/shapes');

const validateInput = (input) => {
    if (input.length === 3) {
        return true;
    } else {
        return "Please enter exactly 3 characters.";
    }
};
const questions = async () => {
    const answers = await inquirer.prompt([
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
                'Traingle',
                'Circle',
                'Square'
            ]
        },
        {
            type: 'input',
            message: 'enter a color or hex code for your shape',
            name: 'shapeColor'
        }
    ])
}