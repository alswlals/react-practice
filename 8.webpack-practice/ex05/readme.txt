ex05: SASS/SCSS Module 번들링하기

1. 설치 패키지
[ex02]$ npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader sass-loader node-sass

2. CSS Loader 설정(webpack.config.js) 설정
  module: {
        rules:[{
            test: /\.(c|sa|sc)ss$/i, 
            use: ['style-loader', 'css-loader', 'sass-loader']
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