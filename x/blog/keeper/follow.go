package keeper

import (
	"blog/x/blog/types"
	"encoding/binary"
	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k Keeper) GetFollowerCount(ctx sdk.Context, creator string) uint64 {
	// Get the store using storeKey (which is "blog") and PostCountKey (which is "Post/count/")
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.FollowerCountKey))

	// Convert the PostCountKey to bytes
	byteKey := []byte(types.FollowerCountKey + creator)

	// Get the value of the count
	bz := store.Get(byteKey)

	// Return zero if the count value is not found (for example, it's the first post)
	if bz == nil {
		return 0
	}

	// Convert the count into a uint64
	return binary.BigEndian.Uint64(bz)

}

func (k Keeper) SetFollowerCount(ctx sdk.Context, creator string, count uint64) {
	// Get the store using storeKey (which is "blog") and PostCountKey (which is "Post/count/")
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.FollowerCountKey))

	// Convert the PostCountKey to bytes
	byteKey := []byte(types.FollowerCountKey + creator)

	// Get the value of the count
	// Convert count from uint64 to string and get bytes
	bz := make([]byte, 8)
	binary.BigEndian.PutUint64(bz, count)

	// Set the value of Post/count/ to count
	store.Set(byteKey, bz)

}

func (k Keeper) Follow(ctx sdk.Context, creator string, followAddress string) {
	// Get the store using storeKey (which is "blog") and PostCountKey (which is "Post/count/")
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.FollowList))

	// Convert the PostCountKey to bytes
	byteKey := []byte(types.FollowList + creator)

	bz := store.Get(byteKey)

	// Get the value of the count

	// todo check followAddress exists

	// update Follower Count
	count := k.GetFollowerCount(ctx, followAddress)
	k.SetFollowerCount(ctx, followAddress, count+1)

	// update Follow List

	var followList types.FollowAddressList
	k.cdc.MustUnmarshal(bz, &followList)
	followList.List = append(followList.List, followAddress)
	bz = k.cdc.MustMarshal(&followList)

	ctx.EventManager().EmitEvents(sdk.Events{
		sdk.NewEvent(string(byteKey) + "/" + string(bz) + "/" + creator),
	})

	store.Set(byteKey, bz)

}

func (k Keeper) GetFollowList(ctx sdk.Context, creator string) types.FollowAddressList {
	// Get the store using storeKey (which is "blog") and PostCountKey (which is "Post/count/")
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.FollowList))

	// Convert the PostCountKey to bytes
	byteKey := []byte(types.FollowList + creator)

	bz := store.Get(byteKey)

	// update Follow List

	var followList types.FollowAddressList
	k.cdc.MustUnmarshal(bz, &followList)

	return followList
}
