import { addNewContact } from "../controllers/crmController";

const routes = (app) => {
  app
    .route("/contact")
    .get((req, res) => {
      res.send("GET request successful!");
    })
    .post(addNewContact);

  app
    .route("/contact/:contactId")
    .put((req, res) => {
      res.send("PUT request successful!");
    })
    .delete((req, res) => {
      res.send("DELETE request successful!");
    });
};

export default routes;
