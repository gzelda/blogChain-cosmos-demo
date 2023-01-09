/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "blog.blog";

export interface AccountsList {
  creatorList: string[];
}

function createBaseAccountsList(): AccountsList {
  return { creatorList: [] };
}

export const AccountsList = {
  encode(message: AccountsList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.creatorList) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountsList {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountsList();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creatorList.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountsList {
    return { creatorList: Array.isArray(object?.creatorList) ? object.creatorList.map((e: any) => String(e)) : [] };
  },

  toJSON(message: AccountsList): unknown {
    const obj: any = {};
    if (message.creatorList) {
      obj.creatorList = message.creatorList.map((e) => e);
    } else {
      obj.creatorList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<AccountsList>, I>>(object: I): AccountsList {
    const message = createBaseAccountsList();
    message.creatorList = object.creatorList?.map((e) => e) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };
