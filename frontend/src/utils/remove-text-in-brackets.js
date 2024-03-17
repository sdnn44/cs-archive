export function removeTextInBrackets(text) {
  if (!text) return text; // Return the original text if it's falsy
  return text.replace(/\s*\([^)]*\)/, ""); // Remove text within brackets
}
