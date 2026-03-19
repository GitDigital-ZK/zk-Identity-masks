# IDENTITY.md  
Version: 1.0.0  
Status: Draft  
Authority: GitDigital Identity Layer

---

# 1. Purpose  
This document defines the identity philosophy, principles, and architectural foundations behind the GitDigital Identity Mask system.  
Identity Masks are not credentials, KYC artifacts, or compliance objects.  
They are **privacy‑preserving identity abstractions** designed for:

- selective disclosure  
- zero‑knowledge verification  
- pseudonymous identity representation  
- multi‑layer identity composition  
- cross‑ecosystem interoperability  

Identity Masks allow users to prove *who they need to be* without revealing *who they are*.

---

# 2. Identity Philosophy  

## 2.1 Privacy as a Default  
Identity MUST be expressed without exposing raw personal data.  
No PII is ever stored, transmitted, or embedded in a mask.

## 2.2 Proof Over Disclosure  
Identity is validated through **cryptographic proofs**, not data exposure.  
A verifier learns only what they need to know — nothing more.

## 2.3 User Sovereignty  
Subjects control their identity masks.  
Issuers provide authority, but subjects retain ownership.

## 2.4 Deterministic Identity  
Identity MUST be:

- deterministic  
- reproducible  
- versioned  
- cryptographically bound  

This ensures auditability without compromising privacy.

## 2.5 Multi‑Layer Identity  
Identity Masks support layered identity:

- base identity  
- domain‑specific identity  
- role‑based identity  
- membership identity  
- compliance identity (optional)  

Each layer is a mask.  
Masks can be composed, nested, or selectively disclosed.

---

# 3. Architectural Principles  

## 3.1 Mask as a Container  
A mask is a structured container for:

- attributes  
- commitments  
- proofs  
- metadata  

It is NOT a credential.  
It is NOT a certificate.  
It is an **identity abstraction**.

## 3.2 ZK‑Native by Design  
Identity Masks are built for zero‑knowledge systems:

- Mojo circuits generate proofs  
- Zig modules verify proofs  
- TypeScript SDK orchestrates flows  

Every component is ZK‑first.

## 3.3 Cross‑Language Interoperability  
Identity MUST remain consistent across:

- Zig (verifiers)  
- Mojo (provers)  
- TypeScript (SDK)  
- WASM (runtime)  
- Solana/EVM (on‑chain)  

The spec defines the truth.  
All languages implement it.

## 3.4 Version‑Locked Identity  
Every mask is versioned.  
Every update increments the version.  
Every version is registered.  
Nothing is overwritten.

---

# 4. Identity Mask Roles  

## 4.1 Issuer  
Creates masks.  
Generates commitments.  
Generates proofs.  
Registers masks.  
Signs entries.

## 4.2 Subject  
Owns the mask.  
Controls disclosure.  
Controls updates.  
Controls revocation requests.

## 4.3 Verifier  
Validates proofs.  
Checks registry status.  
Confirms issuer authority.  
Never sees raw attributes.

---

# 5. Identity Threat Model  

Identity Masks MUST protect against:

- correlation attacks  
- replay attacks  
- issuer impersonation  
- version spoofing  
- commitment forgery  
- proof tampering  
- registry poisoning  

Security is enforced through:

- deterministic hashing  
- issuer signatures  
- version‑locked commitments  
- ZK proofs  
- registry validation  

---

# 6. Identity in the GitDigital Ecosystem  

Identity Masks serve as the foundation for:

- membership systems  
- contributor identity  
- governance roles  
- access control  
- compliance layers  
- multi‑platform identity portability  

They unify identity across:

- GitHub  
- Open Collective  
- Patreon  
- GitDigital Products  
- future GitDigital protocols  

Identity Masks are the **root identity layer** for the entire ecosystem.

---

# 7. Versioning  
This document follows semantic versioning:

- MAJOR: Breaking identity model changes  
- MINOR: New identity features  
- PATCH: Clarifications or refinements