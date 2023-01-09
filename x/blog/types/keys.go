package types

const (
	// ModuleName defines the module name
	ModuleName = "blog"

	// StoreKey defines the primary module store key
	StoreKey = ModuleName

	// RouterKey defines the module's message routing key
	RouterKey = ModuleName

	// MemStoreKey defines the in-memory store key
	MemStoreKey = "mem_blog"

	// Keep track of the index of posts
	PostKey      = "Post/value/"
	PostCountKey = "Post/count/"

	AccountKey     = "Account/account/"
	AccountListKey = "Account/list/"

	FollowerCountKey = "Follow/follower-count/"
	FollowList       = "Follow/follow-list/"
)

func KeyPrefix(p string) []byte {
	return []byte(p)
}
