// Generated by Ignite ignite.com/cli

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient, DeliverTxResponse } from "@cosmjs/stargate";
import { EncodeObject, GeneratedType, OfflineSigner, Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { IgniteClient } from "../client"
import { MissingWalletError } from "../helpers"
import { Api } from "./rest";
import { MsgCreatePost } from "./types/blog/blog/tx";
import { MsgFollowCreator } from "./types/blog/blog/tx";


export { MsgCreatePost, MsgFollowCreator };

type sendMsgCreatePostParams = {
  value: MsgCreatePost,
  fee?: StdFee,
  memo?: string
};

type sendMsgFollowCreatorParams = {
  value: MsgFollowCreator,
  fee?: StdFee,
  memo?: string
};


type msgCreatePostParams = {
  value: MsgCreatePost,
};

type msgFollowCreatorParams = {
  value: MsgFollowCreator,
};


export const registry = new Registry(msgTypes);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
	prefix: string
	signer?: OfflineSigner
}

export const txClient = ({ signer, prefix, addr }: TxClientOptions = { addr: "http://localhost:26657", prefix: "cosmos" }) => {

  return {
		
		async sendMsgCreatePost({ value, fee, memo }: sendMsgCreatePostParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgCreatePost: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgCreatePost({ value: MsgCreatePost.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgCreatePost: Could not broadcast Tx: '+ e.message)
			}
		},
		
		async sendMsgFollowCreator({ value, fee, memo }: sendMsgFollowCreatorParams): Promise<DeliverTxResponse> {
			if (!signer) {
					throw new Error('TxClient:sendMsgFollowCreator: Unable to sign Tx. Signer is not present.')
			}
			try {			
				const { address } = (await signer.getAccounts())[0]; 
				const signingClient = await SigningStargateClient.connectWithSigner(addr,signer,{registry, prefix});
				let msg = this.msgFollowCreator({ value: MsgFollowCreator.fromPartial(value) })
				return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo)
			} catch (e: any) {
				throw new Error('TxClient:sendMsgFollowCreator: Could not broadcast Tx: '+ e.message)
			}
		},
		
		
		msgCreatePost({ value }: msgCreatePostParams): EncodeObject {
			try {
				return { typeUrl: "/blog.blog.MsgCreatePost", value: MsgCreatePost.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgCreatePost: Could not create message: ' + e.message)
			}
		},
		
		msgFollowCreator({ value }: msgFollowCreatorParams): EncodeObject {
			try {
				return { typeUrl: "/blog.blog.MsgFollowCreator", value: MsgFollowCreator.fromPartial( value ) }  
			} catch (e: any) {
				throw new Error('TxClient:MsgFollowCreator: Could not create message: ' + e.message)
			}
		},
		
	}
};

interface QueryClientOptions {
  addr: string
}

export const queryClient = ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseURL: addr });
};

class SDKModule {
	public query: ReturnType<typeof queryClient>;
	public tx: ReturnType<typeof txClient>;
	
	public registry: Array<[string, GeneratedType]> = [];

	constructor(client: IgniteClient) {		
	
		this.query = queryClient({ addr: client.env.apiURL });		
		this.updateTX(client);
		client.on('signer-changed',(signer) => {			
		 this.updateTX(client);
		})
	}
	updateTX(client: IgniteClient) {
    const methods = txClient({
        signer: client.signer,
        addr: client.env.rpcURL,
        prefix: client.env.prefix ?? "cosmos",
    })
	
    this.tx = methods;
    for (let m in methods) {
        this.tx[m] = methods[m].bind(this.tx);
    }
	}
};

const Module = (test: IgniteClient) => {
	return {
		module: {
			BlogBlog: new SDKModule(test)
		},
		registry: msgTypes
  }
}
export default Module;