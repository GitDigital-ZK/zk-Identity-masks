=== FILE: docs/examples/verify-mask.ts ===
import { RegistryClient } from 'zk-identity-masks-sdk';
import { verifyProof } from 'zk-identity-masks-sdk/proofs';

async function main() {
// Assume we have a proof received from a user.
const proof = { ... }; // would be deserialized from network

// 1. Verify proof cryptographically.
const isValid = await verifyProof(proof);
if (!isValid) {
console.log('Proof invalid');
return;
}

// 2. Check revocation status with registry.
const registry = new RegistryClient({ rpcUrl: 'https://api.devnet.solana.com' });
const revoked = await registry.isRevoked(proof.publicInputs.maskCommitment);
if (revoked) {
console.log('Mask is revoked');
return;
}

// 3. Check expiration (optional, depending on use case).
const maskMeta = await registry.getMask(proof.publicInputs.maskCommitment);
if (maskMeta && maskMeta.expiration < Math.floor(Date.now() / 1000)) {
console.log('Mask expired');
return;
}

console.log('Proof verified and mask is active!');
}

main();
