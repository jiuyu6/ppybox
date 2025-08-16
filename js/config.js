// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: '胖胖鱼TV',
    url: 'https://www.898869.xyz',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
24	24	
const API_SITES = {
25		-
    dyttzy: {
26		-
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
27		-
        name: '电影天堂资源',
28		-
        detail: 'http://caiji.dyttzyapi.com', 
29		-
    },
30		-
    ruyi: {
31		-
        api: 'https://cj.rycjapi.com/api.php/provide/vod',
32		-
        name: '如意资源',
33		-
    },
34		-
    bfzy: {
35		-
        api: 'https://bfzyapi.com/api.php/provide/vod',
36		-
        name: '暴风资源',
37		-
    },
38		-
    tyyszy: {
39		-
        api: 'https://tyyszy.com/api.php/provide/vod',
40		-
        name: '天涯资源',
41		-
    },
42		-
    semaomi: {
43		-
        api: 'https://caiji.semaozy.net/inc/apijson_vod.php',
44		-
        name: 'se猫咪资源',
45		-
    },
46		-
    ffzy: {
47		-
        api: 'http://ffzy5.tv/api.php/provide/vod',
48		-
        name: '非凡影视',
49		-
        detail: 'http://ffzy5.tv', 
50		-
    },
51		-
    heimuer: {
52		-
        api: 'https://json.heimuer.xyz/api.php/provide/vod',
53		-
        name: '黑木耳',
54		-
        detail: 'https://heimuer.tv', 
55		-
    },
56		-
    suoni: {
57		-
        api: 'https://suoniapi.com/api.php/provide/vod',
58		-
        name: '索尼',
59		-
    },
60		-
    ok: {
61		-
        api: 'https://api.okzyw.net/api.php/provide/vod',
62		-
        name: 'iqiyi资源',
63		-
    },
64		-
    wolong: {
65		-
        api: 'https://wolongzyw.com/api.php/provide/vod',
66		-
        name: '卧龙资源',
67		-
    }, 
68		-
    hwba: {
69		-
        api: 'https://cjhwba.com/api.php/provide/vod',
70		-
        name: '华为吧资源',
71		-
    },
72		-
    jisu: {
73		-
        api: 'https://jszyapi.com/api.php/provide/vod',
74		-
        name: '极速资源',
75		-
        detail: 'https://jszyapi.com', 
76		-
    },
77		-
    dbzy: {
78		-
        api: 'https://dbzy.tv/api.php/provide/vod',
79		-
        name: '豆瓣资源',
80		-
    },
81		-
    mozhua: {
82		-
        api: 'https://mozhuazy.com/api.php/provide/vod',
83		-
        name: '魔爪资源',
84		-
    },
85		-
    mdzy: {
86		-
        api: 'https://www.mdzyapi.com/api.php/provide/vod',
87		-
        name: '魔都资源',
88		-
    },
89		-
    zuid: {
90		-
        api: 'https://api.zuidapi.com/api.php/provide/vod',
91		-
        name: '最大资源'
92		-
    },
93		-
    yinghua: {
94		-
        api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
95		-
        name: '樱花资源'
96		-
    },
97		-
    baidu: {
98		-
        api: 'https://api.apibdzy.com/api.php/provide/vod',
99		-
        name: '百度云资源'
100		-
    },
101		-
    wujin: {
102		-
        api: 'https://api.wujinapi.me/api.php/provide/vod',
103		-
        name: '无尽资源'
104		-
    },
105		-
    wwzy: {
106		-
        api: 'https://wwzy.tv/api.php/provide/vod',
107		-
        name: '旺旺短剧'
108		-
    },
109		-
    ikun: {
110		-
        api: 'https://ikunzyapi.com/api.php/provide/vod',
111		-
        name: 'iKun资源'
112		-
    },
113		-
    lzi: {
114		-
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
115		-
        name: '量子资源站'
116		-
    },
113		-
    yy: {
114		-
        api: 'https://cj.yayazy.net/api.php/provide/vod',
115		-
        name: '鸭鸭资源'
116		-
    },
117	25	
    testSource: {
118	26	
        api: 'https://www.example.com/api.php/provide/vod',
119	27	
        name: '空内容测试源',
120	28	
        adult: true
121		-
    },
29	+
    }
122	30	
};
123	31	

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
