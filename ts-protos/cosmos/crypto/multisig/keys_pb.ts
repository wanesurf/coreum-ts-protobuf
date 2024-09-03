// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file cosmos/crypto/multisig/keys.proto (package cosmos.crypto.multisig, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb";
import type { Any } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_any } from "@bufbuild/protobuf/wkt";
import { file_amino_amino } from "../../../amino/amino_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cosmos/crypto/multisig/keys.proto.
 */
export const file_cosmos_crypto_multisig_keys: GenFile = /*@__PURE__*/
  fileDesc("CiFjb3Ntb3MvY3J5cHRvL211bHRpc2lnL2tleXMucHJvdG8SFmNvc21vcy5jcnlwdG8ubXVsdGlzaWcirAEKEUxlZ2FjeUFtaW5vUHViS2V5EhEKCXRocmVzaG9sZBgBIAEoDRJCCgtwdWJsaWNfa2V5cxgCIAMoCzIULmdvb2dsZS5wcm90b2J1Zi5BbnlCF+LeHwdQdWJLZXlzouewKgdwdWJrZXlzOkCIoB8AiuewKiJ0ZW5kZXJtaW50L1B1YktleU11bHRpc2lnVGhyZXNob2xkkuewKhB0aHJlc2hvbGRfc3RyaW5nQjNaMWdpdGh1Yi5jb20vY29zbW9zL2Nvc21vcy1zZGsvY3J5cHRvL2tleXMvbXVsdGlzaWdiBnByb3RvMw", [file_gogoproto_gogo, file_google_protobuf_any, file_amino_amino]);

/**
 * LegacyAminoPubKey specifies a public key type
 * which nests multiple public keys and a threshold,
 * it uses legacy amino address rules.
 *
 * @generated from message cosmos.crypto.multisig.LegacyAminoPubKey
 */
export type LegacyAminoPubKey = Message<"cosmos.crypto.multisig.LegacyAminoPubKey"> & {
  /**
   * @generated from field: uint32 threshold = 1;
   */
  threshold: number;

  /**
   * @generated from field: repeated google.protobuf.Any public_keys = 2;
   */
  publicKeys: Any[];
};

/**
 * Describes the message cosmos.crypto.multisig.LegacyAminoPubKey.
 * Use `create(LegacyAminoPubKeySchema)` to create a new message.
 */
export const LegacyAminoPubKeySchema: GenMessage<LegacyAminoPubKey> = /*@__PURE__*/
  messageDesc(file_cosmos_crypto_multisig_keys, 0);

