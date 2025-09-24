import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Clock, Star, BookOpen, Play, FileText, 
  HelpCircle, ArrowLeft, Award, Calendar, CheckCircle 
} from 'lucide-react';
import { courses } from '../data/courses';
import { useAuth } from '../context/AuthContext';
import Button from '../components/Button';
import Card from '../components/Card';
import Modal from '../components/Modal';

const CourseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { user, enrollInCourse } = useAuth();
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  
  const course = courses.find(c => c.id === id);
  
  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Course Not Found
          </h1>
          <Link to="/courses">
            <Button>Back to Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  const isEnrolled = user?.enrolledCourses.includes(course.id);
  const progress = user?.progress[course.id] || 0;

  const handleEnroll = () => {
    if (user) {
      enrollInCourse(course.id);
      setShowEnrollModal(false);
    }
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case 'video':
        return Play;
      case 'text':
        return FileText;
      case 'quiz':
        return HelpCircle;
      default:
        return BookOpen;
    }
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link
            to="/courses"
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Courses
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <div className="mb-8">
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden mb-6">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  {isEnrolled && (
                    <div className="text-center text-white">
                      <CheckCircle className="h-12 w-12 mx-auto mb-2 text-green-400" />
                      <span className="text-lg font-semibold">Enrolled</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                  {course.category}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  course.level === 'Beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                  course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                  'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                }`}>
                  {course.level}
                </span>
                {course.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {course.title}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                  <span className="font-medium">{course.rating}</span>
                  <span className="ml-1">({course.studentsEnrolled.toLocaleString()} students)</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  <span>{course.lessons.length} lessons</span>
                </div>
                <div className="flex items-center">
                  <Award className="h-4 w-4 mr-1" />
                  <span>By {course.instructor}</span>
                </div>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {course.longDescription}
              </p>
            </div>

            {/* Course Content */}
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Course Content
              </h2>
              <div className="space-y-4">
                {course.lessons.map((lesson, index) => {
                  const Icon = getLessonIcon(lesson.type);
                  const isCompleted = isEnrolled && Math.random() > 0.7; // Mock completion status
                  
                  return (
                    <div
                      key={lesson.id}
                      className={`flex items-center p-4 rounded-lg border transition-colors ${
                        isEnrolled
                          ? 'border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer'
                          : 'border-gray-200 dark:border-gray-600 opacity-60'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                        isCompleted
                          ? 'bg-green-100 dark:bg-green-900'
                          : 'bg-gray-100 dark:bg-gray-700'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                        ) : (
                          <Icon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
                        )}
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {index + 1}. {lesson.title}
                        </h3>
                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mt-1">
                          <span className="capitalize mr-2">{lesson.type}</span>
                          <span>• {lesson.duration}</span>
                          {isCompleted && <span className="ml-2 text-green-600 dark:text-green-400">• Completed</span>}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <Card>
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    ₹{course.price.toLocaleString()}
                  </div>
                  {course.price > 2000 && (
                    <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                      ₹{Math.round(course.price * 1.3).toLocaleString()}
                    </div>
                  )}
                </div>

                {isEnrolled ? (
                  <div className="space-y-4">
                    <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 text-center">
                      <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400 mx-auto mb-2" />
                      <span className="text-green-800 dark:text-green-300 font-medium">
                        You're enrolled in this course!
                      </span>
                    </div>
                    
                    {progress > 0 && (
                      <div>
                        <div className="flex justify-between text-sm font-medium mb-1">
                          <span className="text-gray-700 dark:text-gray-300">Progress</span>
                          <span className="text-blue-600 dark:text-blue-400">{progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                      </div>
                    )}
                    
                    <Link to="/dashboard">
                      <Button className="w-full">
                        Continue Learning
                      </Button>
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Button
                      className="w-full"
                      onClick={() => user ? setShowEnrollModal(true) : null}
                    >
                      {user ? 'Enroll Now' : 'Login to Enroll'}
                    </Button>
                    
                    {!user && (
                      <div className="text-center">
                        <Link
                          to="/signup"
                          className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
                        >
                          Create account to access courses
                        </Link>
                      </div>
                    )}
                  </div>
                )}

                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    This course includes:
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-center">
                      <Play className="h-4 w-4 mr-2" />
                      {course.lessons.filter(l => l.type === 'video').length} video lectures
                    </li>
                    <li className="flex items-center">
                      <FileText className="h-4 w-4 mr-2" />
                      Study materials & notes
                    </li>
                    <li className="flex items-center">
                      <HelpCircle className="h-4 w-4 mr-2" />
                      Practice quizzes
                    </li>
                    <li className="flex items-center">
                      <Award className="h-4 w-4 mr-2" />
                      Certificate of completion
                    </li>
                    <li className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      Lifetime access
                    </li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Enrollment Modal */}
      <Modal
        isOpen={showEnrollModal}
        onClose={() => setShowEnrollModal(false)}
        title="Confirm Enrollment"
      >
        <div className="text-center">
          <div className="mb-4">
            <BookOpen className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Enroll in {course.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Get lifetime access to all course materials and start learning immediately.
            </p>
          </div>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              ₹{course.price.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              One-time payment • Lifetime access
            </div>
          </div>

          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => setShowEnrollModal(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button onClick={handleEnroll} className="flex-1">
              Confirm Enrollment
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CourseDetails;