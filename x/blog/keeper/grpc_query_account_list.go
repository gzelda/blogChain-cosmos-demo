package keeper

import (
	"context"
	"github.com/cosmos/cosmos-sdk/store/prefix"

	"blog/x/blog/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
)

func (k Keeper) AccountList(goCtx context.Context, req *types.QueryAccountListRequest) (*types.QueryAccountListResponse, error) {
	if req == nil {
		return nil, status.Error(codes.InvalidArgument, "invalid request")
	}

	var result types.AccountsList

	ctx := sdk.UnwrapSDKContext(goCtx)

	store := ctx.KVStore(k.storeKey)

	accountListStore := prefix.NewStore(store, []byte(types.AccountListKey))

	byteKeyAccountList := []byte(types.AccountListKey)

	value := accountListStore.Get(byteKeyAccountList)

	if err := k.cdc.Unmarshal(value, &result); err != nil {
		return nil, status.Error(codes.Internal, err.Error())
	}

	return &types.QueryAccountListResponse{CreatorList: &result}, nil
}
