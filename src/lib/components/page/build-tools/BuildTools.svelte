<script lang="ts">
  type Tool = {
    id: string;
    name: string;
    logo: string;
    tagline: string;
    description: string;
    pros: string[];
    cons: string[];
    useCase: string;
    installCmd: string;
    configFile: string;
    configCode: string;
    usageCode: string;
    links: { label: string; url: string }[];
  };

  const tools: Tool[] = [
    {
      id: 'vite',
      name: 'Vite',
      logo: '⚡',
      tagline: 'Next Generation Frontend Tooling',
      description:
        'ESBuild 기반의 초고속 개발 서버와 Rollup 기반의 프로덕션 번들러를 결합한 차세대 프론트엔드 빌드 도구. HMR(Hot Module Replacement)이 매우 빠르며, React, Vue, Svelte 등 주요 프레임워크를 기본 지원한다.',
      pros: [
        '네이티브 ESM 기반으로 콜드 스타트가 매우 빠름',
        'ESBuild를 활용한 초고속 HMR',
        '플러그인 생태계가 풍부 (Rollup 플러그인 호환)',
        'React, Vue, Svelte, SolidJS 등 공식 템플릿 제공',
        '설정이 간단하고 Zero-config로도 동작',
      ],
      cons: [
        '개발/프로덕션 빌드 도구가 다름 (ESBuild vs Rollup)',
        'CommonJS 모듈 호환 시 이슈가 발생할 수 있음',
        'Webpack 대비 플러그인 수가 적음',
      ],
      useCase: 'SPA, SSR 프레임워크(SvelteKit, Nuxt, Astro), 라이브러리 개발',
      installCmd: 'npm create vite@latest my-app -- --template react-ts',
      configFile: 'vite.config.ts',
      configCode: `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    target: 'es2020',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});`,
      usageCode: `# 개발 서버 시작
npm run dev

# 프로덕션 빌드
npm run build

# 빌드 결과 미리보기
npm run preview`,
      links: [
        { label: '공식 문서', url: 'https://vitejs.dev' },
        { label: 'GitHub', url: 'https://github.com/vitejs/vite' },
      ],
    },
    {
      id: 'tsdown',
      name: 'tsdown',
      logo: '📦',
      tagline: 'The Successor to tsup — powered by Rolldown',
      description:
        'tsup의 후속 프로젝트로, Rust 기반 번들러 Rolldown(Rollup의 Rust 포트) 위에서 동작하는 TypeScript/JavaScript 라이브러리 번들러. 설정이 간단하면서도 ESM/CJS 동시 출력, DTS 생성 등 라이브러리 배포에 필요한 기능을 제공한다.',
      pros: [
        'Rolldown(Rust) 기반으로 tsup 대비 빌드 속도 향상',
        'ESM, CJS, IIFE 등 다중 포맷 동시 출력',
        'TypeScript 선언 파일(.d.ts) 자동 생성',
        'tsup과 유사한 API로 마이그레이션이 쉬움',
        'Zero-config로도 동작 가능',
      ],
      cons: [
        '비교적 새로운 프로젝트로 생태계가 작음',
        'Rolldown이 아직 안정화 단계',
        '복잡한 번들링 시나리오에서 이슈가 있을 수 있음',
      ],
      useCase: 'npm 라이브러리/패키지 번들링, TypeScript 라이브러리 배포',
      installCmd: 'npm install tsdown --save-dev',
      configFile: 'tsdown.config.ts',
      configCode: `import { defineConfig } from 'tsdown';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  splitting: true,
  minify: true,
  outDir: 'dist',
  external: ['react', 'react-dom'],
});`,
      usageCode: `# 빌드
npx tsdown

# watch 모드
npx tsdown --watch

# package.json scripts
{
  "scripts": {
    "build": "tsdown",
    "dev": "tsdown --watch"
  }
}`,
      links: [
        { label: '공식 문서', url: 'https://tsdown.dev' },
        { label: 'GitHub', url: 'https://github.com/nicepkg/tsdown' },
      ],
    },
    {
      id: 'esbuild',
      name: 'ESBuild',
      logo: '🟡',
      tagline: 'An extremely fast bundler for the web',
      description:
        'Go 언어로 작성된 초고속 JavaScript/TypeScript 번들러 겸 트랜스파일러. Webpack이나 Rollup보다 10~100배 빠른 속도를 자랑하며, Vite의 개발 서버 내부에서도 사용된다. 트랜스파일링에 특화되어 있어 다른 도구의 엔진으로도 많이 활용된다.',
      pros: [
        'Go 네이티브 코드로 극한의 빌드 속도',
        'TypeScript, JSX 트랜스파일링 기본 지원',
        'Tree Shaking, Minification 내장',
        'CSS 번들링 지원',
        'API가 간단하고 프로그래매틱 사용이 편리',
      ],
      cons: [
        'TypeScript 타입 체크를 수행하지 않음 (트랜스파일만)',
        'HMR 미지원 (직접 개발 서버 구현 필요)',
        'Code Splitting이 제한적',
        '플러그인 생태계가 Webpack/Rollup 대비 작음',
      ],
      useCase:
        '빌드 도구 내부 엔진, 빠른 트랜스파일링, 간단한 번들링, CI/CD 파이프라인',
      installCmd: 'npm install esbuild --save-dev',
      configFile: 'build.mjs (스크립트 기반)',
      configCode: `import * as esbuild from 'esbuild';

await esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outdir: 'dist',
  format: 'esm',
  platform: 'browser',
  target: 'es2020',
  minify: true,
  sourcemap: true,
  splitting: true,
  treeShaking: true,
  loader: {
    '.png': 'file',
    '.svg': 'dataurl',
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
});`,
      usageCode: `# CLI로 직접 빌드
npx esbuild src/index.ts --bundle --outdir=dist --format=esm --minify

# watch 모드
npx esbuild src/index.ts --bundle --outdir=dist --watch

# serve 모드 (간단한 개발 서버)
npx esbuild src/index.ts --bundle --outdir=dist --serve=8000`,
      links: [
        { label: '공식 문서', url: 'https://esbuild.github.io' },
        { label: 'GitHub', url: 'https://github.com/evanw/esbuild' },
      ],
    },
    {
      id: 'webpack',
      name: 'Webpack',
      logo: '📘',
      tagline: 'The most battle-tested bundler',
      description:
        '가장 오래되고 널리 사용되는 JavaScript 모듈 번들러. 엄청난 플러그인/로더 생태계를 보유하고 있으며, 복잡한 빌드 요구사항을 거의 모두 처리할 수 있다. CRA, Next.js(Pages Router) 등 많은 프레임워크의 기반 번들러로 사용되어 왔다.',
      pros: [
        '가장 큰 플러그인/로더 생태계',
        'Code Splitting, Lazy Loading 완벽 지원',
        'Module Federation으로 마이크로프론트엔드 지원',
        '거의 모든 파일 타입을 로더로 처리 가능',
        '대규모 프로덕션 환경에서 검증됨',
      ],
      cons: [
        '설정이 복잡하고 러닝커브가 높음',
        'Vite/ESBuild 대비 빌드 속도가 느림',
        '개발 서버 HMR이 프로젝트가 커질수록 느려짐',
        '설정 디버깅이 어려울 수 있음',
      ],
      useCase:
        '대규모 엔터프라이즈 앱, 마이크로프론트엔드, 레거시 프로젝트, 복잡한 빌드 파이프라인',
      installCmd: 'npm install webpack webpack-cli webpack-dev-server --save-dev',
      configFile: 'webpack.config.js',
      configCode: `const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\\.(png|svg|jpg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
  ],
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
};`,
      usageCode: `# 개발 서버
npx webpack serve --mode development

# 프로덕션 빌드
npx webpack --mode production

# 빌드 분석
npx webpack --mode production --analyze`,
      links: [
        { label: '공식 문서', url: 'https://webpack.js.org' },
        { label: 'GitHub', url: 'https://github.com/webpack/webpack' },
      ],
    },
    {
      id: 'swc',
      name: 'SWC',
      logo: '🦀',
      tagline: 'Rust-based platform for the Web',
      description:
        'Rust로 작성된 초고속 TypeScript/JavaScript 컴파일러(트랜스파일러). Babel의 대체제로 설계되었으며, Next.js에서 기본 컴파일러로 채택되었다. 단독으로 번들링도 가능하지만(swcpack), 주로 Babel 대체 트랜스파일러로 사용된다.',
      pros: [
        'Rust 기반으로 Babel 대비 20~70배 빠른 트랜스파일링',
        'Next.js 기본 컴파일러로 채택 (안정성 검증)',
        'Babel 플러그인 대부분을 대체하는 내장 변환 기능',
        'Jest 연동 지원 (@swc/jest)',
        'WASM으로도 사용 가능',
      ],
      cons: [
        'Babel 플러그인과 1:1 호환되지 않음',
        '커스텀 플러그인 작성이 Rust 필요 (또는 WASM)',
        '번들러 기능(swcpack)은 아직 실험적',
        'Babel 대비 에코시스템이 작음',
      ],
      useCase:
        'Next.js 프로젝트, Babel 대체, Jest 트랜스파일링 가속, Webpack/Vite의 트랜스파일러',
      installCmd: 'npm install @swc/core @swc/cli --save-dev',
      configFile: '.swcrc',
      configCode: `{
  "$schema": "https://swc.rs/schema.json",
  "jsc": {
    "parser": {
      "syntax": "typescript",
      "tsx": true,
      "decorators": true,
      "dynamicImport": true
    },
    "transform": {
      "react": {
        "runtime": "automatic",
        "throwIfNamespace": true
      }
    },
    "target": "es2020",
    "loose": false
  },
  "module": {
    "type": "es6"
  },
  "minify": true
}`,
      usageCode: `# 단일 파일 트랜스파일
npx swc src/index.ts -o dist/index.js

# 디렉토리 전체 트랜스파일
npx swc src -d dist

# watch 모드
npx swc src -d dist --watch

# Webpack과 함께 사용 (swc-loader)
# webpack.config.js
module: {
  rules: [{
    test: /\\.tsx?$/,
    use: { loader: 'swc-loader' }
  }]
}`,
      links: [
        { label: '공식 문서', url: 'https://swc.rs' },
        { label: 'GitHub', url: 'https://github.com/swc-project/swc' },
      ],
    },
    {
      id: 'babel',
      name: 'Babel',
      logo: '🔧',
      tagline: 'The original JavaScript compiler',
      description:
        '가장 오래되고 범용적인 JavaScript 트랜스파일러. 최신 ECMAScript 문법을 구버전 브라우저에서도 동작하도록 변환하는 것이 핵심 목적이다. 플러그인 기반 아키텍처로 JSX, TypeScript, 데코레이터 등 다양한 문법 변환을 지원한다.',
      pros: [
        '가장 큰 플러그인/프리셋 생태계',
        '거의 모든 JavaScript 문법 변환 지원',
        'Polyfill 자동 주입 (core-js 연동)',
        'AST 기반 커스텀 플러그인 작성이 용이',
        '대부분의 빌드 도구와 연동 가능',
      ],
      cons: [
        'SWC/ESBuild 대비 트랜스파일 속도가 매우 느림',
        '설정이 복잡해질 수 있음 (플러그인/프리셋 조합)',
        'TypeScript 타입 체크를 수행하지 않음',
        '대규모 프로젝트에서 빌드 시간 병목이 될 수 있음',
      ],
      useCase:
        '구형 브라우저 지원, 커스텀 AST 플러그인, 레거시 프로젝트 유지보수',
      installCmd:
        'npm install @babel/core @babel/cli @babel/preset-env @babel/preset-typescript --save-dev',
      configFile: 'babel.config.json',
      configCode: `{
  "presets": [
    ["@babel/preset-env", {
      "targets": "> 0.25%, not dead",
      "useBuiltIns": "usage",
      "corejs": 3,
      "modules": false
    }],
    "@babel/preset-typescript",
    ["@babel/preset-react", {
      "runtime": "automatic"
    }]
  ],
  "plugins": [
    ["@babel/plugin-proposal-decorators", { "version": "2023-11" }],
    "@babel/plugin-transform-runtime"
  ]
}`,
      usageCode: `# 단일 파일 트랜스파일
npx babel src/index.ts --out-file dist/index.js

# 디렉토리 전체 트랜스파일
npx babel src --out-dir dist --extensions ".ts,.tsx"

# watch 모드
npx babel src --out-dir dist --watch

# Webpack과 함께 사용 (babel-loader)
# webpack.config.js
module: {
  rules: [{
    test: /\\.tsx?$/,
    use: { loader: 'babel-loader' }
  }]
}`,
      links: [
        { label: '공식 문서', url: 'https://babeljs.io' },
        { label: 'GitHub', url: 'https://github.com/babel/babel' },
      ],
    },
  ];

  let activeTool = $state('vite');
  let activeSection = $state<string | null>(null);

  function selectTool(id: string) {
    activeTool = id;
    activeSection = null;
  }
</script>

<header class="mb-10 border-b border-gray-200 pb-6">
  <h1 class="mb-2 text-3xl font-bold text-gray-900">
    빌드 툴링 가이드
  </h1>
  <p class="text-gray-600">
    프론트엔드 개발에서 사용되는 주요 빌드 도구들의 특징, 설정 방법, 사용법을
    비교합니다.
  </p>
</header>

<!-- 툴 선택 탭 -->
<nav class="mb-8 flex flex-wrap gap-2">
  {#each tools as tool}
    <button
      class="rounded-lg px-4 py-2 text-sm font-medium transition-all {activeTool ===
      tool.id
        ? 'bg-gray-900 text-white shadow-sm'
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
      onclick={() => selectTool(tool.id)}
    >
      <span class="mr-1.5">{tool.logo}</span>
      {tool.name}
    </button>
  {/each}
</nav>

<!-- 선택된 툴 상세 -->
{#each tools as tool}
  {#if activeTool === tool.id}
    <article class="space-y-8">
      <!-- 헤더 -->
      <div class="rounded-xl border border-gray-200 bg-linear-to-r from-gray-50 to-white p-6">
        <div class="flex items-center gap-3">
          <span class="text-4xl">{tool.logo}</span>
          <div>
            <h2 class="text-2xl font-bold text-gray-900">{tool.name}</h2>
            <p class="text-sm text-gray-500">{tool.tagline}</p>
          </div>
        </div>
        <p class="mt-4 leading-relaxed text-gray-700">{tool.description}</p>
        <div class="mt-4 flex flex-wrap gap-2">
          {#each tool.links as link}
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              class="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600 transition-colors hover:bg-blue-100 hover:text-blue-700"
            >
              {link.label} ↗
            </a>
          {/each}
        </div>
      </div>

      <!-- 추천 용도 -->
      <div class="rounded-lg border border-blue-200 bg-blue-50 p-4">
        <p class="text-sm font-medium text-blue-900">
          💡 추천 사용처
        </p>
        <p class="mt-1 text-sm text-blue-800">{tool.useCase}</p>
      </div>

      <!-- 장단점 -->
      <div class="grid gap-4 md:grid-cols-2">
        <div class="rounded-lg border border-green-200 bg-green-50 p-5">
          <h3 class="mb-3 text-sm font-semibold text-green-900">
            ✅ 장점
          </h3>
          <ul class="space-y-1.5">
            {#each tool.pros as pro}
              <li class="text-sm text-green-800">· {pro}</li>
            {/each}
          </ul>
        </div>
        <div class="rounded-lg border border-red-200 bg-red-50 p-5">
          <h3 class="mb-3 text-sm font-semibold text-red-900">
            ⚠️ 단점
          </h3>
          <ul class="space-y-1.5">
            {#each tool.cons as con}
              <li class="text-sm text-red-800">· {con}</li>
            {/each}
          </ul>
        </div>
      </div>

      <!-- 설치 -->
      <section>
        <h3 class="mb-3 text-lg font-semibold text-gray-900">설치</h3>
        <div class="overflow-x-auto rounded-lg border border-gray-200 bg-gray-900 p-4">
          <code class="text-sm text-green-400">{tool.installCmd}</code>
        </div>
      </section>

      <!-- 설정 파일 -->
      <section>
        <h3 class="mb-3 text-lg font-semibold text-gray-900">
          설정 — <code class="rounded bg-gray-100 px-2 py-0.5 text-sm text-gray-700">{tool.configFile}</code>
        </h3>
        <div class="overflow-x-auto rounded-lg border border-gray-200 bg-gray-900 p-4">
          <pre class="text-sm leading-relaxed text-gray-300"><code>{tool.configCode}</code></pre>
        </div>
      </section>

      <!-- 사용법 -->
      <section>
        <h3 class="mb-3 text-lg font-semibold text-gray-900">사용법</h3>
        <div class="overflow-x-auto rounded-lg border border-gray-200 bg-gray-900 p-4">
          <pre class="text-sm leading-relaxed text-gray-300"><code>{tool.usageCode}</code></pre>
        </div>
      </section>
    </article>
  {/if}
{/each}

<!-- 비교 테이블 -->
<section class="mt-12 border-t border-gray-200 pt-8">
  <h2 class="mb-6 text-2xl font-bold text-gray-900">한눈에 비교</h2>
  <div class="overflow-x-auto">
    <table class="w-full text-sm">
      <thead>
        <tr class="border-b border-gray-200 text-left">
          <th class="py-3 pr-4 font-semibold text-gray-900">도구</th>
          <th class="py-3 pr-4 font-semibold text-gray-900">언어</th>
          <th class="py-3 pr-4 font-semibold text-gray-900">유형</th>
          <th class="py-3 pr-4 font-semibold text-gray-900">속도</th>
          <th class="py-3 pr-4 font-semibold text-gray-900">주 용도</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-gray-100">
          <td class="py-3 pr-4 font-medium text-gray-900">⚡ Vite</td>
          <td class="py-3 pr-4 text-gray-600">JS + Go(ESBuild)</td>
          <td class="py-3 pr-4 text-gray-600">개발 서버 + 번들러</td>
          <td class="py-3 pr-4">
            <span class="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">매우 빠름</span>
          </td>
          <td class="py-3 pr-4 text-gray-600">앱 개발</td>
        </tr>
        <tr class="border-b border-gray-100">
          <td class="py-3 pr-4 font-medium text-gray-900">📦 tsdown</td>
          <td class="py-3 pr-4 text-gray-600">Rust(Rolldown)</td>
          <td class="py-3 pr-4 text-gray-600">라이브러리 번들러</td>
          <td class="py-3 pr-4">
            <span class="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">매우 빠름</span>
          </td>
          <td class="py-3 pr-4 text-gray-600">npm 패키지 빌드</td>
        </tr>
        <tr class="border-b border-gray-100">
          <td class="py-3 pr-4 font-medium text-gray-900">🟡 ESBuild</td>
          <td class="py-3 pr-4 text-gray-600">Go</td>
          <td class="py-3 pr-4 text-gray-600">번들러 + 트랜스파일러</td>
          <td class="py-3 pr-4">
            <span class="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">극한 빠름</span>
          </td>
          <td class="py-3 pr-4 text-gray-600">빌드 엔진, 트랜스파일링</td>
        </tr>
        <tr class="border-b border-gray-100">
          <td class="py-3 pr-4 font-medium text-gray-900">📘 Webpack</td>
          <td class="py-3 pr-4 text-gray-600">JavaScript</td>
          <td class="py-3 pr-4 text-gray-600">번들러</td>
          <td class="py-3 pr-4">
            <span class="rounded bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-700">보통</span>
          </td>
          <td class="py-3 pr-4 text-gray-600">대규모 앱, 엔터프라이즈</td>
        </tr>
        <tr class="border-b border-gray-100">
          <td class="py-3 pr-4 font-medium text-gray-900">🦀 SWC</td>
          <td class="py-3 pr-4 text-gray-600">Rust</td>
          <td class="py-3 pr-4 text-gray-600">트랜스파일러</td>
          <td class="py-3 pr-4">
            <span class="rounded bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">매우 빠름</span>
          </td>
          <td class="py-3 pr-4 text-gray-600">Babel 대체, Next.js</td>
        </tr>
        <tr>
          <td class="py-3 pr-4 font-medium text-gray-900">🔧 Babel</td>
          <td class="py-3 pr-4 text-gray-600">JavaScript</td>
          <td class="py-3 pr-4 text-gray-600">트랜스파일러</td>
          <td class="py-3 pr-4">
            <span class="rounded bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">느림</span>
          </td>
          <td class="py-3 pr-4 text-gray-600">구형 브라우저, 커스텀 변환</td>
        </tr>
      </tbody>
    </table>
  </div>
</section>

<!-- 선택 가이드 -->
<section class="mt-8 rounded-xl border border-gray-200 bg-gray-50 p-6">
  <h2 class="mb-4 text-lg font-bold text-gray-900">어떤 도구를 선택할까?</h2>
  <div class="space-y-3 text-sm text-gray-700">
    <p>
      <strong>신규 웹 앱 프로젝트</strong>를 시작한다면 → <strong>Vite</strong>
    </p>
    <p>
      <strong>npm 라이브러리</strong>를 번들링한다면 → <strong>tsdown</strong> (또는 tsup)
    </p>
    <p>
      <strong>빌드 도구 내부 엔진</strong>이 필요하다면 → <strong>ESBuild</strong>
    </p>
    <p>
      <strong>레거시 대규모 앱</strong>이나 Module Federation이 필요하다면 → <strong>Webpack</strong>
    </p>
    <p>
      <strong>Next.js</strong>를 사용하거나 Babel을 대체하려면 → <strong>SWC</strong>
    </p>
    <p>
      <strong>구형 브라우저 Polyfill</strong>이나 커스텀 AST 변환이 필요하다면 → <strong>Babel</strong>
    </p>
  </div>
</section>
