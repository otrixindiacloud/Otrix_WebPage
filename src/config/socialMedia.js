export const socialMediaConfig = {
  facebook: {
    url: "https://facebook.com",
    name: "Facebook",
    description: "Follow for updates",
    color: "blue",
    icon: "facebook"
  },
  twitter: {
    url: "https://twitter.com",
    name: "Twitter", 
    description: "Follow for news",
    color: "blue",
    icon: "twitter"
  },
  instagram: {
    url: "https://instagram.com", 
    name: "Instagram",
    description: "Follow for inspiration",
    color: "pink",
    icon: "instagram"
  },
  linkedin: {
    url: "https://linkedin.com",
    name: "LinkedIn",
    description: "Connect professionally",
    color: "blue",
    icon: "linkedin"
  },
  youtube: {
    url: "https://youtube.com",
    name: "YouTube",
    description: "Watch our videos",
    color: "red",
    icon: "youtube"
  }
};

export const getSocialMediaUrl = (platform) => {
  return socialMediaConfig[platform]?.url || "#";
};

export const getSocialMediaName = (platform) => {
  return socialMediaConfig[platform]?.name || platform;
};
