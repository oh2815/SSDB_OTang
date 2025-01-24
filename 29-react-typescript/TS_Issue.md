## Typescript 오류 해결하기

### 1. 언제나처럼 코드 정리

- reportWebvitlas.ts 및 기타 코드 정리.

### 2. tsconfig.json 파일 생성누락, 생성하기

- tsconfig.json 생성 명령어 <br/> `npx tsc --init`

### 3. tsconfig.json 내용 일부 수정

- `"jsx": "react-jsx"` 추가 `"module": "esnext"` 변경

### 4. 미설치된 types 관련 추가 패키지 설치

- 설치 명령어 <br/>
  `npm i @types/react @types/react-dom`

_<span style="color:#ababef; font-weight:600; font-size:14px">(참고) src 내부에 있는 이미지 불러오지 못하는 이슈</span>_

- src내부에 custom.d.ts 파일 생성 후 아래 코드 작성

  ```ts
  declare module "*.jpg";
  declare module "*.png";
  declare module "*.jpeg";
  declare module "*.gif";
  declare module "*.svg";
  declare module "*.webp";
  ```

- (src 내부에서) 사용하고자 하는 확장자 모두 써주어야 함
- custom.d.ts 파일 생성 후 프로젝트 재시작

---

> 참고: vscode에서 Auto-Open Markdown Preview 확장설치하면 md 파일 확인할 때 좋습니다.
