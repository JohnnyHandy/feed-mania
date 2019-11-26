//METHODS 
//0 = TITLE AND CONTENTSNIPPET
//1 = TITLE AND SUMMARY
//2 = TITLE AND CONTENT
//3 = TITLE AND CONTENT WITH HTML
//4 = TITLE AND CONTENT:ENCODED
//5 = TITLE AND CONTENT_HTML
//6 = TITLE CONTENT SNIPPET, CONTENT WITH HTML AND CONTENT ENCODED
//7 = TITLE CONTENT SNIPPET CONTENT WITH HTML
//8 = TITLE CONTENT SNIPPET CONTENT:ENCODED WITH HTML
//9 = TITLE CONTENT SNIPPET CONTENT:ENCONDED WITH HTML AND CONTENT WITH HTML
//10 = TITLE SUMMARY AND CONTENT HTML


//PARSER
//0=RSS-PARSER
//1 =XMLHTTP
//FIX
//0=summary PROPERTY WITH HTML CONTENT
//1 = CONTENTSNIPPET beggining with "call to click"
//2 = REDDIT AUTOPROMOTION TITLE

//WORLD
export const NY_POST={url:'https://nypost.com/feed/',method:'0', parser:'0',enclosure:'url'} //RSS-FEED (TITLE AND CONTENTSNIPPET)
export const BBC_NEWS = {url:'http://feeds.bbci.co.uk/news/world/rss.xml',method:'0',parser:'0'}; //RSS-PARSER (TITLE AND CONTENTSNIPPET)
export const NY_TIMES = {url:'https://rss.nytimes.com/services/xml/rss/nyt/World.xml',method:'0',parser:'0'}; //RSS-PARSER https://rss.nytimes.com/services/xml/rss/nyt/World.xml
export const WALL_STREET = {url:'https://feeds.a.dj.com/rss/RSSWorldNews.xml',method:'0',parser:'0'}; // RSS - PARSER https://feeds.a.dj.com/rss/RSSWorldNews.xml
export const CNN = {url:'http://rss.cnn.com/rss/edition_world.rss',method:'0',parser:'0'}; //RSS-PARSER
export const ABC = {url:'http://feeds.abcnews.com/abcnews/internationalheadlines',method:'0',parser:'0'}; //RSS-PARSER
export const YAHOO_NEWS = {url:'https://www.yahoo.com/news/world/rss',method:'0',parser:'0',html:'content'}//RSS-PARSER
export const BUZZFEED_WORLD = {url:'https://www.buzzfeed.com/world.xml',method:'0',parser:'0',html:'content'}

//SPORTS
export const SPORTING_NEWS={url:'http://www.sportingnews.com/rss',method:'0',parser:'0',enclosure:'url',html:'content'}
export const ESPN = {url:'http://www.espn.com/espn/rss/news',method:'0',parser:'0'}; //RSS-PARSER
export const BBC_SPORTS={url:'http://feeds.bbci.co.uk/sport/rss.xml',method:'0',parser:'0'} //RSS-FEED (TITLE AND CONTENTSNIPPET)
export const ESPN_NFL = {url:'http://www.espn.com/blog/feed?blog=nflnation', method:'0',parser:'0'} 
export const HOOP_DOCTORS = {url:'http://thehoopdoctors.com/feed', method:'6',parser:'0'}
export const FIFA = {url:'https://www.fifa.com/rss-feeds/news',method:'4',parser:'0'} //RSS-PARSER(TITHLE, IMAGE AND CONTENT:ENCODED)
export const CBS_SPORTS={url:'http://www.cbssports.com/rss/headlines',method:'0',parser:'0'} //RSS-PARSER(TITLE, CONTENT OR SNIPPET)


//TECHNOLOGY
export const NY_TIMES_TECH ={url:'http://feeds.nytimes.com/nyt/rss/Technology', method:'0',parser:'0'} //RSS-FEED (TITLE AND CONTENTSNIPPET)
export const WIRED = {url:'http://feeds.wired.com/wired/index',method:'0',parser:'0'} //RSS-FEED (TITLE AND SNIPPET)
export const PC_WORLD = {url:'http://feeds.pcworld.com/pcworld/latestnews',method:'0',parser:'0',enclosure:'url'} //RSS-FEED(TITLE, SNIPPET AND IMAGE)
export const TECH_WORLD = {url:'http://www.techworld.com/news/rss',method:'0',parser:'0'} //RSS-FEED (TITLE AND SNIPPET)
export const LIFE_HACKER = {url:'https://lifehacker.com/rss',method:'7',parser:'0'}//RSS-FEED(TITLE, SNIPPET AND CONTENT IMG TAG)
export const GIZMODO = {url:'https://gizmodo.com/rss', method:'7',parser:'0'} //RSS-FEED (TITLE, SNIPPET AND CONTENT IMG TAG)
export const TECHNOLOGY_REVIEW={url:'https://www.technologyreview.com/topnews.rss',method:'0',parser:'0'} //RSS-FEED (TITLE AND SNIPPET)
export const HOW_TO_GEEK = {url:'https://feeds.howtogeek.com/howtogeek',method:'4',parser:'0'}//RSS-FEED(TITLE AND CONTENT:ENCODED with image)

//BUSSINESS
export const THE_ATLANTIC_BUSINESS = {url:'https://www.theatlantic.com/feed/channel/business/',method:'7',parser:'0'} //RSS-FEED(TITLE AND SNIPPET)
export const HARVARD_BUSINESS={url:'https://news.harvard.edu/gazette/section/business-economy/feed/',method:'8',parser:'0',enclosure:'url'} //RSS-FEED (TITLE, SNIPPET, ENCLOSURE WITH IMAGE TAG, CONTENT:ENCODED) 
export const FREAKONOMICS ={url:'http://freakonomics.com//feed/',method:'9',parser:'0'} //RSS-FEED TITLE AND CONTENT SNIPPET)
export const THE_BIG_PICTURE ={url:'http://feeds.feedburner.com/TheBigPicture',method:'9',parser:'0'} //RSS-FEED (TITLE AND SNIPPET)
export const THE_ECONOMIST_BUSINESS = {url:'https://www.economist.com/business/rss.xml',method:'0',parser:'0'}//RSS
export const CNN_MONEY = {url:'http://rss.cnn.com/rss/money_topstories.rss',method:'7',parser:'0'}
export const FINANCIAL_TIMES={url:'https://www.ft.com/?format=rss',method:'0',parser:'0'}

//POLITICS
export const THINK_PROGRESS ={url:'https://thinkprogress.org/feed',method:'8',parser:'0'}
export const POLITICAL_INSIDER = {url:'http://thepoliticalinsider.com/feed',method:'9',parser:'0'}
export const NY_TIMES_POLITICS = {url:'http://rss.nytimes.com/services/xml/rss/nyt/Politics.xml',method:'0',parser:'0'}
export const CNN_POLITICS = {url:'http://rss.cnn.com/rss/cnn_allpolitics.rss',method:'0',parser:'0'} //RSS-PARSER (TITLE AND SNIPPET)
export const SLATE = {url:'http://www.slate.com/articles/news_and_politics/politics.teaser.all.10.rss/',method:'0',parser:'0'} //RSS-PARSER (TITLE AND SNIPPET)
export const THE_NATION = {url:'https://www.thenation.com/feed/?post_type=article',method:'7',parser:'0'}//RSS_PARSER AND SNIPPET; SUMMARY WITH CONTENT HTML

//GAMING
export const GAMESPOT = {url:'https://www.gamespot.com/feeds/mashup/',method:'0',parser:'0'}//RSS_PARSER (title and contentsnippet)
export const XBOX = {url:'http://news.xbox.com/feed',method:'8',parser:'0'} //(RSS-PARSER) TITLE AND CONTENTSNIPPET 
export const NINTENDO = {url:'http://www.nintendolife.com/feeds/latest',method:'7',parser:'0'} //RSS-PARSER TITLE CONTENT CONTENTSNIPPET
export const INDIE_GAMES={url:'http://www.indiegames.com/atom.xml',method:'9',parser:'0'} //RSS-PARSER TITLE AND DESCRIPTION
export const GAME_INFORMER={url:'http://www.gameinformer.com/feeds/thefeedrss.aspx',method:'7',parser:'0',fix:'1'}
export const REDDIT_GAMES={url:'https://www.reddit.com/r/gamers/.rss',method:'7',parser:'0',fix:'2'} //RSS-FEED TITLE AND CONTENT WITH HTML
export const ROCKPAPERSHOTGUN={url:'https://www.rockpapershotgun.com/feed', method:'7',parser:'0'} //RSS-FEED TITLE AND CONTENTSNIPPET, CONTENT:ENCODED
export const PCGAMESN={url:'https://www.pcgamesn.com/rss',method:'0', parser:'0'} //RSS-PARSER TITLE AND CONTENTSNIPET

//HEALTH

export const BBC_HEALTH = {url:'http://feeds.bbci.co.uk/news/health/rss.xml',method:'0',parser:'0'} //RSS-PARSER TITLE AND CONTENT SNIPPET
export const WEBMD={url:'http://rssfeeds.webmd.com/rss/rss.aspx?RSSSource=RSS_PUBLIC',method:'7',parser:'0'} //RSS-PARSER TITLE AND CONTENT SNIPPET, CONTENT:ENCODED
export const HARVARD_HEALTH={url:'http://www.health.harvard.edu/blog/feed',method:'7',parser:'0'} //rss-parser title contentsnippet content encoded
export const MYFITNESSPAL = {url:'http://blog.myfitnesspal.com/feed',method:'7',parser:'0'} //RSS-PARSER title contentsnippet enclosure
export const PSYCHCENTRAL ={url:'http://psychcentral.com/blog/feed/atom',method:'7',parser:'0'} //RSS-PARSER TITLE CONTENTSNIPPET
export const NY_TIMES_HEALTH={url:'https://www.nytimes.com/svc/collections/v1/publish/http://www.nytimes.com/section/health/rss.xml',method:'0',parser:'0'} //RSS-PARSER TITLE CONTENTSNIPPET
export const WP_HEALTH = {url:'http://feeds.washingtonpost.com/rss/rss_to-your-health',method:'0',parser:'0'} //RSS-PARSER TITLE CONTENTSNIPPET