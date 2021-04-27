let express = require('express');
let router = express.Router();
let userService = require('../../application/services/user.service')

router.get('/users', async (req, res) => {
	const users = await userService.getUsers()
	res.status(200).json(users)
})

router.get('/users/:id', async (req, res) => {
	try {
		const response = await userService.getUser(req.params.id)
		res.status(200).json(response)
	} catch (error) {
		res.status(500).json(error)
	}
})

router.post('/users', async (req, res) => {
	try {
		const response = await userService.createUser({...req.body})
		res.status(200).json(response)
	} catch (error) {
		res.status(500).json(error)
	}
})

router.delete('/users/:id', async (req, res) => {
	try {
		const response = await userService.deleteUser(req.params.id)
		res.status(200).json(response)
	} catch (error) {
		res.status(500).json(error)
	}
})

router.put('/users/:id', async (req, res) => {
	try {
		const response = await userService.updateUser(req.params.id, {...req.body})
		res.status(200).json(response)
	} catch (error) {
		res.status(500).json(error)
	}
})

module.exports = router;