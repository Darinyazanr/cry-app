const boxShadowRegex = /(?<![#\w.-])[+-]?(?:\d*\.\d+|\d+)(?![\w-])/g;
const undefinedRegex = /undefined/g;
export const parseBoxShadow = (boxShadow) => boxShadow.replace(boxShadowRegex, (match) => `${match}px`).replace(undefinedRegex, "");
