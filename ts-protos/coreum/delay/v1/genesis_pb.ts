// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file coreum/delay/v1/genesis.proto (package coreum.delay.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb";
import type { Any, Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any, file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file coreum/delay/v1/genesis.proto.
 */
export const file_coreum_delay_v1_genesis: GenFile = /*@__PURE__*/
  fileDesc("Ch1jb3JldW0vZGVsYXkvdjEvZ2VuZXNpcy5wcm90bxIPY29yZXVtLmRlbGF5LnYxIkkKDEdlbmVzaXNTdGF0ZRI5Cg1kZWxheWVkX2l0ZW1zGAEgAygLMhwuY29yZXVtLmRlbGF5LnYxLkRlbGF5ZWRJdGVtQgTI3h8AInsKC0RlbGF5ZWRJdGVtEgoKAmlkGAEgASgJEjwKDmV4ZWN1dGlvbl90aW1lGAIgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcEIIyN4fAJDfHwESIgoEZGF0YRgDIAEoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnlCNVozZ2l0aHViLmNvbS9Db3JldW1Gb3VuZGF0aW9uL2NvcmV1bS92NC94L2RlbGF5L3R5cGVzYgZwcm90bzM", [file_gogoproto_gogo, file_google_protobuf_any, file_google_protobuf_timestamp]);

/**
 * GenesisState defines the module genesis state.
 *
 * @generated from message coreum.delay.v1.GenesisState
 */
export type GenesisState = Message<"coreum.delay.v1.GenesisState"> & {
  /**
   * tokens keep the fungible token state
   *
   * @generated from field: repeated coreum.delay.v1.DelayedItem delayed_items = 1;
   */
  delayedItems: DelayedItem[];
};

/**
 * Describes the message coreum.delay.v1.GenesisState.
 * Use `create(GenesisStateSchema)` to create a new message.
 */
export const GenesisStateSchema: GenMessage<GenesisState> = /*@__PURE__*/
  messageDesc(file_coreum_delay_v1_genesis, 0);

/**
 * @generated from message coreum.delay.v1.DelayedItem
 */
export type DelayedItem = Message<"coreum.delay.v1.DelayedItem"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: google.protobuf.Timestamp execution_time = 2;
   */
  executionTime?: Timestamp;

  /**
   * @generated from field: google.protobuf.Any data = 3;
   */
  data?: Any;
};

/**
 * Describes the message coreum.delay.v1.DelayedItem.
 * Use `create(DelayedItemSchema)` to create a new message.
 */
export const DelayedItemSchema: GenMessage<DelayedItem> = /*@__PURE__*/
  messageDesc(file_coreum_delay_v1_genesis, 1);

