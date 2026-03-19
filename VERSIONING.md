=== FILE: VERSIONING.md ===

Versioning Policy

zk-Identity-masks follows Semantic Versioning 2.0.0 (https://semver.org/).

Summary

Given a version number MAJOR.MINOR.PATCH, we increment the:

1. MAJOR version when you make incompatible API or cryptographic changes,
2. MINOR version when you add functionality in a backward-compatible manner, and
3. PATCH version when you make backward-compatible bug fixes.

Cryptographic Compatibility

The MAJOR version number also reflects the circuit version. Changes that alter the circuit structure, constraint system, or verification keys will result in a MAJOR bump. Different MAJOR versions produce proofs that are not cross-verifiable.

Stability Guarantees

· MINOR releases may introduce new features, but existing APIs and proof formats remain compatible.
· PATCH releases are only for bug fixes and documentation; they contain no breaking changes.

Release Tags

All releases are tagged in Git with vMAJOR.MINOR.PATCH (e.g., v1.2.3).