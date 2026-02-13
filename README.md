# 🕹️ Arcade Station: Neo-Brutalist Game Hub

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black&style=for-the-badge)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white&style=for-the-badge)](https://vitejs.dev/)
[![Gemini](https://img.shields.io/badge/Google_Gemini-2.5_Flash_Lite-4285F4?logo=google-gemini&logoColor=white&style=for-the-badge)](https://aistudio.google.com/)
[![Style](https://img.shields.io/badge/Style-Neo--Brutalism-FFD600?style=for-the-badge)](https://v0.dev/chat/neo-brutalist-guide)

강렬한 **네오 브루탈리즘(Neo-Brutalism)** 스타일로 재해석된 웹 기반 게임 허브입니다. 굵은 테두리, 고대비 색상, 그리고 **Google Gemini 2.5 Flash-Lite** 기반의 인공지능 게임 마스터가 당신을 반깁니다.

---

## ✨ 핵심 기능 (Core Features)

- **🎨 High-Impact Visuals**: 획일적인 미니멀리즘에서 벗어나 강렬한 색채와 그림자를 활용한 독보적인 UI/UX.
- **🤖 Next-Gen AI Game Master**: `gemini-2.5-flash-lite` 모델을 탑재하여 더욱 빠르고 지능적인 게임 안내 및 질의응답 제공.
- **🧩 Curated Challenge**:
  - `Minion Puzzle`: 두뇌를 자극하는 슬라이드 퍼즐.
  - `Minion Match`: 순간 기억력을 극대화하는 카드 매칭.
  - `Hanbok Match`: 한국의 미(美)를 담은 전통 테마 애니멀 매칭.
- **📱 Fluid Responsiveness**: 어떤 디바이스에서도 일관된 충격적인 디자인 경험 제공.

---

## 🛠️ 기술 스택 (System Architecture)

### Frontend Environment
- **Core Library**: React 19 (Latest)
- **Build Tool**: Vite 6 (Lightning Fast)
- **Design Framework**: Tailwind CSS
- **Deployment**: Vercel Integrated

### Intelligence Layer
- **Model**: Google Gemini 2.5 Flash-Lite (Verified Real-time API)
- **Library**: `@google/genai` v1.40.0+

```mermaid
graph TD
    User([User]) <--> UI[React Components]
    UI <--> Logic[Game Hub Logic]
    Logic <--> Gemini{{"Google Gemini 2.5 Flash-Lite"}}
    subgraph "External Games"
        MinionP[Minion Puzzle]
        MinionM[Minion Match]
        HanbokM[Hanbok Match]
    end
    UI -- "Browse/Launch" --> External Games
```

---

## 🚀 빠른 시작 (Getting Started)

### 사전 준비
- [Node.js](https://nodejs.org/) (v20 이상 권장)
- [Google AI Studio](https://aistudio.google.com/) Gemini API Key

### 설치 및 실행
1.  **저장소 복제 및 의존성 설치**
    ```bash
    git clone https://github.com/jpjp92/arcades.git
    cd arcades
    npm install --legacy-peer-deps
    ```
2.  **환경 변수 설정**
    `.env.local` 파일을 생성하고 아래 내용을 입력합니다 (파일명 주의).
    ```env
    GEMINI_API_KEY=your_actual_api_key_here
    ```
3.  **로컬 개발 서버 실행**
    ```bash
    npx vercel dev
    # 또는
    npm run dev
    ```

---

## 📂 프로젝트 구조 (Structure)

```text
arcades/
├── components/          # UI 컴포넌트 (GameCard, AIGameMaster 등)
├── constants.tsx        # 게임 데이터 및 디자인 시스템 토큰
├── types.ts             # 전역 TypeScript 정의
├── .env.local           # (비공개) 로컬 환경 변수
├── index.css            # 글로벌 디자인 베이스 (Neo-Brutalism 테마)
└── package.json         # 프로젝트 의존성 및 스크립트
```

---

## 🗺️ Roadmap (Future Scope)

- [ ] Multi-language Support (EN/KR/JP)
- [ ] Direct Leaderboard Integration with Supabase
- [ ] Exclusive In-hub Mini Games
- [ ] Advanced AI Persona Customization

---

**Designed with passion by [JPJP92](https://github.com/jpjp92)**  
*Revolutionizing web aesthetics one pixel at a time.*
