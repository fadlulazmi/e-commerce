const router = require('express').Router()
const ProductController = require('../controllers/productController')
const {authentication, authorization} = require('../middlewares/middleware')

router.get('/', ProductController.readAll)
router.get('/:id', ProductController.detail)

router.use(authentication, authorization.user)

router.post('/', ProductController.create)
router.put('/:id', ProductController.update)
router.delete('/:id', ProductController.delete)

module.exports = router