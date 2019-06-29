const router = require('express').Router()
const ProductController = require('../controllers/productController')
const {authentication, authorization} = require('../middlewares/middleware')
const upload = require('../helpers/images')
// console.log('routing prods')
router.get('/', ProductController.readAll)
router.get('/:id', ProductController.detail)

router.use(authentication, authorization.user)

router.post('/',upload.multer.single('img'),upload.sendUploadToGCS,ProductController.create)
router.put('/:id', ProductController.update)
router.delete('/:id', ProductController.delete)

module.exports = router