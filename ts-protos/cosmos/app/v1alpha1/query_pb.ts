// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file cosmos/app/v1alpha1/query.proto (package cosmos.app.v1alpha1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Config } from "./config_pb";
import { file_cosmos_app_v1alpha1_config } from "./config_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cosmos/app/v1alpha1/query.proto.
 */
export const file_cosmos_app_v1alpha1_query: GenFile = /*@__PURE__*/
  fileDesc("Ch9jb3Ntb3MvYXBwL3YxYWxwaGExL3F1ZXJ5LnByb3RvEhNjb3Ntb3MuYXBwLnYxYWxwaGExIhQKElF1ZXJ5Q29uZmlnUmVxdWVzdCJCChNRdWVyeUNvbmZpZ1Jlc3BvbnNlEisKBmNvbmZpZxgBIAEoCzIbLmNvc21vcy5hcHAudjFhbHBoYTEuQ29uZmlnMmYKBVF1ZXJ5El0KBkNvbmZpZxInLmNvc21vcy5hcHAudjFhbHBoYTEuUXVlcnlDb25maWdSZXF1ZXN0GiguY29zbW9zLmFwcC52MWFscGhhMS5RdWVyeUNvbmZpZ1Jlc3BvbnNlIgBiBnByb3RvMw", [file_cosmos_app_v1alpha1_config]);

/**
 * QueryConfigRequest is the Query/Config request type.
 *
 * @generated from message cosmos.app.v1alpha1.QueryConfigRequest
 */
export type QueryConfigRequest = Message<"cosmos.app.v1alpha1.QueryConfigRequest"> & {
};

/**
 * Describes the message cosmos.app.v1alpha1.QueryConfigRequest.
 * Use `create(QueryConfigRequestSchema)` to create a new message.
 */
export const QueryConfigRequestSchema: GenMessage<QueryConfigRequest> = /*@__PURE__*/
  messageDesc(file_cosmos_app_v1alpha1_query, 0);

/**
 * QueryConfigRequest is the Query/Config response type.
 *
 * @generated from message cosmos.app.v1alpha1.QueryConfigResponse
 */
export type QueryConfigResponse = Message<"cosmos.app.v1alpha1.QueryConfigResponse"> & {
  /**
   * config is the current app config.
   *
   * @generated from field: cosmos.app.v1alpha1.Config config = 1;
   */
  config?: Config;
};

/**
 * Describes the message cosmos.app.v1alpha1.QueryConfigResponse.
 * Use `create(QueryConfigResponseSchema)` to create a new message.
 */
export const QueryConfigResponseSchema: GenMessage<QueryConfigResponse> = /*@__PURE__*/
  messageDesc(file_cosmos_app_v1alpha1_query, 1);

/**
 * Query is the app module query service.
 *
 * @generated from service cosmos.app.v1alpha1.Query
 */
export const Query: GenService<{
  /**
   * Config returns the current app config.
   *
   * @generated from rpc cosmos.app.v1alpha1.Query.Config
   */
  config: {
    methodKind: "unary";
    input: typeof QueryConfigRequestSchema;
    output: typeof QueryConfigResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_cosmos_app_v1alpha1_query, 0);

