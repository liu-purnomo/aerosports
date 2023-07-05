const { comparePassword } = require("../helpers/bcrypt");
const { encryption } = require("../helpers/jwt");
const { User } = require("../models");

class Controller {
  // user index to list all user
  static async index(req, res, next) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  }

  static async register(req, res, next) {
    try {
      const { email, password, username, fullName } = req.body;
      const user = await User.create({
        email,
        password,
        username,
        fullName,
      });
      res.status(200).json({
        data: {
          id: user.id,
          email: user.email,
          username: user.username,
        },
        message: "Activation code has been sent to your email",
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { username, password } = req.body;
      if (!username) throw { name: "UserInfoRequired" };
      if (!password) throw { name: "PasswordRequired" };
      let user;
      user = await User.findOne({
        where: {
          email: username,
        },
      });
      if (!user) {
        user = await User.findOne({
          where: {
            username,
          },
        });
      }
      if (!user) throw { name: "InvalidLogin" };
      const isValidPassword = comparePassword(password, user.password);
      if (!isValidPassword) throw { name: "InvalidLogin" };
      const access_token = encryption({
        id: user.id,
        email: user.email,
      });

      res.status(200).json({
        access_token,
      });
    } catch (err) {
      next(err);
    }
  }

  static async detail(req, res, next) {
    try {
      const { id } = req.user;
      const user = await User.findByPk(+id, {
        attributes: {
          exclude: ["password"],
        },
      });
      res.status(200).json(user);
    } catch (err) {
      next(err);
    }
  }

  static async update(req, res, next) {
    try {
      const { id } = req.user;
      const { fullName, identityNumber, dateOfBirth, gender, avatar } =
        req.body;
      await User.update(
        {
          fullName,
          identityNumber,
          dateOfBirth,
          gender,
          avatar,
        },
        {
          where: { id },
        }
      );
      res.status(200).json({
        message: "Data user has been updated",
      });
    } catch (err) {
      next(err);
    }
  }

  static async changePassword(req, res, next) {
    try {
      const { oldPassword, newPassword } = req.body;
      const user = await User.update({
        password,
      });
      res.status(200).json({
        message: "Password has been updated",
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;
