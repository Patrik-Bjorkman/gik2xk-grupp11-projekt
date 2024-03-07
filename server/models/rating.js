module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"rating",
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			rating: {
				type: DataTypes.DECIMAL(1, 1),
				allowNull: false,
			},
			comment: DataTypes.TEXT(),
		},
		{ underscored: true }
	);
};
