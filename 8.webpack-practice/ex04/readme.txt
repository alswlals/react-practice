ex04: CSS Module 번들링하기

1. 설치 패키지
[ex02]$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader

2. CSS Loader 설정(webpack.config.js) 설정
  module: {
        rules:[{
            test: /\.css$/i,   /* css로 끝나는, 대소문자 구분하지 않는 */
            use: ['style-loader', 'css-loader']
        }]
    }   

3. 스크립팅
    "scripts":{
        "start": "npx webpack serve --progress",
        "build": "npx webpack"
    }

4. 빌드
[ex02]$ npm run build

5. 실행
[ex02]$ npm start