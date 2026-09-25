import { Highlight, themes } from 'prism-react-renderer'
import { create } from 'zustand'

type CounterStore = {
  count: number
  add: () => void
  reset: () => void
}

const useCounter = create<CounterStore>()((set) => ({
  count: 0,
  add: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}))

const code = `import { create } from 'zustand'

const useCounter = create<{ count: number; add: () => void }>()((set) => ({
  count: 0,
  add: () => set((state) => ({ count: state.count + 1 })),
}))

function Controls() {
  const add = useCounter((state) => state.add)
  return <button onClick={add}>+1</button>
}

function Display() {
  const count = useCounter((state) => state.count)
  return <span>{count}</span>
}`

function Controls() {
  const add = useCounter((state) => state.add)
  const reset = useCounter((state) => state.reset)

  return (
    <div className="rounded-xl border border-[#ddd] bg-white p-5">
      <p className="pf-mono text-[10px] uppercase tracking-[0.12em] text-[#666]">컴포넌트 A · 조작</p>
      <div className="mt-5 flex gap-2">
        <button type="button" onClick={add} className="min-h-10 rounded-full bg-[#222] px-5 text-sm font-semibold text-white hover:bg-[#444] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222]">+1</button>
        <button type="button" onClick={reset} className="min-h-10 rounded-full border border-[#ccc] px-5 text-sm font-semibold text-[#222] hover:bg-[#f5f5f5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#222]">초기화</button>
      </div>
    </div>
  )
}

function Display() {
  const count = useCounter((state) => state.count)

  return (
    <div className="rounded-xl border border-[#ddd] bg-white p-5" aria-live="polite" aria-atomic="true">
      <p className="pf-mono text-[10px] uppercase tracking-[0.12em] text-[#666]">컴포넌트 B · 표시</p>
      <p className="mt-3 text-4xl font-semibold tabular-nums text-[#222]">{count}</p>
    </div>
  )
}

export default function ZustandDemo() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#ddd] bg-white shadow-sm">
      <div className="border-b border-[#e5e5e5] px-5 py-4 sm:px-7">
        <p className="pf-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-[#666]">Component preview</p>
        <p className="mt-1 text-sm font-semibold text-[#222]">Zustand 전역 상태 공유</p>
      </div>
      <div className="grid gap-3 bg-[#f7f7f7] p-5 sm:grid-cols-2 sm:p-7">
        <Controls />
        <Display />
      </div>
      <div className="border-t border-[#333]">
        <div className="flex items-center justify-between bg-[#252526] pr-5 text-xs text-[#ccc]">
          <span className="border-r border-[#333] bg-[#1e1e1e] px-5 py-3 text-white sm:px-7">example.tsx</span>
          <span className="pf-mono">TSX</span>
        </div>
        <Highlight code={code} language="tsx" theme={themes.vsDark}>
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre aria-label="Zustand 사용 코드" style={{ ...style, margin: 0 }} className="pf-mono overflow-x-auto px-4 py-5 text-xs leading-6 sm:px-6">
              <code>
                {tokens.map((line, index) => {
                  const lineProps = getLineProps({ line })
                  return (
                    <span key={index} {...lineProps} className={`${lineProps.className} block min-w-max`}>
                      <span aria-hidden="true" className="inline-block w-8 select-none pr-3 text-right text-[#858585]">{index + 1}</span>
                      {line.map((token, key) => <span key={key} {...getTokenProps({ token })} />)}
                    </span>
                  )
                })}
              </code>
            </pre>
          )}
        </Highlight>
      </div>
    </div>
  )
}
