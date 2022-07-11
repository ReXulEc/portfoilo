import Topprojects from '../components/topprojects'
import Topmain from '../components/topmain'


export default function Home() {
  return (

    <div className="grid justify-items-center pt-52">
        <div className="w-5/12">
            <div className="space-y-4">
                <Topprojects />
                <Topmain />
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}