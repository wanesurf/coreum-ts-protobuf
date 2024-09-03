// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file cosmos/params/module/v1/module.proto (package cosmos.params.module.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_cosmos_app_v1alpha1_module } from "../../../app/v1alpha1/module_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file cosmos/params/module/v1/module.proto.
 */
export const file_cosmos_params_module_v1_module: GenFile = /*@__PURE__*/
  fileDesc("CiRjb3Ntb3MvcGFyYW1zL21vZHVsZS92MS9tb2R1bGUucHJvdG8SF2Nvc21vcy5wYXJhbXMubW9kdWxlLnYxIjcKBk1vZHVsZTotusCW2gEnCiVnaXRodWIuY29tL2Nvc21vcy9jb3Ntb3Mtc2RrL3gvcGFyYW1zYgZwcm90bzM", [file_cosmos_app_v1alpha1_module]);

/**
 * Module is the config object of the params module.
 *
 * @generated from message cosmos.params.module.v1.Module
 */
export type Module = Message<"cosmos.params.module.v1.Module"> & {
};

/**
 * Describes the message cosmos.params.module.v1.Module.
 * Use `create(ModuleSchema)` to create a new message.
 */
export const ModuleSchema: GenMessage<Module> = /*@__PURE__*/
  messageDesc(file_cosmos_params_module_v1_module, 0);

