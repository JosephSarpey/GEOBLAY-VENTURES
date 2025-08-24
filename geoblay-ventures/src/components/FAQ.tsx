import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from './ui/card';

// FAQ data can be customized
const faqData = [
  {
    question: 'What products and services do you offer?',
    answer: 'We offer a wide range of premium automobiles and quality general merchandise including building materials, home & garden products, electronics, and industrial equipment.'
  },
  {
    question: 'Do you provide financing options for vehicle purchases?',
    answer: 'Yes, we offer various financing options to help you purchase your dream vehicle. Our finance team will work with you to find the best solution for your needs.'
  },
  {
    question: 'What is your return policy?',
    answer: 'We offer a 30-day return policy for most merchandise. Vehicles are subject to different terms and conditions which will be discussed at the time of purchase.'
  },
  {
    question: 'Can I schedule a test drive?',
    answer: 'Absolutely! We encourage all potential buyers to schedule a test drive. Please contact our sales team to book an appointment at your convenience.'
  },
  {
    question: 'Do you offer bulk purchase discounts?',
    answer: 'Yes, we provide special pricing for bulk orders. Please contact our business solutions team to discuss your specific requirements and receive a customized quote.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-neutral-950 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Find answers to common questions about our products and services</p>
        </div>
        <div className="max-w-3xl mx-auto divide-y divide-gray-200 dark:divide-neutral-800 rounded-xl shadow-lg overflow-hidden">
          {faqData.map((item, index) => (
            <Card
              key={index}
              className={
                `border-none rounded-none shadow-md transition-colors duration-300 ` +
                `bg-gray-100 dark:bg-neutral-900 ` +
                `hover:bg-gray-200 dark:hover:bg-neutral-800 `
              }
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 group`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {item.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 dark:text-gray-500" />
                )}
              </button>
              <div
                id={`faq-content-${index}`}
                className={`px-6 transition-all duration-300 overflow-hidden text-gray-700 dark:text-gray-200 ${
                  openIndex === index ? 'max-h-40 py-2 opacity-100' : 'max-h-0 py-0 opacity-0'
                }`}
                aria-hidden={openIndex !== index}
              >
                <p>{item.answer}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
