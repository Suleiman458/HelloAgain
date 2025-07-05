import { 
  UsersIcon, 
  CalendarIcon, 
  BellIcon, 
  ChartBarIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  EllipsisVerticalIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon
} from '@heroicons/react/24/outline'

const mockClients = [
  { 
    id: 1, 
    name: 'John Smith', 
    phone: '+1 (555) 123-4567', 
    lastAppointment: '2024-01-15', 
    nextAppointment: '2024-02-15',
    status: 'active',
    reminderStatus: 'sent',
    preferredCut: 'Fade',
    totalVisits: 12,
    totalSpent: 480
  },
  { 
    id: 2, 
    name: 'Mike Johnson', 
    phone: '+1 (555) 234-5678', 
    lastAppointment: '2024-01-10', 
    nextAppointment: null,
    status: 'needs-reminder',
    reminderStatus: 'pending',
    preferredCut: 'Buzz Cut',
    totalVisits: 8,
    totalSpent: 320
  },
  { 
    id: 3, 
    name: 'David Wilson', 
    phone: '+1 (555) 345-6789', 
    lastAppointment: '2024-01-05', 
    nextAppointment: null,
    status: 'needs-reminder',
    reminderStatus: 'failed',
    preferredCut: 'Pompadour',
    totalVisits: 15,
    totalSpent: 750
  },
  { 
    id: 4, 
    name: 'Robert Brown', 
    phone: '+1 (555) 456-7890', 
    lastAppointment: '2024-01-20', 
    nextAppointment: '2024-02-20',
    status: 'active',
    reminderStatus: 'sent',
    preferredCut: 'Undercut',
    totalVisits: 6,
    totalSpent: 240
  },
]

const stats = [
  { name: 'Total Revenue', value: '$12,450', change: '+18%', icon: CurrencyDollarIcon, color: 'bg-green-500' },
  { name: 'This Month', value: '$2,340', change: '+12%', icon: ArrowTrendingUpIcon, color: 'bg-blue-500' },
  { name: 'Avg. Appointment', value: '$45', change: '+5%', icon: BanknotesIcon, color: 'bg-purple-500' },
  { name: 'Response Rate', value: '78%', change: '+5%', icon: ChartBarIcon, color: 'bg-yellow-500' },
]

const upcomingAppointments = [
  { id: 1, client: 'John Smith', service: 'Haircut & Beard Trim', date: '2024-02-15', time: '2:00 PM', barber: 'Tony', price: 35 },
  { id: 2, client: 'Robert Brown', service: 'Haircut', date: '2024-02-20', time: '3:30 PM', barber: 'Mike', price: 25 },
  { id: 3, client: 'Alex Davis', service: 'Full Service', date: '2024-02-18', time: '1:00 PM', barber: 'Tony', price: 45 },
]

const recentReminders = [
  { id: 1, client: 'Mike Johnson', message: 'Hey Mike! It\'s been a while since your last cut. We have openings today at 4pm!', status: 'sent', date: '2024-02-10' },
  { id: 2, client: 'David Wilson', message: 'Hi David! Time for a fresh cut? Book your appointment now!', status: 'failed', date: '2024-02-09' },
  { id: 3, client: 'James Lee', message: 'James, your preferred barber Tony has availability this week!', status: 'sent', date: '2024-02-08' },
]

const monthlyRevenue = [
  { month: 'Jan', revenue: 2100, appointments: 42 },
  { month: 'Feb', revenue: 2340, appointments: 47 },
  { month: 'Mar', revenue: 1980, appointments: 39 },
  { month: 'Apr', revenue: 2450, appointments: 49 },
  { month: 'May', revenue: 2800, appointments: 56 },
  { month: 'Jun', revenue: 3150, appointments: 63 },
]

const topServices = [
  { name: 'Haircut', revenue: 4200, appointments: 84, avgPrice: 50 },
  { name: 'Haircut & Beard', revenue: 3150, appointments: 45, avgPrice: 70 },
  { name: 'Beard Trim', revenue: 1200, appointments: 40, avgPrice: 30 },
  { name: 'Kids Cut', revenue: 900, appointments: 30, avgPrice: 30 },
]

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Manage your clients and automated reminders</p>
            </div>
            <div className="flex space-x-3">
              <button className="btn-secondary">
                <PlusIcon className="h-4 w-4 mr-2" />
                Add Client
              </button>
              <button className="btn-primary">
                Send Reminders
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <div key={stat.name} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`p-3 rounded-lg ${stat.color} text-white`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Client List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-900">Client Management</h2>
                  <div className="flex space-x-2">
                    <div className="relative">
                      <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search clients..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <button className="p-2 text-gray-400 hover:text-gray-600">
                      <FunnelIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Client
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Visit
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Next Appointment
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Total Spent
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {mockClients.map((client) => (
                      <tr key={client.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{client.name}</div>
                            <div className="text-sm text-gray-500">{client.phone}</div>
                            <div className="text-xs text-gray-400">{client.preferredCut} • {client.totalVisits} visits</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{client.lastAppointment}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">
                            {client.nextAppointment ? client.nextAppointment : 'No appointment'}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">${client.totalSpent}</div>
                          <div className="text-xs text-gray-500">${Math.round(client.totalSpent / client.totalVisits)} avg</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center space-x-2">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              client.status === 'active' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {client.status === 'active' ? 'Active' : 'Needs Reminder'}
                            </span>
                            {client.reminderStatus === 'sent' && (
                              <CheckCircleIcon className="h-4 w-4 text-green-500" />
                            )}
                            {client.reminderStatus === 'pending' && (
                              <ClockIcon className="h-4 w-4 text-yellow-500" />
                            )}
                            {client.reminderStatus === 'failed' && (
                              <ExclamationTriangleIcon className="h-4 w-4 text-red-500" />
                            )}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button className="text-primary-600 hover:text-primary-900">
                              View
                            </button>
                            <button className="text-primary-600 hover:text-primary-900">
                              Send Reminder
                            </button>
                            <button className="text-gray-400 hover:text-gray-600">
                              <EllipsisVerticalIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Revenue Chart */}
            <div className="bg-white rounded-lg shadow-sm mt-8 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Revenue</h3>
              <div className="flex items-end space-x-2 h-32">
                {monthlyRevenue.map((month, index) => (
                  <div key={month.month} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-primary-500 rounded-t"
                      style={{ height: `${(month.revenue / 3500) * 100}%` }}
                    ></div>
                    <div className="text-xs text-gray-500 mt-2">{month.month}</div>
                    <div className="text-xs font-medium text-gray-900">${month.revenue}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Appointments */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Appointments</h3>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="border-l-4 border-primary-500 pl-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-sm font-medium text-gray-900">{appointment.client}</p>
                        <p className="text-xs text-gray-500">{appointment.service}</p>
                        <p className="text-xs text-gray-400">{appointment.barber}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-gray-900">{appointment.date}</p>
                        <p className="text-xs text-gray-500">{appointment.time}</p>
                        <p className="text-xs font-medium text-green-600">${appointment.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Value:</span>
                  <span className="font-medium text-gray-900">${upcomingAppointments.reduce((sum, apt) => sum + apt.price, 0)}</span>
                </div>
              </div>
            </div>

            {/* Top Services */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Services</h3>
              <div className="space-y-4">
                {topServices.map((service, index) => (
                  <div key={service.name} className="flex justify-between items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900">{service.name}</p>
                      <p className="text-xs text-gray-500">{service.appointments} appointments</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">${service.revenue}</p>
                      <p className="text-xs text-gray-500">${service.avgPrice} avg</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Reminders */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Reminders</h3>
              <div className="space-y-4">
                {recentReminders.map((reminder) => (
                  <div key={reminder.id} className="border rounded-lg p-3">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-sm font-medium text-gray-900">{reminder.client}</p>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        reminder.status === 'sent' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {reminder.status}
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mb-2">{reminder.message}</p>
                    <p className="text-xs text-gray-400">{reminder.date}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 