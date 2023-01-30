# <img src="/images_2/PngItem_1173386.png"  width="35px" height="35px" > FFXIV 게임 정보 사이트 

  
파이널판타지14 게임의 각종 정보를 담은 사이트 제작
  
  
<br></br>


## 🐘 팀원 소개 및 중간 프로젝트 후기


- :fish:김다현(FE) : " 저녁밥 언제먹어요? "  "한 번 사장은 영원한 사장"
- :ant:이해민(BE,FE) : " 물갈비 빨리 먹고싶다 "  "팀장은 출장중"
- :cat:이영주(BE) : " 사장님이 귀엽대요 이렇게 된 이상 이 기업의 귀염둥이 맡겠습니다 "

----신입사원------
- :penguin:도은빈(FE) : "여기 꼰대기업이네... ㅅㄹ..ㅈ"
- :fish:이주용(BE)
<br>

## :sheep: 팀 규칙

#### 이것만은 꼭 지켜요
<div>
<P>:heavy_check_mark: 대면 100% 출석 및 원활한 소통
<P>:heavy_check_mark: 불만은 바로바로 해결하기!
<P>:heavy_check_mark: 즐기면서 하기!

 </div>
 <br>
 
 
 
 
#### 금지사항

질병, 과로, 고통, 쇠약, 멘붕
<div>

<img src="/images_2/ff14_디버프_질병.png"  width="34x" height="45px" >	
 <img src="/images_2/ff14_디버프_과중력.png"   width="34x" height="45px" >  
  <img src="/images_2/ff14_디버프_고통9.png"  width="34x" height="45px" >  
  <img src="/images_2/ff14_디버프_쇠약(강).png"   width="34x" height="45px"  >  
   <img src="/images_2/ff14_디버프_마비.png"  width="34x" height="45px"  >  

</div>

<br></br>
## :rabbit2:사이트 구조 설계 및 와이어프레임

<img src="/images_2/ff14.jpg" >
<img src="/images_2/ff14 (1).jpg" >

사용 툴 : https://miro.com/app/board/uXjVPVB0VGk=/

<br>

 
 
 
 
## :bug: 기능 설명

- Start : 시작화면 | 사이트 로고와 간단한 설명
- Main  : 메인화면 -> 메인에서 공지글, 일반 게시글, 복권계산기 등을 볼 수 있음
- Info  : 공지사항 게시판
- Starter  : 스타터 가이드 게시판
- JobGuide : 직업별 가이드 게시판
- Map : 풍맥 등 각종 지도 확인 사이트
- DailyLotto : 일일복권 계산기
- Free : 자유게시판
- Board : 자유게시판 글 작성란
- Login : 로그인 모달 창
- Sign : 회원가입 모달 창



<br>

## 실제 구현 이미지
![제목 없음](https://user-images.githubusercontent.com/111736134/196095495-84f7606a-6dcf-4d73-aa31-5920488b7940.png)

## 메인페이지 전체화면
 ![jk](https://user-images.githubusercontent.com/111736134/196095750-19fd6eac-43ad-4b12-9ffa-b2261bcc0814.png)

## 잡가이드 화면
  ![image](https://user-images.githubusercontent.com/111736134/196095958-52c03125-b50c-4171-bc65-8ed50bc71b69.png)

## 풍맥지도
![as](https://user-images.githubusercontent.com/111736134/196096694-f51780ac-de46-4e5e-83a6-d780f2f726d5.png)

  
## 5. ❌❌Trouble Shooting❌❌
 

1️⃣Trouble 1. : 모달 창 띄우기 + 모달 창 제외 불투명하게 화면 처리하기 =>  tailwindcss로 모달 창 구현 불가 + modal 태그 안 style 적용 불가</br>
✔️Solution : 모달 구현 npm module - modal 라이브러리 설치, modal 태그 안 스타일 적용 변경(overlay의 크기 수정, 배경 색상 rgb 방식 수정 + content의 border, width, height 수정)</br>

2️⃣Trouble 2. : 각각의 branch에서 나누어서 작업을 했을 때 작업 후 git merge시 충돌 발생 </br>
✔️Solution : 각기 다른 부분을 구현했어야 하는데 서로 같은 라인 코드를 같이 수정하니 충돌이 발생, git 관리자를 1명으로 지정 ->  수정할 부분의 역할을 나누기 + push시 관리자에게 얘기해주기</br>

3️⃣Trouble 3. :
 사이트 접속 시 콘솔 창에 뜨는 에러 </br>
 ![image](https://user-images.githubusercontent.com/106312483/194206540-c350f7b1-6574-4d53-839c-3f19c8960f04.png)<br>
✔️Solution : modal 태그 안 'ariaHideApp={false}' 추가 </br>

4️⃣Trouble 4. : 외부 라이브러리 Leaflet
지도를 만들때 사용하는 라이브러리로 보통 구글 맵같은 주소를 받아와서 사용함
| 이미지를 넣어서 지도로 만드는 방법에 대한 글들이 다양하지 않아 지도를 만드는데 시행착오가 많이 들었음
| Leaflet는 자바스크립트를 위해 만들어진 것으로 react환경에서 사용하기 어려움이 다소 있었음<br>

Troble 5. : Modal to Modal

✔️Solution : react-Leaflet ver.를 찾아 인스톨 후 자바 Leaflet의 Docs를 참고해 react ver.에 적용함. react ver.의 문서만 참고하여 라이브러리를 사용하는데는 어려움이 있음
  

<br> </br>
 
 
 
## 📚 STACK
Language : JAVA, Javascript
<br></br>
Framework : Spring boot, Next.js
<br></br>
Library : modal, tailwindCSS, yup, leaflet
<br></br>
DB : MySQL, H2 Database
<br></br>
Build Tool : maven
<br></br>
IDE : eclipse, vscode
<br></br>
Dependencies: Spring Data JPA, Spring Web, H2, MySQL Driver, Lombok, JwtToken
<br></br>
REST API(Tool): Postman
<br></br>
Slack, Discord
<br></br>
<div> 

<div align=center> 
  <img src="https://img.shields.io/badge/java-007396.svg?style=for-the-badge&logo=java&logoColor=white">
  <img src="https://img.shields.io/badge/visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white">
  <img src="https://img.shields.io/badge/eclipse IDE-2C2255?style=for-the-badge&logo=Eclipse IDE&logoColor=white">
  <img src="https://img.shields.io/badge/spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white">
  <img src="https://img.shields.io/badge/springBoot-6DB33F?style=for-the-badge&logo=spring&logoColor=white">
  <img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
  <img src="https://img.shields.io/badge/h2%20DataBase-00000.svg?style=for-the-badge&logo=h2DataBase&logoColor=white">
  <img src="https://img.shields.io/badge/postman-FF6C37?style=for-the-badge&logo=Postman&logoColor=white">
  <img src="https://img.shields.io/badge/nextjs-000000?style=for-the-badge&logo=Next.js&logoColor=white">
  <img src="https://img.shields.io/badge/Leaflet-199900?style=for-the-badge&logo=Leaflet&logoColor=white">
  <img src="https://img.shields.io/badge/tailwindcss-000000?style=for-the-badge&logo=TailWindCss&logoColor=white">
  
<br>



 
</br>
<br>
  
  
  
  
</br>
<h1>저희는 아직 끝나지 않았습니다. To be Continue~ </h1>


#### Update
-11/02 : 팀원 추가(이주용(BE), 도은빈(FE))
<div>


 
  <br>
 
  <br>
 
  <br>
</div>
