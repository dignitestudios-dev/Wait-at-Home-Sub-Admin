// All the helper functions should must be there.
// The functions that you're using multiple times must be there.
// e.g. formatDateToMMDDYYYY, formatEpochToMMDDYYYY, etc.
export const phoneFormater = (input) => {
  const cleaned = input?.replace(/\D/g, ""); // Remove all non-numeric characters

  if (cleaned.length > 3 && cleaned.length <= 6) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
  } else if (cleaned.length > 6) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(
      6,
      10
    )}`;
  } else if (cleaned.length > 0) {
    return `(${cleaned}`;
  }

  return cleaned; // Return cleaned number if less than 1 digit
};
export const formatTime = (timestamp) => {
  if (!timestamp) return "";

  // Agar firestore ka timestamp object mila hai
  const secs = timestamp.seconds || timestamp._seconds;
  if (!secs) return "";

  const date = new Date(secs * 1000);
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};
