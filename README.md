# 딥그린 노트 — Astro 블로그

마크다운으로 글을 관리하는 심플한 정적 블로그입니다. 딥그린 톤 디자인, Cloudflare Pages 무료 배포에 맞춰져 있습니다.

## 로컬에서 실행

```bash
npm install
npm run dev
```

http://localhost:4321 에서 확인합니다.

## 새 글 쓰기

`src/content/blog/` 폴더에 `.md` 파일을 추가하면 자동으로 목록에 나타납니다.

```markdown
---
title: '글 제목'
description: '짧은 설명'
pubDate: 2026-08-04
tags: ['태그']
draft: false
---

본문 내용...
```

## 빌드

```bash
npm run build      # dist/ 에 정적 파일 생성
npm run preview    # 빌드 결과 미리보기
```

## 커스터마이징

- 사이트 제목/설명: `src/config.ts`
- 색상/폰트: `src/styles/global.css` 상단의 CSS 변수
- 배포 도메인: `astro.config.mjs` 의 `site`

## 배포

GitHub에 푸시한 뒤 Cloudflare Pages에 연결합니다.

- Build command: `npm run build`
- Build output directory: `dist`
