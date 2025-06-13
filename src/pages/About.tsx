
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';

const About = () => {
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
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about technology and driven by curiosity to solve complex problems
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="glass dark:glass-dark p-8 hover:shadow-2xl transition-all duration-300">
                <CardContent className="space-y-4">
                  <h2 className="text-2xl font-bold text-gradient">Background</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a B.Tech Computer Science Engineering graduate from D.Y. Patil Salokhe Nagar, 
                    Kolhapur, with a passion for technology and innovation. Currently working as a 
                    Technical Support Engineer at Tech Mahindra, I bring a unique blend of technical 
                    expertise and communication skills to every project.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My journey in technology started during my undergraduate studies, where I developed 
                    a strong foundation in programming, data structures, and software development. 
                    I've since expanded my expertise to include data analysis, SaaS development, 
                    and technical support.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-tech-blue to-tech-purple rounded-full opacity-20 animate-pulse-slow"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-tech-purple to-tech-teal rounded-full flex items-center justify-center text-white text-6xl font-bold">
                    VK
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Education & Values */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8">
            <Card className="glass dark:glass-dark p-8 hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full flex items-center justify-center group-hover:animate-float">
                    🎓
                  </div>
                  <h3 className="text-xl font-bold text-gradient">Education</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">B.Tech Computer Science Engineering</h4>
                    <p className="text-muted-foreground">D.Y. Patil Salokhe Nagar, Kolhapur</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    Specialized in software development, data structures, algorithms, and 
                    modern web technologies. Graduated with strong academic performance 
                    and practical project experience.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass dark:glass-dark p-8 hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-tech-purple to-tech-teal rounded-full flex items-center justify-center group-hover:animate-float">
                    💡
                  </div>
                  <h3 className="text-xl font-bold text-gradient">Core Values</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-tech-blue rounded-full"></span>
                    <span>Continuous learning and growth</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-tech-purple rounded-full"></span>
                    <span>Problem-solving mindset</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-tech-teal rounded-full"></span>
                    <span>Effective communication</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-tech-cyan rounded-full"></span>
                    <span>Team collaboration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants}>
            <Card className="glass dark:glass-dark p-8 hover:shadow-2xl transition-all duration-300">
              <CardContent className="space-y-6">
                <h3 className="text-2xl font-bold text-gradient text-center">Soft Skills & Strengths</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { skill: 'Communication', level: 95, color: 'from-tech-blue to-tech-purple' },
                    { skill: 'Problem Solving', level: 90, color: 'from-tech-purple to-tech-teal' },
                    { skill: 'Team Leadership', level: 85, color: 'from-tech-teal to-tech-cyan' },
                    { skill: 'Adaptability', level: 92, color: 'from-tech-cyan to-tech-blue' },
                    { skill: 'Critical Thinking', level: 88, color: 'from-tech-blue to-tech-teal' },
                    { skill: 'Time Management', level: 90, color: 'from-tech-purple to-tech-cyan' }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{item.skill}</span>
                        <span className="text-sm text-muted-foreground">{item.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                          initial={{ width: 0 }}
                          animate={{ width: `${item.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
