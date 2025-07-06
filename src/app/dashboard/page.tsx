'use client'

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
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import MonthlyRevenueChart from '@/components/MonthlyRevenueChart'
import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Fragment } from 'react'

const mockClients = [
  { 
    id: 1, 
    name: 'John Smith', 
    phone: '+44 7700 900123', 
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
    phone: '+44 7700 900234', 
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
    phone: '+44 7700 900345', 
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
    phone: '+44 7700 900456', 
    lastAppointment: '2024-01-20', 
    nextAppointment: '2024-02-20',
    status: 'active',
    reminderStatus: 'sent',
    preferredCut: 'Undercut',
    totalVisits: 6,
    totalSpent: 240
  },
]

const mockChats: Record<string, { sender: 'You' | 'Client', message: string, time: string }[]> = {
  'John Smith': [
    { sender: 'You', message: "Hey John, it's been a while since your last cut! We have an opening today at 4pm.", time: '09:00' },
    { sender: 'Client', message: 'Hi! Can I come at 5pm instead?', time: '09:05' },
    { sender: 'You', message: 'Absolutely, see you at 5pm!', time: '09:06' },
  ],
  'Mike Johnson': [
    { sender: 'You', message: 'Hi Mike, time for a fresh cut? Book your appointment now!', time: '10:00' },
    { sender: 'Client', message: "I'll check my schedule and let you know.", time: '10:10' },
  ],
  'David Wilson': [
    { sender: 'You', message: 'Hi David! We miss you at the shop. Want to book a slot this week?', time: '11:00' },
    { sender: 'Client', message: "I'll try to come by Friday.", time: '11:15' },
  ],
  'Robert Brown': [
    { sender: 'You', message: 'Hey Robert, your next appointment is on 2024-02-20. See you then!', time: '12:00' },
    { sender: 'Client', message: 'Thanks for the reminder!', time: '12:05' },
  ],
}

const stats = [
  { name: 'Total Revenue', value: '$12,450', change: '+18%', icon: CurrencyDollarIcon, color: 'bg-green-500' },
  { name: 'This Month', value: '$2,340', change: '+12%', icon: ArrowTrendingUpIcon, color: 'bg-blue-500' },
  { name: 'Avg. Appointment', value: '$45', change: '+5%', icon: BanknotesIcon, color: 'bg-purple-500' },
  { name: 'Response Rate', value: '78%', change: '+5%', icon: ChartBarIcon, color: 'bg-yellow-500' },
]

const upcomingAppointments = [
  { id: 1, client: 'John Smith', service: 'Haircut & Beard Trim', date: '2024-07-12', time: '2:00 PM', barber: 'Tony', price: 35 },
  { id: 2, client: 'Robert Brown', service: 'Haircut', date: '2024-07-12', time: '3:30 PM', barber: 'Mike', price: 25 },
  { id: 3, client: 'Alex Davis', service: 'Full Service', date: '2024-07-06', time: '1:00 PM', barber: 'Tony', price: 45 },
  { id: 4, client: 'Sarah Lee', service: 'Kids Cut', date: '2024-07-06', time: '10:00 AM', barber: 'Mike', price: 20 },
  { id: 5, client: 'Emily Clark', service: 'Beard Trim', date: '2024-07-06', time: '11:00 AM', barber: 'Tony', price: 15 },
  { id: 6, client: 'Chris Evans', service: 'Haircut', date: '2024-08-01', time: '9:00 AM', barber: 'Tony', price: 30 },
  { id: 7, client: 'Anna Bell', service: 'Full Service', date: '2024-08-01', time: '11:00 AM', barber: 'Mike', price: 50 },
  { id: 8, client: 'David Wilson', service: 'Pompadour', date: '2024-08-01', time: '2:00 PM', barber: 'Tony', price: 40 },
  { id: 9, client: 'Mike Johnson', service: 'Buzz Cut', date: '2024-08-02', time: '4:00 PM', barber: 'Mike', price: 20 },
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
  const [selectedClient, setSelectedClient] = useState(null as typeof mockClients[0] | null)
  const [showToast, setShowToast] = useState(false)
  const [toastMsg, setToastMsg] = useState('')
  const [view, setView] = useState<'table' | 'calendar'>('table')
  const [calendarDate, setCalendarDate] = useState<Date>(new Date())
  const [addClientModal, setAddClientModal] = useState(false)
  const [reminderModal, setReminderModal] = useState(false)
  const [clientForm, setClientForm] = useState({ name: '', phone: '', cut: '' })
  const [chatClient, setChatClient] = useState<null | typeof mockClients[0]>(null)
  const [search, setSearch] = useState('')
  const [filterOpen, setFilterOpen] = useState(false)
  const [statusFilter, setStatusFilter] = useState<'all' | 'active' | 'needs-reminder'>('all')

  function handleView(client: typeof mockClients[0]) {
    setSelectedClient(client)
  }
  function handleSendReminder(client: typeof mockClients[0]) {
    setToastMsg(`Reminder sent to ${client.name}`)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }

  function handleAddClientSubmit(e: React.FormEvent) {
    e.preventDefault()
    setAddClientModal(false)
    setToastMsg(`Client "${clientForm.name}" added! (demo)`)
    setShowToast(true)
    setClientForm({ name: '', phone: '', cut: '' })
    setTimeout(() => setShowToast(false), 2000)
  }
  function handleSendReminders() {
    setReminderModal(false)
    setToastMsg('Reminders sent! (demo)')
    setShowToast(true)
    setTimeout(() => setShowToast(false), 2000)
  }

  // Helper: get appointments for a given date
  function getAppointmentsForDate(date: Date) {
    const d = date.toISOString().slice(0, 10)
    return upcomingAppointments.filter(a => a.date === d)
  }

  // Filtered and searched clients
  const filteredClients = mockClients.filter(client => {
    const matchesSearch =
      client.name.toLowerCase().includes(search.toLowerCase()) ||
      client.phone.toLowerCase().includes(search.toLowerCase()) ||
      (client.preferredCut && client.preferredCut.toLowerCase().includes(search.toLowerCase()))
    const matchesStatus =
      statusFilter === 'all' ||
      (statusFilter === 'active' && client.status === 'active') ||
      (statusFilter === 'needs-reminder' && client.status === 'needs-reminder')
    return matchesSearch && matchesStatus
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-6 right-6 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
          {toastMsg}
        </div>
      )}
      {/* Client Detail Modal */}
      {selectedClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
              onClick={() => setSelectedClient(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Client Details</h2>
            <div className="mb-2"><span className="font-semibold">Name:</span> {selectedClient.name}</div>
            <div className="mb-2"><span className="font-semibold">Phone:</span> {selectedClient.phone}</div>
            <div className="mb-2"><span className="font-semibold">Preferred Cut:</span> {selectedClient.preferredCut}</div>
            <div className="mb-2"><span className="font-semibold">Total Visits:</span> {selectedClient.totalVisits}</div>
            <div className="mb-2"><span className="font-semibold">Total Spent:</span> ${selectedClient.totalSpent}</div>
            <div className="mb-2"><span className="font-semibold">Last Appointment:</span> {selectedClient.lastAppointment}</div>
            <div className="mb-2"><span className="font-semibold">Next Appointment:</span> {selectedClient.nextAppointment || 'No appointment'}</div>
            <div className="mt-6 flex justify-end">
              <button className="btn-primary" onClick={() => setSelectedClient(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Chat Modal */}
      {chatClient && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative flex flex-col">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
              onClick={() => setChatClient(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Chat with {chatClient.name}</h2>
            <div className="flex-1 overflow-y-auto mb-4 max-h-80">
              <div className="space-y-3">
                {(mockChats[chatClient.name] || []).map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`rounded-lg px-4 py-2 max-w-xs text-sm ${msg.sender === 'You' ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-900'}`}>
                      <div>{msg.message}</div>
                      <div className="text-xs text-gray-300 mt-1 text-right">{msg.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-end">
              <button className="btn-primary" onClick={() => setChatClient(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600">Manage your clients and automated reminders</p>
            </div>
            <div className="flex space-x-3">
              <button className="btn-secondary flex items-center" onClick={() => setAddClientModal(true)}>
                <PlusIcon className="h-4 w-4 mr-2" />
                Add Client
              </button>
              <button className="btn-primary" onClick={() => setReminderModal(true)}>
                Send Reminders
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Add Client Modal */}
      {addClientModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
              onClick={() => setAddClientModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Add Client</h2>
            <form onSubmit={handleAddClientSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" required className="mt-1 block w-full border rounded-lg px-3 py-2" value={clientForm.name} onChange={e => setClientForm(f => ({ ...f, name: e.target.value }))} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input type="text" required className="mt-1 block w-full border rounded-lg px-3 py-2" value={clientForm.phone} onChange={e => setClientForm(f => ({ ...f, phone: e.target.value }))} />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Preferred Cut</label>
                <input type="text" className="mt-1 block w-full border rounded-lg px-3 py-2" value={clientForm.cut} onChange={e => setClientForm(f => ({ ...f, cut: e.target.value }))} />
              </div>
              <div className="flex justify-end">
                <button type="button" className="btn-secondary mr-2" onClick={() => setAddClientModal(false)}>Cancel</button>
                <button type="submit" className="btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Send Reminders Modal */}
      {reminderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-2xl"
              onClick={() => setReminderModal(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">Send Reminders</h2>
            <p className="mb-6">Are you sure you want to send reminders to all clients who need them?</p>
            <div className="flex justify-end">
              <button className="btn-secondary mr-2" onClick={() => setReminderModal(false)}>Cancel</button>
              <button className="btn-primary" onClick={handleSendReminders}>Send</button>
            </div>
          </div>
        </div>
      )}
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

        {/* Toggle View */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">Client Management</h2>
          <div className="flex space-x-2">
            <button
              className={`px-4 py-2 rounded-lg border ${view === 'table' ? 'bg-primary-600 text-white' : 'bg-white text-primary-600 border-primary-600'} font-medium`}
              onClick={() => setView('table')}
            >
              Table View
            </button>
            <button
              className={`px-4 py-2 rounded-lg border ${view === 'calendar' ? 'bg-primary-600 text-white' : 'bg-white text-primary-600 border-primary-600'} font-medium`}
              onClick={() => setView('calendar')}
            >
              Calendar View
            </button>
          </div>
        </div>
        {/* Table or Calendar */}
        {view === 'table' ? (
          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="px-6 py-4 border-b border-gray-200 flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex space-x-2 relative">
                  <div className="relative w-full">
                    <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search clients..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent w-full"
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                    />
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600 relative" onClick={() => setFilterOpen(f => !f)}>
                    <FunnelIcon className="h-5 w-5" />
                    {filterOpen && (
                      <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                        <button
                          className={`block w-full text-left px-4 py-2 text-sm ${statusFilter === 'all' ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'}`}
                          onClick={() => { setStatusFilter('all'); setFilterOpen(false) }}
                        >
                          All Statuses
                        </button>
                        <button
                          className={`block w-full text-left px-4 py-2 text-sm ${statusFilter === 'active' ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'}`}
                          onClick={() => { setStatusFilter('active'); setFilterOpen(false) }}
                        >
                          Active
                        </button>
                        <button
                          className={`block w-full text-left px-4 py-2 text-sm ${statusFilter === 'needs-reminder' ? 'bg-primary-50 text-primary-700' : 'text-gray-700 hover:bg-gray-50'}`}
                          onClick={() => { setStatusFilter('needs-reminder'); setFilterOpen(false) }}
                        >
                          Needs Reminder
                        </button>
                      </div>
                    )}
                  </button>
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
                    {filteredClients.map((client) => (
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
                          <div className="flex space-x-4">
                            <button className="text-primary-600 hover:text-primary-900" onClick={() => handleView(client)}>
                              View
                            </button>
                            <button className="text-primary-600 hover:text-primary-900" onClick={() => handleSendReminder(client)}>
                              Send Reminder
                            </button>
                            <button className="text-primary-600 hover:text-primary-900" onClick={() => setChatClient(client)}>
                              View Chat
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
          </div>
        ) : (
          <div className="mb-8 bg-white rounded-lg shadow-sm p-6">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Calendar on the left */}
              <div className="w-full md:w-1/2 xl:w-1/3">
                <Calendar
                  onChange={(value) => setCalendarDate(value as Date)}
                  value={calendarDate}
                  selectRange={false}
                  tileClassName={({ date, view }) => {
                    if (view === 'month') {
                      const hasApps = getAppointmentsForDate(date).length > 0
                      return hasApps ? 'relative calendar-has-appointments' : ''
                    }
                    return ''
                  }}
                  tileContent={({ date, view }) => {
                    if (view === 'month') {
                      const apps = getAppointmentsForDate(date)
                      if (apps.length > 0) {
                        return (
                          <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary-500"></span>
                        )
                      }
                    }
                    return null
                  }}
                  onClickDay={(date) => setCalendarDate(date as Date)}
                  className="!border-0 !rounded-lg !shadow-sm calendar-custom"
                />
              </div>
              {/* Appointment details on the right */}
              <div className="w-full md:w-1/2 xl:w-2/3 flex flex-col">
                <h2 className="text-xl font-bold mb-4">Appointments on {calendarDate.toISOString().slice(0, 10)}</h2>
                <div className="flex-1 overflow-y-auto">
                  {getAppointmentsForDate(calendarDate).length === 0 ? (
                    <div className="text-gray-400 text-lg">No appointments for this day.</div>
                  ) : (
                    <ul className="divide-y divide-gray-200">
                      {getAppointmentsForDate(calendarDate).map(app => (
                        <li key={app.id} className="py-4">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div>
                              <div className="font-semibold text-primary-700 text-lg">{app.client}</div>
                              <div className="text-sm text-gray-600">{app.service} at {app.time} ({app.barber})</div>
                            </div>
                            <div className="text-right mt-2 md:mt-0">
                              <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full font-semibold text-sm">${app.price}</span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <style jsx global>{`
              .calendar-custom {
                font-family: inherit;
              }
              .calendar-has-appointments {
                background: #f0f9ff !important;
                border-radius: 0.5rem !important;
              }
              .react-calendar__tile--active {
                background: #0ea5e9 !important;
                color: #fff !important;
              }
              .react-calendar__tile {
                border-radius: 0.5rem !important;
                transition: background 0.2s;
              }
              .react-calendar__tile:enabled:hover {
                background: #bae6fd !important;
              }
            `}</style>
          </div>
        )}

        {/* Tiles below table in a responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          <div className="bg-white rounded-lg shadow-sm p-6 w-full flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Revenue</h3>
            <MonthlyRevenueChart data={monthlyRevenue} />
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 w-full flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Services</h3>
            <div className="space-y-4 flex-1">
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
          <div className="bg-white rounded-lg shadow-sm p-6 w-full flex flex-col">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Reminders</h3>
            <div className="space-y-4 flex-1">
              {recentReminders.map((reminder) => (
                <div key={reminder.id} className="border rounded-lg p-4 flex flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-gray-900">{reminder.client}</span>
                    <span className={`px-2 py-1 text-xs rounded-full font-semibold ${
                      reminder.status === 'sent'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {reminder.status}
                    </span>
                  </div>
                  <div className="text-sm text-gray-700">{reminder.message}</div>
                  <div className="text-xs text-gray-400 mt-1">{reminder.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 