import { Link, Navigate, useParams } from 'react-router-dom';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { WhatsAppFloatingButton } from '@/components/landing/WhatsAppChat';
import usePageSeo from '@/hooks/usePageSeo';
import useJsonLd from '@/hooks/useJsonLd';
import { blogPosts, getBlogPostBySlug } from '@/data/blogPosts';

function formatDate(dateIso: string) {
  return new Date(dateIso).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;
  if (!post) return <Navigate to="/blog" replace />;

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    datePublished: post.datePublished,
    author: { '@type': 'Organization', name: 'Safiullah Food' },
    publisher: { '@type': 'Organization', name: 'Safiullah Food', url: 'https://sucatering.online' },
  };

  const relatedPosts = blogPosts.filter(p => p.slug !== post.slug).slice(0, 3);

  usePageSeo(post.metaTitle, post.metaDescription);
  useJsonLd([{ id: `schema-blog-${post.slug}`, data: blogPostingSchema }]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 lg:pt-24">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <header className="mb-8">
            <p className="text-sm text-muted-foreground">{formatDate(post.datePublished)}</p>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-2">{post.title}</h1>
          </header>

          <img src={post.heroImage} alt={post.title} className="w-full rounded-2xl object-cover max-h-[460px]" />

          <div className="mt-10 space-y-8">
            {post.sections.map(section => (
              <section key={section.heading} className="space-y-3">
                <h2 className="font-serif text-2xl font-semibold text-foreground">{section.heading}</h2>
                {section.paragraphs?.map((text, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: text }}></p>
                ))}
                {section.bullets && (
                  <ul className="space-y-2 text-muted-foreground">
                    {section.bullets.map((item, index) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: `- ${item}` }}></li>
                    ))}
                  </ul>
                )}
                {section.steps && (
                  <ol className="space-y-2 text-muted-foreground">
                    {section.steps.map(item => <li key={item}>{item}</li>)}
                  </ol>
                )}
              </section>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-primary/25 bg-primary/10 p-6">
            <h2 className="font-serif text-2xl font-semibold text-foreground">Ready to order?</h2>
            <p className="text-muted-foreground mt-2">Team ko best catering chahiye? Aaj hi quote request bhejein.</p>
            <Link to="/contact-us" className="inline-flex mt-4 rounded-full px-6 py-3 text-sm font-semibold bg-primary text-primary-foreground">
              {post.ctaLabel}
            </Link>
          </div>

          <section className="mt-14">
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-5">Related posts</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPosts.map(item => (
                <Link key={item.slug} to={`/blog/${item.slug}`} className="glass-card-elevated p-4 hover-lift">
                  <p className="text-xs text-muted-foreground">{formatDate(item.datePublished)}</p>
                  <h3 className="font-serif text-lg font-semibold text-foreground mt-1">{item.title}</h3>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
