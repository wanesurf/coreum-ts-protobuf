// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file cosmos/tx/v1beta1/service.proto (package cosmos.tx.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import { file_google_api_annotations } from "../../../google/api/annotations_pb";
import type { GasInfo, Result, TxResponse } from "../../base/abci/v1beta1/abci_pb";
import { file_cosmos_base_abci_v1beta1_abci } from "../../base/abci/v1beta1/abci_pb";
import type { Tx } from "./tx_pb";
import { file_cosmos_tx_v1beta1_tx } from "./tx_pb";
import type { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb";
import { file_cosmos_base_query_v1beta1_pagination } from "../../base/query/v1beta1/pagination_pb";
import type { Block } from "../../../tendermint/types/block_pb";
import { file_tendermint_types_block } from "../../../tendermint/types/block_pb";
import type { BlockID } from "../../../tendermint/types/types_pb";
import { file_tendermint_types_types } from "../../../tendermint/types/types_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cosmos/tx/v1beta1/service.proto.
 */
export const file_cosmos_tx_v1beta1_service: GenFile = /*@__PURE__*/
  fileDesc("Ch9jb3Ntb3MvdHgvdjFiZXRhMS9zZXJ2aWNlLnByb3RvEhFjb3Ntb3MudHgudjFiZXRhMSLCAQoSR2V0VHhzRXZlbnRSZXF1ZXN0EhIKBmV2ZW50cxgBIAMoCUICGAESPgoKcGFnaW5hdGlvbhgCIAEoCzImLmNvc21vcy5iYXNlLnF1ZXJ5LnYxYmV0YTEuUGFnZVJlcXVlc3RCAhgBEiwKCG9yZGVyX2J5GAMgASgOMhouY29zbW9zLnR4LnYxYmV0YTEuT3JkZXJCeRIMCgRwYWdlGAQgASgEEg0KBWxpbWl0GAUgASgEEg0KBXF1ZXJ5GAYgASgJIsUBChNHZXRUeHNFdmVudFJlc3BvbnNlEiIKA3R4cxgBIAMoCzIVLmNvc21vcy50eC52MWJldGExLlR4EjoKDHR4X3Jlc3BvbnNlcxgCIAMoCzIkLmNvc21vcy5iYXNlLmFiY2kudjFiZXRhMS5UeFJlc3BvbnNlEj8KCnBhZ2luYXRpb24YAyABKAsyJy5jb3Ntb3MuYmFzZS5xdWVyeS52MWJldGExLlBhZ2VSZXNwb25zZUICGAESDQoFdG90YWwYBCABKAQiVgoSQnJvYWRjYXN0VHhSZXF1ZXN0EhAKCHR4X2J5dGVzGAEgASgMEi4KBG1vZGUYAiABKA4yIC5jb3Ntb3MudHgudjFiZXRhMS5Ccm9hZGNhc3RNb2RlIlAKE0Jyb2FkY2FzdFR4UmVzcG9uc2USOQoLdHhfcmVzcG9uc2UYASABKAsyJC5jb3Ntb3MuYmFzZS5hYmNpLnYxYmV0YTEuVHhSZXNwb25zZSJKCg9TaW11bGF0ZVJlcXVlc3QSJQoCdHgYASABKAsyFS5jb3Ntb3MudHgudjFiZXRhMS5UeEICGAESEAoIdHhfYnl0ZXMYAiABKAwieQoQU2ltdWxhdGVSZXNwb25zZRIzCghnYXNfaW5mbxgBIAEoCzIhLmNvc21vcy5iYXNlLmFiY2kudjFiZXRhMS5HYXNJbmZvEjAKBnJlc3VsdBgCIAEoCzIgLmNvc21vcy5iYXNlLmFiY2kudjFiZXRhMS5SZXN1bHQiHAoMR2V0VHhSZXF1ZXN0EgwKBGhhc2gYASABKAkibQoNR2V0VHhSZXNwb25zZRIhCgJ0eBgBIAEoCzIVLmNvc21vcy50eC52MWJldGExLlR4EjkKC3R4X3Jlc3BvbnNlGAIgASgLMiQuY29zbW9zLmJhc2UuYWJjaS52MWJldGExLlR4UmVzcG9uc2UiZAoWR2V0QmxvY2tXaXRoVHhzUmVxdWVzdBIOCgZoZWlnaHQYASABKAMSOgoKcGFnaW5hdGlvbhgCIAEoCzImLmNvc21vcy5iYXNlLnF1ZXJ5LnYxYmV0YTEuUGFnZVJlcXVlc3QizwEKF0dldEJsb2NrV2l0aFR4c1Jlc3BvbnNlEiIKA3R4cxgBIAMoCzIVLmNvc21vcy50eC52MWJldGExLlR4EisKCGJsb2NrX2lkGAIgASgLMhkudGVuZGVybWludC50eXBlcy5CbG9ja0lEEiYKBWJsb2NrGAMgASgLMhcudGVuZGVybWludC50eXBlcy5CbG9jaxI7CgpwYWdpbmF0aW9uGAQgASgLMicuY29zbW9zLmJhc2UucXVlcnkudjFiZXRhMS5QYWdlUmVzcG9uc2UiIwoPVHhEZWNvZGVSZXF1ZXN0EhAKCHR4X2J5dGVzGAEgASgMIjUKEFR4RGVjb2RlUmVzcG9uc2USIQoCdHgYASABKAsyFS5jb3Ntb3MudHgudjFiZXRhMS5UeCI0Cg9UeEVuY29kZVJlcXVlc3QSIQoCdHgYASABKAsyFS5jb3Ntb3MudHgudjFiZXRhMS5UeCIkChBUeEVuY29kZVJlc3BvbnNlEhAKCHR4X2J5dGVzGAEgASgMIioKFFR4RW5jb2RlQW1pbm9SZXF1ZXN0EhIKCmFtaW5vX2pzb24YASABKAkiLQoVVHhFbmNvZGVBbWlub1Jlc3BvbnNlEhQKDGFtaW5vX2JpbmFyeRgBIAEoDCIsChRUeERlY29kZUFtaW5vUmVxdWVzdBIUCgxhbWlub19iaW5hcnkYASABKAwiKwoVVHhEZWNvZGVBbWlub1Jlc3BvbnNlEhIKCmFtaW5vX2pzb24YASABKAkqSAoHT3JkZXJCeRIYChRPUkRFUl9CWV9VTlNQRUNJRklFRBAAEhAKDE9SREVSX0JZX0FTQxABEhEKDU9SREVSX0JZX0RFU0MQAiqAAQoNQnJvYWRjYXN0TW9kZRIeChpCUk9BRENBU1RfTU9ERV9VTlNQRUNJRklFRBAAEhwKFEJST0FEQ0FTVF9NT0RFX0JMT0NLEAEaAggBEhcKE0JST0FEQ0FTVF9NT0RFX1NZTkMQAhIYChRCUk9BRENBU1RfTU9ERV9BU1lOQxADMqoJCgdTZXJ2aWNlEnsKCFNpbXVsYXRlEiIuY29zbW9zLnR4LnYxYmV0YTEuU2ltdWxhdGVSZXF1ZXN0GiMuY29zbW9zLnR4LnYxYmV0YTEuU2ltdWxhdGVSZXNwb25zZSImgtPkkwIgOgEqIhsvY29zbW9zL3R4L3YxYmV0YTEvc2ltdWxhdGUScQoFR2V0VHgSHy5jb3Ntb3MudHgudjFiZXRhMS5HZXRUeFJlcXVlc3QaIC5jb3Ntb3MudHgudjFiZXRhMS5HZXRUeFJlc3BvbnNlIiWC0+STAh8SHS9jb3Ntb3MvdHgvdjFiZXRhMS90eHMve2hhc2h9En8KC0Jyb2FkY2FzdFR4EiUuY29zbW9zLnR4LnYxYmV0YTEuQnJvYWRjYXN0VHhSZXF1ZXN0GiYuY29zbW9zLnR4LnYxYmV0YTEuQnJvYWRjYXN0VHhSZXNwb25zZSIhgtPkkwIbOgEqIhYvY29zbW9zL3R4L3YxYmV0YTEvdHhzEnwKC0dldFR4c0V2ZW50EiUuY29zbW9zLnR4LnYxYmV0YTEuR2V0VHhzRXZlbnRSZXF1ZXN0GiYuY29zbW9zLnR4LnYxYmV0YTEuR2V0VHhzRXZlbnRSZXNwb25zZSIegtPkkwIYEhYvY29zbW9zL3R4L3YxYmV0YTEvdHhzEpcBCg9HZXRCbG9ja1dpdGhUeHMSKS5jb3Ntb3MudHgudjFiZXRhMS5HZXRCbG9ja1dpdGhUeHNSZXF1ZXN0GiouY29zbW9zLnR4LnYxYmV0YTEuR2V0QmxvY2tXaXRoVHhzUmVzcG9uc2UiLYLT5JMCJxIlL2Nvc21vcy90eC92MWJldGExL3R4cy9ibG9jay97aGVpZ2h0fRJ5CghUeERlY29kZRIiLmNvc21vcy50eC52MWJldGExLlR4RGVjb2RlUmVxdWVzdBojLmNvc21vcy50eC52MWJldGExLlR4RGVjb2RlUmVzcG9uc2UiJILT5JMCHjoBKiIZL2Nvc21vcy90eC92MWJldGExL2RlY29kZRJ5CghUeEVuY29kZRIiLmNvc21vcy50eC52MWJldGExLlR4RW5jb2RlUmVxdWVzdBojLmNvc21vcy50eC52MWJldGExLlR4RW5jb2RlUmVzcG9uc2UiJILT5JMCHjoBKiIZL2Nvc21vcy90eC92MWJldGExL2VuY29kZRKOAQoNVHhFbmNvZGVBbWlubxInLmNvc21vcy50eC52MWJldGExLlR4RW5jb2RlQW1pbm9SZXF1ZXN0GiguY29zbW9zLnR4LnYxYmV0YTEuVHhFbmNvZGVBbWlub1Jlc3BvbnNlIiqC0+STAiQ6ASoiHy9jb3Ntb3MvdHgvdjFiZXRhMS9lbmNvZGUvYW1pbm8SjgEKDVR4RGVjb2RlQW1pbm8SJy5jb3Ntb3MudHgudjFiZXRhMS5UeERlY29kZUFtaW5vUmVxdWVzdBooLmNvc21vcy50eC52MWJldGExLlR4RGVjb2RlQW1pbm9SZXNwb25zZSIqgtPkkwIkOgEqIh8vY29zbW9zL3R4L3YxYmV0YTEvZGVjb2RlL2FtaW5vQidaJWdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvdHlwZXMvdHhiBnByb3RvMw", [file_google_api_annotations, file_cosmos_base_abci_v1beta1_abci, file_cosmos_tx_v1beta1_tx, file_cosmos_base_query_v1beta1_pagination, file_tendermint_types_block, file_tendermint_types_types]);

/**
 * GetTxsEventRequest is the request type for the Service.TxsByEvents
 * RPC method.
 *
 * @generated from message cosmos.tx.v1beta1.GetTxsEventRequest
 */
export type GetTxsEventRequest = Message<"cosmos.tx.v1beta1.GetTxsEventRequest"> & {
  /**
   * events is the list of transaction event type.
   * Deprecated post v0.47.x: use query instead, which should contain a valid
   * events query.
   *
   * @generated from field: repeated string events = 1 [deprecated = true];
   * @deprecated
   */
  events: string[];

  /**
   * pagination defines a pagination for the request.
   * Deprecated post v0.46.x: use page and limit instead.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2 [deprecated = true];
   * @deprecated
   */
  pagination?: PageRequest;

  /**
   * @generated from field: cosmos.tx.v1beta1.OrderBy order_by = 3;
   */
  orderBy: OrderBy;

  /**
   * page is the page number to query, starts at 1. If not provided, will
   * default to first page.
   *
   * @generated from field: uint64 page = 4;
   */
  page: bigint;

  /**
   * limit is the total number of results to be returned in the result page.
   * If left empty it will default to a value to be set by each app.
   *
   * @generated from field: uint64 limit = 5;
   */
  limit: bigint;

  /**
   * query defines the transaction event query that is proxied to Tendermint's
   * TxSearch RPC method. The query must be valid.
   *
   * Since cosmos-sdk 0.50
   *
   * @generated from field: string query = 6;
   */
  query: string;
};

/**
 * Describes the message cosmos.tx.v1beta1.GetTxsEventRequest.
 * Use `create(GetTxsEventRequestSchema)` to create a new message.
 */
export const GetTxsEventRequestSchema: GenMessage<GetTxsEventRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_tx_v1beta1_service, 0);

/**
 * GetTxsEventResponse is the response type for the Service.TxsByEvents
 * RPC method.
 *
 * @generated from message cosmos.tx.v1beta1.GetTxsEventResponse
 */
export type GetTxsEventResponse = Message<"cosmos.tx.v1beta1.GetTxsEventResponse"> & {
  /**
   * txs is the list of queried transactions.
   *
   * @generated from field: repeated cosmos.tx.v1beta1.Tx txs = 1;
   */
  txs: Tx[];

  /**
   * tx_responses is the list of queried TxResponses.
   *
   * @generated from field: repeated cosmos.base.abci.v1beta1.TxResponse tx_responses = 2;
   */
  txResponses: TxResponse[];

  /**
   * pagination defines a pagination for the response.
   * Deprecated post v0.46.x: use total instead.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 3 [deprecated = true];
   * @deprecated
   */
  pagination?: PageResponse;

  /**
   * total is total number of results available
   *
   * @generated from field: uint64 total = 4;
   */
  total: bigint;
};

/**
 * Describes the message cosmos.tx.v1beta1.GetTxsEventResponse.
 * Use `create(GetTxsEventResponseSchema)` to create a new message.
 */
export const GetTxsEventResponseSchema: GenMessage<GetTxsEventResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_tx_v1beta1_service, 1);

/**
 * BroadcastTxRequest is the request type for the Service.BroadcastTxRequest
 * RPC method.
 *
 * @generated from message cosmos.tx.v1beta1.BroadcastTxRequest
 */
export type BroadcastTxRequest = Message<"cosmos.tx.v1beta1.BroadcastTxRequest"> & {
  /**
   * tx_bytes is the raw transaction.
   *
   * @generated from field: bytes tx_bytes = 1;
   */
  txBytes: Uint8Array;

  /**
   * @generated from field: cosmos.tx.v1beta1.BroadcastMode mode = 2;
   */
  mode: BroadcastMode;
};

/**
 * Describes the message cosmos.tx.v1beta1.BroadcastTxRequest.
 * Use `create(BroadcastTxRequestSchema)` to create a new message.
 */
export const BroadcastTxRequestSchema: GenMessage<BroadcastTxRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_tx_v1beta1_service, 2);

/**
 * BroadcastTxResponse is the response type for the
 * Service.BroadcastTx method.
 *
 * @generated from message cosmos.tx.v1beta1.BroadcastTxResponse
 */
export type BroadcastTxResponse = Message<"cosmos.tx.v1beta1.BroadcastTxResponse"> & {
  /**
   * tx_response is the queried TxResponses.
   *
   * @generated from field: cosmos.base.abci.v1beta1.TxResponse tx_response = 1;
   */
  txResponse?: TxResponse;
};

/**
 * Describes the message cosmos.tx.v1beta1.BroadcastTxResponse.
 * Use `create(BroadcastTxResponseSchema)` to create a new message.
 */
export const BroadcastTxResponseSchema: GenMessage<BroadcastTxResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_tx_v1beta1_service, 3);

/**
 * SimulateRequest is the request type for the Service.Simulate
 * RPC method.
 *
 * @generated from message cosmos.tx.v1beta1.SimulateRequest
 */
export type SimulateRequest = Message<"cosmos.tx.v1beta1.SimulateRequest"> & {
  /**
   * tx is the transaction to simulate.
   * Deprecated. Send raw tx bytes instead.
   *
   * @generated from field: cosmos.tx.v1beta1.Tx tx = 1 [deprecated = true];
   * @deprecated
   */
  tx?: Tx;

  /**
   * tx_bytes is the raw transaction.
   *
   * Since: cosmos-sdk 0.43
   *
   * @generated from field: bytes tx_bytes = 2;
   */
  txBytes: Uint8Array;
};

/**
 * Describes the message cosmos.tx.v1beta1.SimulateRequest.
 * Use `create(SimulateRequestSchema)` to create a new message.
 */
export const SimulateRequestSchema: GenMessage<SimulateRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_tx_v1beta1_service, 4);

/**
 * SimulateResponse is the response type for the
 * Service.SimulateRPC method.
 *
 * @generated from message cosmos.tx.v1beta1.SimulateResponse
 */
export type SimulateResponse = Message<"cosmos.tx.v1beta1.SimulateResponse"> & {
  /**
   * gas_info is the information about gas used in the simulation.
   *
   * @generated from field: cosmos.base.abci.v1beta1.GasInfo gas_info = 1;
   */
  gasInfo?: GasInfo;

  /**
   * result is the result of the simulation.
   *
   * @generated from field: cosmos.base.abci.v1beta1.Result result = 2;
   */
  result?: Result;
};

/**
 * Describes the message cosmos.tx.v1beta1.SimulateResponse.
 * Use `create(SimulateResponseSchema)` to create a new message.
 */
export const SimulateResponseSchema: GenMessage<SimulateResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_tx_v1beta1_service, 5);

/**
 * GetTxRequest is the request type for the Service.GetTx
 * RPC method.
 *
 * @generated from message cosmos.tx.v1beta1.GetTxRequest
 */
export type GetTxRequest = Message<"cosmos.tx.v1beta1.GetTxRequest"> & {
  /**
   * hash is the tx hash to query, encoded as a hex string.
   *
   * @generated from field: string hash = 1;
   */
  hash: string;
};

/**
 * Describes the message cosmos.tx.v1beta1.GetTxRequest.
 * Use `create(GetTxRequestSchema)` to create a new message.
 */
export const GetTxRequestSchema: GenMessage<GetTxRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_tx_v1beta1_service, 6);

/**
 * GetTxResponse is the response type for the Service.GetTx method.
 *
 * @generated from message cosmos.tx.v1beta1.GetTxResponse
 */
export type GetTxResponse = Message<"cosmos.tx.v1beta1.GetTxResponse"> & {
  /**
   * tx is the queried transaction.
   *
   * @generated from field: cosmos.tx.v1beta1.Tx tx = 1;
   */
  tx?: Tx;

  /**
   * tx_response is the queried TxResponses.
   *
   * @generated from field: cosmos.base.abci.v1beta1.TxResponse tx_response = 2;
   */
  txResponse?: TxResponse;
};

/**
 * Describes the message cosmos.tx.v1beta1.GetTxResponse.
 * Use `create(GetTxResponseSchema)` to create a new message.
 */
export const GetTxResponseSchema: GenMessage<GetTxResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_tx_v1beta1_service, 7);

/**
 * GetBlockWithTxsRequest is the request type for the Service.GetBlockWithTxs
 * RPC method.
 *
 * Since: cosmos-sdk 0.45.2
 *
 * @generated from message cosmos.tx.v1beta1.GetBlockWithTxsRequest
 */
export type GetBlockWithTxsRequest = Message<"cosmos.tx.v1beta1.GetBlockWithTxsRequest"> & {
  /**
   * height is the height of the block to query.
   *
   * @generated from field: int64 height = 1;
   */
  height: bigint;

  /**
   * pagination defines a pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
   */
  pagination?: PageRequest;
};

/**
 * Describes the message cosmos.tx.v1beta1.GetBlockWithTxsRequest.
 * Use `create(GetBlockWithTxsRequestSchema)` to create a new message.
 */
export const GetBlockWithTxsRequestSchema: GenMessage<GetBlockWithTxsRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_tx_v1beta1_service, 8);

/**
 * GetBlockWithTxsResponse is the response type for the Service.GetBlockWithTxs
 * method.
 *
 * Since: cosmos-sdk 0.45.2
 *
 * @generated from message cosmos.tx.v1beta1.GetBlockWithTxsResponse
 */
export type GetBlockWithTxsResponse = Message<"cosmos.tx.v1beta1.GetBlockWithTxsResponse"> & {
  /**
   * txs are the transactions in the block.
   *
   * @generated from field: repeated cosmos.tx.v1beta1.Tx txs = 1;
   */
  txs: Tx[];

  /**
   * @generated from field: tendermint.types.BlockID block_id = 2;
   */
  blockId?: BlockID;

  /**
   * @generated from field: tendermint.types.Block block = 3;
   */
  block?: Block;

  /**
   * pagination defines a pagination for the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 4;
   */
  pagination?: PageResponse;
};

/**
 * Describes the message cosmos.tx.v1beta1.GetBlockWithTxsResponse.
 * Use `create(GetBlockWithTxsResponseSchema)` to create a new message.
 */
export const GetBlockWithTxsResponseSchema: GenMessage<GetBlockWithTxsResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_tx_v1beta1_service, 9);

/**
 * TxDecodeRequest is the request type for the Service.TxDecode
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxDecodeRequest
 */
export type TxDecodeRequest = Message<"cosmos.tx.v1beta1.TxDecodeRequest"> & {
  /**
   * tx_bytes is the raw transaction.
   *
   * @generated from field: bytes tx_bytes = 1;
   */
  txBytes: Uint8Array;
};

/**
 * Describes the message cosmos.tx.v1beta1.TxDecodeRequest.
 * Use `create(TxDecodeRequestSchema)` to create a new message.
 */
export const TxDecodeRequestSchema: GenMessage<TxDecodeRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_tx_v1beta1_service, 10);

/**
 * TxDecodeResponse is the response type for the
 * Service.TxDecode method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxDecodeResponse
 */
export type TxDecodeResponse = Message<"cosmos.tx.v1beta1.TxDecodeResponse"> & {
  /**
   * tx is the decoded transaction.
   *
   * @generated from field: cosmos.tx.v1beta1.Tx tx = 1;
   */
  tx?: Tx;
};

/**
 * Describes the message cosmos.tx.v1beta1.TxDecodeResponse.
 * Use `create(TxDecodeResponseSchema)` to create a new message.
 */
export const TxDecodeResponseSchema: GenMessage<TxDecodeResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_tx_v1beta1_service, 11);

/**
 * TxEncodeRequest is the request type for the Service.TxEncode
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxEncodeRequest
 */
export type TxEncodeRequest = Message<"cosmos.tx.v1beta1.TxEncodeRequest"> & {
  /**
   * tx is the transaction to encode.
   *
   * @generated from field: cosmos.tx.v1beta1.Tx tx = 1;
   */
  tx?: Tx;
};

/**
 * Describes the message cosmos.tx.v1beta1.TxEncodeRequest.
 * Use `create(TxEncodeRequestSchema)` to create a new message.
 */
export const TxEncodeRequestSchema: GenMessage<TxEncodeRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_tx_v1beta1_service, 12);

/**
 * TxEncodeResponse is the response type for the
 * Service.TxEncode method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxEncodeResponse
 */
export type TxEncodeResponse = Message<"cosmos.tx.v1beta1.TxEncodeResponse"> & {
  /**
   * tx_bytes is the encoded transaction bytes.
   *
   * @generated from field: bytes tx_bytes = 1;
   */
  txBytes: Uint8Array;
};

/**
 * Describes the message cosmos.tx.v1beta1.TxEncodeResponse.
 * Use `create(TxEncodeResponseSchema)` to create a new message.
 */
export const TxEncodeResponseSchema: GenMessage<TxEncodeResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_tx_v1beta1_service, 13);

/**
 * TxEncodeAminoRequest is the request type for the Service.TxEncodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxEncodeAminoRequest
 */
export type TxEncodeAminoRequest = Message<"cosmos.tx.v1beta1.TxEncodeAminoRequest"> & {
  /**
   * @generated from field: string amino_json = 1;
   */
  aminoJson: string;
};

/**
 * Describes the message cosmos.tx.v1beta1.TxEncodeAminoRequest.
 * Use `create(TxEncodeAminoRequestSchema)` to create a new message.
 */
export const TxEncodeAminoRequestSchema: GenMessage<TxEncodeAminoRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_tx_v1beta1_service, 14);

/**
 * TxEncodeAminoResponse is the response type for the Service.TxEncodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxEncodeAminoResponse
 */
export type TxEncodeAminoResponse = Message<"cosmos.tx.v1beta1.TxEncodeAminoResponse"> & {
  /**
   * @generated from field: bytes amino_binary = 1;
   */
  aminoBinary: Uint8Array;
};

/**
 * Describes the message cosmos.tx.v1beta1.TxEncodeAminoResponse.
 * Use `create(TxEncodeAminoResponseSchema)` to create a new message.
 */
export const TxEncodeAminoResponseSchema: GenMessage<TxEncodeAminoResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_tx_v1beta1_service, 15);

/**
 * TxDecodeAminoRequest is the request type for the Service.TxDecodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxDecodeAminoRequest
 */
export type TxDecodeAminoRequest = Message<"cosmos.tx.v1beta1.TxDecodeAminoRequest"> & {
  /**
   * @generated from field: bytes amino_binary = 1;
   */
  aminoBinary: Uint8Array;
};

/**
 * Describes the message cosmos.tx.v1beta1.TxDecodeAminoRequest.
 * Use `create(TxDecodeAminoRequestSchema)` to create a new message.
 */
export const TxDecodeAminoRequestSchema: GenMessage<TxDecodeAminoRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_tx_v1beta1_service, 16);

/**
 * TxDecodeAminoResponse is the response type for the Service.TxDecodeAmino
 * RPC method.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.tx.v1beta1.TxDecodeAminoResponse
 */
export type TxDecodeAminoResponse = Message<"cosmos.tx.v1beta1.TxDecodeAminoResponse"> & {
  /**
   * @generated from field: string amino_json = 1;
   */
  aminoJson: string;
};

/**
 * Describes the message cosmos.tx.v1beta1.TxDecodeAminoResponse.
 * Use `create(TxDecodeAminoResponseSchema)` to create a new message.
 */
export const TxDecodeAminoResponseSchema: GenMessage<TxDecodeAminoResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_tx_v1beta1_service, 17);

/**
 * OrderBy defines the sorting order
 *
 * @generated from enum cosmos.tx.v1beta1.OrderBy
 */
export enum OrderBy {
  /**
   * ORDER_BY_UNSPECIFIED specifies an unknown sorting order. OrderBy defaults
   * to ASC in this case.
   *
   * @generated from enum value: ORDER_BY_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * ORDER_BY_ASC defines ascending order
   *
   * @generated from enum value: ORDER_BY_ASC = 1;
   */
  ASC = 1,

  /**
   * ORDER_BY_DESC defines descending order
   *
   * @generated from enum value: ORDER_BY_DESC = 2;
   */
  DESC = 2,
}

/**
 * Describes the enum cosmos.tx.v1beta1.OrderBy.
 */
export const OrderBySchema: GenEnum<OrderBy> = /*@__PURE__*/
  enumDesc(file_cosmos_tx_v1beta1_service, 0);

/**
 * BroadcastMode specifies the broadcast mode for the TxService.Broadcast RPC
 * method.
 *
 * @generated from enum cosmos.tx.v1beta1.BroadcastMode
 */
export enum BroadcastMode {
  /**
   * zero-value for mode ordering
   *
   * @generated from enum value: BROADCAST_MODE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * DEPRECATED: use BROADCAST_MODE_SYNC instead,
   * BROADCAST_MODE_BLOCK is not supported by the SDK from v0.47.x onwards.
   *
   * @generated from enum value: BROADCAST_MODE_BLOCK = 1 [deprecated = true];
   * @deprecated
   */
  BLOCK = 1,

  /**
   * BROADCAST_MODE_SYNC defines a tx broadcasting mode where the client waits
   * for a CheckTx execution response only.
   *
   * @generated from enum value: BROADCAST_MODE_SYNC = 2;
   */
  SYNC = 2,

  /**
   * BROADCAST_MODE_ASYNC defines a tx broadcasting mode where the client
   * returns immediately.
   *
   * @generated from enum value: BROADCAST_MODE_ASYNC = 3;
   */
  ASYNC = 3,
}

/**
 * Describes the enum cosmos.tx.v1beta1.BroadcastMode.
 */
export const BroadcastModeSchema: GenEnum<BroadcastMode> = /*@__PURE__*/
  enumDesc(file_cosmos_tx_v1beta1_service, 1);

/**
 * Service defines a gRPC service for interacting with transactions.
 *
 * @generated from service cosmos.tx.v1beta1.Service
 */
export const Service: GenService<{
  /**
   * Simulate simulates executing a transaction for estimating gas usage.
   *
   * @generated from rpc cosmos.tx.v1beta1.Service.Simulate
   */
  simulate: {
    methodKind: "unary";
    input: typeof SimulateRequestSchema;
    output: typeof SimulateResponseSchema;
  },
  /**
   * GetTx fetches a tx by hash.
   *
   * @generated from rpc cosmos.tx.v1beta1.Service.GetTx
   */
  getTx: {
    methodKind: "unary";
    input: typeof GetTxRequestSchema;
    output: typeof GetTxResponseSchema;
  },
  /**
   * BroadcastTx broadcast transaction.
   *
   * @generated from rpc cosmos.tx.v1beta1.Service.BroadcastTx
   */
  broadcastTx: {
    methodKind: "unary";
    input: typeof BroadcastTxRequestSchema;
    output: typeof BroadcastTxResponseSchema;
  },
  /**
   * GetTxsEvent fetches txs by event.
   *
   * @generated from rpc cosmos.tx.v1beta1.Service.GetTxsEvent
   */
  getTxsEvent: {
    methodKind: "unary";
    input: typeof GetTxsEventRequestSchema;
    output: typeof GetTxsEventResponseSchema;
  },
  /**
   * GetBlockWithTxs fetches a block with decoded txs.
   *
   * Since: cosmos-sdk 0.45.2
   *
   * @generated from rpc cosmos.tx.v1beta1.Service.GetBlockWithTxs
   */
  getBlockWithTxs: {
    methodKind: "unary";
    input: typeof GetBlockWithTxsRequestSchema;
    output: typeof GetBlockWithTxsResponseSchema;
  },
  /**
   * TxDecode decodes the transaction.
   *
   * Since: cosmos-sdk 0.47
   *
   * @generated from rpc cosmos.tx.v1beta1.Service.TxDecode
   */
  txDecode: {
    methodKind: "unary";
    input: typeof TxDecodeRequestSchema;
    output: typeof TxDecodeResponseSchema;
  },
  /**
   * TxEncode encodes the transaction.
   *
   * Since: cosmos-sdk 0.47
   *
   * @generated from rpc cosmos.tx.v1beta1.Service.TxEncode
   */
  txEncode: {
    methodKind: "unary";
    input: typeof TxEncodeRequestSchema;
    output: typeof TxEncodeResponseSchema;
  },
  /**
   * TxEncodeAmino encodes an Amino transaction from JSON to encoded bytes.
   *
   * Since: cosmos-sdk 0.47
   *
   * @generated from rpc cosmos.tx.v1beta1.Service.TxEncodeAmino
   */
  txEncodeAmino: {
    methodKind: "unary";
    input: typeof TxEncodeAminoRequestSchema;
    output: typeof TxEncodeAminoResponseSchema;
  },
  /**
   * TxDecodeAmino decodes an Amino transaction from encoded bytes to JSON.
   *
   * Since: cosmos-sdk 0.47
   *
   * @generated from rpc cosmos.tx.v1beta1.Service.TxDecodeAmino
   */
  txDecodeAmino: {
    methodKind: "unary";
    input: typeof TxDecodeAminoRequestSchema;
    output: typeof TxDecodeAminoResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_cosmos_tx_v1beta1_service, 0);

