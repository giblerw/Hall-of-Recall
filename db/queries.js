const db = require('./connection');

function createUser(user) {
	const password = generatePassword();
	user.password = password;
	return db('users').insert(user).returning(['id', 'code']);
}

function getUserById(id) {
	return db('users').first().where('id', id);
}
//needs work
function generatePassword(password) {
	return db('password');
}

function login(password) {
	return db('users').select().where('password', password);
}

module.exports = {
	createUser,
	getUserById,
	login
};
