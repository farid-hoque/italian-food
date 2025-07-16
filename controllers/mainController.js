
/**gallery data import here from data-folder */
import { galleryData } from "../data/galleryData.js"
/**archive data import here from data folder */
import { archiveData, another_archive_data, archive_about, archive_latest } from "../data/archiveData.js"
/**import staff data */
import { staffData } from "../data/staffData.js"
/**import menu data  */
import { pasta_data,starters_data,salad_data ,specials_food,fast_food,sea_food} from "../data/menuData.js"





/**content controller */
export const menuContentloading = (req, res) => {
    res.render('menuContent')
}
/**home content controller */
export const homeContentloading = (req, res) => {
    res.render('homeContent')
}
/**menu loading controller */
export const menuloading = (req, res) => {
    res.render('menu', {
        pasta_data,
        starters_data,
        salad_data,
        fast_food,
        sea_food,
        specials_food
    })
}
/**gallery loading controller */
export const galleryloading = (req, res) => {
    res.render('gallery', {
        galleryData,
    })
}
/**reservation loading controllers */
export const reservationloading = (req, res) => {
    res.render('reservation')
}
/**staff loading controllers */
export const staffloading = (req, res) => {
    res.render('staff', {
        staffData,
    })
}
/**archive loading controllers */
export const archiveloading = (req, res) => {
    res.render('archive', {
        archiveData,
        another_archive_data,
        archive_about,
        archive_latest,
    })
}