import React from 'react';
import { BookOpen, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { publications } from '../data/mock';

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Research & Publications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {publications.map((pub) => (
            <Card key={pub.id} className="p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <BookOpen className="text-blue-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pub.title}</h3>
                  <p className="text-blue-600 font-medium mb-1">{pub.conference}</p>
                  <p className="text-gray-600 text-sm mb-2">{pub.institution}</p>
                  <p className="text-gray-600 text-sm mb-4">{pub.date}</p>
                  <p className="text-gray-700 leading-relaxed mb-6">{pub.description}</p>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.open(pub.link, '_blank')}
                  >
                    Read Publication
                    <ExternalLink className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;