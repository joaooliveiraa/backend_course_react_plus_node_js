const express = require('express');
const app = express();
const bodyParser = require('body-parser');

var USERS = [
    { 'id': 1, 'username': 'joao oliveira', 'password': '123' },
    { 'id': 2, 'username': 'natasha', 'password': '123' }
];

var HELLO = [
    { 'msg': 'Hello Express' }
];

function getHello() {
    return HELLO;
}

function getUsers() {
    return USERS;
}

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(getHello());
});

app.get('/users', (req, res) => {
    res.send(getUsers());
});

app.listen(4000, () => {
    console.log('Hello Express listen on port 4000');
});