import * as data from './data';
import { Footer, Header, JsonLd } from './components';

const d = data as any;
const site = d.site || {};
const posts = (d.blogPosts || []).slice(0, 3);
const domain = site.domain || 'OutsourcedCallers.com';

const serviceCards = [
  {
    slug: 'operations-support',
    code: '01',
    title: 'Outbound follow-up',
    body: 'Work through lead lists, missed inquiries, reactivation calls, and scheduled callbacks with a clear outcome for every attempt.',
    tag: 'List rules + outcomes',
  },
  {
    slug: 'customer-support',
    code: '02',
    title: 'Customer check-ins',
    body: 'Handle routine status calls and service follow-up without giving the caller permission to improvise refunds, dates, or account changes.',
    tag: 'Script + escalation',
  },
  {
    slug: 'admin-support',
    code: '03',
    title: 'Appointment setting',
    body: 'Qualify the basics, book the right calendar, and leave the closer with enough context to walk into the conversation prepared.',
    tag: 'Fit rules + calendar',
  },
  {
    slug: 'reporting-and-qa',
    code: '04',
    title: 'Call review and CRM notes',
    body: 'Check recordings, clean up outcome labels, flag coaching examples, and keep follow-up dates from disappearing into a spreadsheet.',
    tag: 'Recordings + review',
  },
];

const handoff = [
  ['Brief', 'Define the list, purpose, approved script, and the decisions that stay with your team.'],
  ['Calibrate', 'Review sample calls and tighten the language before the caller works through real volume.'],
  ['Call', 'Log each attempt, result, note, and next action in the system your team already uses.'],
  ['Review', 'Listen to a useful sample, correct weak notes, and update the brief when the market pushes back.'],
];

const postTitle = (post: any) => post.title || post.name || 'Calling guide';
const postText = (post: any) => post.excerpt || post.desc || 'A practical guide for planning outsourced calling work.';

export default function Home() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.brand,
    url: `https://${domain}`,
  };

  return (
    <>
      <Header />
      <main className="caller-desk" data-design="outbound-ops-2026-07">
        <JsonLd data={schema} />

        <section className="desk-hero">
          <div className="signal-grid" aria-hidden="true" />
          <div className="container desk-hero-grid">
            <div className="hero-copy">
              <p className="desk-label"><span /> Filipino calling talent, scoped before launch</p>
              <h1>Put the calls in motion. Keep every promise on record.</h1>
              <p className="desk-lead">Build a calling desk with Filipino talent for follow-up, appointment setting, customer check-ins, or lead qualification. You set the boundaries. The caller works the queue and leaves your team clean notes.</p>
              <div className="desk-actions">
                <a className="btn desk-primary" href="/contact">Plan my calling desk <span aria-hidden="true">↗</span></a>
                <a className="desk-link" href="#handoff">See the handoff <span aria-hidden="true">↓</span></a>
              </div>
              <p className="scope-note">No public rate card. The right setup depends on call type, hours, tools, volume, and review needs.</p>
            </div>

            <div className="caller-visual">
              <div className="photo-frame">
                <img src="/filipino-calling-specialist.svg" alt="Illustration of a Filipino calling specialist wearing a headset beside a call queue" />
                <div className="photo-caption">
                  <span>Caller brief</span>
                  <strong>Approved language. Clear handoff.</strong>
                </div>
              </div>
              <aside className="shift-board" aria-label="Example calling desk handoff">
                <div className="board-top">
                  <div><span className="pulse" /> Shift brief</div>
                  <small>OWNER REVIEW</small>
                </div>
                <div className="queue-row"><span>Reached</span><b>Log outcome</b><i className="tone green" /></div>
                <div className="queue-row"><span>No answer</span><b>Schedule retry</b><i className="tone amber" /></div>
                <div className="queue-row"><span>Needs approval</span><b>Send to owner</b><i className="tone coral" /></div>
                <div className="board-foot"><span>CRM note required</span><strong>before next call</strong></div>
              </aside>
            </div>
          </div>

          <div className="container control-strip" aria-label="Calling desk controls">
            <p>Built around the call work</p>
            <div><span>01</span> Script ownership</div>
            <div><span>02</span> Outcome labels</div>
            <div><span>03</span> Escalation rules</div>
            <div><span>04</span> Call review</div>
          </div>
        </section>

        <section className="container desk-section" id="tasks">
          <div className="section-intro">
            <div>
              <p className="desk-label dark"><span /> Pick the queue</p>
              <h2>Give the caller a job you can explain.</h2>
            </div>
            <p>"Make more calls" is not a useful brief. Start with one queue, one reason for calling, and a short list of outcomes the caller can choose from.</p>
          </div>
          <div className="service-console">
            {serviceCards.map((service) => (
              <a className="service-module" href={`/services/${service.slug}`} key={service.slug}>
                <div className="module-code">{service.code}</div>
                <div>
                  <span className="module-tag">{service.tag}</span>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                </div>
                <span className="module-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="handoff-section" id="handoff">
          <div className="container">
            <div className="handoff-head">
              <p className="desk-label"><span /> The handoff</p>
              <h2>A call is only useful if the next person knows what happened.</h2>
            </div>
            <div className="handoff-track">
              {handoff.map(([title, body], index) => (
                <article key={title}>
                  <span>{String(index + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="container desk-section guardrail-section">
          <div className="guardrail-copy">
            <p className="desk-label dark"><span /> Guardrails first</p>
            <h2>Let callers move the conversation. Keep owner decisions with the owner.</h2>
            <p>Good scripts help, but scripts do not cover every call. Write down what the caller can answer, what needs a callback, and what they must never promise.</p>
            <a className="desk-link dark-link" href="/blog/outsourced-callers-provider-questions">Read the provider questions <span aria-hidden="true">↗</span></a>
          </div>
          <div className="decision-panel">
            <div className="decision-col go">
              <span>CALLER CAN HANDLE</span>
              <ul>
                <li>Basic qualification questions</li>
                <li>Approved appointment windows</li>
                <li>Routine status follow-up</li>
                <li>Accurate CRM notes</li>
              </ul>
            </div>
            <div className="decision-col stop">
              <span>SEND BACK TO OWNER</span>
              <ul>
                <li>Pricing exceptions or discounts</li>
                <li>Refunds and account changes</li>
                <li>Legal or medical questions</li>
                <li>Promises outside the brief</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="guides-section">
          <div className="container">
            <div className="guides-heading">
              <div>
                <p className="desk-label dark"><span /> Before the first dial</p>
                <h2>Short guides for a cleaner launch.</h2>
              </div>
              <a href="/blog">Browse all guides <span aria-hidden="true">↗</span></a>
            </div>
            <div className="guide-list">
              {posts.map((post: any, index: number) => (
                <a href={`/blog/${post.slug}`} key={post.slug}>
                  <span className="guide-number">0{index + 1}</span>
                  <div><small>{post.minutes || 7} MIN READ</small><h3>{postTitle(post)}</h3><p>{postText(post)}</p></div>
                  <span className="guide-arrow" aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="container desk-final">
          <div>
            <p className="desk-label"><span /> Start with the queue</p>
            <h2>Tell us what needs to be called and what must come back.</h2>
          </div>
          <div>
            <p>Share the call type, list size, hours, tools, and approval rules. We will help turn that into a staffing scope.</p>
            <a className="btn desk-primary" href="/contact">Plan my calling desk <span aria-hidden="true">↗</span></a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
