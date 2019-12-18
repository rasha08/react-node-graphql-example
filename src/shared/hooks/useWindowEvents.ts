import { useEffect } from 'react';

export const useWindowEvents = (events: string[], callback: EventListenerOrEventListenerObject): void => {
  useEffect(() => {
    // Bind the event listener
    events.forEach(event => {
      window.addEventListener(event, callback);
    });

    return () => {
      // Unbind the event listener on clean up
      events.forEach(event => {
        window.removeEventListener(event, callback);
      });
    };
  });
};
