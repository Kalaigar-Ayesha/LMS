import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, BookOpen } from 'lucide-react';
import { Course } from '../data/courses';
import Card from './Card';
import Button from './Button';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <Card hover className="h-full flex flex-col">
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white px-2 py-1 rounded text-sm">
          ₹{course.price.toLocaleString()}
        </div>
        <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs">
          {course.category}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="mb-2">
          <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${
            course.level === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
            course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
            'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
          }`}>
            {course.level}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {course.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 flex-1">
          {course.description}
        </p>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{course.studentsEnrolled.toLocaleString()}</span>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {course.rating}
              </span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {course.instructor}
            </span>
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <BookOpen className="h-4 w-4 mr-1" />
              <span>{course.lessons.length} lessons</span>
            </div>
            <Link to={`/course/${course.id}`}>
              <Button size="sm">
                View Details
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;