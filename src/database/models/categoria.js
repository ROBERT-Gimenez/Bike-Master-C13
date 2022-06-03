module.exports = (sequelize, dataTypes) => {
    let alias = "categoria";

    let cols = {
        id: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        name: {
            type: dataTypes.STRING(45),
            allowNull: false,
        }
    };

    let config = {
        tableName: "categoris",
        timestamps: false,
    };

    const categoria = sequelize.define(alias, cols, config);

    categoria.associate = (models) => {
        categoria.hasMany(models.producto, {
            as: "productos",
            foreignKey: "product_id"
        })
    }

    return categoria;
}