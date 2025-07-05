import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary-50 to-blue-50 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Bring clients back with{' '}
            <span className="text-primary-600">smart reminders</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Automate your barber shop client retention with intelligent WhatsApp reminders. 
            Never lose a client again with our smart notification system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary flex items-center justify-center">
              Join Waitlist
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </button>
            <button className="btn-secondary">
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 