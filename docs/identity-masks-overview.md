=== FILE: docs/identity-masks-overview.md ===

Identity Masks Overview

zk-Identity-masks is a privacy-preserving system that allows users to create identity masks – commitments to personal attributes – and selectively prove properties about those attributes without revealing the underlying data.

Core Concepts

· Mask: A cryptographic commitment to a set of attributes (e.g., age, nationality) plus a random salt. The commitment is stored publicly (e.g., on a blockchain) while the raw attributes remain private.
· Predicate: A statement about the attributes, such as "age >= 18" or "country in {US, CA, UK}". Users can generate a zero-knowledge proof that their mask satisfies a given predicate.
· Proof: A zero-knowledge proof attesting that the mask satisfies the predicate, without revealing the actual attribute values.
· Registry: An on-chain or off-chain registry that stores mask commitments, expiration times, and revocation status.

How It Works

1. Mask Creation: The user collects their attributes (each as a 32-byte field element), generates a random salt, and computes a Poseidon hash of the concatenated attributes and salt. This hash becomes the mask commitment.
2. Registration: The user registers the mask commitment with an identity authority or directly on a blockchain registry. Optionally, they can set an expiration time and store encrypted attributes off-chain.
3. Proving: When the user needs to prove a property (e.g., they are over 18), they generate a zero-knowledge proof using the mask's raw attributes and the desired predicate. The proof includes the mask commitment and a hash of the predicate.
4. Verification: A verifier (e.g., a service) checks the proof against the mask commitment and the predicate. If the proof is valid and the mask is not revoked, the verifier accepts the claim.
5. Revocation: The user (or an authorized authority) can revoke a mask by updating the registry. Verifiers should always check the revocation status.

Benefits

· Privacy: Attributes never leave the user's device.
· Selective Disclosure: Users can prove specific properties without revealing all data.
· Unlinkability: Different proofs from the same mask cannot be linked unless the verifier colludes (through the nullifier, if used).
· Compliance: Authorities can enforce rules (e.g., age checks) without seeing personal data.

Components

· Mojo Prover: Generates proofs using circuit constraints.
· Zig Verifier: Verifies proofs efficiently.
· TypeScript SDK: High-level API for mask creation, proof generation, and registry interaction.

Next Steps

See the API Reference and Examples to get started.
