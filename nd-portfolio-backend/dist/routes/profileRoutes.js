"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const profileController_1 = require("../controllers/profileController");
const router = express_1.default.Router();
// Create a new profile
router.post("/profiles", profileController_1.createProfile);
// Retrieve all profiles
router.get("/profiles", profileController_1.getProfiles);
// Update a profile
router.put("/profiles/:id", profileController_1.updateProfile);
// Delete a profile
router.delete("/profiles/:id", profileController_1.deleteProfile);
exports.default = router;
