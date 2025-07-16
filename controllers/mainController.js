
/**gallery data import here from data-folder */
import { galleryData } from "../data/galleryData.js"
/**archive data import here from data folder */
import { archiveData, another_archive_data, archive_about, archive_latest } from "../data/archiveData.js"
/**import staff data */
import { staffData } from "../data/staffData.js"
/**import menu data  */
import { pasta_data,starters_data,salad_data ,specials_food,fast_food,sea_food} from "../data/menuData.js"
/**import news data */
 




/**
 * Menu loading controller
 * @param {*} req 
 * @param {*} res 
 */
export const menu_loading = (req, res) => {
    res.render('menu', {
        pasta_data,
        starters_data,
        salad_data,
        fast_food,
        sea_food,
        specials_food
    })
}

/**
 * Gallery loading controller
 * @param {*} req 
 * @param {*} res 
 */
export const gallery_loading = (req, res) => {
    res.render('gallery', {
        galleryData,
    })
}

/**
 * Reservation loading controller
 * @param {*} req 
 * @param {*} res 
 */
export const reservation_loading = (req, res) => {
    res.render('reservation')
}

/**
 * staff loading controller
 * @param {*} req 
 * @param {*} res 
 */
export const staff_loading = (req, res) => {
    res.render('staff', {
        staffData,
    })
}

/**
 * Archive loading controller
 * @param {*} req 
 * @param {*} res 
 */
export const archive_loading = (req, res) => {
    res.render('archive', {
        archiveData,
        another_archive_data,
        archive_about,
        archive_latest,
    })
}

/**
 * Home controller
 * @param {*} req 
 * @param {*} res 
 */
export const home_loading = (req, res) => {
    res.render('home')
}

/**
 * News loading controller
 * @param {*} req 
 * @param {*} res 
 */
export const news_loading = (req, res) => {
    res.render('news')
}