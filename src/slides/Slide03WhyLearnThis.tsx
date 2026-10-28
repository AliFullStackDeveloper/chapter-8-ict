import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Search, ShieldCheck, ArrowUpRight, Eye, RotateCcw, Flag, Clock, Gift, UserX, Sparkles } from 'lucide-react'
import './Slide03WhyLearnThis.css'
import { PhysicalSafetyActivity } from './PhysicalSafetyActivity'

const examples = [
  { label: 'The account scare', icon: Clock, sender: 'Account Support', initials: 'AS', address: 'support@account-check.example', subject: 'Action required: your account is at risk', message: 'Your account will be deleted in 24 hours unless you confirm your details.', request: 'Click below and enter your password to keep your account active.', action: 'Keep my account', url: 'account-check.example/verify', trick: 'A deadline that makes you panic', detail: 'The threat of losing your account pressures you to act before you think.' },
  { label: 'The surprise prize', icon: Gift, sender: 'Rewards Team', initials: 'RT', address: 'prizes@bonus-rewards.example', subject: 'You’ve been selected for a FREE gaming gift card!', message: 'Congratulations! You have won a gaming gift card. Your prize expires in 24 hours.', request: 'Click below and enter your password to unlock your reward.', action: 'Claim my reward', url: 'bonus-rewards.example/claim', trick: 'A reward that feels too good', detail: 'An unexpected prize and a short deadline tempt you to rush.' },
]

export function Slide03WhyLearnThis() {
  const [activity, setActivity] = useState<'phishing' | 'physical'>('phishing')
  const [currentExample, setCurrentExample] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const example = examples[currentExample]
  return (
    <section className="phishing-slide" aria-labelledby="phishing-title" onKeyDown={event => { if (event.key === ' ' && (event.target as HTMLElement).closest('button')) event.stopPropagation() }}>
      <header className="phishing-heading">
        <span className="phishing-eyebrow"><ShieldCheck size={15} /> REAL-LIFE CYBER SKILLS</span>
        <h2 id="phishing-title">Why are we learning this?</h2>
        <p>To stay safe online and prevent injuries, electric shocks, and fires when using computers.</p>
      </header>
      <div className="safety-activity-tabs" role="tablist" aria-label="Safety activities"
        onKeyDown={event => {
          if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
          event.preventDefault()
          event.stopPropagation()
          const next = event.key === 'Home' ? 'phishing' : event.key === 'End' ? 'physical' : activity === 'phishing' ? 'physical' : 'phishing'
          setActivity(next)
          document.getElementById(`tab-${next}`)?.focus()
        }}>
        <button id="tab-phishing" role="tab" aria-selected={activity === 'phishing'} aria-controls="panel-phishing" tabIndex={activity === 'phishing' ? 0 : -1} onClick={() => setActivity('phishing')}><Mail size={18} />Phishing</button>
        <button id="tab-physical" role="tab" aria-selected={activity === 'physical'} aria-controls="panel-physical" tabIndex={activity === 'physical' ? 0 : -1} onClick={() => setActivity('physical')}><ShieldCheck size={18} />Physical Safety</button>
      </div>
      <div id="panel-phishing" role="tabpanel" aria-labelledby="tab-phishing" hidden={activity !== 'phishing'}>
      <div className="phishing-workspace">
        <div className="phishing-toolbar">
          <div className="phishing-case-label"><Search size={17} /><span>THE PHISHING DETECTIVE</span></div>
          <div className="phishing-example-picker" aria-label="Choose a phishing example">
            {examples.map((item, index) => <button key={item.label} type="button" aria-pressed={index === currentExample} onClick={() => { setCurrentExample(index); setRevealed(false) }}><item.icon size={15} /><span>{item.label}</span></button>)}
          </div>
        </div>
        <div className="phishing-investigation">
          <motion.article key={currentExample} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className={`phishing-email ${revealed ? 'is-revealed' : ''}`} aria-label="Fictional phishing email">
            <div className="phishing-email-chrome"><span><Mail size={16} /> Inbox <span className="phishing-unread">1</span></span><span className="phishing-demo">CLASSROOM EXAMPLE</span></div>
            <div className="phishing-email-content">
              <h3>{example.subject}</h3>
              <div className="phishing-sender">
                <div className="phishing-avatar">{example.initials}</div>
                <div className="phishing-sender-details"><strong>{example.sender}</strong><div className="phishing-address"><span>{example.address}</span><span className="phishing-marker">1</span></div><small>to you</small></div><time>9:41 AM</time>
              </div>
              <div className="phishing-message">
                <p>Hi there,</p>
                <div className="phishing-body-callout">
                  <span className={`phishing-body-icon ${currentExample === 0 ? 'account-warning' : 'prize-reward'}`} aria-hidden="true">
                    {currentExample === 0 ? <UserX size={29} strokeWidth={1.8} /> : <Gift size={29} strokeWidth={1.8} />}
                    {currentExample === 1 && <Sparkles className="phishing-prize-sparkle" size={14} />}
                  </span>
                  <p className="phishing-pressure"><strong>{example.message}</strong><span className="phishing-marker">2</span></p>
                </div>
                <p>{example.request}</p>
                <div className="phishing-link-example"><span className="phishing-fake-button">{example.action}<ArrowUpRight size={17} /></span><span className="phishing-marker">3</span></div><span className="phishing-url">{example.url}</span>
              </div>
            </div>
            <div className="phishing-email-note"><ShieldCheck size={14} /> Practice email · All addresses and links are fictional.</div>
          </motion.article>
          <aside className="phishing-detective">
            <div className="phishing-mission-label"><Flag size={15} /> YOUR MISSION <span>0{currentExample + 1} / 02</span></div>
            <h3>Would you trust it?</h3><p className="phishing-mission-intro">Look closely. What feels wrong about this message?</p>
            <ol className="phishing-clues" aria-live="polite">
              {[
                ['Check the sender', 'An unfamiliar address', 'A familiar display name doesn’t prove who sent the message.', 'Who is really sending this?'],
                ['Notice the emotion', example.trick, example.detail, 'Are they trying to rush or excite you?'],
                ['Inspect the request', 'A link asking for your password', 'Open the official app or website yourself to check the message.', 'What do they want you to share?'],
              ].map(([prompt, title, detail, question], index) => <li key={prompt} className={revealed ? 'is-revealed' : ''}><span className="phishing-clue-number">{index + 1}</span><div><h4>{revealed ? title : prompt}</h4><p>{revealed ? detail : question}</p></div></li>)}
            </ol>
            <button className="phishing-reveal" type="button" aria-expanded={revealed} onClick={() => setRevealed(!revealed)}>{revealed ? <RotateCcw size={17} /> : <Eye size={17} />}{revealed ? 'Hide clues & try again' : 'Reveal the 3 red flags'}</button>
            <div className="phishing-discuss">{revealed ? 'Spotted them? Explain your safest next step.' : 'Discuss with a partner, then reveal the clues.'}</div>
          </aside>
        </div>
      </div>
      <footer className="phishing-takeaway"><span className="phishing-shield"><ShieldCheck size={23} /></span><div><span>YOUR SAFEST NEXT MOVE</span><p>Pause. Don’t click. <strong>Ask a trusted adult.</strong></p></div></footer>
      </div>
      <div id="panel-physical" role="tabpanel" aria-labelledby="tab-physical" hidden={activity !== 'physical'}><PhysicalSafetyActivity /></div>
    </section>
  )
}
