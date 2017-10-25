
const db = require('./connection');

// function createUser(user) {
// 	const password = generatePassword();
// 	user.password = password;
// 	return db('users').insert(user).returning(['id', 'code']);
// };

function getUserByEmail(email) {
    return db('users').where('email', email).first();
  };

function getUserById(id) {
	return db('users').where('id', id).first();
<<<<<<< HEAD
}
=======
};
>>>>>>> 1245a560b224179a841ab7b79768bd9b239913a4
//needs work
// function generatePassword(password) {
// 	return db('password');
// }

function login(password) {
	return db('users').select().where('password', password);
}

module.exports = {

	getUserById,
	login
};

<<<<<<< HEAD
=======

>>>>>>> 1245a560b224179a841ab7b79768bd9b239913a4

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
