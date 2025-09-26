
import userModel from "../models/user.model.js";

const profile = async (req, res) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: "Not logged in" });
        }
        const user = await userModel.findById(req.user.id).lean();
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.json(user);
        // res.json({
        //     id: user._id,
        //     firstName: user.firstName,
        //     lastName: user.lastName,
        //     avatar: user.avatar || null,
        //     email: user.email
        // });
    } catch (error) {
        res.status(403).json({ message: error.message });
    }
}

export { profile };