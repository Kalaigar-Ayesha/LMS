import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitted(true);
    setLoading(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@futuredoctors.com',
      description: 'Send us an email anytime!'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 98765 43210',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Delhi, India',
      description: 'Come say hello at our office'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon - Fri: 8am - 6pm',
      description: 'Saturday: 9am - 4pm'
    }
  ];

  const faqItems = [
    {
      question: 'How do I enroll in a course?',
      answer: 'Simply browse our courses, select the one you want, and click "Enroll Now". You\'ll need to create an account if you don\'t have one.'
    },
    {
      question: 'Are the courses updated for NEET 2024?',
      answer: 'Yes, all our courses are regularly updated to match the latest NEET syllabus and exam pattern.'
    },
    {
      question: 'Can I access courses on mobile?',
      answer: 'Absolutely! Our platform is fully responsive and works perfectly on all devices including phones and tablets.'
    },
    {
      question: 'What if I need help during the course?',
      answer: 'We provide 24/7 support through our help desk. You can also interact with instructors and fellow students in course discussions.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'Yes, we offer a 30-day money-back guarantee if you\'re not satisfied with your course.'
    }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Have questions about our courses or need support? We're here to help you succeed in your NEET preparation journey.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card>
            <div className="flex items-center mb-6">
              <MessageSquare className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Send us a Message
              </h2>
            </div>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
                <Button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      subject: '',
                      message: '',
                      type: 'general'
                    });
                  }}
                  variant="outline"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="billing">Billing & Payments</option>
                    <option value="course">Course Related</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                <Button type="submit" loading={loading} className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            )}
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {info.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium mb-1">
                          {info.details}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Response Time */}
            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
              <div className="text-center">
                <Clock className="h-8 w-8 text-blue-600 dark:text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-2">
                  Quick Response Time
                </h3>
                <p className="text-blue-700 dark:text-blue-300 text-sm">
                  We typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((faq, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Can't find what you're looking for?
            </p>
            <Button variant="outline">
              View All FAQs
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Contact;