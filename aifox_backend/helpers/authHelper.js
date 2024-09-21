
const bcrypt = require("bcrypt");


// we create two functions,
// 1st function is used to hash/hide the data
const hashPassword = async (password) => {

    try {
        const saltRounds=10; // it will display password as 10 bullet dots.
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log(hashPassword);
        return hashedPassword;
    } catch (error) {
        console.log(error)
    }
};


//2nd function is used to decrypt the data after the compare

const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
}

module.exports = {
    hashPassword,
    comparePassword,
  };

