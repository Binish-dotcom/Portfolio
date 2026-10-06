const projects = [
  {
    title: "B2B Lead Generation Campaign",
    desc: "Targeted lead research for a defined B2B industry segment, from company lists to qualified contacts.",
    company: "Harvest Group of Company",
    tools: "LinkedIn, Sales Navigator, Google Sheets",
    link: "#case-study",
  },
  {
    title: "Facebook Lead Generation Project",
    desc: "Finding potential clients through Facebook business pages and relevant communities, then organizing their contact data.",
    company: null,
    tools: "Facebook, Google Sheets, Excel",
    link: "#case-study-fb",
  },
  {
    title: "Google Maps Lead Research",
    desc: "Identifying local businesses by category and area, and collecting verified contact details for outreach.",
    company: null,
    tools: "Google Maps, Google Sheets",
    link: "#case-study-gm",
  },
  {
    title: "LinkedIn Sales Navigator Prospecting",
    desc: "Filtering by industry, company profile and role to reach the right decision-makers.",
    company: "Harvest Group of Company",
    tools: "LinkedIn Sales Navigator, HubSpot CRM",
    link: "#case-study-li",
  },
  {
    title: "Lead Qualification Project",
    desc: "Screening leads on business need, relevance, decision-making authority and interest before sharing with sales.",
    company: null,
    tools: "HubSpot CRM, Google Sheets",
    link: "#case-study-lq",
  },
  {
    title: "Cold Calling Campaign",
    desc: "Introducing company services to prospects, understanding their requirements and booking next steps.",
    company: "Harvest Group of Company",
    tools: "Phone, Gmail, HubSpot CRM",
    link: "#case-study-cc",
  },
]

export default function Projects() {
  return (
    <section id="work">
      <div className="wrap">
        <h2>Featured projects</h2>
        <p className="lead">Selected lead generation, prospecting and outreach work. Examples use anonymized sample data. No client names or unverified figures are shown.</p>
        <div className="grid" id="projects">
          {projects.map((p) => (
            <article className="card" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <dl>
                {p.company && (
                  <>
                    <dt>Company</dt>
                    <dd>{p.company}</dd>
                  </>
                )}
                <dt>Tools</dt>
                <dd>{p.tools}</dd>
              </dl>
              {p.link && <a href={p.link}>Read the case study</a>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
