# 🕹️ Neo-Brutalist Arcade Station

강렬한 **네오 브루탈리즘(Neo-Brutalism)** 스타일의 게임 허브입니다. 미니언즈와 한복 테마의 게임들을 한곳에서 만나보세요. Google Gemini 기반의 **AI Game Master**가 당신의 게임 여정을 안내합니다.



## ✨ 주요 기능 (Features)

- **Neo-Brutalist UI**: 고대비 색상, 굵은 테두리, 강한 그림자를 활용한 독보적인 디자인 감각.
- **Curated Games**: 엄선된 3가지 테마의 퍼즐 및 매칭 게임 링크 제공.
- **AI Game Master**: Google Gemini AI를 통해 터미널 스타일의 인터랙티브한 게임 가이드 및 대화 지원.
- **Responsive Design**: 모바일과 데스크탑 어디서나 완벽하게 작동하는 반응형 레이아웃.

## 🎮 포함된 게임 (Included Games)

1. **Minion Puzzle**: 지능적인 퍼즐 해결의 시간! 미니언즈와 함께 조각을 맞춰보세요.
2. **Minion Match**: 당신의 기억력을 테스트하는 미니언즈 메모리 게임.
3. **Hanbok Match**: 한복 입은 귀여운 동물들의 짝을 찾는 전통 테마 게임.

## 🛠️ 기술 스택 (Tech Stack)

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS (Neo-Brutalism Utility)
- **AI Integration**: Google Generative AI (Gemini API)
- **Deployment**: Vite-based static hosting

## 🚀 시작하기 (Getting Started)

### 사전 준비 (Prerequisites)
- [Node.js](https://nodejs.org/) (최신 LTS 권장)
- [Google AI Studio](https://aistudio.google.com/)에서 발급받은 Gemini API Key

### 로컬 실행 방법
1. **저장소 클론 및 의존성 설치:**
   ```bash
   npm install
   ```
2. **환경 변수 설정:**
   `.env.local` 파일을 생성하고 자신의 Gemini API Key를 입력합니다.
   ```env
   VITE_GEMINI_API_KEY=your_api_key_here
   ```
3. **앱 실행:**
   ```bash
   npm run dev
   ```
   브라우저에서 `http://localhost:5173`으로 접속합니다.

## 📂 프로젝트 구조 (Project Structure)

- `App.tsx`: 메인 레이아웃 및 전체 구조 정의
- `constants.tsx`: 게임 데이터 및 디자인 시스템 토큰 관리
- `metadata.json`: 앱 메타데이터 및 권한 설정
- `types.ts`: TypeScript 인터페이스 및 타입 정의

---
Created & Designed by **JPJP92**
