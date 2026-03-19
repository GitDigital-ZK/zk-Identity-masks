# Identity Mask Specification  
Version: 1.0.0  
Status: Draft  
Authority: GitDigital Identity Layer

---

## 1. Purpose  
Identity Masks provide a privacy‑preserving abstraction layer for representing user identity attributes without exposing raw personal data.  
A mask is a structured, versioned container that supports zero‑knowledge proofs, selective disclosure, and multi‑layer identity composition.

---

## 2. Mask Structure  
Each mask MUST contain the following fields:

- **mask_id**: Unique identifier (UUIDv7 or hash‑derived)
- **version**: Semantic version of the mask format
- **issuer**: Entity or authority that issued the mask
- **subject**: The entity the mask represents (hashed or pseudonymous)
- **attributes**: Key/value pairs representing masked identity attributes
- **commitments**: Cryptographic commitments for ZK proofs
- **proofs**: Optional embedded proofs for offline verification
- **metadata**: Optional descriptive metadata

---

## 3. Attribute Types  
Attributes MAY include:

- Age range  
- Residency region  
- Citizenship group  
- Membership tier  
- Verification status  
- Custom domain‑specific attributes  

Attributes MUST NOT include raw PII.

---

## 4. Commitments  
Commitments MUST be generated using a deterministic hashing scheme compatible with:

- Zig verifier modules  
- Mojo prover pipelines  
- WASM execution environments  

Recommended: Poseidon or Blake3.

---

## 5. Proof Requirements  
Identity Masks MUST support:

- Proof of attribute validity  
- Proof of non‑membership  
- Proof of range  
- Proof of equality across masks  
- Proof of revocation status  

Proofs MUST be compatible with both:

- `mojo/identity_mask.mj` (circuit)  
- `zig/mask_verifier.zig` (verifier)

---

## 6. Lifecycle  
### 6.1 Creation  
A mask is created by an issuer using:

- Attribute inputs  
- Commitment generation  
- Optional embedded proofs  

### 6.2 Update  
Masks MAY be updated only if:

- Version increments  
- Commitments are regenerated  
- Proofs are recalculated  

### 6.3 Revocation  
Masks MUST support:

- Soft revocation (status flag)  
- Hard revocation (registry removal)  

---

## 7. Registry Integration  
Identity Masks MUST integrate with the Identity Mask Registry:

- Registration  
- Version tracking  
- Revocation tracking  
- Issuer authority validation  

Registry implementations exist in:

- `zig/mask_registry.zig`  
- `sdk/registry.ts`

---

## 8. Compatibility  
Identity Masks MUST remain compatible with:

- Solana‑style account models  
- WASM execution  
- ZK circuits (Mojo)  
- Low‑level verifiers (Zig)  
- TypeScript SDKs  

---

## 9. Security Considerations  
- No raw PII  
- Deterministic hashing  
- Replay‑attack protection  
- Version‑locked commitments  
- Issuer signature validation  

---

## 10. Versioning  
This specification follows semantic versioning:

- MAJOR: Breaking changes  
- MINOR: New features  
- PATCH: Fixes or clarifications