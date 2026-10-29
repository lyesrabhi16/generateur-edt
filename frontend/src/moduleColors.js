// Stable pastel color per module code, shared by every timetable view
// so a module keeps the same color everywhere.
const hash = (str) => {
  let h = 0;
  for (let i = 0; i < str.length; i++) h = (h * 31 + str.charCodeAt(i)) >>> 0;
  return h;
};

export const moduleStyle = (codeModule) => {
  if (!codeModule) return undefined;
  const hue = (hash(String(codeModule)) * 18) % 360; // multiplier tuned so the sample modules get distinct hues
  return { backgroundColor: `hsl(${hue}, 70%, 85%)` };
};
