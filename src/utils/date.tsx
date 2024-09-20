/**
 * Gets the current date in  format (mm-dd-yyyy).
 *
 * @returns {string} The current date as a string in mm-dd-yyyy format.
 */
export const handleGetDateNow = (): string => {
  const isoDate = new Date().toISOString().split("T")[0]; //get date in yyyy-mm-dd format
  const [year, month, day] = isoDate.split("-");

  return `${month}-${day}-${year}`;
};
