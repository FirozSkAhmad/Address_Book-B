const express = require('express')

const router = express.Router()
const { createUser, userLogin } = require('../controllers/userController')
const { authentication, authorization } = require('../middlewares/auth')
const { createAddress, getAddress,getAddressById, updateAddress, deleteAddress } = require('../controllers/addressController')


router.post('/createUser', createUser)
router.post('/login', userLogin)
router.post('/createAddress', authentication, authorization, createAddress)
router.get('/getAddress', authentication, getAddress)
router.get('/getAddress/:Id', authentication, getAddressById)
router.put('/updateAddress/:addressId', authentication, authorization, updateAddress)
router.delete('/deleteAddress/:addressId', authentication, authorization, deleteAddress)

module.exports = router