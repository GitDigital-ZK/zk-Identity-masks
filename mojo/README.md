=== FILE: mojo/README.md ===

Mojo Modules for zk-Identity-masks

This directory contains the Mojo implementation of the prover and circuit constraints.

Modules

· identity_mask.mj – Core Mask struct, commitment computation.
· prover.mj – Proof generation and verification.
· constraints.mj – Circuit definitions for different attribute predicates.
· mask_ai_optimizer.mj – AI-powered optimizer for mask selection and parameters.

Usage

```mojo
from identity_mask import Mask
from prover import generate_proof

var attributes = Pointer[Int].alloc(2).set(0, 25).set(1, 840)  # age, country code
var mask = Mask(attributes, salt=12345)

var proof = generate_proof(mask, "age >= 18", context=9876)
```

Building

Mojo is still evolving. To run these modules, use the Mojo compiler (provided by Modular). Ensure you have the latest version.

```bash
mojo run identity_mask.mj
```

Integration with Zig/TypeScript

The Mojo prover generates proofs that can be verified by the Zig verifier. Both use the same Poseidon hash and circuit definitions (versioned via circuit ID).

