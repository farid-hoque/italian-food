

import express from "express";
import {  menu_loading, gallery_loading, reservation_loading,staff_loading,archive_loading , home_loading, news_loading} from "../controllers/mainController.js";

const router = express.Router();

/**more and more routes make here now */
// 

/**menu route create and mod done */
router.get("/menu",menu_loading)
/**gallery route create here and Mod done  */
router.get("/gallery", gallery_loading)
/**reservation route create here */
router.get("/reservation", reservation_loading)
/**staff routes create and Mod done */
router.get("/staff", staff_loading)
/**archive routes create and archive all modified now */
router.get("/archive", archive_loading)
/**news routes create */
router.get("/news",news_loading)
/**FINAL LOADING OF LAYOUT PAGE */
router.get("/",home_loading)
/** @ THis router import with server.js file which main server file */
export default router;