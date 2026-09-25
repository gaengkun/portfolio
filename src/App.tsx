import { useEffect } from 'react'
import { portfolioCategories, findPortfolioEntry, type PortfolioCategory, type PortfolioEntry } from './content'
import DatePickerDemo from './demos/DatePickerDemo'
import TailwindDemo from './demos/TailwindDemo'
import ZustandDemo from './demos/ZustandDemo'

const demoComponents = { tailwind: TailwindDemo, 'date-picker': DatePickerDemo, zustand: ZustandDemo }

function ComponentPreview({ name }: { name: NonNullable<PortfolioEntry['component']> }) {
  const Demo = demoComponents[name]
  return <Demo />
}

const workId = new URLSearchParams(window.location.search).get('work')

function workHref(entry: PortfolioEntry) {
  return `${import.meta.env.BASE_URL}?work=${encodeURIComponent(entry.id)}`
}

function imageHref(image: string) {
  return `${import.meta.env.BASE_URL}${image}`
}

function SectionList({ category }: { category: PortfolioCategory }) {
  return (
    <section id={category.id} className="pf-section scroll-mt-32 border-t border-[#d9d9d9] pt-8 sm:pt-12">
      <h2 className="pf-heading text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] tracking-[-0.055em]">{category.title}</h2>
      <p className="mt-4 max-w-[40rem] text-sm leading-7 text-[#666] sm:text-base">{category.description}</p>
      {category.entries.length ? (
        <ul className="mt-10 border-t border-[#e5e5e5]">
          {category.entries.map((entry) => (
            <li key={entry.id} className="pf-work-row border-b border-[#e5e5e5]">
              <article className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 px-4 py-6 sm:gap-x-6 sm:py-7">
                <div className="min-w-0">
                  {entry.component || entry.body || entry.skillGroups || entry.highlights ? (
                    <h3 className="text-lg font-semibold tracking-[-0.035em] sm:text-xl">{entry.title}</h3>
                  ) : (
                    <h3 className="text-lg font-semibold tracking-[-0.035em] sm:text-xl"><a className="pf-work-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#222]" href={workHref(entry)} target="_blank" rel="noopener noreferrer">{entry.title}<span className="sr-only"> 상세 보기, 새 탭</span></a></h3>
                  )}
                  {entry.body ? (
                    <div className="mt-5 max-w-[64rem] space-y-5 border border-[#e5e5e5] bg-white p-5 text-sm leading-7 text-[#222] sm:space-y-6 sm:p-7">
                      {[entry.description, ...entry.body].map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  ) : entry.skillGroups ? (
                    <div className="mt-5 max-w-[64rem] space-y-6 border border-[#e5e5e5] bg-white p-5 sm:p-7">
                      {entry.skillGroups.map((group) => (
                        <section key={group.title} aria-label={group.title}>
                          <h4 className="text-sm font-semibold text-[#222]">{group.title}</h4>
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {group.items.map((item) => <li key={item} className="border border-[#ddd] bg-[#f7f7f7] px-3 py-1.5 text-sm leading-5 text-[#222]">{item}</li>)}
                          </ul>
                        </section>
                      ))}
                    </div>
                  ) : entry.highlights ? (
                    <ul className="mt-5 max-w-[64rem] border border-[#e5e5e5] bg-white px-5 py-2 text-sm leading-6 text-[#222] sm:px-7">
                      {entry.highlights.map((highlight) => <li key={highlight} className="border-b border-[#eee] py-3 last:border-b-0">{highlight}</li>)}
                    </ul>
                  ) : <p className="mt-2 max-w-[42rem] text-sm leading-6 text-[#666]">{entry.description}</p>}
                </div>
                {!entry.component && !entry.body && !entry.skillGroups && !entry.highlights && <a className="pf-more pf-mono inline-flex min-h-11 items-start whitespace-nowrap pt-1 text-[11px] font-semibold uppercase tracking-[0.08em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#222]" href={workHref(entry)} target="_blank" rel="noopener noreferrer" aria-label={`${entry.title} 더 보기, 새 탭`}>More <span aria-hidden="true">↗</span></a>}
                {entry.image && <a className="col-span-2 mt-6 block max-w-[46rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#222]" href={workHref(entry)} target="_blank" rel="noopener noreferrer" aria-label={`${entry.title} 이미지와 상세 보기, 새 탭`}><img src={imageHref(entry.image)} alt={`${entry.title} 화면 구성 예시`} loading="lazy" className="w-full border border-[#e5e5e5]" /></a>}
                {entry.component && <div className="col-span-2 mt-6 max-w-[46rem]"><ComponentPreview name={entry.component} /></div>}
              </article>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 border-t border-[#e5e5e5] py-7 text-sm text-[#888]">작업 내용을 추가할 예정입니다.</p>
      )}
    </section>
  )
}

function IndexPage() {
  return (
    <div className="pf-shell min-h-screen">
      <header id="contents" className="sticky top-0 z-50 border-b border-[#d9d9d9] bg-[#fff]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-4 sm:px-10 lg:flex-row lg:items-center lg:gap-10 lg:px-14">
          <a href="#top" className="pf-mono shrink-0 text-xs font-bold tracking-[0.16em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">GAENGKUN / PORTFOLIO</a>
          <nav className="pf-top-nav -mx-6 overflow-x-auto px-6 sm:-mx-10 sm:px-10 lg:mx-0 lg:flex-1 lg:px-0" aria-label="포트폴리오 목차">
            <ul className="flex min-w-max items-center gap-6 lg:justify-end">
              {portfolioCategories.map((category) => <li key={category.id}><a href={`#${category.id}`} className="pf-nav-link inline-flex min-h-9 items-center border-b-2 border-transparent text-xs font-medium whitespace-nowrap hover:border-[#222] hover:text-[#222] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">{category.title}</a></li>)}
            </ul>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-[1440px] px-6 pb-24 sm:px-10 lg:px-14">
        <div className="py-16 sm:py-24 lg:py-32">
          <p className="pf-mono mb-8 text-xs font-semibold tracking-[0.16em] text-[#222]">A WORKING INDEX OF IDEAS & INTERFACES</p>
          <h1 className="pf-heading max-w-[62rem] text-[clamp(3.4rem,8vw,7.6rem)] leading-[1.08] tracking-[-0.075em]">일을 읽고,<br />화면을 만들다<span className="text-[#222]">.</span></h1>
          <p className="mt-8 max-w-[39rem] text-base leading-8 text-[#555] sm:text-lg">퍼블리싱, 프론트엔드, 기획, AI·AX까지. 만든 화면과 그 뒤의 판단을 한 권의 작업 노트처럼 정리합니다.</p>
        </div>

        <div className="space-y-20 sm:space-y-28">
          {portfolioCategories.map((category) => <SectionList key={category.id} category={category} />)}
        </div>
      </main>

      <footer className="border-t border-[#d9d9d9]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-3 px-6 py-7 text-xs text-[#777] sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
          <span className="pf-mono uppercase tracking-[0.1em]">gaengkun · Portfolio index</span>
          <a href="https://github.com/gaengkun" target="_blank" rel="noopener noreferrer" className="w-fit border-b border-[#777] pb-0.5 hover:text-[#222] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3">GitHub 프로필 ↗ <span className="sr-only">새 탭</span></a>
        </div>
      </footer>
    </div>
  )
}

function DetailPage({ id }: { id: string }) {
  const found = findPortfolioEntry(id)

  useEffect(() => {
    document.title = found ? `${found.entry.title} — gaengkun` : '작업을 찾을 수 없습니다 — gaengkun'
  }, [found])

  if (!found) {
    return (
      <main className="pf-shell flex min-h-screen flex-col items-start justify-center px-6 sm:px-12">
        <p className="pf-mono text-xs uppercase tracking-[0.16em] text-[#222]">Page not found</p>
        <h1 className="pf-heading mt-4 text-5xl tracking-[-0.06em]">작업을 찾을 수 없습니다.</h1>
        <a className="mt-8 border-b border-current pb-1 text-sm" href={import.meta.env.BASE_URL}>목차로 돌아가기 ↗</a>
      </main>
    )
  }

  const { category, entry } = found

  return (
    <div className="pf-shell min-h-screen">
      <header className="mx-auto flex max-w-[1080px] items-center justify-between border-b border-[#d9d9d9] px-6 py-5 sm:px-10">
        <a href={import.meta.env.BASE_URL} className="pf-mono text-xs font-bold tracking-[0.16em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4">GAENGKUN / PORTFOLIO</a>
        <a href={import.meta.env.BASE_URL} className="pf-mono text-[11px] uppercase tracking-[0.1em] text-[#777] hover:text-[#222]">← 목차로</a>
      </header>
      <main className="mx-auto max-w-[1080px] px-6 pb-28 pt-20 sm:px-10 sm:pt-28">
        <p className="pf-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#222]">{category.title} / Work note</p>
        <h1 className="pf-heading mt-7 max-w-[55rem] text-[clamp(3rem,8vw,6rem)] leading-[1.1] tracking-[-0.07em]">{entry.title}</h1>
        <p className="mt-8 max-w-[42rem] text-lg leading-8 text-[#555] sm:text-xl">{entry.description}</p>
        {entry.image && <figure className="mt-14"><img src={imageHref(entry.image)} alt={`${entry.title} 작업 화면`} className="w-full border border-[#d9d9d9]" /></figure>}
        <div className="mt-20 grid gap-8 border-t border-[#222] pt-8 sm:grid-cols-[12rem_1fr] sm:gap-10">
          <h2 className="pf-mono text-xs font-bold uppercase tracking-[0.12em]">Overview</h2>
          <div className="max-w-[38rem] space-y-5 text-[15px] leading-8 text-[#444]">
            {entry.points ? entry.points.map((point) => <p key={point}>{point}</p>) : <p>이 작업의 목표, 담당 범위, 구현 과정과 결과를 자료에 맞춰 정리할 예정입니다.</p>}
          </div>
        </div>
        <div className="mt-16 grid gap-8 border-t border-[#d9d9d9] pt-8 sm:grid-cols-[12rem_1fr] sm:gap-10">
          <h2 className="pf-mono text-xs font-bold uppercase tracking-[0.12em]">Next</h2>
          <p className="max-w-[38rem] text-sm leading-7 text-[#777]">이미지, 데모, 소스 코드와 검증된 성과는 해당 자료가 준비되면 이 페이지에 추가합니다.</p>
        </div>
      </main>
    </div>
  )
}

export default function App() {
  return workId ? <DetailPage id={workId} /> : <IndexPage />
}
