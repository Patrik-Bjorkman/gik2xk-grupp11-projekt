module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		'rating',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			rating: {
				type: DataTypes.INTEGER(1),
				allowNull: false,
			},
			comment: DataTypes.TEXT(),
		},
		{ underscored: true }
	);
};
