import mongoose from 'mongoose';
import ExperienceSchema from '../models/experience.modal';
import SlotSchema from "../models/slot.modal" ; 
import dotenv from 'dotenv';
import { TIME_SLOTS_BY_CATEGORY } from '../constants/categories';

dotenv.config();

// Helper function to generate dates for next 15 days
const getNext15Days = () => {
  const dates = [];
  for (let i = 1; i <= 15; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    // Format: YYYY-MM-DD
    dates.push(date.toISOString().split('T')[0]); 
  }
  return dates;
};

// Helper function to get random booked count
const getRandomBookedCount = (maxCapacity: number) => {
  const options = [0, 0, 0, Math.floor(maxCapacity * 0.1), Math.floor(maxCapacity * 0.2), Math.floor(maxCapacity * 0.4), maxCapacity];
  return options[Math.floor(Math.random() * options.length)];
};

const seedSlots = async () => {
  try {
    await mongoose.connect('mongodb+srv://bontinue_db_user:tPw9u2FmB26YwOHR@cluster0.dsjki4m.mongodb.net/?appName=Cluster0');
    console.log('✅ Connected to MongoDB');

    // Get all experiences
    const experiences = await ExperienceSchema.find({});
    
    if (experiences.length === 0) {
      console.log('❌ No experiences found. Please seed experiences first!');
      process.exit(1);
    }

    console.log(`📦 Found ${experiences.length} experiences`);

    // Clear existing slots
    await SlotSchema.deleteMany({});
    console.log('🗑️  Cleared existing slots');

    const allSlots = [];
    // Get dates for the next 15 days (we only need the dates, but will stop early)
    const dates = getNext15Days();

    // Create a limited number of slots for each experience (10 to 12)
    for (const experience of experiences) {
      // Determine the target number of slots (10, 11, or 12)
      const targetSlots = Math.floor(Math.random() * (12 - 10 + 1)) + 10;
      let slotsCount = 0;

      const slotsForCategory = TIME_SLOTS_BY_CATEGORY[experience.category as keyof typeof TIME_SLOTS_BY_CATEGORY] || TIME_SLOTS_BY_CATEGORY.Adventure;
      
      // Loop through dates and time slots, but break once the target is reached
      for (const date of dates) {
        for (const timeSlot of slotsForCategory) {
          if (slotsCount >= targetSlots) {
            break; // Target hit, exit inner loop
          }

          const bookedCount = getRandomBookedCount(experience.maxGroupSize);
          
          allSlots.push({
            experienceId: experience._id,
            date,
            startTime: timeSlot.startTime,
            endTime: timeSlot.endTime,
            totalCapacity: experience.maxGroupSize,
            bookedCount,
            availableSpots: experience.maxGroupSize - bookedCount, 
            isActive: bookedCount < experience.maxGroupSize
          });

          slotsCount++;
        }

        if (slotsCount >= targetSlots) {
          break; // Target hit, exit outer loop (dates)
        }
      }
    }

    // Insert all slots
    const createdSlots = await SlotSchema.insertMany(allSlots);
    console.log(`✅ Seeded ${createdSlots.length} slots in total`);

    // Show summary
    console.log('\n📊 Summary:');
    console.log(`   Total Experiences: ${experiences.length}`);
    console.log(`   Total Slots: ${createdSlots.length}`);
    console.log(`   Average Slots per Experience: ~${Math.floor(createdSlots.length / experiences.length)}`);

    mongoose.connection.close();
    console.log('\n✅ Database connection closed');
  } catch (error) {
    console.error('❌ Error seeding slots:', error);
    process.exit(1);
  }
};

seedSlots();
