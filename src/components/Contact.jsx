import { useState } from 'react'

const ENDPOINT = 'https://formsubmit.co/ajax/binishfatima434@gmail.com'

export default function Contact() {
  const [fields, setFields] = useState({ n: '', e: '', c: '', m: '', hp: '' })
  const [note, setNote] = useState('Your message is sent directly to Binish.')
  const [sending, setSending] = useState(false)

  const onChange = (ev) => setFields((f) => ({ ...f, [ev.target.id]: ev.target.value }))

  const send = async () => {
    const n = fields.n.trim()
    const e = fields.e.trim()
    const c = fields.c.trim()
    const m = fields.m.trim()
    if (!n || !e || !m) {
      setNote('Please fill in your name, email and message.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)) {
      setNote('Please enter a valid email address.')
      return
    }
    setSending(true)
    setNote('Sending your message...')
    try {
      const r = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: n,
          email: e,
          company_or_role: c,
          message: m,
          _subject: 'Portfolio enquiry from ' + n,
          _replyto: e,
          _template: 'table',
          _captcha: 'false',
          _honey: fields.hp,
        }),
      })
      const d = await r.json()
      if (!r.ok || d.success === 'false' || d.success === false) throw new Error('failed')
      setFields({ n: '', e: '', c: '', m: '', hp: '' })
      setNote('Thank you. Your message has been sent. Binish will reply soon.')
    } catch (err) {
      setNote('Sorry, the message could not be sent. Please email binishfatima434@gmail.com directly.')
    }
    setSending(false)
  }

  return (
    <section id="contact">
      <div className="wrap contact">
        <div>
          <h2>Contact</h2>
          <p className="lead" style={{marginBottom: '24px'}}>Open to business development and lead generation roles. Send a message or reach out directly.</p>
          <ul>
            <li>
              <span>Email</span>
              <a href="mailto:binishfatima434@gmail.com">binishfatima434@gmail.com</a>
            </li>
            <li>
              <span>LinkedIn</span>
              <a href="https://www.linkedin.com/in/binish-fatima-928708441/" target="_blank" rel="noopener">linkedin.com/in/binish-fatima-928708441</a>
            </li>
            <li><span>Location</span>Lahore</li>
          </ul>
        </div>
      <div className="form" role="group" aria-label="Contact form">
          <label>
            Your name
            <input id="n" type="text" autoComplete="name" value={fields.n} onChange={onChange} />
          </label>
          <label>
            Your email
            <input id="e" type="email" autoComplete="email" value={fields.e} onChange={onChange} />
          </label>
          <label>
            Company or role
            <input id="c" type="text" value={fields.c} onChange={onChange} />
          </label>
          <label>
            Message
            <textarea id="m" value={fields.m} onChange={onChange}></textarea>
          </label>
          <input
            type="text"
            id="hp"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            style={{ display: 'none' }}
            value={fields.hp}
            onChange={onChange}
          />
          <button className="btn primary" id="send" type="button" onClick={send} disabled={sending}>
            Send message
          </button>
          <p className="note" id="msg">{note}</p>
        </div>
      </div>
    </section>
  )
}
