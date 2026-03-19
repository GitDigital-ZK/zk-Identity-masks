/**
 * Identity Mask Types
 * Version: 1.0.0
 * Status: Draft
 * Authority: GitDigital Identity Layer
 *
 * This file defines the canonical TypeScript types for Identity Masks.
 * These types MUST remain stable across:
 * - Zig verifier modules
 * - Mojo circuits
 * - TypeScript SDK
 * - Registry implementations
 */

export type MaskID = string; // UUIDv7 or hash-derived
export type Version = string; // SemVer (e.g., "1.0.0")

/**
 * Core Identity Mask structure.
 * This is the authoritative schema for all mask instances.
 */
export interface IdentityMask {
  mask_id: MaskID;
  version: Version;
  issuer: IssuerInfo;
  subject: SubjectInfo;
  attributes: MaskAttributes;
  commitments: MaskCommitments;
  proofs?: MaskProofs;
  metadata?: MaskMetadata;
}

/**
 * Issuer information.
 * MUST NOT contain raw PII.
 */
export interface IssuerInfo {
  issuer_id: string; // DID, public key, or authority hash
  signature?: string; // Optional issuer signature
}

/**
 * Subject information.
 * MUST be pseudonymous or hashed.
 */
export interface SubjectInfo {
  subject_hash: string; // Deterministic hash of subject identifier
  subject_salt?: string; // Optional salt for hash derivation
}

/**
 * Mask attributes.
 * These represent masked identity properties.
 */
export interface MaskAttributes {
  [key: string]: AttributeValue;
}

export type AttributeValue =
  | string
  | number
  | boolean
  | string[]
  | number[]
  | boolean[];

/**
 * Cryptographic commitments for ZK proofs.
 * MUST be compatible with Zig + Mojo implementations.
 */
export interface MaskCommitments {
  [key: string]: string; // Commitment hash
}

/**
 * Optional embedded proofs.
 * These allow offline verification.
 */
export interface MaskProofs {
  [proofName: string]: string; // Serialized proof
}

/**
 * Optional metadata for UX or domain-specific extensions.
 */
export interface MaskMetadata {
  description?: string;
  created_at?: string;
  updated_at?: string;
  tags?: string[];
}

/**
 * Registry entry for tracking mask lifecycle.
 */
export interface MaskRegistryEntry {
  mask_id: MaskID;
  version: Version;
  issuer_id: string;
  revoked: boolean;
  timestamp: string;
}