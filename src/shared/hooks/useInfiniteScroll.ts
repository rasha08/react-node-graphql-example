import { useWindowEvents } from './useWindowEvents';

export const useInfiniteScroll = (callback: () => void): void => {
  const handleScroll = (): void => {
    if (window.scrollY + window.outerHeight >= document.body.clientHeight) {
      callback();
    }
  };

  useWindowEvents(['scroll'], handleScroll);
};
