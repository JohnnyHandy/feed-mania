import React from 'react'
import {NavLink} from 'react-router-dom'

import './index.css'
import bbc from './BBC_News_2019.svg'
import bbcSports from './BBC_Sport_2017.svg'
import cbsSports from './CBS-SPORTS.svg'
import sportingNews from './sportingnews.svg'
import hoopDoctors from './hoopdoctors.svg'
import foxSports from './foxsports.svg'
import fifa from './fifa.svg'
import nfl from './nfl.svg'
import espn from './espn.svg' 
import wired from './wired.svg'
import pcWorld from './PCWorld.svg'
import techWorld from './techworld.svg'
import lifeHacker from './lifehacker.svg'
import readWrite from './readwrite.svg'
import gizmodo from './Gizmodo.svg'
import technologyReview from './technologyreview.svg'
import howtogeek from './howtogeek.svg'
import atlanticBusiness from './atlanticbusiness.svg'
import entrepreneur from './entrepreneur.svg'
import harvardBusiness from './harvardbusiness.svg'
import freakonomics from './freakonomics.png'
import theBigPicture from './thebigpicture.svg'
import theEconomist from './theeconomist.svg'
import cnnMoney from './cnnmoney.svg'
import huffpostBusiness from './huffpostbusiness.svg'
import fortune from './fortune.svg'
import financialTimes from './financialtimes.svg'
import thinkProgress from './thinkprogress.svg'
import politicalInsider from './politicalinsider.svg'
import foxNewsPolitics from './foxnewspolitics.svg'
import cnnPolitics from './cnnpolitics.svg'
import reutersPolitics from './reuterspolitics.svg'
import theNation from './thenation.svg'
import slate from './slate.svg'
import msnbc from './msnbc.svg'
import gamespot from './gamespot.svg'
import xbox from './xbox.svg'
import nintendoLife from './nintendolife.svg'
import indieGames from './indiegames.svg'
import ign from './ign.svg'
import gameInformer from './gameinformer.svg'
import ars from './ars.svg'
import polygon from './polygon.svg'
import redditGaming from './redditgaming.svg'
import rockPaperShotgun from './rockpapershotgun.svg'
import pcGamesN from './pcgamesn.svg'
import bbcHealth from './bbchealth.svg'
import webmd from './webmd.svg'
import harvardHealth from './harvardhealth.svg'
import myfitnesspal from './myfitnesspal.svg'
import psychCentral from './psychcentral.svg'
import buzzFeedWorld from './buzzfeedworld.svg'
import fox from './fox-news.svg'
import nytimes from './new-york-times.svg'
import reuters from './reuters-2-1.svg'
import wallstreet from './wsj_logo_short.svg'
import cnn from './cnn-1.svg'
import abc from './abc-broadcast.svg'
import yahoo from './yahoo-icon.svg'

//Sports
export const BbcSportsLogo=()=>{
    return(<NavLink to='/sports/bbc-sports' className='choice-container-item'><img className='imgClass' alt='bbc-sports' src={bbcSports}/></NavLink>)
}
export const CbsSportsLogo=()=>{
    return(<NavLink to='/sports/cbs-sports' className='choice-container-item'><img className='imgClass' alt='cbs-sports' src={cbsSports}/></NavLink>)
}
export const SportingNewsLogo=()=>{
    return(<NavLink to='/sports/sporting-news' className='choice-container-item'><img className='imgClass' alt='sporting-news' src={sportingNews}/></NavLink>)
}
export const NflLogo=()=>{
    return(<NavLink to='/sports/nfl' className='choice-container-item'><img className='imgClass' alt='nflLogo' src={nfl}/></NavLink>)
}
export const HoopDoctorsLogo=()=>{
    return(<NavLink to='/sports/hoopdoctors' className='choice-container-item'><img className='imgClass' alt='hoop-doctors' src={hoopDoctors}/></NavLink>)
}
export const FoxSportsLogo = ()=>{
    return(<NavLink to='/sports/fox-sports' className='choice-container-item'><img className='imgClass' alt='fox-sports' src={foxSports}/></NavLink>)
}
export const FifaLogo =()=>{
    return(<NavLink to='/sports/fifa' className='choice-container-item'><img className='imgClass' alt='fifa' src={fifa}/></NavLink>)
}
export const ESPN = ()=>{
    return(<NavLink to='/sports/espn' className='choice-container-item'><img className='imgClass' src={espn} alt ='espn'/></NavLink>)
}
//Technology
export const WiredLogo = ()=>{
    return(<NavLink to='/technology/wired' className='choice-container-item'><img className='imgClass' alt='wired' src={wired}/></NavLink>)
}
export const PcWorldLogo = ()=>{
    return(<NavLink to='/technology/pcworld' className='choice-container-item'><img className='imgClass' alt='PCWorld' src={pcWorld}/></NavLink>)
}
export const TechWorldLogo =()=>{
    return(<NavLink to='/technology/techworld' className='choice-container-item'><img className='imgClass' alt='techWorld' src={techWorld}/></NavLink>)
}
export const LifeHackerLogo =()=>{
    return(<NavLink to='/technology/lifehacker' className='choice-container-item'><img className='imgClass' alt='lifehacker' src={lifeHacker}/></NavLink>)
}
export const ReadWriteLogo =()=>{
    return(<NavLink to='/technology/readwrite' className='choice-container-item'><img className='imgClass' alt='readwrite' src={readWrite}/></NavLink>)
}
export const GizmodoLogo=()=>{
    return(<NavLink to='/technology/gizmodo' className='choice-container-item'><img className='imgClass' alt='gizmodo' src={gizmodo}/></NavLink>)
}
export const TechnologyReviewLogo=()=>{
    return(<NavLink to='/technology/technology-review' className='choice-container-item'><img className='imgClass' alt='technologyreview' src={technologyReview}/></NavLink>)
}
export const HowToGeekLogo = ()=>{
    return(<NavLink to='/technology/howtogeek' className='choice-container-item'><img className='imgClass' alt='howtogeek' src={howtogeek} /></NavLink>)
}

//Business
export const AtlanticBusinessLogo =()=>{
    return(<NavLink to='/business/howtogeek' className='choice-container-item'><img className='imgClass' alt='howtogeek' src={atlanticBusiness}/></NavLink>)
}

export const EntrepreneurLogo = ()=>{
    return(<NavLink to='/business/entrepreneur' className='choice-container-item'><img className='imgClass' alt='entrepreneur' src={entrepreneur}/></NavLink>)
}

export const HarvardBusinessLogo = ()=>{
    return(<NavLink to='/business/harvard-business' className='choice-container-item'><img className='imgClass' alt='harvardbusiness' src={harvardBusiness}/></NavLink>)
}

export const FreakonomicsLogo = ()=>{
    return(<NavLink to='/business/freakonomics' className='choice-container-item'><img className='imgClass' alt='freakonomics' src={freakonomics} /></NavLink>)
}

export const TheBigPictureLogo = ()=>{
    return(<NavLink to='/business/thebigpicture' className='choice-container-item'><img className='imgClass' alt='thebigpicture' src={theBigPicture} /></NavLink>)
}

export const TheEconomistLogo = ()=>{
    return(<NavLink to='/business/the-economist' className='choice-container-item'><img className='imgClass' alt='theeconomist' src={theEconomist}/></NavLink>)
}

export const CnnMoneyLogo = ()=>{
    return(<NavLink to='/business/cnn-money' className='choice-container-item'><img className='imgClass' alt='cnnmoney' src={cnnMoney}/></NavLink>)
}

export const HuffpostBusinessLogo = ()=>{
    return(<NavLink to='/business/huffpost-business' className='choice-container-item'><img className='imgClass' alt='huffpostbusiness' src={huffpostBusiness}/></NavLink>)
}

export const FortuneLogo = ()=>{
    return(<NavLink to='/business/fortune' className='choice-container-item'><img className='imgClass' alt='fortune' src={fortune}/></NavLink>)
}

export const FinancialTimesLogo = ()=>{
    return(<NavLink to='/business/financial-times' className='choice-container-item'><img className='imgClass' alt='financialTimes' src={financialTimes} /></NavLink>)
}

//Politics
export const ThinkProgressLogo = ()=>{
    return(<NavLink to='/politics/think-progress' className='choice-container-item'><img className='imgClass' alt='thinkprogress' src={thinkProgress}/></NavLink>)
}

export const PoliticalInsiderLogo = ()=>{
    return(<NavLink to='/politics/political-insider' className='choice-container-item'><img className='imgClass' alt='politicalinsider' src={politicalInsider} /></NavLink>)
}

export const FoxNewsPoliticsLogo = ()=>{
    return(<NavLink to='/politics/fox-news-politics' className='choice-container-item'><img className='imgClass' alt='foxnewspolitics' src={foxNewsPolitics}/></NavLink>)
}

export const CnnPoliticsLogo = ()=>{
    return(<NavLink to='/politics/cnn-politics' className='choice-container-item'><img className='imgClass' alt='cnnpolitics' src={cnnPolitics}/></NavLink>)
}

export const ReutersPoliticsLogo = ()=>{
    return(<NavLink to='/politics/reuters-politics' className='choice-container-item'><img className='imgClass' alt='reuterspolitics' src={reutersPolitics}/></NavLink>)
}

export const SlateLogo = ()=>{
    return(<NavLink to='/politics/slate' className='choice-container-item'><img className='imgClass' alt='slate' src={slate}/></NavLink>)
}

export const TheNationLogo = ()=>{
    return(<NavLink to='/politics/the-nation' className='choice-container-item'><img className='imgClass' alt='thenation' src={theNation}/></NavLink>)
}

export const MsnbcLogo = ()=>{
    return(<NavLink to='/politics/msnbc' className='choice-container-item'><img className='imgClass' alt='msnbc' src={msnbc} /></NavLink>)
}

//Gaming
export const GameSpotLogo =()=>{
    return(<NavLink to='/gaming/gamespot' className='choice-container-item'><img className='imgClass' alt='gamespot' src={gamespot}/></NavLink>)
}

export const XboxLogo = ()=>{
    return(<NavLink to='/gaming/xbox' className='choice-container-item'><img className='imgClass' alt='xbox' src={xbox}/></NavLink>)
}

export const NintendoLifeLogo = ()=>{
    return(<NavLink to='/gaming/nintendo-life'><img className='imgClass' alt='nintendolife' src={nintendoLife}/></NavLink>)
}

export const IndieGamesLogo = ()=>{
    return(<NavLink to='/gaming/indie-games' className='choice-container-item'><img className='imgClass' alt='indiegames' src={indieGames} /></NavLink>)
}

export const IgnLogo = ()=>{
    return(<NavLink to='/gaming/ign' className='choice-container-item'><img className='imgClass' alt='ign' src={ign} /></NavLink>)
}

export const GameInformerLogo = ()=>{
    return(<NavLink to='/gaming/game-informer' className='choice-container-item'><img className='imgClass' alt='gameinformer' src={gameInformer} /></NavLink>)
}

export const ArsLogo =()=>{
    return(<NavLink to='/gaming/ars' className='choice-container-item'><img className='imgClass' alt='ars' src={ars} /></NavLink>)
}

export const PolygonLogo=()=>{
    return(<NavLink to='/gaming/polygon' className='choice-container-item'><img className='imgClass' alt='polygon' src={polygon} /></NavLink>)
}

export const RedditGamesLogo=()=>{
    return(<NavLink to='/gaming/reddit-games' className='choice-container-item'><img className='imgClass' alt='redditgames' src={redditGaming} /></NavLink>)
} 

export const RockPaperShotgunLogo = ()=>{
    return(<NavLink to='/gaming/rock-paper-shotgun' className='choice-container-item'><img className='imgClass' alt='rockpapershotgun' src={rockPaperShotgun} /></NavLink>)
}

export const PcGamesNLogo = ()=>{
    return(<NavLink to='/gaming/pcgamesn' className='choice-container-item'><img className='imgClass' alt='pcgamesn' src={pcGamesN} /></NavLink>)
}

//Health

export const BbcHealthLogo = ()=>{
    return(<NavLink to='/health/bbc-health' className='choice-container-item'><img className='imgClass' alt='bbchealth' src={bbcHealth} /></NavLink>)
}

export const WebmdLogo = ()=>{
    return(<NavLink to='/health/webmd' className='choice-container-item'><img className='imgClass' alt='webmd' src={webmd} /></NavLink>)
}

export const HarvardHealthLogo = ()=>{
    return(<NavLink to='/health/harvard-health' className='choice-container-item'><img className='imgClass' alt='harvardhealth' src={harvardHealth} /></NavLink>)
}

export const MyFitnessPalLogo = ()=>{
    return(<NavLink to='/health/myfitnesspal' className='choice-container-item'><img className='imgClass' alt='myfitnesspal' src={myfitnesspal} /></NavLink>)
}

export const PsychCentralLogo = ()=>{
    return(<NavLink to='/health/psychcentral' className='choice-container-item'><img className='imgClass' alt='psychcentral' src={psychCentral} /></NavLink>)
}
 
//World

export const BuzzFeedWorldLogo = ()=>{
    return(<NavLink to='/world/buzzfeed' className='choice-container-item'><img className='imgClass' alt='buzzfeed' src={buzzFeedWorld} /></NavLink>)
}
 
export const BBC = ()=>{
    return(<NavLink to='/world/bbc' className='choice-container-item'><img className='imgClass' src={bbc} alt='bbc'/></NavLink>)
}
export const FOX = ()=>{
    return(<NavLink to='/world/fox' className='choice-container-item'><img className='imgClass' src={fox} alt='fox'/></NavLink>)
}
export const NYTIMES =()=>{
    return(<NavLink to='/world/nytimes' className='choice-container-item'><img className='imgClass' src={nytimes} alt='nytimes'/></NavLink>)
}
export const REUTERS =()=>{
    return(<NavLink to='/world/reuters' className='choice-container-item'><img className='imgClass' src={reuters} alt='reuters'/></NavLink>)
}
export const WALLSTREET =()=>{
    return(<NavLink to='/world/wallstreet' className='choice-container-item'><img className='imgClass' src={wallstreet} alt='wallstreet'/></NavLink>)
}
export const CNN = ()=>{
    return(<NavLink to='/world/cnn' className='choice-container-item'><img className='imgClass' src={cnn} alt='cnn'/></NavLink>)
}
export const ABC = ()=>{
    return(<NavLink to='/world/abc' className='choice-container-item'><img className='imgClass' src={abc} alt='abc'/></NavLink>)
}
export const YAHOO = ()=>{
    return(<NavLink to='/world/yahoo' className='choice-container-item'><img className='imgClass' src={yahoo} alt='yahoo'/></NavLink>)
}

