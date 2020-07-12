import mongoose from 'mongoose';
import gradesModel from './grades.js';
const db = {};
db.mangoose = mongoose;
db.url = process.env.MONGODB;
db.Grades = gradesModel();
export { db };
