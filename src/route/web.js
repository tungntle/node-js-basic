import express from 'express'
import homeController from '../controller/homeController'

let router = express.Router()

const initWebRoute = (app) => {
    router.get('/', homeController.getHomepage)

    router.get('/about', (req, res) => {
        res.send('Tung Ne')
    })


    return app.use('/', router)
}

export default initWebRoute