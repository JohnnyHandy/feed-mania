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
import washingtonPost from './washingtonpost.svg'



//Sports
export const BbcSportsLogo=(props)=>{
    return(
    <NavLink to='/sports/bbc-sports' className='choice-container-item'>
        <img className='imgClass' alt='bbc-sports' src={bbcSports} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}
export const CbsSportsLogo=(props)=>{
    return(
    <NavLink to='/sports/cbs-sports' className='choice-container-item'>
        <img className='imgClass' alt='cbs-sports' src={cbsSports} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}
export const SportingNewsLogo=(props)=>{
    return(
    <NavLink to='/sports/sporting-news' className='choice-container-item'>
        <img className='imgClass' alt='sporting-news' src={sportingNews} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}
export const NflLogo=(props)=>{
    return(
    <NavLink to='/sports/nfl' className='choice-container-item'>
        <img className='imgClass' alt='nflLogo' src={nfl} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}
export const HoopDoctorsLogo=(props)=>{
    return(
    <NavLink to='/sports/hoopdoctors' className='choice-container-item'>
        <img className='imgClass' alt='hoop-doctors' src={hoopDoctors} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>)
}
export const FoxSportsLogo = (props)=>{
    return(
    <NavLink to='/sports/fox-sports' className='choice-container-item'>
        <img className='imgClass' alt='fox-sports' src={foxSports} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}
export const FifaLogo =(props)=>{
    return(
    <NavLink to='/sports/fifa' className='choice-container-item'>
        <img className='imgClass' alt='fifa' src={fifa} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>)
}
export const ESPN = (props)=>{
    return(
    <NavLink to='/sports/espn' className='choice-container-item'>
        <img className='imgClass' src={espn} alt ='espn' onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}
//Technology
export const WiredLogo = (props)=>{
    return(
    <NavLink to='/technology/wired' className='choice-container-item'>
        <img className='imgClass' alt='wired' src={wired} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}
export const PcWorldLogo = (props)=>{
    return(
    <NavLink to='/technology/pcworld' className='choice-container-item'>
        <img className='imgClass' alt='PCWorld' src={pcWorld} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}
export const TechWorldLogo =(props)=>{
    return(
    <NavLink to='/technology/techworld' className='choice-container-item'>
        <img className='imgClass' alt='techWorld' src={techWorld} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}
export const LifeHackerLogo =(props)=>{
    return(
    <NavLink to='/technology/lifehacker' className='choice-container-item'>
        <img className='imgClass' alt='lifehacker' src={lifeHacker} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}
export const ReadWriteLogo =(props)=>{
    return(
    <NavLink to='/technology/readwrite' className='choice-container-item'>
        <img className='imgClass' alt='readwrite' src={readWrite} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}
export const GizmodoLogo=(props)=>{
    return(
    <NavLink to='/technology/gizmodo' className='choice-container-item'>
        <img className='imgClass' alt='gizmodo' src={gizmodo} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}
export const TechnologyReviewLogo=(props)=>{
    return(
    <NavLink to='/technology/technology-review' className='choice-container-item'>
        <img className='imgClass' alt='technologyreview' src={technologyReview} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>)
}
export const HowToGeekLogo = (props)=>{
    return(
    <NavLink to='/technology/howtogeek' className='choice-container-item'>
        <img className='imgClass' alt='howtogeek' src={howtogeek} onClick={()=>props.fetchFeedInfo()} />
    </NavLink>
    )
}

//Business
export const AtlanticBusinessLogo =(props)=>{
    return(
    <NavLink to='/business/howtogeek' className='choice-container-item'>
        <img className='imgClass' alt='howtogeek' src={atlanticBusiness} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

export const EntrepreneurLogo = (props)=>{
    return(
    <NavLink to='/business/entrepreneur' className='choice-container-item'>
        <img className='imgClass' alt='entrepreneur' src={entrepreneur} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

export const HarvardBusinessLogo = (props)=>{
    return(
    <NavLink to='/business/harvard-business' className='choice-container-item'>
        <img className='imgClass' alt='harvardbusiness' src={harvardBusiness} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

export const FreakonomicsLogo = (props)=>{
    return(
    <NavLink to='/business/freakonomics' className='choice-container-item'>
        <img className='imgClass' alt='freakonomics' src={freakonomics} onClick={()=>props.fetchFeedInfo()} />
    </NavLink>
    )
}

export const TheBigPictureLogo = (props)=>{
    return(
    <NavLink to='/business/thebigpicture' className='choice-container-item'>
        <img className='imgClass' alt='thebigpicture' src={theBigPicture} onClick={()=>props.fetchFeedInfo()} />
    </NavLink>
    )
}

export const TheEconomistLogo = (props)=>{
    return(
    <NavLink to='/business/the-economist' className='choice-container-item'>
        <img className='imgClass' alt='theeconomist' src={theEconomist} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>)
}

export const CnnMoneyLogo = (props)=>{
    return(
    <NavLink to='/business/cnn-money' className='choice-container-item'>
        <img className='imgClass' alt='cnnmoney' src={cnnMoney} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

export const HuffpostBusinessLogo = (props)=>{
    return(
    <NavLink to='/business/huffpost-business' className='choice-container-item'>
        <img className='imgClass' alt='huffpostbusiness' src={huffpostBusiness} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

export const FortuneLogo = (props)=>{
    return(
    <NavLink to='/business/fortune' className='choice-container-item'>
        <img className='imgClass' alt='fortune' src={fortune} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

export const FinancialTimesLogo = (props)=>{
    return(
    <NavLink to='/business/financial-times' className='choice-container-item'>
        <img className='imgClass' alt='financialTimes' src={financialTimes} onClick={()=>props.fetchFeedInfo()} />
    </NavLink>
    )
}

//Politics
export const ThinkProgressLogo = (props)=>{
    return(
    <NavLink to='/politics/think-progress' className='choice-container-item'>
        <img className='imgClass' alt='thinkprogress' src={thinkProgress} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

export const PoliticalInsiderLogo = (props)=>{
    return(
    <NavLink to='/politics/political-insider' className='choice-container-item'>
        <img className='imgClass' alt='politicalinsider' src={politicalInsider} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

export const FoxNewsPoliticsLogo = (props)=>{
    return(
    <NavLink to='/politics/fox-news-politics' className='choice-container-item'>
        <img className='imgClass' alt='foxnewspolitics' src={foxNewsPolitics} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

export const CnnPoliticsLogo = (props)=>{
    return(<NavLink to='/politics/cnn-politics' className='choice-container-item'>
        <img className='imgClass' alt='cnnpolitics' src={cnnPolitics} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

export const ReutersPoliticsLogo = (props)=>{
    return(
    <NavLink to='/politics/reuters-politics' className='choice-container-item'>
        <img className='imgClass' alt='reuterspolitics' src={reutersPolitics} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

export const SlateLogo = (props)=>{
    return(
    <NavLink to='/politics/slate' className='choice-container-item'>
        <img className='imgClass' alt='slate' src={slate} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

export const TheNationLogo = (props)=>{
    return(
    <NavLink to='/politics/the-nation' className='choice-container-item'>
        <img className='imgClass' alt='thenation' src={theNation} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

export const MsnbcLogo = (props)=>{
    return(
    <NavLink to='/politics/msnbc' className='choice-container-item' >
        <img className='imgClass' alt='msnbc' src={msnbc} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

//Gaming
export const GameSpotLogo =(props)=>{
    return(
    <NavLink to='/gaming/gamespot' className='choice-container-item'>
        <img className='imgClass' alt='gamespot' src={gamespot} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

export const XboxLogo = (props)=>{
    return(
    <NavLink to='/gaming/xbox' className='choice-container-item'>
        <img className='imgClass' alt='xbox' src={xbox} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>)
}

export const NintendoLifeLogo = (props)=>{
    return(
    <NavLink to='/gaming/nintendo-life' className='choice-container-item'>
        <img className='imgClass' alt='nintendolife' src={nintendoLife} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>)
}

export const IndieGamesLogo = (props)=>{
    return(
    <NavLink to='/gaming/indie-games' className='choice-container-item'>
        <img className='imgClass' alt='indiegames' src={indieGames} onClick={()=>props.fetchFeedInfo()} />
    </NavLink>)
}

export const IgnLogo = (props)=>{
    return(
    <NavLink to='/gaming/ign' className='choice-container-item'>
        <img className='imgClass' alt='ign' src={ign} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

export const GameInformerLogo = (props)=>{
    return(
    <NavLink to='/gaming/game-informer' className='choice-container-item'>
        <img className='imgClass' alt='gameinformer' src={gameInformer} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

export const ArsLogo =(props)=>{
    return(
    <NavLink to='/gaming/ars' className='choice-container-item'>
        <img className='imgClass' alt='ars' src={ars} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

export const PolygonLogo=(props)=>{
    return(
    <NavLink to='/gaming/polygon' className='choice-container-item'>
        <img className='imgClass' alt='polygon' src={polygon} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

export const RedditGamesLogo=(props)=>{
    return(
    <NavLink to='/gaming/reddit-games' className='choice-container-item'>
        <img className='imgClass' alt='redditgames' src={redditGaming} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
} 

export const RockPaperShotgunLogo = (props)=>{
    return(
    <NavLink to='/gaming/rock-paper-shotgun' className='choice-container-item'>
        <img className='imgClass' alt='rockpapershotgun' src={rockPaperShotgun} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

export const PcGamesNLogo = (props)=>{
    return(
    <NavLink to='/gaming/pcgamesn' className='choice-container-item'>
        <img className='imgClass' alt='pcgamesn' src={pcGamesN} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>)
}

//Health

export const BbcHealthLogo = (props)=>{
    return(
    <NavLink to='/health/bbc-health' className='choice-container-item'>
        <img className='imgClass' alt='bbchealth' src={bbcHealth} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

export const WebmdLogo = (props)=>{
    return(
    <NavLink to='/health/webmd' className='choice-container-item'>
        <img className='imgClass' onClick={()=>props.fetchFeedInfo()} alt='webmd' src={webmd} />
    </NavLink>
    )
}

export const HarvardHealthLogo = (props)=>{
    return(
    <NavLink to='/health/harvard-health' className='choice-container-item'>
        <img className='imgClass' alt='harvardhealth' src={harvardHealth} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

export const MyFitnessPalLogo = (props)=>{
    return(
    <NavLink to='/health/myfitnesspal' className='choice-container-item'>
        <img className='imgClass' alt='myfitnesspal' src={myfitnesspal}onClick={()=>props.fetchFeedInfo()} />
    </NavLink>
    )
}

export const PsychCentralLogo = (props)=>{
    return(
    <NavLink to='/health/psychcentral' className='choice-container-item'>
        <img className='imgClass' alt='psychcentral' src={psychCentral} onClick={()=>props.fetchFeedInfo()} />
    </NavLink>
    )
}

export const washingtonPostHealthLogo = (props)=>{
    return(
    <NavLink to='/health/psychcentral' className='choice-container-item'>
        <img className='imgClass' alt='wphealth'src={washingtonPost} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}
 
//World

export const BuzzFeedWorldLogo = (props)=>{
    return(
    <NavLink to='/world/buzzfeed' className='choice-container-item'>
        <img className='imgClass' alt='buzzfeed' src={buzzFeedWorld} onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>)
}
 
export const BBC = (props)=>{
    return(
    <NavLink to='/world/bbc' className='choice-container-item'>
        <img className='imgClass' src={bbc} alt='bbc' onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}
export const FOX = (props)=>{
    return(
    <NavLink to='/world/fox' className='choice-container-item'>
        <img className='imgClass' src={fox} alt='fox' onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}
export const NYTIMES =(props)=>{
    return(
    <NavLink to='/world/nytimes' className='choice-container-item'>
        <img className='imgClass' src={nytimes} alt='nytimes' onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}
export const REUTERS =(props)=>{
    return(
    <NavLink to='/world/reuters' className='choice-container-item'>
        <img className='imgClass' src={reuters} alt='reuters' onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}
export const WALLSTREET =(props)=>{
    return(
    <NavLink to='/world/wallstreet' className='choice-container-item'>
        <img className='imgClass' src={wallstreet} alt='wallstreet' onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}
export const CNN = (props)=>{
    return(
    <NavLink to='/world/cnn' className='choice-container-item'>
        <img className='imgClass' src={cnn} alt='cnn' onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}
export const ABC = (props)=>{
    return(
    <NavLink to='/world/abc' className='choice-container-item'>
        <img className='imgClass' src={abc} alt='abc' onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}
export const YAHOO = (props)=>{
    return(
    <NavLink to='/world/yahoo' className='choice-container-item'>
        <img className='imgClass' src={yahoo} alt='yahoo' onClick={()=>props.fetchFeedInfo()}/>
    </NavLink>
    )
}

