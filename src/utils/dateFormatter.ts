const LOCALE = "es-es";

export const dateToString: (date: Date) => string = date => {
  return date.toLocaleDateString(LOCALE, {
    month: "2-digit",
    day: "2-digit",
    year: "2-digit"
  });
};

export const timeToString: (date: Date) => string = date => {
  return date.toLocaleTimeString(LOCALE, {
    hour: "2-digit",
    minute: "2-digit"
  });
};
