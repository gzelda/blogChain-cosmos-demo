/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { AccountsList } from "./account";
import { FollowAddressList } from "./follow";
import { Params } from "./params";
import { Post } from "./post";

export const protobufPackage = "blog.blog";

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {
}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface QueryPostsRequest {
  /** Adding pagination to request */
  pagination: PageRequest | undefined;
}

export interface QueryPostsResponse {
  /** Returning a list of posts */
  Post: Post[];
  /** Adding pagination to response */
  pagination: PageResponse | undefined;
}

export interface QueryAccountListRequest {
}

export interface QueryAccountListResponse {
  creatorList: AccountsList | undefined;
}

export interface QueryFollowListRequest {
  address: string;
}

export interface QueryFollowListResponse {
  followList: FollowAddressList | undefined;
}

export interface QueryCommentsRequest {
  id: number;
}

export interface QueryCommentsResponse {
  title: string;
  body: string;
}

function createBaseQueryParamsRequest(): QueryParamsRequest {
  return {};
}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryParamsRequest {
    return {};
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsRequest>, I>>(_: I): QueryParamsRequest {
    const message = createBaseQueryParamsRequest();
    return message;
  },
};

function createBaseQueryParamsResponse(): QueryParamsResponse {
  return { params: undefined };
}

export const QueryParamsResponse = {
  encode(message: QueryParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    return { params: isSet(object.params) ? Params.fromJSON(object.params) : undefined };
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryParamsResponse>, I>>(object: I): QueryParamsResponse {
    const message = createBaseQueryParamsResponse();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    return message;
  },
};

function createBaseQueryPostsRequest(): QueryPostsRequest {
  return { pagination: undefined };
}

export const QueryPostsRequest = {
  encode(message: QueryPostsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPostsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPostsRequest {
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryPostsRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPostsRequest>, I>>(object: I): QueryPostsRequest {
    const message = createBaseQueryPostsRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryPostsResponse(): QueryPostsResponse {
  return { Post: [], pagination: undefined };
}

export const QueryPostsResponse = {
  encode(message: QueryPostsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.Post) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryPostsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryPostsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Post.push(Post.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryPostsResponse {
    return {
      Post: Array.isArray(object?.Post) ? object.Post.map((e: any) => Post.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryPostsResponse): unknown {
    const obj: any = {};
    if (message.Post) {
      obj.Post = message.Post.map((e) => e ? Post.toJSON(e) : undefined);
    } else {
      obj.Post = [];
    }
    message.pagination !== undefined
      && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryPostsResponse>, I>>(object: I): QueryPostsResponse {
    const message = createBaseQueryPostsResponse();
    message.Post = object.Post?.map((e) => Post.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryAccountListRequest(): QueryAccountListRequest {
  return {};
}

export const QueryAccountListRequest = {
  encode(_: QueryAccountListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryAccountListRequest {
    return {};
  },

  toJSON(_: QueryAccountListRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountListRequest>, I>>(_: I): QueryAccountListRequest {
    const message = createBaseQueryAccountListRequest();
    return message;
  },
};

function createBaseQueryAccountListResponse(): QueryAccountListResponse {
  return { creatorList: undefined };
}

export const QueryAccountListResponse = {
  encode(message: QueryAccountListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creatorList !== undefined) {
      AccountsList.encode(message.creatorList, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAccountListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAccountListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creatorList = AccountsList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAccountListResponse {
    return { creatorList: isSet(object.creatorList) ? AccountsList.fromJSON(object.creatorList) : undefined };
  },

  toJSON(message: QueryAccountListResponse): unknown {
    const obj: any = {};
    message.creatorList !== undefined
      && (obj.creatorList = message.creatorList ? AccountsList.toJSON(message.creatorList) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAccountListResponse>, I>>(object: I): QueryAccountListResponse {
    const message = createBaseQueryAccountListResponse();
    message.creatorList = (object.creatorList !== undefined && object.creatorList !== null)
      ? AccountsList.fromPartial(object.creatorList)
      : undefined;
    return message;
  },
};

function createBaseQueryFollowListRequest(): QueryFollowListRequest {
  return { address: "" };
}

export const QueryFollowListRequest = {
  encode(message: QueryFollowListRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFollowListRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFollowListRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFollowListRequest {
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryFollowListRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFollowListRequest>, I>>(object: I): QueryFollowListRequest {
    const message = createBaseQueryFollowListRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryFollowListResponse(): QueryFollowListResponse {
  return { followList: undefined };
}

export const QueryFollowListResponse = {
  encode(message: QueryFollowListResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.followList !== undefined) {
      FollowAddressList.encode(message.followList, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryFollowListResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryFollowListResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.followList = FollowAddressList.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFollowListResponse {
    return { followList: isSet(object.followList) ? FollowAddressList.fromJSON(object.followList) : undefined };
  },

  toJSON(message: QueryFollowListResponse): unknown {
    const obj: any = {};
    message.followList !== undefined
      && (obj.followList = message.followList ? FollowAddressList.toJSON(message.followList) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryFollowListResponse>, I>>(object: I): QueryFollowListResponse {
    const message = createBaseQueryFollowListResponse();
    message.followList = (object.followList !== undefined && object.followList !== null)
      ? FollowAddressList.fromPartial(object.followList)
      : undefined;
    return message;
  },
};

function createBaseQueryCommentsRequest(): QueryCommentsRequest {
  return { id: 0 };
}

export const QueryCommentsRequest = {
  encode(message: QueryCommentsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommentsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommentsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCommentsRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: QueryCommentsRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCommentsRequest>, I>>(object: I): QueryCommentsRequest {
    const message = createBaseQueryCommentsRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseQueryCommentsResponse(): QueryCommentsResponse {
  return { title: "", body: "" };
}

export const QueryCommentsResponse = {
  encode(message: QueryCommentsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.body !== "") {
      writer.uint32(18).string(message.body);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommentsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommentsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.body = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCommentsResponse {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      body: isSet(object.body) ? String(object.body) : "",
    };
  },

  toJSON(message: QueryCommentsResponse): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.body !== undefined && (obj.body = message.body);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCommentsResponse>, I>>(object: I): QueryCommentsResponse {
    const message = createBaseQueryCommentsResponse();
    message.title = object.title ?? "";
    message.body = object.body ?? "";
    return message;
  },
};

/** Query defines the gRPC querier service. */
export interface Query {
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** Queries a list of Posts items. */
  Posts(request: QueryPostsRequest): Promise<QueryPostsResponse>;
  /** Queries a list of AccountList items. */
  AccountList(request: QueryAccountListRequest): Promise<QueryAccountListResponse>;
  /** Queries a list of FollowList items. */
  FollowList(request: QueryFollowListRequest): Promise<QueryFollowListResponse>;
  /** Queries a list of Comments items. */
  Comments(request: QueryCommentsRequest): Promise<QueryCommentsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Params = this.Params.bind(this);
    this.Posts = this.Posts.bind(this);
    this.AccountList = this.AccountList.bind(this);
    this.FollowList = this.FollowList.bind(this);
    this.Comments = this.Comments.bind(this);
  }
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new _m0.Reader(data)));
  }

  Posts(request: QueryPostsRequest): Promise<QueryPostsResponse> {
    const data = QueryPostsRequest.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Query", "Posts", data);
    return promise.then((data) => QueryPostsResponse.decode(new _m0.Reader(data)));
  }

  AccountList(request: QueryAccountListRequest): Promise<QueryAccountListResponse> {
    const data = QueryAccountListRequest.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Query", "AccountList", data);
    return promise.then((data) => QueryAccountListResponse.decode(new _m0.Reader(data)));
  }

  FollowList(request: QueryFollowListRequest): Promise<QueryFollowListResponse> {
    const data = QueryFollowListRequest.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Query", "FollowList", data);
    return promise.then((data) => QueryFollowListResponse.decode(new _m0.Reader(data)));
  }

  Comments(request: QueryCommentsRequest): Promise<QueryCommentsResponse> {
    const data = QueryCommentsRequest.encode(request).finish();
    const promise = this.rpc.request("blog.blog.Query", "Comments", data);
    return promise.then((data) => QueryCommentsResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
