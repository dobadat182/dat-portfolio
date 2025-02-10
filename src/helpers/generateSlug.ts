/**
 * Generates a slug from a string.
 *
 * @param {string} str - The string to convert to a slug.
 * @returns {string} - The generated slug.
 */
const generateSlug = (str: string) => {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, "") // Loại bỏ ký tự đặc biệt
    .replace(/\s+/g, "-") // Thay thế khoảng trắng bằng dấu gạch ngang
    .replace(/--+/g, "-") // Loại bỏ nhiều dấu gạch ngang liên tiếp
    .trim(); // Loại bỏ khoảng trắng ở đầu và cuối
};

export default generateSlug;
