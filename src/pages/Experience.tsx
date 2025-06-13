
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Building2, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const experiences = [
    {
      title: "Technical Support Engineer",
      company: "Tech Mahindra",
      location: "India",
      period: "2023 - Present",
      type: "Full-time",
      color: "from-blue-500 to-purple-600",
      responsibilities: [
        "Provide technical support for enterprise SaaS applications",
        "Troubleshoot complex technical issues and provide solutions",
        "Collaborate with development teams to resolve customer issues",
        "Create technical documentation and knowledge base articles",
        "Mentor junior team members and conduct training sessions"
      ],
      achievements: [
        "Reduced average ticket resolution time by 35%",
        "Maintained 98% customer satisfaction rating",
        "Led implementation of new support processes"
      ]
    },
    {
      title: "Data Analyst Intern",
      company: "Dievektor.tech",
      location: "Remote",
      period: "2022 - 2023",
      type: "Internship",
      color: "from-green-500 to-teal-600",
      responsibilities: [
        "Analyzed large datasets to identify trends and patterns",
        "Created interactive dashboards using Python and visualization tools",
        "Performed statistical analysis and predictive modeling",
        "Generated comprehensive reports for stakeholders",
        "Collaborated with cross-functional teams on data-driven projects"
      ],
      achievements: [
        "Developed automated reporting system saving 20 hours/week",
        "Improved data accuracy by 25% through quality checks",
        "Presented insights to senior management"
      ]
    }
  ];

  const certifications = [
    {
      title: "Technical Support Professional",
      issuer: "Tech Mahindra",
      year: "2023",
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Data Analysis with Python",
      issuer: "Coursera",
      year: "2022",
      color: "from-orange-500 to-red-600"
    },
    {
      title: "SQL Database Management",
      issuer: "Oracle",
      year: "2022",
      color: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold font-poppins text-gradient mb-4">
              Experience
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My professional journey in technical support and data analysis
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.01 }}
                className="group"
              >
                <Card className="glass dark:glass-dark hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${exp.color}`}></div>
                  <CardHeader className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl font-bold">{exp.title}</CardTitle>
                        <div className="flex items-center space-x-4 text-muted-foreground">
                          <div className="flex items-center space-x-2">
                            <Building2 className="w-4 h-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} text-white`}>
                          {exp.type}
                        </span>
                      </div>
                      <div className={`w-16 h-16 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center group-hover:animate-float`}>
                        <Building2 className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <span className="w-2 h-2 bg-tech-blue rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <Award className="w-4 h-4 text-tech-blue mt-1 flex-shrink-0" />
                            <span className="text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gradient text-center mb-8">Certifications</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <Card className="glass dark:glass-dark hover:shadow-xl transition-all duration-300 text-center">
                    <CardContent className="p-6 space-y-4">
                      <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center group-hover:animate-float`}>
                        <Award className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg">{cert.title}</h3>
                      <p className="text-muted-foreground">{cert.issuer}</p>
                      <p className="text-sm text-tech-blue font-medium">{cert.year}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
