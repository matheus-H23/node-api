const User = require('../models/user');

exports.index = async (req, res) => {
    try {
        var users = await User.find();
        return res.send({ users });
        
    } catch (err) {
        return res.send({response: 'Error in retrieving users, try again later'});
    }
};

exports.show = async (req, res) => {
    try {
        var user = await User.findOne({'_id': req.params.id});
        return res.send({ user });
        
    } catch (err) {
        return res.send({response: 'Error retrieving user, try again later'});
    }
};

exports.create = async (req, res) => {
    const { email } = req.body;

    try {

        if (email == null) return res.status(400).send({ error: 'No body detected on your request' })

        if (await User.findOne({ email })) return res.status(400).send({ error: "User already exists" });

        const user = await User.create(req.body);

        user.password = undefined;
        
        return res.send({ user });

    } catch (err) {
        return res.status(400).send({ error: 'Registration failed ' + err });
    }
};

exports.update = async (req, res) => {
    try {
        if (req.body == {}) return res.status(400).send({ error: 'No body detected on your request' });
        var user = await User.findOneAndUpdate({'_id': req.params.id}, req.body);
        return res.send({ user });
    } catch (err) {
        return res.send({ response: 'Error updating user, try again later' });
    }
};

exports.remove = async (req, res) => {
    try {
        await User.findOneAndRemove({'_id': req.params.id});
        return res.send({response: 'User successfuly removed'});
    } catch (err) {
        return res.status(400).send({response: 'Error in removing user, try again later'});        
    }
};