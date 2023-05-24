. 프로젝트를 생성한다.
2. 프로젝트에 npm, package manager를 초기화 한다.

`npm init'

3. webpack 번들러를 npm을 통해 설치한다.
`npm install --save-dev webpack`

여기서 --save-dev 명령은 "나는 지금 '개발을 위한 모듈'을 사용하겠다. 라는 뜻으로
마치 git 처럼 개발자만을 위한 모듈이며, 프로덕트(서비스)와는 전혀관계 없는 모듈이다.

3-1. 웹팩 번들러, webpack이 정상적으로 설치되었다면,

 package.json 파일에 일반 "dependencies"가 아닌 dev 라는 접두사가 붙은 "devDependencies" 키에 webpack이 추가된 것을 확인 할 수 있다.


4. 개발환경에서 번들러를 사용할 것이므로, CLI 환경으로 webpack을 다루는 것이 일반적이다. 따라서 webpack을 cli에서 명령할 수 있게끔 도와주는 추가적인 모듈을 함께 설치한다.
` npm install --save-dev webpack-cli `

5. webpack 소프트웨어와 webpack을 cli환경에서 핸들링할 수 있게 해주는 webpack-cli 모듈 두개가
devDependencies 라는 package.json 항목에 추가되어있는지를 확인한다.

  "devDependencies": {
    "webpack": "^5.81.0",
    "webpack-cli": "^5.0.2"
  }

  이렇게 두개가 잘 작성되어있다면 기본 설치 완료

6. webpack을 어떻게 사용할 것인지에 대한 '정의'가 필요한데, 이것을 config 파일이라고 부른다.
- webpack을 사용하기 위한 약속이므로 정확하게 이름을 작성하여 파일을 생성한다.

webpack.config.js
" webpack글씨다음에.(온점)이 들어간 것을 확인 할 수 있다.

webpack은 javascript 파일을 정의 파일로 요구하는 특이한 특성을 가지고 있다.(보통은 JSON이나 yaml 파일, bat 파일을 요구한다.)

commonJS 방식으로 작성할 때는 이렇게 작성하는 것이 기본형식이다.

module.exports = {
  entry: "진입점 파일, 메인파일",
  output: {
    filename: '번들할 파일이름',
  },
};

-----------

7. webpack 실행하기

명령줄에 다음과 같이 작성한다.

npx webpack build

여기서 npx는 npm(node package manager) execute(실행)의 합성어로
의존하고있는 모듈(패키지)를 실행할 때 사용한다.
개발'용' 패키지 이므로 npx 명령어를 사용한다. 
