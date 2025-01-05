import { useCallback, useEffect, useRef, useState } from "react";

type EventType = "resize" | "scroll";

const useEventListener = (
  event: EventType,
  listener: () => void,
  useCapture?: boolean,
) => {
  useEffect(() => {
    if (listener) {
      listener();
      window.addEventListener(event, listener, useCapture);

      return () => window.removeEventListener(event, listener, useCapture);
    }

    return () => {};
  }, [event, listener, useCapture]);
};

const useElementDimensions = <T extends HTMLDivElement>() => {
  const ref = useRef<T>(null);
  const [dimensions, setDimensions] = useState<DOMRect | null>(null);

  const refresh = useCallback(() => {
    const domRect = ref.current?.getBoundingClientRect();

    if (domRect) {
      setDimensions(domRect);
    }
  }, []);

  useEventListener("resize", refresh);
  useEventListener("scroll", refresh, true);

  return { dimensions, ref, refresh };
};

export default useElementDimensions;
