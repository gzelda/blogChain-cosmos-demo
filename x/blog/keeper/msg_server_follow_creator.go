package keeper

import (
	"context"

	"blog/x/blog/types"
	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) FollowCreator(goCtx context.Context, msg *types.MsgFollowCreator) (*types.MsgFollowCreatorResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	k.Follow(ctx, msg.Creator, msg.FollowAddress)

	return &types.MsgFollowCreatorResponse{}, nil
}
