//! Refactored project from JavaScript into TypeScript then compiled back into JavaScript
const inquirer = require('inquirer');
let renderMarkUp = require('./utils/renderMarkdown.ts');
let questions = require('./utils/questions');

// IIFE
(answers => inquirer.prompt(questions, answers)
    .then((response) => renderMarkUp(response)))();