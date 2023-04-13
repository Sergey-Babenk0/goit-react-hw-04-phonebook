import { useState, useEffect } from 'react';

export default function useLocalStorage(key, value) {
  const [state, setState] = useState(
    () => JSON.parse(window.localStorage.getItem(key)) ?? value
  );

  useEffect(
    () => window.localStorage.setItem(key, JSON.stringify(state)),
    [key, state]
  );
  return [state, setState];
}
