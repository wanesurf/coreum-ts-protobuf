// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file coreum/asset/ft/v1/token.proto (package coreum.asset.ft.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../../../gogoproto/gogo_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file coreum/asset/ft/v1/token.proto.
 */
export const file_coreum_asset_ft_v1_token: GenFile = /*@__PURE__*/
  fileDesc("Ch5jb3JldW0vYXNzZXQvZnQvdjEvdG9rZW4ucHJvdG8SEmNvcmV1bS5hc3NldC5mdC52MSLqAgoKRGVmaW5pdGlvbhINCgVkZW5vbRgBIAEoCRIOCgZpc3N1ZXIYAiABKAkSLQoIZmVhdHVyZXMYAyADKA4yGy5jb3JldW0uYXNzZXQuZnQudjEuRmVhdHVyZRI2CglidXJuX3JhdGUYBCABKAlCI8jeHwDa3h8bY29zbW9zc2RrLmlvL21hdGguTGVnYWN5RGVjEkEKFHNlbmRfY29tbWlzc2lvbl9yYXRlGAUgASgJQiPI3h8A2t4fG2Nvc21vc3Nkay5pby9tYXRoLkxlZ2FjeURlYxIPCgd2ZXJzaW9uGAYgASgNEhQKA3VyaRgHIAEoCUIH4t4fA1VSSRIdCgh1cmlfaGFzaBgIIAEoCUIL4t4fB1VSSUhhc2gSNAoUZXh0ZW5zaW9uX2N3X2FkZHJlc3MYCSABKAlCFuLeHxJFeHRlbnNpb25DV0FkZHJlc3MSDQoFYWRtaW4YCiABKAk6CIigHwDooB8AIo8ECgVUb2tlbhINCgVkZW5vbRgBIAEoCRIOCgZpc3N1ZXIYAiABKAkSDgoGc3ltYm9sGAMgASgJEg8KB3N1YnVuaXQYBCABKAkSEQoJcHJlY2lzaW9uGAUgASgNEhMKC2Rlc2NyaXB0aW9uGAYgASgJEhcKD2dsb2JhbGx5X2Zyb3plbhgHIAEoCBItCghmZWF0dXJlcxgIIAMoDjIbLmNvcmV1bS5hc3NldC5mdC52MS5GZWF0dXJlEjYKCWJ1cm5fcmF0ZRgJIAEoCUIjyN4fANreHxtjb3Ntb3NzZGsuaW8vbWF0aC5MZWdhY3lEZWMSQQoUc2VuZF9jb21taXNzaW9uX3JhdGUYCiABKAlCI8jeHwDa3h8bY29zbW9zc2RrLmlvL21hdGguTGVnYWN5RGVjEg8KB3ZlcnNpb24YCyABKA0SFAoDdXJpGAwgASgJQgfi3h8DVVJJEh0KCHVyaV9oYXNoGA0gASgJQgvi3h8HVVJJSGFzaBI0ChRleHRlbnNpb25fY3dfYWRkcmVzcxgOIAEoCUIW4t4fEkV4dGVuc2lvbkNXQWRkcmVzcxINCgVhZG1pbhgPIAEoCRJGCgxkZXhfc2V0dGluZ3MYECABKAsyHy5jb3JldW0uYXNzZXQuZnQudjEuREVYU2V0dGluZ3NCD+LeHwtERVhTZXR0aW5nczoIiKAfAOigHwAiJgoVRGVsYXllZFRva2VuVXBncmFkZVYxEg0KBWRlbm9tGAEgASgJIp0BChRUb2tlblVwZ3JhZGVWMVN0YXR1cxITCgtpYmNfZW5hYmxlZBgBIAEoCBI4CgpzdGFydF90aW1lGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEIIyN4fAJDfHwESNgoIZW5kX3RpbWUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQgjI3h8AkN8fASJMChRUb2tlblVwZ3JhZGVTdGF0dXNlcxI0CgJ2MRgBIAEoCzIoLmNvcmV1bS5hc3NldC5mdC52MS5Ub2tlblVwZ3JhZGVWMVN0YXR1cyJOCgtERVhTZXR0aW5ncxI/ChJ1bmlmaWVkX3JlZl9hbW91bnQYASABKAlCI8jeHwDa3h8bY29zbW9zc2RrLmlvL21hdGguTGVnYWN5RGVjKoQBCgdGZWF0dXJlEgsKB21pbnRpbmcQABILCgdidXJuaW5nEAESDAoIZnJlZXppbmcQAhIQCgx3aGl0ZWxpc3RpbmcQAxIHCgNpYmMQBBIZChVibG9ja19zbWFydF9jb250cmFjdHMQBRIMCghjbGF3YmFjaxAGEg0KCWV4dGVuc2lvbhAHQjhaNmdpdGh1Yi5jb20vQ29yZXVtRm91bmRhdGlvbi9jb3JldW0vdjQveC9hc3NldC9mdC90eXBlc2IGcHJvdG8z", [file_gogoproto_gogo, file_google_protobuf_timestamp]);

/**
 * Definition defines the fungible token settings to store.
 *
 * @generated from message coreum.asset.ft.v1.Definition
 */
export type Definition = Message<"coreum.asset.ft.v1.Definition"> & {
  /**
   * @generated from field: string denom = 1;
   */
  denom: string;

  /**
   * @generated from field: string issuer = 2;
   */
  issuer: string;

  /**
   * @generated from field: repeated coreum.asset.ft.v1.Feature features = 3;
   */
  features: Feature[];

  /**
   * burn_rate is a number between 0 and 1 which will be multiplied by send amount to determine
   * burn_amount. This value will be burnt on top of the send amount.
   *
   * @generated from field: string burn_rate = 4;
   */
  burnRate: string;

  /**
   * send_commission_rate is a number between 0 and 1 which will be multiplied by send amount to determine
   * amount sent to the token admin account.
   *
   * @generated from field: string send_commission_rate = 5;
   */
  sendCommissionRate: string;

  /**
   * @generated from field: uint32 version = 6;
   */
  version: number;

  /**
   * @generated from field: string uri = 7;
   */
  uri: string;

  /**
   * @generated from field: string uri_hash = 8;
   */
  uriHash: string;

  /**
   * @generated from field: string extension_cw_address = 9;
   */
  extensionCwAddress: string;

  /**
   * @generated from field: string admin = 10;
   */
  admin: string;
};

/**
 * Describes the message coreum.asset.ft.v1.Definition.
 * Use `create(DefinitionSchema)` to create a new message.
 */
export const DefinitionSchema: GenMessage<Definition> = /*@__PURE__*/
  messageDesc(file_coreum_asset_ft_v1_token, 0);

/**
 * Token is a full representation of the fungible token.
 *
 * @generated from message coreum.asset.ft.v1.Token
 */
export type Token = Message<"coreum.asset.ft.v1.Token"> & {
  /**
   * @generated from field: string denom = 1;
   */
  denom: string;

  /**
   * @generated from field: string issuer = 2;
   */
  issuer: string;

  /**
   * @generated from field: string symbol = 3;
   */
  symbol: string;

  /**
   * @generated from field: string subunit = 4;
   */
  subunit: string;

  /**
   * @generated from field: uint32 precision = 5;
   */
  precision: number;

  /**
   * @generated from field: string description = 6;
   */
  description: string;

  /**
   * @generated from field: bool globally_frozen = 7;
   */
  globallyFrozen: boolean;

  /**
   * @generated from field: repeated coreum.asset.ft.v1.Feature features = 8;
   */
  features: Feature[];

  /**
   * burn_rate is a number between 0 and 1 which will be multiplied by send amount to determine
   * burn_amount. This value will be burnt on top of the send amount.
   *
   * @generated from field: string burn_rate = 9;
   */
  burnRate: string;

  /**
   * send_commission_rate is a number between 0 and 1 which will be multiplied by send amount to determine
   * amount sent to the token admin account.
   *
   * @generated from field: string send_commission_rate = 10;
   */
  sendCommissionRate: string;

  /**
   * @generated from field: uint32 version = 11;
   */
  version: number;

  /**
   * @generated from field: string uri = 12;
   */
  uri: string;

  /**
   * @generated from field: string uri_hash = 13;
   */
  uriHash: string;

  /**
   * @generated from field: string extension_cw_address = 14;
   */
  extensionCwAddress: string;

  /**
   * @generated from field: string admin = 15;
   */
  admin: string;

  /**
   * @generated from field: coreum.asset.ft.v1.DEXSettings dex_settings = 16;
   */
  dexSettings?: DEXSettings;
};

/**
 * Describes the message coreum.asset.ft.v1.Token.
 * Use `create(TokenSchema)` to create a new message.
 */
export const TokenSchema: GenMessage<Token> = /*@__PURE__*/
  messageDesc(file_coreum_asset_ft_v1_token, 1);

/**
 * DelayedTokenUpgradeV1 is executed by the delay module when it's time to enable IBC.
 *
 * @generated from message coreum.asset.ft.v1.DelayedTokenUpgradeV1
 */
export type DelayedTokenUpgradeV1 = Message<"coreum.asset.ft.v1.DelayedTokenUpgradeV1"> & {
  /**
   * @generated from field: string denom = 1;
   */
  denom: string;
};

/**
 * Describes the message coreum.asset.ft.v1.DelayedTokenUpgradeV1.
 * Use `create(DelayedTokenUpgradeV1Schema)` to create a new message.
 */
export const DelayedTokenUpgradeV1Schema: GenMessage<DelayedTokenUpgradeV1> = /*@__PURE__*/
  messageDesc(file_coreum_asset_ft_v1_token, 2);

/**
 * TokenUpgradeV1Status defines the current status of the v1 token migration.
 *
 * @generated from message coreum.asset.ft.v1.TokenUpgradeV1Status
 */
export type TokenUpgradeV1Status = Message<"coreum.asset.ft.v1.TokenUpgradeV1Status"> & {
  /**
   * @generated from field: bool ibc_enabled = 1;
   */
  ibcEnabled: boolean;

  /**
   * @generated from field: google.protobuf.Timestamp start_time = 2;
   */
  startTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp end_time = 3;
   */
  endTime?: Timestamp;
};

/**
 * Describes the message coreum.asset.ft.v1.TokenUpgradeV1Status.
 * Use `create(TokenUpgradeV1StatusSchema)` to create a new message.
 */
export const TokenUpgradeV1StatusSchema: GenMessage<TokenUpgradeV1Status> = /*@__PURE__*/
  messageDesc(file_coreum_asset_ft_v1_token, 3);

/**
 * TokenUpgradeStatuses defines all statuses of the token migrations.
 *
 * @generated from message coreum.asset.ft.v1.TokenUpgradeStatuses
 */
export type TokenUpgradeStatuses = Message<"coreum.asset.ft.v1.TokenUpgradeStatuses"> & {
  /**
   * @generated from field: coreum.asset.ft.v1.TokenUpgradeV1Status v1 = 1;
   */
  v1?: TokenUpgradeV1Status;
};

/**
 * Describes the message coreum.asset.ft.v1.TokenUpgradeStatuses.
 * Use `create(TokenUpgradeStatusesSchema)` to create a new message.
 */
export const TokenUpgradeStatusesSchema: GenMessage<TokenUpgradeStatuses> = /*@__PURE__*/
  messageDesc(file_coreum_asset_ft_v1_token, 4);

/**
 * DEXSettings defines the token settings of the dex.
 *
 * @generated from message coreum.asset.ft.v1.DEXSettings
 */
export type DEXSettings = Message<"coreum.asset.ft.v1.DEXSettings"> & {
  /**
   * unified_ref_amount is the approximate amount you need to by 1USD, used to define the price tick size
   *
   * @generated from field: string unified_ref_amount = 1;
   */
  unifiedRefAmount: string;
};

/**
 * Describes the message coreum.asset.ft.v1.DEXSettings.
 * Use `create(DEXSettingsSchema)` to create a new message.
 */
export const DEXSettingsSchema: GenMessage<DEXSettings> = /*@__PURE__*/
  messageDesc(file_coreum_asset_ft_v1_token, 5);

/**
 * Feature defines possible features of fungible token.
 *
 * @generated from enum coreum.asset.ft.v1.Feature
 */
export enum Feature {
  /**
   * @generated from enum value: minting = 0;
   */
  minting = 0,

  /**
   * @generated from enum value: burning = 1;
   */
  burning = 1,

  /**
   * @generated from enum value: freezing = 2;
   */
  freezing = 2,

  /**
   * @generated from enum value: whitelisting = 3;
   */
  whitelisting = 3,

  /**
   * @generated from enum value: ibc = 4;
   */
  ibc = 4,

  /**
   * @generated from enum value: block_smart_contracts = 5;
   */
  block_smart_contracts = 5,

  /**
   * @generated from enum value: clawback = 6;
   */
  clawback = 6,

  /**
   * @generated from enum value: extension = 7;
   */
  extension = 7,
}

/**
 * Describes the enum coreum.asset.ft.v1.Feature.
 */
export const FeatureSchema: GenEnum<Feature> = /*@__PURE__*/
  enumDesc(file_coreum_asset_ft_v1_token, 0);

