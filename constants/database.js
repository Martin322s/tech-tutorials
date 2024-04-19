import mongoose from 'mongoose';
import { CONNECTION_STRING } from './variables';

export const databaseConnection = () => mongoose.connect(CONNECTION_STRING);