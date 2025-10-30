import mongoose from 'mongoose';
import ExperienceSchema from '../models/experience.modal';
import { sampleExperiences } from '../constants/ExperienceData';
import dotenv from 'dotenv';

dotenv.config();

const seedExperiences = async () => {
  try {

    await mongoose.connect("mongodb+srv://bontinue_db_user:tPw9u2FmB26YwOHR@cluster0.dsjki4m.mongodb.net/?appName=Cluster0");
    console.log('✅ Connected to MongoDB');

    // Clear existing experiences
    await ExperienceSchema.deleteMany({});
    console.log('🗑️  Cleared existing experiences');

    // Insert sample experiences
    const createdExperiences = await ExperienceSchema.insertMany(sampleExperiences);
    console.log(`✅ Seeded ${createdExperiences.length} experiences`);

    // Log the IDs for reference
    console.log('\n📋 Created Experience IDs:');
    createdExperiences.forEach((exp, index) => {
      console.log(`${index + 1}. ${exp.title} - ID: ${exp._id}`);
    });

    mongoose.connection.close();
    console.log('\n✅ Database connection closed');
  } catch (error) {
    console.error('❌ Error seeding experiences:', error);
    process.exit(1);
  }
};

seedExperiences();