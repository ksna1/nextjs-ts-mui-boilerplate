export const isDateInThePast = (dateString: string) => {
  try {
    const date = new Date(dateString);
    return date.getTime() < Date.now();
  } catch (err) {
    return false;
  }
};
