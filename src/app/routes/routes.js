const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

// Main route for application
router.get('/', (req, res) => {
    res.format({
        'application/json': () => {
            res.send({ response: 'API running ok...' });
        },
        'text/html': function () {
            res.render('main', {
                titlePage: 'API Home',
                mainTitle: 'API is running (ok)...'
            });
        }
    });
});

// Users routes
// List all Users
router.get('/users', userController.index);
// Show one User
router.get('/users/:id', userController.show);
// Create User
router.post('/users', userController.create);
// Update User
router.put('/users/:id', userController.update);
// Delete User
router.delete('/users/:id', userController.remove);

module.exports = router;