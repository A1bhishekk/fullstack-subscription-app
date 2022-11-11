import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { User } from "../models/User.js"
import ErrorHandler from "../utils/errorHandler.js";

// Register a user => /api/v1/register
export const register = catchAsyncError(async (req, res, next) => {
    const { name, email, password } = req.body;

    // const file=req.file;
    if(!name || !email || !password) return next(new ErrorHandler("Please enter all fields",400));

    let user = await User.findOne({ email });

    if (user) return next(new ErrorHandler("User already exists",409));

    //upload image to cloudinary

    user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: "avatars/0",
            url: "https://res.cloudinary.com/dfqz3qz8l/image/upload/v1623593130/avatars/0.jpg",
        },
    });

    res.status(201).json({
        success: true,
        user,
    });
});



