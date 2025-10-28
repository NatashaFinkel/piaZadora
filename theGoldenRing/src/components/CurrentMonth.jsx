const CurrentMonth = () => {
  const moisActuel = new Date().toLocaleString("fr-FR", { month: "long" });
  return moisActuel;
};

export default CurrentMonth;
