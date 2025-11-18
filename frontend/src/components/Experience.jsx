import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card } from './ui/card';
import { experience, publications, education, certifications } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <Briefcase className="mr-3 text-blue-600" size={28} />
            Work Experience
          </h3>
          <div className="space-y-6">
            {experience.map((job) => (
              <Card key={job.id} className="p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-1">{job.title}</h4>
                    <p className="text-blue-600 font-medium">{job.company}</p>
                    <p className="text-gray-600 text-sm">{job.location}</p>
                  </div>
                  <div className="flex items-center text-gray-600 mt-2 md:mt-0">
                    <Calendar size={16} className="mr-2" />
                    <span className="text-sm">{job.period}</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  {job.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>
            <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
              <h4 className="text-xl font-bold text-gray-900 mb-2">{education.degree}</h4>
              <p className="text-blue-600 font-medium mb-1">{education.institution}</p>
              <p className="text-gray-600 text-sm mb-2">{education.location}</p>
              <div className="flex items-center text-gray-600 text-sm">
                <Calendar size={16} className="mr-2" />
                <span>{education.period}</span>
              </div>
            </Card>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <Card key={cert.id} className="p-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  <h4 className="font-bold text-gray-900 mb-1">{cert.name}</h4>
                  <p className="text-sm text-blue-600">{cert.issuer}</p>
                  <p className="text-sm text-gray-600">{cert.date}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;