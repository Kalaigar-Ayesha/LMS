import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, Clock, CheckCircle, Star } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import CourseCard from '../components/CourseCard';
import { courses } from '../data/courses';

const Home: React.FC = () => {
  const featuredCourses = courses.slice(0, 3);

  const features = [
    {
      icon: BookOpen,
      title: 'Expert-Designed Curriculum',
      description: 'Courses designed by medical professionals and NEET experts with years of experience.'
    },
    {
      icon: Users,
      title: '25,000+ Students',
      description: 'Join thousands of successful NEET aspirants who trust our platform for their preparation.'
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: '85% of our students clear NEET with top scores. Your success is our mission.'
    },
    {
      icon: Clock,
      title: 'Flexible Learning',
      description: 'Study at your own pace with 24/7 access to all course materials and resources.'
    }
  ];

  const stats = [
    { number: '25,000+', label: 'Students Enrolled' },
    { number: '50+', label: 'Expert Instructors' },
    { number: '200+', label: 'Hours of Content' },
    { number: '85%', label: 'Success Rate' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Your Journey to 
                <span className="text-blue-200"> Medical Excellence</span> Starts Here
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Master NEET with our comprehensive courses, expert guidance, and proven methodology. 
                Join thousands of successful medical aspirants who achieved their dreams with FutureDoctors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/courses">
                  <Button size="lg" className="w-full sm:w-auto bg-white text-blue-600 hover:bg-blue-50">
                    Explore Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600">
                    Start Free Trial
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Medical student studying"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-blue-600 p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <div>
                    <div className="font-bold text-lg">85% Success Rate</div>
                    <div className="text-sm text-gray-600">NEET 2024 Results</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose FutureDoctors?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We provide everything you need to excel in NEET with our comprehensive learning platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center h-full">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Start your NEET preparation with our most popular and highly-rated courses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/courses">
              <Button size="lg">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Student Success Stories
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Hear from our successful students who achieved their medical dreams
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                score: 'AIR 245',
                image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
                testimonial: 'FutureDoctors helped me understand complex concepts with their amazing visual explanations. The mock tests were exactly like the real NEET exam.'
              },
              {
                name: 'Arjun Kumar',
                score: 'AIR 156',
                image: 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=200',
                testimonial: 'The quality of content and the dedication of instructors is unmatched. I cleared NEET in my first attempt thanks to their guidance.'
              },
              {
                name: 'Sneha Patel',
                score: 'AIR 89',
                image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=200',
                testimonial: 'The systematic approach and regular assessments kept me motivated throughout my preparation. Highly recommended for serious aspirants.'
              }
            ].map((testimonial, index) => (
              <Card key={index} className="text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
                />
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                  "{testimonial.testimonial}"
                </p>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  {testimonial.score}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your NEET Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful students and take the first step towards your medical career
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Get Started Today
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
                Talk to Counselor
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;