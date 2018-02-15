export const create = (tagName, options = {}) => {
  if (typeof tagName === "object") {
    options = tagName;
    tagName = "div";
  }
  const el = document.createElement(tagName);
  Object.keys(options).map(key => {
    el[key] = options[key];
  });
  return el;
};
