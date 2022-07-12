export default function topprojects() {
    return (
        <div className="flex -space-x-3">
            {CONFIG.projects.map((r) => (
                <a className={r.zindex} href={r.link}>
                    <img src={r.img} className='w-10 h-10 rounded-xl border-4 border-white hover:-translate-y-2 transition-all' alt={r.name + 'image'}/>
                </a>
            ))}
        </div>
    )
  }

export const CONFIG = {
    projects: [
        {
            Name:"SettleCo",
            img: "/meta/settleco.png",
            link:"https://settleco.net",
            zindex:"z-40"
        },
        {
            Name:"OpenAnime",
            img: "/meta/openanime.png",
            link:"https://openani.me",
            zindex:"z-30"
        },
        {
            Name:"Isolation",
            img: "/meta/isolation.png",
            link:"https://isolation.settleco.net",
            zindex:"z-20"
        },
        {
            Name:"MergeApp",
            img: "/meta/mergeapp.png",
            link:"https://mergeapp.dev",
            zindex:"z-10"
        },
    ]
}