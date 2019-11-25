import React from 'react'
import * as logos from '../../assets/logos/index'


const Choice = (props)=>{
    return props.active ==='world' ?
        <div className='choice-container'>
            <logos.ABC/>
            <logos.BBC/>
            <logos.BuzzFeedWorldLogo/>
            <logos.CNN/>
            <logos.FOX/>
            <logos.NYTIMES/>
            <logos.REUTERS/>
            <logos.YAHOO/>
            <logos.WALLSTREET/>
        </div>
        : props.active === 'sports' ? 
        <div className='choice-container'>
            <logos.BbcSportsLogo/>
            <logos.CbsSportsLogo/>
            <logos.ESPN/>
            <logos.FifaLogo/>
            <logos.FoxSportsLogo/>
            <logos.HoopDoctorsLogo/>
            <logos.NflLogo/>
            <logos.SportingNewsLogo/>
        </div> 
        : props.active === 'technology' ? 
        <div className='choice-container'>
            <logos.GizmodoLogo/>
            <logos.HowToGeekLogo/>
            <logos.LifeHackerLogo/>
            <logos.PcWorldLogo/>
            <logos.ReadWriteLogo/>
            <logos.TechnologyReviewLogo/>
            <logos.TechWorldLogo/>
            <logos.WiredLogo/>
        </div>
        : props.active === 'business' ?
        <div className='choice-container'>
            <logos.AtlanticBusinessLogo/>
            <logos.CnnMoneyLogo/>
            <logos.EntrepreneurLogo/>
            <logos.FinancialTimesLogo/>
            <logos.FortuneLogo/>
            <logos.FreakonomicsLogo/>
            <logos.HarvardBusinessLogo/>
            <logos.HuffpostBusinessLogo/>
            <logos.TheBigPictureLogo/>
            <logos.TheEconomistLogo/>
        </div> 
        : props.active === 'politics' ?
        <div className='choice-container'>
            <logos.CnnPoliticsLogo/>
            <logos.FoxNewsPoliticsLogo/>
            <logos.MsnbcLogo/>
            <logos.PoliticalInsiderLogo/>
            <logos.ReutersPoliticsLogo/>
            <logos.SlateLogo/>
            <logos.TheNationLogo/>
            <logos.ThinkProgressLogo/>
        </div>
        : props.active === 'gaming' ?
        <div className='choice-container'>
            <logos.ArsLogo/>
            <logos.GameInformerLogo/>
            <logos.GameSpotLogo/>
            <logos.IgnLogo/>
            <logos.IndieGamesLogo/>
            <logos.NintendoLifeLogo/>
            <logos.PcGamesNLogo/>
            <logos.PolygonLogo/>
            <logos.RedditGamesLogo/>
            <logos.RockPaperShotgunLogo/>
            <logos.XboxLogo/>
        </div>
        : props.active === 'health' ?
        <div className='choice-container'>
            <logos.BbcHealthLogo/>
            <logos.HarvardHealthLogo/>
            <logos.MyFitnessPalLogo/>
            <logos.PsychCentralLogo/>
            <logos.WebmdLogo/>
        </div>
        :
        null
}

export default Choice