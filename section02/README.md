# Pre-Fetching

- 현재 사용자의 페이지에서 갈 수 있는 모든 페이지를 미리 불러옴

> ## nextjs의 렌더링 방법

- FCP를 줄이기 위해 먼저 랜더링 후 js 파일 제공
- 페이지에 해당하는 js 파일만 제공(한번에 다제공하면 TTI시간이 증가하기 때문 -> 비효율)

- 이를 위해 pre-fetching이 있다.

> #### 페이지 이동전에 pre-feching을 이용해 미리 페이지 js 번들을 불러옴

# API-routes

- src -> pages -> api에서 파일을 생성하면 자동으로 api 응답
