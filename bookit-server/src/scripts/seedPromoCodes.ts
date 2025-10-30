import mongoose from 'mongoose';
import PromoCodeSchema from "../models/promoCode.modal"; 
import dotenv from 'dotenv';

dotenv.config();

const promoCodes = [
  {
    code: 'SAVE10',
    discountType: 'percentage',
    discountValue: 10,
    maxDiscount: 500,
    minOrderValue: 1000,
    isActive: true,
    validFrom: new Date('2025-10-01'),
    validUntil: new Date('2025-12-31'),
    usageLimit: 1000,
    usedCount: 0
  },
  {
    code: 'FLAT100',
    discountType: 'fixed',
    discountValue: 100,
    minOrderValue: 500,
    isActive: true,
    validFrom: new Date('2025-10-01'),
    validUntil: new Date('2025-12-31'),
    usageLimit: 500,
    usedCount: 0
  },
  {
    code: 'WELCOME20',
    discountType: 'percentage',
    discountValue: 20,
    maxDiscount: 1000,
    minOrderValue: 2000,
    isActive: true,
    validFrom: new Date('2025-10-01'),
    validUntil: new Date('2025-11-30'),
    usedCount: 0
  },
  {
    code: 'FIRST500',
    discountType: 'fixed',
    discountValue: 500,
    minOrderValue: 3000,
    isActive: true,
    validFrom: new Date('2025-10-01'),
    validUntil: new Date('2025-12-31'),
    usageLimit: 100,
    usedCount: 0
  }
];

const seedPromoCodes = async () => {
  try {
    await mongoose.connect('mongodb+srv://bontinue_db_user:tPw9u2FmB26YwOHR@cluster0.dsjki4m.mongodb.net/?appName=Cluster0');
    console.log('✅ Connected to MongoDB');

    await PromoCodeSchema.deleteMany({});
    console.log('🗑️  Cleared existing promo codes');

    const created = await PromoCodeSchema.insertMany(promoCodes);
    console.log(`✅ Seeded ${created.length} promo codes`);

    console.log('\n📋 Promo Codes:');
    created.forEach(code => {
      console.log(`   ${code.code} - ${code.discountType} ${code.discountValue}`);
    });

    mongoose.connection.close();
    console.log('\n✅ Database connection closed');
  } catch (error) {
    console.error('❌ Error seeding promo codes:', error);
    process.exit(1);
  }
};

seedPromoCodes();