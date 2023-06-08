import { useRecoilValue } from "recoil";
import { chainState } from "../../../state/cosmos";
import {
  useInjectiveCallOptionMutation,
  useInjectiveExerciseCallOptionMutation,
} from "./injective";
import {
  useNeutronCallOptionMutation,
  useNeutronExerciseCallOptionMutation,
} from "./neutron";
import { TESTNET } from "../../../lib/config";

export function useCallOptionMutation() {
  const chain = useRecoilValue(chainState);
  const inj = useInjectiveCallOptionMutation();
  const neutron = useNeutronCallOptionMutation();

  if (chain.chain_id === TESTNET.INJECTIVE) {
    return inj;
  }
  if (chain.chain_id === TESTNET.NEUTRON) {
    return neutron;
  }
  if (chain.chain_id === TESTNET.ARCHWAY) {
    return neutron;
  }

  throw new Error("unimplemented");
}

export function useExerciseCallOptionMutation() {
  const chain = useRecoilValue(chainState);
  const inj = useInjectiveExerciseCallOptionMutation();
  const neutron = useNeutronExerciseCallOptionMutation();

  if (chain.chain_id === TESTNET.INJECTIVE) {
    return inj;
  }
  if (chain.chain_id === TESTNET.NEUTRON) {
    return neutron;
  }
  if (chain.chain_id === TESTNET.ARCHWAY) {
    return neutron;
  }

  throw new Error("unimplemented");
}
