const express = require('express');
const router = express.Router()
const userController = require('./../controllers/userControllers');


router
  .route('/')
  .get(userController.getUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

// const w = 23;
// w =34;
// console.log(w);
  module.exports = router