// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file cosmos/evidence/v1beta1/genesis.proto (package cosmos.evidence.v1beta1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cosmos/evidence/v1beta1/genesis.proto.
 */
export const file_cosmos_evidence_v1beta1_genesis: GenFile = /*@__PURE__*/
  fileDesc("CiVjb3Ntb3MvZXZpZGVuY2UvdjFiZXRhMS9nZW5lc2lzLnByb3RvEhdjb3Ntb3MuZXZpZGVuY2UudjFiZXRhMSI2CgxHZW5lc2lzU3RhdGUSJgoIZXZpZGVuY2UYASADKAsyFC5nb29nbGUucHJvdG9idWYuQW55Qh9aHWNvc21vc3Nkay5pby94L2V2aWRlbmNlL3R5cGVzYgZwcm90bzM", [file_google_protobuf_any]);

/**
 * GenesisState defines the evidence module's genesis state.
 *
 * @generated from message cosmos.evidence.v1beta1.GenesisState
 */
export type GenesisState = Message<"cosmos.evidence.v1beta1.GenesisState"> & {
  /**
   * evidence defines all the evidence at genesis.
   *
   * @generated from field: repeated google.protobuf.Any evidence = 1;
   */
  evidence: Any[];
};

/**
 * Describes the message cosmos.evidence.v1beta1.GenesisState.
 * Use `create(GenesisStateSchema)` to create a new message.
 */
export const GenesisStateSchema: GenMessage<GenesisState> = /*@__PURE__*/
  messageDesc(file_cosmos_evidence_v1beta1_genesis, 0);

