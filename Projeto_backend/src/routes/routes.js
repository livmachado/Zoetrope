const { Router } = require('express');
const UserController = require('../controllers/UserController');
const PlansController = require('../controllers/PlansController');
const MoviesController = require('../controllers/MoviesControllers');
const router = Router();

router.get('/users',UserController.index);
router.get('/users/:id',UserController.show);
router.post('/users',UserController.create);
router.put('/users/:id', UserController.update);
router.delete('/users/:id', UserController.destroy);

router.get('/plans',PlansController.index);
router.get('/plans/:id',PlansController.show);
router.post('/plans',PlansController.create);
router.put('/plans/:id', PlansController.update);
router.delete('/plans/:id', PlansController.destroy);

router.get('/movies',MoviesController.index);
router.get('/movies/:id',MoviesController.show);
router.post('/movies',MoviesController.create);
router.put('/movies/:id', MoviesController.update);
router.delete('/movies/:id', MoviesController.destroy);

module.exports = router;