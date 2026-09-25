export type PortfolioEntry = {
  id: string
  title: string
  description: string
  intro?: string[]
  experience?: string[]
  body?: string[]
  skillGroups?: { title: string; items: string[] }[]
  featuredProjects?: { title: string; description: string; tags: string[]; details?: string[] }[]
  highlights?: string[]
  image?: string
  component?: 'tailwind' | 'date-picker' | 'zustand'
  points?: string[]
}

export type PortfolioCategory = {
  id: string
  title: string
  description: string
  entries: PortfolioEntry[]
}

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: 'my',
    title: 'MY',
    description: '어떤 일을 해왔고, 문제를 어떻게 풀어왔는지 소개합니다.',
    entries: [
      {
        id: 'about',
        title: '자기소개',
        intro: [
          '웹에이전시에서 커리어를 시작했습니다.',
          '웹디자인 2년, 웹퍼블리셔 7년의 경험이 있습니다.',
        ],
        description: '총 경력 14년 동안 퍼블리싱 업무를 계속하며 프론트엔드 개발도 병행했습니다.',
        experience: [
          'JavaScript·jQuery·REST API 기반 퍼블리싱 및 프론트엔드 업무 약 2년',
          'React 프론트엔드 개발 1년',
          'Next.js 기반 프론트 UI 개발 약 6개월',
          'Vue 3 기반 퍼블리싱 약 1년 6개월',
        ],
        body: [
          '렌터카 중개 플랫폼 리뉴얼에서는 JavaScript·jQuery·REST API 기반 UI 개발을 진행했습니다.',
          '크리에이터·라이브 방송 플랫폼에서는 React 기반 프론트 서비스 개발과 유지보수에 참여했습니다.',
          '뮤직바이페스(Music Bypass)에서는 6개월 동안 Next.js 기반 사용자·관리자 화면의 웹 퍼블리싱과 프론트엔드 개발 전체를 혼자 담당했습니다. 버튼·셀렉트 등 기본 UI를 컴포넌트화하고 Tailwind CSS로 스타일링했으며, REST API 연동과 액세스 토큰 로그인·아임포트 결제 연동·음악 플레이어를 구현했습니다. 반응형 화면과 하단 공통 플레이어의 전역 상태를 Zustand로 관리했습니다.',
          '최근 농협 ‘오늘의 농사’ 고도화 프로젝트에서는 Vue 3·Element UI 기반 UI/UX 퍼블리싱과 공통 컴포넌트를 구축했으며, 농협 용도품 사이트에서는 프론트 개발자가 활용할 UI 가이드 페이지를 단독 구축했습니다. 두 프로젝트 모두 내부망 환경에서 AI 도구 없이 직접 코딩했습니다. ‘오늘의 농사’는 웹 접근성 마크를 취득했습니다.',
          '개인 프로젝트 ‘코인주라’는 기획·디자인·개발·운영을 직접 진행하며 SEO와 AI·API 기반 데이터 수집·구조화·콘텐츠 자동화 환경을 구축하고 있습니다.',
        ],
      },
      {
        id: 'major-projects',
        title: '주요 프로젝트 안내',
        description: '실무와 개인 프로젝트에서 맡은 주요 작업입니다.',
        featuredProjects: [
          {
            title: '농협 ‘오늘의 농사’',
            description: '내부망에서 AI 도구 없이 진행한 Vue 3·Element UI 웹앱 UI/UX 고도화 프로젝트입니다. 웹 접근성 마크를 취득했습니다.',
            tags: ['Vue 3', 'Element UI', 'SVN', '웹 접근성'],
            details: [
              '웹퍼블리셔 6명이 참여한 팀에서 SVN으로 소스를 관리하며 화면 작업을 진행했습니다.',
              '개발자가 사용할 수 있는 UI/UX 가이드 페이지와 공통 컴포넌트를 만들고, Element UI 컴포넌트의 디자인과 동작을 커스텀했습니다.',
              '날짜 선택기(Date Picker)의 디자인과 기능을 커스텀했습니다.',
              '차트 라이브러리의 디자인과 기능을 화면 목적에 맞게 커스텀했습니다.',
              '작게·보통·크게 글씨 크기 전환 기능을 적용했습니다.',
            ],
          },
          {
            title: '농협 용도품',
            description: '1개월 동안 Vue 3·Element UI 기반 사이트의 퍼블리싱 전 과정을 혼자 담당했습니다. 내부망에서 AI 도구 없이 작업했습니다.',
            tags: ['Vue 3', 'Element UI', 'UI 가이드', '단독 퍼블리싱'],
            details: [
              '개발자 8명·기획자 2명과 협업하며 퍼블리싱을 전담했습니다.',
              '개발자가 보고 바로 사용할 수 있도록 Nano Component UI 가이드 페이지를 만들었습니다.',
              '버튼·셀렉트·텍스트·테이블·입력 필드 등 기본 UI의 사용 예시를 정리했습니다.',
              'Vue 3 화면에 맞춰 Element UI 컴포넌트의 디자인과 동작을 커스텀했습니다.',
            ],
          },
          {
            title: '코인주라',
            description: '기획·디자인·개발·운영을 직접 맡아 거래소 데이터와 AI를 연결한 콘텐츠 자동화 환경을 만들고 있습니다.',
            tags: ['개인 프로젝트', '거래소 API', 'Python', 'AI 자동화'],
            details: [
              '기존 시세 정보에 더해 이용자가 필요한 차트·통계·상세 정보를 볼 수 있도록 거래소 API를 활용했습니다.',
              '시세·차트·통계 데이터를 cron으로 자동 수집해 JSON으로 저장하고, 수집 데이터를 단계별 JSON으로 구성해 데이터 품질을 개선하고 있습니다.',
              '외부 자료를 Python으로 매일 수집하며, AI API로 이용자에게 필요한 콘텐츠를 생성하는 흐름과 콘텐츠 품질·처리 성능을 개선 중입니다.',
              'Windows·Mac에서 시세를 볼 수 있는 위젯을 기획하고 AI 도구를 활용해 개발했습니다. Windows 개발자 등록 후 Microsoft Store에 위젯을 등록해 설치 경로를 마련했고, Mac은 DMG 다운로드를 제공합니다. 직접 배포 때의 보안 경고를 줄이고 사용자 신뢰를 높이기 위해 배포 방식을 정리했습니다.',
            ],
          },
          {
            title: '뮤직바이페스',
            description: '6개월 동안 Next.js 기반 사용자·관리자 화면의 웹 퍼블리싱과 프론트엔드 개발 전체를 혼자 담당했습니다.',
            tags: ['Next.js', 'Tailwind CSS', 'REST API', 'Zustand', '반응형'],
            details: [
              '버튼·셀렉트 등 기본 UI를 재사용 가능한 컴포넌트로 만들고 Tailwind CSS로 화면을 구성했습니다.',
              '사용자·관리자 화면의 REST API 연동과 액세스 토큰 기반 로그인을 구현했습니다.',
              '아임포트 결제 시스템을 연동하고 음악 재생 플레이어를 개발했습니다.',
              '하단 공통 음악 플레이어의 재생 상태를 Zustand로 관리해 여러 화면에서 전역으로 사용하도록 했습니다. 화면은 반응형으로 구성했습니다.',
            ],
          },
        ],
        highlights: [
          '농협몰 운영·유지보수 및 기존 시스템에 맞춘 UI 개선',
          'React 기반 크리에이터·라이브 방송 플랫폼 개발 및 유지보수 참여',
          'JavaScript·jQuery·REST API 기반 렌트카 중개 플랫폼 리뉴얼',
          'GNUBOARD·YoungCart·Cafe24 기반 병원, 기업, 쇼핑몰, 글로벌 사이트 등 50개 이상 구축',
          'PC·Tablet·Mobile 대응 반응형 웹 및 다국어 글로벌 사이트 제작 경험',
        ],
      },
      {
        id: 'skills',
        title: '스킬',
        description: '실무와 개인 작업에서 사용한 기술을 역할별로 소개합니다.',
        skillGroups: [
          { title: 'Frontend', items: ['React', 'Next.js', 'Vue 3', 'JavaScript', 'TypeScript', 'jQuery', 'REST API', 'Zustand', 'Git'] },
          { title: 'Publishing', items: ['HTML5', 'CSS3', 'SCSS', 'Tailwind CSS', 'styled-components', 'BEM', 'Bootstrap', 'Element UI'] },
          { title: 'Tools', items: ['Figma', 'Photoshop', 'Adobe XD', 'Zeplin', 'VS Code', 'Eclipse', 'Jenkins', 'Jira', 'FileZilla'] },
        ],
      },
      { id: 'intranet-vue', title: '내부망 Vue 3 퍼블리싱', description: '내부 서비스의 Vue 3 화면 작업과 협업 방식을 소개합니다.' },
      { id: 'yongdopum', title: '용도품 프로젝트', description: '단독으로 진행한 프로젝트의 과정과 결과를 정리합니다.' },
    ],
  },
  {
    id: 'publishing',
    title: '웹퍼블리셔',
    description: '구조, 스타일, 접근성과 사용성을 화면으로 구현한 기록입니다.',
    entries: [
      { id: 'css', title: 'CSS', description: '레이아웃과 시각적 위계를 만드는 스타일링 작업을 소개합니다.' },
      { id: 'bem', title: 'BEM', description: '협업과 유지보수를 고려한 클래스 설계 방식을 정리합니다.' },
      { id: 'dark-mode', title: '다크 모드', description: '테마 전환과 색 대비를 고려한 화면 구성 사례입니다.' },
      { id: 'react-guide', title: 'React 컴포넌트 가이드', description: '상태와 사용 방법을 함께 보여주는 컴포넌트 문서입니다.' },
      { id: 'vue-guide', title: 'Vue 3 가이드', description: 'Vue 3 화면과 컴포넌트 사용 기준을 정리합니다.' },
      { id: 'tailwind', title: 'Tailwind CSS', description: '간격과 상태를 유틸리티 클래스로 조합한 카드 UI입니다. 화면에서 테마를 직접 바꿔볼 수 있습니다.', component: 'tailwind' },
      { id: 'responsive', title: '반응형', description: '화면 크기에 맞춰 정보 흐름을 조정한 사례입니다.' },
      { id: 'storybook', title: 'Storybook', description: '컴포넌트의 상태와 사용 예시를 살펴볼 수 있는 가이드입니다.' },
    ],
  },
  {
    id: 'frontend',
    title: '프론트엔드',
    description: '데이터와 사용자 동작을 연결하는 인터페이스 구현 기록입니다.',
    entries: [
      { id: 'api-calls', title: 'API 호출', description: '요청부터 로딩·오류·성공 상태까지 화면에서 다루는 방법입니다.' },
      { id: 'api-examples', title: 'API 사용 예시', description: '실제 데이터를 화면 요소와 연결하는 예시를 모았습니다.' },
      { id: 'http-methods', title: 'GET / POST', description: '조회와 등록 흐름을 사용자의 행동에 맞춰 설명합니다.' },
      { id: 'http-status', title: '200 / 400 / 500 응답', description: '응답 상태에 따라 사용자에게 필요한 안내를 보여주는 방식입니다.' },
      { id: 'date-picker', title: '데이터 픽커와 API', description: '날짜를 고르고 요청값을 확인하면 API에 전달할 값이 화면에 표시됩니다.', component: 'date-picker' },
      { id: 'charts', title: '차트 라이브러리', description: '데이터를 읽기 쉬운 시각 정보로 표현한 사례입니다.' },
      { id: 'zustand', title: 'Zustand 전역 상태', description: '서로 다른 컴포넌트가 하나의 값을 공유합니다. 버튼을 눌러 표시 값이 함께 바뀌는지 확인해 보세요.', component: 'zustand' },
      { id: 'payment', title: '결제', description: '결제 화면의 상태와 사용자 흐름을 정리합니다.' },
      { id: 'login', title: '로그인', description: '인증 전후 화면과 예외 상황을 다루는 방식을 소개합니다.' },
    ],
  },
  {
    id: 'backend',
    title: '백엔드',
    description: '서비스의 데이터와 서버 흐름을 다룬 작업을 이곳에 추가합니다.',
    entries: [],
  },
  {
    id: 'planning',
    title: '기획력',
    description: '화면을 만들기 전, 어떤 정보를 어떤 순서로 보여줄지 정한 과정입니다.',
    entries: [
      { id: 'coin-price-pages', title: '코인 시세 서브페이지', description: '시세 정보를 찾고 비교하는 흐름을 페이지 단위로 정리합니다.' },
      { id: 'main-structure', title: '메인 구성', description: '첫 화면의 정보 우선순위와 이동 경로를 설계한 과정을 소개합니다. 아래 이미지는 구성 방식의 예시입니다.', image: 'images/main-structure.svg' },
    ],
  },
  {
    id: 'ai-ax',
    title: 'AI & AX',
    description: '반복 업무를 구조화하고, AI를 검증 가능한 흐름에 연결한 작업입니다.',
    entries: [
      {
        id: 'python-collector',
        title: '파이썬 자동화 수집',
        description: '코인주라 자료 수집부터 콘텐츠 후보 생성, 선택적 AI 검수까지의 흐름입니다.',
        points: [
          '여러 출처의 자료를 수집하고 날짜·출처를 확인해 정규화합니다.',
          '콘텐츠 후보와 선택적 AI 검수 결과를 별도 단계로 저장합니다.',
          '실행 단계의 성공·부분 완료·건너뜀을 구분해 운영 상태를 확인합니다.',
        ],
      },
      { id: 'ai-improvements', title: 'AI 사용 시 문제점과 개선 방향', description: '오류와 검증 부담을 줄이기 위해 적용한 기준을 정리합니다.' },
      { id: 'coin-price-program', title: '코인 시세 프로그램 개발', description: '시세 데이터를 사용자 화면과 연결한 과정을 소개합니다.' },
      { id: 'microsoft-store', title: 'Windows 공식 앱 스토어 등록', description: '배포 경로와 사용자 설치 경험을 정리합니다.' },
      { id: 'mcp-sample', title: 'MCP 샘플', description: '도구와 데이터를 연결하는 실험을 기록합니다.' },
      { id: 'skill-sample', title: '스킬 샘플', description: '반복 작업의 규칙을 재사용 가능한 흐름으로 만드는 예시입니다.' },
      { id: 'context', title: '컨텍스트', description: 'AI가 작업을 이해하도록 정보와 기준을 구성한 사례입니다.' },
      { id: 'ai-api', title: 'AI API 활용 예시', description: 'API를 기능에 연결하고 결과를 검토하는 흐름을 소개합니다.' },
    ],
  },
]

export function isPortfolioEntryVisible(entry: PortfolioEntry) {
  return Boolean(entry.component || entry.body || entry.skillGroups || entry.featuredProjects || entry.highlights || entry.image || entry.points?.length)
}

export function findPortfolioEntry(id: string) {
  for (const category of portfolioCategories) {
    const entry = category.entries.find((candidate) => candidate.id === id)
    if (entry?.points?.length) return { category, entry }
  }
  return undefined
}
