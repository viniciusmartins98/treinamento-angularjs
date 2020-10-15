const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const contacts = [
    { name: 'Vino', phone: '17948571923', color: 'red', provider: {name: 'Oi', code: 14, type: 'cellphone'}, price: 10, date: new Date() },
    { name: 'Lu', phone: '17918293845', color: 'green', provider: {name: 'Vivo', code: 15, type: 'cellphone'}, price: 10.50, date: new Date() },
    { name: 'Mom', phone: '17981939485', color: 'blue', provider: {name: 'GVT', code: 25, type: 'phone'}, price: 14.35, date: new Date() },
  ];

const providers = [
    { name: 'Oi', code: 14, type: 'cellphone' },
    { name: 'Vivo', code: 15, type: 'cellphone' },
    { name: 'Tim', code: 41, type: 'cellphone' },
    { name: 'GVT', code: 25, type: 'phone' },
    { name: 'Embratel', code: 21, type: 'phone' },
  ];

app.get('/contacts', (req, res) => {
    res.json(contacts);
});

app.post('/contacts', (req, res) => {
    const newContact = req.body
    contacts.push(newContact);

    res.json(newContact);
});

app.get('/providers', (req, res) => {
    res.json(providers);
})

app.listen(3001);