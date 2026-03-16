<script lang="ts">
  let activeTab: 'career' | 'portfolio' = 'career';

  const basicInfo = [
    { label: '이름', value: '이문' },
    { label: '연락처', value: '010-이하나칠공-삼구구영' },
    { label: '이메일', value: 'lw8610@naver.com' },
    { label: 'GitHub', value: '(GitHub URL)' },
  ];

  const skills = {
    frontend: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Styled Components',
      'CSS Modules',
      'React Hook Form',
      'Context API',
      'Video.js',
      'Canvas API',
      'Web Animations API',
      'Lottie',
    ],
    stateManagement: ['Recoil', 'Context API'],
    devops: [
      'AWS (ECS, VPC, ALB, Route53, EC2, RDS, S3, CloudFront, Lambda)',
      'Edgio CDN (Layer0 → Edgio v7)',
      'GitHub Actions',
      'CI/CD',
    ],
    testing: ['Jest', 'Google Analytics'],
    collaboration: ['Git', 'GitHub', 'Figma', 'Taskworld', 'Slack', 'Asana'],
  };

  const portfolioProjects = [
    {
      title: '일본 탑툰 사이트 구축 및 운영',
      period: '2022.04 ~ 현재',
      role: '프론트엔드 메인 담당',
      color: 'red',
      url: 'toptoon.jp',
      tags: ['React', 'Next.js', 'TypeScript', 'Styled Components'],
      description:
        '일본 웹툰 플랫폼 toptoon.jp의 전체 프론트엔드를 초기 구축부터 담당. 메인/연재/뷰어/충전소/마이페이지/검색/이벤트 등 전 영역 개발 및 280건 이상의 기능 개발·개선 태스크 수행.',
      achievements: [
        '사이트 전체 프론트엔드 초기 구축 (메인, 연재, 뷰어, 충전소, 마이페이지 등 전 영역)',
        '소셜 로그인 5종 연동 (야후 재팬, 라인, 트위터, 구글, 애플)',
        '성인인증 프로세스: 비성인/성인 모드 토글, 비트연산 기반 작품 노출 분기',
        '사이트 리뉴얼(2025~): UI/UX 전면 변경, 디자인시스템 적용',
      ],
    },
    {
      title: '다중 PG 결제 시스템',
      period: '2022.06 ~ 2024.11',
      role: '프론트엔드 개발',
      color: 'green',
      tags: ['React', 'TypeScript', 'PG 연동'],
      description:
        '일본/글로벌 탑툰의 결제 인프라 전체 프론트엔드 구축. 5개 PG사 연동, 카드 브랜드별 자동 라우팅, 할인 이벤트 시스템, 법률 대응까지 결제 전 영역 담당.',
      achievements: [
        '5개 PG사 프론트엔드 연동: 엑심베이, 소프트뱅크, 라인페이, GMO, 페이먼트월',
        '카드 브랜드별 PG 자동 라우팅 결제 수단 레이어 개발',
        '미친결제(한정 할인) 시스템: 유저 그룹별 자동 노출, 타이머, 관리자 상품 그룹 관리',
        '일본 자금법 대응 코인 소멸(6개월) 정책 구현',
      ],
    },
    {
      title: 'EPUB 뷰어 시스템',
      period: '2025.12 ~ 2026.01 (1개월)',
      role: '단독 설계 및 개발',
      color: 'purple',
      tags: ['Canvas API', 'Web Animations API', 'TypeScript'],
      description:
        '만화(요코요미) 콘텐츠를 위한 Canvas 기반 고성능 EPUB 뷰어를 단독 설계 및 개발. 다양한 읽기 모드와 제스처 인터랙션을 지원하는 미디어 뷰어 시스템.',
      achievements: [
        'Canvas 기반 고성능 이미지 렌더링 시스템 구축',
        '양면/단면(스프레드), RTL(오른쪽→왼쪽) 등 다양한 읽기 모드 지원',
        '터치/마우스 제스처 기반 네비게이션 및 핀치 줌 구현',
        'Web Animations API를 활용한 부드러운 페이지 전환 애니메이션',
      ],
    },
    {
      title: '비디오 플레이어 시스템',
      period: '2025.11 ~ 2025.12 (1개월)',
      role: '단독 설계 및 개발',
      color: 'blue',
      tags: ['Video.js', 'HLS', 'TypeScript'],
      description:
        '영상 콘텐츠 제공을 위한 커스텀 비디오 플레이어 시스템. HLS 스트리밍, 다중 소스 폴백, 인터랙티브 탐색 등을 지원.',
      achievements: [
        'Video.js 기반 커스텀 비디오 플레이어 개발',
        'HLS 스트리밍 지원 및 다중 소스 폴백 시스템 구현',
        '더블탭/더블클릭 10초 탐색, 키보드 단축키 등 인터랙션 개발',
      ],
    },
    {
      title: '프로모션 및 마케팅 시스템',
      period: '2022.09 ~ 2025.06',
      role: '프론트엔드 개발',
      color: 'amber',
      tags: ['React', 'TypeScript', 'Lottie', 'Canvas API'],
      description:
        '유저 리텐션 및 매출 향상을 위한 다양한 프로모션 시스템 전체 프론트엔드 개발. 출석체크-룰렛, 친구초대, 투표, 기획전, 미친결제 등.',
      achievements: [
        '출석체크/룰렛 시스템: Lottie 애니메이션, 관리자 확률 설정, 연속 출석 리워드, 굿즈 연동',
        '친구초대 이벤트: 초대 코드, 포인트 전환, 랭킹 시스템, 통계 대시보드',
        '연말 인기작품 투표 프로모션: 투표 화면, 종료 처리, 프로모션 자동화',
      ],
    },
    {
      title: '아키텍처 개선 및 인프라',
      period: '2023.02 ~ 현재',
      role: '프론트엔드 리드',
      color: 'slate',
      tags: ['AWS', 'Edgio CDN', 'GitHub Actions', 'Next.js', 'Dynamic Import'],
      description:
        '기술 부채 해소와 서비스 안정성 확보를 위한 아키텍처 개선, 인프라 이관, CI/CD 파이프라인 구축 등 기술 기반 작업 주도.',
      achievements: [
        'Dynamic Import 전환으로 번들 분리 및 초기 로딩 퍼포먼스 개선',
        '인증 처리를 페이지별 수동 모달에서 Middleware 기반 글로벌 처리로 전환',
        'CDN 이관: Layer0 → Edgio v7 마이그레이션 (간헐적 Project Error 장애 해소)',
        'AWS ECS(Fargate) + CloudFront/S3 CDN + Lambda 이미지 리사이징 파이프라인 구축',
        'GitHub Actions 기반 CI/CD 파이프라인으로 staging/live 배포 자동화',
        'CRA → Next.js 마이그레이션 (관리자 시스템 전면 전환)',
      ],
    },
  ];
</script>

<!-- Header -->
<header class="mb-8 border-b border-gray-200 pb-6">
  <h1 class="mb-2 text-4xl font-bold text-gray-900">이문</h1>
  <p class="mb-4 text-lg text-gray-600">
    Frontend Developer | 5년차 (2021.10 ~ 현재)
  </p>
  <div class="flex flex-wrap gap-3 text-sm text-gray-500">
    {#each basicInfo as info}
      <span class="rounded-full bg-gray-100 px-3 py-1">
        <span class="font-medium text-gray-700">{info.label}</span>
        {info.value}
      </span>
    {/each}
  </div>
</header>

<!-- 탭 네비게이션 -->
<nav class="mb-10 flex gap-1 rounded-lg bg-gray-100 p-1">
  <button
    class="flex-1 rounded-md px-6 py-3 text-sm font-semibold transition-all {activeTab ===
    'career'
      ? 'bg-white text-gray-900 shadow-sm'
      : 'text-gray-500 hover:text-gray-700'}"
    on:click={() => (activeTab = 'career')}
  >
    경력기술서
  </button>
  <button
    class="flex-1 rounded-md px-6 py-3 text-sm font-semibold transition-all {activeTab ===
    'portfolio'
      ? 'bg-white text-gray-900 shadow-sm'
      : 'text-gray-500 hover:text-gray-700'}"
    on:click={() => (activeTab = 'portfolio')}
  >
    포트폴리오
  </button>
</nav>

<!-- ==================== 경력기술서 ==================== -->
{#if activeTab === 'career'}
  <!-- 경력 요약 -->
  <section class="mb-12">
    <h2 class="mb-4 text-2xl font-semibold text-gray-900">경력 요약</h2>
    <p class="leading-relaxed text-gray-700">
      웹툰/콘텐츠 플랫폼 전문 프론트엔드 개발자로서, 글로벌 및 일본 2개 리전의
      유저 서비스와 관리자 시스템(총 4개 프로젝트)을 메인으로 담당해왔습니다.
      일본 탑툰 사이트 초기 구축부터 참여하여 메인/연재/뷰어/충전소/마이페이지
      등 전체 서비스 프론트엔드를 개발하였으며, 다수의 PG 결제 시스템(엑심베이,
      소프트뱅크, 라인페이, GMO 등) 연동, 출석체크/룰렛/투표 등 프로모션 시스템,
      EPUB/비디오 뷰어, 성인인증/비성인 모드 분기 등 복잡한 비즈니스 로직을
      설계·구현하였습니다. 아키텍처 전면 개선(디자인 패턴 리팩토링, Dynamic
      Import 전환), CDN 이관(Layer0 → Edgio v7) 등 기술 부채 해소 작업도
      주도하였습니다.
    </p>
  </section>

  <!-- 경력 사항 -->
  <section class="mb-12">
    <h2 class="mb-6 text-2xl font-semibold text-gray-900">경력 사항</h2>

    <div class="mb-8">
      <div class="mb-4 flex items-baseline justify-between">
        <h3 class="text-xl font-semibold text-gray-800">
          탑툰(TopToon) | Frontend Developer
        </h3>
        <span class="text-sm text-gray-500">2021.10 ~ 현재</span>
      </div>
      <p class="mb-6 text-gray-700">
        글로벌, 일본 2개 지역 웹툰 플랫폼의 유저 서비스 및 관리자 시스템 개발 및
        운영 (총 4개 프로젝트)
      </p>

      <!-- 일본 탑툰 -->
      <div class="mb-8 border-l-4 border-red-500 pl-4">
        <div class="mb-4 flex items-baseline justify-between">
          <h4 class="text-lg font-semibold text-gray-800">
            일본 탑툰 (Japan TopToon)
          </h4>
          <span class="text-sm text-gray-500">2022.04 ~ 현재</span>
        </div>

        <div class="mb-6">
          <h5 class="mb-2 font-medium text-gray-800">
            유저 서비스 (toptoon.jp)
          </h5>
          <p class="mb-3 text-sm text-gray-600">
            프론트엔드 메인 담당 | 280+ 태스크 수행
          </p>

          <p class="mt-3 mb-2 text-sm font-medium text-gray-800">
            서비스 초기 구축 (2022)
          </p>
          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>
              사이트 전체 프론트엔드 초기 구축: 메인, 연재, 뷰어, 충전소,
              마이페이지, 회차리스트, 검색, 이벤트, 신작, 선물함, 해시태그
              페이지 등 전 영역 개발
            </li>
            <li>
              소셜 로그인 5종 연동 (야후 재팬, 라인, 트위터, 구글, 애플) 및 계정
              연결/해제 기능 개발
            </li>
            <li>
              성인인증 프로세스 구현: 비성인/성인 모드 토글, 비트연산 기반 작품
              노출 분기, 연재 UI 모드별 변경
            </li>
            <li>엑솔라(Xsolla) 결제 UI 연동 및 프론트 결제 프로세스 구현</li>
          </ul>

          <p class="mt-4 mb-2 text-sm font-medium text-gray-800">
            결제 시스템 고도화 (2022~2023)
          </p>
          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>
              다중 PG 연동: 엑심베이(VISA/마스터), 소프트뱅크(JCB/아멕스
              /다이너스), 라인페이, GMO 등 4개 PG사 프론트엔드 연동
            </li>
            <li>카드 브랜드별 PG 자동 라우팅 결제 수단 레이어 설계</li>
            <li>
              충전소 UI 전면 개편: 보너스코인 뱃지, 미니결제창, 코인부족 → 강제
              결제창 노출 등 결제 전환율 향상
            </li>
            <li>
              일본 자금법 대응: 코인 유효기간(6개월) 소멸 정책, 소멸 예정 /공시
              레이어, 약관 수정
            </li>
          </ul>

          <p class="mt-4 mb-2 text-sm font-medium text-gray-800">
            프로모션 시스템 (2022~2025)
          </p>
          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>
              미친결제(한정 할인) 시스템: 유저 그룹별 자동 노출, 타이머, 관리자
              상품 그룹 관리 기능 일체 개발
            </li>
            <li>
              출석체크/룰렛 시스템: Lottie 애니메이션, 관리자 확률 설정, 연속
              출석 리워드, 굿즈 연동
            </li>
            <li>
              친구초대 이벤트: 초대 코드, 포인트 전환, 랭킹 시스템, 통계
              대시보드
            </li>
          </ul>

          <p class="mt-4 mb-2 text-sm font-medium text-gray-800">
            아키텍처 개선 및 성능 최적화 (2023~현재)
          </p>
          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>
              전체 코드 구조 개선: 디자인 패턴 변경 및 프로세스 리팩토링 (전
              페이지 풀테스트 후 라이브)
            </li>
            <li>
              Dynamic Import 전환으로 번들 분리 및 초기 로딩 퍼포먼스 개선
            </li>
            <li>
              인증 처리를 페이지별 수동 모달에서 Middleware 기반 글로벌 처리로
              전환
            </li>
            <li>CDN 이관: Layer0 → Edgio v7 마이그레이션</li>
          </ul>
        </div>

        <div class="mb-6">
          <h5 class="mb-2 font-medium text-gray-800">
            관리자 시스템 (console.toptoonplus.com)
          </h5>
          <p class="mb-3 text-sm text-gray-600">프론트엔드 전담</p>
          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>
              매출 통계 시스템: 전체/결제 통계, 일별/시간별 데이터, PG사별 필터,
              코인 통계 프로세스
            </li>
            <li>
              프로모션 운영 도구: 캠페인/룰렛/투표 관리자 페이지 개발 (확률
              설정, 리워드 관리)
            </li>
            <li>CRA → Next.js 전면 전환 및 디자인시스템 적용 리뉴얼 진행</li>
          </ul>
        </div>
      </div>

      <!-- 글로벌 탑툰 -->
      <div class="mb-8 border-l-4 border-blue-500 pl-4">
        <div class="mb-4 flex items-baseline justify-between">
          <h4 class="text-lg font-semibold text-gray-800">
            글로벌 탑툰 (Global TopToon)
          </h4>
          <span class="text-sm text-gray-500">2021.10 ~ 2023.12</span>
        </div>

        <div class="mb-6">
          <h5 class="mb-2 font-medium text-gray-800">
            유저 서비스 · 관리자 시스템
          </h5>
          <p class="mb-3 text-sm text-gray-600">프론트엔드 담당</p>
          <ul class="list-inside list-disc space-y-1 text-gray-700">
            <li>
              CRA 기반 레거시 코드 리팩토링 및 SDK 모델 정리를 통한 글로벌/일본
              공통 코드 기반 마련
            </li>
            <li>
              페이먼트월(Paymentwall) PG 연동 및 충전소/미니 결제창 UI 구현
            </li>
            <li>유출자/의심자 차단 시스템 프론트엔드 구현</li>
            <li>
              매출 통계 대시보드 개발: 일별/시간별 결제 통계 데이터 시각화
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- 기술 스택 -->
  <section class="mb-12">
    <h2 class="mb-6 text-2xl font-semibold text-gray-900">기술 스택</h2>
    <div class="grid gap-6 md:grid-cols-2">
      <div class="rounded-lg bg-gray-50 p-4">
        <h3 class="mb-3 font-semibold text-gray-800">Frontend</h3>
        <div class="flex flex-wrap gap-2">
          {#each skills.frontend as skill}
            <span
              class="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800"
            >
              {skill}
            </span>
          {/each}
        </div>
      </div>

      <div class="rounded-lg bg-gray-50 p-4">
        <h3 class="mb-3 font-semibold text-gray-800">DevOps / Infra</h3>
        <div class="flex flex-wrap gap-2">
          {#each skills.devops as skill}
            <span
              class="rounded-full bg-green-100 px-3 py-1 text-sm text-green-800"
            >
              {skill}
            </span>
          {/each}
        </div>
      </div>

      <div class="rounded-lg bg-gray-50 p-4">
        <h3 class="mb-3 font-semibold text-gray-800">Testing & Monitoring</h3>
        <div class="flex flex-wrap gap-2">
          {#each skills.testing as skill}
            <span
              class="rounded-full bg-yellow-100 px-3 py-1 text-sm text-yellow-800"
            >
              {skill}
            </span>
          {/each}
        </div>
      </div>

      <div class="rounded-lg bg-gray-50 p-4">
        <h3 class="mb-3 font-semibold text-gray-800">Collaboration</h3>
        <div class="flex flex-wrap gap-2">
          {#each skills.collaboration as skill}
            <span
              class="rounded-full bg-gray-200 px-3 py-1 text-sm text-gray-800"
            >
              {skill}
            </span>
          {/each}
        </div>
      </div>
    </div>
  </section>

  <!-- 자기소개 -->
  <section class="mb-12">
    <h2 class="mb-4 text-2xl font-semibold text-gray-900">자기소개</h2>
    <div class="space-y-4 leading-relaxed text-gray-700">
      <p>
        2021년 10월 첫 개발 포지션을 시작으로, 글로벌 및 일본 지역의 웹툰 플랫폼
        유저 서비스와 관리자 시스템(총 4개 프로젝트)의 프론트엔드 전반을
        담당해왔습니다. 특히 일본 탑툰(toptoon.jp)의 경우 사이트 초기 구축부터
        참여하여 메인/연재/뷰어/충전소/마이페이지 등 전체 서비스를 개발하였으며,
        이후 280건 이상의 기능 개발·개선·장애 대응 태스크를 수행하였습니다.
      </p>
      <p>
        5개 PG사(엑심베이, 소프트뱅크, 라인페이, GMO, 페이먼트월) 결제 시스템
        연동, 소셜 로그인(야후/라인/트위터/구글/애플) 구현, 성인인증/비성인 모드
        분기, 출석체크-룰렛/친구초대/투표 등 프로모션 시스템, 일본 자금법 대응
        코인 소멸 정책 등 복잡한 비즈니스 요구사항을 기술적으로 풀어내는 경험을
        쌓아왔습니다.
      </p>
      <p>
        코드 구조 전면 개선, Dynamic Import 전환, Middleware 기반 인증 모듈화,
        CDN 이관(Layer0 → Edgio v7) 등 기술 부채 해소에도 적극적으로 임하며,
        Canvas 기반 EPUB 뷰어, Video.js 기반 비디오 플레이어 등 고도화된 미디어
        시스템을 단독 설계 및 개발한 경험을 보유하고 있습니다.
      </p>
    </div>
  </section>

  <!-- ==================== 포트폴리오 ==================== -->
{:else}
  <section class="mb-8">
    <h2 class="mb-2 text-2xl font-semibold text-gray-900">프로젝트</h2>
    <p class="mb-8 text-gray-600">
      주요 프로젝트별 기술적 기여 내용을 정리한 포트폴리오입니다.
    </p>

    <div class="space-y-8">
      {#each portfolioProjects as project}
        {@const colorMap: Record<string, { border: string; badge: string; dot: string }> = {
          red: {
            border: 'border-red-500',
            badge: 'bg-red-100 text-red-800',
            dot: 'bg-red-500',
          },
          green: {
            border: 'border-green-500',
            badge: 'bg-green-100 text-green-800',
            dot: 'bg-green-500',
          },
          purple: {
            border: 'border-purple-500',
            badge: 'bg-purple-100 text-purple-800',
            dot: 'bg-purple-500',
          },
          blue: {
            border: 'border-blue-500',
            badge: 'bg-blue-100 text-blue-800',
            dot: 'bg-blue-500',
          },
          amber: {
            border: 'border-amber-500',
            badge: 'bg-amber-100 text-amber-800',
            dot: 'bg-amber-500',
          },
          slate: {
            border: 'border-slate-500',
            badge: 'bg-slate-100 text-slate-800',
            dot: 'bg-slate-500',
          },
        }}
        {@const c = colorMap[project.color] || colorMap.blue}
        <article
          class="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md"
        >
          <div class="mb-4 flex items-start justify-between">
            <div>
              <div class="mb-1 flex items-center gap-2">
                <span class="h-2.5 w-2.5 rounded-full {c.dot}"></span>
                <h3 class="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>
              </div>
              <div class="flex items-center gap-3 text-sm text-gray-500">
                <span>{project.period}</span>
                <span>·</span>
                <span>{project.role}</span>
              </div>
            </div>
          </div>

          <p class="mb-4 text-sm leading-relaxed text-gray-700">
            {project.description}
          </p>

          <div class="mb-4 flex flex-wrap gap-1.5">
            {#each project.tags as tag}
              <span
                class="rounded-full px-2.5 py-0.5 text-xs font-medium {c.badge}"
              >
                {tag}
              </span>
            {/each}
          </div>

          <div class="border-t border-gray-100 pt-4">
            <p
              class="mb-2 text-xs font-semibold tracking-wider text-gray-500 uppercase"
            >
              주요 기여
            </p>
            <ul class="list-inside list-disc space-y-1 text-sm text-gray-700">
              {#each project.achievements as achievement}
                <li>{achievement}</li>
              {/each}
            </ul>
          </div>
        </article>
      {/each}
    </div>
  </section>
{/if}
