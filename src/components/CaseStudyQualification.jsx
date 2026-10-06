export default function CaseStudyQualification() {
  return (
    <section id="case-study-lq" className="cs">
      <div className="wrap">
        <h2>Case study: Lead Qualification &amp; Prospect Prioritization</h2>
        <p className="sub">How I evaluate generated leads before sending them to the sales pipeline.</p>
        <p className="lead">Companies, scores and statuses in the table are anonymized samples that show the format. The scoring scheme is an example. No real business results are shown.</p>
        <div className="cs-b">
          <h3>Qualification criteria</h3>
          <p>Every lead is checked against eight criteria before it moves forward:</p>
          <div className="two">
            <div className="box">
              <h4>1. Industry fit</h4>
              <p>Does the company operate in a target industry?</p>
            </div>
            <div className="box">
              <h4>2. Company size</h4>
              <p>Is it within the size range the offer suits?</p>
            </div>
            <div className="box">
              <h4>3. Location</h4>
              <p>Is it in a market the sales team can serve?</p>
            </div>
            <div className="box">
              <h4>4. Business need</h4>
              <p>Is there a visible need the service could address?</p>
            </div>
            <div className="box">
              <h4>5. Decision-maker availability</h4>
              <p>Can a relevant decision-maker be identified and reached?</p>
            </div>
            <div className="box">
              <h4>6. Potential budget</h4>
              <p>Do the company's size and profile suggest it could afford the service?</p>
            </div>
            <div className="box">
              <h4>7. Buying timeline</h4>
              <p>Is there any sign of when they might act?</p>
            </div>
            <div className="box">
              <h4>8. Engagement / interest</h4>
              <p>Have they replied, engaged, or shown interest?</p>
            </div>
          </div>
        </div>
        <div className="cs-b">
          <h3>BANT framework</h3>
          <p>The criteria above map to the four BANT points, which keep the evaluation consistent.</p>
          <div className="two">
            <div className="box">
              <h4>Budget</h4>
              <p>Can the company likely afford the service? (criterion 6)</p>
            </div>
            <div className="box">
              <h4>Authority</h4>
              <p>Is the contact a decision-maker, or able to reach one? (criterion 5)</p>
            </div>
            <div className="box">
              <h4>Need</h4>
              <p>Is there a real problem the service solves? (criteria 1, 4)</p>
            </div>
            <div className="box">
              <h4>Timeline</h4>
              <p>Is there a time frame for a decision? (criteria 7, 8)</p>
            </div>
          </div>
        </div>
        <div className="cs-b">
          <h3>Lead categories</h3>
          <p>After scoring, each lead goes into one of three categories. In this example, each criterion met earns 1 point out of 8.</p>
          <div className="two">
            <div className="box">
              <h4>Hot Lead</h4>
              <p>Example score 6 to 8. Strong fit, a decision-maker identified, a clear need, and signs of budget or timeline. Goes to outreach first.</p>
            </div>
            <div className="box">
              <h4>Warm Lead</h4>
              <p>Example score 3 to 5. Good fit, but some points are missing, such as an unclear timeline or no confirmed contact. Gets outreach after hot leads and more research.</p>
            </div>
            <div className="box">
              <h4>Cold Lead</h4>
              <p>Example score 0 to 2. Weak fit or little information. Kept in the database and rechecked later, not prioritized.</p>
            </div>
          </div>
        </div>
        <div className="cs-b">
          <h3>Sample qualification table</h3>
          <p>Sample table showing how leads were scored. Companies, scores and statuses are illustrative, not real results.</p>
          <div className="tw">
            <table style={{minWidth: '900px'}}>
              <thead>
                <tr>
                  <th>Company</th>
                  <th>Industry Fit</th>
                  <th>Decision Maker</th>
                  <th>Need</th>
                  <th>Budget</th>
                  <th>Timeline</th>
                  <th>Lead Score</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sample Company 1</td>
                  <td>Yes</td>
                  <td>Identified</td>
                  <td>Clear</td>
                  <td>Likely</td>
                  <td>Stated</td>
                  <td>7 / 8 (sample)</td>
                  <td>Hot Lead</td>
                </tr>
                <tr>
                  <td>Sample Company 2</td>
                  <td>Yes</td>
                  <td>Identified</td>
                  <td>Clear</td>
                  <td>Unclear</td>
                  <td>Unknown</td>
                  <td>5 / 8 (sample)</td>
                  <td>Warm Lead</td>
                </tr>
                <tr>
                  <td>Sample Company 3</td>
                  <td>Partial</td>
                  <td>Not found</td>
                  <td>Possible</td>
                  <td>Unclear</td>
                  <td>Unknown</td>
                  <td>3 / 8 (sample)</td>
                  <td>Warm Lead</td>
                </tr>
                <tr>
                  <td>Sample Company 4</td>
                  <td>No</td>
                  <td>Not found</td>
                  <td>Unclear</td>
                  <td>Unclear</td>
                  <td>Unknown</td>
                  <td>1 / 8 (sample)</td>
                  <td>Cold Lead</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="cs-b">
          <h3>How qualified leads get priority</h3>
          <p>Hot leads go to the sales team first, with the decision-maker, the identified need and my research notes attached, so the first conversation is relevant. Warm leads are followed up next and researched further to fill the missing points, such as confirming a contact. Cold leads stay in the Google Sheets database and are reviewed again later.</p>
          <p>Follow-ups are scheduled by category, so the most promising prospects get the earliest and most frequent attention. When a lead responds or new information appears, I update its score and move it between categories.</p>
        </div>
      </div>
    </section>
  )
}
