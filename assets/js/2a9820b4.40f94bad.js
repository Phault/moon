"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64623],{16196:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var t=o(24246),s=o(71670);const i={slug:"proto-v0.24",title:"proto v0.24 - Standardized configuration and 10x WASM boost",authors:["milesj"],tags:["proto","config","tools"],image:"./img/proto/v0.24.png"},r=void 0,a={permalink:"/blog/proto-v0.24",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-12-07_proto-v0.24.mdx",source:"@site/blog/2023-12-07_proto-v0.24.mdx",title:"proto v0.24 - Standardized configuration and 10x WASM boost",description:"In this release, we've standardized our configuration from the ground-up.",date:"2023-12-07T00:00:00.000Z",formattedDate:"December 7, 2023",tags:[{label:"proto",permalink:"/blog/tags/proto"},{label:"config",permalink:"/blog/tags/config"},{label:"tools",permalink:"/blog/tags/tools"}],readingTime:3.8,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"/img/authors/miles.jpg",key:"milesj"}],frontMatter:{slug:"proto-v0.24",title:"proto v0.24 - Standardized configuration and 10x WASM boost",authors:["milesj"],tags:["proto","config","tools"],image:"./img/proto/v0.24.png"},unlisted:!1,prevItem:{title:"proto v0.25 - Linux arm64 gnu and musl support",permalink:"/blog/proto-v0.25"},nextItem:{title:"moon v1.17 - Full Bun support, TypeScript improvements, and more!",permalink:"/blog/moon-v1.17"}},l={image:o(11616).Z,authorsImageUrls:[void 0]},d=[{value:"Improved WASM performance up to 20x",id:"improved-wasm-performance-up-to-20x",level:2},{value:"Standardized configuration (breaking)",id:"standardized-configuration-breaking",level:2},{value:"Tool-level settings",id:"tool-level-settings",level:3},{value:"Moved aliases and default versions (breaking)",id:"moved-aliases-and-default-versions-breaking",level:2},{value:"Other changes",id:"other-changes",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"In this release, we've standardized our configuration from the ground-up."}),"\n",(0,t.jsx)(n.h2,{id:"improved-wasm-performance-up-to-20x",children:"Improved WASM performance up to 20x"}),"\n",(0,t.jsxs)(n.p,{children:["Before we dive into the major changes of this release, we want to highlight the performance\nimprovements that have landed recently. Thanks to ",(0,t.jsx)(n.a,{href:"https://dylibso.com/",children:"Dylibso"})," and the\n",(0,t.jsx)(n.a,{href:"https://extism.org/",children:"Extism"})," team, we've been able to improve the performance of our WASM plugins\nby 10-20x! This was achieved by plugging into wasmtime's ahead-of-time (AOT) compiler and caching\nlayer."]}),"\n",(0,t.jsxs)(n.p,{children:["Here's an example of the performance improvements when running ",(0,t.jsx)(n.code,{children:"node --version"}),". On older versions,\nthe execution time was anywhere from 100ms-200ms, but is now down to 10-20ms! This is almost as fast\nas native's 5-10ms!"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"# proto v0.23.5 and below\nhyperfine --warmup 10 -- 'node --version'\nBenchmark 1: node --version\n  Time (mean \xb1 \u03c3):      99.2 ms \xb1   6.3 ms    [User: 662.5 ms, System: 79.4 ms]\n  Range (min \u2026 max):    91.3 ms \u2026 119.7 ms    29 runs\n\n# proto v0.23.6 and above\nhyperfine --warmup 10 -- 'node --version'\nBenchmark 1: node --version\n  Time (mean \xb1 \u03c3):      18.5 ms \xb1   1.0 ms    [User: 7.9 ms, System: 12.7 ms]\n  Range (min \u2026 max):    17.1 ms \u2026  23.8 ms    146 runs\n"})}),"\n",(0,t.jsx)(n.admonition,{type:"success",children:(0,t.jsxs)(n.p,{children:["Dylibso is hosting an ",(0,t.jsx)(n.a,{href:"https://dylibso.com/events/2023/hack-for-good/",children:"Extism hackathon"})," through the\nmonth of December, that'll donate to children in need. Check it out and participate!"]})}),"\n",(0,t.jsx)(n.h2,{id:"standardized-configuration-breaking",children:"Standardized configuration (breaking)"}),"\n",(0,t.jsxs)(n.p,{children:["Up until now, proto has supported 2 types of configuration, ",(0,t.jsx)(n.code,{children:".prototools"})," and\n",(0,t.jsx)(n.code,{children:"~/.proto/config.toml"}),". The former can exist in any folder, and is used for pinning versions and\ndefining plugins. The latter is a per-user file that is used for customizing how proto works and\nalso defining plugins."]}),"\n",(0,t.jsxs)(n.p,{children:["Over time, functionality in both of these files has grown, and so has the overlap between them. We\nfelt it was time to standardize these files into a single configuration file, and as such, have\nremoved ",(0,t.jsx)(n.code,{children:"~/.proto/config.toml"})," and merged its functionality into\n",(0,t.jsx)(n.a,{href:"/docs/proto/config",children:(0,t.jsx)(n.code,{children:".prototools"})}),". The biggest changes are:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["proto settings (like ",(0,t.jsx)(n.code,{children:"auto-clean"})," and ",(0,t.jsx)(n.code,{children:"http"}),") must now exist within a\n",(0,t.jsxs)(n.a,{href:"/docs/proto/config#settings",children:[(0,t.jsx)(n.code,{children:"[settings]"})," table"]}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Tool specific settings (like ",(0,t.jsx)(n.code,{children:"node-intercept-globals"}),") have moved to the new\n",(0,t.jsxs)(n.a,{href:"/docs/proto/config#tools",children:[(0,t.jsx)(n.code,{children:"[tools.node]"})," table"]})," (",(0,t.jsx)(n.a,{href:"#tool-level-settings",children:"more info below"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:["Plugins are still configured within a ",(0,t.jsxs)(n.a,{href:"/docs/proto/config#plugins",children:[(0,t.jsx)(n.code,{children:"[plugins]"})," table"]}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Global/default settings can be defined in ",(0,t.jsx)(n.code,{children:"~/.proto/.prototools"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title=".prototools"',children:'node = "20.0.0"\n\n[settings]\nauto-clean = true\n\n[settings.http]\nallow-invalid-certs = true\n'})}),"\n",(0,t.jsxs)(n.p,{children:["The other massive benefit of this change, is that settings ",(0,t.jsx)(n.em,{children:"can now be defined anywhere"}),"!\nPreviously, settings like ",(0,t.jsx)(n.code,{children:"auto-clean"})," or ",(0,t.jsx)(n.code,{children:"detect-strategy"})," could only be defined at the user-level,\nbut what if your company or team wanted to control this setting? It wasn't possible without asking\nall team members to update their configuration manually. With this change, settings can now be tied\nto projects or repositories!"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["After upgrading, run ",(0,t.jsx)(n.code,{children:"proto migrate v0.24"})," to migrate the old user configuration to the new format!"]})}),"\n",(0,t.jsx)(n.h3,{id:"tool-level-settings",children:"Tool-level settings"}),"\n",(0,t.jsxs)(n.p,{children:["While working on these configuration changes, we also landed the\n",(0,t.jsx)(n.a,{href:"https://github.com/moonrepo/proto/issues/261",children:"Tool-level configuration RFC"}),", although with a\ndifferent implementation. This enables users to define settings that will be passed to the WASM\nplugin of a specific tool, controlling how it works. These settings can be configured with the new\n",(0,t.jsxs)(n.a,{href:"/docs/proto/config#tools",children:[(0,t.jsx)(n.code,{children:"[tools.<name>]"})," table"]}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["For example, the ",(0,t.jsx)(n.code,{children:"node"})," tool has a setting called ",(0,t.jsx)(n.code,{children:"intercept-globals"}),", which will trigger an error\nwhen npm/pnpm/yarn attempt to install a global package."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title=".prototools"',children:"[tools.go]\ngobin = false\n\n[tools.node]\nintercept-globals = false\n"})}),"\n",(0,t.jsxs)(n.p,{children:["As of now, only the ",(0,t.jsx)(n.a,{href:"https://github.com/moonrepo/node-plugin",children:"Node.js"})," and\n",(0,t.jsx)(n.a,{href:"https://github.com/moonrepo/go-plugin",children:"Go"})," plugins support settings."]}),"\n",(0,t.jsx)(n.h2,{id:"moved-aliases-and-default-versions-breaking",children:"Moved aliases and default versions (breaking)"}),"\n",(0,t.jsxs)(n.p,{children:["To continue with these configuration changes, we've also moved aliases and the default version into\nthis new configuration. Previously, both of these values were stored in\n",(0,t.jsx)(n.code,{children:"~/.proto/tools/<name>/manifest.json"}),", but the problem was, that this file is internally managed by\nproto, and should not be modified by users. This made it difficult for users to manage, and to\npersist these values across machines (think dotfile syncing)."]}),"\n",(0,t.jsxs)(n.p,{children:["Now these values are stored in ",(0,t.jsx)(n.a,{href:"/docs/proto/config",children:(0,t.jsx)(n.code,{children:".prototools"})}),", with aliases being configured in\n",(0,t.jsx)(n.a,{href:"/docs/proto/config#toolsaliases",children:(0,t.jsx)(n.code,{children:"[tools.<name>.aliases]"})}),", and the default version (global) being\npinned as a version in ",(0,t.jsx)(n.code,{children:"~/.proto/.prototools"}),". Here's an example:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-toml",metastring:'title="~/.proto/.prototools"',children:'node = "20.0.0"\n\n[tools.node.aliases]\nwork = "18"\n'})}),"\n",(0,t.jsx)(n.p,{children:"This change also enables aliases to be defined anywhere! Previously, aliases were only allowed to be\ndefined globally for a user, but now they can be defined per-project, or even per-directory."}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["After upgrading, run ",(0,t.jsx)(n.code,{children:"proto migrate v0.24"})," to migrate your aliases and default versions to the new\nconfiguration format!"]})}),"\n",(0,t.jsx)(n.h2,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsxs)(n.p,{children:["View the ",(0,t.jsx)(n.a,{href:"https://github.com/moonrepo/proto/releases/tag/v0.24.0",children:"official release"})," for a full list\nof changes."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["proto now supports ",(0,t.jsx)(n.a,{href:"/docs/proto/install#canary-releases",children:"canary"})," and\n",(0,t.jsx)(n.a,{href:"/docs/proto/install#nightly-releases",children:"nightly"})," releases."]}),"\n",(0,t.jsx)(n.li,{children:"Updated non-latest plugins to be cached for 30 days, instead of forever."}),"\n",(0,t.jsx)(n.li,{children:"Fixed an issue where resolving canary versions wouldn't work correctly."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},11616:(e,n,o)=>{o.d(n,{Z:()=>t});const t=o.p+"assets/images/v0.24-f580216f194ecee2723e659db2f6fac4.png"},71670:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>r});var t=o(27378);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);