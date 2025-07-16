

import express from "express";
import { menuContentloading ,homeContentloading, menuloading, galleryloading, reservationloading,staffloading,archiveloading} from "../controllers/mainController.js";

const router = express.Router();

/**more and more routes make here now */
/**menuContent route */
router.get("/menu_content", menuContentloading)
/**homeCOntent route */
router.get("/home_content", homeContentloading)
/**menu route create */
router.get("/menus",menuloading)
/**gallery route create here and Mod done  */
router.get("/gallery", galleryloading)
/**reservation route create here */
router.get("/reservation", reservationloading)
/**staff routes create and Mod done */
router.get("/staff", staffloading)
/**archive routes create and archive all modified now */
router.get("/archive",archiveloading)

/**THis router import with server.js file which main server file */
export default router;