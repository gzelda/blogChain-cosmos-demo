// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: blog/blog/follow.proto

package types

import (
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	io "io"
	math "math"
	math_bits "math/bits"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type FollowAddressList struct {
	List []string `protobuf:"bytes,1,rep,name=list,proto3" json:"list,omitempty"`
}

func (m *FollowAddressList) Reset()         { *m = FollowAddressList{} }
func (m *FollowAddressList) String() string { return proto.CompactTextString(m) }
func (*FollowAddressList) ProtoMessage()    {}
func (*FollowAddressList) Descriptor() ([]byte, []int) {
	return fileDescriptor_2ae9fefbb949b505, []int{0}
}
func (m *FollowAddressList) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *FollowAddressList) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_FollowAddressList.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *FollowAddressList) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FollowAddressList.Merge(m, src)
}
func (m *FollowAddressList) XXX_Size() int {
	return m.Size()
}
func (m *FollowAddressList) XXX_DiscardUnknown() {
	xxx_messageInfo_FollowAddressList.DiscardUnknown(m)
}

var xxx_messageInfo_FollowAddressList proto.InternalMessageInfo

func (m *FollowAddressList) GetList() []string {
	if m != nil {
		return m.List
	}
	return nil
}

func init() {
	proto.RegisterType((*FollowAddressList)(nil), "blog.blog.FollowAddressList")
}

func init() { proto.RegisterFile("blog/blog/follow.proto", fileDescriptor_2ae9fefbb949b505) }

var fileDescriptor_2ae9fefbb949b505 = []byte{
	// 131 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x12, 0x4b, 0xca, 0xc9, 0x4f,
	0xd7, 0x07, 0x13, 0x69, 0xf9, 0x39, 0x39, 0xf9, 0xe5, 0x7a, 0x05, 0x45, 0xf9, 0x25, 0xf9, 0x42,
	0x9c, 0x20, 0x21, 0x3d, 0x10, 0xa1, 0xa4, 0xce, 0x25, 0xe8, 0x06, 0x96, 0x72, 0x4c, 0x49, 0x29,
	0x4a, 0x2d, 0x2e, 0xf6, 0xc9, 0x2c, 0x2e, 0x11, 0x12, 0xe2, 0x62, 0xc9, 0xc9, 0x2c, 0x2e, 0x91,
	0x60, 0x54, 0x60, 0xd6, 0xe0, 0x0c, 0x02, 0xb3, 0x9d, 0xb4, 0x4f, 0x3c, 0x92, 0x63, 0xbc, 0xf0,
	0x48, 0x8e, 0xf1, 0xc1, 0x23, 0x39, 0xc6, 0x09, 0x8f, 0xe5, 0x18, 0x2e, 0x3c, 0x96, 0x63, 0xb8,
	0xf1, 0x58, 0x8e, 0x21, 0x4a, 0x10, 0x6c, 0x41, 0x05, 0xc4, 0x9e, 0x92, 0xca, 0x82, 0xd4, 0xe2,
	0x24, 0x36, 0xb0, 0x3d, 0xc6, 0x80, 0x00, 0x00, 0x00, 0xff, 0xff, 0xf4, 0xf5, 0x14, 0xc5, 0x81,
	0x00, 0x00, 0x00,
}

func (m *FollowAddressList) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *FollowAddressList) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *FollowAddressList) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.List) > 0 {
		for iNdEx := len(m.List) - 1; iNdEx >= 0; iNdEx-- {
			i -= len(m.List[iNdEx])
			copy(dAtA[i:], m.List[iNdEx])
			i = encodeVarintFollow(dAtA, i, uint64(len(m.List[iNdEx])))
			i--
			dAtA[i] = 0xa
		}
	}
	return len(dAtA) - i, nil
}

func encodeVarintFollow(dAtA []byte, offset int, v uint64) int {
	offset -= sovFollow(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *FollowAddressList) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if len(m.List) > 0 {
		for _, s := range m.List {
			l = len(s)
			n += 1 + l + sovFollow(uint64(l))
		}
	}
	return n
}

func sovFollow(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozFollow(x uint64) (n int) {
	return sovFollow(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (m *FollowAddressList) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowFollow
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: FollowAddressList: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: FollowAddressList: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field List", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowFollow
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthFollow
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthFollow
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.List = append(m.List, string(dAtA[iNdEx:postIndex]))
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipFollow(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if (skippy < 0) || (iNdEx+skippy) < 0 {
				return ErrInvalidLengthFollow
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipFollow(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowFollow
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowFollow
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowFollow
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthFollow
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupFollow
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthFollow
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthFollow        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowFollow          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupFollow = fmt.Errorf("proto: unexpected end of group")
)
