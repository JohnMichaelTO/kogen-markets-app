import Decimal from "decimal.js";

export function toBaseToken(n: Decimal.Value, decimals = 6, fixed = 3) {
  return new Decimal(n).div(Math.pow(10, decimals)).toFixed(fixed);
}

export function addressShort(address: string | null) {
  if (!address) {
    return address;
  }

  return `${address.slice(0, 9)}...${address.slice(-4)}`;
}

export const IBC_ASSETS = [
  {
    id: "cosmos",
    name: "ATOM",
    symbol: "ATOM",
    chain_id: "cosmoshub-4",
    rpc: "https://rpc.cosmos.directory:443/cosmoshub",
    denom: "uatom",
    decimals: 6,
    channel: "channel-207",
    juno_channel: "channel-1",
    juno_denom:
      "ibc/C4CFF46FD6DE35CA4CF4CE031E643C8FDC9BA4B99AE598E9B0ED98FE3A2319F9",
    logoURI:
      "https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/atom.png",
  },
  {
    id: "terra-luna",
    name: "Terra Classic",
    symbol: "LUNC",
    chain_id: "columbus-5",
    rpc: "https://rpc-terra-ia.cosmosia.notional.ventures:443",
    denom: "uluna",
    decimals: 6,
    channel: "channel-20",
    juno_channel: "channel-27",
    juno_denom:
      "ibc/8F865D9760B482FF6254EDFEC1FF2F1273B9AB6873A7DE484F89639795D73D75",
    logoURI:
      "https://raw.githubusercontent.com/cosmoscontracts/junoswap-asset-list/main/images/lunc.png",
  },
  {
    id: "terrausd",
    name: "Terra UST Classic",
    symbol: "USTC",
    chain_id: "columbus-5",
    rpc: "https://rpc-terra-ia.cosmosia.notional.ventures:443",
    denom: "uusd",
    decimals: 6,
    channel: "channel-20",
    juno_channel: "channel-27",
    juno_denom:
      "ibc/2DA4136457810BCB9DAAB620CA67BC342B17C3C70151CA70490A170DF7C9CB27",
    logoURI:
      "https://raw.githubusercontent.com/cosmoscontracts/junoswap-asset-list/main/images/ustc.png",
  },
  {
    id: "bitsong",
    name: "BTSG",
    symbol: "BTSG",
    chain_id: "bitsong-2b",
    rpc: "https://rpc-bitsong.itastakers.com:443",
    denom: "ubtsg",
    decimals: 6,
    channel: "channel-5",
    juno_channel: "channel-17",
    juno_denom:
      "ibc/008BFD000A10BCE5F0D4DD819AE1C1EC2942396062DABDD6AE64A655ABC7085B",
    logoURI:
      "https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/btsg.png",
  },
  {
    id: "osmosis",
    name: "OSMO",
    symbol: "OSMO",
    chain_id: "osmosis-1",
    rpc: "https://rpc-osmosis.itastakers.com:443",
    denom: "uosmo",
    decimals: 6,
    channel: "channel-42",
    juno_channel: "channel-0",
    juno_denom:
      "ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518",
    logoURI:
      "https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/osmo.png",
  },
  {
    id: "stargaze",
    name: "STARS",
    symbol: "STARS",
    chain_id: "stargaze-1",
    rpc: "https://rpc.stargaze-apis.com:443",
    denom: "ustars",
    decimals: 6,
    channel: "channel-5",
    juno_channel: "channel-20",
    juno_denom:
      "ibc/F6B367385300865F654E110976B838502504231705BAC0849B0651C226385885",
    logoURI:
      "https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/stars.png",
  },
  {
    id: "chihuahua-token",
    name: "HUAHUA",
    symbol: "HUAHUA",
    chain_id: "chihuahua-1",
    rpc: "https://rpc.chihuahua.wtf:443",
    denom: "uhuahua",
    decimals: 6,
    channel: "channel-11",
    juno_channel: "channel-28",
    juno_denom:
      "ibc/D836B191CDAE8EDACDEBE7B64B504C5E06CC17C6A072DAF278F9A96DF66F6241",
    logoURI:
      "https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/huahua.png",
  },
  {
    id: "akash-network",
    name: "Akash",
    symbol: "AKT",
    chain_id: "akashnet-2",
    rpc: "https://rpc.cosmos.directory:443/akash",
    denom: "uakt",
    decimals: 6,
    channel: "channel-35",
    juno_channel: "channel-29",
    juno_denom:
      "ibc/DFC6F33796D5D0075C5FB54A4D7B8E76915ACF434CB1EE2A1BA0BB8334E17C3A",
    logoURI:
      "https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/akt.png",
  },
  {
    id: "persistence",
    name: "Persistence",
    symbol: "XPRT",
    chain_id: "core-1",
    rpc: "https://rpc.core.persistence.one:443",
    denom: "uxprt",
    decimals: 6,
    channel: "channel-37",
    juno_channel: "channel-33",
    juno_denom:
      "ibc/7455B3F2F2737906BACF4AE980069A4CAB7C7F9FDAABAEFBA439DF037AEC5898",
    logoURI:
      "https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/xprt.png",
  },
  {
    id: "comdex",
    name: "Comdex",
    symbol: "CMDX",
    chain_id: "comdex-1",
    rpc: "https://rpc.comdex.one:443",
    denom: "ucmdx",
    decimals: 6,
    channel: "channel-18",
    juno_channel: "channel-36",
    juno_denom:
      "ibc/946AD96F278770521526D7283F58268DA2F6ACDDE40324A9D1C86811D78C86A0",
    logoURI:
      "https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/cmdx.png",
  },
  {
    id: "dig",
    name: "Dig",
    symbol: "DIG",
    chain_id: "dig-1",
    rpc: "https://rpc-1-dig.notional.ventures:443",
    denom: "udig",
    decimals: 6,
    channel: "channel-2",
    juno_channel: "channel-37",
    juno_denom:
      "ibc/6842C591DC4588411A565C9FF650FB15A17DFE3F0A43201E8141E4D14B8D171A",
    logoURI:
      "https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/dig.png",
  },
  {
    id: "secret",
    name: "Secret",
    symbol: "SCRT",
    chain_id: "secret-4",
    rpc: "https://rpc.cosmos.directory:443/secretnetwork",
    denom: "uscrt",
    decimals: 6,
    channel: "channel-8",
    juno_channel: "channel-48",
    juno_denom:
      "ibc/B55B08EF3667B0C6F029C2CC9CAA6B00788CF639EBB84B34818C85CBABA33ABD",
    logoURI:
      "https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/scrt.png",
  },
  {
    id: "bitcanna",
    name: "BitCanna",
    symbol: "BCNA",
    chain_id: "bitcanna-1",
    rpc: "https://rpc.bitcanna.io:443",
    denom: "ubcna",
    decimals: 6,
    channel: "channel-10",
    juno_channel: "channel-50",
    juno_denom:
      "ibc/0CB5D60E57FD521FA39D11E3E410144389010AC5EF5F292BC9BDD832FA2FDBF9",
    logoURI:
      "https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/bcna.png",
  },
  {
    id: "e-money",
    name: "NGM",
    symbol: "NGM",
    chain_id: "emoney-3",
    rpc: "https://rpc.cosmos.directory:443/emoney",
    denom: "ungm",
    decimals: 6,
    channel: "channel-15",
    juno_channel: "channel-9",
    juno_denom:
      "ibc/52423136339C1CE8C91F6A586DFE41591BDDD4665AE526DFFA8421F9ACF95196",
    logoURI:
      "https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/ngm.png",
  },
  {
    id: "e-money-eur",
    name: "EEUR",
    symbol: "EEUR",
    chain_id: "emoney-3",
    rpc: "https://rpc.cosmos.directory:443/emoney",
    denom: "eeur",
    decimals: 6,
    channel: "channel-15",
    juno_channel: "channel-9",
    juno_denom:
      "ibc/B9F7C1E4CE9219B5AF06C47B18661DBD49CCD7A6C18FF789E2FB62BB365CFF9C",
    logoURI:
      "https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/eeur.png",
  },
  {
    id: "usd-coin",
    name: "USDC",
    symbol: "USDC",
    chain_id: "axelar-dojo-1",
    rpc: "https://rpc-axelar.keplr.app:443",
    denom: "uusdc",
    decimals: 6,
    channel: "channel-4",
    juno_channel: "channel-71",
    juno_denom:
      "ibc/EAC38D55372F38F1AFD68DF7FE9EF762DCF69F26520643CF3F9D292A738D8034",
    logoURI:
      "https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/axlusdc.png",
    external_deposit_uri:
      "https://satellite.money/?source=ethereum&destination=juno&token=usdc",
  },
  {
    id: "AssetMantle",
    name: "MNTL",
    symbol: "MNTL",
    chain_id: "mantle-1",
    rpc: "https://rpc.assetmantle.one:443",
    denom: "umntl",
    decimals: 6,
    channel: "channel-2",
    juno_channel: "channel-83",
    juno_denom:
      "ibc/5CB906E82B7A88E62644AD811361F5858B74BA9EBD75C84B6D24B20C01A4819F",
    logoURI:
      "https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/assetmantle.png",
  },
  {
    id: "teritori",
    name: "TORI",
    symbol: "TORI",
    chain_id: "teritori-1",
    rpc: "https://teritori-rpc.lavenderfive.com:443",
    denom: "utori",
    decimals: 6,
    channel: "channel-11",
    juno_channel: "channel-164",
    juno_denom:
      "ibc/436B576861090C1C921D56BA1FAE481A04D2E938EBDFF55C4712670F9754AC40",
    logoURI:
      "https://raw.githubusercontent.com/CosmosContracts/junoswap-asset-list/main/images/tori.png",
  },
];
