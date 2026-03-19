=== FILE: tests/proofs.test.ts ===
import { generateProof, verifyProof, serializeProof, deserializeProof } from '../sdk/proofs';
import { createMask } from '../sdk/mask';

describe('Proofs', () => {
it('should generate and verify proof (stub)', async () => {
const mask = createMask([new Uint8Array(32)]);
const proof = await generateProof(mask, 'age >= 18', new Uint8Array(32));
const valid = await verifyProof(proof);
expect(valid).toBe(true);
});

it('should serialize and deserialize proof', () => {
const original = {
data: new Uint8Array([1,2,3]),
publicInputs: {
maskCommitment: new Uint8Array(32),
predicateHash: new Uint8Array(32),
contextHash: new Uint8Array(32),
},
};
const bytes = serializeProof(original);
const deserialized = deserializeProof(bytes);
expect(deserialized.data).toEqual(original.data);
expect(deserialized.publicInputs.maskCommitment).toEqual(original.publicInputs.maskCommitment);
});
});
