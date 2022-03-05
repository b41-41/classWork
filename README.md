# ClassWork v0.0.2

## 🖊 서비스 소개

📚학생들의 숙제를 쉽게 관리할 수 있도록 도와주는 웹 어플리케이션📚

[URL : https://classwork41.netlify.app/](https://classwork41.netlify.app/)

[개발 배경]()

[WIKI]()

## 📃 개발 배경

온라인으로 한국어 수업을 하면서 숙제와 학습자료 배포를 위해서 구글 클래스룸을 사용하고 있습니다. 그런데 이번 학기에는 중국에서 접속하는 학생들이 있어서 구글 서비스 이용이 불가능했습니다. 그래서 간단하게 핵심 기능만 사용가능한 수업 관리 웹 어플리케이션을 제작하고자 마음 먹었습니다. 원래 대상은 중국에서 한국어 수업을 듣는 학생을 위해서 만들 예정이지만, 클래스룸보다 편하게 숙제 확인과 피드백을 남길 수 있도록 만들려고 생각하고 있습니다.

**+) Firebase는 구글의 서비스이지만 중국에서도 동작하는 것을 확인했습니다.**

## ⌨️ Skill

- **Front End**

  ⭐️ HTML, CSS, Javascript(ES6), React

- **ETC**

  ⭐️ Firebase

## 🖥 페이지와 기능

1. **로그인 페이지**

   : Firebase인증 서비스를 사용해서 이메일이나 google아이디를 사용해서 로그인할 수 있습니다.

   ![create](https://user-images.githubusercontent.com/90027202/149802692-a09c2945-2ee4-49af-b3ce-d0f220cf4fbf.gif)

2. **메인 화면**

   : 선생님 정보, 최근 숙제, 최근 공지 내용, 최근 수업 내용을 간단하게 확인할 수 있습니다.

   <img width="1215" alt="main" src="https://user-images.githubusercontent.com/90027202/149802817-dfcd65a1-0289-4100-aa5d-73a350750be8.png">

3. **숙제 관리 페이지**

   : 학생들이 숙제를 제출했는지 여부를 간단하게 확인할 수 있고 숙제를 조회해서 바로 제출할 수 있습니다.

4. **질문과 답변 페이지**

   : 질문을 남기고 선생님의 답변을 확인할 수 있는 게시판 페이지입니다.

   ![question](https://user-images.githubusercontent.com/90027202/149803207-b4190747-92aa-4021-94e7-c71f8d9af4aa.gif)

5. **공지사항 게시판**

   : 공지사항을 확인할 수 있는 게시판 페이지입니다.

   ![ScreenRecorderProject6](https://user-images.githubusercontent.com/90027202/149803481-c123e3c2-8eb7-413c-8660-69f25a36a064.gif)

## ⁉️ 고민한 점

- 메뉴를 이동할 때 현재 들어와 있는 메뉴만 진한 검정색으로 표시하고 싶은데 이동할 때마다 state를 어떻게 전달하면 좋을 지 고민했습니다.

  ⇢ history.push에 오브젝트를 넣어 페이지가 이동할 때마다 state를 전달하도록 했습니다.

  - REDUX를 사용해서 STATE를 관리하는 방법을 생각해보고 있습니다.

- 숙제관리, 게시판 페이지에서 목록과 내용을 출력하는 것까지는 구현했는데, 게시글로 바로 이동할 수 있는 주소를 만들지 못했습니다. Router를 사용해서 어떻게 구현하면 좋을 지 고민하고 있습니다.

  ⇢ 숙제관리 페이지의 목록 표시와 내용 표시를 하나의 모듈로 구현했던 것을 두 개로 나눈 후에 Router를 사용해서 게시글 주소를 구현했습니다. 내용 표시 구현을 할 때 목록에서 선택한 글의 key값의 내용 부분으로 전달하는 방법이 어려웠는데 주소에 있는 key값을 불러와서 내용을 표시하는 방법으로 해결했습니다.

- Firebase를 이용해서 학생이 숙제를 제출했을 때 숙제 글의 데이터베이스 안에 subCollection으로 제출한 숙제를 정리하려고 했는데, v9에서 subCollection에 데이터베이스를 추가하는 방법을 알지 못해서 고민했습니다.
  ⇢ 구글에서 아무리 검색해도 v8버전의 방법 밖에 안 나왔는데 의외로 해결 방법은 간단했습니다. v9에서는 collection안에 있는 subcollection은 doc(collection(db, "collection", "ID", "subcollection")) 형식으로 뒤에 더 추가해서 쓰면 됐습니다.
