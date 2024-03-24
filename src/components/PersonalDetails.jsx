import { me } from "../assets/images";
import { star } from "../assets/icons";

// Personal Details component
const PersonalDetails = () => {

    const mbtiResult = 'INTJ - The Architect';
    const rayDalioTestResult = 'Shaper';

    return (
      <div className="col-span-3 rounded-lg p-4">
        <div className="flex items-center justify-center flex-col py-4">
          <img
            src={me} // Replace with path to actual image
            alt="Profile"
            className="w-24 h-24 rounded-full border-2 border-blue-400 mb-2 object-cover"
          />
          <h2 className="text-xl font-bold">Lei Zhi Guang</h2>
          <div className="text-sm text-gray-500">XP 2641</div>
          <div className="flex justify-between gap-8 mt-2">
            <h6 className=" bg-purple-500 text-white rounded-md px-2 py-1 text-sm">INTJ</h6>
            <h6 className=" bg-green-500 text-white rounded-md px-2 py-1 text-sm">Shaper</h6>
          </div>
        </div>
  
        <div className="flex justify-between items-center px-4 py-2">
          <div className="flex items-center">
            <span className="block w-3 h-3 bg-green-500 rounded-full mr-2"></span>
            <span className="text-xs text-gray-500">Online</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-gray-500">24</span>
            <img src={star} alt="Icon" /> 
          </div>
        </div>
  
        <div className="px-4 py-2">
            <h1 className="text-sm text-slate-gray">This Week Helping Scores</h1>
          <div className="bg-gray-200 rounded-full h-2 w-full mb-1 mt-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: '50%' }}></div>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>0</span>
            <span>231</span>
          </div>
        </div>

  
        <div className="border-t mt-4 pt-4">
          <h3 className="text-lg font-semibold mb-2">Next Achievement:</h3>
          {/* Next achievement details */}
          {/* ... */}
          <div className="flex gap-4">
            <img src="https://healthitanalytics.com/images/site/article_headers/_normal/GettyImages-1132660268.jpg" alt="" width={80} height={80} className="rounded-md"/>
            <div className="">
                <h4 className="font-semibold text-md">Capital Analytic</h4>
                <p className="text-sm text-slate-gray">Master the basics of analytic in capital market</p>
            </div>
          </div>
        </div>
  
        
        <div className="border-t mt-4 pt-4">
          <h3 className="text-lg font-semibold mb-2">Your Upcoming</h3>

          <div className="flex gap-4 mt-4">
            <img src="https://icief2024.iium.edu.my/wp-content/uploads/2024/01/icief2024-main-kv.jpg" alt="" width={80} height={80} className="rounded-md"/>
            <div className="">
                <h4 className="font-semibold text-md">Islamic Fin Conference</h4>
                <p className="text-sm text-slate-gray">20 Mac 2024</p>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <img src="https://f.hubspotusercontent00.net/hubfs/5134751/Video%20interview%20checklist.jpg" alt="" width={80} height={80} className="rounded-md"/>
            <div className="">
                <h4 className="font-semibold text-md">Virtual Interview</h4>
                <p className="text-sm text-slate-gray">1 Apr 2024</p>
            </div>
          </div>
            
        </div>
      </div>
    );
  };
  

export default PersonalDetails