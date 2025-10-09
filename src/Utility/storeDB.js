const getStoredApp = () => {
  try {
    const stored = localStorage.getItem("installApp");
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error("Failed to parse installApp data:", error);
    return [];
  }
};
const addTOStoreDB = (id) => {
  const storedAppData = getStoredApp();
  const numericId = parseInt(id);

  if (storedAppData.includes(numericId)) {
    alert("Already exists!");
    return false;
  } else {
    storedAppData.push(numericId);
    localStorage.setItem("installApp", JSON.stringify(storedAppData));
    return true;
  }
};
export { addTOStoreDB, getStoredApp };
