import "client-only";

import { useEffect, useState } from "react";
import { StateCreator, create } from "zustand";
import { PersistOptions, persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { stateStorageKey } from "../config/constants";
import { Store } from "./types";

type Initializer = StateCreator<Store, [["zustand/immer", never]]>;

const initializer: Initializer = () => ({});

const persistOptions: PersistOptions<Store> = {
  name: stateStorageKey,
};

const useStoreInternal = create<Store>()(
  persist(immer(initializer), persistOptions),
);

export const useStore = <V>(selector: (state: Store) => V) => {
  const value = useStoreInternal(selector);
  const [hydrated, setHydrated] = useState(false);

  const persist = useStoreInternal.persist;

  useEffect(() => {
    const unsubHydrate = persist.onHydrate(() => setHydrated(false));
    const unsubFinishHydration = persist.onFinishHydration(() =>
      setHydrated(true),
    );

    setHydrated(persist.hasHydrated());

    return () => {
      unsubHydrate();
      unsubFinishHydration();
    };
  }, [persist]);

  useEffect(() => {
    const handleStorageEvent = (e: StorageEvent) =>
      e.newValue && e.key === persist.getOptions().name && persist.rehydrate();

    window.addEventListener("storage", handleStorageEvent);

    return () => {
      window.removeEventListener("storage", handleStorageEvent);
    };
  }, [persist]);

  return [value, hydrated] as const;
};
