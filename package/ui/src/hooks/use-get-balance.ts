import { useRecoilValue } from "recoil";
import { chainState, clientState } from "../state/cosmos";
import { useQuery } from "@tanstack/react-query";
import useTryNextClient from "./use-try-next-client";
import { useChain } from "@cosmos-kit/react";

export default function useGetBalance(addr?: string, denom?: string) {
  const tryNextClient = useTryNextClient();
  const client = useRecoilValue(clientState);
  const chain = useRecoilValue(chainState);
  const { address: walletAddr } = useChain(chain.chain_name);

  const checkAddr = walletAddr || addr;

  return useQuery(
    ["get_balance", checkAddr, denom],
    async () => {
      if (!checkAddr || !denom) {
        return null;
      }

      const coin = await client.getBalance(checkAddr, denom);

      return coin;
    },
    {
      enabled: Boolean(client),
      staleTime: 3000000,
      onError: tryNextClient,
      suspense: true,
    }
  );
}