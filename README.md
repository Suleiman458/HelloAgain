# Barber Reminder Pro

A modern SaaS web application that helps barbers send automated WhatsApp reminders to clients who haven't visited in a while.

## 🚀 Features

### Landing Page
- **Hero Section**: "Bring clients back with smart reminders"
- **How It Works**: 3-step process (Connect WhatsApp → Add Clients → Automate Messages)
- **Features Section**: Client Dashboard, Smart Reminders, Real-time WhatsApp integration
- **Call to Action**: Join Waitlist and Book Demo buttons
- **Responsive Design**: Mobile-friendly with clean, modern UI

### Dashboard (Mock)
- **Client Management**: View and manage client information
- **Statistics**: Key metrics and analytics
- **Reminder System**: Track clients who need reminders
- **Responsive Table**: Clean data presentation

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Heroicons & Lucide React
- **TypeScript**: Full type safety
- **Database**: Prisma ORM (configured for SQLite/PostgreSQL)

## 📁 Project Structure

```
src/
├── app/
│   ├── dashboard/          # Mock dashboard page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Landing page
├── components/
│   ├── Navbar.tsx         # Navigation component
│   ├── Hero.tsx           # Hero section
│   ├── HowItWorks.tsx     # Process explanation
│   ├── Features.tsx       # Features showcase
│   └── Footer.tsx         # Footer component
prisma/
└── schema.prisma          # Database schema
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd barber-appointment-optimisation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   echo DATABASE_URL="file:./dev.db" > .env
   ```

4. **Run database migrations** (optional)
   ```bash
   npx prisma migrate dev
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Pages

- **Home** (`/`): Landing page with all sections
- **Dashboard** (`/dashboard`): Mock dashboard for client management

## 🎨 Design Features

- **Responsive Design**: Works on all device sizes
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Smooth Animations**: Hover effects and transitions
- **Accessibility**: Proper semantic HTML and ARIA labels
- **Performance**: Optimized with Next.js

## 🔧 Customization

### Colors
The primary color scheme can be modified in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... more shades
  }
}
```

### Components
All components are modular and can be easily customized:
- Update text content in component files
- Modify styling using Tailwind classes
- Add new sections by creating new components

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

## 📈 Future Enhancements

- [ ] User authentication system
- [ ] Real WhatsApp Business API integration
- [ ] Stripe payment processing
- [ ] Advanced analytics dashboard
- [ ] Multi-language support
- [ ] Mobile app (React Native)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support, email hello@barberreminderpro.com or create an issue in this repository. 