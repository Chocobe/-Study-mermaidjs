// UI component
import MyMermaid from '@/components/MyMermaid/MyMermaid';

const mermaidCode = `
---
title: Login 시퀀스 다이어그램
---

sequenceDiagram
    box FrontEnd
        actor User
        participant LoginPage as 로그인 페이지
    end

    box Google
        participant GoogleForm as Google 로그인 Form
        participant GoogleServer as Google 서버
    end

    participant BackEnd

    User ->>+ LoginPage: 로그인 버튼 클릭
        LoginPage ->>+ GoogleForm: Google 로그인 Form 열기
            GoogleForm ->>+ GoogleServer: Email, Password 제출
            GoogleServer -->>- GoogleForm: auth-code 응답
        GoogleForm -->>- LoginPage: onSuccess(authCode) 호출
    LoginPage ->>+ BackEnd: auth-code 를 넘겨주며 login 요청

    BackEnd -->>- LoginPage: accessToken, refreshToken 응답
    LoginPage -->>- User: 로그인 성공
`.trim();

function Home() {
    return (
        <div>
            <MyMermaid mermaidCode={mermaidCode} />
        </div>
    );
}

export default Home;
