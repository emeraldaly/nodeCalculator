var express = require('express');
var omdb = require('omdb');
var github = require('github');
var GitHubApi = require('node-github');

var app = express();
var PORT = process.env.PORT || 8090;