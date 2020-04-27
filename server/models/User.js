import mongoose, { mongo } from 'mongoose'

const UserSchema = mongoose.Schema({
	name: String,
	email: String,
	createdAt: Date,
	updatedAt: Date,
	password: String,
	emailConfirmedAt: Date,
	emailConfirmCode: String,
})

export default mongoose.model('User', UserSchema)
