// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file tendermint/types/block.proto (package tendermint.types, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../gogoproto/gogo_pb";
import type { Commit, Data, Header } from "./types_pb";
import { file_tendermint_types_types } from "./types_pb";
import type { EvidenceList } from "./evidence_pb";
import { file_tendermint_types_evidence } from "./evidence_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file tendermint/types/block.proto.
 */
export const file_tendermint_types_block: GenFile = /*@__PURE__*/
  fileDesc("Chx0ZW5kZXJtaW50L3R5cGVzL2Jsb2NrLnByb3RvEhB0ZW5kZXJtaW50LnR5cGVzIsoBCgVCbG9jaxIuCgZoZWFkZXIYASABKAsyGC50ZW5kZXJtaW50LnR5cGVzLkhlYWRlckIEyN4fABIqCgRkYXRhGAIgASgLMhYudGVuZGVybWludC50eXBlcy5EYXRhQgTI3h8AEjYKCGV2aWRlbmNlGAMgASgLMh4udGVuZGVybWludC50eXBlcy5FdmlkZW5jZUxpc3RCBMjeHwASLQoLbGFzdF9jb21taXQYBCABKAsyGC50ZW5kZXJtaW50LnR5cGVzLkNvbW1pdEI1WjNnaXRodWIuY29tL2NvbWV0YmZ0L2NvbWV0YmZ0L3Byb3RvL3RlbmRlcm1pbnQvdHlwZXNiBnByb3RvMw", [file_gogoproto_gogo, file_tendermint_types_types, file_tendermint_types_evidence]);

/**
 * @generated from message tendermint.types.Block
 */
export type Block = Message<"tendermint.types.Block"> & {
  /**
   * @generated from field: tendermint.types.Header header = 1;
   */
  header?: Header;

  /**
   * @generated from field: tendermint.types.Data data = 2;
   */
  data?: Data;

  /**
   * @generated from field: tendermint.types.EvidenceList evidence = 3;
   */
  evidence?: EvidenceList;

  /**
   * @generated from field: tendermint.types.Commit last_commit = 4;
   */
  lastCommit?: Commit;
};

/**
 * Describes the message tendermint.types.Block.
 * Use `create(BlockSchema)` to create a new message.
 */
export const BlockSchema: GenMessage<Block> = /*@__PURE__*/
  messageDesc(file_tendermint_types_block, 0);

