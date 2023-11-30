// Since: cosmos-sdk 0.43

// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/authz/v1beta1/query.proto (package cosmos.authz.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
import { PageRequest, PageResponse } from "../../base/query/v1beta1/pagination_pb.js";
import { Grant, GrantAuthorization } from "./authz_pb.js";

/**
 * QueryGrantsRequest is the request type for the Query/Grants RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGrantsRequest
 */
export class QueryGrantsRequest extends Message<QueryGrantsRequest> {
  /**
   * @generated from field: string granter = 1;
   */
  granter = "";

  /**
   * @generated from field: string grantee = 2;
   */
  grantee = "";

  /**
   * Optional, msg_type_url, when set, will query only grants matching given msg type.
   *
   * @generated from field: string msg_type_url = 3;
   */
  msgTypeUrl = "";

  /**
   * pagination defines an pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 4;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryGrantsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.authz.v1beta1.QueryGrantsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "msg_type_url", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGrantsRequest {
    return new QueryGrantsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGrantsRequest {
    return new QueryGrantsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGrantsRequest {
    return new QueryGrantsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGrantsRequest | PlainMessage<QueryGrantsRequest> | undefined, b: QueryGrantsRequest | PlainMessage<QueryGrantsRequest> | undefined): boolean {
    return proto3.util.equals(QueryGrantsRequest, a, b);
  }
}

/**
 * QueryGrantsResponse is the response type for the Query/Authorizations RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGrantsResponse
 */
export class QueryGrantsResponse extends Message<QueryGrantsResponse> {
  /**
   * authorizations is a list of grants granted for grantee by granter.
   *
   * @generated from field: repeated cosmos.authz.v1beta1.Grant grants = 1;
   */
  grants: Grant[] = [];

  /**
   * pagination defines an pagination for the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryGrantsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.authz.v1beta1.QueryGrantsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "grants", kind: "message", T: Grant, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGrantsResponse {
    return new QueryGrantsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGrantsResponse {
    return new QueryGrantsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGrantsResponse {
    return new QueryGrantsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGrantsResponse | PlainMessage<QueryGrantsResponse> | undefined, b: QueryGrantsResponse | PlainMessage<QueryGrantsResponse> | undefined): boolean {
    return proto3.util.equals(QueryGrantsResponse, a, b);
  }
}

/**
 * QueryGranterGrantsRequest is the request type for the Query/GranterGrants RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGranterGrantsRequest
 */
export class QueryGranterGrantsRequest extends Message<QueryGranterGrantsRequest> {
  /**
   * @generated from field: string granter = 1;
   */
  granter = "";

  /**
   * pagination defines an pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryGranterGrantsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.authz.v1beta1.QueryGranterGrantsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "granter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGranterGrantsRequest {
    return new QueryGranterGrantsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGranterGrantsRequest {
    return new QueryGranterGrantsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGranterGrantsRequest {
    return new QueryGranterGrantsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGranterGrantsRequest | PlainMessage<QueryGranterGrantsRequest> | undefined, b: QueryGranterGrantsRequest | PlainMessage<QueryGranterGrantsRequest> | undefined): boolean {
    return proto3.util.equals(QueryGranterGrantsRequest, a, b);
  }
}

/**
 * QueryGranterGrantsResponse is the response type for the Query/GranterGrants RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGranterGrantsResponse
 */
export class QueryGranterGrantsResponse extends Message<QueryGranterGrantsResponse> {
  /**
   * grants is a list of grants granted by the granter.
   *
   * @generated from field: repeated cosmos.authz.v1beta1.GrantAuthorization grants = 1;
   */
  grants: GrantAuthorization[] = [];

  /**
   * pagination defines an pagination for the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryGranterGrantsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.authz.v1beta1.QueryGranterGrantsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "grants", kind: "message", T: GrantAuthorization, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGranterGrantsResponse {
    return new QueryGranterGrantsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGranterGrantsResponse {
    return new QueryGranterGrantsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGranterGrantsResponse {
    return new QueryGranterGrantsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGranterGrantsResponse | PlainMessage<QueryGranterGrantsResponse> | undefined, b: QueryGranterGrantsResponse | PlainMessage<QueryGranterGrantsResponse> | undefined): boolean {
    return proto3.util.equals(QueryGranterGrantsResponse, a, b);
  }
}

/**
 * QueryGranteeGrantsRequest is the request type for the Query/IssuedGrants RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGranteeGrantsRequest
 */
export class QueryGranteeGrantsRequest extends Message<QueryGranteeGrantsRequest> {
  /**
   * @generated from field: string grantee = 1;
   */
  grantee = "";

  /**
   * pagination defines an pagination for the request.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageRequest pagination = 2;
   */
  pagination?: PageRequest;

  constructor(data?: PartialMessage<QueryGranteeGrantsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.authz.v1beta1.QueryGranteeGrantsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "grantee", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "pagination", kind: "message", T: PageRequest },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGranteeGrantsRequest {
    return new QueryGranteeGrantsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGranteeGrantsRequest {
    return new QueryGranteeGrantsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGranteeGrantsRequest {
    return new QueryGranteeGrantsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGranteeGrantsRequest | PlainMessage<QueryGranteeGrantsRequest> | undefined, b: QueryGranteeGrantsRequest | PlainMessage<QueryGranteeGrantsRequest> | undefined): boolean {
    return proto3.util.equals(QueryGranteeGrantsRequest, a, b);
  }
}

/**
 * QueryGranteeGrantsResponse is the response type for the Query/GranteeGrants RPC method.
 *
 * @generated from message cosmos.authz.v1beta1.QueryGranteeGrantsResponse
 */
export class QueryGranteeGrantsResponse extends Message<QueryGranteeGrantsResponse> {
  /**
   * grants is a list of grants granted to the grantee.
   *
   * @generated from field: repeated cosmos.authz.v1beta1.GrantAuthorization grants = 1;
   */
  grants: GrantAuthorization[] = [];

  /**
   * pagination defines an pagination for the response.
   *
   * @generated from field: cosmos.base.query.v1beta1.PageResponse pagination = 2;
   */
  pagination?: PageResponse;

  constructor(data?: PartialMessage<QueryGranteeGrantsResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.authz.v1beta1.QueryGranteeGrantsResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "grants", kind: "message", T: GrantAuthorization, repeated: true },
    { no: 2, name: "pagination", kind: "message", T: PageResponse },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): QueryGranteeGrantsResponse {
    return new QueryGranteeGrantsResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): QueryGranteeGrantsResponse {
    return new QueryGranteeGrantsResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): QueryGranteeGrantsResponse {
    return new QueryGranteeGrantsResponse().fromJsonString(jsonString, options);
  }

  static equals(a: QueryGranteeGrantsResponse | PlainMessage<QueryGranteeGrantsResponse> | undefined, b: QueryGranteeGrantsResponse | PlainMessage<QueryGranteeGrantsResponse> | undefined): boolean {
    return proto3.util.equals(QueryGranteeGrantsResponse, a, b);
  }
}

