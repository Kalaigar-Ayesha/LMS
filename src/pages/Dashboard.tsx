import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, Clock, TrendingUp, PlayCircle, 
  Calendar, Target, ChevronRight, CheckCircle 
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { courses } from '../data/courses';
import Card from '../components/Card';
import Button from '../components/Button';
import ProgressBar from '../components/ProgressBar';

const Dashboard: React.FC = () => {
  const { user, updateProgress } = useAuth();
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'progress'>('overview');

  if (!user) return null;

  const enrolledCourses = courses.filter(course => user.enrolledCourses.includes(course.id));
  const totalProgress = enrolledCourses.length > 0 
    ? Math.round(enrolledCourses.reduce((sum, course) => sum + (user.progress[course.id] || 0), 0) / enrolledCourses.length)
    : 0;

  const completedCourses = enrolledCourses.filter(course => (user.progress[course.id] || 0) >= 100);
  const inProgressCourses = enrolledCourses.filter(course => {
    const progress = user.progress[course.id] || 0;
    return progress > 0 && progress < 100;
  });

  const upcomingLessons = [
    { course: 'Physics for NEET', lesson: 'Electromagnetic Induction', time: 'Today, 2:00 PM' },
    { course: 'Chemistry for NEET', lesson: 'Alcohols and Phenols', time: 'Tomorrow, 10:00 AM' },
    { course: 'Biology for NEET', lesson: 'Human Reproductive System', time: 'Dec 28, 3:00 PM' }
  ];

  const recentActivity = [
    { type: 'completed', course: 'Physics for NEET', lesson: 'Work, Energy & Power', time: '2 hours ago' },
    { type: 'started', course: 'Biology for NEET', lesson: 'Plant Kingdom Quiz', time: '1 day ago' },
    { type: 'enrolled', course: 'Mock Test Series 2024', lesson: '', time: '2 days ago' }
  ];

  const handleContinueLearning = (courseId: string) => {
    const currentProgress = user.progress[courseId] || 0;
    const newProgress = Math.min(100, currentProgress + 10);
    updateProgress(courseId, newProgress);
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: TrendingUp },
    { id: 'courses', label: 'My Courses', icon: BookOpen },
    { id: 'progress', label: 'Progress', icon: Target }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome back, {user.name}! 👋
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Continue your NEET preparation journey. You're doing great!
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                <BookOpen className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {enrolledCourses.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Enrolled Courses
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {completedCourses.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Completed
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mr-4">
                <Clock className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {inProgressCourses.length}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  In Progress
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                <Target className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">
                  {totalProgress}%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Average Progress
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Tab Navigation */}
        <div className="mb-8">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as 'overview' | 'courses' | 'progress')}
                    className={`py-2 px-1 border-b-2 font-medium text-sm flex items-center space-x-2 ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                        : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Continue Learning */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Continue Learning
                </h2>
                <PlayCircle className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>

              <div className="space-y-4">
                {inProgressCourses.slice(0, 3).map((course) => {
                  const progress = user.progress[course.id] || 0;
                  return (
                    <div key={course.id} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                            {course.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {course.instructor}
                          </p>
                        </div>
                        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                          {progress}%
                        </span>
                      </div>
                      
                      <ProgressBar progress={progress} size="sm" showLabel={false} className="mb-3" />
                      
                      <Button
                        size="sm"
                        onClick={() => handleContinueLearning(course.id)}
                        className="w-full"
                      >
                        Continue Learning
                      </Button>
                    </div>
                  );
                })}
              </div>

              {inProgressCourses.length === 0 && (
                <div className="text-center py-8">
                  <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    No courses in progress
                  </p>
                  <Link to="/courses">
                    <Button size="sm">Browse Courses</Button>
                  </Link>
                </div>
              )}
            </Card>

            {/* Upcoming Lessons */}
            <Card>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Upcoming Lessons
                </h2>
                <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>

              <div className="space-y-4">
                {upcomingLessons.map((lesson, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                        {lesson.lesson}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        {lesson.course} • {lesson.time}
                      </p>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                ))}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="lg:col-span-2">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Recent Activity
              </h2>
              
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activity.type === 'completed' ? 'bg-green-100 dark:bg-green-900/30' :
                      activity.type === 'started' ? 'bg-blue-100 dark:bg-blue-900/30' :
                      'bg-purple-100 dark:bg-purple-900/30'
                    }`}>
                      {activity.type === 'completed' && <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />}
                      {activity.type === 'started' && <PlayCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />}
                      {activity.type === 'enrolled' && <BookOpen className="h-4 w-4 text-purple-600 dark:text-purple-400" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 dark:text-white">
                        {activity.type === 'completed' && `Completed "${activity.lesson}" in ${activity.course}`}
                        {activity.type === 'started' && `Started "${activity.lesson}" in ${activity.course}`}
                        {activity.type === 'enrolled' && `Enrolled in ${activity.course}`}
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'courses' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course) => {
              const progress = user.progress[course.id] || 0;
              const isCompleted = progress >= 100;
              
              return (
                <Card key={course.id} hover>
                  <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      {isCompleted ? (
                        <div className="bg-green-600 text-white px-2 py-1 rounded text-xs flex items-center">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Completed
                        </div>
                      ) : (
                        <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs">
                          {progress}%
                        </div>
                      )}
                    </div>
                  </div>

                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    {course.instructor}
                  </p>

                  <ProgressBar progress={progress} size="sm" className="mb-4" />

                  <div className="flex gap-2">
                    <Link to={`/course/${course.id}`} className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </Link>
                    <Button
                      size="sm"
                      onClick={() => handleContinueLearning(course.id)}
                      className="flex-1"
                    >
                      {isCompleted ? 'Review' : 'Continue'}
                    </Button>
                  </div>
                </Card>
              );
            })}

            {enrolledCourses.length === 0 && (
              <div className="col-span-full text-center py-12">
                <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  No enrolled courses yet
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Start your NEET preparation by enrolling in our expert-designed courses
                </p>
                <Link to="/courses">
                  <Button>Browse Courses</Button>
                </Link>
              </div>
            )}
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="space-y-6">
            {/* Overall Progress */}
            <Card>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Overall Progress
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                    {totalProgress}%
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">Average Progress</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                    {completedCourses.length}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">Courses Completed</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">
                    {enrolledCourses.reduce((total, course) => total + course.lessons.length, 0)}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">Total Lessons</p>
                </div>
              </div>
            </Card>

            {/* Course Progress */}
            <Card>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Course Progress
              </h2>
              
              <div className="space-y-6">
                {enrolledCourses.map((course) => {
                  const progress = user.progress[course.id] || 0;
                  const completedLessons = Math.floor((progress / 100) * course.lessons.length);
                  
                  return (
                    <div key={course.id}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-gray-900 dark:text-white">
                          {course.title}
                        </h3>
                        <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                          <span>{completedLessons}/{course.lessons.length} lessons</span>
                          <span>•</span>
                          <span>{progress}%</span>
                        </div>
                      </div>
                      
                      <ProgressBar
                        progress={progress}
                        size="md"
                        color={progress >= 100 ? 'green' : progress >= 50 ? 'blue' : 'yellow'}
                        showLabel={false}
                      />
                    </div>
                  );
                })}
                
                {enrolledCourses.length === 0 && (
                  <div className="text-center py-8">
                    <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400">
                      No progress data available. Enroll in courses to start tracking your progress.
                    </p>
                  </div>
                )}
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;