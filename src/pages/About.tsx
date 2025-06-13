
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { GraduationCap, Heart, Target, Lightbulb, Users, Clock } from 'lucide-react';

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
              About Me
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about technology and driven by curiosity to solve complex problems
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <Card className="glass dark:glass-dark p-6 sm:p-8 hover:shadow-2xl transition-all duration-300">
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-gradient">Background</h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    I'm a B.Tech Computer Science Engineering graduate from D.Y. Patil Salokhe Nagar, 
                    Kolhapur, with a passion for technology and innovation. Currently working as a 
                    Technical Support Engineer at Tech Mahindra, I bring a unique blend of technical 
                    expertise and communication skills to every project.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    My journey in technology started during my undergraduate studies, where I developed 
                    a strong foundation in programming, data structures, and software development. 
                    I've since expanded my expertise to include data analysis, SaaS development, 
                    and technical support.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants} className="order-first lg:order-last">
              <div className="relative flex justify-center">
                <motion.div
                  className="w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-br from-tech-blue/20 to-tech-purple/20 rounded-full"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute inset-8 bg-gradient-to-br from-tech-purple to-tech-teal rounded-full flex items-center justify-center text-white text-4xl sm:text-6xl font-bold shadow-2xl"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  VK
                </motion.div>
                
                {/* Floating Achievement Badges */}
                <motion.div
                  className="absolute -top-4 -right-4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-tech-cyan to-tech-blue rounded-full flex items-center justify-center shadow-lg"
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 6, repeat: Infinity }}
                >
                  <GraduationCap className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-r from-tech-teal to-tech-purple rounded-full flex items-center justify-center shadow-lg"
                  animate={{ rotate: -360, scale: [1, 1.1, 1] }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  <Heart className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Education & Values */}
          <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <Card className="glass dark:glass-dark p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full flex items-center justify-center group-hover:animate-float">
                    <GraduationCap className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gradient">Education</h3>
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">B.Tech Computer Science Engineering</h4>
                    <p className="text-muted-foreground text-sm">D.Y. Patil Salokhe Nagar, Kolhapur</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    Specialized in software development, data structures, algorithms, and 
                    modern web technologies. Graduated with strong academic performance 
                    and practical project experience.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass dark:glass-dark p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 group">
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-gradient-to-r from-tech-purple to-tech-teal rounded-full flex items-center justify-center group-hover:animate-float">
                    <Target className="w-5 sm:w-6 h-5 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gradient">Core Values</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-tech-blue rounded-full flex-shrink-0"></span>
                    <span>Continuous learning and growth</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-tech-purple rounded-full flex-shrink-0"></span>
                    <span>Problem-solving mindset</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-tech-teal rounded-full flex-shrink-0"></span>
                    <span>Effective communication</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-tech-cyan rounded-full flex-shrink-0"></span>
                    <span>Team collaboration</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Personal Qualities */}
          <motion.div variants={itemVariants}>
            <Card className="glass dark:glass-dark p-6 sm:p-8 hover:shadow-2xl transition-all duration-300">
              <CardContent className="space-y-6 sm:space-y-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gradient text-center">Personal Qualities</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { icon: Lightbulb, title: 'Innovation', description: 'Always seeking creative solutions', color: 'from-tech-blue to-tech-purple' },
                    { icon: Users, title: 'Collaboration', description: 'Thriving in team environments', color: 'from-tech-purple to-tech-teal' },
                    { icon: Target, title: 'Goal-Oriented', description: 'Focused on achieving objectives', color: 'from-tech-teal to-tech-cyan' },
                    { icon: Heart, title: 'Passionate', description: 'Genuinely excited about technology', color: 'from-tech-cyan to-tech-blue' },
                    { icon: Clock, title: 'Reliable', description: 'Consistent and dependable', color: 'from-tech-blue to-tech-teal' },
                    { icon: GraduationCap, title: 'Learner', description: 'Always expanding knowledge', color: 'from-tech-purple to-tech-cyan' }
                  ].map((quality, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="text-center space-y-3 group cursor-pointer"
                    >
                      <div className={`w-12 sm:w-16 h-12 sm:h-16 mx-auto bg-gradient-to-r ${quality.color} rounded-full flex items-center justify-center group-hover:animate-float shadow-lg`}>
                        <quality.icon className="w-6 sm:w-8 h-6 sm:h-8 text-white" />
                      </div>
                      <h4 className="font-semibold text-sm sm:text-base">{quality.title}</h4>
                      <p className="text-muted-foreground text-xs sm:text-sm">{quality.description}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Soft Skills */}
          <motion.div variants={itemVariants}>
            <Card className="glass dark:glass-dark p-6 sm:p-8 hover:shadow-2xl transition-all duration-300">
              <CardContent className="space-y-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gradient text-center">Soft Skills & Strengths</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
                        <span className="text-xs sm:text-sm font-medium">{item.skill}</span>
                        <span className="text-xs text-muted-foreground">{item.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
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
