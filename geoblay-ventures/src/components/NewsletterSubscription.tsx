export function NewsletterSubscription() {
  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-8">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Subscribe to Our Newsletter</h2>
          <p className="text-muted-foreground mb-6">Get the latest updates, exclusive offers, and news from GeoBlay Ventures directly to your inbox.</p>
          <form
            className="flex flex-col sm:flex-row items-center gap-4 justify-center"
            onSubmit={e => {
              e.preventDefault();
              // You can add your integration here (e.g., Mailchimp, backend API)
              alert('Thank you for subscribing!');
            }}
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md border border-input focus:ring-2 focus:ring-blue-400 focus:outline-none w-full sm:w-auto"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
