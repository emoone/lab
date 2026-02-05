# Lab

다양한 기술을 실험하고 학습하는 공간입니다.

**Status**: 🔄 In Progress  
**Last Updated**: 2026-02-05

---

## Tech Stack

### Core

<div align="start">

<img src="https://img.shields.io/badge/SvelteKit_2-FF3E00?logo=svelte&style=for-the-badge&logoColor=white" alt="sveltekit"/>
<img src="https://img.shields.io/badge/Svelte_5-FF3E00?logo=svelte&style=for-the-badge&logoColor=white" alt="svelte"/>
<img src="https://img.shields.io/badge/TypeScript-3178c6?logo=TypeScript&style=for-the-badge&logoColor=white"/>
<img src="https://img.shields.io/badge/TailwindCSS_4-06B6D4?logo=tailwindcss&style=for-the-badge&logoColor=white"/>
<img src="https://img.shields.io/badge/Vite_7-646CFF?logo=vite&style=for-the-badge&logoColor=white"/>
<img src="https://img.shields.io/badge/Bun-000000?logo=bun&style=for-the-badge&logoColor=white"/>
<img src="https://img.shields.io/badge/Vercel-000000?logo=vercel&style=for-the-badge&logoColor=white"/>

</div>

### Libraries

| 카테고리       | 라이브러리            | 설명              |
| -------------- | --------------------- | ----------------- |
| **UI**         | Bits UI               | 헤드리스 컴포넌트 |
| **Form**       | Superforms + Formsnap | 폼 상태관리 + UI  |
| **Validation** | Zod                   | 스키마 검증       |
| **Animation**  | Motion One            | 애니메이션        |
| **i18n**       | Paraglide             | 다국어 지원       |

---

## 빠른 시작

```bash
# 의존성 설치
bun install

# 개발 서버 실행
bun run dev
```

http://localhost:5173 에서 확인하세요

---

## 주요 명령어

| 명령어              | 설명                   |
| ------------------- | ---------------------- |
| `bun run dev`       | 개발 서버 실행         |
| `bun run build`     | 프로덕션 빌드          |
| `bun run preview`   | 빌드 결과 미리보기     |
| `bun run check`     | TypeScript 타입 검사   |
| `bun run lint`      | ESLint + Prettier 검사 |
| `bun run format`    | Prettier 포맷팅        |
| `bun run test`      | 전체 테스트 실행       |
| `bun run test:unit` | Vitest 유닛 테스트     |
| `bun run test:e2e`  | Playwright E2E 테스트  |

---

## 프로젝트 구조

```
src/
├── lib/
│   ├── components/         # 재사용 컴포넌트
│   │   ├── common/         # 공통 컴포넌트 (Seo 등)
│   │   ├── container/      # 레이아웃 컴포넌트 (Header 등)
│   │   ├── page/           # 페이지별 컴포넌트
│   │   └── resume/         # 이력서 컴포넌트
│   ├── paraglide/          # i18n 자동 생성 파일
│   ├── styles/             # 글로벌 CSS
│   └── index.ts            # 라이브러리 엔트리
├── routes/
│   ├── +layout.svelte      # 전역 레이아웃
│   ├── +page.svelte        # 홈페이지
│   ├── resume/             # 이력서 페이지
│   └── demo/               # 데모 페이지들
├── app.html                # HTML 템플릿
├── app.d.ts                # 타입 선언
├── hooks.ts                # 클라이언트 훅 (reroute)
└── hooks.server.ts         # 서버 훅 (paraglide)
static/
└── favicon.svg             # 정적 파일
```

---

## 주요 기능

| 기능        | 설명                | 기술                |
| ----------- | ------------------- | ------------------- |
| **i18n**    | 다국어 지원         | Paraglide           |
| **SEO**     | 메타 태그 관리      | svelte:head         |
| **Styling** | 유틸리티 퍼스트 CSS | Tailwind CSS 4      |
| **Testing** | 유닛 + E2E 테스트   | Vitest + Playwright |
| **Linting** | 코드 품질 관리      | ESLint + Prettier   |
| **Deploy**  | 자동 배포           | Vercel              |

---

## Experiments

| 이름      | 경로              | 설명               |
| --------- | ----------------- | ------------------ |
| Resume    | `/resume`         | 이력서 페이지      |
| Paraglide | `/demo/paraglide` | i18n 다국어 테스트 |

---

## 개발 도구

- **IDE**: Cursor
- **Package Manager**: Bun
- **Formatter**: Prettier (+ svelte, tailwindcss, organize-imports 플러그인)
- **Linter**: ESLint 9 (Flat Config)

---

## 배포

Vercel에 자동 배포

```bash
# 수동 배포 (선택)
vercel --prod
```

---

## 라이선스

MIT License
