import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Mail, Phone, MapPin, Linkedin, Github, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const phoneNumber = '+91 93591 66521';
  const whatsappNumber = '919359166521'; // WhatsApp format (without + and spaces)

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message with form data
    const whatsappMessage = `Hi Vaishnavi!

Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message: ${formData.message}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "vaishnavi.kapse@example.com",
      link: "mailto:vaishnavi.kapse@example.com",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Phone,
      title: "Phone / WhatsApp",
      value: phoneNumber,
      link: `https://wa.me/${whatsappNumber}`,
      color: "from-green-500 to-teal-600"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Quick Message",
      link: `https://wa.me/${whatsappNumber}?text=Hi%20Vaishnavi!%20I%20would%20like%20to%20connect%20with%20you.`,
      color: "from-green-600 to-emerald-600"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kolhapur, Maharashtra, India",
      link: "#",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/vaishnavi-kapse",
      link: "https://linkedin.com/in/vaishnavi-kapse",
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
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's collaborate on your next project or discuss opportunities in tech
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="lg:col-span-1 space-y-6">
              <h2 className="text-2xl font-bold text-gradient mb-6">Contact Information</h2>
              
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.02 }}
                  className="block group"
                >
                  <Card className="glass dark:glass-dark hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center group-hover:animate-float`}>
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{info.title}</h3>
                          <p className="text-muted-foreground text-sm">{info.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}

              {/* Social Links */}
              <motion.div variants={itemVariants} className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <motion.a
                    href="https://github.com/vaishnavi-kapse"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
                  >
                    <Github className="w-6 h-6 text-white" />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/vaishnavi-kapse"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </motion.a>
                  <motion.a
                    href={`https://wa.me/${whatsappNumber}?text=Hi%20Vaishnavi!%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-800 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
                  >
                    <MessageCircle className="w-6 h-6 text-white" />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <Card className="glass dark:glass-dark hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-gradient">Send Me a WhatsApp Message</CardTitle>
                  <p className="text-muted-foreground">Fill out the form below and it will be sent to my WhatsApp</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          required
                          className="glass dark:glass-dark"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="glass dark:glass-dark"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        required
                        className="glass dark:glass-dark"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me more about your project or inquiry..."
                        rows={6}
                        required
                        className="glass dark:glass-dark resize-none"
                      />
                    </div>

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button
                        type="submit"
                        className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
                      >
                        <MessageCircle className="w-5 h-5" />
                        <span>Send via WhatsApp</span>
                      </Button>
                    </motion.div>

                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-4">Or contact me directly:</p>
                      <motion.a
                        href={`https://wa.me/${whatsappNumber}?text=Hi%20Vaishnavi!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button
                          type="button"
                          variant="outline"
                          className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white"
                        >
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Quick WhatsApp: {phoneNumber}
                        </Button>
                      </motion.a>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
