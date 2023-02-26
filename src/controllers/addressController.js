const addressModel = require('../models/addressModel')

async function createAddress(req, res) {
    try {
        const data = req.body
        const createdAddress = await addressModel.create(data)
        return res.status(201).send(createdAddress)
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}

async function getAddress(req, res) {
    try {
        const AddressData = await addressModel.find()
        return res.status(200).send(AddressData)
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}

async function getAddressById(req, res) {
    try {
        const Id = req.params.Id
        const AddressData = await addressModel.findById({ _id: Id })
        return res.status(200).send(AddressData)
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}

async function updateAddress(req, res) {
    try {
        const data = req.body
        const id = req.params.addressId

        const updatedAddress = await addressModel.findOneAndUpdate({ _id: id }, data, { new: true })
        return res.status(200).send(updatedAddress)
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}

async function deleteAddress(req, res) {
    try {
        const id = req.params.addressId

        await addressModel.findOneAndDelete({ _id: id })
        return res.status(200).send({ msg: "deleted sucessfully" })
    }
    catch (err) {
        return res.status(500).send({ msg: err.message })
    }
}

module.exports = { createAddress, getAddress, getAddressById, updateAddress, deleteAddress }