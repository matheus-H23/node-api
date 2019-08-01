const User = require('../models/user');

exports.register = async (req, res) => {
    
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

