"use client";

import { motion } from "framer-motion";
import { 
  SiNodedotjs,
  SiC,
  SiBootstrap,
  SiAngular,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPython,
  SiDjango,
  SiReact,
  SiFlutter,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiVuedotjs,
  SiTensorflow,
  SiOracle,
  SiSalesforce,
  SiNextdotjs,
  SiTypescript,
  SiGit,
  SiDocker,
  SiKubernetes,
  SiRedis,
  SiElasticsearch,
  SiAmazonwebservices,
  SiGooglecloud,
  SiFirebase,
  SiPowerbi,
  SiMicrosoftazure,
  SiDataAnalytics
  } from "react-icons/si";

export default function TechnologyIcon({ 
  technology, 
  size = "w-16 h-16", 
  className = "",
  showName = false 
}) {
  // Technology mapping with real icons and color schemes
  const technologyMap = {
    "Data Analytics": {
      icon: SiDataAnalytics,
      color: "from-blue-400 to-blue-700",
      bgColor: "bg-blue-400"
    },
    "Node JS": { 
      icon: SiNodedotjs, 
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-600"
    },
    "React Native": {
      icon: SiReact,
      color: "from-blue-400 to-cyan-500",
      bgColor: "bg-blue-400"
    },
    "C": { 
      icon: SiC, 
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600"
    },
    "Bootstrap": { 
      icon: SiBootstrap, 
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-600"
    },
    "Angular": { 
      icon: SiAngular, 
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500"
    },
    "HTML": { 
      icon: SiHtml5, 
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500"
    },
    "CSS": { 
      icon: SiCss3, 
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500"
    },
    "Javascript": { 
      icon: SiJavascript, 
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500"
    },
    "Java": { 
      icon: SiJavascript, 
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600"
    },
    "Python": { 
      icon: SiPython, 
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600"
    },
    "Django": { 
      icon: SiDjango, 
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-600"
    },
    "React.js": { 
      icon: SiReact, 
      color: "from-cyan-500 to-cyan-600",
      bgColor: "bg-cyan-500"
    },
    "Flutter": { 
      icon: SiFlutter, 
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500"
    },
    "SQL": { 
      icon: SiMysql, 
      color: "from-gray-600 to-gray-700",
      bgColor: "bg-gray-600"
    },
    "MySQL": { 
      icon: SiMysql, 
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600"
    },
    "MongoDB": { 
      icon: SiMongodb, 
      color: "from-green-600 to-green-700",
      bgColor: "bg-green-600"
    },
    "PostgreSQL": { 
      icon: SiPostgresql, 
      color: "from-blue-700 to-blue-800",
      bgColor: "bg-blue-700"
    },
    "Vue.js": { 
      icon: SiVuedotjs, 
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-500"
    },
    "AI/ML": { 
      icon: SiTensorflow, 
      color: "from-purple-600 to-purple-700",
      bgColor: "bg-purple-600"
    },
    "Power BI": { 
      icon: SiPowerbi, 
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500"
    },
    "Oracle Cloud": { 
      icon: SiOracle, 
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600"
    },
    "Oracle Apex": {
      icon: SiSalesforce,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500"
    },
    "Apex": { 
      icon: SiSalesforce, 
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500"
    },
    "NextJS": { 
      icon: SiNextdotjs, 
      color: "from-gray-800 to-gray-900",
      bgColor: "bg-gray-800"
    },
    "Azure": { 
      icon: SiMicrosoftazure, 
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500"
    },
    "TypeScript": { 
      icon: SiTypescript, 
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600"
    },
    "Git": { 
      icon: SiGit, 
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500"
    },
    "Docker": { 
      icon: SiDocker, 
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500"
    },
    "Kubernetes": { 
      icon: SiKubernetes, 
      color: "from-blue-600 to-blue-700",
      bgColor: "bg-blue-600"
    },
    "Redis": { 
      icon: SiRedis, 
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500"
    },
    "Elasticsearch": { 
      icon: SiElasticsearch, 
      color: "from-yellow-600 to-yellow-700",
      bgColor: "bg-yellow-600"
    },
    "AWS": { 
      icon: SiAmazonwebservices, 
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-500"
    },
    "Google Cloud": { 
      icon: SiGooglecloud, 
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-500"
    },
    "Firebase": { 
      icon: SiFirebase, 
      color: "from-yellow-500 to-yellow-600",
      bgColor: "bg-yellow-500"
    }
  };

  const tech = technologyMap[technology] || { 
    icon: null, 
    color: "from-gray-500 to-gray-600", 
    bgColor: "bg-gray-500" 
  };

  const IconComponent = tech.icon;

  return (
    <motion.div
      className={`${size} ${className} relative overflow-hidden rounded-lg shadow-lg group cursor-pointer`}
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`w-full h-full bg-gradient-to-br ${tech.color} rounded-lg flex items-center justify-center relative overflow-hidden`}>
        {/* Subtle blue accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent"></div>
        
        {/* Technology icon */}
        {IconComponent ? (
          <IconComponent className="text-white text-3xl relative z-10" />
        ) : (
          <span className="text-white font-bold text-xl relative z-10">
            {technology?.charAt(0) || "?"}
          </span>
        )}
        
        {/* Subtle blue dot indicator */}
        <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-blue-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Technology name tooltip on hover */}
      {showName && (
        <motion.div 
          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-20"
          initial={{ opacity: 0, y: 5 }}
          whileHover={{ opacity: 1, y: 0 }}
        >
          {technology}
        </motion.div>
      )}
    </motion.div>
  );
}
