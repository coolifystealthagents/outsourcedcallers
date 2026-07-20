import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, site } from '../../data';

const siteUrl = 'https://outsourcedcallers.com';

type BlogSlug = keyof typeof blogDetails;

export function generateStaticParams(){
  return blogPosts.map(p=>({slug:p.slug}));
}

export async function generateMetadata({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const p=blogPosts.find(x=>x.slug===slug);
  return {title:p?.title||'Guide',description:p?.excerpt};
}

export default async function Post({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;
  const p=blogPosts.find(x=>x.slug===slug)||blogPosts[0];
  const detail = blogDetails[slug as BlogSlug];
  const url = `${siteUrl}/blog/${p.slug}`;
  const schema = detail ? {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: p.title,
        description: p.excerpt,
        url,
        mainEntityOfPage: url,
        publisher: { '@type': 'Organization', name: site.brand, url: siteUrl },
        author: { '@type': 'Organization', name: site.brand, url: siteUrl },
        citation: detail.sources.map(source => source.url),
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: detail.faqs.map(item => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `${siteUrl}/blog` },
          { '@type': 'ListItem', position: 3, name: p.title, item: url },
        ],
      },
    ],
  } : null;

  return <>
    <Header/>
    <main className='section'>
      <article className='container article' style={{maxWidth:920}}>
        {schema ? <JsonLd data={schema} /> : null}
        <p className='eyebrow'>{site.brand} guide</p>
        <h1>{p.title}</h1>
        <p className='lead'>{p.excerpt}</p>

        {detail ? <>
          <div className='card'>
            <h2>The short answer</h2>
            <p>{detail.summary}</p>
            <div className='cards' style={{gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))'}}>
              {detail.takeaways.map(item => <div className='pill' key={item}>{item}</div>)}
            </div>
          </div>

          <div className='card'>
            <h2>Weak answer vs useful answer</h2>
            <div className='compare-grid'>
              {detail.comparison.map(row => <div className='compare-row' key={row.label}>
                <b>{row.label}</b>
                <p><span>Weak:</span> {row.weak}</p>
                <p><span>Useful:</span> {row.strong}</p>
              </div>)}
            </div>
          </div>

          <div className='card'>
            <h2>Copy-ready questions for the sales call</h2>
            <ul className='list'>{detail.script.map(item => <li key={item}>{item}</li>)}</ul>
          </div>

          {detail.sections.map(section => <section className='card' key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>)}

          <div className='card'>
            <h2>FAQ</h2>
            {detail.faqs.map(item => <div key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </div>)}
          </div>

          <div className='card'>
            <h2>Sources</h2>
            <ul className='list'>{detail.sources.map(source => <li key={source.url}><a href={source.url}>{source.name}</a></li>)}</ul>
          </div>
        </> : <div className='card'>
          <h2>The short answer</h2>
          <p>Start with one role, a short task list, and a weekly scorecard. Do not outsource a messy process until examples and rules are clear.</p>
          <h2>What to prepare</h2>
          <ul><li>Task examples and sample replies</li><li>Tool access and permission rules</li><li>Daily output target</li><li>Escalation rules for anything sensitive</li></ul>
          <h2>Questions to ask</h2>
          <ul><li>Who screens the worker?</li><li>Who checks quality?</li><li>What happens if fit is poor?</li><li>How are passwords and customer data handled?</li></ul>
        </div>}
      </article>
      <CTA/>
    </main>
    <Footer/>
  </>;
}
