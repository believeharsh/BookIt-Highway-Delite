import { Request, Response } from 'express';
import ExperienceSchema from '../models/experience.modal' 
import SlotSchema from '../models/slot.modal' ; 

// GET /api/experiences - Get all experiences with filters and search
export const getAllExperiences = async (req: Request, res: Response) => {
  try {
    const { search, category, minPrice, maxPrice, location } = req.query;

    // Build filter object
    let filter: any = {};

    // Search by title or description
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    // Filter by category
    if (category) {
      filter.category = category;
    }

    // Filter by price range
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.$gte = Number(minPrice);
      if (maxPrice) filter.price.$lte = Number(maxPrice);
    }

    // Filter by location (city)
    if (location) {
      filter['location.city'] = { $regex: location, $options: 'i' };
    }

    const experiences = await ExperienceSchema.find(filter).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: experiences.length,
      data: experiences
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching experiences',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// GET /api/experiences/:id - Get single experience with available slots
export const getExperienceById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Get experience
    const experience = await ExperienceSchema.findById(id);

    if (!experience) {
      return res.status(404).json({
        success: false,
        message: 'Experience not found'
      });
    }

    // Get available slots for this experience (only future dates and active slots)
    const today = new Date().toISOString().split('T')[0];
    const slots = await SlotSchema.find({
      experienceId: id,
      date: { $gte: today },
      isActive: true
    }).sort({ date: 1, startTime: 1 });

    res.status(200).json({
      success: true,
      data: {
        experience,
        availableSlots: slots
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching experience details',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

// GET /api/experiences/categories - Get all unique categories
export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await ExperienceSchema.distinct('category');
    
    res.status(200).json({
      success: true,
      data: categories
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching categories',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};