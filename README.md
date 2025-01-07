# TODO List API

## 설명

- 간단한 TODO 리스트 CRUD API 구현입니다.

### 환경변수

DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_db_username
DB_PASSWORD=your_db_password
DB_DATABASE=your_db_name

### 사용방법

- npm run start:dev 서버 열기
- http://localhost:포트/api-docs 스웨거로 이용하기

- 기술 스택 -
  NestJS / TypeORM / PostgreSQL

## API 설명

### 1. CREATE TODO

- **URL**: '/todos'
- **메소드**: 'POST'
- **설명**: 제목과, 내용과, 각 날짜를 선택, 진행 상태 여부도 체크 후 생성 가능

### 2. SELECT ONE TODO

- **URL**: '/todos/:id'
- **메소드**: 'GET'
- **설명**: TODO ID를 이용해 TODO 조회 가능, 조회 안 될 시 404 에러 처리

### 3. SELECT ALL STATUS TODO

- **URL**: '/todos'
- **메소드**: 'POST'
- **설명**: TODO STATUS를 이용해 STATUS에 맞는 전체 TODO LIST 조회 가능

### 4. UPDATE TODO

- **URL**: '/todos/:id'
- **메소드**: 'PUT'
- **설명**: TODO ID를 이용해 TODO 수정 가능, 조회 안 될 시 404 에러 처리

### 5. CREATE TODO

- **URL**: '/todos/:id'
- **메소드**: 'DELETE'
- **설명**: TODO ID를 이용해 TODO 삭제 가능, 조회 안 될 시 404 에러 처리

#### 아쉬운 점

- postgreSQL 연결을 하려 했지만 실패
  실패 경험(5432 방화벽, pg_hba IP 설정, RDS 보안그룹 인바운드 규칙 수정, 파라미터 SSL 수정, 버전 다운그레이드) 많은 것들을
  해봤지만 잡히지를 않았음
  에러 내용: no pg_hba.conf entry for host no encryption
  postgres는 pg_hba.conf를 통해 IP 설정이 가능한데, 모두 공개로 해도 안됨.
  희안하게 DB는 연결이 잘 됨.
