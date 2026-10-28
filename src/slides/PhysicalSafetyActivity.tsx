import { useState } from 'react'
import { Search, Zap, Flame, Footprints, TriangleAlert, ShieldCheck, Eye, RotateCcw, Check } from 'lucide-react'
import './PhysicalSafetyActivity.css'

const hazards = [
  { title: 'A drink spilled beside computer equipment', risk: 'Electric shock', action: 'Keep drinks out of the computer room and away from equipment.', Icon: Zap, x: 29, y: 47 },
  { title: 'An overloaded wall socket', risk: 'Fire or electric shock', action: 'Don’t touch it. Tell the teacher or a responsible adult so the equipment can be checked safely.', Icon: Zap, x: 12, y: 29 },
  { title: 'A computer with blocked cooling vents', risk: 'Fire from overheating', action: 'Keep ventilation areas clear and make sure equipment is cleaned and checked regularly.', Icon: Flame, x: 55, y: 41 },
  { title: 'A cable trailing across the floor', risk: 'Tripping', action: 'Secure cables with cable ducts or under desks, and keep walkways clear.', Icon: Footprints, x: 37, y: 82 },
  { title: 'Heavy equipment at the edge of an unstable desk', risk: 'Personal injury', action: 'Place equipment securely on a strong desk, away from the edge.', Icon: TriangleAlert, x: 87, y: 48 },
]

export function PhysicalSafetyActivity() {
  const [selected, setSelected] = useState<number | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [showSolutions, setShowSolutions] = useState(false)
  const [completed, setCompleted] = useState<number[]>([])
  const hazard = selected === null ? null : hazards[selected]
  return (
    <div className="phishing-workspace inspector-workspace">
      <header className="inspector-header">
        <div><span className="phishing-case-label"><Search size={16} /> EXPLORE · DISCUSS · REVEAL</span><h3>Safety Inspector: Spot the Hazards!</h3><p>Click each hazard. Identify the risk and suggest how to prevent it before revealing the answer.</p></div>
        <span className="inspector-progress" aria-live="polite">{completed.length} / 5 inspected</span>
      </header>
      <div className="inspector-layout">
        <div>
          <div className="inspector-room">
            <svg viewBox="0 0 700 450" role="img" aria-labelledby="room-title room-desc">
              <title id="room-title">A computer room with five safety hazards</title>
              <desc id="room-desc">A spilled drink beside a monitor, an overloaded socket, books blocking a computer’s vents, a trailing cable, and a heavy printer at the edge of a weak desk. Use the five numbered buttons to inspect them.</desc>
              <defs>
                <linearGradient id="room-wall" x2="0" y2="1"><stop stopColor="#e7f3fa" /><stop offset="1" stopColor="#d0e5f0" /></linearGradient>
                <linearGradient id="room-screen" x2="1" y2="1"><stop stopColor="#124c75" /><stop offset="1" stopColor="#178da6" /></linearGradient>
              </defs>
              <rect width="700" height="450" fill="url(#room-wall)" />
              <path d="M0 294H700V450H0Z" fill="#afc8d7" /><path d="M0 294H700" stroke="#8caebf" strokeWidth="8" />
              <g stroke="#99b7c8" strokeWidth="1.5"><path d="M0 365H700M0 430H700M140 295L60 450M340 295L330 450M540 295L620 450" /></g>
              <rect x="437" y="27" width="193" height="112" rx="8" fill="#f6fcff" stroke="#aacbda" strokeWidth="5" />
              <path d="M451 40H620V126H451Z" fill="#b9e5f4" /><path d="M535 40V126M451 83H620" stroke="#f6fcff" strokeWidth="6" />
              <path d="M456 113L490 84L523 113L562 66L615 113" fill="#80bfd4" opacity=".6" />
              <rect x="197" y="32" width="158" height="57" rx="8" fill="#f7fcff" /><text x="276" y="57" textAnchor="middle" fontSize="13" fontWeight="700" fill="#406479">COMPUTER ROOM</text><text x="276" y="76" textAnchor="middle" fontSize="10" fill="#628499">Look closely. Think safely.</text>
              {/* Overloaded socket and tangled power leads */}
              <rect x="49" y="116" width="63" height="65" rx="7" fill="#f8fafc" stroke="#879eaf" strokeWidth="3" />
              <rect x="60" y="126" width="50" height="42" rx="6" fill="#f2c39a" stroke="#b87a56" strokeWidth="3" />
              <path d="M74 143V164Q15 216 90 257M93 141V169Q154 187 126 239M108 148Q160 140 153 204" fill="none" stroke="#4d6176" strokeWidth="6" strokeLinecap="round" />
              <path d="M43 113L36 101M116 118L127 108M39 135H25" stroke="#e58a46" strokeWidth="3" strokeLinecap="round" />
              {/* Main desk */}
              <path d="M134 258V359M427 258V359" stroke="#557f97" strokeWidth="15" /><rect x="115" y="242" width="342" height="20" rx="5" fill="#9a664e" /><rect x="115" y="231" width="342" height="15" rx="5" fill="#deb291" />
              <rect x="233" y="121" width="122" height="91" rx="9" fill="#2b4c66" /><rect x="241" y="129" width="106" height="73" rx="4" fill="url(#room-screen)" />
              <path d="M276 166L289 179L316 151" fill="none" stroke="#8ce4ec" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M294 212V230M273 232H315" stroke="#426680" strokeWidth="9" strokeLinecap="round" />
              <path d="M246 239H335" stroke="#6b8899" strokeWidth="7" strokeLinecap="round" />
              {/* Spilled cup and liquid beside the equipment */}
              <ellipse cx="198" cy="232" rx="39" ry="9" fill="#51b8dc" /><path d="M179 212L204 220L195 238L171 229Z" fill="#f9fafb" stroke="#d88664" strokeWidth="3" /><path d="M178 214Q161 202 162 220L173 225" fill="none" stroke="#d88664" strokeWidth="4" /><path d="M217 232Q226 240 218 253" stroke="#51b8dc" strokeWidth="5" fill="none" strokeLinecap="round" />
              {/* Tower with vents covered by books and draped fabric */}
              <rect x="371" y="159" width="62" height="73" rx="6" fill="#3a556e" /><circle cx="420" cy="216" r="3" fill="#7fe5e0" /><path d="M381 175H406M381 184H406M381 193H406" stroke="#132e46" strokeWidth="4" />
              <path d="M365 151H431V176Q400 172 404 198L373 191Z" fill="#d99983" /><rect x="369" y="140" width="67" height="10" rx="2" fill="#718bc3" /><rect x="377" y="130" width="55" height="10" rx="2" fill="#e5bb6f" />
              <path d="M385 119Q377 108 385 97M405 119Q397 108 405 97" stroke="#d18e6b" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Cable across the walkway */}
              <path d="M400 232V312C400 353 185 307 174 356S347 396 355 362S471 354 498 401" fill="none" stroke="#354d65" strokeWidth="7" strokeLinecap="round" /><rect x="491" y="391" width="24" height="15" rx="3" transform="rotate(25 491 391)" fill="#354d65" />
              {/* Weak desk, cracked leg, heavy printer over the edge */}
              <path d="M521 261L515 322L526 331L511 342L508 363M640 261L656 363" fill="none" stroke="#9a7059" strokeWidth="12" /><rect x="501" y="245" width="157" height="17" rx="4" fill="#c7906b" />
              <path d="M594 245L607 249L612 257" fill="none" stroke="#80533e" strokeWidth="3" />
              <rect x="600" y="187" width="83" height="58" rx="7" fill="#526d84" /><rect x="609" y="171" width="66" height="35" rx="3" fill="#7892a7" /><rect x="619" y="157" width="43" height="31" fill="#f7fafc" /><path d="M626 166H653M626 174H648" stroke="#b5c6d2" strokeWidth="3" /><rect x="614" y="216" width="56" height="16" rx="3" fill="#263e55" /><circle cx="673" cy="204" r="3" fill="#90dfdb" />
            </svg>
            {hazards.map((item, index) => <button key={item.title} type="button" className={`inspector-hotspot ${selected === index ? 'is-selected' : ''} ${completed.includes(index) ? 'is-complete' : ''}`} style={{ left: `${item.x}%`, top: `${item.y}%` }} aria-label={`Hazard ${index + 1}: ${item.title}`} aria-pressed={selected === index} aria-controls="hazard-explanation" onClick={() => { setSelected(index); setRevealed(false); setShowSolutions(false) }}>{completed.includes(index) ? <Check size={20} /> : index + 1}</button>)}
          </div>
          <p className="inspector-caption">Select a numbered hotspot to inspect the room. <span>5 hazards to find</span></p>
        </div>
        <aside id="hazard-explanation" className="inspector-detail" aria-live="polite">
          <button type="button" className="phishing-reveal inspector-solutions-toggle" aria-expanded={showSolutions} aria-controls="inspector-solutions" onClick={() => setShowSolutions(!showSolutions)}>
            {showSolutions ? <RotateCcw size={18} /> : <Eye size={18} />}{showSolutions ? 'Back to activity' : 'Show all solutions'}
          </button>
          <div id="inspector-solutions" hidden={!showSolutions}>
            <h4>Safety Inspector: Solutions</h4>
            <ol className="inspector-solutions-list">
              {hazards.map((item, index) => <li key={item.title}>
                <h5><span>{index + 1}</span>{item.title}</h5>
                <div className="inspector-solution-risk"><item.Icon size={18} /><strong>{item.risk}</strong></div>
                <p><strong>Safety action: </strong>{item.action}</p>
              </li>)}
            </ol>
          </div>
          <div className="inspector-individual" hidden={showSolutions}>
          {hazard ? <>
            <span className="phishing-case-label">HAZARD {selected! + 1} OF 5</span><h4>{hazard.title}</h4>
            {revealed ? <div className="inspector-answer"><div className="inspector-risk"><hazard.Icon size={25} /><div><span>RISK</span><strong>{hazard.risk}</strong></div></div><div className="inspector-action"><ShieldCheck size={20} /><div><span>SAFETY ACTION</span><p>{hazard.action}</p></div></div></div> : <div className="inspector-think"><Search size={28} /><h5>Pause and discuss</h5><p>What could happen here?</p><p>How would you make it safe?</p><small>Share your ideas before revealing the explanation.</small></div>}
            <button type="button" className="phishing-reveal" aria-expanded={revealed} onClick={() => { setRevealed(!revealed); if (!revealed && selected !== null) setCompleted(previous => previous.includes(selected) ? previous : [...previous, selected]) }}>{revealed ? <RotateCcw size={17} /> : <Eye size={17} />}{revealed ? 'Hide explanation' : 'Reveal risk & safety action'}</button>
          </> : <div className="inspector-empty"><Search size={35} /><h4>You’re the safety inspector.</h4><p>Choose any numbered hazard in the computer room to begin.</p><span>1. Spot it · 2. Discuss it · 3. Make it safe</span></div>}
          </div>
          {completed.length === 5 && <p className="inspector-finished"><ShieldCheck size={17} /> All five inspected! How would you make this room safer?</p>}
          {completed.length > 0 && <button type="button" className="inspector-reset" onClick={() => { setSelected(null); setRevealed(false); setCompleted([]); setShowSolutions(false) }}><RotateCcw size={13} /> Start again</button>}
        </aside>
      </div>
    </div>
  )
}

