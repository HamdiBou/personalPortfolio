import { useState } from 'react';

const isBrowser = typeof window !== 'undefined';

const readLocalStorage = (key, fallback) => {
  if (!isBrowser) {
    return fallback;
  }
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.warn(`Unable to read localStorage key "${key}"`, error);
    return fallback;
  }
};

const writeLocalStorage = (key, value) => {
  if (!isBrowser) {
    return;
  }
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn(`Unable to write localStorage key "${key}"`, error);
  }
};

export function useEditableContent(key, defaultValue) {
  const [content, setContent] = useState(() => readLocalStorage(key, defaultValue));

  const updateContent = (next) => {
    setContent((prev) => {
      const resolved = typeof next === 'function' ? next(prev) : next;
      writeLocalStorage(key, resolved);
      return resolved;
    });
  };

  const resetContent = () => {
    writeLocalStorage(key, defaultValue);
    setContent(defaultValue);
  };

  return [content, updateContent, resetContent];
}
