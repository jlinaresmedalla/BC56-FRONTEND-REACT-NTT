export const saveToLocalStorage = (key: string, value: string | object | number) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getFromLocalStorage = (key: string): string | object | number | null => {
  const value = localStorage.getItem(key);
  return value ?? null;
};

export const removeFromLocalStorage = (key: string) => localStorage.removeItem(key);
