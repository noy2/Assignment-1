# Assignment-1

To learn React.

## 1-1. Meter to Kilometer

- m(미터)를 input으로 받고, 해당 m를 km로 변환하면 얼마가 나오는지 표시해주는 리액트 앱 만들기

### Reference

- 미터는 숫자로만 받기
- 스타일링 최소화

### What you can get

- input 다루기
- state와 derived state에 대한 이해

### What I learned

- input에는 굉장히 여러가지 type들이 있다.
- onChange를 활용하여 input의 value 받아오기.

## 2. Counter App

- 현재 카운트, +버튼, -버튼을 보여주고 +버튼을 누르면 현재 카운트를 1 증가, -버튼을 누르면 현재 카운트를 1 감소시키는 리액트 앱 만들기

### Reference

- 스타일링 최소화

### What you can get

- 컴포넌트 만들고 사용하기
- Lifting State up

### I got some problems ( In 2 )

- 기본값 설정을 잘못함. useState("0") 때문에 +1을 누르면 01이 되어버리는 이슈가 있었다.
  - useState(0)으로 변경하니 아주 잘 동작함.

## 2-1. Enhanced Counter

- App.js 내용 모두를 Counter라는 컴포넌트를 생성한 후 이동시키고 App에서 컴포넌트 불러쓰기.
- App에 똑같은 Counter가 두 벌 표시되게 하기, 단 두 Counter의 현재 카운트가 동일해야 함.

## 2-2.

- 단일 책임 원칙에 대해 알아보고 정리하기
- 버튼에 달려있는 이벤트 핸들러들을 단일 책임 원칙을 고려해서 수정하기
