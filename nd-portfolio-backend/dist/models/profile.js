"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
exports.Profile = database_1.default.define("Profile", {
    name: sequelize_1.DataTypes.STRING,
    bio: sequelize_1.DataTypes.TEXT,
    location: sequelize_1.DataTypes.STRING,
    nationality: sequelize_1.DataTypes.STRING,
    availability: sequelize_1.DataTypes.STRING,
    dateOfBirth: sequelize_1.DataTypes.DATEONLY, // Changed to DATEONLY for storing only dates
    email: sequelize_1.DataTypes.STRING,
    phone: sequelize_1.DataTypes.STRING,
    address: sequelize_1.DataTypes.STRING,
    github: sequelize_1.DataTypes.STRING,
    twitter: sequelize_1.DataTypes.STRING,
    linkedin: sequelize_1.DataTypes.STRING,
    expectedSalary: sequelize_1.DataTypes.DOUBLE,
    ownACar: sequelize_1.DataTypes.BOOLEAN,
    haveDrivingLicense: sequelize_1.DataTypes.BOOLEAN,
    noticePeriod: sequelize_1.DataTypes.INTEGER,
    immigrationStatus: sequelize_1.DataTypes.STRING,
    referees: sequelize_1.DataTypes.TEXT, // Store as JSON or a string list
    willingToRelocate: sequelize_1.DataTypes.BOOLEAN,
    languages: sequelize_1.DataTypes.TEXT, // JSON or CSV
    skills: sequelize_1.DataTypes.TEXT, // JSON or CSV
}, {
    timestamps: true,
});
exports.Profile.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
    },
    bio: {
        type: sequelize_1.DataTypes.TEXT,
    },
    location: {
        type: sequelize_1.DataTypes.STRING,
    },
    nationality: {
        type: sequelize_1.DataTypes.STRING,
    },
    availability: {
        type: sequelize_1.DataTypes.STRING,
    },
    dateOfBirth: {
        type: sequelize_1.DataTypes.DATEONLY,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
    },
    github: {
        type: sequelize_1.DataTypes.STRING,
    },
    twitter: {
        type: sequelize_1.DataTypes.STRING,
    },
    linkedin: {
        type: sequelize_1.DataTypes.STRING,
    },
    expectedSalary: {
        type: sequelize_1.DataTypes.DOUBLE,
    },
    ownACar: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    haveDrivingLicense: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    noticePeriod: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    immigrationStatus: {
        type: sequelize_1.DataTypes.STRING,
    },
    referees: {
        type: sequelize_1.DataTypes.TEXT,
    },
    willingToRelocate: {
        type: sequelize_1.DataTypes.BOOLEAN,
    },
    languages: {
        type: sequelize_1.DataTypes.TEXT,
    },
    skills: {
        type: sequelize_1.DataTypes.TEXT,
    },
}, {
    sequelize: database_1.default,
    tableName: "profiles",
});
exports.default = exports.Profile;
