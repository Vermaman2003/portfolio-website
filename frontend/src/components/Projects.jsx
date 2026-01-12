import React, { useState } from 'react';
import { ExternalLink, Code2, TrendingUp } from 'lucide-react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { projects } from '../data/mock';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my data science and machine learning projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Code2 className="text-blue-600 group-hover:text-white transition-colors" size={24} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    {tech}
                  </Badge>
                ))}
                {project.technologies.length > 3 && (
                  <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                    +{project.technologies.length - 3}
                  </Badge>
                )}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">{project.date}</span>
                <ExternalLink className="text-blue-600 group-hover:translate-x-1 transition-transform" size={18} />
              </div>
            </Card>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <Card
              className="max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedProject.title}</h3>
                <p className="text-gray-600">{selectedProject.date}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <Code2 className="mr-2 text-blue-600" size={20} />
                  Project Overview
                </h4>
                <p className="text-gray-700 leading-relaxed">{selectedProject.longDescription}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} className="bg-blue-600 text-white hover:bg-blue-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                  <TrendingUp className="mr-2 text-blue-600" size={20} />
                  Key Outcomes
                </h4>
                <ul className="space-y-2">
                  {selectedProject.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-4">
                {selectedProject.link !== '#' && (
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => window.open(selectedProject.link, '_blank')}
                  >
                    View Publication
                    <ExternalLink className="ml-2" size={16} />
                  </Button>
                )}
                <Button variant="outline" onClick={() => setSelectedProject(null)}>
                  Close
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;