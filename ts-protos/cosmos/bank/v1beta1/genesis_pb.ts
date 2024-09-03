// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file cosmos/bank/v1beta1/genesis.proto (package cosmos.bank.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb";
import type { Coin } from "../../base/v1beta1/coin_pb";
import { file_cosmos_base_v1beta1_coin } from "../../base/v1beta1/coin_pb";
import type { Metadata, Params, SendEnabled } from "./bank_pb";
import { file_cosmos_bank_v1beta1_bank } from "./bank_pb";
import { file_cosmos_proto_cosmos } from "../../../cosmos_proto/cosmos_pb";
import { file_amino_amino } from "../../../amino/amino_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cosmos/bank/v1beta1/genesis.proto.
 */
export const file_cosmos_bank_v1beta1_genesis: GenFile = /*@__PURE__*/
  fileDesc("CiFjb3Ntb3MvYmFuay92MWJldGExL2dlbmVzaXMucHJvdG8SE2Nvc21vcy5iYW5rLnYxYmV0YTEi+QIKDEdlbmVzaXNTdGF0ZRI2CgZwYXJhbXMYASABKAsyGy5jb3Ntb3MuYmFuay52MWJldGExLlBhcmFtc0IJyN4fAKjnsCoBEjkKCGJhbGFuY2VzGAIgAygLMhwuY29zbW9zLmJhbmsudjFiZXRhMS5CYWxhbmNlQgnI3h8AqOewKgEScQoGc3VwcGx5GAMgAygLMhkuY29zbW9zLmJhc2UudjFiZXRhMS5Db2luQkbI3h8Aqt8fKGdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMuQ29pbnOa57AqDGxlZ2FjeV9jb2luc6jnsCoBEkAKDmRlbm9tX21ldGFkYXRhGAQgAygLMh0uY29zbW9zLmJhbmsudjFiZXRhMS5NZXRhZGF0YUIJyN4fAKjnsCoBEkEKDHNlbmRfZW5hYmxlZBgFIAMoCzIgLmNvc21vcy5iYW5rLnYxYmV0YTEuU2VuZEVuYWJsZWRCCcjeHwCo57AqASKwAQoHQmFsYW5jZRIpCgdhZGRyZXNzGAEgASgJQhjStC0UY29zbW9zLkFkZHJlc3NTdHJpbmcScAoFY29pbnMYAiADKAsyGS5jb3Ntb3MuYmFzZS52MWJldGExLkNvaW5CRsjeHwCq3x8oZ2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5Db2luc5rnsCoMbGVnYWN5X2NvaW5zqOewKgE6CIigHwDooB8AQitaKWdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9iYW5rL3R5cGVzYgZwcm90bzM", [file_gogoproto_gogo, file_cosmos_base_v1beta1_coin, file_cosmos_bank_v1beta1_bank, file_cosmos_proto_cosmos, file_amino_amino]);

/**
 * GenesisState defines the bank module's genesis state.
 *
 * @generated from message cosmos.bank.v1beta1.GenesisState
 */
export type GenesisState = Message<"cosmos.bank.v1beta1.GenesisState"> & {
  /**
   * params defines all the parameters of the module.
   *
   * @generated from field: cosmos.bank.v1beta1.Params params = 1;
   */
  params?: Params;

  /**
   * balances is an array containing the balances of all the accounts.
   *
   * @generated from field: repeated cosmos.bank.v1beta1.Balance balances = 2;
   */
  balances: Balance[];

  /**
   * supply represents the total supply. If it is left empty, then supply will be calculated based on the provided
   * balances. Otherwise, it will be used to validate that the sum of the balances equals this amount.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin supply = 3;
   */
  supply: Coin[];

  /**
   * denom_metadata defines the metadata of the different coins.
   *
   * @generated from field: repeated cosmos.bank.v1beta1.Metadata denom_metadata = 4;
   */
  denomMetadata: Metadata[];

  /**
   * send_enabled defines the denoms where send is enabled or disabled.
   *
   * Since: cosmos-sdk 0.47
   *
   * @generated from field: repeated cosmos.bank.v1beta1.SendEnabled send_enabled = 5;
   */
  sendEnabled: SendEnabled[];
};

/**
 * Describes the message cosmos.bank.v1beta1.GenesisState.
 * Use `create(GenesisStateSchema)` to create a new message.
 */
export const GenesisStateSchema: GenMessage<GenesisState> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_genesis, 0);

/**
 * Balance defines an account address and balance pair used in the bank module's
 * genesis state.
 *
 * @generated from message cosmos.bank.v1beta1.Balance
 */
export type Balance = Message<"cosmos.bank.v1beta1.Balance"> & {
  /**
   * address is the address of the balance holder.
   *
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * coins defines the different coins this balance holds.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin coins = 2;
   */
  coins: Coin[];
};

/**
 * Describes the message cosmos.bank.v1beta1.Balance.
 * Use `create(BalanceSchema)` to create a new message.
 */
export const BalanceSchema: GenMessage<Balance> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_genesis, 1);

