# Legislative Election Official Website

![Static Badge](https://img.shields.io/badge/Vue-3.3.4-green?style=social&logo=vuedotjs&logoColor=%234FC08D) ![Static Badge](https://img.shields.io/badge/Vite-4.4.11-%23646CFF?style=social&logo=vite&logoColor=%23646CFF) ![Static Badge](https://img.shields.io/badge/npm-10.1-%23CB3837?style=social&logo=npm&logoColor=%23CB3837) ![Static Badge](https://img.shields.io/badge/node%2Cjs-20.9-%23339933?style=social&logo=node.js&logoColor=%23339933)

立委選舉官網

## Demo

https://emmasyu.github.io/f2e-mission1-legislative-election/

## Introduction

以虛擬人物作為立委候選人，打造形象官網，塑造立委形象

- 清楚顯示立委政見主張資訊
- 明確指引用戶前往小額捐款

## Project operation mode

- `npm install` -- 安裝依賴模組
- `npm run dev` -- 運行伺服器及開發
- 使用 Node.js 20.9.0
- npm 10.1

## Folder description

```
├─ index.html	# 網站首頁 (render)
│
├─ /src	# 要編譯的原始碼
│	├─ App.vue	# Vue 掛載於 index.html 的主檔案
│	├─ main.ts	# nodejs 運行進入點
│	├─ /assets	# 放置圖片、CSS 等資源
│	├─ /components	# vue 拆分組件
│	├─ /filters	# 全域使用的 function
│	├─ /router	# 路由配置
│	├─ /stores	# 狀態管理
│	├─ /views	# 頁面
│		├─ DonationView.vue	# 捐款頁面
│		├─ HoneView.vue	# 首頁
│
├─ /public	# 不需編譯的資源檔案

```

### Use technology and libraries

- Vue.js
- Vue Router
- Pinia
- Vite
- Tailwindcss
- Typescript

### Features

- [x] RWD 版面樣式
- [ ] 滾動視差
