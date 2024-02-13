/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.35.7.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export type Addr = string;
export interface InstantiateMsg {
  owner: Addr;
}
export type ExecuteMsg =
  | {
      update_config: {
        new_config: FactoryConfig;
      };
    }
  | {
      deploy: {
        code_id: number;
        option_config: Config;
        option_type: OptionType;
      };
    };
export type Timestamp = Uint64;
export type Uint64 = string;
export type Uint128 = string;
export type Identifier = string;
export type OptionType = "call" | "put";
export interface FactoryConfig {
  owner: Addr;
}
export interface Config {
  base_decimals: number;
  base_denom: string;
  base_symbol: string;
  expiry: Timestamp;
  fee_perc: Uint128;
  fee_perc_denom: Uint128;
  instantiated: Timestamp;
  min_order_quantity_in_base: Uint128;
  min_tick_base: Uint128;
  min_tick_quote: Uint128;
  owner: Addr;
  pyth_base_price_feed: Identifier;
  pyth_contract_addr: Addr;
  quote_decimals: number;
  quote_denom: string;
  quote_symbol: string;
  strike_price_in_quote: Uint128;
}
export type QueryMsg =
  | {
      config: {};
    }
  | {
      deployed_options: {
        after_date_in_seconds?: number | null;
      };
    };
export type DeployedOptionStatus = "active" | "exercised" | "paused";
export type ArrayOfDeployedOption = DeployedOption[];
export interface DeployedOption {
  addr: Addr;
  code_id: number;
  option_config: Config;
  option_type: OptionType;
  status: DeployedOptionStatus;
}
