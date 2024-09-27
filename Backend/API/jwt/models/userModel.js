import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("testdb", "root", "knackforge", {
  host: "localhost",
  dialect: "mysql",
});

const UserModel = sequelize.define(
  "users",
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.ENUM,
      values: ["active", "inactive"],
      allowNull: false,
      unique: true,
    },
  },
  { timestamps: false }
);

export default UserModel;
