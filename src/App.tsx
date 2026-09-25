import { useEffect } from 'react'
import { portfolioCategories, findPortfolioEntry, isPortfolioEntryVisible, type PortfolioCategory, type PortfolioEntry } from './content'
import DatePickerDemo from './demos/DatePickerDemo'
import TailwindDemo from './demos/TailwindDemo'
import ZustandDemo from './demos/ZustandDemo'

const demoComponents = { tailwind: TailwindDemo, 'date-picker': DatePickerDemo, zustand: ZustandDemo }
const visibleCategories = portfolioCategories
  .map((category) => ({ ...category, entries: category.entries.filter(isPortfolioEntryVisible) }))
  .filter((category) => category.entries.length > 0)

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

function EntryContent({ entry }: { entry: PortfolioEntry }) {
  if (entry.body) {
    return (
      <div className="mt-5 max-w-[47rem] border-l-2 border-[#222] pl-5 sm:pl-7">
        <p className="text-base font-medium leading-8 text-[#222] sm:text-lg">{entry.lead ?? entry.description}</p>
        <div className="mt-5 space-y-5 border-t border-[#ddd] pt-4 text-[15px] leading-8 text-[#444]">
          <p>{entry.description}</p>
          {entry.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    )
  }

  if (entry.featuredProjects) {
    return (
      <div className="mt-6 max-w-[64rem] border-t border-[#222]">
        {entry.featuredProjects.map((project) => (
          <section key={project.title} className="border-b border-[#ddd] py-6 sm:py-7">
            <h4 className="text-xl font-semibold tracking-tight text-[#222]">{project.title}</h4>
            <p className="mt-2 text-base leading-7 text-[#555]">{project.description}</p>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} 기술과 역할`}>
              {project.tags.map((tag) => <li key={tag} className="border border-[#ddd] px-2.5 py-1 text-xs text-[#555]">{tag}</li>)}
            </ul>
          </section>
        ))}
        {entry.highlights && (
          <div className="py-6">
            <h4 className="text-sm font-semibold text-[#222]">그 외 경험</h4>
            <ul className="mt-3 space-y-2 text-sm leading-6 text-[#555]">
              {entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
            </ul>
          </div>
        )}
      </div>
    )
  }

  if (entry.skillGroups) {
    return (
      <div className="mt-6 grid gap-8 md:grid-cols-3 md:gap-10">
        {entry.skillGroups.map((group) => (
          <section key={group.title} aria-label={group.title}>
            <h4 className="border-b-2 border-[#222] pb-3 text-base font-semibold text-[#222]">{group.title}</h4>
            <ul className="grid gap-x-5 sm:grid-cols-2 md:grid-cols-1">
              {group.items.map((item) => <li key={item} className="border-b border-[#e5e5e5] py-2.5 text-[15px] leading-6 text-[#333]">{item}</li>)}
            </ul>
          </section>
        ))}
      </div>
    )
  }

  if (entry.highlights) {
    return <ul className="mt-5 max-w-[64rem] space-y-2 text-sm leading-6 text-[#555]">{entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
  }

  return <p className="mt-2 max-w-[42rem] text-sm leading-6 text-[#666]">{entry.description}</p>
}

function SectionList({ category }: { category: PortfolioCategory }) {
  return (
    <section id={category.id} className="pf-section scroll-mt-32 border-t border-[#d9d9d9] pt-8 sm:pt-12">
      <h2 className="pf-heading text-[clamp(2.25rem,5vw,4rem)] leading-[1.1] tracking-[-0.055em]">{category.title}</h2>
      <p className="mt-4 max-w-[40rem] text-sm leading-7 text-[#666] sm:text-base">{category.description}</p>
      <ul className="mt-10 border-t border-[#e5e5e5]">
          {category.entries.map((entry) => (
            <li key={entry.id} className="pf-work-row border-b border-[#e5e5e5]">
              <article className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-3 px-4 py-6 sm:gap-x-6 sm:py-7">
                <div className="min-w-0">
                  {entry.points?.length ? (
                    <h3 className="text-lg font-semibold tracking-[-0.035em] sm:text-xl"><a className="pf-work-link focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#222]" href={workHref(entry)} target="_blank" rel="noopener noreferrer">{entry.title}<span className="sr-only"> 상세 보기, 새 탭</span></a></h3>
                  ) : (
                    <h3 className="text-lg font-semibold tracking-[-0.035em] sm:text-xl">{entry.title}</h3>
                  )}
                  <EntryContent entry={entry} />
                </div>
                {Boolean(entry.points?.length) && <a className="pf-more pf-mono inline-flex min-h-11 items-start whitespace-nowrap pt-1 text-[11px] font-semibold uppercase tracking-[0.08em] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#222]" href={workHref(entry)} target="_blank" rel="noopener noreferrer" aria-label={`${entry.title} 더 보기, 새 탭`}>More <span aria-hidden="true">↗</span></a>}
                {entry.image && <figure className="col-span-2 mt-6 block max-w-[46rem]"><img src={imageHref(entry.image)} alt={`${entry.title} 화면 구성 예시`} loading="lazy" className="w-full border border-[#e5e5e5]" /></figure>}
                {entry.component && <div className="col-span-2 mt-6 max-w-[46rem]"><ComponentPreview name={entry.component} /></div>}
              </article>
            </li>
          ))}
      </ul>
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
              {visibleCategories.map((category) => <li key={category.id}><a href={`#${category.id}`} className="pf-nav-link inline-flex min-h-9 items-center border-b-2 border-transparent text-xs font-medium whitespace-nowrap hover:border-[#222] hover:text-[#222] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">{category.title}</a></li>)}
            </ul>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-[1440px] px-6 pb-24 sm:px-10 lg:px-14">
        <div className="pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
          <p className="pf-mono mb-6 text-xs font-semibold tracking-[0.12em] text-[#222]">웹 퍼블리셔 · 프론트엔드 개발자</p>
          <h1 className="pf-heading max-w-[58rem] text-[clamp(3.2rem,7vw,6rem)] leading-[1.08] tracking-[-0.07em]">일을 읽고,<br />화면을 만들다<span className="text-[#222]">.</span></h1>
          <p className="mt-7 max-w-[42rem] text-base leading-8 text-[#555] sm:text-lg">웹 서비스 운영과 UI 구축, 개인 프로젝트의 AI·API 자동화 경험을 정리했습니다.</p>
        </div>

        <div className="space-y-20 sm:space-y-28">
          {visibleCategories.map((category) => <SectionList key={category.id} category={category} />)}
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
            {entry.points?.map((point) => <p key={point}>{point}</p>)}
          </div>
        </div>
      </main>
    </div>
  )
}

export default function App() {
  return workId ? <DetailPage id={workId} /> : <IndexPage />
}
