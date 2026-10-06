export default function CaseStudyLinkedIn() {
  return (
    <section id="case-study-li" className="cs">
      <div className="wrap">
        <h2>Case study: LinkedIn Sales Navigator B2B Prospecting</h2>
        <p className="sub">Using LinkedIn and Sales Navigator to identify relevant B2B prospects.</p>
        <p className="lead">Company names and rows in the table are anonymized samples that show the format. No real clients, results or personal contact details are shown.</p>
        <div className="cs-b">
          <h3>Objective</h3>
          <p>Demonstrate how I use LinkedIn and Sales Navigator to find relevant B2B prospects: from defining who to target, to filtering companies, researching decision-makers, and preparing each prospect for outreach.</p>
        </div>
        <div className="cs-b">
          <h3>Prospecting process</h3>
          <ol className="flow" style={{maxWidth: '460px'}}>
            <li>1. Define ICP</li>
            <li>2. Select target industry</li>
            <li>3. Select target geography</li>
            <li>4. Apply company-size filters</li>
            <li>5. Identify relevant job titles</li>
            <li>6. Research decision-makers</li>
            <li>7. Review company profiles</li>
            <li>8. Qualify prospects</li>
            <li>9. Organize prospects in Google Sheets</li>
            <li>10. Prepare outreach strategy</li>
          </ol>
        </div>
        <div className="cs-b">
          <h3>Target decision-makers</h3>
          <div className="two">
            <div className="box">
              <h4>CEO</h4>
              <p>Final say on strategy and spending, most often in smaller companies.</p>
            </div>
            <div className="box">
              <h4>Founder</h4>
              <p>Often the direct buyer in small and growing businesses.</p>
            </div>
            <div className="box">
              <h4>Director</h4>
              <p>Leads a function or business unit and can approve or influence purchases.</p>
            </div>
            <div className="box">
              <h4>Head of Marketing</h4>
              <p>Owns marketing direction, budget and vendor choices.</p>
            </div>
            <div className="box">
              <h4>Marketing Manager</h4>
              <p>Runs day-to-day marketing and often evaluates tools and services.</p>
            </div>
            <div className="box">
              <h4>Business Development Manager</h4>
              <p>Looks for partners and services that support new business.</p>
            </div>
          </div>
        </div>
        <div className="cs-b">
          <h3>Sample lead table</h3>
          <p>Sample table showing how each prospect was recorded. Companies are anonymized samples, not real clients.</p>
          <div className="tw">
            <table>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Industry</th>
                  <th>Location</th>
                  <th>Employee Size</th>
                  <th>Contact Person</th>
                  <th>Job Title</th>
                  <th>LinkedIn Profile</th>
                  <th>Qualification Status</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sample Company 1</td>
                  <td className="ph">—</td>
                  <td className="ph">—</td>
                  <td className="ph">—</td>
                  <td className="ph">Withheld</td>
                  <td>CEO</td>
                  <td className="ph">—</td>
                  <td>Qualified</td>
                  <td className="ph">—</td>
                </tr>
                <tr>
                  <td>Sample Company 2</td>
                  <td className="ph">—</td>
                  <td className="ph">—</td>
                  <td className="ph">—</td>
                  <td className="ph">Withheld</td>
                  <td>Head of Marketing</td>
                  <td className="ph">—</td>
                  <td>Qualified</td>
                  <td className="ph">—</td>
                </tr>
                <tr>
                  <td>Sample Company 3</td>
                  <td className="ph">—</td>
                  <td className="ph">—</td>
                  <td className="ph">—</td>
                  <td className="ph">Withheld</td>
                  <td>Business Development Manager</td>
                  <td className="ph">—</td>
                  <td>Needs more research</td>
                  <td className="ph">—</td>
                </tr>
                <tr>
                  <td>Sample Company 4</td>
                  <td className="ph">—</td>
                  <td className="ph">—</td>
                  <td className="ph">—</td>
                  <td className="ph">Withheld</td>
                  <td>Marketing Manager</td>
                  <td className="ph">—</td>
                  <td>Needs more research</td>
                  <td className="ph">—</td>
                </tr>
                <tr>
                  <td>Sample Company 5</td>
                  <td className="ph">—</td>
                  <td className="ph">—</td>
                  <td className="ph">—</td>
                  <td className="ph">Withheld</td>
                  <td>Director</td>
                  <td className="ph">—</td>
                  <td>Not a fit</td>
                  <td className="ph">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="cs-b">
          <h3>My approach</h3>
          <div className="two">
            <div className="box">
              <h4>How I identify relevant prospects</h4>
              <p>I start from the ICP and use Sales Navigator filters for industry, location, company size and job title. Then I open each company profile to confirm it is a real fit before adding it to the list.</p>
            </div>
            <div className="box">
              <h4>How I prioritize leads</h4>
              <p>Leads with the closest ICP match, a relevant decision-maker, and a visible need go first. Leads with missing or unclear information wait for more research.</p>
            </div>
            <div className="box">
              <h4>How I qualify prospects</h4>
              <p>I check industry fit, company size, whether the contact has decision-making authority, and any signs of need or interest, then record a status in the sheet.</p>
            </div>
            <div className="box">
              <h4>How I prepare them for outreach</h4>
              <p>For each qualified prospect I note the company context and the contact's role, and suggest an angle for the first message so outreach stays relevant and not generic.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
