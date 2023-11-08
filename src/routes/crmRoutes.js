import {
  addNewContact,
  getContacts,
  getContactWithId,
} from "../controllers/crmController";

const routes = (app) => {
  app.route("/contact").get(getContacts).post(addNewContact);

  app
    .route("/contact/:contactId")
    .get(getContactWithId)
    .put((req, res) => {
      res.send("PUT request successful!");
    })
    .delete((req, res) => {
      res.send("DELETE request successful!");
    });
};

export default routes;
