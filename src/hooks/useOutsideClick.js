import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        // ref.current is modal window
        // click registers which part of dom click occurred using e.target
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      // true means events will be handled in capturing phase
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
