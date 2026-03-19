=== FILE: docs/examples/create-mask.ts ===
import { createMask, RegistryClient } from 'zk-identity-masks-sdk';

async function main() {
// 1. Define attributes (each as 32-byte Uint8Array).
// Here we encode age (25) and country code (840 for USA) as little-endian 32-byte.
const age = new Uint8Array(32);
age[0] = 25; // simple representation
const country = new Uint8Array(32);
country[0] = 840; // country code

// 2. Create mask (random salt automatically generated).
const mask = createMask([age, country]);

console.log('Mask commitment:', Buffer.from(mask.getCommitment()).toString('hex'));

// 3. Register mask on-chain.
const registry = new RegistryClient({ rpcUrl: 'https://api.devnet.solana.com' });
const ownerPubkey = new Uint8Array(32); // your public key
const expiration = Math.floor(Date.now() / 1000) + 365 * 24 * 3600; // 1 year

const tx = await registry.registerMask(
mask.getCommitment(),
ownerPubkey,
expiration,
'https://example.com/my-encrypted-attributes'
);
console.log('Registration tx:', tx);
}

main().catch(console.error);
