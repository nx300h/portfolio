"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProfile = exports.updateProfile = exports.getProfiles = exports.createProfile = void 0;
const profile_1 = require("../models/profile");
const createProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profile = yield profile_1.Profile.create(req.body);
        res.status(201).send(profile);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message);
        }
        else {
            res.status(500).send("Unknown error");
        }
    }
});
exports.createProfile = createProfile;
const getProfiles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const profiles = yield profile_1.Profile.findAll();
        res.send(profiles);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message);
        }
        else {
            res.status(500).send("Unknown error");
        }
    }
});
exports.getProfiles = getProfiles;
const updateProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const [updated] = yield profile_1.Profile.update(req.body, { where: { id } });
        if (updated) {
            const updatedProfile = yield profile_1.Profile.findOne({ where: { id } });
            res.status(200).send(updatedProfile);
        }
        else {
            throw new Error("Profile not found");
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message);
        }
        else {
            res.status(500).send("Profile not found");
        }
    }
});
exports.updateProfile = updateProfile;
const deleteProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deleted = yield profile_1.Profile.destroy({ where: { id } });
        if (deleted) {
            res.status(204).send("Profile deleted");
        }
        else {
            throw new Error("Profile not found");
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message);
        }
        else {
            res.status(500).send("Profile not found");
        }
    }
});
exports.deleteProfile = deleteProfile;
