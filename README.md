# API METHODS - LOGINCONTROLLER

<br/><hr/><br/>

## addProfileUsingPATCH

<br/><hr/><br/>

## loginUsingPOST

<br/><hr/><br/>

## signOutMemberUsingDELETE

<br/><hr/><br/>

# API METHODS - POSTCONTROLLER

> 카테고리 구분 없이 모든 스터디를 받아오는 `API`가 없음  
> ex) `GET /post`

## deletePostUsingDELETE ✍🏻

- `nickname`은 넘겨줄 필요 없음

<br/><hr/><br/>

## editPostUsingPUT ✍🏻

- `EditPostReq.category`의 `Enum`은 `daily, worry, promotion`
- 유저 정보로 `nickname`만 넘겨주지말고, 유니크한 값인 `userId`나 `email`같은 데이터를 전달하거나  
  `writer: { nickname: string, image: string}` 같이 전달 해야할 것 같음

<br/><hr/><br/>

## getPostListUsingGET ✍🏻

- `response body` 비어있음

<br/><hr/><br/>

## getPostUsingGET ✍🏻

- `response body` 비어있음

<br/><hr/><br/>

## postUsingPOST ✅

- `enum:  daily, worry, promotion` 로 수정
- `writer`에 넘겨주는 `string`이 무슨 값인지 모르겠음

<br/><hr/><br/>

# API METHODS - SCHEDULECONTROLLER

## addScheduleUsingPOST ✍🏻

아래처럼 구조 바꿔야함

```yml
ScheduleRequestDto {
  date: string (스터디 추가 날짜 ex. 2023/1/4),
  lists: [
    {
      text: string (todo내용 ex. 백준 1004번 풀기),
      id: string,
    },
    {...},
    {...},
  ]
}
```

<br/><hr/><br/>

## deleteScheduleUsingDELETE ✍🏻

- 스터디의 todo를 삭제할 때, `scheduleId, studyId`만 서버로 넘겨주면되고 `memberId`는 넘겨줄 필요 없어보임

<br/><hr/><br/>

## editScheduleUsingPUT ✍🏻

아래처럼 구조 바꿔야함

```yml
ScheduleRequestDto {
  date: string (스터디 추가 날짜 ex. 2023/1/4),
  lists: [
    {
      text: string (todo내용 ex. 백준 1004번 풀기),
      id: string,
    },
    {...},
    {...},
  ]
}
```

<br/><hr/><br/>

# API METHODS - TEAMCONTROLLER

<br/>

> 카테고리 구분 없이 모든 스터디를 받아오는 `API`가 없음  
> ex) `GET /study`

<br/><hr/><br/>

## addStudyUsingPOST ✍🏻

- `POST /study/addition`이 아니라 `POST /study`로 바꾸기
- `category ENUM`에서 `daily, worry, promotion`은 빼야함
- `studyTypes`는 필요없음 (온라인에서만 TODO 관리해주는 서비스로하고 오프라인은 제외)
- `writer: string`에 어떤 데이터를 넘겨줘야 하는지 모르겠음

<br/><hr/><br/>

## deleteStudyUsingDELETE ✅

<br/><hr/><br/>

## getAllStudyUsingGET ✍🏻

- `StudyListResponseDto.category`에서 `daily, worry, promotion`은 빼야함
- `StudyListResponseDto.id` 스터디 아이디도 response로 받아야함
- `writer: string`이 아니라 `writer: { nickname: string, image: string }`으로 받아야함

<br/><hr/><br/>

## getStudyUsingGET ✍🏻

- `StudyListResponseDto.category`에서 `daily, worry, promotion`은 빼야함
- 아래처럼 `todos` 부분만 바꾸면 될거같음

```yml
todos: [
  ScheduleDto {
    date: string (날짜 ex. 2023/1/4),
    id: string,
    lists: [
      {
        text: string (todo내용 ex. 백준 1004번 풀기),
        id: integer,
        checked_members: [
         {image, nickname}, {...}, {...}, ...
        ]
      },
      {...},
      {...},
    ],
  }
]
```

<br/><hr/><br/>

## isDoneTodoUsingPOST ❌ (필요없어보임)

<br/><hr/><br/>

## joinStudyUsingPOST ✅

<br/><hr/><br/>

<br/><br/><br/><br/><br/>

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
- Locally generated data: If your data is generated and persisted locally (e.g. notes in a note-taking app), use an incrementing counter, crypto.randomUUID() or a package like uuid when creating items.
- masking api -> next js rewrites
