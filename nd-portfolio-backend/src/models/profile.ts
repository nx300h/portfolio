import { DataTypes } from "sequelize";
import  sequelize  from "../config/database";

export const Profile = sequelize.define(
  "Profile",
  {
    name: DataTypes.STRING,
    bio: DataTypes.TEXT,
    location: DataTypes.STRING,
    nationality: DataTypes.STRING,
    availability: DataTypes.STRING,
    dateOfBirth: DataTypes.DATEONLY, // Changed to DATEONLY for storing only dates
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    github: DataTypes.STRING,
    twitter: DataTypes.STRING,
    linkedin: DataTypes.STRING,
    expectedSalary: DataTypes.DOUBLE,
    ownACar: DataTypes.BOOLEAN,
    haveDrivingLicense: DataTypes.BOOLEAN,
    noticePeriod: DataTypes.INTEGER,
    immigrationStatus: DataTypes.STRING,
    referees: DataTypes.TEXT, // Store as JSON or a string list
    willingToRelocate: DataTypes.BOOLEAN,
    languages: DataTypes.TEXT, // JSON or CSV
    skills: DataTypes.TEXT, // JSON or CSV
  },
  {
    timestamps: true,
  }
);
Profile.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    bio: {
      type: DataTypes.TEXT,
    },
    location: {
      type: DataTypes.STRING,
    },
    nationality: {
      type: DataTypes.STRING,
    },
    availability: {
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      type: DataTypes.DATEONLY,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    github: {
      type: DataTypes.STRING,
    },
    twitter: {
      type: DataTypes.STRING,
    },
    linkedin: {
      type: DataTypes.STRING,
    },
    expectedSalary: {
      type: DataTypes.DOUBLE,
    },
    ownACar: {
      type: DataTypes.BOOLEAN,
    },
    haveDrivingLicense: {
      type: DataTypes.BOOLEAN,
    },
    noticePeriod: {
      type: DataTypes.INTEGER,
    },
    immigrationStatus: {
      type: DataTypes.STRING,
    },
    referees: {
      type: DataTypes.TEXT,
    },
    willingToRelocate: {
      type: DataTypes.BOOLEAN,
    },
    languages: {
      type: DataTypes.TEXT,
    },
    skills: {
      type: DataTypes.TEXT,
    },
  },
  {
    sequelize,
    tableName: "profiles",
  }
);

export default Profile;
