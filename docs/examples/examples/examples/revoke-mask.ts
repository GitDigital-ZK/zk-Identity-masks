=== FILE: docs/examples/revoke-mask.ts ===
import { RegistryClient } from 'zk-identity-masks-sdk';

async function main() {
const registry = new RegistryClient({ rpcUrl: 'https://api.devnet.solana.com' });
const maskCommitment = Buffer.from('...', 'hex'); // the commitment to revoke
const signature = new Uint8Array(64); // would be a valid signature from owner

const tx = await registry.revokeMask(maskCommitment, signature);
console.log('Revocation tx:', tx);
}

main();
=== END FILE ===

=== FILE: tests/mask.test.ts ===
import { createMask, getMaskCommitment, Mask } from '../sdk/mask';
import { poseidonHash } from '../sdk/crypto'; // not listed but we'll assume

describe('Mask', () => {
it('should create mask with given attributes', () => {
const attr1 = new Uint8Array(32);
attr1[0] = 25;
const attr2 = new Uint8Array(32);
attr2[0] = 840;
const mask = createMask([attr1, attr2]);
expect(mask.getCommitment()).toBeDefined();
expect(mask.version).toBe(1);
});

it('should compute commitment consistently', () => {
const attr = new Uint8Array(32);
attr[0] = 30;
const salt = new Uint8Array(32);
salt[0] = 123;
const commitment1 = getMaskCommitment([attr], salt);
const commitment2 = getMaskCommitment([attr], salt);
expect(commitment1).toEqual(commitment2);
});

it('should produce different commitments for different salts', () => {
const attr = new Uint8Array(32);
attr[0] = 30;
const salt1 = new Uint8Array(32);
salt1[0] = 1;
const salt2 = new Uint8Array(32);
salt2[0] = 2;
const commitment1 = getMaskCommitment([attr], salt1);
const commitment2 = getMaskCommitment([attr], salt2);
expect(commitment1).not.toEqual(commitment2);
});
});
