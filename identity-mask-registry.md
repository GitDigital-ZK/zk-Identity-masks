# Identity Mask Registry  
Version: 1.0.0  
Status: Draft  
Authority: GitDigital Identity Layer

---

## 1. Purpose  
The Identity Mask Registry is the authoritative ledger for tracking the lifecycle of all Identity Masks.  
It records issuance, updates, revocations, and version history in a deterministic, audit‑friendly format.

The registry MUST be compatible with:
- Zig verifier modules (`zig/mask_registry.zig`)
- Mojo prover pipelines (`mojo/prover.mj`)
- TypeScript SDK (`sdk/registry.ts`)
- Off-chain and on-chain storage models

---

## 2. Registry Entry Structure  
Each registry entry MUST contain:

- **mask_id**: Unique identifier for the mask  
- **version**: Semantic version of the mask  
- **issuer_id**: Authority that issued the mask  
- **revoked**: Boolean revocation status  
- **timestamp**: ISO 8601 timestamp of the entry  
- **metadata** (optional): Additional registry metadata  

Registry entries MUST follow the canonical type definition in `identity-mask-types.ts`.

---

## 3. Registry Operations  

### 3.1 Register Mask  
A new mask MUST be registered when created.

Required inputs:
- MaskID  
- Version  
- IssuerID  
- Timestamp  

The registry MUST reject:
- Duplicate mask IDs  
- Invalid issuer signatures  
- Unsupported mask versions  

---

### 3.2 Update Mask  
A mask MAY be updated only if:
- The version number increments  
- Commitments are regenerated  
- Proofs are recalculated  

The registry MUST:
- Append a new entry  
- Preserve historical versions  
- Maintain deterministic ordering  

---

### 3.3 Revoke Mask  
Revocation MUST support two modes:

#### Soft Revocation  
- Mark `revoked = true`  
- Mask remains in registry  
- Proofs MAY still be verified for historical purposes  

#### Hard Revocation  
- Mask is removed from active index  
- Historical entries MUST remain accessible  

---

## 4. Storage Models  

### 4.1 Off-Chain Storage  
Registry MAY be stored in:
- JSON files  
- SQLite  
- Postgres  
- KV stores  
- IPFS  

Off-chain registries MUST be:
- Deterministic  
- Append-only  
- Cryptographically signed  

---

### 4.2 On-Chain Storage  
Registry MAY be deployed on:
- Solana  
- EVM chains  
- Custom rollups  
- ZK-based state machines  

On-chain registries MUST:
- Use hash-based indexing  
- Support versioned entries  
- Support revocation proofs  

---

## 5. Verification Rules  
A registry entry MUST be considered valid if:

- `mask_id` matches the mask  
- `issuer_id` is trusted  
- `version` is supported  
- `revoked` is false (for active use)  
- Timestamp is valid and monotonic  

Zig verifier modules MUST enforce these rules.

---

## 6. Interoperability Requirements  
The registry MUST remain compatible with:

- `identity-mask-spec.md`  
- `identity-mask-types.ts`  
- Zig verifier modules  
- Mojo prover pipelines  
- TypeScript SDK  

Breaking changes MUST increment the MAJOR version.

---

## 7. Security Considerations  
- Registry MUST NOT store raw PII  
- All entries MUST be signed by issuer  
- Replay attacks MUST be prevented  
- Version history MUST be immutable  
- Revocation MUST be cryptographically provable  

---

## 8. Versioning  
This registry follows semantic versioning:

- MAJOR: Breaking changes  
- MINOR: New features  
- PATCH: Fixes or clarifications