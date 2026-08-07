# 信息化项目费用测算工具

基于 Vue 3 + TypeScript + Vite 构建的纯静态费用测算应用，支持成都市（DB5101/T 5—2018）、（DB5101/T 6—2018）和四川省（TSCSIA 0015-2023）3个标准。

## 功能特性

- **成都市信息化项目开发费用测算**：功能点法（ILF/EIF），含复用度、软件因素调整、开发因素调整、直接非人力成本。
- **成都市信息化项目运维费用测算**：功能点法（ILF/EIF），含运维水平、运维能力、运维系统特征及直接非人力成本。。
- **四川省信息化项目费用测算**：涵盖建设费用、购买服务费用、运维费用、其他费用及预备费。
- 导出 CSV 表格和 PDF 报告。

## 技术栈

- Vue 3 (Composition API + `<script setup>`)
- TypeScript
- Vite
- Element Plus
- Vue Router (Hash 模式)
- html2canvas + jsPDF

## 本地启动

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview
