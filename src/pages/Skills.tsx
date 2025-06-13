
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Code, Brain, Database, Globe, Smartphone, Users } from 'lucide-react';

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
    { name: 'JavaScript', level: 90, category: 'Programming', color: 'from-yellow-400 to-yellow-600', icon: Code },
    { name: 'Python', level: 85, category: 'Programming', color: 'from-blue-400 to-blue-600', icon: Code },
    { name: 'React.js', level: 88, category: 'Frontend', color: 'from-blue-400 to-cyan-400', icon: Globe },
    { name: 'Node.js', level: 80, category: 'Backend', color: 'from-green-400 to-green-600', icon: Database },
    { name: 'Data Analysis', level: 85, category: 'Analytics', color: 'from-purple-400 to-purple-600', icon: Brain },
    { name: 'SQL', level: 90, category: 'Database', color: 'from-orange-400 to-orange-600', icon: Database },
    { name: 'HTML/CSS', level: 95, category: 'Frontend', color: 'from-red-400 to-pink-400', icon: Globe },
    { name: 'Git/GitHub', level: 88, category: 'Tools', color: 'from-gray-400 to-gray-600', icon: Code },
    { name: 'Tailwind CSS', level: 92, category: 'Frontend', color: 'from-teal-400 to-teal-600', icon: Globe },
    { name: 'TypeScript', level: 82, category: 'Programming', color: 'from-blue-500 to-blue-700', icon: Code },
    { name: 'MongoDB', level: 78, category: 'Database', color: 'from-green-500 to-green-700', icon: Database },
    { name: 'REST APIs', level: 85, category: 'Backend', color: 'from-indigo-400 to-indigo-600', icon: Database }
  ];

  const categories = [
    { name: 'Programming', icon: Code, color: 'from-tech-blue to-tech-purple' },
    { name: 'Frontend', icon: Globe, color: 'from-tech-purple to-tech-teal' },
    { name: 'Backend', icon: Database, color: 'from-tech-teal to-tech-cyan' },
    { name: 'Database', icon: Database, color: 'from-tech-cyan to-tech-blue' },
    { name: 'Analytics', icon: Brain, color: 'from-tech-blue to-tech-teal' },
    { name: 'Tools', icon: Code, color: 'from-tech-purple to-tech-cyan' }
  ];

  return (
    <div className="min-h-screen pt-20 sm:pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12 sm:space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold font-poppins text-gradient mb-4">
              Skills & Expertise
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              A comprehensive overview of my technical skills and professional capabilities
            </p>
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-8 sm:space-y-12">
            {categories.map((category) => (
              <motion.div key={category.name} variants={itemVariants}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center`}>
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gradient">{category.name}</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {technicalSkills
                    .filter(skill => skill.category === category.name)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.02, y: -5 }}
                        className="group"
                      >
                        <Card className="glass dark:glass-dark p-4 sm:p-6 hover:shadow-2xl transition-all duration-300 h-full">
                          <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <skill.icon className="w-5 h-5 text-tech-blue" />
                                <h3 className="font-semibold text-base sm:text-lg">{skill.name}</h3>
                              </div>
                              <span className="text-sm text-muted-foreground font-medium">{skill.level}%</span>
                            </div>
                            <div className="space-y-2">
                              <div className="h-2 sm:h-3 bg-muted rounded-full overflow-hidden">
                                <motion.div
                                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${skill.level}%` }}
                                  viewport={{ once: true }}
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
            <Card className="glass dark:glass-dark p-6 sm:p-8 hover:shadow-2xl transition-all duration-300">
              <CardContent className="space-y-6 sm:space-y-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gradient text-center">Key Strengths</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: 'Full-Stack Development',
                      description: 'End-to-end web application development',
                      icon: Globe,
                      gradient: 'from-tech-blue to-tech-purple'
                    },
                    {
                      title: 'Data Analysis',
                      description: 'Extracting insights from complex datasets',
                      icon: Brain,
                      gradient: 'from-tech-purple to-tech-teal'
                    },
                    {
                      title: 'Technical Support',
                      description: 'Problem-solving and client communication',
                      icon: Users,
                      gradient: 'from-tech-teal to-tech-cyan'
                    },
                    {
                      title: 'SaaS Development',
                      description: 'Building scalable software solutions',
                      icon: Smartphone,
                      gradient: 'from-tech-cyan to-tech-blue'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center space-y-4 group cursor-pointer"
                    >
                      <div className={`w-16 h-16 mx-auto bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center group-hover:animate-float shadow-lg`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Learning Journey */}
          <motion.div variants={itemVariants}>
            <Card className="glass dark:glass-dark p-6 sm:p-8 hover:shadow-2xl transition-all duration-300">
              <CardContent className="space-y-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gradient text-center">Continuous Learning</h2>
                <div className="space-y-4 text-center">
                  <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-sm sm:text-base">
                    I believe in continuous learning and staying updated with the latest technologies. 
                    Currently exploring cloud technologies, AI/ML concepts, and advanced React patterns 
                    to enhance my skill set and contribute more effectively to modern development projects.
                  </p>
                  <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mt-6">
                    {['Cloud Computing', 'Machine Learning', 'DevOps', 'Advanced React', 'GraphQL', 'Docker'].map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 sm:px-4 py-2 bg-gradient-to-r from-tech-blue/20 to-tech-purple/20 rounded-full text-xs sm:text-sm font-medium border border-tech-blue/30 cursor-pointer hover:border-tech-purple/50 transition-colors"
                      >
                        {tech}
                      </motion.span>
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
