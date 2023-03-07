ex03: webpack 개발 서버

1. 설치 패키지
[ex02]$ npm i -D webpack webpack-cli webpack-dev-server

2. 번들링 환경(webpack.config.js) 설정
    - devServer (host, port, liveReload)

3. 스크립팅
    "scripts":{
        "start": "npx webpack serve --progress",
        "build": "npx webpack"
    }

4. 빌드
[ex02]$ npm run build

5. 실행
[ex02]$ npm start