import { ExternalLink } from 'lucide-react'

export function CoursesPage(){
  return (
    <main className="pt-8">
      <WaveTop/>
      <Section title="Courses & Training" color="from-pink-500 via-purple-500 to-sky-500">
        <UL items={[
          'Kurzy poslušnosti pro štěňata i dospělé',
          'Psí škola – základní dovednosti a socializace',
          'Psí sporty – dogfrisbee, nosework, hoopers',
          'Online tréninky – konzultace a plány na míru'
        ]}/>
      </Section>
    </main>
  )
}

export function KidsPage(){
  return (
    <main className="pt-8">
      <WaveTop/>
      <Section title="Kids Programs" color="from-amber-400 via-rose-400 to-fuchsia-500">
        <UL items={[
          'Kroužek psího poznávání pro děti',
          'Zážitkové programy s pejsky',
          'Canisterapie – terapie se psy'
        ]}/>
      </Section>
    </main>
  )
}

export function BookingPage(){
  return (
    <main className="pt-8">
      <WaveTop/>
      <Section title="Booking" color="from-sky-500 via-emerald-400 to-amber-400">
        <p className="text-slate-700 mb-6">Rezervace probíhá přes Dogres. Vyplňte formulář a přidáme vás do pořadníku, nebo přejděte na Dogres.</p>
        <form onSubmit={(e)=>e.preventDefault()} className="grid sm:grid-cols-2 gap-4 bg-white/70 backdrop-blur p-6 rounded-2xl border">
          <Input label="Jméno" type="text"/>
          <Input label="Email" type="email"/>
          <Input label="Telefon" type="tel"/>
          <Input label="Datum" type="date"/>
          <div className="sm:col-span-2">
            <label className="text-sm font-medium text-slate-700">Poznámka</label>
            <textarea className="mt-1 w-full rounded-xl border p-3" rows={4} placeholder="Krátce popište váš cíl"/>
          </div>
          <div className="sm:col-span-2 flex gap-3">
            <button className="px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold">Book</button>
            <a href="https://dogres.cz" target="_blank" className="px-5 py-3 rounded-xl bg-white border font-semibold inline-flex items-center gap-2">
              Dogres <ExternalLink className="w-4 h-4"/>
            </a>
          </div>
        </form>
      </Section>
    </main>
  )
}

export function DogGymPage(){
  return (
    <main className="pt-8">
      <WaveTop/>
      <Section title="Dog Gym" color="from-orange-400 via-rose-400 to-sky-500">
        <p className="text-slate-700 mb-6">Prostor pro balanční cvičení, posilování a prevenci zranění. Vhodné pro štěňata i sportující psy. Připravujeme fotogalerii.</p>
        <div className="grid sm:grid-cols-3 gap-4">
          {[1,2,3,4,5,6].map(i=> (
            <div key={i} className="aspect-video rounded-2xl bg-gradient-to-br from-slate-200 to-slate-100 border shadow-inner"></div>
          ))}
        </div>
      </Section>
    </main>
  )
}

export function TrainersPage(){
  return (
    <main className="pt-8">
      <WaveTop/>
      <Section title="Trainers" color="from-fuchsia-500 via-rose-400 to-amber-400">
        <Trainer
          name="Kateřina Vincíková"
          about="Instruktorka se zaměřením na pozitivní posilování, socializaci a harmonický vztah pes–člověk."
          experience={[
            '10+ let praxe v tréninku psů',
            'Zkušenosti s individuálním vedením i skupinami',
          ]}
          education={[
            'Semináře pozitivního tréninku',
            'Kurz etologie psů'
          ]}
          contact="katerina@example.com"
        />
        <Trainer
          name="Šárka Hanes"
          about="Specialistka na dogfrisbee, dětské kurzy a programy s terapií se psy."
          experience={[
            'Lektorka dětských kroužků a táborů',
            'Organizace soutěží dogfrisbee'
          ]}
          education={[
            'Instruktorské licence v oblasti kynologie',
            'Kurz canisterapie'
          ]}
          contact="sarka@example.com"
        />
      </Section>
    </main>
  )
}

export function BlogPage(){
  return (
    <main className="pt-8">
      <WaveTop/>
      <Section title="Blog & News" color="from-sky-500 via-purple-500 to-pink-500">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map(i => (
            <article key={i} className="bg-white/80 p-6 rounded-2xl border">
              <h3 className="font-extrabold text-slate-900">Novinka {i}</h3>
              <p className="text-slate-600 mt-2">Krátká ukázka textu článku. Připravujeme blogové rozhraní.</p>
            </article>
          ))}
        </div>
      </Section>
    </main>
  )
}

function WaveTop(){
  return (
    <svg className="w-full" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 80C160 120 320 40 480 60C640 80 800 140 960 120C1120 100 1280 40 1440 60V120H0V80Z" fill="url(#gpage)"/>
      <defs>
        <linearGradient id="gpage" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#F472B6"/>
          <stop offset="50%" stopColor="#60A5FA"/>
          <stop offset="100%" stopColor="#F59E0B"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

function Section({ title, color, children }){
  return (
    <section className={`relative py-10 bg-gradient-to-br from-white to-slate-50`}>
      <div className="max-w-7xl mx-auto px-6">
        <h1 className={`text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6`}>{title}</h1>
        <div className="prose prose-slate max-w-none">
          {children}
        </div>
      </div>
    </section>
  )
}

function UL({ items }){
  return (
    <ul className="grid sm:grid-cols-2 gap-3">
      {items.map(i => (
        <li key={i} className="bg-white/80 border rounded-xl p-4">{i}</li>
      ))}
    </ul>
  )
}

function Input({ label, ...props }){
  return (
    <div>
      <label className="text-sm font-medium text-slate-700">{label}</label>
      <input className="mt-1 w-full rounded-xl border p-3" {...props} />
    </div>
  )
}

function Trainer({ name, about, experience, education, contact }){
  return (
    <div className="bg-white/80 border rounded-2xl p-6 mb-6">
      <h3 className="text-2xl font-extrabold text-slate-900">{name}</h3>
      <p className="text-slate-700 mt-2">{about}</p>
      <div className="grid sm:grid-cols-2 gap-4 mt-4">
        <div>
          <h4 className="font-bold text-slate-900">Zkušenosti</h4>
          <ul className="list-disc list-inside text-slate-700">
            {experience.map(e => <li key={e}>{e}</li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-slate-900">Vzdělání</h4>
          <ul className="list-disc list-inside text-slate-700">
            {education.map(e => <li key={e}>{e}</li>)}
          </ul>
        </div>
      </div>
      <div className="mt-4 text-slate-800"><span className="font-semibold">Kontakt:</span> {contact}</div>
    </div>
  )
}
