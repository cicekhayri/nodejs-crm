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

export const updateContact = (req, res) => {
  Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, {
    new: true,
  })
    .then((contact) => res.json(contact))
    .catch((err) => err);
};

export const deleteContact = (req, res) => {
  Contact.findByIdAndDelete({ _id: req.params.contactId })
    .then(() => res.json({ message: "Successfully deleted contact" }))
    .catch((err) => err);
};
