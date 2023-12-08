import { atom, selector } from "recoil";
import { localStorageEffect, LOCAL_STORAGE_DARK_MODE } from "./effects";
import { chainState } from "./cosmos";
import { TESTNET } from "../lib/config";
import { ORDER_TYPE, ORDER_TYPES } from "../types/types";

export const densInitializedState = atom({
  key: "densInitializedState",
  default: false,
});

export const drawerOpenedState = atom({
  key: "drawerOpenedState",
  default: false,
});

export type OpenOrderForm = {
  type: ORDER_TYPE;
  optionSize: number;
  optionPrice: number;
};

export const openOrderFormState = atom<OpenOrderForm>({
  key: "openOrderFormState",
  default: {
    type: ORDER_TYPES.BID,
    optionSize: 0.1,
    optionPrice: 10,
  },
});

export const isOpenOrderBid = selector<boolean>({
  key: "isOpenOrderBid",
  get: ({ get }) => {
    return get(openOrderFormState).type === ORDER_TYPES.BID;
  },
});

export const darkModeState = atom<"dark" | "light" | "auto">({
  key: "darkModeState",
  default: "dark",
  effects: [localStorageEffect(LOCAL_STORAGE_DARK_MODE)],
});

export const optionTypeState = atom<"put" | "call">({
  key: "callOptionTypeState",
  default: "call",
});

export const isCallOptionState = selector<boolean>({
  key: "isCallOptionState",
  get: async ({ get }) => {
    const callOptionType = get(optionTypeState);

    return callOptionType === "call";
  },
});

export const contractsState = selector<string>({
  key: "contractsState",
  get: async ({ get }) => {
    const chain = get(chainState);
    const isCallOption = get(isCallOptionState);

    if (isCallOption) {
      if (chain.chain_id === TESTNET.INJECTIVE) {
        return import.meta.env.VITE_CONTRACT_INJECTIVE_TESTNET;
      }
      if (chain.chain_id === TESTNET.NEUTRON) {
        return import.meta.env.VITE_CONTRACT_NEUTRON_TESTNET;
      }
      if (chain.chain_id === TESTNET.ARCHWAY) {
        return import.meta.env.VITE_CONTRACT_ARCHWAY_TESTNET;
      }

      throw new Error(`unknown chain_id ${chain.chain_id} for the call option`);
    } else {
      if (chain.chain_id === TESTNET.INJECTIVE) {
        return import.meta.env.VITE_CONTRACT_PUT_INJECTIVE_TESTNET;
      }

      throw new Error(`unknown chain_id ${chain.chain_id} for the put option`);
    }
  },
});
