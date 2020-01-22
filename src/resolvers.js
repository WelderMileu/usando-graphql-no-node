const users = [
	{id: 1, nome:"Joao", email: "joao@gmail.com.br"},
	{id: 2, nome:"Maria", email: "maria@gmail.com.br"},
	{id: 3, nome:"Carlos", email: "carlos@gmail.com.br"}
]

module.exports = {
	Query: {
		users: () => users,
		user: () => users[0]
	},

	Mutation: {
		createUser: () => users[0],
	}
};