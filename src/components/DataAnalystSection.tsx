
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { BarChart3, TrendingUp, Database, PieChart, LineChart, Activity } from 'lucide-react';

const DataAnalystSection = () => {
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

  const analyticsTools = [
    {
      icon: BarChart3,
      title: "Statistical Analysis",
      description: "Advanced statistical modeling and hypothesis testing for data-driven insights and predictions.",
      color: "from-green-500 to-teal-600",
      skills: ["Python", "R", "SPSS", "Statistical Modeling"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Machine learning algorithms for forecasting trends and predicting future outcomes.",
      color: "from-blue-500 to-purple-600",
      skills: ["Machine Learning", "Time Series", "Regression", "Classification"]
    },
    {
      icon: Database,
      title: "Data Engineering",
      description: "Building robust data pipelines and managing large-scale databases for analytics.",
      color: "from-purple-500 to-pink-600",
      skills: ["SQL", "ETL", "Data Warehousing", "Big Data"]
    },
    {
      icon: PieChart,
      title: "Data Visualization",
      description: "Creating compelling visual stories from complex datasets using modern tools.",
      color: "from-orange-500 to-red-600",
      skills: ["Tableau", "Power BI", "Plotly", "D3.js"]
    }
  ];

  const metrics = [
    { value: "500+", label: "Datasets Analyzed", icon: Database },
    { value: "50+", label: "Reports Generated", icon: BarChart3 },
    { value: "25+", label: "Models Built", icon: TrendingUp },
    { value: "95%", label: "Accuracy Rate", icon: Activity }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-teal-500/3 to-blue-500/5 dark:from-green-500/3 dark:via-teal-500/2 dark:to-blue-500/3"></div>
      
      {/* Floating Data Visualizations */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg animate-float opacity-20 flex items-center justify-center">
        <BarChart3 className="w-8 h-8 text-white" />
      </div>
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg animate-float opacity-15 flex items-center justify-center" style={{ animationDelay: '2s' }}>
        <TrendingUp className="w-10 h-10 text-white" />
      </div>
      <div className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg animate-float opacity-25 flex items-center justify-center" style={{ animationDelay: '4s' }}>
        <PieChart className="w-6 h-6 text-white" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <BarChart3 className="w-8 h-8 text-green-500 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold font-poppins text-gradient">
                Data Analytics Mastery
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming raw data into actionable insights through advanced analytics, 
              machine learning, and compelling visualizations
            </p>
          </motion.div>

          {/* Analytics Tools Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {analyticsTools.map((tool, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group"
              >
                <Card className="glass dark:glass-dark h-full hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${tool.color}`}></div>
                  <CardContent className="p-6 space-y-4">
                    <div className={`w-16 h-16 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center group-hover:animate-float`}>
                      <tool.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-bold">{tool.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {tool.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">Key Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {tool.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-muted rounded text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Metrics Section */}
          <motion.div variants={itemVariants}>
            <Card className="glass dark:glass-dark p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gradient mb-2">Analytics Impact</h3>
                <p className="text-muted-foreground">Quantified results from my data analysis projects</p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center group-hover:animate-float">
                      <metric.icon className="w-8 h-8 text-white" />
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="text-3xl font-bold text-gradient mb-2"
                    >
                      {metric.value}
                    </motion.div>
                    <p className="text-muted-foreground text-sm font-medium">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Data Pipeline Visualization */}
          <motion.div variants={itemVariants}>
            <Card className="glass dark:glass-dark p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gradient mb-2">Data Analysis Pipeline</h3>
                <p className="text-muted-foreground">My systematic approach to extracting insights from data</p>
              </div>
              
              <div className="grid md:grid-cols-5 gap-6">
                {[
                  { step: "Collect", icon: Database, desc: "Data Gathering" },
                  { step: "Clean", icon: Activity, desc: "Data Preprocessing" },
                  { step: "Analyze", icon: BarChart3, desc: "Statistical Analysis" },
                  { step: "Model", icon: TrendingUp, desc: "Predictive Modeling" },
                  { step: "Visualize", icon: PieChart, desc: "Results Presentation" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="text-center group"
                  >
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center group-hover:animate-float">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="font-semibold mb-1">{item.step}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataAnalystSection;
