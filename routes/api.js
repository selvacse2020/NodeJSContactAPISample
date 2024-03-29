// Filename: api-routes.js
// Initialize express router
let router = require('express').Router();

// Import contact controller
var contactController = require('../controller/contactController');

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working Successfully',
        message: 'Welcome to MyApp!'
    });
});

// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);
router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

// Export API routes
module.exports = router;
