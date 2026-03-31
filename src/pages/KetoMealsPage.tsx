import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Leaf, Flame, Egg, Beef, AlertCircle, CheckCircle2, UtensilsCrossed } from 'lucide-react';
import usePageSeo from '@/hooks/usePageSeo';
import { WHATSAPP_CHAT_URL, whatsappUrlWithMessage } from '@/constants/contact';

const heroImg =
  'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=1600&q=80';

const gallery = [
  {
    src: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80',
    alt: 'Colourful low-carb salad bowl',
    className: 'md:col-span-2 md:row-span-1',
  },
  {
    src: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=800&q=80',
    alt: 'Grilled chicken with herbs',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=800&q=80',
    alt: 'Eggs and avocado breakfast',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80',
    alt: 'Healthy protein bowl',
    className: 'md:col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80',
    alt: 'Grilled meat platter',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1498837167922-cddd18c475bf?w=800&q=80',
    alt: 'Fresh vegetables',
    className: '',
  },
];

const eatList = [
  'Non-starchy vegetables (spinach, broccoli, cauliflower, okra, cucumbers)',
  'Eggs, full-fat dairy (paneer, cream, butter in moderation)',
  'Chicken, mutton, beef, and fish — grilled, karahi-style without sugar, or handi with controlled oil',
  'Healthy fats: olive oil, ghee (small amounts), nuts, seeds, avocado',
  'Low-sugar berries in small portions',
];

const avoidList = [
  'Rice, roti, naan, paratha, and other grains',
  'Potatoes, sweet potatoes, and most root vegetables in large amounts',
  'Sugar, mithai, juices, and regular soft drinks',
  'Most fruits (except small portions of berries)',
  'Processed snacks and deep-fried coated items with flour',
];

const pkIdeas = [
  { title: 'Grilled tikka & salad', desc: 'Chicken or paneer tikka with raita (unsweetened) and a large green salad instead of rice.' },
  { title: 'Karahi without sugar', desc: 'Traditional karahi made without added sugar or ketchup; pair with a side of sautéed vegetables instead of bread.' },
  { title: 'Egg & cheese breakfast', desc: 'Desi omelette with vegetables, or scrambled eggs with butter and herbs — skip the paratha.' },
  { title: 'BBQ platter (smart)', desc: 'Seekh and boti with mint chutney; avoid sugary sauces and bulk up on grilled vegetables.' },
];

const ketoCta = whatsappUrlWithMessage(
  'Assalamualaikum — I want to know more about SU Food keto / low-carb meal options in Islamabad.',
);

export default function KetoMealsPage() {
  usePageSeo(
    'Keto & Low-Carb Meals Islamabad | SU Food',
    'Learn what keto is, how macros work, and Pakistani-friendly low-carb ideas. SU Food can help with corporate keto-friendly catering in Islamabad.',
  );

  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/40" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider mb-4">
              <Leaf className="w-3.5 h-3.5" />
              Nutrition guide
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Keto &amp; low-carb meals — everything you need to know
            </h1>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg leading-relaxed">
              A clear, practical overview of the ketogenic diet: how it works, what to eat, what to limit, and how to enjoy
              Pakistani flavours while staying low-carb. Perfect for teams and individuals exploring healthier catering in Islamabad.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={ketoCta}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-md hover:opacity-95 transition-opacity"
              >
                Ask about keto meals on WhatsApp
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-20">
        {/* What is keto */}
        <section className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">What is a keto diet?</h2>
            <p className="text-muted-foreground leading-relaxed">
              The <strong className="text-foreground">ketogenic (&ldquo;keto&rdquo;) diet</strong> is a way of eating that keeps
              carbohydrates very low so your body switches from burning mostly glucose to burning fat for fuel. That metabolic state
              is called <strong className="text-foreground">ketosis</strong>. People often follow keto for weight management, blood sugar
              control, or sustained energy — but it is not right for everyone; when in doubt, speak with a doctor or registered dietitian.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Keto is <strong className="text-foreground">not</strong> only about eating more meat. It balances moderate protein with
              higher healthy fats and very few carbs, while emphasising whole foods over processed &ldquo;low-carb&rdquo; junk.
            </p>
          </div>
          <div className="glass-card-elevated p-6 sm:p-8 space-y-4">
            <div className="flex items-center gap-2 text-primary">
              <Flame className="w-5 h-5" />
              <h3 className="font-serif text-lg font-semibold text-foreground">Typical macro range (classic keto)</h3>
            </div>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="font-semibold text-foreground shrink-0 w-28">Carbs</span>
                Roughly 5–10% of daily calories — often about 20–50g net carbs per day (varies by person).
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-foreground shrink-0 w-28">Protein</span>
                Moderate — around 20–25% of calories; enough for muscle repair without excess gluconeogenesis for most people.
              </li>
              <li className="flex gap-2">
                <span className="font-semibold text-foreground shrink-0 w-28">Fats</span>
                The largest share — about 70–80% of calories from oils, ghee, nuts, avocado, dairy fat, and fatty fish.
              </li>
            </ul>
            <p className="text-xs text-muted-foreground border-t border-border pt-4">
              Net carbs = total carbs minus fibre (labels and apps help track this). Individual needs differ; athletes and medical
              conditions require professional guidance.
            </p>
          </div>
        </section>

        {/* Image gallery */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">Low-carb plate inspiration</h2>
            <p className="mt-2 text-muted-foreground text-sm sm:text-base">
              Colourful vegetables, quality protein, and healthy fats — the visual idea behind keto-friendly meals (illustrative photos).
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 auto-rows-[140px] sm:auto-rows-[180px]">
            {gallery.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`relative overflow-hidden rounded-2xl group ${img.className}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Eat vs avoid */}
        <section className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="flex items-center gap-2 text-primary mb-4">
              <CheckCircle2 className="w-6 h-6" />
              <h2 className="font-serif text-xl font-bold text-foreground">Usually keto-friendly</h2>
            </div>
            <ul className="space-y-3">
              {eatList.map(item => (
                <li key={item} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-primary mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-destructive mb-4">
              <AlertCircle className="w-6 h-6" />
              <h2 className="font-serif text-xl font-bold text-foreground">Limit or avoid (high carb)</h2>
            </div>
            <ul className="space-y-3">
              {avoidList.map(item => (
                <li key={item} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-destructive/70 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-destructive/60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pakistani ideas */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground text-center">
            Pakistani flavours on a low-carb plate
          </h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            You do not have to give up spice and taste. With smart swaps — skip the roti and rice, watch hidden sugar in sauces —
            many desi dishes can fit a keto-style plan.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {pkIdeas.map((idea, i) => {
              const Icon = [Beef, Flame, Egg, UtensilsCrossed][i] ?? Leaf;
              return (
                <div key={idea.title} className="glass-card-elevated p-5 flex gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-foreground">{idea.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{idea.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Practical tips */}
        <section className="glass-card p-6 sm:p-10">
          <h2 className="font-serif text-2xl font-bold text-foreground mb-6">Practical tips before you start</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div className="space-y-2">
              <p className="font-semibold text-foreground">Hydration &amp; electrolytes</p>
              <p>Lower carb intake can change how your body holds water and salts. Drink enough water; consider broth or electrolytes if your clinician agrees.</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-foreground">&ldquo;Keto flu&rdquo;</p>
              <p>Some people feel tired or foggy in the first week. Often this improves as the body adapts — rest, hydrate, and do not slash calories too aggressively at once.</p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-foreground">Corporate &amp; bulk orders</p>
              <p>
                Planning keto-friendly trays for an office in Islamabad? Share headcount, dietary restrictions, and budget — we can
                suggest protein-forward menus with controlled carbs.
              </p>
            </div>
            <div className="space-y-2">
              <p className="font-semibold text-foreground">Medical note</p>
              <p>
                Pregnancy, diabetes on medication, kidney disease, and other conditions need medical supervision before strict keto.
                This page is general information, not medical advice.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center rounded-3xl bg-primary/10 border border-primary/20 px-6 py-12 sm:py-14">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">Want keto-friendly catering options?</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto text-sm sm:text-base">
            Tell us your team size, preferred dishes, and any allergies. We will respond on WhatsApp with ideas tailored to Islamabad delivery.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={ketoCta}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-md hover:opacity-95 transition-opacity"
            >
              Chat on WhatsApp
            </a>
            <a
              href={WHATSAPP_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-background px-8 py-3 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
            >
              Open WhatsApp (no pre-filled text)
            </a>
          </div>
        </section>

        <p className="text-center text-sm text-muted-foreground pb-4">
          <Link to="/" className="text-primary hover:underline">
            ← Return to home
          </Link>
        </p>
      </div>
    </main>
  );
}
