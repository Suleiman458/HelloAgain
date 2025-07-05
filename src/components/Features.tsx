import { 
  UsersIcon, 
  BellIcon, 
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CogIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: UsersIcon,
    title: 'Client Dashboard',
    description: 'Manage all your clients in one place. Track appointments, preferences, and communication history.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: BellIcon,
    title: 'Smart Reminders',
    description: 'Automated reminders that reach out to clients who haven\'t visited in a while. Increase retention rates.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'WhatsApp Integration',
    description: 'Direct WhatsApp Business integration. Send personalized messages automatically.',
    color: 'bg-purple-100 text-purple-600'
  },
  {
    icon: ChartBarIcon,
    title: 'Analytics & Reports',
    description: 'Track your success with detailed analytics. See which reminders work best.',
    color: 'bg-orange-100 text-orange-600'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Secure & Compliant',
    description: 'GDPR compliant and secure. Your client data is protected with enterprise-grade security.',
    color: 'bg-red-100 text-red-600'
  },
  {
    icon: CogIcon,
    title: 'Easy Setup',
    description: 'Get started in minutes. No technical knowledge required. We handle all the complexity.',
    color: 'bg-indigo-100 text-indigo-600'
  }
]

export default function Features() {
  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to automate your client retention and grow your barber shop
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className={`p-3 rounded-lg ${feature.color} w-fit mb-4`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary">
            Start Free Trial
          </button>
        </div>
      </div>
    </section>
  )
} 