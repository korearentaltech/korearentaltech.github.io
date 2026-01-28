# 한국렌탈테크 (Korea Rental Tech) 웹사이트

단기 렌탈 전문 종합 솔루션을 제공하는 한국렌탈테크의 공식 웹사이트입니다.

## 기술 스택

- **Static Site Generator**: [Hugo](https://gohugo.io/) v0.154.5+
- **호스팅**: GitHub Pages
- **CI/CD**: GitHub Actions

## 프로젝트 구조

```
.
├── .github/workflows/     # GitHub Actions 워크플로우
│   └── hugo.yml          # Hugo 빌드 및 배포 설정
├── content/              # 콘텐츠 파일 (Markdown)
│   └── _index.md        # 홈페이지 메타데이터
├── static/              # 정적 파일 (이미지, favicon 등)
│   ├── images/
│   └── robots.txt
├── themes/
│   └── krt-theme/       # 커스텀 테마
│       ├── assets/
│       │   ├── css/main.css   # 스타일시트
│       │   └── js/main.js     # JavaScript
│       └── layouts/
│           ├── baseof.html    # 기본 레이아웃
│           ├── home.html      # 홈페이지 템플릿
│           └── _partials/     # 재사용 컴포넌트
├── hugo.toml            # Hugo 설정 파일
└── README.md
```

## 로컬 개발 환경 설정

### 1. Hugo 설치

**macOS (Homebrew)**
```bash
brew install hugo
```

**Windows (Chocolatey)**
```bash
choco install hugo-extended
```

**Linux (Snap)**
```bash
snap install hugo --channel=extended
```

### 2. 로컬 서버 실행

```bash
# 프로젝트 디렉토리로 이동
cd korearentaltech.github.io

# 개발 서버 실행 (라이브 리로드 포함)
hugo server -D

# 또는 특정 포트로 실행
hugo server -D -p 1313
```

브라우저에서 `http://localhost:1313` 접속

### 3. 프로덕션 빌드

```bash
# 빌드 (public/ 디렉토리에 생성)
hugo --gc --minify

# 빌드 결과 미리보기
hugo server --renderStaticToDisk
```

## 배포

### 자동 배포 (권장)

`main` 브랜치에 push하면 GitHub Actions가 자동으로 빌드 및 배포합니다.

```bash
git add .
git commit -m "Update content"
git push origin main
```

### 수동 배포

GitHub 저장소 > Actions 탭 > "Deploy Hugo site to Pages" > "Run workflow"

### GitHub Pages 설정

1. GitHub 저장소 > Settings > Pages
2. Source: "GitHub Actions" 선택
3. 배포 완료 후 `https://korearentaltech.github.io/` 에서 확인

## 콘텐츠 수정

### 메타데이터 수정

`hugo.toml` 파일에서 사이트 설정 수정:

```toml
[params]
  description = '사이트 설명'
  email = 'contact@example.com'
  phone = '010-0000-0000'
```

### 홈페이지 콘텐츠 수정

`themes/krt-theme/layouts/home.html` 파일에서 직접 HTML 수정

### 스타일 수정

`themes/krt-theme/assets/css/main.css` 파일 수정

CSS 변수를 통한 디자인 시스템:

```css
:root {
  --primary: #0066CC;      /* 메인 블루 */
  --accent: #00B894;       /* 강조 그린 */
  --text: #1A1A2E;         /* 본문 텍스트 */
  --background-alt: #F0F7FF; /* 섹션 배경 */
}
```

## 디자인 시스템 (Ocean Azure Palette)

| 색상 | HEX | 용도 |
|------|-----|------|
| Primary | `#0066CC` | 메인 버튼, 강조 텍스트, 링크 |
| Secondary | `#3399FF` | 보조 버튼, 아이콘, 호버 상태 |
| Accent | `#00B894` | 성공 상태, 강조 배지, CTA 포인트 |
| Text | `#1A1A2E` | 본문 텍스트, 제목 |
| Text Muted | `#5C6B7A` | 부가 설명, 레이블 |
| Background | `#FFFFFF` | 기본 배경 |
| Background Alt | `#F0F7FF` | 섹션 구분, 카드 배경 |
| Border | `#D0E3F7` | 카드 테두리, 구분선 |

## 문의

- 이메일: master@korearentaltech.com
- 연락처: 010-6759-0933

## 라이선스

Copyright 2024 한국렌탈테크. All rights reserved.
