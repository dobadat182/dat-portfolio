// helpers/sanitizeHTML.js

const sanitizeHTML = (str: string) => {
  return str.replace(/<[^>]*>?/gm, "");
};

export default sanitizeHTML;
