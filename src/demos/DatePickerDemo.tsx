import { useRef, useState } from 'react'

export default function DatePickerDemo() {
  const [date, setDate] = useState('')
  const dateInput = useRef<HTMLInputElement>(null)

  return (
    <div className="overflow-hidden rounded-2xl border border-[#ddd] bg-white shadow-sm">
      <div className="border-b border-[#e5e5e5] px-5 py-4 sm:px-7">
        <p className="pf-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#666]">Component preview</p>
        <p className="mt-1 text-sm font-semibold text-[#222]">날짜 선택과 요청값</p>
      </div>
      <div className="grid gap-6 p-5 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] sm:p-7">
        <div>
          <label htmlFor="pf-demo-date" className="block text-xs font-semibold text-[#444]">조회 날짜</label>
          <input ref={dateInput} id="pf-demo-date" type="date" onChange={(event) => setDate(event.target.value)} className="mt-3 min-h-12 w-full rounded-lg border border-[#ddd] bg-white px-3 text-sm text-[#222] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222]" />
          <button type="button" onClick={() => setDate(dateInput.current?.value ?? '')} className="mt-3 min-h-10 rounded-lg bg-[#222] px-4 text-xs font-semibold text-white hover:bg-[#444] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222]">요청값 확인</button>
          <p className="mt-3 text-xs leading-5 text-[#666]">날짜를 선택하고 요청에 들어갈 값을 확인해 보세요.</p>
        </div>
        <div className="rounded-xl bg-[#222] p-5 text-[#fff]" aria-live="polite">
          <p className="pf-mono text-[10px] uppercase tracking-[0.15em] text-[#bbb]">Request preview</p>
          <p className="pf-mono mt-5 break-all text-xs leading-6"><span className="text-[#fff]">GET</span> /api/records{date ? `?date=${encodeURIComponent(date)}` : '?date=YYYY-MM-DD'}</p>
          <p className="mt-5 text-xs text-[#ccc]">{date ? `선택한 날짜: ${date}` : '조회할 날짜를 선택해 주세요.'}</p>
        </div>
      </div>
      <p className="border-t border-[#e5e5e5] px-5 py-3 text-[11px] text-[#777] sm:px-7">요청 형식을 보여주는 UI 예시이며 실제 API는 호출하지 않습니다.</p>
    </div>
  )
}
