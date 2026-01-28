# CLAUDE.md - 한국렌탈테크 웹사이트 프로젝트 가이드

이 문서는 Claude가 이 프로젝트를 이해하고 작업하는 데 필요한 컨텍스트를 제공합니다.

## 프로젝트 개요

한국렌탈테크(Korea Rental Tech)의 공식 랜딩페이지로, Hugo 정적 사이트 생성기를 사용하여 GitHub Pages에 배포되는 기업 웹사이트입니다.

### 회사 정보

- **회사명**: 한국렌탈테크 (Korea Rental Tech)
- **서비스**: 단기 렌탈 전문 종합 솔루션
- **연락처**: master@korearentaltech.com / 010-6759-0933

### 핵심 서비스

1. **물류 관리**: 공항 수령/반납, 택배 발송/반납, 상품 보관/세척 대행
2. **IT/운영**: 단기 렌탈 특화 자사몰, 재고 관리, 먹튀 방지/신분 인증
3. **경영**: 매출/감가상각 관리, 인건비/임대료 관리, 상품별 수익률 관리
4. **마케팅**: SNS, 콘텐츠, 커뮤니티 마케팅 대행

## 기술 스택

- **프레임워크**: Hugo v0.154.5+ (Extended)
- **호스팅**: GitHub Pages
- **CI/CD**: GitHub Actions
- **언어**: Korean (ko-KR)

## 주요 파일 위치

### 설정 파일
- `hugo.toml` - Hugo 메인 설정 (사이트 메타데이터, SEO, 파라미터)

### 테마 파일 (themes/krt-theme/)
- `layouts/baseof.html` - 기본 HTML 레이아웃 (SEO 메타태그 포함)
- `layouts/home.html` - 홈페이지 전체 레이아웃
- `layouts/_partials/header.html` - 네비게이션 헤더
- `layouts/_partials/footer.html` - 푸터
- `assets/css/main.css` - 전체 스타일시트 (CSS 변수 기반 디자인 시스템)
- `assets/js/main.js` - JavaScript (스크롤, 모바일 메뉴, 애니메이션)

### 콘텐츠
- `content/_index.md` - 홈페이지 메타데이터

### 로고 및 이미지
- `static/images/logo.png` - 헤더/푸터 로고
- `static/images/logo-white.png` - 흰색 배경용 로고

### 배포
- `.github/workflows/hugo.yml` - GitHub Actions 배포 워크플로우

## 디자인 시스템 (Ocean Azure Palette)

### CSS 변수

```css
--primary: #0066CC;        /* 메인 블루 - 버튼, 링크, 강조 */
--secondary: #3399FF;      /* 보조 블루 - 호버, 아이콘 */
--accent: #00B894;         /* 그린 - 성공, CTA 포인트 */
--text: #1A1A2E;           /* 본문 텍스트 */
--text-muted: #5C6B7A;     /* 부가 설명 */
--background: #FFFFFF;     /* 기본 배경 */
--background-alt: #F0F7FF; /* 섹션 배경 */
--border: #D0E3F7;         /* 테두리, 구분선 */
```

### 컬러 스케일

각 컬러는 50-900까지의 스케일을 가집니다:
- `--primary-50` ~ `--primary-900`
- `--accent-50` ~ `--accent-900`
- `--gray-50` ~ `--gray-900`

상세 정의는 `ocean-azure-palette.jsx` 참고

## 개발 명령어

```bash
# 개발 서버 실행
hugo server -D

# 프로덕션 빌드
hugo --gc --minify

# 특정 환경 빌드
hugo --environment production
```

## 작업 가이드라인

### 스타일 수정 시

1. CSS 변수 사용을 우선시할 것
2. `main.css` 상단의 `:root` 섹션에서 변수 확인
3. 반응형 브레이크포인트: 768px (모바일), 1024px (태블릿)

### 콘텐츠 수정 시

1. 텍스트 변경: `home.html` 직접 수정
2. 메타데이터 변경: `hugo.toml`의 `[params]` 섹션 수정
3. 한국어 텍스트 인코딩: UTF-8 유지

### 새 섹션 추가 시

1. `home.html`에 새 `<section>` 추가
2. 해당 스타일 `main.css`에 추가
3. 네비게이션 링크 `header.html`에 추가 (앵커 ID 기반)

### SEO 관련

- `baseof.html`에 Open Graph, Twitter Cards 메타태그 포함
- 구조화된 데이터 (Schema.org Organization) 포함
- `robots.txt`와 `sitemap.xml` 자동 생성

## 배포 프로세스

1. `main` 브랜치에 push
2. GitHub Actions가 자동으로 빌드"
3. `gh-pages` 배포
4. https://korearentaltech.github.io/ 에서 확인

## 주의사항

- `public/` 디렉토리는 빌드 결과물이므로 커밋하지 않음 (.gitignore에 포함)
- 이미지 추가 시 `static/images/` 디렉토리 사용
- Hugo Extended 버전 필요 (CSS 처리를 위해)
- 폰트: Noto Sans KR (Google Fonts CDN)

## 참고 자료

- `introduce.pdf` - 회사 소개서 원본 (콘텐츠 참고용)
- `ocean-azure-palette.jsx` - 디자인 시스템 컬러 팔레트 정의
