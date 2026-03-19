=== FILE: tests/registry.test.ts ===
import { RegistryClient } from '../sdk/registry';

describe('RegistryClient', () => {
it('should register and revoke mask', async () => {
const client = new RegistryClient({ rpcUrl: 'http://localhost:8899' });
const commitment = new Uint8Array(32);
commitment[0] = 42;
const owner = new Uint8Array(32);
const signature = new Uint8Array(64);

});

it('should fetch mask metadata', async () => {
const client = new RegistryClient({ rpcUrl: 'http://localhost:8899' });
const commitment = new Uint8Array(32);
const mask = await client.getMask(commitment);
expect(mask).toBeDefined();
expect(mask?.commitment).toEqual(commitment);
});
});
