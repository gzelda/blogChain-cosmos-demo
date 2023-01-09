import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCreatePost } from "./types/blog/blog/tx";
import { MsgFollowCreator } from "./types/blog/blog/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/blog.blog.MsgCreatePost", MsgCreatePost],
    ["/blog.blog.MsgFollowCreator", MsgFollowCreator],
    
];

export { msgTypes }