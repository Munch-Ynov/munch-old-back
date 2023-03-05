const router = require('express').Router();

const reservationController = require('../controllers/reservations.controller');
const userMiddleware = require('../middlewares/users.middlewares');

router.get('/', reservationController.getAllReservations);
router.get('/:id', reservationController.getReservationById);
router.post('/', userMiddleware, reservationController.createReservation);
router.patch('/:id', userMiddleware, reservationController.updateReservation);
router.delete('/:id', userMiddleware, reservationController.deleteReservation);

module.exports = router;