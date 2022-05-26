/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import type {
  Interface,
  FunctionFragment,
  DecodedValue,
  Contract,
  Overrides,
  BigNumberish,
  BytesLike,
} from 'fuels';

export type ContractIdInput = { value: string };

export type ContractId = { value: string };

export type AddressInput = { value: string };

export type Address = { value: string };

interface Token_contractAbiInterface extends Interface {
  functions: {
    mint_coins: FunctionFragment;
    burn_coins: FunctionFragment;
    force_transfer_coins: FunctionFragment;
    transfer_coins_to_output: FunctionFragment;
    get_balance: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'mint_coins', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(functionFragment: 'burn_coins', values: [BigNumberish]): Uint8Array;
  encodeFunctionData(
    functionFragment: 'force_transfer_coins',
    values: [BigNumberish, ContractIdInput, ContractIdInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: 'transfer_coins_to_output',
    values: [BigNumberish, ContractIdInput, AddressInput]
  ): Uint8Array;
  encodeFunctionData(
    functionFragment: 'get_balance',
    values: [ContractIdInput, ContractIdInput]
  ): Uint8Array;

  decodeFunctionData(functionFragment: 'mint_coins', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'burn_coins', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'force_transfer_coins', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'transfer_coins_to_output', data: BytesLike): DecodedValue;
  decodeFunctionData(functionFragment: 'get_balance', data: BytesLike): DecodedValue;
}

export class Token_contractAbi extends Contract {
  interface: Token_contractAbiInterface;
  functions: {
    mint_coins(
      mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    burn_coins(
      burn_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    force_transfer_coins(
      coins: BigNumberish,
      asset_id: ContractIdInput,
      target: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    transfer_coins_to_output(
      coins: BigNumberish,
      asset_id: ContractIdInput,
      recipient: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    get_balance(
      target: ContractIdInput,
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;
  };
  callStatic: {
    mint_coins(
      mint_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    burn_coins(
      burn_amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    force_transfer_coins(
      coins: BigNumberish,
      asset_id: ContractIdInput,
      target: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    transfer_coins_to_output(
      coins: BigNumberish,
      asset_id: ContractIdInput,
      recipient: AddressInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<void>;

    get_balance(
      target: ContractIdInput,
      asset_id: ContractIdInput,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<bigint>;
  };

  mint_coins(
    mint_amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  burn_coins(
    burn_amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  force_transfer_coins(
    coins: BigNumberish,
    asset_id: ContractIdInput,
    target: ContractIdInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  transfer_coins_to_output(
    coins: BigNumberish,
    asset_id: ContractIdInput,
    recipient: AddressInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<void>;

  get_balance(
    target: ContractIdInput,
    asset_id: ContractIdInput,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<bigint>;
}
