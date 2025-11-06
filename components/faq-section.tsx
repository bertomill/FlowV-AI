"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqs = [
    {
      question: "What is AI automation and how can it help my business?",
      answer:
        "AI automation uses artificial intelligence to streamline repetitive tasks, analyze data, and make intelligent decisions without human intervention. It helps businesses save time, reduce errors, increase productivity, and scale operations efficiently. From customer service chatbots to automated data processing, AI automation transforms how your business operates.",
    },
    {
      question: "How long does it take to implement an AI automation solution?",
      answer:
        "Implementation timelines vary based on project complexity. Simple automations like chatbots or email workflows can be deployed in 2-4 weeks, while comprehensive custom AI systems may take 2-3 months. We provide a detailed timeline during our initial consultation and work in agile sprints to deliver value incrementally.",
    },
    {
      question: "Do I need technical expertise to use Flow V's AI solutions?",
      answer:
        "Not at all! We design our AI solutions to be user-friendly and intuitive. We provide comprehensive training, documentation, and ongoing support to ensure your team can effectively use and manage the automation systems. Our goal is to empower your team, not create dependency.",
    },
    {
      question: "What types of businesses can benefit from AI automation?",
      answer:
        "Virtually any business can benefit from AI automation. We've helped e-commerce stores optimize inventory, marketing agencies automate content creation, professional services firms streamline client onboarding, and more. If you have repetitive processes, data to analyze, or customer interactions to manage, AI automation can help.",
    },
    {
      question: "How much does AI automation cost?",
      answer:
        "Costs vary based on your specific needs, complexity, and scale. We offer flexible pricing from starter packages for small businesses to enterprise solutions for larger organizations. Most clients see ROI within 3-6 months through time savings and efficiency gains. Contact us for a free consultation and custom quote.",
    },
    {
      question: "Will AI automation replace my employees?",
      answer:
        "No, AI automation is designed to augment your team, not replace them. It handles repetitive, time-consuming tasks so your employees can focus on strategic, creative, and high-value work that requires human judgment and creativity. Most of our clients use AI to empower their teams to do more meaningful work.",
    },
    {
      question: "Is my data secure with Flow V's AI solutions?",
      answer:
        "Absolutely. We prioritize data security and privacy in all our solutions. We use industry-standard encryption, secure cloud infrastructure, and comply with relevant data protection regulations (GDPR, CCPA, etc.). Your data remains your property, and we can implement on-premise solutions for sensitive industries.",
    },
    {
      question: "What happens after implementation? Do you provide ongoing support?",
      answer:
        "Yes! We provide comprehensive post-implementation support including monitoring, maintenance, updates, and optimization. We offer flexible support packages ranging from basic maintenance to dedicated account management. As your business evolves, we help scale and adapt your AI systems to meet new needs.",
    },
  ]

  return (
    <section id="faq" className="relative overflow-hidden pb-120 pt-24">
      {/* Background blur effects */}
      <div className="bg-primary/20 absolute top-1/2 -right-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl"></div>
      <div className="bg-primary/20 absolute top-1/2 -left-20 z-[-1] h-64 w-64 rounded-full opacity-80 blur-3xl"></div>

      <div className="z-10 container mx-auto px-4">
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="border-primary/40 text-primary inline-flex items-center gap-2 rounded-full border px-3 py-1 uppercase">
            <span>✶</span>
            <span className="text-sm">Faqs</span>
          </div>
        </motion.div>

        <motion.h2
          className="mx-auto mt-6 max-w-xl text-center text-4xl font-medium md:text-[54px] md:leading-[60px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Questions? We've got{" "}
          <span className="bg-gradient-to-b from-foreground via-rose-200 to-primary bg-clip-text text-transparent">
            answers
          </span>
        </motion.h2>

        <div className="mx-auto mt-12 flex max-w-xl flex-col gap-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="from-secondary/40 to-secondary/10 rounded-2xl border border-white/10 bg-gradient-to-b p-6 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset] transition-all duration-300 hover:border-white/20 cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleItem(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  toggleItem(index)
                }
              }}
              {...(index === faqs.length - 1 && { "data-faq": faq.question })}
            >
              <div className="flex items-start justify-between">
                <h3 className="m-0 font-medium pr-4">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: openItems.includes(index) ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className=""
                >
                  {openItems.includes(index) ? (
                    <Minus className="text-primary flex-shrink-0 transition duration-300" size={24} />
                  ) : (
                    <Plus className="text-primary flex-shrink-0 transition duration-300" size={24} />
                  )}
                </motion.div>
              </div>
              <AnimatePresence>
                {openItems.includes(index) && (
                  <motion.div
                    className="mt-4 text-muted-foreground leading-relaxed overflow-hidden"
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 16 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                      opacity: { duration: 0.2 },
                    }}
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
