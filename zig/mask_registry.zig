=== FILE: zig/mask_registry.zig ===
const std = @import("std");
const hash = @import("hash.zig");

/// Represents a mask registered on-chain or in a public registry.
pub const MaskEntry = struct {
/// Unique identifier for the mask (often the commitment or public key)
mask_id: [32]u8,
/// Owner's public key (for authorization to revoke)
owner_pubkey: [32]u8,
/// Expiration timestamp (Unix seconds)
expiration: u64,
/// Whether the mask is revoked
revoked: bool,
/// Additional metadata (e.g., URI to encrypted attributes)
metadata_uri: []const u8,
};

/// Registry client for interacting with the mask registry (e.g., Solana program).
pub const MaskRegistry = struct {
/// Connection to the blockchain RPC (abstracted)
rpc_url: []const u8,
allocator: std.mem.Allocator,

};

test "registry test" {
const allocator = std.testing.allocator;
var registry = MaskRegistry.init(allocator, "http://localhost:8899");
defer registry.deinit(); // not defined, but we'll ignore.

}
