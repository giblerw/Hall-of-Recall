
const db = require('./connection');

function createUser(user) {
	const password = generatePassword();
	user.password = password;
	return db('users').insert(user).returning(['id', 'code']);
}

function getUserById(id) {
	return db('users').where('id', id).first();
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


// module.exports = {
//   getUsers: function() {
//     return knex('users').select()
//   },
//   getUserById: function(id) {
//     return knex('users').select().where('id', id)
//   },
//   getSecretsByUserId: function(id) {
//     return knex('secrets')
//       .select('id', 'secret')
//       .where('user_id', id)
//   }
// }

// module.exports = {
//
// };
