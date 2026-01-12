import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';
import { Card } from './ui/card';
import { profileData } from '../data/mock';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-1">
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                <span className="text-6xl font-bold text-blue-600">AV</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <MapPin size={18} className="mr-2 text-blue-600" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center text-gray-700">
                  <Mail size={18} className="mr-2 text-blue-600" />
                  <a href={`mailto:${profileData.email}`} className="hover:text-blue-600">
                    {profileData.email}
                  </a>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone size={18} className="mr-2 text-blue-600" />
                  <span>{profileData.phone}</span>
                </div>
              </div>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card className="p-8 shadow-lg hover:shadow-xl transition-shadow h-full">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Professional Summary</h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-6">
                {profileData.summary}
              </p>
              <div className="grid sm:grid-cols-3 gap-6 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">9+</div>
                  <div className="text-gray-700 font-medium">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
                  <div className="text-gray-700 font-medium">Research Paper Published</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">6</div>
                  <div className="text-gray-700 font-medium">Certifications</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;