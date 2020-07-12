import mongoose from 'mongoose';
import grades from './grades.js';
const db = {};
db.mangoose = mongoose;
db.url = process.env.MONGODB;
db.Grades = grades(mongoose);
export { db };
