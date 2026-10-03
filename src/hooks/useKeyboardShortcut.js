import { useEffect } from 'react';

export function useKeyboardShortcut(keyCombo, callback) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const modifierPressed = isMac ? event.metaKey : event.ctrlKey;

      if (keyCombo.toLowerCase() === 'k' && modifierPressed && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        callback();
      }

      if (keyCombo.toLowerCase() === 'escape' && event.key === 'Escape') {
        callback();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keyCombo, callback]);
}
