//! Refactored project from JavaScript into TypeScript then compiled back into JavaScript
var inquirer = require('inquirer');
var renderMarkUp = require('./utils/renderMarkdown.ts');
var questions = require('./utils/questions');
// IIFE
(function (answers) { return inquirer.prompt(questions, answers)
    .then(function (response) { return renderMarkUp(response); }); })();
