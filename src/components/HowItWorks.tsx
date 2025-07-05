import { 
  ChatBubbleLeftRightIcon, 
  UserPlusIcon, 
  CogIcon 
} from '@heroicons/react/24/outline'

const steps = [
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Connect WhatsApp',
    description: 'Link your WhatsApp Business account in just a few clicks. We handle all the technical setup.',
    color: 'bg-green-100 text-green-600'
  },
  {
    icon: UserPlusIcon,
    title: 'Add Clients',
    description: 'Import your existing client list or add new clients manually. We sync with your current system.',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    icon: CogIcon,
    title: 'Automate Messages',
    description: 'Set up smart reminders that automatically reach out to clients who haven\'t visited in a while.',
    color: 'bg-purple-100 text-purple-600'
  }
]

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our simple 3-step process
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-6">
                <div className={`p-4 rounded-full ${step.color}`}>
                  <step.icon className="h-8 w-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center items-center space-x-4 text-gray-400">
            {steps.map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-16 h-0.5 bg-gray-300 mx-2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 