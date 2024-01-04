import { useState, useCallback, useEffect } from "react";

function useDebouncedState<T>(
  initialValue: T,
  delay: number,
): [T, (newValue: T) => void] {
  const [value, setValue] = useState<T>(initialValue);
  const [debouncedValue, setDebouncedValue] = useState<T>(initialValue);

  const setNewValue = useCallback((newValue: T) => {
    setDebouncedValue(newValue);
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setValue(debouncedValue);
    }, delay);

    return () => clearTimeout(handler);
  }, [debouncedValue, delay]);

  return [value, setNewValue];
}

export default useDebouncedState;
