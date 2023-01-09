package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgFollowCreator = "follow_creator"

var _ sdk.Msg = &MsgFollowCreator{}

func NewMsgFollowCreator(creator string, creatorAddress string) *MsgFollowCreator {
	return &MsgFollowCreator{
		Creator:       creator,
		FollowAddress: creatorAddress,
	}
}

func (msg *MsgFollowCreator) Route() string {
	return RouterKey
}

func (msg *MsgFollowCreator) Type() string {
	return TypeMsgFollowCreator
}

func (msg *MsgFollowCreator) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgFollowCreator) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgFollowCreator) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
