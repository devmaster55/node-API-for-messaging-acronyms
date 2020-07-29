const { Router } = require('express');
const acronymsController = require('../controllers/acronyms.controller');

const router = Router();

const checkAuthorization = require('../middlewares/auth');

// Get all acronyms that fuzzy match against :search
router.get("/acronyms", acronymsController.findAll);

// Get one acronym
router.get("/acronyms/one", acronymsController.findOne);

// Get random acronyms
router.get("/acronyms/random/:count", acronymsController.findRandom);

// Add new acronym
router.post("/acronyms", acronymsController.create);

// Insert dummy data into db
router.post("/acronyms/all", acronymsController.createAll);

// Update an acronym
router.put("/acronyms/:acronym", checkAuthorization, acronymsController.update);

// Delete an acronym
router.delete("/acronyms/:acronym", checkAuthorization, acronymsController.deleteOne);

module.exports = router;