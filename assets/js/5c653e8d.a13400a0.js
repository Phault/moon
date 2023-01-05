"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6256],{5318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(5773),o=(n(7378),n(5318));const r={slug:"2023-roadmap",title:"What's in store for 2023",authors:["milesj"],tags:["roadmap","moonbase","proto","toolchain"]},i=void 0,l={permalink:"/blog/2023-roadmap",editUrl:"https://github.com/moonrepo/moon/tree/master/website/blog/2023-01-04_2023-roadmap.mdx",source:"@site/blog/2023-01-04_2023-roadmap.mdx",title:"What's in store for 2023",description:"Happy new year! Let's start 2023 by reflecting on last year and diving into our tentative year long",date:"2023-01-04T00:00:00.000Z",formattedDate:"January 4, 2023",tags:[{label:"roadmap",permalink:"/blog/tags/roadmap"},{label:"moonbase",permalink:"/blog/tags/moonbase"},{label:"proto",permalink:"/blog/tags/proto"},{label:"toolchain",permalink:"/blog/tags/toolchain"}],readingTime:4.535,hasTruncateMarker:!0,authors:[{name:"Miles Johnson",title:"Founder, developer",url:"https://github.com/milesj",imageURL:"https://pbs.twimg.com/profile_images/1532262885648281601/TQbEOiNd_400x400.jpg",key:"milesj"}],frontMatter:{slug:"2023-roadmap",title:"What's in store for 2023",authors:["milesj"],tags:["roadmap","moonbase","proto","toolchain"]},nextItem:{title:"moon v0.21 - Tiered language support with initial Go, PHP, Python, Ruby, and Rust",permalink:"/blog/v0.21"}},s={authorsImageUrls:[void 0]},p=[{value:"Year 2022 in review",id:"year-2022-in-review",level:2},{value:"Launching moonbase",id:"launching-moonbase",level:2},{value:"Launching proto",id:"launching-proto",level:2},{value:"Expanding language support",id:"expanding-language-support",level:2},{value:"Initial release workflow support",id:"initial-release-workflow-support",level:2}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Happy new year! Let's start 2023 by reflecting on last year and diving into our tentative year long\nroadmap."),(0,o.kt)("h2",{id:"year-2022-in-review"},"Year 2022 in review"),(0,o.kt)("p",null,"The original concept and\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/commit/62267e3ccda7a45c2e9355fcbddba577ae54403d"},"first commit of moon"),"\n(codenamed monolith) landed October 23rd, 2021. Eight months later, we\n",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/tothemoonrepo/status/1527467865200136192"},"launched an alpha of moon")," to the\npublic on May 19th, 2022. Since then, we've landed 21 amazing releases based on feedback from the\ncommunity and our long-term vision, with some such features as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Linux musl, macOS silicon, and ARM support"),(0,o.kt)("li",{parentName:"ul"},"Full Node.js/JavaScript ecosystem support"),(0,o.kt)("li",{parentName:"ul"},"End-to-end caching and hashing of build artifacts"),(0,o.kt)("li",{parentName:"ul"},"Streamlined configuration"),(0,o.kt)("li",{parentName:"ul"},"Improved developer experience"),(0,o.kt)("li",{parentName:"ul"},"Massive performance improvements"),(0,o.kt)("li",{parentName:"ul"},"Automatic cache cleaning"),(0,o.kt)("li",{parentName:"ul"},"Code generation / scaffolding"),(0,o.kt)("li",{parentName:"ul"},"Dockerfile integration"),(0,o.kt)("li",{parentName:"ul"},"Remote caching"),(0,o.kt)("li",{parentName:"ul"},"New langauage agnostic toolchain"),(0,o.kt)("li",{parentName:"ul"},"Onboarding of 5 new languages: Rust, Go, PHP, Python, Ruby"),(0,o.kt)("li",{parentName:"ul"},"Rewritten project and dependency graphs"),(0,o.kt)("li",{parentName:"ul"},"Project-level toolchain overrides"),(0,o.kt)("li",{parentName:"ul"},"Project specific caching"),(0,o.kt)("li",{parentName:"ul"},"VSCode extension"),(0,o.kt)("li",{parentName:"ul"},"2 GitHub actions"),(0,o.kt)("li",{parentName:"ul"},"...and so much more!")),(0,o.kt)("p",null,"We're very proud with the quality and amount of features we've released in a 7 month timeframe. On\ntop of this, our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/moonrepo/moon/stargazers"},"GitHub stars")," have steadily passed\nthe 1k mark, ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@moonrepo/cli"},"npm")," downloads are 500 a week and\ngrowing, and our ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/tothemoonrepo"},"Twitter")," isn't doing too bad. This is only the\nstart, and we're not planning to go anywhere!"),(0,o.kt)("h2",{id:"launching-moonbase"},"Launching moonbase"),(0,o.kt)("p",null,"We haven't mentioned this name publicly yet, but now seems like the perfect time! For the past 6\nmonths we've been working a new web application and service called moonbase, which pairs nicely with\nmoon, as it provides additional functionality that can only be achieved by persisting information\nacross runs."),(0,o.kt)("p",null,"To start, this service provides ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/remote-cache"},"remote caching"),", which we're already\nusing in production. At this point in time, objects are stored in our moonrepo S3 buckets, but one\nof our major goals is to support storing objects in your private buckets, supporting additional\ncloud providers like Google Cloud and Azure, and in the long-term, a self-hosted / on-premises\nsolution."),(0,o.kt)("p",null,"But that's not all! moonbase will integrate deeply with ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/ci"},"continuous integration"),"\npipelines to generate insights, capture metrics, and provide near real-time dashboards. Our goal is\nto provide a holistic overview of your entire repository."),(0,o.kt)("p",null,"moonbase with publicly available remote caching is slated for end of Q1. CI integration is\ntentatively slated for Q2. We have even more features that we'll reveal in the future, so stay\ntuned!"),(0,o.kt)("h2",{id:"launching-proto"},"Launching proto"),(0,o.kt)("p",null,"Another tool we haven't mentioned yet is proto (name still in flux). proto is a standardized version\nmanager for programming languages and dependency managers. We've basically extracted our\n",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/toolchain"},"toolchain")," into a standalone library, as it's super beneficial for\nprojects and developers not using moon. It provides all the functionality you'd expect from a\nversion manager:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Downloading and installing specific versions"),(0,o.kt)("li",{parentName:"ul"},"Automatic version detection"),(0,o.kt)("li",{parentName:"ul"},"Updating PATH with the applicable version"),(0,o.kt)("li",{parentName:"ul"},"Generating shims"),(0,o.kt)("li",{parentName:"ul"},"Pinning shell, local, and global versions")),(0,o.kt)("p",null,"So how's this different from existing version managers like nvm or volta? To start, it's written in\nRust so it's ",(0,o.kt)("em",{parentName:"p"},"fast")," and doesn't suffer from being Bash only. Because of this, it's also\nmulti-platform and will work on Windows. But the biggest different is that proto is language\nagnostic and will support multiple languages. To start, it supports Node.js and Deno, but will be\nexpanded to support our other toolchain languages like Bun, PHP, Ruby, and Python. Another cool\nfeature is that it also manages versions of dependency managers like npm, yarn, and pnpm!"),(0,o.kt)("p",null,"We're planning to launch proto at the start of Q2."),(0,o.kt)("h2",{id:"expanding-language-support"},"Expanding language support"),(0,o.kt)("p",null,"Our initial goal for moon was to provide a first-class build system for the frontend ecosystem that\nfocused heavily on automation and the developer experience. We believe we've accomplished this goal,\nbut of course, nothing is ever actually complete, and so JavaScript, TypeScript, and Node.js support\nwill continually be improved."),(0,o.kt)("p",null,"However, that's not the entirety of the frontend ecosystem, as ",(0,o.kt)("a",{parentName:"p",href:"https://deno.land/"},"Deno")," and\n",(0,o.kt)("a",{parentName:"p",href:"https://bun.sh/"},"Bun")," have been gaining traction this past year, and of course, moon will support\nboth of them as first-class platforms by end of year."),(0,o.kt)("p",null,"Futhermore, we recently landed Tier 1 support for 5 new languages: Rust, Ruby, PHP, Python, and Go.\nOur end of year goal for these languages is to provide full Tier 2 support. Tier 3 support is still\nan unknown, as we need to investigate the best possible way to integrate these languages into the\ntoolchain (this work is ongoing)."),(0,o.kt)("p",null,"With all that being said, this is our tenative timeline around\n",(0,o.kt)("a",{parentName:"p",href:"/docs#supported-languages"},"language support")," (which may shift at any time):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Q1"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Tier 1 support for Bun."),(0,o.kt)("li",{parentName:"ul"},"Tier 2 support for Deno."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Q2"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Tier 2 support for Bun, PHP."),(0,o.kt)("li",{parentName:"ul"},"Tier 3 support for Deno."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Q3"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Tier 2 support for Ruby, Python."),(0,o.kt)("li",{parentName:"ul"},"Tier 3 support for Bun."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Q4"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Tier 2 support for Rust, Go.")))),(0,o.kt)("h2",{id:"initial-release-workflow-support"},"Initial release workflow support"),(0,o.kt)("p",null,"moon currently excels at organizing projects, running tasks, and building artifacts, but it has no\nsupport for release workflows. This is everything from capturing changes, bumping versions,\ngenerating changelogs, and publishing to upstream registries. If you use\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lerna/lerna"},"Lerna")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/changesets/changesets"},"changesets"),",\nyou should be very familiar with this workflow."),(0,o.kt)("p",null,"Since moon supports monorepos and has in-depth knowledge of the project graph, we can support\nrelease workflows with ease. Our goal is to support this workflow (for all languages) from start to\nfinish by end of year, ideally much sooner than that!"))}m.isMDXComponent=!0}}]);