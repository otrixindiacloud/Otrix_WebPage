"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CreateIndustriesPage() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    icon: "",
    color: "from-blue-500 to-cyan-500",
    services: [""]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const colorOptions = [
    { value: "from-blue-500 to-cyan-500", label: "Blue to Cyan", preview: "bg-gradient-to-br from-blue-500 to-cyan-500" },
    { value: "from-green-500 to-emerald-500", label: "Green to Emerald", preview: "bg-gradient-to-br from-green-500 to-emerald-500" },
    { value: "from-purple-500 to-pink-500", label: "Purple to Pink", preview: "bg-gradient-to-br from-purple-500 to-pink-500" },
    { value: "from-orange-500 to-red-500", label: "Orange to Red", preview: "bg-gradient-to-br from-orange-500 to-red-500" },
    { value: "from-indigo-500 to-blue-500", label: "Indigo to Blue", preview: "bg-gradient-to-br from-indigo-500 to-blue-500" },
    { value: "from-yellow-500 to-orange-500", label: "Yellow to Orange", preview: "bg-gradient-to-br from-yellow-500 to-orange-500" },
    { value: "from-teal-500 to-green-500", label: "Teal to Green", preview: "bg-gradient-to-br from-teal-500 to-green-500" },
    { value: "from-pink-500 to-rose-500", label: "Pink to Rose", preview: "bg-gradient-to-br from-pink-500 to-rose-500" }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleServiceChange = (index, value) => {
    const newServices = [...formData.services];
    newServices[index] = value;
    setFormData(prev => ({
      ...prev,
      services: newServices
    }));
  };

  const addService = () => {
    setFormData(prev => ({
      ...prev,
      services: [...prev.services, ""]
    }));
  };

  const removeService = (index) => {
    if (formData.services.length > 1) {
      const newServices = formData.services.filter((_, i) => i !== index);
      setFormData(prev => ({
        ...prev,
        services: newServices
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Filter out empty services
    const filteredServices = formData.services.filter(service => service.trim() !== "");
    
    const industryData = {
      ...formData,
      services: filteredServices
    };

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log("Industry data to be submitted:", industryData);
      setSubmitMessage("Industry created successfully! (This is a demo - data logged to console)");
      
      // Reset form
      setFormData({
        title: "",
        description: "",
        icon: "",
        color: "from-blue-500 to-cyan-500",
        services: [""]
      });
    } catch (error) {
      setSubmitMessage("Error creating industry. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Section */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Create New Industry
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Add a new industry category to showcase your expertise and services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Industry Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                  Industry Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="e.g., Healthcare & Life Sciences"
                />
              </div>

              {/* Industry Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Describe the industry and what solutions you provide..."
                />
              </div>

              {/* Industry Icon */}
              <div>
                <label htmlFor="icon" className="block text-sm font-semibold text-gray-700 mb-2">
                  Icon (Emoji) *
                </label>
                <input
                  type="text"
                  id="icon"
                  name="icon"
                  value={formData.icon}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="🏥"
                />
                <p className="text-sm text-gray-500 mt-1">Enter an emoji that represents this industry</p>
              </div>

              {/* Color Selection */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Color Theme *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {colorOptions.map((color) => (
                    <label
                      key={color.value}
                      className={`relative cursor-pointer rounded-lg p-3 border-2 transition-all duration-200 ${
                        formData.color === color.value
                          ? 'border-blue-500 ring-2 ring-blue-200'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name="color"
                        value={color.value}
                        checked={formData.color === color.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`w-full h-8 rounded ${color.preview} mb-2`}></div>
                      <p className="text-xs text-center text-gray-600">{color.label}</p>
                    </label>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Services Offered
                </label>
                <div className="space-y-3">
                  {formData.services.map((service, index) => (
                    <div key={index} className="flex gap-2">
                      <input
                        type="text"
                        value={service}
                        onChange={(e) => handleServiceChange(index, e.target.value)}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder={`Service ${index + 1}`}
                      />
                      {formData.services.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeService(index)}
                          className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addService}
                    className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-all duration-200"
                  >
                    + Add Service
                  </button>
                </div>
              </div>

              {/* Preview */}
              {formData.title && formData.description && formData.icon && (
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preview
                  </label>
                  <div className={`bg-gradient-to-br ${formData.color} p-6 rounded-xl shadow-lg`}>
                    <div className="text-center">
                      <div className="text-4xl mb-4">{formData.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{formData.title}</h3>
                      <p className="text-white/90 text-sm mb-4">{formData.description}</p>
                      {formData.services.filter(s => s.trim()).length > 0 && (
                        <div className="text-white/80 text-xs">
                          <p className="font-semibold mb-1">Services:</p>
                          <ul className="list-disc list-inside space-y-1">
                            {formData.services.filter(s => s.trim()).map((service, index) => (
                              <li key={index}>{service}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting || !formData.title || !formData.description || !formData.icon}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
                    isSubmitting || !formData.title || !formData.description || !formData.icon
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:shadow-lg transform hover:-translate-y-0.5'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Creating Industry...
                    </div>
                  ) : (
                    'Create Industry'
                  )}
                </button>
              </div>

              {/* Success Message */}
              {submitMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    submitMessage.includes('successfully') 
                      ? 'bg-green-100 text-green-800 border border-green-200'
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}
                >
                  {submitMessage}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
