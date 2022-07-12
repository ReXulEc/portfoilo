import Topprojects from '../components/topprojects'
import Topmain from '../components/topmain'
import Fetchorgmembers from '../components/fetchOrgMembers'
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
                            <p style={top_center} className="text-white font-semibold transition-all opacity-0 group-hover:opacity-100 absolute z-10 w-3/4">Profile section we made for OpenAnime. Here you can see what other people are watching or for how long.</p>
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
                            <p style={top_center} className="text-white font-semibold transition-all opacity-0 group-hover:opacity-100 absolute z-10 w-3/4">Screenshot taken during the closed beta phase of the project</p>
                            <div className="bg-stone-400 rounded-md">
                                <img src="/assets/isolation.png" className='group-hover:opacity-50 rounded-md transition group-hover:blur-lg'/>
                            </div>
                        </div>
                        <div className="space-y-2">

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}