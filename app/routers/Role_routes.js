const express = require('express');
const router = express.Router();
//middleware
const auth = require('../middleware/auth');
const validate = require('../middleware/valitateRole');
const { validateCreate } = require('../validator/RoleValidator');
//controller
const RoleController = require('../controllers/Role_controller');
//prueba de fina¿dall user con roles y roles con users
router.get('/api/roles/user', RoleController.allRolesUser);
router.get('/api/roles',RoleController.allRoles);
router.get('/api/role/:id', RoleController.getRole);
//router.post('/api/getRolesValidator',RoleController.createRole);
router.post('/api/new-roles',validateCreate,validate.checkExisted, RoleController.createRole);
router.delete('/api/roles/delete/:id', RoleController.deleteRole);



module.exports = router;