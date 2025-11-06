"use client"

import { motion } from "framer-motion"
import { Code, Sparkles, Bot, ArrowRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { geist } from "@/lib/fonts"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Code,
    title: "Web Page Buildout",
    description: "Beautiful, responsive websites built with modern technologies",
    features: [
      "Custom design & development",
      "Mobile-first responsive design",
      "SEO optimization",
      "Fast loading performance",
      "Modern frameworks (Next.js, React)",
      "Ongoing support & maintenance",
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
    borderGradient: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-500",
  },
  {
    icon: Sparkles,
    title: "Marketing Content",
    description: "Engaging content that converts visitors into customers",
    features: [
      "Copywriting & content strategy",
      "Social media content creation",
      "Email marketing campaigns",
      "Blog posts & articles",
      "Brand voice development",
      "Content calendar planning",
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
    borderGradient: "from-purple-500 to-pink-500",
    iconColor: "text-purple-500",
  },
  {
    icon: Bot,
    title: "AI Automations",
    description: "Intelligent automation solutions to streamline your business",
    features: [
      "Custom AI workflow automation",
      "Chatbot & virtual assistant development",
      "Data processing & analysis",
      "Integration with existing systems",
      "Natural language processing",
      "Predictive analytics & insights",
    ],
    gradient: "from-rose-500/20 to-orange-500/20",
    borderGradient: "from-rose-500 to-orange-500",
    iconColor: "text-rose-500",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full relative bg-black">
      {/* Background glow effect */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), #000000",
        }}
      />

      {/* Desktop Header */}
      <header className="sticky top-4 z-[9999] mx-auto hidden w-full max-w-3xl flex-row items-center justify-between self-start rounded-full bg-background/80 md:flex backdrop-blur-sm border border-border/50 shadow-lg px-4 py-2">
        <Link href="/" className="z-50 flex items-center justify-center gap-2">
          <img
            src="/flowV-logo.png"
            alt="Flow V"
            className="rounded-lg size-8 w-8"
          />
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/" className="font-medium transition-colors hover:text-foreground text-muted-foreground text-sm">
            Home
          </Link>
          <Link href="/services" className="font-medium transition-colors hover:text-foreground text-foreground text-sm">
            Services
          </Link>
          <Link
            href="/signup"
            className="rounded-md font-bold relative hover:-translate-y-0.5 transition duration-200 inline-block text-center bg-gradient-to-b from-primary to-primary/80 text-primary-foreground shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset] px-4 py-2 text-sm"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Mobile Header */}
      <header className="sticky top-4 z-[9999] mx-4 flex w-auto flex-row items-center justify-between rounded-full bg-background/80 backdrop-blur-sm border border-border/50 shadow-lg md:hidden px-4 py-3">
        <Link href="/" className="flex items-center justify-center gap-2">
          <img
            src="/flowV-logo.png"
            alt="Flow V"
            className="rounded-lg size-7 w-7"
          />
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/" className="text-sm text-muted-foreground">Home</Link>
          <Link href="/services" className="text-sm text-foreground">Services</Link>
        </div>
      </header>

      <div className="container mx-auto px-4 py-32 relative z-10">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <h1
            className={cn(
              "from-foreground/60 via-foreground to-foreground/60 dark:from-muted-foreground/55 dark:via-foreground dark:to-muted-foreground/55 bg-gradient-to-r bg-clip-text text-center text-4xl font-semibold tracking-tighter text-transparent sm:text-5xl xl:text-6xl/none mb-6",
              geist.className,
            )}
          >
            Our Services
          </h1>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Comprehensive solutions to transform your business with cutting-edge technology and creative excellence
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div
                className={cn(
                  "relative h-full rounded-2xl border border-border/50 bg-background/50 backdrop-blur-sm p-8 transition-all duration-300 hover:border-border hover:shadow-2xl",
                  "hover:bg-background/80"
                )}
              >
                {/* Gradient background overlay */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    service.gradient
                  )}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className={cn("mb-6 inline-flex p-3 rounded-xl bg-background/80 border border-border/50", service.iconColor)}>
                    <service.icon className="w-8 h-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">{service.title}</h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + idx * 0.05 }}
                      >
                        <Check className="w-4 h-4 mt-0.5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={cn(
                      "w-full group/btn bg-gradient-to-b shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
                      service.borderGradient.includes("blue") && "from-blue-500 to-cyan-600",
                      service.borderGradient.includes("purple") && "from-purple-500 to-pink-600",
                      service.borderGradient.includes("rose") && "from-rose-500 to-orange-600"
                    )}
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.6 }}
        >
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-rose-500/10 to-orange-500/10 rounded-3xl border border-rose-500/20 p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how Flow V can help you achieve your goals with our tailored solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="bg-gradient-to-b from-rose-500 to-rose-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/">
                <Button size="lg" variant="secondary">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
