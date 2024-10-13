# page rounter

> ## 장점

- 파일 시스템 기반의 페이지 라우팅 제공
- 다양한 방식의 사전 렌더링 제공

> ## 단점

- 페이지별 레이아웃 설정이 번거러움
- 데이터 페칭이 페이지 컴포넌트에만 집중된다.
- 불 필요한 컴포넌트들도 js bundle에 포함된다.

# Pre-Fetching

- 현재 사용자의 페이지에서 갈 수 있는 모든 페이지를 미리 불러옴

> ## nextjs의 렌더링 방법

- FCP를 줄이기 위해 먼저 랜더링 후 js 파일 제공
- 페이지에 해당하는 js 파일만 제공(한번에 다제공하면 TTI시간이 증가하기 때문 -> 비효율)

- 이를 위해 pre-fetching이 있다.

> #### 페이지 이동전에 pre-feching을 이용해 미리 페이지 js 번들을 불러옴

# API-routes

- src -> pages -> api에서 파일을 생성하면 자동으로 api 응답

# css 사용

- css는 기존 react에서 사용하는 방식과 다른 방식으로 css을 .module.css 확장자로 바꾸어 css의 스타일 겹침을 해결했다.

> ## 페이지 컴머포넌트(index.tsx)에 함수를 추가할 수 있다.

- JS에서는 함수는 객체로 인식이 되어서 함수를 추가 시킬 수 있습니다.

# 데이터 페칭

- React 경우 렌더링 후 API req,res
- Nextjs 경우 사전 렌더링때 API req,res

# 사전 렌더링 방식

> ## 서버사이드 렌더링(SSR) - Server Side Rendering

- 가장 기본적인 사전 렌더링 방식
- 요청이 들어올때 마다 사전 렌더링을 진행 함
- getServerSideProps으로 사용 가능

> ## 정적 사이트 생성(SSG) - Static Site Generation

- 빌드 타임에 미리 페이지를 사전 렌더링 해둠
- SSR의 단점을 해결하는 사전 렌더링 방식
- getStaticProps으로 사용 가능

### 단점

- 매번 똑같은 페이지만 응답함, 최신 데이터 반영은 어려움

### getStaticPaths 사용

- paths 배열 안에 객체로 값을 젙달 가능

#### fallback 옵션

- false : 404 not found 반환
- blocking : 즉시 생성 (SSR 같이)
- true : 즉시 생성 + 페이지만 미리 반환

> ## 증분 정적 재생성(ISR) - Incremental Static Regeneraion

- SSG 방식으로 생성된 페이지를 일정한 주기로 재생성 시키는 방법

> ### 주문형 재 검증(On-Demand-ISR)

- 요청을 받을때마다 페이지를 재생성 한는 방법
