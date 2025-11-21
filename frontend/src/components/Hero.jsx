import React from 'react';
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { profileData } from '../data/mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-left max-w-4xl">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {profileData.name}
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-6 font-medium">
            {profileData.title}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-3xl leading-relaxed">
            {profileData.tagline}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <Button
              onClick={() => scrollToSection('#projects')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 text-lg"
            >
              View My Work
              <ArrowRight className="ml-2" size={20} />
            </Button>
            <Button
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-6 text-lg"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>
          
          <div className="flex items-center gap-6">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={28} />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;