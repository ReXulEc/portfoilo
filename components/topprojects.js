export default function Main() {
    return (
        <div className="flex -space-x-3">
            {CONFIG.projects.map((r) => (
                <img src={r.img} className={r.zindex + ' w-10 rounded-xl border-4 border-white hover:-translate-y-2 transition-all'} alt={r.name + 'image'}/>
            ))}
        </div>
    )
  }

export const CONFIG = {
    projects: [
        {
            Name:"SettleCo",
            img: "/meta/settleco.png",
            link:"https://github.com/rexulec",
            zindex:"z-30"
        },
        {
            Name:"Isolation",
            img: "/meta/isolation.png",
            link:"https://github.com/rexulec",
            zindex:"z-20"
        },
        {
            Name:"MergeApp",
            img: "/meta/mergeapp.png",
            link:"https://github.com/rexulec",
            zindex:"z-10"
        },
    ]
}