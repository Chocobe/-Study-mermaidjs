// components
import MyMermaid from '@/components/MyMermaid/MyMermaid';

const mermaidCode = `
---
title: 1. React 와 Google OAuth2 연동 flowchart
---

graph TB
    subgraph Project
        subgraph FE["Front-End"]
            loginButton(["로그인 버튼"])
            requestUserDataApi[["User 정보 요청"]]
            setTokensToLocalStorage[["localStorage 에 token 저장"]]
            completedLogin(["로그인 완료"])

            subgraph callbackOnSucceededGoogleLogin["로그인 성공 callback"]
                requestLoginApi[["Login 요청"]]
            end
        end

        subgraph BE["Back-End"]
            responseLoginApi[["Login 응답"]]
            responseUserDataApi[["User 정보 응답"]]
        end
    end

    subgraph Google
        subgraph GClient["Google Client"]
            GClient_openLoginForm[["Google Login Client 페이지 열기"]]
            GClient_submitLoginForm["Login Form 제출하기"]
            GClient_userAgreeButton["사용자 동의 버튼"]
        end

        subgraph GServer["Google Server"]
            GServer_responseAuthCode[["AuthCode 응답"]]
        end
    end



    loginButton --> GClient

    GClient_openLoginForm --> GClient_submitLoginForm
    GClient_submitLoginForm --> GClient_userAgreeButton
    GClient_userAgreeButton --> GServer
    GServer_responseAuthCode --> callbackOnSucceededGoogleLogin

    requestLoginApi --> responseLoginApi
    responseLoginApi --> setTokensToLocalStorage
    responseLoginApi --> requestUserDataApi
    requestUserDataApi --> responseUserDataApi
    responseUserDataApi --> completedLogin
`.trim();

function App() {
    return (
        <div>
            <MyMermaid
                id="mermaid-code"
                mermaidCode={mermaidCode} />
        </div>
    );
}

export default App;
