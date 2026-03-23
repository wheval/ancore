/**
 * @ancore/account-abstraction
 * Account abstraction layer for Stellar smart contracts.
 * Provides AccountContract for invoking the Ancore account contract.
 */

export const AA_VERSION = '0.1.0';

export { AccountContract } from './account-contract';
export type {
  AccountContractReadOptions,
  InvocationArgs,
} from './account-contract';

export {
  AccountContractError,
  AlreadyInitializedError,
  NotInitializedError,
  InvalidNonceError,
  UnauthorizedError,
  SessionKeyNotFoundError,
  ContractInvocationError,
  mapContractError,
  CONTRACT_ERROR_MESSAGES,
} from './errors';

export {
  addressToScVal,
  decodeAddSessionKeyArgs,
  decodeExecuteArgs,
  decodeExecuteResult,
  decodeGetSessionKeyArgs,
  decodeInitializeArgs,
  decodeNonceResult,
  decodeOwnerResult,
  decodeRevokeSessionKeyArgs,
  decodeSessionKeyResult,
  decodeVoidResult,
  publicKeyToBytes32ScVal,
  u64ToScVal,
  permissionsToScVal,
  symbolToScVal,
  encodeAddSessionKeyArgs,
  encodeExecuteArgs,
  encodeGetSessionKeyArgs,
  encodeInitializeArgs,
  encodeRevokeSessionKeyArgs,
  scValToAddress,
  scValToU64,
  bytes32ScValToPublicKey,
  scValToSessionKey,
  scValToOptionalSessionKey,
  sessionKeyToScVal,
} from './xdr-utils';
