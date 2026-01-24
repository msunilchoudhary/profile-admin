import PieChartCom from "../components/PiChart";
// import PageTitle from "../components/PageTitle";
import ConfidencialCard from "../components/ConfidencialCard";
import { confidentials } from "../data";
import ApexChart from "../components/ApexChart";

function Dashboard() {
  return (
    <>
      {/* <PageTitle title="Dashboard" para="Overview of Performance"/> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {confidentials.length>0 && confidentials.map((item)=> (<ConfidencialCard key={item.id} item={item} />))}
        
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 overflow-auto">
          <h3 className="text-xl font-bold mb-8">Expertise</h3>
          <ApexChart />
        </div>
        <div className="bg-white rounded-xl dark:bg-gray-900 shadow p-6 overflow-auto">
            <h3 className="text-xl font-bold mb-8">Technologies with experience</h3>
            <PieChartCom />
        </div>        
      </div>
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-6 overflow-auto">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 dark:text-orange-400 border-b dark:border-b-gray-800">
                <th className="pb-3">Company Name</th>
                <th className="pb-3">Designation</th>
                <th className="pb-3">Date of Join</th>
                <th className="pb-3">Last Working Day</th>
                <th className="pb-3">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y">
              <tr className="border-b-gray-800">
                <td className="py-3">E-Trade Services</td>
                <td>Web Designer</td>
                <td>July 2011</td>
                <td>February 2012</td>
                <td><span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                    Running as DR Infosoft
                  </span></td>
              </tr>

              <tr className="border-b-gray-800">
                <td className="py-3">Centaur Web Services</td>
                <td>Web Designer</td>
                <td>February 2012</td>
                <td>October 2013</td>
                <td><span className="px-3 py-1 rounded-full  bg-green-100 text-green-700 text-xs">
                    Running
                  </span></td>
              </tr>

              <tr className="border-b-gray-800">
                <td className="py-3">Afycon Technologies</td>
                <td>Web Designer</td>
                <td>October 2013</td>
                <td>October 2015</td>
                <td><span className="px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs">
                    Not Running
                  </span></td>
              </tr>
              <tr className="border-b-gray-800">
                <td className="py-3">Marg ERP Limited</td>
                <td>Frontend Designer & Developer</td>
                <td>November 2015</td>
                <td>May 2019</td>
                <td><span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                    Running
                  </span></td>
              </tr>
              <tr className="border-b-gray-800">
                <td className="py-3">OMLogic Consulting</td>
                <td>Frontend Developer</td>
                <td>May 2019</td>
                <td>December 2019</td>
                <td><span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                    Running
                  </span></td>
              </tr>
              <tr className="border-b-gray-800">
                <td className="py-3">Digics Pvt. Ltd.</td>
                <td>Lead Frontend Web Developer</td>
                <td>January 2020</td>
                <td>September 2023</td>
                <td><span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                    Running
                  </span></td>
              </tr>
              <tr className="border-b-gray-800">
                <td className="py-3">Marg Books/Marg ERP Limited</td>
                <td>Lead Frontend Web Developer</td>
                <td>November 2023</td>
                <td>August 2025</td>
                <td><span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs">
                    Running
                  </span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
