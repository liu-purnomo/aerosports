const errorHandler = (err, req, res, next) => {

    console.log(err, '<<<<<<<<<< ERROR')
    console.log(err.name, '<<<<<<<<<< ERROR NAME')

    let code = 500;
    let message = "Internal Server Error";

    //validasi sequelize
    if (err.name === "SequelizeValidationError" || err.name === "SequelizeUniqueConstraintError") {
        code = 400;
        message = err.errors[0].message;
    }

    if (err.name === 'UserInfoRequired') {
        code = 400
        message = 'Username / email is required'
    }

    if (err.name === 'InvalidLogin') {
        code = 400
        message = 'Invalid username/email or password'
    }

    if (err.name === 'PasswordRequired') {
        code = 400
        message = 'Password is required'
    }

    if (err.name === 'Unauthorized') {
        code = 401
        message = 'Invalid access token'
    }

    res.status(code).json({
        message
    })
}

module.exports = errorHandler