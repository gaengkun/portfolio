export type PortfolioEntry = {
  id: string
  title: string
  description: string
  url?: string
  intro?: string[]
  experience?: string[]
  skillGroups?: { title: string; items: string[] }[]
  images?: { src: string; alt: string; width?: number; height?: number }[]
  featuredProjects?: { title: string; url?: string; description: string; tags: string[]; details?: string[]; imageAspectRatio?: string; images?: PortfolioEntry['images'] }[]
  highlights?: string[]
  image?: string
  component?: 'tailwind' | 'date-picker' | 'zustand'
  points?: string[]
}

export type PortfolioCategory = {
  id: string
  title: string
  description: string
  intro?: string[]
  entries: PortfolioEntry[]
}

export const portfolioCategories: PortfolioCategory[] = [
  {
    id: 'my',
    title: 'MY',
    description: '어떤 일을 해왔고 어떤 스킬을 보유했는지 소개합니다.',
    entries: [
      {
        id: 'about',
        title: '자기소개',
        intro: [
          '웹에이전시에서 커리어를 시작했습니다.',
          '웹디자인 2년, 웹퍼블리셔 10년 이상의 경험이 있습니다.',
        ],
        description: '최근 5년 동안은 퍼블리싱 업무와 프론트엔드 개발을 병행했습니다.',
        experience: [
          'JavaScript·jQuery·REST API 기반 퍼블리싱 및 프론트엔드 업무 약 2년',
          'React 프론트엔드 개발 1년',
          'Next.js 기반 프론트 UI 개발 약 6개월',
          'Vue 3 기반 퍼블리싱 약 1년 6개월',
        ],
      },
      {
        id: 'major-projects',
        title: '주요 프로젝트 안내',
        description: '실무와 개인 프로젝트에서 맡은 주요 작업입니다.',
        featuredProjects: [
          {
            title: '농협 ‘오늘의 농사’',
            url: 'https://play.google.com/store/apps/details?id=com.nonghyup.farm&hl=ko',
            description: '내부망에서 AI 도구 없이 진행한 Vue 3·Element UI 웹앱 UI/UX 고도화 프로젝트입니다. 웹 접근성 마크를 취득했습니다.',
            tags: ['Vue 3', 'Element UI', 'SVN', '웹 접근성'],
            images: [
              { src: 'images/nh_honong1.webp', alt: 'NH오늘농사 앱 홈 화면 소개' },
              { src: 'images/nh_honong2.webp', alt: 'NH오늘농사 작물 시세와 출하 정보 화면 소개' },
              { src: 'images/nh_honong3.webp', alt: 'NH오늘농사 로컬푸드 판매와 정산 내역 화면 소개' },
              { src: 'images/nh_honong4.webp', alt: 'NH오늘농사 영농일지 달력 화면 소개' },
              { src: 'images/nh_honong5.webp', alt: 'NH오늘농사 이웃 소통과 모임 화면 소개' },
              { src: 'images/nh_honong6.webp', alt: 'NH오늘농사 혜택과 포인트 화면 소개' },
            ],
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
            title: '농협몰',
            url: 'https://www.nonghyupmall.com/BC31010R/main.nh?emdvEndYn=Y&basketCnt=0&cdnAplYn=N&nhVuchYn=N',
            description: '농협몰 운영·유지보수에서 기존 레거시 소스에 맞춰 화면을 퍼블리싱했습니다.',
            tags: ['운영·유지보수', '레거시 퍼블리싱', '리뷰 API', '이벤트 슬라이드'],
            images: [
              { src: 'images/nh_nonghyupmall1.png', alt: '농협몰 메인 화면과 이벤트 배너', width: 1279, height: 1162 },
              { src: 'images/nh_nonghyupmall2.png', alt: '농협몰 타임세일 상품 목록과 리뷰 별점', width: 1320, height: 1241 },
              { src: 'images/nh_nonghyupmall3.png', alt: '농협몰 금주의 브랜드와 추천 상품', width: 1288, height: 1181 },
            ],
            details: [
              '복잡한 기존 환경에서도 스타일·스크립트 충돌이나 다른 페이지에 미치는 영향이 없도록 작업했습니다.',
              '각 페이지의 리뷰 데이터를 API로 받아 별점을 표시했습니다.',
              '이벤트용 스와이프 슬라이드의 디자인과 동작을 커스텀했습니다.',
            ],
          },
          {
            title: '코인주라',
            url: 'https://coinjura.com/',
            description: '거래소 API를 사용자 화면에 연결하고, 데이터 수집과 콘텐츠 자동화 기능을 개발·운영하고 있습니다.',
            tags: ['개인 프로젝트', '거래소 API', 'Python', 'AI 자동화'],
            details: [
              '기존 시세 정보에 더해 이용자가 필요한 차트·통계·상세 정보를 볼 수 있도록 거래소 API를 활용했습니다.',
              '시세·차트·통계 데이터를 cron으로 자동 수집해 JSON으로 저장하고, 수집 데이터를 단계별 JSON으로 구성해 데이터 품질을 개선하고 있습니다.',
              '외부 자료를 Python으로 매일 수집하며, AI API로 이용자에게 필요한 콘텐츠를 생성하는 흐름과 콘텐츠 품질·처리 성능을 개선 중입니다.',
              'Windows·Mac에서 시세를 볼 수 있는 위젯을 AI 도구를 활용해 개발했습니다. Windows 개발자 등록 후 Microsoft Store에 위젯을 등록해 설치 경로를 마련했고, Mac은 DMG 다운로드를 제공합니다. 직접 배포 때의 보안 경고를 줄이고 사용자 신뢰를 높이기 위해 배포 방식을 정리했습니다.',
            ],
          },
          {
            title: '(구)뮤직바이패스 > 음악배달공장',
            url: 'https://www.mutainer.com/',
            description: '6개월 동안 Next.js 기반 사용자·관리자 화면의 웹 퍼블리싱과 프론트엔드 개발 전체를 혼자 담당했습니다.',
            tags: ['Next.js', 'Tailwind CSS', 'REST API', 'Zustand', '반응형'],
            imageAspectRatio: '1068 / 836',
            images: [
              { src: 'images/mutainer1.png', alt: 'Mutainer 메인 화면과 피칭 대시보드', width: 1068, height: 836 },
              { src: 'images/mutainer2.png', alt: 'Mutainer 작곡가·클라이언트 로그인 화면', width: 1002, height: 830 },
              { src: 'images/mutainer3.png', alt: 'Mutainer 전송권과 업로드 슬롯 구매 화면', width: 732, height: 827 },
            ],
            details: [
              '버튼·셀렉트 등 기본 UI를 재사용 가능한 컴포넌트로 만들고 Tailwind CSS로 화면을 구성했습니다.',
              '사용자·관리자 화면의 REST API 연동과 액세스 토큰 기반 로그인을 구현했습니다.',
              '아임포트 결제 시스템을 연동하고 음악 재생 플레이어를 개발했습니다.',
              '하단 공통 음악 플레이어의 재생 상태를 Zustand로 관리해 여러 화면에서 전역으로 사용하도록 했습니다. 화면은 반응형으로 구성했습니다.',
            ],
          },
          {
            title: '(구)달빛라이브 > 달라',
            url: 'https://www.dallalive.com/',
            description: 'React 기반 웹 퍼블리싱과 이벤트 페이지의 프론트엔드 개발을 담당했습니다.',
            tags: ['React', 'REST API', '이벤트 페이지', 'UI 컴포넌트'],
            images: [
              { src: 'images/dalla1.png', alt: '달라 모바일 메인 화면과 라이브 방송 목록', width: 374, height: 664 },
              { src: 'images/dalla2.webp', alt: '달라 라디오·영상 방송과 PC 방송 소개', width: 166, height: 296 },
              { src: 'images/dalla3.webp', alt: '달라 스트리머 방송과 실시간 채팅 화면 소개', width: 166, height: 296 },
            ],
            details: [
              '출석 체크와 룰렛 이벤트의 화면 및 사용자 동작을 구현했습니다.',
              '별도의 REST API와 연동한 로그인 기능을 구현했습니다.',
              '스토리보드를 바탕으로 UI/UX 화면을 구성했습니다.',
              '나노 컴포넌트의 구성과 구조를 지속적으로 개선하며 프론트엔드 기능을 개발했습니다.',
            ],
          },
        ],
        highlights: [
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
    description: '디자인을 정확하게 구현하고, 다양한 환경에서 안정적으로 동작하는 화면을 만듭니다.',
    intro: [
      '10년 이상 웹 퍼블리싱을 경험하며 크로스 브라우징, 반응형 웹, 웹 접근성 마크 취득 프로젝트를 수행했습니다. AI 도구 없이도 화면 구조와 스타일을 직접 설계하고 구현할 수 있습니다.',
      'Tailwind CSS·BEM·Flexbox·CSS Grid를 활용하고, 다크 모드와 웹 가이드, 나노 컴포넌트와 Storybook으로 일관성과 재사용성을 갖춘 UI를 구성합니다.',
      'React·Next.js·Vue 2·Vue 3 환경의 퍼블리싱에 대응하며, 차트 라이브러리와 날짜 선택기 등 기존 UI의 디자인과 동작을 서비스에 맞게 커스텀할 수 있습니다.',
    ],
    entries: [
      {
        id: 'publishing-seo',
        title: 'SEO · 검색엔진 최적화',
        description: '검색엔진이 페이지의 내용을 이해하고, 사용자가 검색을 통해 필요한 정보를 찾도록 돕는 작업입니다.',
        highlights: [
          '시맨틱 HTML과 제목 계층, 페이지 제목·설명, 이미지 대체 텍스트와 탐색 가능한 링크를 고려해 읽기 쉽고 검색에 접근 가능한 화면을 구성합니다.',
        ],
      },
      {
        id: 'publishing-geo',
        title: 'GEO · 생성형 AI 검색 최적화',
        description: '생성형 AI 검색에서 콘텐츠가 발견되고, 답변의 근거로 활용될 수 있도록 정보와 페이지 구조를 정리하는 접근입니다.',
        highlights: [
          '기본 SEO를 바탕으로 크롤링 가능한 본문, 명확한 제목과 설명, 확인 가능한 출처를 함께 고려합니다. 사람과 AI가 정보의 맥락을 파악하기 쉬운 화면을 지향합니다.',
        ],
      },
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
    description: '화면 구현에서 데이터와 사용자 동작을 연결하는 개발까지, 실무 경험을 넓혀왔습니다.',
    intro: [
      '퍼블리싱과 프론트엔드 개발을 꾸준히 병행하며, 화면의 완성도와 기능 구현을 함께 다루는 개발자로 성장해왔습니다. React·Next.js·Vue 2·Vue 3 환경에서 UI와 서비스 기능을 연결합니다.',
      '나노 컴포넌트와 재사용 가능한 UI를 구성하고, 컴포넌트 상태와 전역 상태를 관리해 여러 화면에서 일관된 사용자 경험을 구현합니다.',
      'REST API 기반 로그인과 아임포트 결제 시스템 연동 경험이 있으며, 차트·날짜 선택기의 디자인과 동작을 확장하고 서비스에 필요한 기능을 직접 개발할 수 있습니다.',
    ],
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
    id: 'ai-ax',
    title: 'AI & AX',
    description: '반복 업무를 구조화하고, AI를 검증 가능한 흐름에 연결한 작업입니다.',
    entries: [
      {
        id: 'coinjura-widget',
        title: '코인주라 데스크톱 시세 위젯',
        url: 'https://apps.microsoft.com/detail/9PFZK8Q5G2QM?hl=ko-kr&gl=KR',
        description: '거래소 API로 수집한 시세 데이터를 데스크톱 위젯에 연결하고, AI 에이전트를 활용한 기획·개발부터 Microsoft Store 배포와 서비스 운영까지 진행한 개인 프로젝트입니다.',
        highlights: [
          '각 거래소의 API로 시세 데이터를 수집하고, 위젯에서 가격과 변동 정보를 확인할 수 있도록 연결했습니다.',
          'AI 에이전트와 함께 위젯의 기능과 화면 흐름을 구체화하고, 구현 결과를 검토하며 개발을 진행했습니다.',
          'Microsoft Store에 앱을 정식 등록·배포해 사용자가 공식 스토어에서 설치할 수 있는 경로를 마련했습니다.',
          '현재 서비스를 운영하며 사용성과 기능을 지속적으로 개선하고 있습니다.',
        ],
        images: [
          { src: 'images/coinjura_widget1.png', alt: '코인주라 위젯의 관심 코인 시세와 변동률 화면', width: 329, height: 306 },
          { src: 'images/coinjura_widget2.png', alt: '코인주라 위젯의 자동 실행과 투명도 설정 화면', width: 329, height: 306 },
          { src: 'images/coinjura_widget3.png', alt: 'Microsoft Store에 정식 등록된 코인주라 위젯', width: 468, height: 238 },
        ],
      },
      {
        id: 'python-collector',
        title: '코인주라 뉴스 수집기',
        description: 'Python 기반 자료 수집에 실패 유형별 재시도와 Scrapling 보조 수집을 연결하고, 콘텐츠 후보 생성과 선택적 AI 검수까지 단계별로 구성했습니다.',
        highlights: [
          '기본 수집이 실패하면 해당 출처만 재시도하고, 여전히 접근이 어려운 공식 자료는 Scrapling으로 추가 수집을 시도합니다.',
          '재수집 결과를 기존 데이터에 병합하고 날짜·출처를 확인해, 실패 때문에 누락되는 자료를 줄이는 구조를 마련했습니다.',
          '수집·후보 생성·AI 검수를 분리하고 단계별 상태를 기록해, 오류가 발생한 지점과 후속 작업을 확인할 수 있도록 했습니다.',
        ],
      },
      {
        id: 'serena-mcp',
        title: 'Serena MCP · 코드 탐색 효율화',
        url: 'https://github.com/oraios/serena',
        description: 'Serena MCP를 연결해 함수·클래스와 참조 관계 중심으로 코드를 탐색하고, 필요한 코드에 집중하는 작업 방식을 활용했습니다.',
        highlights: [
          '전체 파일을 반복해서 읽는 대신 필요한 코드 범위를 좁혀, AI에 전달하는 컨텍스트와 입력 토큰 부담을 줄이는 데 활용합니다.',
          '프로젝트 구조와 기능별 분석 내용을 메모리로 정리해 재사용할 수 있어, 큰 프로젝트나 특정 기능을 이어서 다루는 작업에 적합합니다.',
        ],
      },
      {
        id: 'ai-agent-concepts',
        title: 'AI 에이전트 활용 이해',
        description: '목표와 맥락을 전달하고, 반복 절차와 도구를 연결해 실행 결과를 검증하는 흐름입니다.',
        skillGroups: [
          {
            title: '프롬프트 · 목표 전달',
            items: [
              'AI에게 작업 목표, 제약 조건, 결과 형식을 전달하는 지시입니다.',
              '완료 기준과 예시를 명확히 제시해 요청 의도를 구체화합니다.',
            ],
          },
          {
            title: '컨텍스트 · 판단에 필요한 맥락',
            items: [
              'AI가 참고하는 코드, 문서, 대화 기록과 작업 상태입니다.',
              '필요한 정보와 최신 상태를 정리해 잘못된 가정과 맥락 누락을 줄입니다.',
            ],
          },
          {
            title: '스킬 · 반복 절차 재사용',
            items: [
              '특정 작업의 지침, 참고 자료, 실행 절차를 묶은 재사용 단위입니다.',
              '반복 업무의 규칙을 정리해 매번 같은 기준으로 작업하도록 돕습니다.',
            ],
          },
          {
            title: 'MCP · 도구와 데이터 연결',
            items: [
              'AI가 외부 도구와 데이터에 접근하도록 연결하는 표준 프로토콜입니다.',
              '문서 조회나 서비스 작업을 연결하고, 필요한 접근 권한을 관리합니다.',
            ],
          },
          {
            title: '하네스 · 에이전트 실행 관리',
            items: [
              '모델 호출, 도구 실행, 작업 상태와 권한을 관리하는 실행 체계입니다.',
              '여러 단계의 작업을 이어 가고, 오류 처리와 필요한 승인 과정을 관리합니다.',
            ],
          },
          {
            title: 'Evals · 결과 검증과 개선',
            items: [
              'AI의 결과를 정해 둔 기준과 테스트 사례로 평가하는 과정입니다.',
              '프롬프트와 작업 절차를 바꾼 뒤 품질을 비교해 개선 여부를 확인합니다.',
            ],
          },
        ],
      },
      { id: 'ai-improvements', title: 'AI 사용 시 문제점과 개선 방향', description: '오류와 검증 부담을 줄이기 위해 적용한 기준을 정리합니다.' },
      { id: 'coin-price-program', title: '코인 시세 프로그램 개발', description: '시세 데이터를 사용자 화면과 연결한 과정을 소개합니다.' },
      { id: 'microsoft-store', title: 'Windows 공식 앱 스토어 등록', description: '배포 경로와 사용자 설치 경험을 정리합니다.' },
      { id: 'ai-api', title: 'AI API 활용 예시', description: 'API를 기능에 연결하고 결과를 검토하는 흐름을 소개합니다.' },
    ],
  },
]

export function isPortfolioEntryVisible(entry: PortfolioEntry) {
  return Boolean(entry.component || entry.intro || entry.skillGroups || entry.featuredProjects || entry.highlights || entry.image || entry.images?.length || entry.points?.length)
}

export function findPortfolioEntry(id: string) {
  for (const category of portfolioCategories) {
    const entry = category.entries.find((candidate) => candidate.id === id)
    if (entry?.points?.length) return { category, entry }
  }
  return undefined
}
