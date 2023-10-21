# NextJs Introduce

Nextjs Project 생성 
npx create-next-app@latest --typescript
1. What is your project named? // nextjs-intro(프로젝트명 입력)
2. Would you like to use ESLint with this project?  Yes 
(ESLint는 자바스크립트 문법에서 에러를 표시해주는 도구, 무조건써라)
3. Would you like to use 'src/' directory with this project? No
(일단 No, 나중에 폴더구조를 명확히 해야 할 프로젝트에서 사용)
4. Would you like to use experimental 'app/' directory with this project? No
(일단 No, 나중에 폴더구조를 명확히 해야 할 프로젝트에서 사용)
5. What import alias would you like configured? Enter


```
npm run dev
```
Open http://localhost:3000 with your browser to see the result


* Next13 버전 이후 부터는 Link 태그 속에 a 태그를 넣지 않아야 정상 동작함
Link 속에 a 태그를 유지해야 한다면, legacyBehavior 삽입해야함