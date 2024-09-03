// @generated by protoc-gen-es v2.0.0 with parameter "target=ts"
// @generated from file coreum/feemodel/v1/params.proto (package coreum.feemodel.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_gogoproto_gogo } from "../../../gogoproto/gogo_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file coreum/feemodel/v1/params.proto.
 */
export const file_coreum_feemodel_v1_params: GenFile = /*@__PURE__*/
  fileDesc("Ch9jb3JldW0vZmVlbW9kZWwvdjEvcGFyYW1zLnByb3RvEhJjb3JldW0uZmVlbW9kZWwudjEixgQKC01vZGVsUGFyYW1zEloKEWluaXRpYWxfZ2FzX3ByaWNlGAEgASgJQj/I3h8A2t4fG2Nvc21vc3Nkay5pby9tYXRoLkxlZ2FjeURlY/LeHxh5YW1sOiJpbml0aWFsX2dhc19wcmljZSISaAoYbWF4X2dhc19wcmljZV9tdWx0aXBsaWVyGAIgASgJQkbI3h8A2t4fG2Nvc21vc3Nkay5pby9tYXRoLkxlZ2FjeURlY/LeHx95YW1sOiJtYXhfZ2FzX3ByaWNlX211bHRpcGxpZXIiElAKDG1heF9kaXNjb3VudBgDIAEoCUI6yN4fANreHxtjb3Ntb3NzZGsuaW8vbWF0aC5MZWdhY3lEZWPy3h8TeWFtbDoibWF4X2Rpc2NvdW50IhJqChllc2NhbGF0aW9uX3N0YXJ0X2ZyYWN0aW9uGAQgASgJQkfI3h8A2t4fG2Nvc21vc3Nkay5pby9tYXRoLkxlZ2FjeURlY/LeHyB5YW1sOiJlc2NhbGF0aW9uX3N0YXJ0X2ZyYWN0aW9uIhIvCg1tYXhfYmxvY2tfZ2FzGAUgASgDQhjy3h8UeWFtbDoibWF4X2Jsb2NrX2dhcyISQQoWc2hvcnRfZW1hX2Jsb2NrX2xlbmd0aBgGIAEoDUIh8t4fHXlhbWw6InNob3J0X2VtYV9ibG9ja19sZW5ndGgiEj8KFWxvbmdfZW1hX2Jsb2NrX2xlbmd0aBgHIAEoDUIg8t4fHHlhbWw6ImxvbmdfZW1hX2Jsb2NrX2xlbmd0aCIiTgoGUGFyYW1zEkQKBW1vZGVsGAEgASgLMh8uY29yZXVtLmZlZW1vZGVsLnYxLk1vZGVsUGFyYW1zQhTI3h8A8t4fDHlhbWw6Im1vZGVsIkI4WjZnaXRodWIuY29tL0NvcmV1bUZvdW5kYXRpb24vY29yZXVtL3Y0L3gvZmVlbW9kZWwvdHlwZXNiBnByb3RvMw", [file_gogoproto_gogo]);

/**
 * ModelParams define fee model params.
 * There are four regions on the fee model curve
 * - between 0 and "long average block gas" where gas price goes down exponentially from InitialGasPrice to gas price with maximum discount (InitialGasPrice * (1 - MaxDiscount))
 * - between "long average block gas" and EscalationStartBlockGas (EscalationStartBlockGas = MaxBlockGas * EscalationStartFraction) where we offer gas price with maximum discount all the time
 * - between EscalationStartBlockGas (EscalationStartBlockGas = MaxBlockGas * EscalationStartFraction) and MaxBlockGas where price goes up rapidly (being an output of a power function) from gas price with maximum discount to MaxGasPrice  (MaxGasPrice = InitialGasPrice * MaxGasMultiplier)
 * - above MaxBlockGas (if it happens for any reason) where price is equal to MaxGasPrice (MaxGasPrice = InitialGasPrice * MaxGasMultiplier)
 *
 * The input (x value) for that function is calculated by taking short block gas average.
 * Price (y value) being an output of the fee model is used as the minimum gas price for next block.
 *
 * @generated from message coreum.feemodel.v1.ModelParams
 */
export type ModelParams = Message<"coreum.feemodel.v1.ModelParams"> & {
  /**
   * initial_gas_price is used when block gas short average is 0. It happens when there are no transactions being broadcasted. This value is also used to initialize gas price on brand-new chain.
   *
   * @generated from field: string initial_gas_price = 1;
   */
  initialGasPrice: string;

  /**
   * max_gas_price_multiplier is used to compute max_gas_price (max_gas_price = initial_gas_price * max_gas_price_multiplier). Max gas price is charged when block gas short average is greater than or equal to MaxBlockGas. This value is used to limit gas price escalation to avoid having possible infinity GasPrice value otherwise.
   *
   * @generated from field: string max_gas_price_multiplier = 2;
   */
  maxGasPriceMultiplier: string;

  /**
   * max_discount is th maximum discount we offer on top of initial gas price if short average block gas is between long average block gas and escalation start block gas.
   *
   * @generated from field: string max_discount = 3;
   */
  maxDiscount: string;

  /**
   * escalation_start_fraction defines fraction of max block gas usage where gas price escalation starts if short average block gas is higher than this value.
   *
   * @generated from field: string escalation_start_fraction = 4;
   */
  escalationStartFraction: string;

  /**
   * max_block_gas sets the maximum capacity of block. This is enforced on tendermint level in genesis configuration. Once short average block gas goes above this value, gas price is a flat line equal to MaxGasPrice.
   *
   * @generated from field: int64 max_block_gas = 5;
   */
  maxBlockGas: bigint;

  /**
   * short_ema_block_length defines inertia for short average long gas in EMA model. The equation is: NewAverage = ((ShortAverageBlockLength - 1)*PreviousAverage + GasUsedByCurrentBlock) / ShortAverageBlockLength
   * The value might be interpreted as the number of blocks which are taken to calculate the average. It would be exactly like that in SMA model, in EMA this is an approximation.
   *
   * @generated from field: uint32 short_ema_block_length = 6;
   */
  shortEmaBlockLength: number;

  /**
   * long_ema_block_length defines inertia for long average block gas in EMA model. The equation is: NewAverage = ((LongAverageBlockLength - 1)*PreviousAverage + GasUsedByCurrentBlock) / LongAverageBlockLength
   * The value might be interpreted as the number of blocks which are taken to calculate the average. It would be exactly like that in SMA model, in EMA this is an approximation.
   *
   * @generated from field: uint32 long_ema_block_length = 7;
   */
  longEmaBlockLength: number;
};

/**
 * Describes the message coreum.feemodel.v1.ModelParams.
 * Use `create(ModelParamsSchema)` to create a new message.
 */
export const ModelParamsSchema: GenMessage<ModelParams> = /*@__PURE__*/
  messageDesc(file_coreum_feemodel_v1_params, 0);

/**
 * Params store gov manageable feemodel parameters.
 *
 * @generated from message coreum.feemodel.v1.Params
 */
export type Params = Message<"coreum.feemodel.v1.Params"> & {
  /**
   * model is a fee model params.
   *
   * @generated from field: coreum.feemodel.v1.ModelParams model = 1;
   */
  model?: ModelParams;
};

/**
 * Describes the message coreum.feemodel.v1.Params.
 * Use `create(ParamsSchema)` to create a new message.
 */
export const ParamsSchema: GenMessage<Params> = /*@__PURE__*/
  messageDesc(file_coreum_feemodel_v1_params, 1);

