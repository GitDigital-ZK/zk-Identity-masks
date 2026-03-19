# Identity Mask Flow  
Version: 1.0.0  
Status: Draft  
Authority: GitDigital Identity Layer

---

## 1. Overview  
This document defines the canonical lifecycle flow for Identity Masks.  
It describes how a mask is created, committed, proven, verified, updated, and revoked across the entire GitDigital identity ecosystem.

The flow MUST remain compatible with:
- Mojo circuits (`mojo/identity_mask.mj`)
- Zig verifier modules (`zig/mask_verifier.zig`)
- TypeScript SDK (`sdk/mask.ts`)
- Registry logic (`identity-mask-registry.md`)

---

## 2. High-Level Flow Diagram (Text Version)