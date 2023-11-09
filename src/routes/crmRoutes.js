import {
  addNewContact,
  deleteContact,
  getContacts,
  getContactWithId,
  updateContact,
} from "../controllers/crmController";

import { login, register, loginRequired } from "../controllers/userController";

const routes = (app) => {
  app
    .route("/contact")
    .get(loginRequired, getContacts)
    .post(loginRequired, addNewContact);

  app
    .route("/contact/:contactId")
    .get(loginRequired, getContactWithId)
    .put(loginRequired, updateContact)
    .delete(loginRequired, deleteContact);

  app.route("/auth/register").post(register);

  app.route("/auth/login").post(login);
};

export default routes;
