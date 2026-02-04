<script lang="ts">
  const basicInfo = [
    { label: '이름', value: '이문' },
    { label: '연락처', value: '010-2170-3990' },
    { label: '이메일', value: 'lw8610@naver.com' },
    { label: 'GitHub', value: '(GitHub URL)' },
  ];

  const skills = {
    frontend: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'CSS Modules',
      'React Hook Form',
      'Context API',
      'Video.js',
      'Canvas API',
      'Web Animations API',
    ],
    stateManagement: ['Recoil', 'Context API'],
    devops: [
      'AWS (ECS, VPC, ALB, Route53, EC2, RDS)',
      'Edgio CDN',
      'GitHub Actions',
      'CI/CD',
    ],
    testing: ['Jest', 'Google Analytics'],
    collaboration: ['Git', 'GitHub', 'Figma', 'Taskworld', 'Slack', 'Asana'],
  };
</script>

<!-- Header -->
<header class="mb-12 border-b border-gray-200 pb-8">
  <h1 class="mb-4 text-4xl font-bold text-gray-900">이력서</h1>
  <p class="text-lg text-gray-600">
    Frontend Developer | 5년차 (2021.10 ~ 현재)
  </p>
</header>

<!-- 기본 정보 -->
<section class="mb-12">
  <h2 class="mb-4 text-2xl font-semibold text-gray-900">기본 정보</h2>
  <div class="grid grid-cols-2 gap-4 rounded-lg bg-gray-50 p-6">
    {#each basicInfo as info}
      <div>
        <span class="font-medium text-gray-600">{info.label}</span>
        <p class="text-gray-900">{info.value}</p>
      </div>
    {/each}
  </div>
</section>

<!-- 경력 요약 -->
<section class="mb-12">
  <h2 class="mb-4 text-2xl font-semibold text-gray-900">경력 요약</h2>
  <p class="leading-relaxed text-gray-700">
    웹툰/콘텐츠 플랫폼 전문 프론트엔드 개발자로서, 대규모 서비스의 아키텍처 개선
    및 성능 최적화 경험을 보유하고 있습니다.
  </p>
</section>

<!-- 경력 사항 -->
<section class="mb-12">
  <h2 class="mb-6 text-2xl font-semibold text-gray-900">경력 사항</h2>

  <div class="mb-8">
    <h3 class="mb-2 text-xl font-semibold text-gray-800">
      탑툰(TopToon) | Frontend Developer
    </h3>
    <p class="mb-4 text-gray-600">2021.10 ~ 현재</p>
    <p class="mb-6 text-gray-700">
      글로벌, 일본 2개 지역 웹툰 플랫폼의 유저 서비스 및 관리자 시스템 개발 및
      운영 (총 4개 프로젝트)
    </p>

    <!-- 글로벌 탑툰 -->
    <div class="mb-8 border-l-4 border-blue-500 pl-4">
      <h4 class="mb-4 text-lg font-semibold text-gray-800">
        글로벌 탑툰 (Global TopToon)
      </h4>

      <div class="mb-6">
        <h5 class="mb-2 font-medium text-gray-800">
          1. 글로벌 유저 서비스 개선
        </h5>
        <p class="mb-2 text-sm text-gray-600">
          2022.11 ~ 2024.11 (24개월) | 프론트엔드 메인 담당
        </p>
        <ul class="list-inside list-disc space-y-1 text-gray-700">
          <li>CRA(Create React App) → Next.js 마이그레이션 진행</li>
          <li>서버 사이드 렌더링(SSR) 도입으로 초기 로딩 속도 및 SEO 개선</li>
        </ul>
      </div>

      <div class="mb-6">
        <h5 class="mb-2 font-medium text-gray-800">2. 글로벌 관리자 시스템</h5>
        <p class="mb-2 text-sm text-gray-600">
          2022.11 ~ 2024.11 (24개월) | 프론트엔드 메인 담당
        </p>
        <ul class="list-inside list-disc space-y-1 text-gray-700">
          <li>퍼블리싱, 데이터 가공, 유지보수, 개선작업</li>
        </ul>
      </div>
    </div>

    <!-- 일본 탑툰 -->
    <div class="mb-8 border-l-4 border-red-500 pl-4">
      <h4 class="mb-4 text-lg font-semibold text-gray-800">
        일본 탑툰 (Japan TopToon)
      </h4>

      <div class="mb-6">
        <h5 class="mb-2 font-medium text-gray-800">3. 일본 유저 서비스</h5>
        <p class="mb-2 text-sm text-gray-600">
          2024.02 ~ 현재 | 프론트엔드 담당
        </p>
        <ul class="list-inside list-disc space-y-1 text-gray-700">
          <li>
            기존 Context API 기반 상태관리를 Clean Architecture 구조로 전환
          </li>
          <li>레이어 분리를 통한 유지보수성 및 테스트 용이성 향상</li>
          <li>지속적인 서비스 유지보수 및 기능 개선</li>
        </ul>
      </div>

      <div class="mb-6">
        <h5 class="mb-2 font-medium text-gray-800">
          4. 일본 관리자 시스템 마이그레이션
        </h5>
        <p class="mb-2 text-sm text-gray-600">
          2024.07 ~ 2025.06 (11개월) | 프론트엔드 전담
        </p>
        <ul class="list-inside list-disc space-y-1 text-gray-700">
          <li>CRA → Next.js 프로젝트 전환 및 전면 리뉴얼</li>
          <li>재사용 가능한 컴포넌트 설계 및 디자인 시스템 구축</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<!-- 주요 성과 -->
<section class="mb-12">
  <h2 class="mb-6 text-2xl font-semibold text-gray-900">
    주요 성과 및 기술 기여
  </h2>

  <!-- 핵심 기능 개발 -->
  <div class="mb-8">
    <h3 class="mb-4 text-xl font-semibold text-gray-800">핵심 기능 개발</h3>

    <div class="mb-6 rounded-lg bg-blue-50 p-6">
      <h4 class="mb-2 font-semibold text-blue-900">
        비디오 플레이어 시스템 구현
      </h4>
      <p class="mb-3 text-sm text-blue-700">
        2025.11 ~ 2025.12 (1개월) | 단독 설계 및 개발
      </p>
      <ul class="list-inside list-disc space-y-1 text-gray-700">
        <li>Video.js 라이브러리 기반 커스텀 비디오 플레이어 개발</li>
        <li>HLS 스트리밍 지원 및 다중 소스 폴백 시스템 구현</li>
        <li>더블탭/더블클릭 기반 10초 탐색(Seek) 기능 개발</li>
        <li>키보드 단축키 지원 (재생/일시정지, 볼륨, 탐색, 전체화면)</li>
      </ul>
    </div>

    <div class="mb-6 rounded-lg bg-purple-50 p-6">
      <h4 class="mb-2 font-semibold text-purple-900">
        EPUB 뷰어 시스템 개발 (핵심 프로젝트)
      </h4>
      <p class="mb-3 text-sm text-purple-700">
        2025.12 ~ 2026.01 (1개월) | 단독 설계 및 개발
      </p>
      <ul class="list-inside list-disc space-y-1 text-gray-700">
        <li>Canvas 기반 고성능 이미지 렌더링 시스템 구축</li>
        <li>
          다양한 읽기 모드 지원: 양면/단면(스프레드), RTL(오른쪽→왼쪽) 방향
        </li>
        <li>터치/마우스 제스처 기반 네비게이션 및 핀치 줌 구현</li>
        <li>Web Animations API를 활용한 부드러운 페이지 전환 애니메이션</li>
      </ul>
    </div>
  </div>

  <!-- 공통 인프라 -->
  <div class="mb-8">
    <h3 class="mb-4 text-xl font-semibold text-gray-800">
      공통 인프라 및 개발 환경 구축
    </h3>
    <ul class="list-inside list-disc space-y-2 text-gray-700">
      <li>전체 프로젝트에 Tailwind CSS 적용 및 스타일 가이드 문서화</li>
      <li>React Hook Form 도입으로 복잡한 폼 상태 관리 효율화</li>
      <li>Edgio(CDN) 인프라 구축 및 CI/CD 파이프라인 구축</li>
      <li>AWS 클라우드 아키텍처 설계 (ECS, VPC, ALB, Route53)</li>
    </ul>
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
      담당해왔습니다.
    </p>
    <p>
      레거시 프로젝트의 현대화(CRA → Next.js), 아키텍처 개선(Context API → Clean
      Architecture), 그리고 EPUB 뷰어, 비디오 플레이어와 같은 복잡한 기능
      개발까지 다양한 도전을 통해 성장해왔습니다.
    </p>
    <p>
      특히 성능 최적화와 사용자 경험 개선에 관심이 많아, Canvas 기반 고성능
      렌더링, 비동기 이미지 처리, 메모리 캐싱, GPU 가속 애니메이션 등의 기술을
      적극 활용하고 있습니다.
    </p>
  </div>
</section>
