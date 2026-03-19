=== FILE: sdk/registry.ts ===
import { MaskCommitment, MaskMetadata } from './index';

export interface RegistryClientConfig {
rpcUrl: string;
programId?: string; // Solana program ID
}

export class RegistryClient {
private config: RegistryClientConfig;

constructor(config: RegistryClientConfig) {
this.config = config;
}

async registerMask(
commitment: MaskCommitment,
ownerPublicKey: Uint8Array,
expiration: number,
metadataUri?: string,
signature?: Uint8Array // would be required in production
): Promise<string> {
// Stub: would send a transaction to the blockchain.
console.log('Registering mask', commitment);
return 'tx_signature_placeholder';
}

async revokeMask(commitment: MaskCommitment, signature: Uint8Array): Promise<string> {
console.log('Revoking mask', commitment);
return 'revoke_tx_placeholder';
}

async isRevoked(commitment: MaskCommitment): Promise<boolean> {
// Stub: query registry.
return false;
}

async getMask(commitment: MaskCommitment): Promise<MaskMetadata | null> {
// Stub: fetch from registry.
return {
commitment,
ownerPublicKey: new Uint8Array(32),
expiration: Date.now() / 1000 + 3600,
revoked: false,
metadataUri: 'https://example.com/mask-metadata',
};
}
}

// Convenience functions
export async function checkMaskRevoked(commitment: MaskCommitment, client: RegistryClient): Promise<boolean> {
return client.isRevoked(commitment);
}
