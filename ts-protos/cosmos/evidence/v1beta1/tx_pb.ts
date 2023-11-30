// @generated by protoc-gen-es v1.5.0 with parameter "target=ts"
// @generated from file cosmos/evidence/v1beta1/tx.proto (package cosmos.evidence.v1beta1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Any, Message, proto3 } from "@bufbuild/protobuf";

/**
 * MsgSubmitEvidence represents a message that supports submitting arbitrary
 * Evidence of misbehavior such as equivocation or counterfactual signing.
 *
 * @generated from message cosmos.evidence.v1beta1.MsgSubmitEvidence
 */
export class MsgSubmitEvidence extends Message<MsgSubmitEvidence> {
  /**
   * submitter is the signer account address of evidence.
   *
   * @generated from field: string submitter = 1;
   */
  submitter = "";

  /**
   * evidence defines the evidence of misbehavior.
   *
   * @generated from field: google.protobuf.Any evidence = 2;
   */
  evidence?: Any;

  constructor(data?: PartialMessage<MsgSubmitEvidence>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.evidence.v1beta1.MsgSubmitEvidence";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "submitter", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "evidence", kind: "message", T: Any },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitEvidence {
    return new MsgSubmitEvidence().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitEvidence {
    return new MsgSubmitEvidence().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitEvidence {
    return new MsgSubmitEvidence().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSubmitEvidence | PlainMessage<MsgSubmitEvidence> | undefined, b: MsgSubmitEvidence | PlainMessage<MsgSubmitEvidence> | undefined): boolean {
    return proto3.util.equals(MsgSubmitEvidence, a, b);
  }
}

/**
 * MsgSubmitEvidenceResponse defines the Msg/SubmitEvidence response type.
 *
 * @generated from message cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse
 */
export class MsgSubmitEvidenceResponse extends Message<MsgSubmitEvidenceResponse> {
  /**
   * hash defines the hash of the evidence.
   *
   * @generated from field: bytes hash = 4;
   */
  hash = new Uint8Array(0);

  constructor(data?: PartialMessage<MsgSubmitEvidenceResponse>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "cosmos.evidence.v1beta1.MsgSubmitEvidenceResponse";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 4, name: "hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): MsgSubmitEvidenceResponse {
    return new MsgSubmitEvidenceResponse().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): MsgSubmitEvidenceResponse {
    return new MsgSubmitEvidenceResponse().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): MsgSubmitEvidenceResponse {
    return new MsgSubmitEvidenceResponse().fromJsonString(jsonString, options);
  }

  static equals(a: MsgSubmitEvidenceResponse | PlainMessage<MsgSubmitEvidenceResponse> | undefined, b: MsgSubmitEvidenceResponse | PlainMessage<MsgSubmitEvidenceResponse> | undefined): boolean {
    return proto3.util.equals(MsgSubmitEvidenceResponse, a, b);
  }
}

