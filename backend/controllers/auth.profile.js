

 const profile = async(req,res) =>{
    try {
        if (!req.user) {
         return    res.status(401).json({message: "Not logged in"});
        }
        res.json({
            firstName : req.user.firstName,
            lastName: req.user.lastName,
            avatar: req.user.avatar || null,
            email:req.user.email

        })
    } catch (error) {
        res.status(403).json({message: error.message});
    }
}

export  {profile};