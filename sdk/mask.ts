=== FILE: sdk/mask.ts ===
import { MaskCommitment, MaskMetadata, Predicate, POSEIDON_HASH_SIZE, CURRENT_MASK_VERSION, MaskError } from './index';
import { poseidonHash, poseidonHashWithDomain } from './crypto'; // assume we have crypto helpers (not listed, but we can define inline)
import { generateProof } from './proofs';

// Simple Poseidon hash stub (in real SDK, use a proper implementation)
function poseidonHash(elements: Uint8Array[]): Uint8Array {
// Stub: concatenate and return first 32 bytes of SHA256.
const crypto = require('crypto');
const hash = crypto.createHash('sha256');
for (const el of elements) {
hash.update(el);
}
return hash.digest();
}

function poseidonHashWithDomain(domain: Uint8Array, elements: Uint8Array[]): Uint8Array {
return poseidonHash([domain, ...elements]);
}

const DOMAIN_MASK_COMMITMENT = new Uint8Array([1, ...new Array(31).fill(0)]); // domain separation

export class Mask {
public readonly commitment: MaskCommitment;
public readonly version: number = CURRENT_MASK_VERSION;
private attributes: Uint8Array[]; // each attribute as 32-byte field element
private salt: Uint8Array; // 32-byte salt

constructor(attributes: Uint8Array[], salt?: Uint8Array) {
this.attributes = attributes;
this.salt = salt || crypto.randomBytes(32);
this.commitment = this.computeCommitment();
}

private computeCommitment(): MaskCommitment {
const elements = this.attributes.map(attr => attr);
elements.push(this.salt);
return poseidonHashWithDomain(DOMAIN_MASK_COMMITMENT, elements);
}

public async createProof(predicate: Predicate, context: Uint8Array): Promise<Proof> {
return generateProof(this, predicate, context);
}

public getCommitment(): MaskCommitment {
return this.commitment;
}

public getSalt(): Uint8Array {
return this.salt;
}
}

export function createMask(attributes: Uint8Array[], salt?: Uint8Array): Mask {
return new Mask(attributes, salt);
}

export function getMaskCommitment(attributes: Uint8Array[], salt: Uint8Array): MaskCommitment {
return poseidonHashWithDomain(DOMAIN_MASK_COMMITMENT, [...attributes, salt]);
}


