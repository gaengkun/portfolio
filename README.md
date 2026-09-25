# Portfolio Index

React · TypeScript · Vite · Tailwind CSS로 만든 포트폴리오 첫 화면입니다.

## 실행

```powershell
npm install
npm run dev
```

배포용 빌드는 GitHub에 푸시하기 직전에 `npm run build`로 한 번 확인합니다.

## 목차와 상세 페이지 수정

모든 1차 카테고리와 2차 제목·설명은 [`src/content.ts`](src/content.ts)의 `portfolioCategories`에서 관리합니다. 새 항목은 해당 카테고리의 `entries` 배열에 추가합니다. 상단 메뉴는 각 1차 카테고리로 이동합니다.

상세 페이지가 필요한 항목은 `points`에 본문을 적습니다. `points`가 있으면 목록에 More 링크가 표시됩니다.
```ts
{
  id: 'unique-work-id',
  title: '작업 제목',
  description: '제목 아래에 보일 설명',
  points: ['More 화면에서 설명할 핵심 내용'],
}
```

목록에서 본문을 바로 보여줄 항목은 `body` 배열에 이어지는 문단을 넣습니다. `MY > 자기소개`가 예시입니다.

기술을 그룹별 목록으로 보여주려면 `skillGroups`에 `{ title, items }`를 추가합니다. `MY > 스킬`이 예시이며 이 항목에도 상세 링크와 More가 표시되지 않습니다.

대표 프로젝트를 강조하려면 `featuredProjects`에 제목·설명·태그를 넣고, 나머지 경력은 `highlights`에 추가합니다. `MY > 주요 프로젝트 안내`가 예시입니다.

이미지를 보이려면 같은 항목에 `image: 'images/work-preview.webp'`를 추가하고 파일을 `public/images/`에 넣습니다. 이미지는 목록에 바로 표시됩니다.

컴포넌트를 바로 보이려면 `src/demos/`에 React 컴포넌트를 만들고 [`src/App.tsx`](src/App.tsx)의 `demoComponents`에 연결한 뒤, 항목에 `component` 값을 지정합니다. `tailwind`, `date-picker`, `zustand`가 예시입니다. 컴포넌트 항목에는 More 링크가 표시되지 않습니다. Zustand 예시의 코드는 `prism-react-renderer`로 표시합니다.

제목과 설명만 있는 초안 항목과 내용이 없는 카테고리는 공개 화면에서 숨깁니다. `points`, `body`, `skillGroups`, `featuredProjects`, `highlights`, `image`, `component` 중 하나를 추가하면 표시됩니다. `id`는 전체 항목에서 중복되지 않아야 합니다. 확인되지 않은 작업별 역할·성과는 실제 자료에 맞춰 작성하세요. `메인 구성`의 이미지는 실제 작업 화면이 아닌 구성 방식 예시입니다.
