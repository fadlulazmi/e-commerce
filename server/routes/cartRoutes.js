const router = require('express').Router()
const CartController = require('../controllers/cartController')
const {authorization} = require('../middlewares/middleware')

router.post('/', CartController.create)
router.get('/:userId', CartController.findByUser)
router.delete('/:id', authorization.cart, CartController.delete)

module.exports = router