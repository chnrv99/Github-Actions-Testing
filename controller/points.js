const User = require('../model/UserModel');
exports.points = (req, res, next) => {
    // we will get points, prNumber, and username from post request in json format
    console.log(req.body);
    const points = req.body.points;
    const prNumber = req.body.prNumber;
    const username = req.body.username;
    // now we will update the user's points in the database under mergedPRs, and increase the points
    User.findOneAndUpdate({username: username}, {$inc: {points: points}, $push: {mergedPRs: {prNumber: prNumber, timestamp: Date.now(), points_receieved: points}}}, {new: true}, (err, user) => {
        if (err) {
            console.log(err);
            res.json({success: false, message: "Error updating user's points"});
        } else {
            res.json({success: true, message: "User's points updated successfully"});
        }
    });
    

};

