import Topprojects from '../components/topprojects'
import Topmain from '../components/topmain'
import Fetchorgmembers from '../components/fetchOrgMembers'
import Footer from '../components/footer'

import React from "react";


export default function Home() {
    const projects_style = {
        "border-radius": "17px",
        "background-color": "white",
        "box-shadow": "0px -50px 15px 42px white, 0px -25px 15px 42px white",
    }

    const top_center = {
        top: "50%",
        transform: "translate(5%, -50%)"
    };
  return (

    <div className="grid justify-items-center pt-28 ">
        <div className="md:w-5/12 w-11/12 space-y-10">
            <div className="space-y-4">
                <Topprojects />
                <Topmain />
            </div>
            <div className="font-light">
                <div id="settleco" className="py-20">
                    <div style={projects_style} className="sticky top-3 z-20">
                        <div className="flex items-center text-stone-900 space-x-2">
                            <img src="/meta/settleco.png" className="h-10 w-10 rounded-xl" alt=""/>
                            <p className="font-bold text-3xl">SettleCo</p>
                        </div>
                        <p className="text-stone-500 ml-12">2022 - <span className="text-green-600 font-semibold">Now</span></p>
                    </div>
                    <div className="ml-12 z-10">
                            <Fetchorgmembers org="SettleCo" />
                    </div>
                    <div className=" text-2xl text-stone-900 ml-4 space-y-4">
                        <p><strong>SettleCo</strong> is a tiny development company which located on <strong>Turkey, Izmir.</strong></p>
                        <p>We have a team that consists of <strong>1-5 people</strong></p>
                        <p>We are a relatively <strong>small company</strong> that aims to grow by making <strong>new projects</strong>.</p>
                    </div>
                </div>
                <div id="openanime" className="py-20">
                    <div style={projects_style} className="sticky top-3 z-20">
                        <div className="flex items-center text-stone-900 space-x-2">
                            <img src="/meta/openanime.png" className="h-10 w-10 rounded-xl" alt=""/>
                            <p className="font-bold text-3xl">OpenAnime</p>
                        </div>
                        <p className="text-stone-500 ml-12">2022 - <span className="text-green-600 font-semibold">Now</span></p>
                    </div>
                    <div className="ml-12 z-10">
                        <Fetchorgmembers org="openanime" />
                    </div>
                    <div className=" text-2xl text-stone-900 ml-12 space-y-4 ">
                        <p ><strong>OpenAnime</strong> is an <strong>open source anime platform</strong> that aims on community, security and speed. It provides some of the unique features that you will rarely see on an anime platform.</p>
                        <div className="relative group rounded-md">
                            <p style={top_center} className="text-white font-semibold text-sm md:text-2xl transition-all opacity-0 group-hover:opacity-100 absolute z-10 w-3/4">Profile section we made for OpenAnime. Here you can see what other people are watching or for how long.</p>
                            <div className="bg-stone-600 rounded-md">
                                <img src="/assets/openanime.png" className='group-hover:opacity-50 rounded-md transition group-hover:blur-lg'/>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p><strong>Watch together system</strong> to create rooms and chat with your friends that you have invited to your room in realtime while watching your anime</p>
                            <p>Community section to publish your <strong>favorite anime clips</strong></p>
                            <p>Ability to <strong>download anime videos</strong> right in <strong>your browser</strong></p>
                            <p>Ability to <strong>listen anime musics</strong> and <strong>soundtracks</strong></p>
                            <p>and many more feautres that you will love while using <strong>OpenAnime</strong>!</p>
                        </div>
                    </div>
                </div>
                <div id="isolation" className="py-20">
                    <div style={projects_style} className="sticky top-3 z-20">
                        <div className="flex items-center text-stone-900 space-x-2">
                            <img src="/meta/isolation.png" className="h-10 w-10 rounded-xl" alt=""/>
                            <p className="font-bold text-3xl">Isolation</p>
                        </div>
                        <p className="text-stone-500 ml-12">2022 - <span className="text-green-600 font-semibold">Now</span> | Side project of <span className="font-semibold">SettleCo</span></p>
                    </div>
                    <div className="ml-12 z-10">
                        <Fetchorgmembers org="SettleCo" />
                    </div>
                    <div className=" text-2xl text-stone-900 ml-12 space-y-4 ">
                        <p>Isolation is a start page with some widgets to keep you focused.</p>
                        <p>Among the prominent features of the plugin, you can customize the background, favorites, weather widget.</p>
                        <div className="relative group">
                            <p style={top_center} className="text-white font-semibold text-lg md:text-2xl transition-all opacity-0 group-hover:opacity-100 absolute z-10 w-3/4">Screenshot taken during the closed beta phase of the project</p>
                            <div className="bg-stone-400 rounded-md">
                                <img src="/assets/isolation.png" className='group-hover:opacity-50 rounded-md transition group-hover:blur-lg'/>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p>You can also access crypto prices and music of the day with this extention.</p>
                        </div>
                    </div>
                </div>
                <div id="mergeapp" className="py-20">
                    <div style={projects_style} className="sticky top-3 z-20">
                        <div className="flex items-center text-stone-900 space-x-2">
                            <img src="/meta/mergeapp.png" className="h-10 w-10 rounded-xl" alt=""/>
                            <p className="font-bold text-3xl">MergeApp</p>
                        </div>
                        <p className="text-stone-500 ml-12">2020 - 2021</p>
                    </div>
                    <div className="ml-12 z-10">
                        <Fetchorgmembers org="mergeappdev" />
                    </div>
                    <div className=" text-2xl text-stone-900 ml-12 space-y-4 ">
                        <p>MergeApp is the project that we started in the middle of 2020 and we had to stop the project due to various problems.</p>
                        <p>The starting point of our project was to provide free, ad-free and secure messaging to players or software developers, but things did not go as expected.</p>
                        <p>(and also the old name of our project was ReponseApp, but we decided to change the name because of a random stupid team fight lol.)</p>
                        <p>The <span className="font-semibold">good news</span> is that we will change the concept of the project and relaunch it. this time we plan the app to be offline. (no joke lul)</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </div>
  )
}