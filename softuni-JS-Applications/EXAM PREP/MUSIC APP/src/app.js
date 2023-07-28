import page from "../node_modules/page/page.mjs";
import { authMiddleware } from "./middlewares/authMiddleware.js";
import {
  renderNavigationMiddleware,
  renderContentMiddleware,
} from "./middlewares/renderMIddleware.js";
import { homeView } from "./views/homeView.js";
import { loginView } from "./views/loginView.js";
import { logoutView } from "./views/logoutView.js";
import { registerView } from "./views/registerView.js";

page(authMiddleware);
page(renderNavigationMiddleware);
page(renderContentMiddleware);

page("/", homeView);
page("/login", loginView);
page("/register", registerView);
page("/logout", logoutView);
page.start();
