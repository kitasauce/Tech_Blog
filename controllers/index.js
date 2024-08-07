const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
const dashRoutes = require('./dashRoutes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashRoutes);

router.use((req, res) => {
    res.status(404).end();
});
module.exports = router;