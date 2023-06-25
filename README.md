# 웹 페이지 만들기
페이지 링크[https://seojoonh.github.io/challenge-web]
---
---
### 실시간 시간
1. setInterval
  - 1초에 한 번씩 함수 작동하는 원리
  - 함수를 먼저 호출해 1초 딜레이 해결
2. String(...).padStart(자릿수, "채울 요소")
  - 00:00:00 형태를 만들기 위한 메소드
  - 문자열 형태로 변형 -> innerText로 매초 바뀌는 시간 불러오기
---
### 로그인
1. e.preventDefault();
  - 바로 호출되는 것을 방지하기 위한 기능
2. localStorage
  - setItem : 등록
  - key, value 기록 저장  
  - getItem : 불러오기
3. h2에 클래스 네임 등록
  - 숨겨져 있다가 greeting 함수 작동시 출력
4. input
  - input 내부 기능 사용 -> required, maxlength 
---
### todo list
1. filter
  - return 결과 true 값만 추출
2. localStorage
  - 결과 내용 저장
3. createElement
  - 리스트 만들기
4. appendChild
  - 자식 요소에 연결
5. JSON.parse
  - load 함수 만들어, 확인 후 json 객체로 변경
6. forEach
  - 객체 내용 하나씩 파라미터로 넣어서 함수 실행
7. addEventListener
  - submit과 함수 연결
---
### 위치 정보 날씨 API 제공
1. openweathermap
  - 해당 사이트 가입 후, 날씨 정보 / API 받아오기
2. navigator.geolocation.getCurrentPosition(정상작동 함수, 에러 함수);
  - 위치 정보에 따른 동작 및 알림 메시지
3. fetch( )
  - 원격 API 호출 함수
  - response.json 을 사용했지만, response의 데이터나 형식 등 문제가 있을 경우, 파싱 에러 발생 가능성 있음. response.text로 추가 확인 가능?
---
### 랜덤 배경 이미지
1. Math.floor(Math.random()*xxx.length)
  - floor, ceil, round
2. createElement로 img 생성
  - 배경이 될 이미지들 불러오기
3. appendChild
  - 자식 요소 연결 
