# React-Todolist-web(공부용)
Velopert 블로그를 참고하여 클론코딩한 todolist 웹<br>
접속주소 : https://wowx1001.github.io/React-Todolist-web
<br><br><br><br><br><br>
# 개념 숙지
* context : 여러 컴포넌트를 거쳐서 값(상태,함수 등등)을 전달하는 것을 완화하기위해 사용할 수 있는 값을 전역적으로 관리하게 함.
* reducer : 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수
<br><br><br><br><br><br>

# 헷갈린 코드 복습
## TodoContext
<img src="https://github.com/wowx1001/React-Todolist-web/blob/main/code_img/TodoContext.png" width="60%" height="60%">
[3~24] : 초기 todo 배열 목록 <br>
[26~39] : 상태와 액션을 받아 새로운 상태로 리턴하는 reducer. <br>
* "ADD" 액션의 todo(배열)을 받아 concat으로 새로 합쳐진 배열을 리턴한다. 즉 배열을 새로만들어서 리턴하는 방식<br>
* "TOGGLE" 할일을 완료했는지 아닌지에대한 토글 처리. todo 배열을 받아 초기 todo 배열중 id가 같은 곳의 id와 text값은 그대로하고 done값은 부정시켜 새로운 배열생성 후 리턴<br>
* "REMOVE" todo 배열을 받고 액션이 발생한 배열의 id와 비교하여 id가 같지않은 배열만 모아서 새로 배열을 생성. <br><br>
<br><br>
[41 &#126; 43] : state, dispatch, nextid context 생성<br>
[45 &#126; 57] : <br>
* const [state, dispatch] = useReducer(reducer, initialState) 형태는 state는 컴포넌트가 사용할수있는 상태, dispatch는 액션을 발생시키는 함수.<br> 
* context.provider는 context변경사항을 자손에게 전달하는 역할 
<br><br><br><br><br><br>
# 반성<br>
* context, reducer, dispatch 사용법을 제대로 숙지하지못한것. 독자적으로 게시판 만들기를 통해 제대로 연습해야겠음.
