=== FILE: sdk/index.ts ===
// Export all public APIs from the SDK.

export * from './mask';
export * from './proofs';
export * from './registry';

// Common types used across the SDK.
export type MaskCommitment = Uint8Array; // 32 bytes
export type Proof = {
data: Uint8Array;
publicInputs: PublicInputs;
};
export type PublicInputs = {
maskCommitment: MaskCommitment;
predicateHash: Uint8Array; // 32 bytes
contextHash: Uint8Array; // 32 bytes
nullifier?: Uint8Array; // optional
};
export type MaskMetadata = {
commitment: MaskCommitment;
ownerPublicKey: Uint8Array;
expiration: number; // Unix timestamp (seconds)
revoked: boolean;
metadataUri?: string;
};

export type Predicate = string; // e.g., "age >= 18"

export const POSEIDON_HASH_SIZE = 32;
export const CURRENT_MASK_VERSION = 1;

// Re-export error types if any.
export class MaskError extends Error {
constructor(message: string) {
super(message);
this.name = 'MaskError';
}
}
