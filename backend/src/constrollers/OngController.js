const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
	async create(request, response) {
		const { name, email, whatsapp, city, uf } = request.body

		const id = crypto.randomBytes(4).toString('hex')

		await connection('ongs').insert({
			id,
			name,
			email,
			whatsapp,
			city,
			uf,
		})

		return response.json({id})
	},
	async index(request, response) {
		const ongs = await connection('ongs').select('*')
	
		return response.json(ongs)
	},
	async delete(request, response) {
		const { id } = request.params
	
		await connection('ongs')
			.where('id', id)
			.delete()
	
		return response.status(204).send()
	}
}