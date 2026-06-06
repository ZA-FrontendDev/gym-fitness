import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-xs tracking-[0.4em] uppercase text-primary">Get In Touch</span>
            <h2 className="mt-4 font-display text-5xl md:text-7xl leading-none">
              Ready To <br /><span className="text-gradient-fire">Begin?</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-md">Drop by, call, or send us a message. Your transformation starts with one conversation.</p>

            <div className="mt-10 space-y-5">
              {[
                { icon: MapPin, label: "Location", val: "1247 Iron Forge Ave, Downtown District" },
                { icon: Phone, label: "Phone", val: "+1 (555) 887-FORGE" },
                { icon: Mail, label: "Email", val: "hello@forgefit.com" },
              ].map(c => (
                <div key={c.label} className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-fire flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <c.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">{c.label}</p>
                    <p className="text-foreground mt-1">{c.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            onSubmit={e => e.preventDefault()}
            className="glass rounded-3xl p-8 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="First Name" placeholder="John" />
              <Field label="Last Name" placeholder="Doe" />
            </div>
            <Field label="Email" type="email" placeholder="john@example.com" />
            <Field label="Phone" type="tel" placeholder="+1 (555) 000-0000" />
            <div>
              <label className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Message</label>
              <textarea rows={5} placeholder="Tell us about your goals..."
                className="mt-2 w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none" />
            </div>
            <button type="submit" className="btn-glow w-full inline-flex items-center justify-center gap-3 py-4 rounded-full bg-gradient-fire font-semibold tracking-wider uppercase text-sm">
              Send Message <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = "text", placeholder }: { label: string; type?: string; placeholder: string }) {
  return (
    <div>
      <label className="text-xs tracking-[0.3em] uppercase text-muted-foreground">{label}</label>
      <input type={type} placeholder={placeholder}
        className="mt-2 w-full bg-input/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
    </div>
  );
}
