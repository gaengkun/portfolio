import { useState } from 'react'

export default function TailwindDemo() {
  const [dark, setDark] = useState(false)

  return (
    <div className="overflow-hidden rounded-2xl border border-[#ddd] bg-white shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#e5e5e5] px-5 py-4 sm:px-7">
        <div>
          <p className="pf-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#666]">Component preview</p>
          <p className="mt-1 text-sm font-semibold text-[#222]">Tailwind 카드 UI</p>
        </div>
        <button type="button" aria-pressed={dark} onClick={() => setDark((value) => !value)} className="rounded-full border border-[#ddd] px-4 py-2 text-xs font-semibold text-[#222] transition-colors hover:bg-[#f5f5f5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222]">{dark ? '라이트 모드 보기' : '다크 모드 보기'}</button>
      </div>
      <div className={`p-5 transition-colors sm:p-7 ${dark ? 'bg-[#222] text-[#fff]' : 'bg-[#f7f7f7] text-[#222]'}`}>
        <div className={`rounded-xl border p-5 sm:p-7 ${dark ? 'border-[#555] bg-[#303030]' : 'border-[#ddd] bg-white'}`}>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className={`pf-mono text-[10px] uppercase tracking-[0.15em] ${dark ? 'text-[#bbb]' : 'text-[#666]'}`}>Project / 01</p>
              <h4 className="mt-3 text-xl font-semibold tracking-tight">운영 화면 개선</h4>
              <p className={`mt-2 text-sm leading-6 ${dark ? 'text-[#ccc]' : 'text-[#666]'}`}>정보를 찾는 시간을 줄이기 위한 대시보드 구성</p>
            </div>
            <span className={`rounded-full px-3 py-1 text-[11px] font-semibold ${dark ? 'bg-[#555] text-[#fff]' : 'bg-[#eee] text-[#222]'}`}>진행 중</span>
          </div>
          <div className={`mt-7 h-2 overflow-hidden rounded-full ${dark ? 'bg-[#555]' : 'bg-[#eee]'}`} role="img" aria-label="진행률 예시 72%"><div className="h-full w-[72%] rounded-full bg-[#888]" /></div>
          <div className={`mt-3 flex justify-between text-xs ${dark ? 'text-[#ccc]' : 'text-[#666]'}`}><span>진행 상태</span><span>72%</span></div>
        </div>
      </div>
    </div>
  )
}
