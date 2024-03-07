module.exports = (sequelize, DataTypes) => {
	return sequelize.define(
		"cart",
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			payed: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
		},
		{ underscored: true }
	);
};
