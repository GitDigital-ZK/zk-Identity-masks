=== FILE: docs/api.md ===

API Reference

TypeScript SDK

Mask Class

Represents an identity mask.

· constructor(attributes: Uint8Array[], salt?: Uint8Array)
· getCommitment(): MaskCommitment
· createProof(predicate: Predicate, context: Uint8Array): Promise<Proof>

createMask(attributes: Uint8Array[], salt?: Uint8Array): Mask

Factory function.

getMaskCommitment(attributes: Uint8Array[], salt: Uint8Array): MaskCommitment

Compute commitment without creating a Mask object.

generateProof(mask: Mask, predicate: Predicate, context: Uint8Array): Promise<Proof>

Generate a ZK proof.

verifyProof(proof: Proof, verificationKey?: Uint8Array): Promise<boolean>

Verify a proof (calls Zig verifier).

RegistryClient

· constructor(config: RegistryClientConfig)
· registerMask(commitment, ownerPublicKey, expiration, metadataUri?, signature?): Promise<string>
· revokeMask(commitment, signature): Promise<string>
· isRevoked(commitment): Promise<boolean>
· getMask(commitment): Promise<MaskMetadata | null>

Types

See index.ts for detailed type definitions.

Zig Modules

mask_verifier.zig

· MaskVerifier.init(allocator, verification_key)
· verify(proof: Proof) !bool

mask_registry.zig

· MaskRegistry.init(allocator, rpc_url)
· registerMask(mask_entry, signature) ![]u8
· revokeMask(mask_id, signature) ![]u8
· isRevoked(mask_id) !bool

Mojo Modules

identity_mask.mj

· Mask.__init__(attributes, salt)
· get_commitment() -> Int
· create_proof(predicate, context) -> Proof

prover.mj

· generate_proof(mask, predicate, context) -> Proof
· verify_proof(proof, verification_key) -> Bool

For detailed usage, refer to the inline documentation in each module
