"use strict";
const { Model } = require("sequelize");
const { hashPassword } = require("../helpers/bcrypt");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Aircraft, { foreignKey: "UserId" });
      // define hasmany to model Pilot
      User.hasMany(models.Pilot, { foreignKey: "UserId" });
    }
  }
  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Email is required",
          },
          notEmpty: {
            msg: "Email is required",
          },
          isEmail: {
            msg: "Invalid email format",
          },
        },
        unique: {
          msg: "Email has been registered",
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password is required",
          },
          notEmpty: {
            msg: "Password is required",
          },
          len: {
            args: [8],
            msg: "Password length at least 8 caracters",
          },
          weak(value) {
            const regex =
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[-+_!@#$%^&*.,?]).*$/;
            if (!regex.test(value)) {
              throw new Error(
                "Password must contain lowercase, uppercase, numbers, and special characters."
              );
            }
          },
        },
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Username is required",
          },
          notEmpty: {
            msg: "Username is required",
          },
          is: {
            args: /^[a-z0-9-]+$/,
            msg: `Username is only allowed to use lowercase and dash (-) character.`,
          },
          len: {
            args: [6],
            msg: "Username length at least 6 caracters",
          },
        },
        unique: {
          msg: "Username is already in used!",
        },
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Name is required",
          },
          notEmpty: {
            msg: "Name is required",
          },
        },
      },
      phoneNumber: DataTypes.STRING,
      identityNumber: DataTypes.STRING,
      dateOfBirth: DataTypes.DATE,
      gender: DataTypes.STRING,
      isActive: {
        type: DataTypes.BOOLEAN,
      },
      isArchive: {
        type: DataTypes.BOOLEAN,
      },
      isMember: {
        type: DataTypes.BOOLEAN,
      },
      token: DataTypes.STRING,
      avatar: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  User.beforeCreate((user) => {
    user.password = hashPassword(user.password);
    user.isActive = false;
    user.isMember = false;
    user.isArchive = false;
  });
  return User;
};
