const express = require('express');
const contactsScheme = require('../model/concatmodule');

const contactroute = express.Router();

contactroute.get('/', async (req, res) => {
    try {
        const contacts = await contactsScheme.find();
        res.status(200).send({ msg: 'success', contacts });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error fetching contacts' });
    }
});

contactroute.get('/:id', async (req, res) => {
    try {
        const contactId = req.params.id;
        const contact = await contactsScheme.findById(contactId);

        if (!contact) {
            return res.status(404).send({ msg: 'Contact not found' });
        }

        res.status(200).send({ msg: 'success', contact });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error fetching contact' });
    }
});

contactroute.post('/', async (req, res) => {
    try {
        const newContact = req.body;
        const contact = await contactsScheme.create(newContact);
        res.status(201).send({ msg: 'success', contact });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error creating contact' });
    }
});

contactroute.delete('/:id', async (req, res) => {
    try {
        const contactId = req.params.id;
        const deletedContact = await contactsScheme.findByIdAndDelete(contactId);
        if (!deletedContact) {
            return res.status(404).send({ msg: 'Contact not found' });
        }
        res.status(200).send({ msg: 'success', deletedContact });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error deleting contact' });
    }
});

contactroute.put('/:id', async (req, res) => {
    try {
        const contactId = req.params.id;
        const updatedData = req.body;
        const updatedContact = await contactsScheme.findByIdAndUpdate(contactId, updatedData, { new: true });
        if (!updatedContact) {
            return res.status(404).send({ msg: 'Contact not found' });
        }
        res.status(200).send({ msg: 'success', updatedContact });
    } catch (err) {
        console.log(err);
        res.status(500).send({ msg: 'Error updating contact' });
    }
});

module.exports = contactroute;
