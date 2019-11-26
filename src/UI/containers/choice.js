import React from 'react'
import {connect} from 'react-redux'
import * as logos from '../../assets/logos/index'
import * as actions from '../../store/index'
import * as keys from '../../utility/stringKeys'

const Choice = (props)=>{
    
    return props.active ==='world' ?
        <div className='choice-container'>
            <logos.ABC fetchFeedInfo={()=>props.loadData(keys.ABC)}/>
            <logos.BBC fetchFeedInfo={()=>props.loadData(keys.BBC_NEWS)}/>
            <logos.BuzzFeedWorldLogo fetchFeedInfo={()=>props.loadData(keys.BUZZFEED_WORLD)}/>
            <logos.CNN fetchFeedInfo={()=>props.loadData(keys.CNN)}/>
            <logos.FOX fetchFeedInfo={()=>props.loadData(keys.FOX_NEWS)}/>
            <logos.NYTIMES fetchFeedInfo={()=>props.loadData(keys.NY_TIMES)}/>
            <logos.REUTERS fetchFeedInfo={()=>props.loadData(keys.REUTERS)}/>
            <logos.YAHOO fetchFeedInfo={()=>props.loadData(keys.YAHOO_NEWS)}/>
            <logos.WALLSTREET fetchFeedInfo={()=>props.loadData(keys.WALL_STREET)}/>
        </div>
        : props.active === 'sports' ? 
        <div className='choice-container'>
            <logos.BbcSportsLogo fetchFeedInfo={()=>props.loadData(keys.BBC_SPORTS)}/>
            <logos.CbsSportsLogo fetchFeedInfo={()=>props.loadData(keys.CBS_SPORTS)}/>
            <logos.ESPN fetchFeedInfo={()=>props.loadData(keys.ESPN)}/>
            <logos.FifaLogo fetchFeedInfo={()=>props.loadData(keys.FIFA)}/>
            <logos.FoxSportsLogo fetchFeedInfo={()=>props.loadData(keys.FOX_SPORTS)}/>
            <logos.HoopDoctorsLogo fetchFeedInfo={()=>props.loadData(keys.HOOP_DOCTORS)}/>
            <logos.NflLogo fetchFeedInfo={()=>props.loadData(keys.ESPN_NFL)}/>
            <logos.SportingNewsLogo fetchFeedInfo={()=>props.loadData(keys.SPORTING_NEWS)}/>
        </div> 
        : props.active === 'technology' ? 
        <div className='choice-container'>
            <logos.GizmodoLogo fetchFeedInfo={()=>props.loadData(keys.GIZMODO)}/>
            <logos.HowToGeekLogo fetchFeedInfo={()=>props.loadData(keys.HOW_TO_GEEK)}/>
            <logos.LifeHackerLogo fetchFeedInfo={()=>props.loadData(keys.LIFE_HACKER)}/>
            <logos.PcWorldLogo fetchFeedInfo={()=>props.loadData(keys.PC_WORLD)}/>
            <logos.ReadWriteLogo fetchFeedInfo={()=>props.loadData(keys.READWRITE)} />
            <logos.TechnologyReviewLogo fetchFeedInfo={()=>props.loadData(keys.TECHNOLOGY_REVIEW)}/>
            <logos.TechWorldLogo fetchFeedInfo={()=>props.loadData(keys.TECH_WORLD)}/>
            <logos.WiredLogo fetchFeedInfo={()=>props.loadData(keys.WIRED)}/>
        </div>
        : props.active === 'business' ?
        <div className='choice-container'>
            <logos.AtlanticBusinessLogo fetchFeedInfo={()=>props.loadData(keys.THE_ATLANTIC_BUSINESS)}/>
            <logos.CnnMoneyLogo fetchFeedInfo={()=>props.loadData(keys.CNN_MONEY)}/>
            <logos.EntrepreneurLogo fetchFeedInfo={()=>props.loadData(keys.ENTREPENEUR)}/>
            <logos.FinancialTimesLogo fetchFeedInfo={()=>props.loadData(keys.FINANCIAL_TIMES)}/>
            <logos.FortuneLogo fetchFeedInfo={()=>props.loadData(keys.FORTUNE)}/>
            <logos.FreakonomicsLogo fetchFeedInfo={()=>props.loadData(keys.FREAKONOMICS)}/>
            <logos.HarvardBusinessLogo fetchFeedInfo={()=>props.loadData(keys.HARVARD_BUSINESS)}/>
            <logos.HuffpostBusinessLogo fetchFeedInfo={()=>props.loadData(keys.HARVARD_BUSINESS)}/>
            <logos.TheBigPictureLogo fetchFeedInfo={()=>props.loadData(keys.THE_BIG_PICTURE)}/>
            <logos.TheEconomistLogo fetchFeedInfo={()=>props.loadData(keys.THE_ECONOMIST_BUSINESS)}/>
        </div> 
        : props.active === 'politics' ?
        <div className='choice-container'>
            <logos.CnnPoliticsLogo fetchFeedInfo={()=>props.loadData(keys.CNN_POLITICS)}/>
            <logos.FoxNewsPoliticsLogo fetchFeedInfo={()=>props.loadData(keys.FOX_NEWS_POLITICS)}/>
            <logos.MsnbcLogo fetchFeedInfo={()=>props.loadData(keys.MSNBC)}/>
            <logos.PoliticalInsiderLogo fetchFeedInfo={()=>props.loadData(keys.POLITICAL_INSIDER)}/>
            <logos.ReutersPoliticsLogo fetchFeedInfo={()=>props.loadData(keys.REUTERS_POLITICS)}/>
            <logos.SlateLogo fetchFeedInfo={()=>props.loadData(keys.SLATE)}/>
            <logos.TheNationLogo fetchFeedInfo={()=>props.loadData(keys.THE_NATION)}/>
            <logos.ThinkProgressLogo fetchFeedInfo={()=>props.loadData(keys.THINK_PROGRESS)}/>
        </div>
        : props.active === 'gaming' ?
        <div className='choice-container'>
            <logos.ArsLogo fetchFeedInfo={()=>props.loadData(keys.ARS)}/>
            <logos.GameInformerLogo fetchFeedInfo={()=>props.loadData(keys.GAME_INFORMER)}/>
            <logos.GameSpotLogo fetchFeedInfo={()=>props.loadData(keys.GAMESPOT)}/>
            <logos.IgnLogo fetchFeedInfo={()=>props.loadData(keys.IGN)}/>
            <logos.IndieGamesLogo fetchFeedInfo={()=>props.loadData(keys.INDIE_GAMES)}/>
            <logos.NintendoLifeLogo fetchFeedInfo={()=>props.loadData(keys.NINTENDO)}/>
            <logos.PcGamesNLogo fetchFeedInfo={()=>props.loadData(keys.PCGAMESN)}/>
            <logos.PolygonLogo fetchFeedInfo={()=>props.loadData(keys.POLYGON)}/>
            <logos.RedditGamesLogo fetchFeedInfo={()=>props.loadData(keys.REDDIT_GAMES)}/>
            <logos.RockPaperShotgunLogo fetchFeedInfo={()=>props.loadData(keys.ROCKPAPERSHOTGUN)}/>
            <logos.XboxLogo fetchFeedInfo={()=>props.loadData(keys.XBOX)}/>
        </div>
        : props.active === 'health' ?
        <div className='choice-container' >
            <logos.BbcHealthLogo fetchFeedInfo={()=>props.loadData(keys.BBC_HEALTH)}/>
            <logos.HarvardHealthLogo fetchFeedInfo={()=>props.loadData(keys.HARVARD_HEALTH)}/>
            <logos.MyFitnessPalLogo fetchFeedInfo={()=>props.loadData(keys.MYFITNESSPAL)}/>
            <logos.PsychCentralLogo fetchFeedInfo={()=>props.loadData(keys.PSYCHCENTRAL)}/>
            <logos.WebmdLogo fetchFeedInfo={()=>props.loadData(keys.WEBMD)}/>
            <logos.washingtonPostHealthLogo fetchFeedInfo={()=>props.loadData(keys.WP_HEALTH)}/>
        </div>
        :
        null
}

const mapDispatchToProps = dispatch=>{
    return{
        loadData:(data)=>dispatch(actions.loadData(data))
    }
}

export default connect(null,mapDispatchToProps)(Choice)