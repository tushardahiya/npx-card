#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
      type: 'list',
      name: 'action',
      message: "What's up?",
      choices: [
        {
          name: 'Send me a mail',
          value: () => {
            open('mailto:tushardahiya84@gmail.com')
            console.log('\nLooking forward to hearing from you.\n')
          }
        },
        {
          name: 'Reach out at @tushar',
          value: () => {
            open('https://www.linkedin.com/in/tushar-dahiya/')
            console.log('\nLooking forward to hearing from you.\n')
          }
        },
        {
          name: 'Exit',
          value: () => console.log('Enjoy your day.\n')
        }
      ]
    }
  ]

const data = {
    name: chalk.bold.white('Tushar Dahiya'),
    tagline: chalk.bold.grey('Web and Mobile App Developer'),
    location: chalk.bold.grey('India <3'),
    twitter: chalk.hex('#08a0e9')('https://twitter.com/tusharontheedge/'),
    github: chalk.white('https://github.com/tushardahiya/'),
    medium: chalk.hex('#EA4C89')('https://medium.com/@twoshar'),
    linkedin: chalk.hex('#0077B5')('https://linkedin.com/in/tushar-dahiya'),
    website: chalk.white('https://tushardahiya.com'),
    labelWebsite: chalk.white.bold('Website:'),
    labelTwitter: chalk.hex('#08a0e9').bold('Twitter:'),
    labelGitHub: chalk.hex('#F6F6F6').bold('GitHub:'),
    labelMedium: chalk.hex('#EA4C89').bold('Medium:'),
    labelLinkedin: chalk.hex('#0077B5').bold('Linkedin:')
  }

const me =  boxen(
    [
      `${data.name}`,
      `${data.tagline}`,
      `${data.location}`,
      ``,
      `${data.labelWebsite}  ${data.website}`,
      `${data.labelTwitter}  ${data.twitter}`,
      `${data.labelGitHub}  ${data.github}`,
      `${data.labelMedium}  ${data.medium}`,
      `${data.labelLinkedin}  ${data.linkedin}`,
      '',
      `${chalk.bold('Building successful React Native Apps and')}`,
      `${chalk.bold('React WebApps.')}`,
      '',
       
      `${chalk.bold('Delivering innovative, high-quality software')}`,
      `${chalk.bold('solutions and creating scalable and')}`,
      `${chalk.bold('efficient applications that provide')}`,
      `${chalk.bold('exceptional user experiences.')}`
     
    ].join('\n'),
    {
      margin: 1,
      float: 'left',
      padding: 1,
      borderStyle: 'single',
      borderColor: 'white'
    }
  )

console.log(me);
const tip = [
    `Tip: Try ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above`,
    '',
].join("\n");
console.log(tip);

prompt(questions).then(answer => answer.action());