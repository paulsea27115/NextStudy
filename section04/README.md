# app router

- app router는 페이지 라우팅 방법은 page.tsx 의 파일으로만 만들 수 있다.

## React Server Component 주의 사항

- 서버 컴포넌트에는 브라우저에서 실행될 코드가 포함되면 안된다.
- 클라이언트 컴포넌트는 클라이언트에서만 실행되지 않는다.(사전 렌더링, 하이드레이션)
- 클라이언트 컴포넌트에서는 서버 컴포넌트를 import 할 수 없다.
- 서버 컴포넌트에서 클라이언트 컴포넌트에게 직렬화 되지않는 Props는 전달 불가하다.

- 클라이언트 컴포넌트에서 서버 컴포넌트를 사용하면 서버 컴포넌트가 자동으로 클라이언트 컴포넌트로 바뀐다.
  - 이를 위해 children 형식으로 사용하면 클라이언트 컴포넌트에서 서버 클라이언트 컴포넌트를 사용할 수 있다.

## 프리패칭

> RSC Payload <- server components

- static page : RSC , JS
- dynamic : RSC(추후 변동 가능성)

### query 값가져올떄

- 기존 page에서는 router.query 로 했지만 app에서는 useSearchParams에서 get()으로 가져온다.

## 데이터 패칭(서버에서 데이터 가져오기)

- 서버 컴포넌트에서 바로 사용가능(async 사용)
