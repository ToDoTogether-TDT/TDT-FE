# TDT-FE

## 실행

```
npm i —legacy-peer-deps
npm run dev-json

// http://localhost:3000 개발 서버
// http://localhost:3005 mock API 서버
```

## 기술 스택

- **React** - UI
- **Next** - SSR, ISR
- **tailwind** - styling
- **axios** - fetch data
- **SWR** - state management / fetch data
- **vercel** - deploy
- **json-server** - mock API
- **tally** - 설문조사, 피드백
- **amchart || echart** - 차트
- **next-auth** - oauth

## 커밋 type

- feat : 새로운 기능 추가
- fix : 버그 수정
- docs : 문서의 수정
- style : CSS 수정
- refactor : 코드 리펙토링
- test : Test 관련한 코드의 추가, 수정
- chore : (코드의 수정 없이) 설정을 변경

## 나중에 해야 할 것

- prevent XSS: DomPurify
- toastify
