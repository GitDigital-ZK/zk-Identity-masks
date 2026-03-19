
📄 File 4: identity-mask-flow.md
A visual + textual flow describing how identity masks move through their lifecycle.

`

Identity Mask Flow
Version: 1.0.0  
Status: Draft  
Authority: GitDigital Identity Layer

---

1. Overview
This document defines the canonical lifecycle flow for Identity Masks.  
It describes how a mask is created, committed, proven, verified, updated, and revoked across the entire GitDigital identity ecosystem.

The flow MUST remain compatible with:
- Mojo circuits (mojo/identity_mask.mj)
- Zig verifier modules (zig/mask_verifier.zig)
- TypeScript SDK (sdk/mask.ts)
- Registry logic (identity-mask-registry.md)

---

2. High-Level Flow Diagram (Text Version)

`
[Issuer] 
   │
   │ 1. Attribute Input
   ▼
[Mask Construction]
   │
   │ 2. Commitment Generation (ZK-friendly)
   ▼
[Commitments]
   │
   │ 3. Proof Generation (Mojo Prover)
   ▼
[Proofs]
   │
   │ 4. Mask Assembly
   ▼
[Identity Mask]
   │
   │ 5. Registration (Registry Entry)
   ▼
[Identity Mask Registry]
   │
   │ 6. Verification (Zig Verifier / SDK)
   ▼
[Verifier / Consumer]
`

---

3. Detailed Steps

3.1 Step 1 — Attribute Input
Issuer collects or receives identity attributes.  
Attributes MUST be:
- Non-PII  
- Masked or hashed  
- Deterministic  

Examples:
- Age range  
- Residency region  
- Membership tier  

---

3.2 Step 2 — Commitment Generation
Commitments MUST be generated using deterministic hashing.  
Recommended: Poseidon, Blake3.

Outputs:
- commitments[key] = hash(attribute_value)  

These commitments MUST be compatible with:
- Mojo circuits  
- Zig verifiers  
- WASM execution  

---

3.3 Step 3 — Proof Generation
Mojo prover pipeline generates proofs for:
- Attribute validity  
- Range proofs  
- Non-membership  
- Equality proofs  

Proofs MUST be:
- Deterministic  
- Serializable  
- Verifiable offline  

---

3.4 Step 4 — Mask Assembly
Issuer constructs the Identity Mask object:

- mask_id  
- version  
- issuer  
- subject  
- attributes  
- commitments  
- proofs  
- metadata  

This MUST follow the schema in identity-mask-types.ts.

---

3.5 Step 5 — Registration
Mask is registered in the Identity Mask Registry.

Registry MUST:
- Append entry  
- Validate issuer  
- Validate version  
- Prevent duplicates  

Registry entry includes:
- mask_id  
- version  
- issuer_id  
- revoked  
- timestamp  

---

3.6 Step 6 — Verification
Verification MAY occur via:
- Zig verifier module  
- TypeScript SDK  
- On-chain verifier  
- WASM runtime  

Verifier MUST check:
- Registry status  
- Issuer authority  
- Proof validity  
- Version compatibility  

---

4. Update Flow
Updating a mask MUST follow:

`
Old Mask
   │
   │ 1. Attribute Change
   ▼
New Commitments
   │
   │ 2. New Proofs
   ▼
New Mask Version
   │
   │ 3. Registry Append
   ▼
Updated Registry Entry
`

Rules:
- Version MUST increment  
- Commitments MUST be regenerated  
- Proofs MUST be recalculated  

---

5. Revocation Flow

Soft Revocation
- revoked = true  
- Mask remains in registry  

Hard Revocation
- Mask removed from active index  
- Historical entries preserved  

---

6. Security Requirements
- No raw PII  
- Deterministic hashing  
- Issuer signatures  
- Replay protection  
- Version-locked commitments  

---

7. Versioning
This flow follows semantic versioning:
- MAJOR: Breaking changes  
- MINOR: New features  
- PATCH: Fixes or clarifications  

`

---

Whenever you're ready, just say:

Next file

And I’ll deliver File 5.