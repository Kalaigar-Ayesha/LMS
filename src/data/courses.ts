export interface Lesson {
  id: string;
  title: string;
  duration: string;
  type: 'video' | 'text' | 'quiz';
  completed?: boolean;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  instructor: string;
  rating: number;
  studentsEnrolled: number;
  price: number;
  image: string;
  category: string;
  lessons: Lesson[];
  tags: string[];
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Physics for NEET - Complete Course',
    description: 'Master Physics concepts for NEET with comprehensive theory and practice',
    longDescription: 'This comprehensive Physics course covers all topics required for NEET examination. From basic mechanics to complex electromagnetic theory, every concept is explained with real-world examples and solved problems. The course includes 150+ video lectures, practice questions, and mock tests.',
    duration: '120 hours',
    level: 'Intermediate',
    instructor: 'Dr. Rajesh Kumar',
    rating: 4.8,
    studentsEnrolled: 12500,
    price: 2999,
    image: 'https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Physics',
    tags: ['NEET', 'Physics', 'Medical Entrance', 'Complete Course'],
    lessons: [
      { id: '1-1', title: 'Introduction to Mechanics', duration: '45 min', type: 'video' },
      { id: '1-2', title: 'Laws of Motion', duration: '60 min', type: 'video' },
      { id: '1-3', title: 'Work, Energy & Power', duration: '55 min', type: 'video' },
      { id: '1-4', title: 'Practice Quiz - Mechanics', duration: '30 min', type: 'quiz' },
      { id: '1-5', title: 'Gravitation', duration: '50 min', type: 'video' },
    ]
  },
  {
    id: '2',
    title: 'Chemistry for NEET - Organic Chemistry',
    description: 'Master Organic Chemistry with systematic approach and problem-solving techniques',
    longDescription: 'Dive deep into Organic Chemistry with this specialized course designed for NEET aspirants. Learn reaction mechanisms, nomenclature, and solve complex problems with step-by-step guidance. Includes 100+ reactions, practice problems, and revision notes.',
    duration: '80 hours',
    level: 'Advanced',
    instructor: 'Dr. Priya Sharma',
    rating: 4.9,
    studentsEnrolled: 8900,
    price: 2499,
    image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Chemistry',
    tags: ['NEET', 'Organic Chemistry', 'Reactions', 'Problem Solving'],
    lessons: [
      { id: '2-1', title: 'Basic Concepts of Organic Chemistry', duration: '40 min', type: 'video' },
      { id: '2-2', title: 'Hydrocarbons', duration: '65 min', type: 'video' },
      { id: '2-3', title: 'Haloalkanes and Haloarenes', duration: '70 min', type: 'video' },
      { id: '2-4', title: 'Practice Problems', duration: '45 min', type: 'text' },
    ]
  },
  {
    id: '3',
    title: 'Biology for NEET - Plant Kingdom',
    description: 'Comprehensive study of Plant Kingdom with detailed classification and examples',
    longDescription: 'Explore the fascinating world of plants with this detailed course on Plant Kingdom. Perfect for NEET preparation, this course covers classification, morphology, anatomy, and physiology of plants with beautiful illustrations and diagrams.',
    duration: '60 hours',
    level: 'Beginner',
    instructor: 'Dr. Anjali Verma',
    rating: 4.7,
    studentsEnrolled: 15200,
    price: 1999,
    image: 'https://images.pexels.com/photos/1153213/pexels-photo-1153213.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biology',
    tags: ['NEET', 'Biology', 'Plant Kingdom', 'Classification'],
    lessons: [
      { id: '3-1', title: 'Introduction to Plant Kingdom', duration: '35 min', type: 'video' },
      { id: '3-2', title: 'Algae', duration: '45 min', type: 'video' },
      { id: '3-3', title: 'Bryophytes', duration: '40 min', type: 'video' },
      { id: '3-4', title: 'Plant Classification Quiz', duration: '25 min', type: 'quiz' },
    ]
  },
  {
    id: '4',
    title: 'NEET Mock Test Series 2024',
    description: 'Complete mock test series with detailed analysis and performance tracking',
    longDescription: 'Prepare for NEET 2024 with our comprehensive mock test series. Includes 50+ full-length tests, chapter-wise tests, and detailed performance analysis. Each test is designed to match the latest NEET pattern and difficulty level.',
    duration: '40 hours',
    level: 'Intermediate',
    instructor: 'NEET Expert Team',
    rating: 4.6,
    studentsEnrolled: 25000,
    price: 1499,
    image: 'https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Test Series',
    tags: ['NEET', 'Mock Tests', '2024', 'Practice'],
    lessons: [
      { id: '4-1', title: 'Full Length Test 1', duration: '180 min', type: 'quiz' },
      { id: '4-2', title: 'Physics Chapter Test 1', duration: '60 min', type: 'quiz' },
      { id: '4-3', title: 'Chemistry Chapter Test 1', duration: '60 min', type: 'quiz' },
      { id: '4-4', title: 'Biology Chapter Test 1', duration: '60 min', type: 'quiz' },
    ]
  },
  {
    id: '5',
    title: 'Human Anatomy & Physiology',
    description: 'Detailed study of human body systems for NEET Biology preparation',
    longDescription: 'Master human anatomy and physiology with this comprehensive course. Covers all body systems with 3D models, animations, and clinical correlations. Essential for NEET Biology preparation with high-yield topics and mnemonics.',
    duration: '90 hours',
    level: 'Intermediate',
    instructor: 'Dr. Suresh Gupta',
    rating: 4.8,
    studentsEnrolled: 9800,
    price: 2799,
    image: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Biology',
    tags: ['NEET', 'Human Biology', 'Anatomy', 'Physiology'],
    lessons: [
      { id: '5-1', title: 'Introduction to Human Body', duration: '30 min', type: 'video' },
      { id: '5-2', title: 'Digestive System', duration: '75 min', type: 'video' },
      { id: '5-3', title: 'Respiratory System', duration: '65 min', type: 'video' },
      { id: '5-4', title: 'Circulatory System', duration: '80 min', type: 'video' },
    ]
  },
  {
    id: '6',
    title: 'Inorganic Chemistry Mastery',
    description: 'Complete inorganic chemistry course with periodic trends and reactions',
    longDescription: 'Master inorganic chemistry with systematic study of periodic table, chemical bonding, and important reactions. This course focuses on high-yield topics for NEET with memory techniques and problem-solving strategies.',
    duration: '70 hours',
    level: 'Intermediate',
    instructor: 'Dr. Vikram Singh',
    rating: 4.7,
    studentsEnrolled: 11200,
    price: 2299,
    image: 'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'Chemistry',
    tags: ['NEET', 'Inorganic Chemistry', 'Periodic Table', 'Chemical Bonding'],
    lessons: [
      { id: '6-1', title: 'Periodic Table and Properties', duration: '55 min', type: 'video' },
      { id: '6-2', title: 'Chemical Bonding', duration: '70 min', type: 'video' },
      { id: '6-3', title: 'Coordination Compounds', duration: '60 min', type: 'video' },
      { id: '6-4', title: 'Practice Test', duration: '40 min', type: 'quiz' },
    ]
  }
];