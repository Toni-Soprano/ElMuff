const express = require("express");
 
const router = express.Router();
const {
  GetAllUsers,
  RegistreUser,
  Login,
  GetSingleUser,
  BlockUser,
  DeBlockUser,
  UpdateUser,
  changePassword,
} = require("../controllers/user");


router.get("/FindAllUsers", GetAllUsers);
router.post("/RegistreUser",  RegistreUser);
router.post("/Login", Login);
router.post("/GetSingleUser", GetSingleUser);
router.post("/BlockUser", BlockUser);
router.post("/DeBlockUser", DeBlockUser);
router.post("/UpdateUser", UpdateUser);
router.post("/changePassword", changePassword);

module.exports = router;