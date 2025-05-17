import { useState } from "react";
import { Search, Bell, User, Home, BarChart2, Users, CreditCard, File, Shield, Lock, List, CheckSquare, LogOut, Activity, Menu, ArrowRight, ChevronUp, ExternalLink } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, PieChart, Pie, Cell } from "recharts";

export default function Dashboard() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Monthly issuance data
  const barData = [
    { name: "Jan", personalized: 35, instant: 15 },
    { name: "Feb", personalized: 55, instant: 25 },
    { name: "Mar", personalized: 40, instant: 20 },
    { name: "Apr", personalized: 45, instant: 15 },
    { name: "May", personalized: 35, instant: 20 },
    { name: "Jun", personalized: 40, instant: 10 },
    { name: "Jul", personalized: 35, instant: 15 },
  ];

  // Weekly income data
  const lineData = [
    { name: "Mon", value: 30 },
    { name: "Tue", value: 35 },
    { name: "Wed", value: 25 },
    { name: "Thu", value: 45 },
    { name: "Fri", value: 20 },
    { name: "Sat", value: 35 },
    { name: "Sun", value: 45 },
  ];

  // Card status distribution data
  const pieData = [
    { name: "Active", value: 1500, color: "#15B79E" },
    { name: "Expired", value: 400, color: "#FFB020" },
    { name: "Inactive", value: 300, color: "#5048E5" },
    { name: "Blocked", value: 200, color: "#6366F1" },
    { name: "Lost", value: 50, color: "#D14343" },
  ];

  // Recent card requests data
  const requestsData = [
    { branch: "Corporate", type: "Instant", quantity: "10", status: "Ready", action: "View" },
    { branch: "Corporate", type: "Personalized", quantity: "5", status: "In Progress", action: "View" },
    { branch: "Corporate", type: "Personalized", quantity: "8", status: "Acknowledged", action: "View" },
    { branch: "Corporate", type: "Instant", quantity: "12", status: "Pending", action: "View" },
  ];

  const statusClasses = {
    "Ready": "bg-green-100 text-green-600",
    "In Progress": "bg-blue-100 text-blue-600",
    "Acknowledged": "bg-indigo-100 text-indigo-600",
    "Pending": "bg-gray-100 text-gray-600"
  };

  const navItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: Users, label: "Branches" },
    { icon: Users, label: "Roles" },
    { icon: Users, label: "Users" },
    { icon: CreditCard, label: "Card Scheme" },
    { icon: File, label: "Card Profile" },
    { icon: File, label: "Card Request" },
    { icon: Shield, label: "Stock" },
    { icon: CreditCard, label: "Cards" },
    { icon: CreditCard, label: "Block/Unblock Card" },
    { icon: List, label: "Authorization List" },
    { icon: CheckSquare, label: "Authorization Queue" },
    { icon: Activity, label: "Trail" },
    { icon: User, label: "Account" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white flex flex-col">
        {/* Logo */}
        <div className="p-4 flex items-center">
          <div className="mr-2">
            <svg className="w-8 h-8" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="#15B79E" opacity="0.7" />
              <path d="M8 12L11 15L16 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="text-xl font-bold">LAPO</div>
        </div>

        {/* Menu Items */}
        <div className="mt-2 flex-1 overflow-y-auto">
          {navItems.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center px-4 py-3 ${item.active ? 'bg-blue-800' : 'hover:bg-blue-800'}`}
            >
              <item.icon size={18} className="mr-3" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="p-4 text-xs text-gray-400">
          <div>POWERED BY</div>
          <div className="font-semibold text-blue-400">SQUARETEC</div>
        </div>

        {/* Logout */}
        <div className="p-4 flex items-center hover:bg-blue-800 cursor-pointer">
          <LogOut size={18} className="mr-3" />
          <span>Logout</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-white shadow-sm">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center">
              <div className="flex items-center">
                <Menu size={20} className="mr-3 text-gray-500" />
                <span className="font-medium">Dashboard</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Search" 
                  className="bg-gray-100 pl-9 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-500" />
              </div>
              <Bell className="h-5 w-5 text-gray-500" />
              <User className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-6">
          {/* Welcome Message */}
          <div className="flex justify-between items-center mb-2">
            <div>
              <h2 className="text-lg font-medium">Hi Nazeer, what would you like to do today?</h2>
              <p className="text-sm text-gray-500">Last login: 20/11/2024, 13:20:49</p>
            </div>
            <div className="flex items-center text-sm">
              <div className="mr-4 px-3 py-1 bg-gray-100 rounded-lg flex items-center">
                <span>Today</span>
              </div>
              <div className="text-gray-500">11 Nov 2024</div>
            </div>
          </div>

          {/* Quick Access */}
          <div className="mb-6">
            <h3 className="text-md font-medium mb-4">Your Quick Access</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                  <CreditCard size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Manage a Card</div>
                </div>
                <ArrowRight size={16} className="text-blue-600" />
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                  <CreditCard size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Issue Instant Card</div>
                </div>
                <ArrowRight size={16} className="text-blue-600" />
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                  <CreditCard size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Issue Personalized Card</div>
                </div>
                <ArrowRight size={16} className="text-blue-600" />
              </div>
              <div className="bg-white rounded-lg shadow-sm p-4 flex items-center">
                <div className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                  <CreditCard size={20} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium">Review Card Requests</div>
                </div>
                <ArrowRight size={16} className="text-blue-600" />
              </div>
            </div>
          </div>

          {/* Analytics Section */}
          <h3 className="text-md font-medium mb-4">Analytics</h3>
          
          {/* Card Stats */}
          <div className="grid grid-cols-4 gap-6 mb-6">
            {/* Total Active Cards */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <div className="w-3 h-3 rounded-sm bg-green-500 mr-2"></div>
                <span>Total Active Cards</span>
              </div>
              <div className="text-2xl font-bold mb-1">26,478</div>
              <div className="flex items-center text-xs">
                <span className="text-green-500 font-medium flex items-center mr-2">
                  <ChevronUp size={14} />
                  +10%
                </span>
                <span className="text-gray-500">this month</span>
              </div>
            </div>

            {/* Total Personalized Cards */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <div className="w-3 h-3 rounded-sm bg-pink-500 mr-2"></div>
                <span>Total Personalized Cards</span>
              </div>
              <div className="text-2xl font-bold mb-1">15,703</div>
              <div className="flex items-center text-xs">
                <span className="text-green-500 font-medium flex items-center mr-2">
                  <ChevronUp size={14} />
                  +8.5%
                </span>
                <span className="text-gray-500">this month</span>
              </div>
            </div>

            {/* Today's Revenue */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <div className="w-3 h-3 rounded-sm bg-blue-500 mr-2"></div>
                <span>Today's Revenue</span>
              </div>
              <div className="text-2xl font-bold mb-1">₦9.3M</div>
              <div className="flex items-center text-xs">
                <span className="text-green-500 font-medium flex items-center mr-2">
                  <ChevronUp size={14} />
                  +6%
                </span>
                <span className="text-gray-500">vs yesterday</span>
              </div>
            </div>

            {/* Pending Requests */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-center text-xs text-gray-500 mb-1">
                <div className="w-3 h-3 rounded-sm bg-yellow-500 mr-2"></div>
                <span>Pending Requests</span>
              </div>
              <div className="text-2xl font-bold mb-1">38</div>
              <div className="flex items-center text-xs">
                <span className="text-orange-500 font-medium mr-2">
                  5 require attention
                </span>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Monthly Issuance */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium">Monthly Issuance</h4>
                <ExternalLink size={16} className="text-gray-400" />
              </div>
              <div className="h-64">
                <BarChart width={500} height={220} data={barData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Bar dataKey="personalized" fill="#8884d8" barSize={20} radius={[4, 4, 0, 0]} />
                  <Bar dataKey="instant" fill="#0047AB" barSize={20} radius={[4, 4, 0, 0]} />
                </BarChart>
              </div>
              <div className="flex justify-center mt-2">
                <div className="flex items-center mr-4">
                  <div className="w-3 h-3 rounded-full bg-blue-300 mr-2"></div>
                  <span className="text-xs text-gray-600">Personalized</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                  <span className="text-xs text-gray-600">Instant</span>
                </div>
              </div>
            </div>

            {/* Recent Card Requests */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium">Recent Card Requests</h4>
                <ExternalLink size={16} className="text-gray-400" />
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="text-xs text-gray-500 text-left">
                      <th className="pb-2 font-medium">Branch</th>
                      <th className="pb-2 font-medium">Card Type</th>
                      <th className="pb-2 font-medium">Quantity</th>
                      <th className="pb-2 font-medium">Status</th>
                      <th className="pb-2 font-medium">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {requestsData.map((request, index) => (
                      <tr key={index} className="text-sm">
                        <td className="py-2">{request.branch}</td>
                        <td className="py-2">{request.type}</td>
                        <td className="py-2">{request.quantity}</td>
                        <td className="py-2">
                          <span className={`px-2 py-1 rounded-md text-xs ${statusClasses[request.status]}`}>
                            {request.status}
                          </span>
                        </td>
                        <td className="py-2">
                          <button className="text-blue-500 hover:text-blue-700">
                            {request.action}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Charts Section Row 2 */}
          <div className="grid grid-cols-2 gap-6">
            {/* This Week's Income */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium">This Week's Income</h4>
                <ExternalLink size={16} className="text-gray-400" />
              </div>
              <div className="h-64">
                <LineChart width={500} height={220} data={lineData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#15B79E" 
                    strokeWidth={2} 
                    dot={false} 
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </div>
            </div>

            {/* Card Status Distribution */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-medium">Card Status Distribution</h4>
                <ExternalLink size={16} className="text-gray-400" />
              </div>
              <div className="flex items-center justify-center h-64">
                <div className="relative">
                  <PieChart width={220} height={220}>
                    <Pie
                      data={pieData}
                      cx={110}
                      cy={110}
                      innerRadius={70}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-xs text-gray-500">Total Cards</div>
                    <div className="text-2xl font-bold">2,450</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center flex-wrap mt-2">
                {pieData.map((entry, index) => (
                  <div key={index} className="flex items-center mr-4 mb-1">
                    <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: entry.color }}></div>
                    <span className="text-xs text-gray-600">{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}