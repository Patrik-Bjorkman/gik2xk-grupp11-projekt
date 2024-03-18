module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'product',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			title: {
				type: DataTypes.STRING(100),
				allowNull: false,
			},
			description: DataTypes.TEXT,
			price: {
				type: DataTypes.DECIMAL(10, 2),
				allowNull: false,
			},
			imageUrl: {
				type: DataTypes.STRING(200),
			},
		},
		{ underscored: true }
	);
};
