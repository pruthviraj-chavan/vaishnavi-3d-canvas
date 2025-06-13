
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react';

const JourneySection = () => {
  const journeySteps = [
    {
      id: 1,
      type: 'education',
      title: 'B.Tech Computer Science Engineering',
      organization: 'D.Y. Patil Salokhe Nagar, Kolhapur',
      location: 'Kolhapur, Maharashtra',
      period: '2020 - 2024',
      description: 'Specialized in software development, data structures, algorithms, and modern web technologies.',
      icon: GraduationCap,
      color: 'from-tech-blue to-tech-purple'
    },
    {
      id: 2,
      type: 'career',
      title: 'Technical Support Engineer',
      organization: 'Tech Mahindra',
      location: 'Mumbai, Maharashtra',
      period: '2024 - Present',
      description: 'Providing technical support, problem-solving, and developing innovative solutions for clients.',
      icon: Briefcase,
      color: 'from-tech-purple to-tech-teal'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-tech-blue/5 via-tech-purple/5 to-tech-teal/5 dark:from-tech-blue/10 dark:via-tech-purple/10 dark:to-tech-teal/10"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins text-gradient mb-4">
              My Journey
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              From academic excellence to professional growth
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-tech-blue via-tech-purple to-tech-teal rounded-full opacity-30 hidden lg:block"></div>
            
            <div className="space-y-8 lg:space-y-16">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.id}
                  variants={itemVariants}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 w-full">
                    <Card className="glass dark:glass-dark p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 group">
                      <CardContent className="space-y-4">
                        <div className="flex items-start justify-between flex-wrap gap-4">
                          <div className="flex items-center space-x-3">
                            <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center group-hover:animate-float`}>
                              <step.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-xl sm:text-2xl font-bold text-gradient">{step.title}</h3>
                              <p className="text-tech-blue font-semibold text-lg">{step.organization}</p>
                            </div>
                          </div>
                          <div className="text-right text-sm text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{step.period}</span>
                            </div>
                            <div className="flex items-center space-x-1 mt-1">
                              <MapPin className="w-4 h-4" />
                              <span>{step.location}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline Node */}
                  <div className="hidden lg:flex items-center justify-center">
                    <motion.div
                      className={`w-6 h-6 bg-gradient-to-r ${step.color} rounded-full shadow-lg z-10`}
                      whileHover={{ scale: 1.2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
