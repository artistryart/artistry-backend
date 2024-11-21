const userModel = require("../Models/userModels");
const bcrypt = require("bcrypt")
const validator = require("validator")
const jwt = require("jsonwebtoken")


const createToken = (_id) => { 
    const jwtkey = process.env.JWT_SECRET_KEY;

    return jwt.sign({ _id }, jwtkey, { expiresIn: "3d"});
};

/////////////////////////////ĐĂNG KÍ //////////////////////////////
const registerUser = async (req, res) => {

    try{
        const {fullname, birthDate, address, email, phone, userName, password, confirmPassword} = req.body;

        let user = await userModel.findOne({email})

        //Kiểm tra input người dùng nhập
        if(user) return res.status(400).json("Email đã được sử dụng bởi người dùng khác");

        if( !fullname || !birthDate || !address ||!email || !phone || !userName || !password ) 
            return res.status(400).json("Cần phải điền tất cả thông tin")

        if(validator.isEmail(email)) 
            return res.status(400).json("Email không hợp lệ");

        if(validator.isStrongPassword(password)) return res.status(400).json("Password must be strong password..");

        if (password != confirmPassword) {
            return res.status(400).json("Mật khẩu phải trùng khớp với mật khẩu đã nhập")
        }

        user = new userModel({fullname, birthDate, address, email, phone, userName, password})

        //Mã hóa password thành dạng ***
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(user.password, salt)

        await user.save();

        const token = createToken(user._id)

        res.status(200).json({ _id: user.id_, fullname, birthDate, address, email, phone, userName, token})
    } catch(error) {
        console.log(error)
        res.status(500).json(error);
    }
}
// /////////////////////////////////////////////////////////////////////

// ĐĂNG NHẬP
const loginUser = async(req, res) => {
    const {email, password} = req.body;
    
    try{
        let user = await userModel.findOne({email});

        if(!user) return res.status(400).json("Invalid email or password (email)");
        
        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword)
            return res.status(400).json*"Invalid email or password (pass)";

        const token = createToken(user._id)

        res.status(200).json({ _id: user.id_, name: user.name, email, token})

    } catch(error){}
};

//TìM USER
const findUser = async(req, res) => {
    const userId = req.params.userId;
    try{
        const user = await userModel.findById(userId)

        res.status(200).json(user)
    } catch (error){
        console.log(error);
        res.status(500).json(error);
    }
}

//LẤY DỮ LIỆU TOÀN BỘ USER
const getAllUsers = async(req, res) => {
    try{
        const users = await userModel.find();

        res.status(200).json(users)
    } catch (error){
        console.log(error);
        res.status(500).json(error);
    }
}

module.exports = {registerUser, loginUser, findUser, getAllUsers};
// module.exports = {registerUser};

