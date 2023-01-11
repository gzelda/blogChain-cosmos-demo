// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import BlogBlog from './blog.blog'
import BlogNameservice from './blog.nameservice'
import BlogNft from './blog.nft'


export default { 
  BlogBlog: load(BlogBlog, 'blog.blog'),
  BlogNameservice: load(BlogNameservice, 'blog.nameservice'),
  BlogNft: load(BlogNft, 'blog.nft'),
  
}


function load(mod, fullns) {
    return function init(store) {        
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: '+ fullns)
        }else{
            store.registerModule([fullns], mod)
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns+ '/init', null, {
                        root: true
                    })
                }
            })
        }
    }
}