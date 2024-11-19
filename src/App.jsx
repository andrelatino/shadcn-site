import { Button } from "./components/ui/button"

export default function App() {
  return (
    <div className="min-h-screen">
      <nav className="fixed w-full top-0 z-50 bg-white border-b">
        <div className="container flex h-16 items-center px-4">
          <div className="font-bold text-xl text-primary">Brand</div>
          <div className="ml-auto flex gap-4">
            <Button variant="ghost">Home</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Services</Button>
            <Button variant="ghost">Contact</Button>
          </div>
        </div>
      </nav>

      <header className="pt-32 pb-20 px-4">
        <div className="container flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold tracking-tight">Welcome to Our Platform</h1>
          <p className="mt-6 text-xl text-muted-foreground">Creating amazing digital experiences</p>
          <Button size="lg" className="mt-8">Get Started</Button>
        </div>
      </header>

      <section className="py-20 bg-slate-50">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Innovation', 'Quality', 'Reliability'].map((title) => (
              <div key={title} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-muted-foreground">
                  {title === 'Innovation' && 'Pushing boundaries with creative solutions'}
                  {title === 'Quality' && 'Delivering excellence in every project'}
                  {title === 'Reliability' && 'Trusted by clients worldwide'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Web Design', desc: 'Beautiful and functional websites' },
              { title: 'Development', desc: 'Robust and scalable solutions' },
              { title: 'Consulting', desc: 'Expert guidance and strategy' }
            ].map((service) => (
              <div key={service.title} className="group relative overflow-hidden rounded-lg border p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-200 py-16">
        <div className="container px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Email: contact@example.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="space-y-2">
                <Button variant="ghost" className="text-slate-200 hover:text-white">Twitter</Button>
                <Button variant="ghost" className="text-slate-200 hover:text-white">LinkedIn</Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
