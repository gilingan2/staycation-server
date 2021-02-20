const router = require('express').Router()
const apiController = require('../controllers/apiControllers')
const { upload } = require('../middlewares/multer')

router.get('/landingPage', apiController.landingPage)
router.get('/detailPage/:id', apiController.detailPage)
router.post('/bookingpage', upload, apiController.bookingPage)

module.exports = router;