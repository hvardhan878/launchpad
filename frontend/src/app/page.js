"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle2,
  Globe2,
  Zap,
  Shield,
  Users,
  Check,
  Star
} from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-bold text-xl">LaunchPad</div>
          <div className="flex gap-6">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Pricing</Button>
            <Button variant="ghost">About</Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4">✨ Your workspace, revolutionized</Badge>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
            Work smarter, not harder
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Transform your workflow with our all-in-one platform. Boost productivity
            and collaborate seamlessly with your team.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="gap-2">
              Start Free Trial <ArrowRight size={20} />
            </Button>
            <Button size="lg" variant="outline">
              Watch Demo
            </Button>
          </div>
          <div className="mt-12">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              alt="Platform Dashboard"
              className="rounded-xl shadow-2xl border"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything you need to succeed
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <feature.icon className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">Pricing Plans</Badge>
            <h2 className="text-4xl font-bold mb-4">Choose your perfect plan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Simple, transparent pricing that grows with your business. All plans include 14-day free trial.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Starter Plan */}
            <Card className="relative p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Starter</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">$29</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mt-4">Perfect for small teams just getting started</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {[
                    "Up to 5 team members",
                    "Basic analytics dashboard",
                    "24/7 email support",
                    "1GB storage space",
                    "Basic integrations"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="text-green-500 h-5 w-5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full" variant="outline">
                  Start Free Trial
                </Button>
              </div>
            </Card>

            {/* Pro Plan */}
            <Card className="relative p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-purple-200 bg-gradient-to-b from-white to-purple-50">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <Badge className="bg-purple-600 text-white">
                  <Star className="h-4 w-4 mr-1" /> Most Popular
                </Badge>
              </div>

              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Pro</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">$99</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mt-4">For growing teams needing more power</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {[
                    "Up to 20 team members",
                    "Advanced analytics & reporting",
                    "Priority 24/7 support",
                    "10GB storage space",
                    "Advanced integrations",
                    "Custom workflows",
                    "API access"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="text-green-500 h-5 w-5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Start Free Trial
                </Button>
              </div>
            </Card>

            {/* Enterprise Plan */}
            <Card className="relative p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold">$299</span>
                    <span className="text-gray-600">/month</span>
                  </div>
                  <p className="text-gray-600 mt-4">For large organizations with specific needs</p>
                </div>

                <div className="space-y-4 mb-8 flex-grow">
                  {[
                    "Unlimited team members",
                    "Custom analytics solutions",
                    "Dedicated account manager",
                    "Unlimited storage",
                    "Custom integrations",
                    "Advanced security",
                    "SLA guarantee",
                    "Custom deployment options"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="text-green-500 h-5 w-5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600">
              All plans include unlimited updates and basic support. Need something different?{" "}
              <Button variant="link" className="text-purple-600 font-semibold">
                Contact us
              </Button>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold text-lg mb-4">LaunchPad</h4>
              <p className="text-gray-600">
                Making work better for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2">
                <li>Features</li>
                <li>Pricing</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>Privacy</li>
                <li>Terms</li>
                <li>Security</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

const features = [
  {
    icon: Globe2,
    title: "Global Collaboration",
    description: "Work with your team from anywhere in the world with real-time updates."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing fast performance with our optimized platform."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security to keep your data safe and compliant."
  },
  {
    icon: Users,
    title: "Team Management",
    description: "Easily manage teams, roles, and permissions in one place."
  },
  {
    icon: CheckCircle2,
    title: "Task Tracking",
    description: "Keep projects on track with advanced task management features."
  },
  {
    icon: Globe2,
    title: "Analytics",
    description: "Get insights into your team's performance with detailed analytics."
  }
]

const pricingTiers = [
  {
    name: "Starter",
    price: "29",
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "24/7 support",
      "1GB storage"
    ]
  },
  {
    name: "Professional",
    price: "99",
    featured: true,
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "Priority support",
      "10GB storage",
      "Custom integrations"
    ]
  },
  {
    name: "Enterprise",
    price: "299",
    features: [
      "Unlimited team members",
      "Custom analytics",
      "Dedicated support",
      "Unlimited storage",
      "API access",
      "Custom deployment"
    ]
  }
]