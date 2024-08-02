// convert to slug
export const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
};
// get the current year
export const getCurrentYear = () => {
  return new Date().getFullYear();
};
// get the current date
export const getCurrentDate = () => {
  return new Date().getDate();
};

export const readableDate = (date) => {
  return new Date(date).toDateString();
}