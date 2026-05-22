/**
 * Social Media Links Configuration
 * Centralized management of Memora's social media presence
 */

export const socialLinks = {
  facebook: {
    url: 'https://www.facebook.com/MEMORAVEL',
    name: 'Facebook',
    icon: 'facebook',
  },
  youtube: {
    url: 'https://www.youtube.com/channel/UCrlOxLu5EtExkPNl6my2YNw',
    name: 'YouTube',
    icon: 'youtube',
  },
  instagram: {
    url: 'https://www.instagram.com/memoraprocessosinovadores/',
    name: 'Instagram',
    icon: 'instagram',
  },
  linkedin: {
    url: 'https://www.linkedin.com/company/memoraprocessos',
    name: 'LinkedIn',
    icon: 'linkedin',
  },
};

/**
 * Get all social links as an array
 * @returns {array} Array of social link objects
 */
export const getSocialLinksArray = () => {
  return Object.values(socialLinks);
};

/**
 * Get a specific social link by key
 * @param {string} key - The social media key (e.g., 'facebook', 'instagram')
 * @returns {object|null} The social link object or null if not found
 */
export const getSocialLink = (key) => {
  return socialLinks[key] || null;
};

/**
 * Validate if a social link exists
 * @param {string} key - The social media key
 * @returns {boolean} True if the social link exists
 */
export const hasSocialLink = (key) => {
  return key in socialLinks;
};

export default socialLinks;
