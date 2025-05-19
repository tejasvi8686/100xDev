const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


// create a todo app that lets users sore todos in the server

app.get('/todos', (req, res) => {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


// try to create https server from scratch in c

const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('path/to/your/private-key.pem'),
    cert: fs.readFileSync('path/to/your/certificate.pem')
}

const server = https.createServer(options, (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World');
})


server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

// create an https server in rust uisng sctix-web

const rust = require('rust');

const app = rust.Application::new();

app.get('/', |req, res| {
    res.send("Hello World");
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})


// create an https server in golang using the gurrila freame work 

const gurrila = require('gurrila');

const app = gurrila.NewApp();

app.Get('/', |req, res| {
    res.send("Hello World");
})


// spring boot java

const spring = require('spring');

const app = spring.SpringApplication.run(SpringApplication.class, args);

