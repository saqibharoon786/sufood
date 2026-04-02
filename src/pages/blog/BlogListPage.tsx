import { Link } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { WhatsAppFloatingButton } from '@/components/landing/WhatsAppChat';
import usePageSeo from '@/hooks/usePageSeo';
import { blogPosts } from '@/data/blogPosts';

function formatDate(dateIso: string) {
  return new Date(dateIso).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogListPage() {
  usePageSeo(
    "Blog | Safiullah's Food",
    "Read latest catering guides from Safiullah's Food about office meals, BBQ events, call center food supply, keto plans, and bulk biryani orders.",
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 lg:pt-24 section-padding">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">Safiullah&apos;s Food Blog</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Office catering, BBQ event planning, call center meal supply, keto guides, aur bulk order tips.
            </p>
          </header>

          <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map(post => (
              <article key={post.slug} className="glass-card-elevated overflow-hidden flex flex-col">
                <img src={post.heroImage} alt={post.title} className="w-full h-48 object-cover" loading="lazy" />
                <div className="p-5 flex flex-col flex-1">
                  <p className="text-xs text-muted-foreground mb-2">{formatDate(post.datePublished)}</p>
                  <h2 className="font-serif text-xl font-semibold text-foreground">{post.title}</h2>
                  <p className="text-sm text-muted-foreground mt-3 line-clamp-2">{post.excerpt}</p>
                  <div className="mt-5">
                    <Link to={`/blog/${post.slug}`} className="inline-flex rounded-full px-4 py-2 text-sm font-medium bg-primary text-primary-foreground">
                      Read more
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
