import mongoose from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactSchema);

export const addNewContact = async (req, res) => {
  let newContact = new Contact(req.body);
  await newContact
    .save()
    .then((contact) => res.json(contact))
    .catch((err) => err);
};

export const getContacts = (req, res) => {
  Contact.find({})
    .then((contacts) => res.json(contacts))
    .catch((err) => err);
};

export const getContactWithId = (req, res) => {
  Contact.findById(req.params.contactId)
    .then((contact) => res.json(contact))
    .catch((err) => err);
};
