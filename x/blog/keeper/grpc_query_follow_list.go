package keeper

import (
	"context"
	"github.com/cosmos/cosmos-sdk/store/prefix"

	"blog/x/blog/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) FollowList(goCtx context.Context, req *types.QueryFollowListRequest) (*types.QueryFollowListResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}
	if len(req.Address) == 0 {
		return nil, status.Error(codes.InvalidArgument, "invalid address")
	}

	ctx := sdk.UnwrapSDKContext(goCtx)

	//res := k.GetFollowList(ctx, req.Address)
	//
	//ctx.Logger().Info(string(len(res.List)))

	// Get the store using storeKey (which is "blog") and PostCountKey (which is "Post/count/")
	store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.FollowList))

	// Convert the PostCountKey to bytes
	byteKey := []byte(types.FollowList + req.Address)

	value := store.Get(byteKey)

	// update Follow List

	var followList types.FollowAddressList
	if err := k.cdc.Unmarshal(value, &followList); err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryFollowListResponse{FollowList: &followList}, nil
}
