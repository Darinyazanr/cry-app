export const classToStyle = (className) => className === "className" ? "style" : className.replace("ClassName", "Style");
export const classToColor = (className) => className.replace("ClassName", "");
export const isColorClassProperty = (prop) => prop.toLowerCase().includes("color") && prop.endsWith("ClassName");
export const isClassProperty = (prop) => prop === "className" || prop.endsWith("ClassName");
export const isStyleProperty = (prop) => prop === "style" || prop.endsWith("Style");
