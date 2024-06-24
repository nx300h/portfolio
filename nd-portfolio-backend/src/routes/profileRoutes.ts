import express from "express";
import {
  createProfile,
  getProfiles,
  updateProfile,
  deleteProfile,
} from "../controllers/profileController";

const router = express.Router();

// Create a new profile
router.post("/profiles", createProfile);

// Retrieve all profiles
router.get("/profiles", getProfiles);

// Update a profile
router.put("/profiles/:id", updateProfile);

// Delete a profile
router.delete("/profiles/:id", deleteProfile);

export default router;
