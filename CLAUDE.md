# 프로젝트 컨텍스트 — 딥그린 노트 (Astro 블로그)

이 파일은 Claude Code가 세션 시작 시 자동으로 읽습니다.
다른 컴퓨터에서 작업을 이어받을 때 이 문서가 인수인계 역할을 합니다.

## 이 프로젝트가 무엇인가

개인 블로그. 마크다운 파일로 글을 관리하는 Astro 정적 사이트.

- **배포 주소**: https://astro-blog-hwanghwanmin.pages.dev
- **저장소**: https://github.com/ghksalswkd1213-sys/astro-blog-hwanghwanmin-
- **호스팅**: Cloudflare Pages (무료 플랜, GitHub 연동 자동 배포)

## 확정된 설계 결정

작업을 이어갈 때 아래 결정들은 이미 합의된 것이므로 다시 논의하지 않아도 됩니다.

- **글은 마크다운으로만 관리한다.** CMS나 DB를 붙이지 않는다.
  `src/content/blog/*.md` 파일 하나가 글 하나.
- **디자인은 딥그린 계열, 심플하고 읽기 편하게.** 장식적 요소를 늘리지 않는다.
  색은 `src/styles/global.css` 상단 CSS 변수에 정의되어 있고, 라이트/다크가
  `prefers-color-scheme`으로 자동 전환된다. 수동 토글은 아직 없음.
- **커스텀 도메인을 나중에 붙일 수 있는 구조를 유지한다.**
  도메인이 정해지면 `astro.config.mjs`의 `site` 값 한 곳만 바꾸면 된다.
- **본문 폭은 720px** (`--max-width`). 읽기 편의를 위한 값이므로 함부로 늘리지 않는다.

## 구조

```
src/
  config.ts              사이트 제목·설명·작성자 (여기만 고치면 전역 반영)
  content.config.ts      블로그 컬렉션 스키마 (프론트매터 필드 정의)
  content/blog/*.md      글 원본
  layouts/BaseLayout.astro   공통 레이아웃 + <head> 메타태그
  components/            Header, Footer
  pages/
    index.astro          글 목록 (최신순, draft 제외)
    blog/[...slug].astro 개별 글
    about.astro          소개
  styles/global.css      전역 스타일 + 딥그린 토큰
public/
  favicon.svg
  _headers               Cloudflare 캐시 헤더
```

## 글 쓰는 법

`src/content/blog/` 에 `.md` 파일 추가:

```markdown
---
title: '글 제목'
description: '목록에 보일 설명'
pubDate: 2026-08-06
tags: ['태그']
draft: false
---

본문
```

`draft: true` 면 목록과 빌드에서 제외된다.

## 개발 / 배포

```bash
npm install     # 최초 1회 (node_modules는 git에 포함되지 않음)
npm run dev     # http://localhost:4321
npm run build   # dist/ 생성, 배포 전 검증용
```

`main` 브랜치에 push하면 Cloudflare Pages가 자동으로 재빌드·배포한다.
별도의 배포 명령은 없다.

## 아직 안 한 것 (이어서 할 후보)

- `src/config.ts`의 `author`가 `'Your Name'` 플레이스홀더 상태
- `src/pages/about.astro`의 이메일·GitHub 주소가 예시값 상태
- RSS 피드 없음 (`@astrojs/rss`)
- 태그별 목록 페이지 없음 (태그는 표시만 되고 클릭 불가)
- 글이 많아질 때를 위한 페이지네이션 없음
- 커스텀 도메인 미연결 (`astro.config.mjs`의 `site`가 아직 example 값)
