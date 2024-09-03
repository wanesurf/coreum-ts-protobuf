// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file cosmos/bank/v1beta1/query.proto (package cosmos.bank.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb";
import { file_cosmos_base_query_v1beta1_pagination } from "../../base/query/v1beta1/pagination_pb";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb";
import { file_google_api_annotations } from "../../../google/api/annotations_pb";
import type { Coin } from "../../base/v1beta1/coin_pb";
import { file_cosmos_base_v1beta1_coin } from "../../base/v1beta1/coin_pb";
import type { Metadata, Params, SendEnabled } from "./bank_pb";
import { file_cosmos_bank_v1beta1_bank } from "./bank_pb";
import { file_cosmos_proto_cosmos } from "../../../cosmos_proto/cosmos_pb";
import { file_cosmos_query_v1_query } from "../../query/v1/query_pb";
import { file_amino_amino } from "../../../amino/amino_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cosmos/bank/v1beta1/query.proto.
 */
export const file_cosmos_bank_v1beta1_query: GenFile = /*@__PURE__*/
  fileDesc("Ch9jb3Ntb3MvYmFuay92MWJldGExL3F1ZXJ5LnByb3RvEhNjb3Ntb3MuYmFuay52MWJldGExIlkKE1F1ZXJ5QmFsYW5jZVJlcXVlc3QSKQoHYWRkcmVzcxgBIAEoCUIY0rQtFGNvc21vcy5BZGRyZXNzU3RyaW5nEg0KBWRlbm9tGAIgASgJOgiIoB8A6KAfACJCChRRdWVyeUJhbGFuY2VSZXNwb25zZRIqCgdiYWxhbmNlGAEgASgLMhkuY29zbW9zLmJhc2UudjFiZXRhMS5Db2luIqEBChdRdWVyeUFsbEJhbGFuY2VzUmVxdWVzdBIpCgdhZGRyZXNzGAEgASgJQhjStC0UY29zbW9zLkFkZHJlc3NTdHJpbmcSOgoKcGFnaW5hdGlvbhgCIAEoCzImLmNvc21vcy5iYXNlLnF1ZXJ5LnYxYmV0YTEuUGFnZVJlcXVlc3QSFQoNcmVzb2x2ZV9kZW5vbRgDIAEoCDoIiKAfAOigHwAizAEKGFF1ZXJ5QWxsQmFsYW5jZXNSZXNwb25zZRJzCghiYWxhbmNlcxgBIAMoCzIZLmNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbkJGyN4fAKrfHyhnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkNvaW5zmuewKgxsZWdhY3lfY29pbnOo57AqARI7CgpwYWdpbmF0aW9uGAIgASgLMicuY29zbW9zLmJhc2UucXVlcnkudjFiZXRhMS5QYWdlUmVzcG9uc2UikAEKHVF1ZXJ5U3BlbmRhYmxlQmFsYW5jZXNSZXF1ZXN0EikKB2FkZHJlc3MYASABKAlCGNK0LRRjb3Ntb3MuQWRkcmVzc1N0cmluZxI6CgpwYWdpbmF0aW9uGAIgASgLMiYuY29zbW9zLmJhc2UucXVlcnkudjFiZXRhMS5QYWdlUmVxdWVzdDoIiKAfAOigHwAi0gEKHlF1ZXJ5U3BlbmRhYmxlQmFsYW5jZXNSZXNwb25zZRJzCghiYWxhbmNlcxgBIAMoCzIZLmNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbkJGyN4fAKrfHyhnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3R5cGVzLkNvaW5zmuewKgxsZWdhY3lfY29pbnOo57AqARI7CgpwYWdpbmF0aW9uGAIgASgLMicuY29zbW9zLmJhc2UucXVlcnkudjFiZXRhMS5QYWdlUmVzcG9uc2UiaQojUXVlcnlTcGVuZGFibGVCYWxhbmNlQnlEZW5vbVJlcXVlc3QSKQoHYWRkcmVzcxgBIAEoCUIY0rQtFGNvc21vcy5BZGRyZXNzU3RyaW5nEg0KBWRlbm9tGAIgASgJOgiIoB8A6KAfACJSCiRRdWVyeVNwZW5kYWJsZUJhbGFuY2VCeURlbm9tUmVzcG9uc2USKgoHYmFsYW5jZRgBIAEoCzIZLmNvc21vcy5iYXNlLnYxYmV0YTEuQ29pbiJfChdRdWVyeVRvdGFsU3VwcGx5UmVxdWVzdBI6CgpwYWdpbmF0aW9uGAEgASgLMiYuY29zbW9zLmJhc2UucXVlcnkudjFiZXRhMS5QYWdlUmVxdWVzdDoIiKAfAOigHwAiygEKGFF1ZXJ5VG90YWxTdXBwbHlSZXNwb25zZRJxCgZzdXBwbHkYASADKAsyGS5jb3Ntb3MuYmFzZS52MWJldGExLkNvaW5CRsjeHwCq3x8oZ2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay90eXBlcy5Db2luc5rnsCoMbGVnYWN5X2NvaW5zqOewKgESOwoKcGFnaW5hdGlvbhgCIAEoCzInLmNvc21vcy5iYXNlLnF1ZXJ5LnYxYmV0YTEuUGFnZVJlc3BvbnNlIiUKFFF1ZXJ5U3VwcGx5T2ZSZXF1ZXN0Eg0KBWRlbm9tGAEgASgJIk0KFVF1ZXJ5U3VwcGx5T2ZSZXNwb25zZRI0CgZhbW91bnQYASABKAsyGS5jb3Ntb3MuYmFzZS52MWJldGExLkNvaW5CCcjeHwCo57AqASIUChJRdWVyeVBhcmFtc1JlcXVlc3QiTQoTUXVlcnlQYXJhbXNSZXNwb25zZRI2CgZwYXJhbXMYASABKAsyGy5jb3Ntb3MuYmFuay52MWJldGExLlBhcmFtc0IJyN4fAKjnsCoBIlgKGlF1ZXJ5RGVub21zTWV0YWRhdGFSZXF1ZXN0EjoKCnBhZ2luYXRpb24YASABKAsyJi5jb3Ntb3MuYmFzZS5xdWVyeS52MWJldGExLlBhZ2VSZXF1ZXN0IpcBChtRdWVyeURlbm9tc01ldGFkYXRhUmVzcG9uc2USOwoJbWV0YWRhdGFzGAEgAygLMh0uY29zbW9zLmJhbmsudjFiZXRhMS5NZXRhZGF0YUIJyN4fAKjnsCoBEjsKCnBhZ2luYXRpb24YAiABKAsyJy5jb3Ntb3MuYmFzZS5xdWVyeS52MWJldGExLlBhZ2VSZXNwb25zZSIqChlRdWVyeURlbm9tTWV0YWRhdGFSZXF1ZXN0Eg0KBWRlbm9tGAEgASgJIlgKGlF1ZXJ5RGVub21NZXRhZGF0YVJlc3BvbnNlEjoKCG1ldGFkYXRhGAEgASgLMh0uY29zbW9zLmJhbmsudjFiZXRhMS5NZXRhZGF0YUIJyN4fAKjnsCoBIjcKJlF1ZXJ5RGVub21NZXRhZGF0YUJ5UXVlcnlTdHJpbmdSZXF1ZXN0Eg0KBWRlbm9tGAEgASgJImUKJ1F1ZXJ5RGVub21NZXRhZGF0YUJ5UXVlcnlTdHJpbmdSZXNwb25zZRI6CghtZXRhZGF0YRgBIAEoCzIdLmNvc21vcy5iYW5rLnYxYmV0YTEuTWV0YWRhdGFCCcjeHwCo57AqASJkChdRdWVyeURlbm9tT3duZXJzUmVxdWVzdBINCgVkZW5vbRgBIAEoCRI6CgpwYWdpbmF0aW9uGAIgASgLMiYuY29zbW9zLmJhc2UucXVlcnkudjFiZXRhMS5QYWdlUmVxdWVzdCJuCgpEZW5vbU93bmVyEikKB2FkZHJlc3MYASABKAlCGNK0LRRjb3Ntb3MuQWRkcmVzc1N0cmluZxI1CgdiYWxhbmNlGAIgASgLMhkuY29zbW9zLmJhc2UudjFiZXRhMS5Db2luQgnI3h8AqOewKgEijgEKGFF1ZXJ5RGVub21Pd25lcnNSZXNwb25zZRI1CgxkZW5vbV9vd25lcnMYASADKAsyHy5jb3Ntb3MuYmFuay52MWJldGExLkRlbm9tT3duZXISOwoKcGFnaW5hdGlvbhgCIAEoCzInLmNvc21vcy5iYXNlLnF1ZXJ5LnYxYmV0YTEuUGFnZVJlc3BvbnNlImsKHlF1ZXJ5RGVub21Pd25lcnNCeVF1ZXJ5UmVxdWVzdBINCgVkZW5vbRgBIAEoCRI6CgpwYWdpbmF0aW9uGAIgASgLMiYuY29zbW9zLmJhc2UucXVlcnkudjFiZXRhMS5QYWdlUmVxdWVzdCKVAQofUXVlcnlEZW5vbU93bmVyc0J5UXVlcnlSZXNwb25zZRI1CgxkZW5vbV9vd25lcnMYASADKAsyHy5jb3Ntb3MuYmFuay52MWJldGExLkRlbm9tT3duZXISOwoKcGFnaW5hdGlvbhgCIAEoCzInLmNvc21vcy5iYXNlLnF1ZXJ5LnYxYmV0YTEuUGFnZVJlc3BvbnNlImUKF1F1ZXJ5U2VuZEVuYWJsZWRSZXF1ZXN0Eg4KBmRlbm9tcxgBIAMoCRI6CgpwYWdpbmF0aW9uGGMgASgLMiYuY29zbW9zLmJhc2UucXVlcnkudjFiZXRhMS5QYWdlUmVxdWVzdCKPAQoYUXVlcnlTZW5kRW5hYmxlZFJlc3BvbnNlEjYKDHNlbmRfZW5hYmxlZBgBIAMoCzIgLmNvc21vcy5iYW5rLnYxYmV0YTEuU2VuZEVuYWJsZWQSOwoKcGFnaW5hdGlvbhhjIAEoCzInLmNvc21vcy5iYXNlLnF1ZXJ5LnYxYmV0YTEuUGFnZVJlc3BvbnNlMsoRCgVRdWVyeRKdAQoHQmFsYW5jZRIoLmNvc21vcy5iYW5rLnYxYmV0YTEuUXVlcnlCYWxhbmNlUmVxdWVzdBopLmNvc21vcy5iYW5rLnYxYmV0YTEuUXVlcnlCYWxhbmNlUmVzcG9uc2UiPYjnsCoBgtPkkwIyEjAvY29zbW9zL2JhbmsvdjFiZXRhMS9iYWxhbmNlcy97YWRkcmVzc30vYnlfZGVub20SoAEKC0FsbEJhbGFuY2VzEiwuY29zbW9zLmJhbmsudjFiZXRhMS5RdWVyeUFsbEJhbGFuY2VzUmVxdWVzdBotLmNvc21vcy5iYW5rLnYxYmV0YTEuUXVlcnlBbGxCYWxhbmNlc1Jlc3BvbnNlIjSI57AqAYLT5JMCKRInL2Nvc21vcy9iYW5rL3YxYmV0YTEvYmFsYW5jZXMve2FkZHJlc3N9ErwBChFTcGVuZGFibGVCYWxhbmNlcxIyLmNvc21vcy5iYW5rLnYxYmV0YTEuUXVlcnlTcGVuZGFibGVCYWxhbmNlc1JlcXVlc3QaMy5jb3Ntb3MuYmFuay52MWJldGExLlF1ZXJ5U3BlbmRhYmxlQmFsYW5jZXNSZXNwb25zZSI+iOewKgGC0+STAjMSMS9jb3Ntb3MvYmFuay92MWJldGExL3NwZW5kYWJsZV9iYWxhbmNlcy97YWRkcmVzc30S1wEKF1NwZW5kYWJsZUJhbGFuY2VCeURlbm9tEjguY29zbW9zLmJhbmsudjFiZXRhMS5RdWVyeVNwZW5kYWJsZUJhbGFuY2VCeURlbm9tUmVxdWVzdBo5LmNvc21vcy5iYW5rLnYxYmV0YTEuUXVlcnlTcGVuZGFibGVCYWxhbmNlQnlEZW5vbVJlc3BvbnNlIkeI57AqAYLT5JMCPBI6L2Nvc21vcy9iYW5rL3YxYmV0YTEvc3BlbmRhYmxlX2JhbGFuY2VzL3thZGRyZXNzfS9ieV9kZW5vbRKUAQoLVG90YWxTdXBwbHkSLC5jb3Ntb3MuYmFuay52MWJldGExLlF1ZXJ5VG90YWxTdXBwbHlSZXF1ZXN0Gi0uY29zbW9zLmJhbmsudjFiZXRhMS5RdWVyeVRvdGFsU3VwcGx5UmVzcG9uc2UiKIjnsCoBgtPkkwIdEhsvY29zbW9zL2JhbmsvdjFiZXRhMS9zdXBwbHkSlAEKCFN1cHBseU9mEikuY29zbW9zLmJhbmsudjFiZXRhMS5RdWVyeVN1cHBseU9mUmVxdWVzdBoqLmNvc21vcy5iYW5rLnYxYmV0YTEuUXVlcnlTdXBwbHlPZlJlc3BvbnNlIjGI57AqAYLT5JMCJhIkL2Nvc21vcy9iYW5rL3YxYmV0YTEvc3VwcGx5L2J5X2Rlbm9tEoUBCgZQYXJhbXMSJy5jb3Ntb3MuYmFuay52MWJldGExLlF1ZXJ5UGFyYW1zUmVxdWVzdBooLmNvc21vcy5iYW5rLnYxYmV0YTEuUXVlcnlQYXJhbXNSZXNwb25zZSIoiOewKgGC0+STAh0SGy9jb3Ntb3MvYmFuay92MWJldGExL3BhcmFtcxKrAQoNRGVub21NZXRhZGF0YRIuLmNvc21vcy5iYW5rLnYxYmV0YTEuUXVlcnlEZW5vbU1ldGFkYXRhUmVxdWVzdBovLmNvc21vcy5iYW5rLnYxYmV0YTEuUXVlcnlEZW5vbU1ldGFkYXRhUmVzcG9uc2UiOYjnsCoBgtPkkwIuEiwvY29zbW9zL2JhbmsvdjFiZXRhMS9kZW5vbXNfbWV0YWRhdGEve2Rlbm9tfRLaAQoaRGVub21NZXRhZGF0YUJ5UXVlcnlTdHJpbmcSOy5jb3Ntb3MuYmFuay52MWJldGExLlF1ZXJ5RGVub21NZXRhZGF0YUJ5UXVlcnlTdHJpbmdSZXF1ZXN0GjwuY29zbW9zLmJhbmsudjFiZXRhMS5RdWVyeURlbm9tTWV0YWRhdGFCeVF1ZXJ5U3RyaW5nUmVzcG9uc2UiQYjnsCoBgtPkkwI2EjQvY29zbW9zL2JhbmsvdjFiZXRhMS9kZW5vbXNfbWV0YWRhdGFfYnlfcXVlcnlfc3RyaW5nEqYBCg5EZW5vbXNNZXRhZGF0YRIvLmNvc21vcy5iYW5rLnYxYmV0YTEuUXVlcnlEZW5vbXNNZXRhZGF0YVJlcXVlc3QaMC5jb3Ntb3MuYmFuay52MWJldGExLlF1ZXJ5RGVub21zTWV0YWRhdGFSZXNwb25zZSIxiOewKgGC0+STAiYSJC9jb3Ntb3MvYmFuay92MWJldGExL2Rlbm9tc19tZXRhZGF0YRKiAQoLRGVub21Pd25lcnMSLC5jb3Ntb3MuYmFuay52MWJldGExLlF1ZXJ5RGVub21Pd25lcnNSZXF1ZXN0Gi0uY29zbW9zLmJhbmsudjFiZXRhMS5RdWVyeURlbm9tT3duZXJzUmVzcG9uc2UiNojnsCoBgtPkkwIrEikvY29zbW9zL2JhbmsvdjFiZXRhMS9kZW5vbV9vd25lcnMve2Rlbm9tfRK4AQoSRGVub21Pd25lcnNCeVF1ZXJ5EjMuY29zbW9zLmJhbmsudjFiZXRhMS5RdWVyeURlbm9tT3duZXJzQnlRdWVyeVJlcXVlc3QaNC5jb3Ntb3MuYmFuay52MWJldGExLlF1ZXJ5RGVub21Pd25lcnNCeVF1ZXJ5UmVzcG9uc2UiN4jnsCoBgtPkkwIsEiovY29zbW9zL2JhbmsvdjFiZXRhMS9kZW5vbV9vd25lcnNfYnlfcXVlcnkSmgEKC1NlbmRFbmFibGVkEiwuY29zbW9zLmJhbmsudjFiZXRhMS5RdWVyeVNlbmRFbmFibGVkUmVxdWVzdBotLmNvc21vcy5iYW5rLnYxYmV0YTEuUXVlcnlTZW5kRW5hYmxlZFJlc3BvbnNlIi6I57AqAYLT5JMCIxIhL2Nvc21vcy9iYW5rL3YxYmV0YTEvc2VuZF9lbmFibGVkQitaKWdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsveC9iYW5rL3R5cGVzYgZwcm90bzM", [file_cosmos_base_query_v1beta1_pagination, file_gogoproto_gogo, file_google_api_annotations, file_cosmos_base_v1beta1_coin, file_cosmos_bank_v1beta1_bank, file_cosmos_proto_cosmos, file_cosmos_query_v1_query, file_amino_amino]);

/**
 * QueryBalanceRequest is the request type for the Query/Balance RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryBalanceRequest
 */
export type QueryBalanceRequest = Message<"cosmos.bank.v1beta1.QueryBalanceRequest"> & {
  /**
   * address is the address to query balances for.
   *
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * denom is the coin denom to query balances for.
   *
   * @generated from field: string denom = 2;
   */
  denom: string;
};

/**
 * Describes the message cosmos.bank.v1beta1.QueryBalanceRequest.
 * Use `create(QueryBalanceRequestSchema)` to create a new message.
 */
export const QueryBalanceRequestSchema: GenMessage<QueryBalanceRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 0);

/**
 * QueryBalanceResponse is the response type for the Query/Balance RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryBalanceResponse
 */
export type QueryBalanceResponse = Message<"cosmos.bank.v1beta1.QueryBalanceResponse"> & {
  /**
   * balance is the balance of the coin.
   *
   * @generated from field: cosmos.base.v1beta1.Coin balance = 1;
   */
  balance?: Coin;
};

/**
 * Describes the message cosmos.bank.v1beta1.QueryBalanceResponse.
 * Use `create(QueryBalanceResponseSchema)` to create a new message.
 */
export const QueryBalanceResponseSchema: GenMessage<QueryBalanceResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 1);

/**
 * QueryBalanceRequest is the request type for the Query/AllBalances RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryAllBalancesRequest
 */
export type QueryAllBalancesRequest = Message<"cosmos.bank.v1beta1.QueryAllBalancesRequest"> & {
  /**
   * address is the address to query balances for.
   *
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * pagination defines an optional pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
   */
  pagination?: PageRequest;

  /**
   * resolve_denom is the flag to resolve the denom into a human-readable form from the metadata.
   *
   * Since: cosmos-sdk 0.50
   *
   * @generated from field: bool resolve_denom = 3;
   */
  resolveDenom: boolean;
};

/**
 * Describes the message cosmos.bank.v1beta1.QueryAllBalancesRequest.
 * Use `create(QueryAllBalancesRequestSchema)` to create a new message.
 */
export const QueryAllBalancesRequestSchema: GenMessage<QueryAllBalancesRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 2);

/**
 * QueryAllBalancesResponse is the response type for the Query/AllBalances RPC
 * method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryAllBalancesResponse
 */
export type QueryAllBalancesResponse = Message<"cosmos.bank.v1beta1.QueryAllBalancesResponse"> & {
  /**
   * balances is the balances of all the coins.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin balances = 1;
   */
  balances: Coin[];

  /**
   * pagination defines the pagination in the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;
};

/**
 * Describes the message cosmos.bank.v1beta1.QueryAllBalancesResponse.
 * Use `create(QueryAllBalancesResponseSchema)` to create a new message.
 */
export const QueryAllBalancesResponseSchema: GenMessage<QueryAllBalancesResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 3);

/**
 * QuerySpendableBalancesRequest defines the gRPC request structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.bank.v1beta1.QuerySpendableBalancesRequest
 */
export type QuerySpendableBalancesRequest = Message<"cosmos.bank.v1beta1.QuerySpendableBalancesRequest"> & {
  /**
   * address is the address to query spendable balances for.
   *
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * pagination defines an optional pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
   */
  pagination?: PageRequest;
};

/**
 * Describes the message cosmos.bank.v1beta1.QuerySpendableBalancesRequest.
 * Use `create(QuerySpendableBalancesRequestSchema)` to create a new message.
 */
export const QuerySpendableBalancesRequestSchema: GenMessage<QuerySpendableBalancesRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 4);

/**
 * QuerySpendableBalancesResponse defines the gRPC response structure for querying
 * an account's spendable balances.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.bank.v1beta1.QuerySpendableBalancesResponse
 */
export type QuerySpendableBalancesResponse = Message<"cosmos.bank.v1beta1.QuerySpendableBalancesResponse"> & {
  /**
   * balances is the spendable balances of all the coins.
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin balances = 1;
   */
  balances: Coin[];

  /**
   * pagination defines the pagination in the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;
};

/**
 * Describes the message cosmos.bank.v1beta1.QuerySpendableBalancesResponse.
 * Use `create(QuerySpendableBalancesResponseSchema)` to create a new message.
 */
export const QuerySpendableBalancesResponseSchema: GenMessage<QuerySpendableBalancesResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 5);

/**
 * QuerySpendableBalanceByDenomRequest defines the gRPC request structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest
 */
export type QuerySpendableBalanceByDenomRequest = Message<"cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest"> & {
  /**
   * address is the address to query balances for.
   *
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * denom is the coin denom to query balances for.
   *
   * @generated from field: string denom = 2;
   */
  denom: string;
};

/**
 * Describes the message cosmos.bank.v1beta1.QuerySpendableBalanceByDenomRequest.
 * Use `create(QuerySpendableBalanceByDenomRequestSchema)` to create a new message.
 */
export const QuerySpendableBalanceByDenomRequestSchema: GenMessage<QuerySpendableBalanceByDenomRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 6);

/**
 * QuerySpendableBalanceByDenomResponse defines the gRPC response structure for
 * querying an account's spendable balance for a specific denom.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse
 */
export type QuerySpendableBalanceByDenomResponse = Message<"cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse"> & {
  /**
   * balance is the balance of the coin.
   *
   * @generated from field: cosmos.base.v1beta1.Coin balance = 1;
   */
  balance?: Coin;
};

/**
 * Describes the message cosmos.bank.v1beta1.QuerySpendableBalanceByDenomResponse.
 * Use `create(QuerySpendableBalanceByDenomResponseSchema)` to create a new message.
 */
export const QuerySpendableBalanceByDenomResponseSchema: GenMessage<QuerySpendableBalanceByDenomResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 7);

/**
 * QueryTotalSupplyRequest is the request type for the Query/TotalSupply RPC
 * method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryTotalSupplyRequest
 */
export type QueryTotalSupplyRequest = Message<"cosmos.bank.v1beta1.QueryTotalSupplyRequest"> & {
  /**
   * pagination defines an optional pagination for the request.
   *
   * Since: cosmos-sdk 0.43
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;
};

/**
 * Describes the message cosmos.bank.v1beta1.QueryTotalSupplyRequest.
 * Use `create(QueryTotalSupplyRequestSchema)` to create a new message.
 */
export const QueryTotalSupplyRequestSchema: GenMessage<QueryTotalSupplyRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 8);

/**
 * QueryTotalSupplyResponse is the response type for the Query/TotalSupply RPC
 * method
 *
 * @generated from message cosmos.bank.v1beta1.QueryTotalSupplyResponse
 */
export type QueryTotalSupplyResponse = Message<"cosmos.bank.v1beta1.QueryTotalSupplyResponse"> & {
  /**
   * supply is the supply of the coins
   *
   * @generated from field: repeated cosmos.base.v1beta1.Coin supply = 1;
   */
  supply: Coin[];

  /**
   * pagination defines the pagination in the response.
   *
   * Since: cosmos-sdk 0.43
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;
};

/**
 * Describes the message cosmos.bank.v1beta1.QueryTotalSupplyResponse.
 * Use `create(QueryTotalSupplyResponseSchema)` to create a new message.
 */
export const QueryTotalSupplyResponseSchema: GenMessage<QueryTotalSupplyResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 9);

/**
 * QuerySupplyOfRequest is the request type for the Query/SupplyOf RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QuerySupplyOfRequest
 */
export type QuerySupplyOfRequest = Message<"cosmos.bank.v1beta1.QuerySupplyOfRequest"> & {
  /**
   * denom is the coin denom to query balances for.
   *
   * @generated from field: string denom = 1;
   */
  denom: string;
};

/**
 * Describes the message cosmos.bank.v1beta1.QuerySupplyOfRequest.
 * Use `create(QuerySupplyOfRequestSchema)` to create a new message.
 */
export const QuerySupplyOfRequestSchema: GenMessage<QuerySupplyOfRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 10);

/**
 * QuerySupplyOfResponse is the response type for the Query/SupplyOf RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QuerySupplyOfResponse
 */
export type QuerySupplyOfResponse = Message<"cosmos.bank.v1beta1.QuerySupplyOfResponse"> & {
  /**
   * amount is the supply of the coin.
   *
   * @generated from field: cosmos.base.v1beta1.Coin amount = 1;
   */
  amount?: Coin;
};

/**
 * Describes the message cosmos.bank.v1beta1.QuerySupplyOfResponse.
 * Use `create(QuerySupplyOfResponseSchema)` to create a new message.
 */
export const QuerySupplyOfResponseSchema: GenMessage<QuerySupplyOfResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 11);

/**
 * QueryParamsRequest defines the request type for querying x/bank parameters.
 *
 * @generated from message cosmos.bank.v1beta1.QueryParamsRequest
 */
export type QueryParamsRequest = Message<"cosmos.bank.v1beta1.QueryParamsRequest"> & {
};

/**
 * Describes the message cosmos.bank.v1beta1.QueryParamsRequest.
 * Use `create(QueryParamsRequestSchema)` to create a new message.
 */
export const QueryParamsRequestSchema: GenMessage<QueryParamsRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 12);

/**
 * QueryParamsResponse defines the response type for querying x/bank parameters.
 *
 * @generated from message cosmos.bank.v1beta1.QueryParamsResponse
 */
export type QueryParamsResponse = Message<"cosmos.bank.v1beta1.QueryParamsResponse"> & {
  /**
   * params provides the parameters of the bank module.
   *
   * @generated from field: cosmos.bank.v1beta1.Params params = 1;
   */
  params?: Params;
};

/**
 * Describes the message cosmos.bank.v1beta1.QueryParamsResponse.
 * Use `create(QueryParamsResponseSchema)` to create a new message.
 */
export const QueryParamsResponseSchema: GenMessage<QueryParamsResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 13);

/**
 * QueryDenomsMetadataRequest is the request type for the Query/DenomsMetadata RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomsMetadataRequest
 */
export type QueryDenomsMetadataRequest = Message<"cosmos.bank.v1beta1.QueryDenomsMetadataRequest"> & {
  /**
   * pagination defines an optional pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 1;
   */
  pagination?: PageRequest;
};

/**
 * Describes the message cosmos.bank.v1beta1.QueryDenomsMetadataRequest.
 * Use `create(QueryDenomsMetadataRequestSchema)` to create a new message.
 */
export const QueryDenomsMetadataRequestSchema: GenMessage<QueryDenomsMetadataRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 14);

/**
 * QueryDenomsMetadataResponse is the response type for the Query/DenomsMetadata RPC
 * method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomsMetadataResponse
 */
export type QueryDenomsMetadataResponse = Message<"cosmos.bank.v1beta1.QueryDenomsMetadataResponse"> & {
  /**
   * metadata provides the client information for all the registered tokens.
   *
   * @generated from field: repeated cosmos.bank.v1beta1.Metadata metadatas = 1;
   */
  metadatas: Metadata[];

  /**
   * pagination defines the pagination in the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;
};

/**
 * Describes the message cosmos.bank.v1beta1.QueryDenomsMetadataResponse.
 * Use `create(QueryDenomsMetadataResponseSchema)` to create a new message.
 */
export const QueryDenomsMetadataResponseSchema: GenMessage<QueryDenomsMetadataResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 15);

/**
 * QueryDenomMetadataRequest is the request type for the Query/DenomMetadata RPC method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomMetadataRequest
 */
export type QueryDenomMetadataRequest = Message<"cosmos.bank.v1beta1.QueryDenomMetadataRequest"> & {
  /**
   * denom is the coin denom to query the metadata for.
   *
   * @generated from field: string denom = 1;
   */
  denom: string;
};

/**
 * Describes the message cosmos.bank.v1beta1.QueryDenomMetadataRequest.
 * Use `create(QueryDenomMetadataRequestSchema)` to create a new message.
 */
export const QueryDenomMetadataRequestSchema: GenMessage<QueryDenomMetadataRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 16);

/**
 * QueryDenomMetadataResponse is the response type for the Query/DenomMetadata RPC
 * method.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomMetadataResponse
 */
export type QueryDenomMetadataResponse = Message<"cosmos.bank.v1beta1.QueryDenomMetadataResponse"> & {
  /**
   * metadata describes and provides all the client information for the requested token.
   *
   * @generated from field: cosmos.bank.v1beta1.Metadata metadata = 1;
   */
  metadata?: Metadata;
};

/**
 * Describes the message cosmos.bank.v1beta1.QueryDenomMetadataResponse.
 * Use `create(QueryDenomMetadataResponseSchema)` to create a new message.
 */
export const QueryDenomMetadataResponseSchema: GenMessage<QueryDenomMetadataResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 17);

/**
 * QueryDenomMetadataByQueryStringRequest is the request type for the Query/DenomMetadata RPC method.
 * Identical with QueryDenomMetadataRequest but receives denom as query string.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest
 */
export type QueryDenomMetadataByQueryStringRequest = Message<"cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest"> & {
  /**
   * denom is the coin denom to query the metadata for.
   *
   * @generated from field: string denom = 1;
   */
  denom: string;
};

/**
 * Describes the message cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringRequest.
 * Use `create(QueryDenomMetadataByQueryStringRequestSchema)` to create a new message.
 */
export const QueryDenomMetadataByQueryStringRequestSchema: GenMessage<QueryDenomMetadataByQueryStringRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 18);

/**
 * QueryDenomMetadataByQueryStringResponse is the response type for the Query/DenomMetadata RPC
 * method. Identical with QueryDenomMetadataResponse but receives denom as query string in request.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse
 */
export type QueryDenomMetadataByQueryStringResponse = Message<"cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse"> & {
  /**
   * metadata describes and provides all the client information for the requested token.
   *
   * @generated from field: cosmos.bank.v1beta1.Metadata metadata = 1;
   */
  metadata?: Metadata;
};

/**
 * Describes the message cosmos.bank.v1beta1.QueryDenomMetadataByQueryStringResponse.
 * Use `create(QueryDenomMetadataByQueryStringResponseSchema)` to create a new message.
 */
export const QueryDenomMetadataByQueryStringResponseSchema: GenMessage<QueryDenomMetadataByQueryStringResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 19);

/**
 * QueryDenomOwnersRequest defines the request type for the DenomOwners RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomOwnersRequest
 */
export type QueryDenomOwnersRequest = Message<"cosmos.bank.v1beta1.QueryDenomOwnersRequest"> & {
  /**
   * denom defines the coin denomination to query all account holders for.
   *
   * @generated from field: string denom = 1;
   */
  denom: string;

  /**
   * pagination defines an optional pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
   */
  pagination?: PageRequest;
};

/**
 * Describes the message cosmos.bank.v1beta1.QueryDenomOwnersRequest.
 * Use `create(QueryDenomOwnersRequestSchema)` to create a new message.
 */
export const QueryDenomOwnersRequestSchema: GenMessage<QueryDenomOwnersRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 20);

/**
 * DenomOwner defines structure representing an account that owns or holds a
 * particular denominated token. It contains the account address and account
 * balance of the denominated token.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.bank.v1beta1.DenomOwner
 */
export type DenomOwner = Message<"cosmos.bank.v1beta1.DenomOwner"> & {
  /**
   * address defines the address that owns a particular denomination.
   *
   * @generated from field: string address = 1;
   */
  address: string;

  /**
   * balance is the balance of the denominated coin for an account.
   *
   * @generated from field: cosmos.base.v1beta1.Coin balance = 2;
   */
  balance?: Coin;
};

/**
 * Describes the message cosmos.bank.v1beta1.DenomOwner.
 * Use `create(DenomOwnerSchema)` to create a new message.
 */
export const DenomOwnerSchema: GenMessage<DenomOwner> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 21);

/**
 * QueryDenomOwnersResponse defines the RPC response of a DenomOwners RPC query.
 *
 * Since: cosmos-sdk 0.46
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomOwnersResponse
 */
export type QueryDenomOwnersResponse = Message<"cosmos.bank.v1beta1.QueryDenomOwnersResponse"> & {
  /**
   * @generated from field: repeated cosmos.bank.v1beta1.DenomOwner denom_owners = 1;
   */
  denomOwners: DenomOwner[];

  /**
   * pagination defines the pagination in the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;
};

/**
 * Describes the message cosmos.bank.v1beta1.QueryDenomOwnersResponse.
 * Use `create(QueryDenomOwnersResponseSchema)` to create a new message.
 */
export const QueryDenomOwnersResponseSchema: GenMessage<QueryDenomOwnersResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 22);

/**
 * QueryDenomOwnersByQueryRequest defines the request type for the DenomOwnersByQuery RPC query,
 * which queries for a paginated set of all account holders of a particular
 * denomination.
 *
 * Since: cosmos-sdk 0.50.3
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest
 */
export type QueryDenomOwnersByQueryRequest = Message<"cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest"> & {
  /**
   * denom defines the coin denomination to query all account holders for.
   *
   * @generated from field: string denom = 1;
   */
  denom: string;

  /**
   * pagination defines an optional pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
   */
  pagination?: PageRequest;
};

/**
 * Describes the message cosmos.bank.v1beta1.QueryDenomOwnersByQueryRequest.
 * Use `create(QueryDenomOwnersByQueryRequestSchema)` to create a new message.
 */
export const QueryDenomOwnersByQueryRequestSchema: GenMessage<QueryDenomOwnersByQueryRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 23);

/**
 * QueryDenomOwnersByQueryResponse defines the RPC response of a DenomOwnersByQuery RPC query.
 *
 * Since: cosmos-sdk 0.50.3
 *
 * @generated from message cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse
 */
export type QueryDenomOwnersByQueryResponse = Message<"cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse"> & {
  /**
   * @generated from field: repeated cosmos.bank.v1beta1.DenomOwner denom_owners = 1;
   */
  denomOwners: DenomOwner[];

  /**
   * pagination defines the pagination in the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;
};

/**
 * Describes the message cosmos.bank.v1beta1.QueryDenomOwnersByQueryResponse.
 * Use `create(QueryDenomOwnersByQueryResponseSchema)` to create a new message.
 */
export const QueryDenomOwnersByQueryResponseSchema: GenMessage<QueryDenomOwnersByQueryResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 24);

/**
 * QuerySendEnabledRequest defines the RPC request for looking up SendEnabled entries.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.bank.v1beta1.QuerySendEnabledRequest
 */
export type QuerySendEnabledRequest = Message<"cosmos.bank.v1beta1.QuerySendEnabledRequest"> & {
  /**
   * denoms is the specific denoms you want look up. Leave empty to get all entries.
   *
   * @generated from field: repeated string denoms = 1;
   */
  denoms: string[];

  /**
   * pagination defines an optional pagination for the request. This field is
   * only read if the denoms field is empty.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 99;
   */
  pagination?: PageRequest;
};

/**
 * Describes the message cosmos.bank.v1beta1.QuerySendEnabledRequest.
 * Use `create(QuerySendEnabledRequestSchema)` to create a new message.
 */
export const QuerySendEnabledRequestSchema: GenMessage<QuerySendEnabledRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 25);

/**
 * QuerySendEnabledResponse defines the RPC response of a SendEnable query.
 *
 * Since: cosmos-sdk 0.47
 *
 * @generated from message cosmos.bank.v1beta1.QuerySendEnabledResponse
 */
export type QuerySendEnabledResponse = Message<"cosmos.bank.v1beta1.QuerySendEnabledResponse"> & {
  /**
   * @generated from field: repeated cosmos.bank.v1beta1.SendEnabled send_enabled = 1;
   */
  sendEnabled: SendEnabled[];

  /**
   * pagination defines the pagination in the response. This field is only
   * populated if the denoms field in the request is empty.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 99;
   */
  pagination?: PageResponse;
};

/**
 * Describes the message cosmos.bank.v1beta1.QuerySendEnabledResponse.
 * Use `create(QuerySendEnabledResponseSchema)` to create a new message.
 */
export const QuerySendEnabledResponseSchema: GenMessage<QuerySendEnabledResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_bank_v1beta1_query, 26);

/**
 * Query defines the gRPC querier service.
 *
 * @generated from service cosmos.bank.v1beta1.Query
 */
export const Query: GenService<{
  /**
   * Balance queries the balance of a single coin for a single account.
   *
   * @generated from rpc cosmos.bank.v1beta1.Query.Balance
   */
  balance: {
    methodKind: "unary";
    input: typeof QueryBalanceRequestSchema;
    output: typeof QueryBalanceResponseSchema;
  },
  /**
   * AllBalances queries the balance of all coins for a single account.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   *
   * @generated from rpc cosmos.bank.v1beta1.Query.AllBalances
   */
  allBalances: {
    methodKind: "unary";
    input: typeof QueryAllBalancesRequestSchema;
    output: typeof QueryAllBalancesResponseSchema;
  },
  /**
   * SpendableBalances queries the spendable balance of all coins for a single
   * account.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   *
   * Since: cosmos-sdk 0.46
   *
   * @generated from rpc cosmos.bank.v1beta1.Query.SpendableBalances
   */
  spendableBalances: {
    methodKind: "unary";
    input: typeof QuerySpendableBalancesRequestSchema;
    output: typeof QuerySpendableBalancesResponseSchema;
  },
  /**
   * SpendableBalanceByDenom queries the spendable balance of a single denom for
   * a single account.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   *
   * Since: cosmos-sdk 0.47
   *
   * @generated from rpc cosmos.bank.v1beta1.Query.SpendableBalanceByDenom
   */
  spendableBalanceByDenom: {
    methodKind: "unary";
    input: typeof QuerySpendableBalanceByDenomRequestSchema;
    output: typeof QuerySpendableBalanceByDenomResponseSchema;
  },
  /**
   * TotalSupply queries the total supply of all coins.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   *
   * @generated from rpc cosmos.bank.v1beta1.Query.TotalSupply
   */
  totalSupply: {
    methodKind: "unary";
    input: typeof QueryTotalSupplyRequestSchema;
    output: typeof QueryTotalSupplyResponseSchema;
  },
  /**
   * SupplyOf queries the supply of a single coin.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   *
   * @generated from rpc cosmos.bank.v1beta1.Query.SupplyOf
   */
  supplyOf: {
    methodKind: "unary";
    input: typeof QuerySupplyOfRequestSchema;
    output: typeof QuerySupplyOfResponseSchema;
  },
  /**
   * Params queries the parameters of x/bank module.
   *
   * @generated from rpc cosmos.bank.v1beta1.Query.Params
   */
  params: {
    methodKind: "unary";
    input: typeof QueryParamsRequestSchema;
    output: typeof QueryParamsResponseSchema;
  },
  /**
   * DenomMetadata queries the client metadata of a given coin denomination.
   *
   * @generated from rpc cosmos.bank.v1beta1.Query.DenomMetadata
   */
  denomMetadata: {
    methodKind: "unary";
    input: typeof QueryDenomMetadataRequestSchema;
    output: typeof QueryDenomMetadataResponseSchema;
  },
  /**
   * DenomMetadataByQueryString queries the client metadata of a given coin denomination.
   *
   * @generated from rpc cosmos.bank.v1beta1.Query.DenomMetadataByQueryString
   */
  denomMetadataByQueryString: {
    methodKind: "unary";
    input: typeof QueryDenomMetadataByQueryStringRequestSchema;
    output: typeof QueryDenomMetadataByQueryStringResponseSchema;
  },
  /**
   * DenomsMetadata queries the client metadata for all registered coin
   * denominations.
   *
   * @generated from rpc cosmos.bank.v1beta1.Query.DenomsMetadata
   */
  denomsMetadata: {
    methodKind: "unary";
    input: typeof QueryDenomsMetadataRequestSchema;
    output: typeof QueryDenomsMetadataResponseSchema;
  },
  /**
   * DenomOwners queries for all account addresses that own a particular token
   * denomination.
   *
   * When called from another module, this query might consume a high amount of
   * gas if the pagination field is incorrectly set.
   *
   * Since: cosmos-sdk 0.46
   *
   * @generated from rpc cosmos.bank.v1beta1.Query.DenomOwners
   */
  denomOwners: {
    methodKind: "unary";
    input: typeof QueryDenomOwnersRequestSchema;
    output: typeof QueryDenomOwnersResponseSchema;
  },
  /**
   * DenomOwnersByQuery queries for all account addresses that own a particular token
   * denomination.
   *
   * Since: cosmos-sdk 0.50.3
   *
   * @generated from rpc cosmos.bank.v1beta1.Query.DenomOwnersByQuery
   */
  denomOwnersByQuery: {
    methodKind: "unary";
    input: typeof QueryDenomOwnersByQueryRequestSchema;
    output: typeof QueryDenomOwnersByQueryResponseSchema;
  },
  /**
   * SendEnabled queries for SendEnabled entries.
   *
   * This query only returns denominations that have specific SendEnabled settings.
   * Any denomination that does not have a specific setting will use the default
   * params.default_send_enabled, and will not be returned by this query.
   *
   * Since: cosmos-sdk 0.47
   *
   * @generated from rpc cosmos.bank.v1beta1.Query.SendEnabled
   */
  sendEnabled: {
    methodKind: "unary";
    input: typeof QuerySendEnabledRequestSchema;
    output: typeof QuerySendEnabledResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_cosmos_bank_v1beta1_query, 0);

