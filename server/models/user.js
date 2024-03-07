module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'user',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			firstName: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			lastName: {
				type: DataTypes.STRING(50),
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING(200),
				unique: true,
				allowNull: false,
				validate: {
					len: [4, 200],
				},
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{ underscored: true }
	);
};
