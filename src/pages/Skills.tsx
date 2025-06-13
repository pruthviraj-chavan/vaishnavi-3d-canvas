
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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

  const technicalSkills = [
    { name: 'JavaScript', level: 90, category: 'Programming', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Python', level: 85, category: 'Programming', color: 'from-blue-400 to-blue-600' },
    { name: 'React.js', level: 88, category: 'Frontend', color: 'from-blue-400 to-cyan-400' },
    { name: 'Node.js', level: 80, category: 'Backend', color: 'from-green-400 to-green-600' },
    { name: 'Data Analysis', level: 85, category: 'Analytics', color: 'from-purple-400 to-purple-600' },
    { name: 'SQL', level: 90, category: 'Database', color: 'from-orange-400 to-orange-600' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend', color: 'from-red-400 to-pink-400' },
    { name: 'Git/GitHub', level: 88, category: 'Tools', color: 'from-gray-400 to-gray-600' },
    { name: 'Tailwind CSS', level: 92, category: 'Frontend', color: 'from-teal-400 to-teal-600' },
    { name: 'TypeScript', level: 82, category: 'Programming', color: 'from-blue-500 to-blue-700' },
    { name: 'MongoDB', level: 78, category: 'Database', color: 'from-green-500 to-green-700' },
    { name: 'REST APIs', level: 85, category: 'Backend', color: 'from-indigo-400 to-indigo-600' }
  ];

  const categories = ['Programming', 'Frontend', 'Backend', 'Database', 'Analytics', 'Tools'];

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
              Skills & Expertise
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and professional capabilities
            </p>
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-12">
            {categories.map((category) => (
              <motion.div key={category} variants={itemVariants}>
                <h2 className="text-2xl font-bold text-gradient mb-6">{category}</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {technicalSkills
                    .filter(skill => skill.category === category)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05 }}
                        className="group"
                      >
                        <Card className="glass dark:glass-dark p-6 hover:shadow-2xl transition-all duration-300 h-full">
                          <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                              <h3 className="font-semibold text-lg">{skill.name}</h3>
                              <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="space-y-2">
                              <div className="h-3 bg-muted rounded-full overflow-hidden">
                                <motion.div
                                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.level}%` }}
                                  transition={{ duration: 1.5, delay: index * 0.1 }}
                                />
                              </div>
                              <div className="flex justify-between text-xs text-muted-foreground">
                                <span>Beginner</span>
                                <span>Expert</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skill Highlights */}
          <motion.div variants={itemVariants}>
            <Card className="glass dark:glass-dark p-8 hover:shadow-2xl transition-all duration-300">
              <CardContent className="space-y-8">
                <h2 className="text-3xl font-bold text-gradient text-center">Key Strengths</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: 'Full-Stack Development',
                      description: 'End-to-end web application development',
                      icon: '🌐',
                      gradient: 'from-tech-blue to-tech-purple'
                    },
                    {
                      title: 'Data Analysis',
                      description: 'Extracting insights from complex datasets',
                      icon: '📊',
                      gradient: 'from-tech-purple to-tech-teal'
                    },
                    {
                      title: 'Technical Support',
                      description: 'Problem-solving and client communication',
                      icon: '🛠️',
                      gradient: 'from-tech-teal to-tech-cyan'
                    },
                    {
                      title: 'SaaS Development',
                      description: 'Building scalable software solutions',
                      icon: '☁️',
                      gradient: 'from-tech-cyan to-tech-blue'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="text-center space-y-4 group"
                    >
                      <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center text-2xl group-hover:animate-float`}>
                        {item.icon}
                      </div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Learning Journey */}
          <motion.div variants={itemVariants}>
            <Card className="glass dark:glass-dark p-8 hover:shadow-2xl transition-all duration-300">
              <CardContent className="space-y-6">
                <h2 className="text-2xl font-bold text-gradient text-center">Continuous Learning</h2>
                <div className="space-y-4 text-center">
                  <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                    I believe in continuous learning and staying updated with the latest technologies. 
                    Currently exploring cloud technologies, AI/ML concepts, and advanced React patterns 
                    to enhance my skill set and contribute more effectively to modern development projects.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 mt-6">
                    {['Cloud Computing', 'Machine Learning', 'DevOps', 'Advanced React', 'GraphQL', 'Docker'].map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gradient-to-r from-tech-blue/20 to-tech-purple/20 rounded-full text-sm font-medium border border-tech-blue/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
