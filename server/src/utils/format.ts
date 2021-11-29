export const Camelize = (str: string) => {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
};
export const capitalizeFirstLetter = (s: string) =>
  s[0].toUpperCase() + s.slice(1);
