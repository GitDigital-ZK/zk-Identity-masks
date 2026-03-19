# GOVERNANCE.md  
Version: 1.0.0  
Status: Draft  
Authority: GitDigital Identity Layer

---

# 1. Purpose  
This document defines the governance rules, authority model, and operational responsibilities for the Identity Mask system.  
Governance ensures that Identity Masks are issued, updated, verified, and revoked in a secure, deterministic, and auditable manner.

Governance applies to:
- Issuers  
- Subjects  
- Verifiers  
- Registry maintainers  
- Protocol implementers  

---

# 2. Governance Principles  

## 2.1 Authority Without Surveillance  
Issuers provide authority, not visibility.  
No issuer may access raw subject data.  
No verifier may request raw attributes.

## 2.2 Deterministic Governance  
All governance actions MUST be:
- deterministic  
- reproducible  
- cryptographically signed  
- version‑locked  
- registry‑recorded  

## 2.3 Minimal Trust  
The system minimizes trust by relying on:
- commitments  
- proofs  
- signatures  
- registry entries  

Trust is cryptographic, not institutional.

## 2.4 Transparency  
All governance rules MUST be:
- public  
- documented  
- versioned  
- auditable  

---

# 3. Roles and Responsibilities  

## 3.1 Issuer  
Issuers are authorized entities that create and update Identity Masks.

Issuers MUST:
- generate commitments  
- generate proofs  
- assemble masks  
- sign registry entries  
- maintain version integrity  
- follow revocation rules  

Issuers MUST NOT:
- store raw PII  
- correlate subjects  
- bypass registry requirements  

---

## 3.2 Subject  
Subjects are the owners of Identity Masks.

Subjects MAY:
- request issuance  
- request updates  
- request revocation  
- selectively disclose proofs  
- hold multiple masks  

Subjects MUST:
- protect their subject hash  
- maintain control of disclosure  

---

## 3.3 Verifier  
Verifiers validate masks and proofs.

Verifiers MUST:
- validate registry status  
- validate issuer authority  
- validate proofs  
- validate version compatibility  

Verifiers MUST NOT:
- request raw attributes  
- infer identity from commitments  
- bypass registry checks  

---

## 3.4 Registry Maintainer  
Registry maintainers operate the Identity Mask Registry.

Maintainers MUST:
- enforce deterministic ordering  
- prevent duplicates  
- validate issuer signatures  
- preserve historical entries  
- maintain append‑only integrity  

Maintainers MUST NOT:
- modify historical entries  
- remove entries except for hard revocation  
- store raw PII  

---

# 4. Governance Actions  

## 4.1 Issuance  
Issuance MUST include:
- commitments  
- proofs  
- issuer signature  
- registry entry  

Issuance MUST be rejected if:
- mask_id already exists  
- issuer is unauthorized  
- version is invalid  

---

## 4.2 Update  
Updates MUST:
- increment version  
- regenerate commitments  
- regenerate proofs  
- append registry entry  

Updates MUST NOT:
- overwrite previous versions  
- reuse commitments  
- reuse proofs  

---

## 4.3 Revocation  

### Soft Revocation  
- `revoked = true`  
- Mask remains in registry  
- Proofs MAY still be verified historically  

### Hard Revocation  
- Mask removed from active index  
- Historical entries preserved  
- Requires issuer signature  

---

# 5. Governance Signatures  
All governance actions MUST be signed by the issuer.

Signatures MUST:
- bind mask_id  
- bind version  
- bind timestamp  
- bind issuer_id  

Signatures MUST be verifiable by:
- Zig verifier modules  
- TypeScript SDK  
- On‑chain verifiers  

---

# 6. Governance Violations  
Violations include:
- unauthorized issuance  
- invalid signatures  
- version spoofing  
- registry tampering  
- proof forgery  

Violations MUST trigger:
- rejection of action  
- audit logging  
- optional issuer suspension  

---

# 7. Versioning  
This governance document follows semantic versioning:

- MAJOR: Breaking governance changes  
- MINOR: New governance features  
- PATCH: Clarifications or refinements