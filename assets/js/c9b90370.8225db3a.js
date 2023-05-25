"use strict";(self.webpackChunkmy_documents=self.webpackChunkmy_documents||[]).push([[2626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),k=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=k(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=k(n),N=l,c=m["".concat(i,".").concat(N)]||m[N]||d[N]||r;return n?a.createElement(c,p(p({ref:t},u),{},{components:n})):a.createElement(c,p({ref:t},u))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=N;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:l,p[1]=o;for(var k=2;k<r;k++)p[k]=n[k];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},3916:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>k});var a=n(7462),l=(n(7294),n(3905));const r={},p="SQL\u4e2dExplain\u9700\u8981\u5173\u6ce8\u7684\u5173\u952e\u5b57",o={unversionedId:"Spring-Code/\u77e5\u8bc6\u70b9/SQL\u4e2dExplain\u9700\u8981\u5173\u6ce8\u7684\u5173\u952e\u5b57",id:"Spring-Code/\u77e5\u8bc6\u70b9/SQL\u4e2dExplain\u9700\u8981\u5173\u6ce8\u7684\u5173\u952e\u5b57",title:"SQL\u4e2dExplain\u9700\u8981\u5173\u6ce8\u7684\u5173\u952e\u5b57",description:"| \u5b57\u6bb5          | \u540d\u79f0          | \u542b\u4e49             |",source:"@site/docs/Spring-Code/\u77e5\u8bc6\u70b9/SQL\u4e2dExplain\u9700\u8981\u5173\u6ce8\u7684\u5173\u952e\u5b57.md",sourceDirName:"Spring-Code/\u77e5\u8bc6\u70b9",slug:"/Spring-Code/\u77e5\u8bc6\u70b9/SQL\u4e2dExplain\u9700\u8981\u5173\u6ce8\u7684\u5173\u952e\u5b57",permalink:"/my-documents/docs/Spring-Code/\u77e5\u8bc6\u70b9/SQL\u4e2dExplain\u9700\u8981\u5173\u6ce8\u7684\u5173\u952e\u5b57",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"BeanFactory \u548c FactoryBean \u7684\u533a\u522b",permalink:"/my-documents/docs/Spring-Code/\u77e5\u8bc6\u70b9/BeanFactory \u548c FactoryBean \u7684\u533a\u522b"},next:{title:"Tutorial Intro",permalink:"/my-documents/docs/document_backup/intro"}},i={},k=[{value:"id",id:"id",level:2},{value:"select_type",id:"select_type",level:2},{value:"table",id:"table",level:2},{value:"partitions",id:"partitions",level:2},{value:"type",id:"type",level:2},{value:"possible_keys",id:"possible_keys",level:2},{value:"key",id:"key",level:2},{value:"key_len",id:"key_len",level:2},{value:"ref",id:"ref",level:2},{value:"rows",id:"rows",level:2},{value:"filtered",id:"filtered",level:2},{value:"extra",id:"extra",level:2},{value:"\u901a\u8fc7docker\u90e8\u7f72mysql\u73af\u5883",id:"\u901a\u8fc7docker\u90e8\u7f72mysql\u73af\u5883",level:3}],u={toc:k},m="wrapper";function d(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"sql\u4e2dexplain\u9700\u8981\u5173\u6ce8\u7684\u5173\u952e\u5b57"},"SQL\u4e2dExplain\u9700\u8981\u5173\u6ce8\u7684\u5173\u952e\u5b57"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u542b\u4e49"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"select_id"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8be5\u8bed\u53e5\u7684\u552f\u4e00\u6807\u8bc6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"select_type"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u67e5\u8be2\u7c7b\u578b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"table_name"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8868\u540d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"possible_keys"),(0,l.kt)("td",{parentName:"tr",align:null},"possible_keys"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53ef\u80fd\u7684\u7d22\u5f15\u9009\u62e9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b9e\u9645\u9009\u62e9\u7684\u7d22\u5f15")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key_len"),(0,l.kt)("td",{parentName:"tr",align:null},"key_len"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7d22\u5f15\u7684\u957f\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ref"),(0,l.kt)("td",{parentName:"tr",align:null},"ref"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7d22\u5f15\u7684\u90a3\u4e00\u5217")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rows"),(0,l.kt)("td",{parentName:"tr",align:null},"rows"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4f30\u8ba1\u8981\u626b\u63cf\u7684\u884c\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filterd"),(0,l.kt)("td",{parentName:"tr",align:null},"filterd"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b26\u5408\u67e5\u8be2\u6761\u4ef6\u7684\u6570\u636e\u6240\u5360\u7684\u6bd4\u4f8b")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extra"),(0,l.kt)("td",{parentName:"tr",align:null},"extra"),(0,l.kt)("td",{parentName:"tr",align:null},"\u989d\u5916\u4fe1\u606f")))),(0,l.kt)("h2",{id:"id"},"id"),(0,l.kt)("p",null,"\u8be5\u8bed\u53e5\u7684\u552f\u4e00\u6807\u8bc6\u3002\u5982\u679cexplain\u7684\u7ed3\u679c\u5305\u62ec\u591a\u4e2aid\u503c,\u5219\u6570\u5b57\u8d8a\u5927\u8d8a\u5148\u6267\u884c;\u800c\u5bf9\u4e8e\u76f8\u540cid\u7684\u884c,\u5219\u8868\u793a\u4ece\u4e0a\u5f80\u4e0b\u4f9d\u6b21\u6267\u884c\u3002"),(0,l.kt)("h2",{id:"select_type"},"select_type"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u7c7b\u578b\u5982\u4e0b\u8868:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u5b57\u6bb5"),(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"simple"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7b80\u5355\u67e5\u8be2(\u672a\u4f7f\u7528union\u6216\u5b50\u67e5\u8be2)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"primary"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6700\u5916\u5c42\u7684\u67e5\u8be2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"union"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5728union\u4e2d\u7684\u7b2c\u4e8c\u4e2a\u548c\u968f\u540e\u7684select\u88ab\u6807\u8bb0\u4e3aunion.\u5982\u679cunion\u5457from\u7684\u53e5\u4e2d\u7684\u5b57\u67e5\u8be2\u5305\u542b,\u90a3\u4e48\u4ed6\u7684\u7b2c\u4e00\u4e2aselect\u4f1a\u88ab\u6807\u8bb0\u4e3aderived")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dependent union"),(0,l.kt)("td",{parentName:"tr",align:null},"union\u4e2d\u7684\u7b2c\u4e8c\u4e2a\u6216\u540e\u9762\u7684\u67e5\u8be2,\u4f9d\u8d56\u4e86\u5916\u9762\u7684\u67e5\u8be2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"union result"),(0,l.kt)("td",{parentName:"tr",align:null},"union\u7684\u7ed3\u679c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"subquery"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b50\u67e5\u8be2\u4e2d\u7684\u7b2c\u4e00\u4e2aselect")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dependent subquery"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b50\u67e5\u8be2\u4e2d\u7684\u7b2c\u4e00\u4e2aselect,\u4f9d\u8d56\u4e86\u5916\u9762\u7684\u67e5\u8be2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"derived"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7528\u6765\u8868\u793a\u5305\u542b\u5728from\u5b50\u53e5\u7684\u5b50\u67e5\u8be2\u4e2d\u7684select,MySql\u4f1a\u9012\u5f52\u6267\u884c\u5e76\u5c06\u7ed3\u679c\u653e\u5230\u4e00\u4e2a\u4e34\u65f6\u8868\u4e2d,\u6b64\u4e3a\u6d3e\u751f\u8868")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"dependent derived"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6d3e\u751f\u8868,\u4f9d\u8d56\u4e86\u5176\u4ed6\u8868")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"materialized"),(0,l.kt)("td",{parentName:"tr",align:null},"\u7269\u5316\u5b57\u67e5\u8be2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uncacheable subquery"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5b57\u67e5\u8be2,\u7ed3\u679c\u65e0\u6cd5\u7f13\u5b58,\u5fc5\u987b\u9488\u5bf9\u5916\u90e8\u67e5\u8be2\u7684\u6bcf\u4e00\u884c\u91cd\u65b0\u8bc4\u4f30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uncacheable union"),(0,l.kt)("td",{parentName:"tr",align:null},"union\u5c5e\u4e8eunchacheable subquery\u7684\u7b2c\u4e8c\u4e2a\u6216\u540e\u9762\u7684\u67e5\u8be2")))),(0,l.kt)("h2",{id:"table"},"table"),(0,l.kt)("p",null,"\u8868\u793a\u5f53\u524d\u8fd9\u4e00\u884c\u6b63\u5728\u8bbf\u95ee\u54ea\u5f20\u8868,\u5982\u679cSQL\u5b9a\u4e49\u4e86\u522b\u540d,\u5219\u5c55\u793a\u8868\u7684\u522b\u540d"),(0,l.kt)("h2",{id:"partitions"},"partitions"),(0,l.kt)("p",null,"\u5f53\u524d\u67e5\u8be2\u5339\u914d\u8bb0\u5f55\u7684\u5206\u533a\u3002\u5bf9\u4e8e\u672a\u5206\u533a\u7684\u8868,\u8fd4\u56denull"),(0,l.kt)("h2",{id:"type"},"type"),(0,l.kt)("p",null,"\u8fde\u63a5\u7c7b\u578b,\u6709\u5982\u4e0b\u51e0\u79cd\u53d6\u503c,\u6027\u80fd\u4ece\u597d\u5230\u574f\u6392\u5e8f \u5982\u4e0b: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"system: \u8be5\u8868\u53ea\u6709\u4e00\u884c(\u76f8\u5f53\u4e8e\u7cfb\u7edf\u8868),system\u662fconst\u7c7b\u578b\u7684\u7279\u4f8b"),(0,l.kt)("li",{parentName:"ul"},"const: \u9488\u5bf9\u4e3b\u952e\u6216\u552f\u4e00\u7d22\u5f15\u7684\u7b49\u503c\u67e5\u8be2\u626b\u63cf, \u6700\u591a\u53ea\u8fd4\u56de\u4e00\u884c\u6570\u636e. const \u67e5\u8be2\u901f\u5ea6\u975e\u5e38\u5feb, \u56e0\u4e3a\u5b83\u4ec5\u4ec5\u8bfb\u53d6\u4e00\u6b21\u5373\u53ef"),(0,l.kt)("li",{parentName:"ul"},"eq_ref: \u5f53\u4f7f\u7528\u4e86\u7d22\u5f15\u7684\u5168\u90e8\u7ec4\u6210\u90e8\u5206,\u5e76\u4e14\u7d22\u5f15\u662fPRIMARY KEY\u6216UNIQUE NOT NULL \u624d\u4f1a\u4f7f\u7528\u8be5\u7c7b\u578b,\u6027\u80fd\u4ec5\u6b21\u4e8esystem\u53caconst\u3002",(0,l.kt)("blockquote",{parentName:"li"}))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4f8b\u5b50:")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="\u591a\u8868\u5173\u8054\u67e5\u8be2,\u5355\u884c\u5339\u914d"',title:'"\u591a\u8868\u5173\u8054\u67e5\u8be2,\u5355\u884c\u5339\u914d"'},"SELECT * FROM ref_table,other_table\n  WHERE ref_table.key_column=other_table.column;\n"))),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="\u591a\u8868\u5173\u8054\u67e5\u8be2,\u8054\u5408\u7d22\u5f15,\u591a\u884c\u5339\u914d"',title:'"\u591a\u8868\u5173\u8054\u67e5\u8be2,\u8054\u5408\u7d22\u5f15,\u591a\u884c\u5339\u914d"'},"SELECT * FROM ref_table,other_table\n  WHERE ref_table.key_column_part1=other_table.column\n  AND ref_table.key_column_part2=1;\n# ref: \u5f53\u6ee1\u8db3\u7d22\u5f15\u7684\u6700\u5de6\u524d\u7f00\u89c4\u5219,\u6216\u8005\u7d22\u5f15\u4e0d\u662f\u4e3b\u952e\u4e5f\u4e0d\u662f\u552f\u4e00\u7d22\u5f15\u65f6\u624d\u4f1a\u53d1\u751f\u3002\n# \u5982\u679c\u4f7f\u7528\u7684\u7d22\u5f15\u53ea\u4f1a\u5339\u914d\u5230\u5c11\u91cf\u7684\u884c,\u6027\u80fd\u4e5f\u662f\u4e0d\u9519\u7684\u3002\n"))),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="\u6839\u636e\u7d22\u5f15(\u975e\u4e3b\u952e,\u975e\u552f\u4e00\u7d22\u5f15),\u5339\u914d\u5230\u591a\u884c"',title:'"\u6839\u636e\u7d22\u5f15(\u975e\u4e3b\u952e,\u975e\u552f\u4e00\u7d22\u5f15),\u5339\u914d\u5230\u591a\u884c"'},"SELECT * FROM ref_table WHERE key_column=expr;\n"))),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="\u591a\u8868\u5173\u8054\u67e5\u8be2,\u5355\u4e2a\u7d22\u5f15,\u591a\u884c\u5339\u914d"',title:'"\u591a\u8868\u5173\u8054\u67e5\u8be2,\u5355\u4e2a\u7d22\u5f15,\u591a\u884c\u5339\u914d"'},"  SELECT * FROM ref_table,other_table\n  WHERE ref_table.key_column=other_table.column;\n  ```\n"))),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="\u591a\u8868\u5173\u8054\u67e5\u8be2,\u8054\u5408\u7d22\u5f15,\u591a\u884c\u5339\u914d"',title:'"\u591a\u8868\u5173\u8054\u67e5\u8be2,\u8054\u5408\u7d22\u5f15,\u591a\u884c\u5339\u914d"'},"SELECT * FROM ref_table,other_table\n  WHERE ref_table.key_column_part1=other_table.column\n  AND ref_table.key_column_part2=1;\n"))),(0,l.kt)("admonition",{title:"TIPS",type:"tip"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"\u6700\u5de6\u524d\u7f00\u539f\u5219,\u6307\u7684\u662f\u7d22\u5f15\u6309\u7167\u6700\u5de6\u4f18\u5148\u7684\u65b9\u5f0f\u5339\u914d\u7d22\u5f15\u3002\u6bd4\u5982\u521b\u5efa\u4e86\u4e00\u4e2a\u7ec4\u5408\u7d22\u5f15(column1, column2, column3),\u90a3\u4e48\n\u5982\u679c\u67e5\u8be2\u6761\u4ef6\u662f:\nWHERE column1 = 1                   (\u53ef\u4ee5\u4f7f\u7528\u8be5\u7d22\u5f15)\nWHERE column1 = 1 AND column2 = 2   (\u53ef\u4ee5\u4f7f\u7528\u8be5\u7d22\u5f15)\nWHERE column1 = 1 AND column2 = 2 AND column3 = 3 (\u53ef\u4ee5\u4f7f\u7528\u8be5\u7d22\u5f15)\nWHERE column2 = 2                   (\u65e0\u6cd5\u5339\u914d\u8be5\u7d22\u5f15)\nWHERE column1 = 1 AND column3 = 3   (\u65e0\u6cd5\u5339\u914d\u8be5\u7d22\u5f15)\n"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"fulltext"),": \u5168\u6587\u7d22\u5f15")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"ref_or_null"),": \u8be5\u7c7b\u578b\u7c7b\u4f3c\u4e8eref,\u4f46\u662fMySQL\u4f1a\u989d\u5916\u641c\u7d22\u54ea\u4e9b\u884c\u5305\u542b\u4e86NULL\u3002\u8fd9\u79cd\u7c7b\u578b\u5e38\u89c1\u4e8e\u89e3\u6790\u5b50\u67e5\u8be2"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM ref_table\n  WHERE key_column=expr OR key_column IS NULL;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"index_merge"),": \u6b64\u7c7b\u578b\u8868\u793a\u4f7f\u7528\u4e86\u7d22\u5f15\u5408\u5e76\u4f18\u5316,\u8868\u793a\u4e00\u4e2a\u67e5\u8be2\u91cc\u9762\u7528\u5230\u4e86\u591a\u4e2a\u7d22\u5f15"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"unique_subquery"),": \u8be5\u7c7b\u578b\u548ceq_ref\u7c7b\u4f3c,\u4f46\u662f\u4f7f\u7528\u4e86IN\u67e5\u8be2,\u4e14\u5b50\u67e5\u8be2\u662f\u4e3b\u952e\u6216\u8005\u552f\u4e00\u7d22\u5f15\u3002\u4f8b\u5982: ")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"value IN (SELECT primary_key FROM single_table WHERE some_expr)\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"index_subquery"),": \u548cunique_subquery\u7c7b\u4f3c,\u53ea\u662f\u5b50\u67e5\u8be2\u4f7f\u7528\u7684\u662f\u975e\u552f\u4e00\u7d22\u5f15")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"value IN (SELECT key_column FROM single_table WHERE some_expr)\n"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"range"),": \u8303\u56f4\u626b\u63cf,\u8868\u793a\u68c0\u7d22\u4e86\u6307\u5b9a\u8303\u56f4\u7684\u884c,\u4e3b\u8981\u7528\u4e8e\u6709\u9650\u5236\u7684\u7d22\u5f15\u626b\u63cf\u3002\u6bd4\u8f83\u5e38\u89c1\u7684\u8303\u56f4\u626b\u63cf\u662f\u5e26\u6709BETWEEN\u5b50\u53e5\u6216WHERE\u5b50\u53e5\u91cc\u6709>\u3001>=\u3001<\u3001<=\u3001IS NULL\u3001<=>\u3001BETWEEN\u3001LIKE\u3001IN()\u7b49\u64cd\u4f5c\u7b26\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM tbl_name\n  WHERE key_column BETWEEN 10 and 20;\n"))),(0,l.kt)("blockquote",null,(0,l.kt)("pre",{parentName:"blockquote"},(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM tbl_name\n  WHERE key_column IN (10,20,30);\n"))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"index"),": \u5168\u7d22\u5f15\u626b\u63cf,\u548cALL\u7c7b\u4f3c,\u53ea\u4e0d\u8fc7index\u662f\u5168\u76d8\u626b\u63cf\u4e86\u7d22\u5f15\u7684\u6570\u636e\u3002\u5f53\u67e5\u8be2\u4ec5\u4f7f\u7528\u7d22\u5f15\u4e2d\u7684\u4e00\u90e8\u5206\u5217\u65f6,\u53ef\u4f7f\u7528\u6b64\u7c7b\u578b\u3002\u6709\u4e24\u79cd\u573a\u666f\u4f1a\u89e6\u53d1:\n\u5982\u679c\u7d22\u5f15\u662f\u67e5\u8be2\u7684\u8986\u76d6\u7d22\u5f15,\u5e76\u4e14\u7d22\u5f15\u67e5\u8be2\u7684\u6570\u636e\u5c31\u53ef\u4ee5\u6ee1\u8db3\u67e5\u8be2\u4e2d\u6240\u9700\u7684\u6240\u6709\u6570\u636e,\u5219\u53ea\u626b\u63cf\u7d22\u5f15\u6811\u3002\u6b64\u65f6,explain\u7684Extra \u5217\u7684\u7ed3\u679c\u662fUsing index\u3002index\u901a\u5e38\u6bd4ALL\u5feb,\u56e0\u4e3a\u7d22\u5f15\u7684\u5927\u5c0f\u901a\u5e38\u5c0f\u4e8e\u8868\u6570\u636e\u3002\n\u6309\u7d22\u5f15\u7684\u987a\u5e8f\u6765\u67e5\u627e\u6570\u636e\u884c,\u6267\u884c\u4e86\u5168\u8868\u626b\u63cf\u3002\u6b64\u65f6,explain\u7684Extra\u5217\u7684\u7ed3\u679c\u4e0d\u4f1a\u51fa\u73b0Uses index\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"ALL"),": \u5168\u8868\u626b\u63cf,\u6027\u80fd\u6700\u5dee\u3002")),(0,l.kt)("h2",{id:"possible_keys"},"possible_keys"),(0,l.kt)("p",null,"\u5c55\u793a\u5f53\u524d\u67e5\u8be2\u53ef\u4ee5\u4f7f\u7528\u54ea\u4e9b\u7d22\u5f15,\u8fd9\u4e00\u5217\u7684\u6570\u636e\u662f\u5728\u4f18\u5316\u8fc7\u7a0b\u7684\u65e9\u671f\u521b\u5efa\u7684,\u56e0\u6b64\u6709\u4e9b\u7d22\u5f15\u53ef\u80fd\u5bf9\u4e8e\u540e\u7eed\u4f18\u5316\u8fc7\u7a0b\u662f\u6ca1\u7528\u7684\u3002"),(0,l.kt)("h2",{id:"key"},"key"),(0,l.kt)("p",null,"\u8868\u793aMySQL\u5b9e\u9645\u9009\u62e9\u7684\u7d22\u5f15"),(0,l.kt)("h2",{id:"key_len"},"key_len"),(0,l.kt)("p",null,"\u7d22\u5f15\u4f7f\u7528\u7684\u5b57\u8282\u6570\u3002\u7531\u4e8e\u5b58\u50a8\u683c\u5f0f,\u5f53\u5b57\u6bb5\u5141\u8bb8\u4e3aNULL\u65f6,key_len\u6bd4\u4e0d\u5141\u8bb8\u4e3a\u7a7a\u65f6\u59271\u5b57\u8282\u3002"),(0,l.kt)("p",null,"key_len\u8ba1\u7b97\u516c\u5f0f\uff1a ",(0,l.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/gomysql/p/4004244.html"},"https://www.cnblogs.com/gomysql/p/4004244.html")),(0,l.kt)("admonition",{title:"\u8ba1\u7b97\u516c\u5f0f",type:"tip"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"key_len\u7684\u957f\u5ea6\u8ba1\u7b97\u516c\u5f0f\uff1a\ncharset = (character set\uff1autf8=3,gbk=2,latin1=1)\n\nvarchr(10)\u53d8\u957f\u5b57\u6bb5\u4e14\u5141\u8bb8NULL = 10 * charset+1(NULL)+2(\u53d8\u957f\u5b57\u6bb5)\nvarchr(10)\u53d8\u957f\u5b57\u6bb5\u4e14\u4e0d\u5141\u8bb8NULL = 10 * charset+2(\u53d8\u957f\u5b57\u6bb5)\n\nchar(10)\u56fa\u5b9a\u5b57\u6bb5\u4e14\u5141\u8bb8NULL = 10 * charset+1(NULL)\nchar(10)\u56fa\u5b9a\u5b57\u6bb5\u4e14\u4e0d\u5141\u8bb8NULL = 10 * charset\n"))),(0,l.kt)("h2",{id:"ref"},"ref"),(0,l.kt)("p",null,"\u8868\u793a\u5c06\u54ea\u4e2a\u5b57\u6bb5\u6216\u5e38\u91cf\u548ckey\u5217\u6240\u4f7f\u7528\u7684\u5b57\u6bb5\u8fdb\u884c\u6bd4\u8f83\u3002"),(0,l.kt)("p",null,"\u5982\u679cref\u662f\u4e00\u4e2a\u51fd\u6570,\u5219\u4f7f\u7528\u7684\u503c\u662f\u51fd\u6570\u7684\u7ed3\u679c\u3002\u8981\u60f3\u67e5\u770b\u662f\u54ea\u4e2a\u51fd\u6570,\u53ef\u5728EXPLAIN\u8bed\u53e5\u4e4b\u540e\u7d27\u8ddf\u4e00\u4e2aSHOW WARNING\u8bed\u53e5\u3002"),(0,l.kt)("h2",{id:"rows"},"rows"),(0,l.kt)("p",null,"MySQL\u4f30\u7b97\u4f1a\u626b\u63cf\u7684\u884c\u6570,\u6570\u503c\u8d8a\u5c0f\u8d8a\u597d\u3002"),(0,l.kt)("h2",{id:"filtered"},"filtered"),(0,l.kt)("p",null,"\u8868\u793a\u7b26\u5408\u67e5\u8be2\u6761\u4ef6\u7684\u6570\u636e\u767e\u5206\u6bd4,\u6700\u5927100\u3002\u7528rows \xd7 filtered\u53ef\u83b7\u5f97\u548c\u4e0b\u4e00\u5f20\u8868\u8fde\u63a5\u7684\u884c\u6570\u3002\u4f8b\u5982rows = 1000,filtered = 50%,\u5219\u548c\u4e0b\u4e00\u5f20\u8868\u8fde\u63a5\u7684\u884c\u6570\u662f500\u3002"),(0,l.kt)("admonition",{title:"TIPS",type:"tip"},(0,l.kt)("pre",{parentName:"admonition"},(0,l.kt)("code",{parentName:"pre"},"\u5728MySQL 5.7\u4e4b\u524d,\u60f3\u8981\u663e\u793a\u6b64\u5b57\u6bb5\u9700\u4f7f\u7528explain extended\u547d\u4ee4;\nMySQL.5.7\u53ca\u66f4\u9ad8\u7248\u672c,explain\u9ed8\u8ba4\u5c31\u4f1a\u5c55\u793afiltered\n"))),(0,l.kt)("h2",{id:"extra"},"extra"),(0,l.kt)("p",null,"\u5e38\u7528\u89c1\u7684\u51e0\u79cd\u72b6\u6001\u3002"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"Using filesort"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u8fd9\u79cd\u60c5\u51b5\u662f\u5728\u4f7f\u7528 order by \u5173\u952e\u5b57\u7684\u65f6\u5019,\u5982\u679c\u5f85\u6392\u5e8f\u7684\u5185\u5bb9\u65e0\u6cd5\u901a\u8fc7\u7d22\u5f15\u76f4\u63a5\u76f4\u63a5\u8fdb\u884c\u6392\u5e8f,mysql\u5c31\u6709\u53ef\u80fd\u8fdb\u884c\u6587\u4ef6\u6392\u5e8f\u3002\n\u5f53\u7136\u4e0d\u662f\u8bf4\u51fa\u73b0\u4e86\u6b64\u60c5\u51b5\u5c31\u4f1a\u5bf9sql\u8bed\u53e5\u7684\u6548\u7387\u9020\u6210\u5f71\u54cd\u3002\u4f46\u662f\u7531\u4e8e\u67e5\u8be2\u6b21\u6570\u8fc7\u591a\u7684\u8bdd,\u5bf9\u4e8e\u6392\u5e8f\u7684\u6548\u7387\u8fd8\u662f\u6709\u4e00\u5b9a\u7684\u5f71\u54cd\u7684\u3002\n\u53ef\u4ee5\u901a\u8fc7\u8bbe\u7f6e max_length_for_sort_data \u6765 \u63d0\u9ad8 order by \u7684\u6548\u7387\u3002\u5982\u679c\u64cd\u4f5c\u7684\u6570\u636e\u5927\u5c0f\u9ad8\u4e8emax_length_for_sort_data \u7684\u7f13\u5b58\u5927\u5c0f\u65f6,mysql\u4f1a\u4ea7\u751f\u4e34\u65f6\u8868\u8fdb\u884c\u67e5\u8be2,\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u4f1a\u5370\u8c61\u6548\u7387\u3002 max_length_for_sort_data\u7684\u9ed8\u8ba4\u503c\u662f1024\u3002")))),(0,l.kt)("admonition",{title:"\u4f18\u5316\u65b9\u6848",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u4f18\u5316\u4e1a\u52a1\u903b\u8f91,\u4e0d\u4f7f\u7528 order by ,\u800c\u5728\u4e1a\u52a1\u4ee3\u7801\u4e2d\u6267\u884c\u6392\u5e8f\u65b9\u6cd5\n\u8bbe\u7f6e\u7d22\u5f15,\u5c06\u5e26\u6392\u5e8f\u7684\u5185\u5bb9\u653e\u5728\u7d22\u5f15\u4e2d,\u76f4\u63a5\u5229\u7528\u7d22\u5f15\u8fdb\u884c\u6392\u5e8f")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Using index")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u4f7f\u7528\u7d22\u5f15,\u8868\u793a\u7d22\u5f15\u80fd\u591f\u8986\u76d6\u6240\u6709\u7684\u67e5\u8be2\u5b57\u6bb5,\u65e0\u9700\u8fdb\u884c\u56de\u8868\u67e5\u8be2\u6240\u4ee5\u6548\u7387\u4f1a\u9ad8\u3002\u5927\u90e8\u5206\u60c5\u51b5\u4ee3\u8868\u6700\u4f18"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Using where")," \u5355\u72ec\u51fa\u73b0"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u8868\u793a\u5f53\u524d\u67e5\u8be2\u7684\u5b57\u6bb5\u4e0d\u80fd\u88ab\u7d22\u5f15\u8986\u76d6,\u6240\u4ee5\u53ef\u80fd\u4f1a\u4ea7\u751f\u56de\u8868,\u6548\u7387\u6bd4\u524d\u8005\u4f4e"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Using where;Using index")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u8868\u793a\u67e5\u8be2\u7684\u5217\u88ab\u7d22\u5f15\u8986\u76d6,\u4e14where\u7b5b\u9009\u6761\u4ef6\u662f\u7d22\u5f15\u5217\u524d\u5bfc\u5217\u7684\u4e00\u4e2a\u8303\u56f4,\u6216\u8005\u662f\u7d22\u5f15\u5217\u7684\u975e\u524d\u5bfc\u5217\u3002 \u6548\u7387\u4e5f\u6bd4\u8f83\u9ad8"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Null")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u8868\u793a\u67e5\u8be2\u7684\u5217\u672a\u88ab\u7d22\u5f15\u8986\u76d6,\u4e14where\u7b5b\u9009\u6761\u4ef6\u662f\u7d22\u5f15\u7684\u524d\u5bfc\u5217,\u8fd9\u610f\u5473\u7740\u7528\u5230\u4e86\u7d22\u5f15,\u4f46\u662f\u90e8\u5206\u5b57\u6bb5\u672a\u88ab\u7d22\u5f15\u8986\u76d6,\u5fc5\u987b\u901a\u8fc7\u201c\u56de\u8868\u67e5\u8be2\u201d\u6765\u5b9e\u73b0,\u56e0\u800c\u6027\u80fd\u4e5f\u6bd4\u524d\u4e24\u8005\u5dee\u3002"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Using index condition")),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u8868\u793a\u67e5\u8be2\u6761\u4ef6\u4e2d\u867d\u7136\u51fa\u73b0\u4e86\u7d22\u5f15\u5217,\u4f46\u662f\u6709\u90e8\u5206\u6761\u4ef6\u65e0\u6cd5\u4f7f\u7528\u7d22\u5f15,\u4f1a\u6839\u636e\u80fd\u7528\u7d22\u5f15\u7684\u6761\u4ef6\u5148\u641c\u7d22\u4e00\u904d\u518d\u5339\u914d\u65e0\u6cd5\u4f7f\u7528\u7d22\u5f15\u7684\u6761\u4ef6\u3002 ")))),(0,l.kt)("h3",{id:"\u901a\u8fc7docker\u90e8\u7f72mysql\u73af\u5883"},"\u901a\u8fc7docker\u90e8\u7f72mysql\u73af\u5883"))}d.isMDXComponent=!0}}]);