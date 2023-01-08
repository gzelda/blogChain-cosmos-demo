# blog
**blog** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

## Get started

```
ignite chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.



```

$ blogd q blog posts
Post: []
pagination:
  next_key: null
  total: "0"

$ blogd tx blog create-post foo bar --from alice
auth_info:
  fee:
    amount: []
    gas_limit: "200000"
    granter: ""
    payer: ""
  signer_infos: []
  tip: null
body:
  extension_options: []
  memo: ""
  messages:
  - '@type': /blog.blog.MsgCreatePost
    body: bar
    creator: blog14gyttyecr9ma3ar7ar4j5ns0ql03vknafp9ktn
    title: foo
  non_critical_extension_options: []
  timeout_height: "0"
signatures: []
confirm transaction before signing and broadcasting [y/N]: y
code: 0
codespace: ""
data: 12220A202F626C6F672E626C6F672E4D7367437265617465506F7374526573706F6E7365
events:
- attributes:
  - index: true
    key: ZmVl
    value: ""
  - index: true
    key: ZmVlX3BheWVy
    value: YmxvZzE0Z3l0dHllY3I5bWEzYXI3YXI0ajVuczBxbDAzdmtuYWZwOWt0bg==
  type: tx
- attributes:
  - index: true
    key: YWNjX3NlcQ==
    value: YmxvZzE0Z3l0dHllY3I5bWEzYXI3YXI0ajVuczBxbDAzdmtuYWZwOWt0bi8x
  type: tx
- attributes:
  - index: true
    key: c2lnbmF0dXJl
    value: ZUo0TCs1UDV0a0Z1bk96Vm5DREU4QW5rZ2Vmb0tYTEo1UXdHNDZTd1RKeHhnM0dBa2dkaldwZDUxRlBFTVhFY1VqUE81d2czRGxPL3prcm1ZVCtuQ1E9PQ==
  type: tx
- attributes:
  - index: true
    key: YWN0aW9u
    value: L2Jsb2cuYmxvZy5Nc2dDcmVhdGVQb3N0
  type: message
gas_used: "51374"
gas_wanted: "200000"
height: "121"
info: ""
logs:
- events:
  - attributes:
    - key: action
      value: /blog.blog.MsgCreatePost
    type: message
  log: ""
  msg_index: 0
raw_log: '[{"msg_index":0,"events":[{"type":"message","attributes":[{"key":"action","value":"/blog.blog.MsgCreatePost"}]}]}]'
timestamp: ""
tx: null
txhash: CF4F785B76397C832917FFFE2E5B852CC55322B26479B8A47C09DBD5D664C430

$ blogd q blog posts                            
Post:
- body: bar
  creator: blog14gyttyecr9ma3ar7ar4j5ns0ql03vknafp9ktn
  id: "0"
  title: foo
pagination:
  next_key: null
  total: "1"
```


### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Ignite CLI docs](https://docs.ignite.com).

### Web Frontend

Ignite CLI has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Ignite front-end development](https://github.com/ignite/web).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.ignite.com/username/blog@latest! | sudo bash
```
`username/blog` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Learn more

- [Ignite CLI](https://ignite.com/cli)
- [Tutorials](https://docs.ignite.com/guide)
- [Ignite CLI docs](https://docs.ignite.com)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/ignite)
