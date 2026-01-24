# 小波音乐 (xiaoboMusic)

一个基于 Vue 3 + TypeScript + Pinia 开发的现代化音乐播放器，提供流畅的音乐播放体验和丰富的音乐资源。

## 🎯 项目介绍

仿网易云音乐是一款功能齐全的音乐播放器，支持音乐播放、歌单管理、歌词显示、个性化推荐等核心功能。采用现代化的前端技术栈开发，具有良好的用户体验和性能表现。

## 📸 项目截图

**首页**:

<img width="1920" height="869" alt="image" src="https://github.com/user-attachments/assets/ef39061d-3331-4f34-a5ed-1ee6825bcdbb" />
<img width="1920" height="869" alt="image" src="https://github.com/user-attachments/assets/9bca14d6-9992-4090-bcac-e00ef6af1a83" />

**歌单**:

<img width="1920" height="869" alt="image" src="https://github.com/user-attachments/assets/d9ba22ca-74d8-495b-8df6-1243a1692e34" />

**userpage:**
<img width="1920" height="869" alt="image" src="https://github.com/user-attachments/assets/aef41372-6e07-44d6-9856-39e260cd21e4" />


## ✨ 功能特性

### 核心功能
- 🎵 **音乐播放**：支持多种音质选择，流畅的播放体验
- 📋 **歌单管理**：创建、编辑、删除歌单
- 📃 **歌词显示**：实时歌词同步，支持滚动显示
- 🔍 **音乐搜索**：支持关键词搜索、热门搜索
- 🎧 **个性化推荐**：基于用户喜好推荐音乐
- 📱 **响应式设计**：适配不同屏幕尺寸

### 进阶功能
- 🎨 **主题切换**：支持多种主题色选择
- 🔄 **播放模式**：顺序播放、随机播放、单曲循环
- 💾 **本地缓存**：支持音乐缓存，离线播放
- 🔥 **热门排行**：实时更新热门歌曲排行榜
- 🎤 **歌手专辑**：按歌手、专辑浏览音乐
- 💬 **评论互动**：查看和发布音乐评论

## 🛠️ 技术栈

| 技术 | 版本 | 用途 |
| --- | --- | --- |
| Vue | 3.3.4 | 前端框架 |
| TypeScript | 4.9.5 | 类型系统 |
| Pinia | 2.0.36 | 状态管理 |
| Vue Router | 4.2.0 | 路由管理 |
| Axios | 1.4.0 | 网络请求 |
| Element Plus | 2.3.6 | UI组件库 |
| Swiper | 9.3.2 | 轮播组件 |
| Vite | 4.3.5 | 构建工具 |
| Less | 4.1.3 | CSS预处理器 |
| Animate.css | 4.1.1 | 动画效果 |

## 📁 项目结构

```
src/
├── assets/           # 静态资源
│   ├── icon/         # 图标资源
│   ├── img/          # 图片资源
│   └── less/         # 样式文件
├── components/       # 通用组件
│   ├── aside/        # 侧边栏组件
│   ├── comment/      # 评论组件
│   ├── date-list/    # 日期列表组件
│   └── play-music/   # 播放组件
├── routes/           # 路由配置
├── services/         # API服务
│   ├── config/       # 配置文件
│   └── modules/      # 业务模块服务
├── stores/           # Pinia状态管理
├── types/            # TypeScript类型定义
├── utils/            # 工具函数
├── views/            # 页面组件
│   ├── home/         # 首页
│   └── not-found/    # 404页面
├── App.vue           # 根组件
└── main.ts           # 入口文件
```

## 🚀 安装与运行

### 环境要求
- Node.js >= 16.x
- npm >= 8.x

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

项目将在 http://localhost:9002 启动

### 构建生产版本

```bash
npm run build
```

### 类型检查

```bash
npm run type-check
```

### 代码 lint

```bash
npm run lint
```

### 代码格式化

```bash
npm run format
```

## 🎮 核心功能模块

### 1. 音乐播放模块
- 实现音乐的播放、暂停、上一曲、下一曲
- 支持多种播放模式切换
- 音乐URL获取与缓存
- 播放列表管理

### 2. 歌单模块
- 歌单创建、编辑、删除
- 歌单详情展示
- 歌曲添加到歌单

### 3. 推荐模块
- 个性化推荐歌曲
- 热门歌单推荐
- 轮播图展示

### 4. 搜索模块
- 关键词搜索
- 热门搜索词展示
- 搜索历史记录

### 5. 歌词模块
- 歌词解析与展示
- 歌词滚动同步
- 歌词高亮显示

## 🌟 项目亮点

1. **现代化技术栈**：使用 Vue 3 + TypeScript + Pinia 构建，代码质量高，可维护性强
2. **良好的用户体验**：流畅的动画效果，响应式设计，适配多种设备
3. **性能优化**：实现了请求缓存、防抖、懒加载等优化，提升页面加载速度
4. **类型安全**：全面的 TypeScript 类型定义，减少运行时错误
5. **模块化设计**：清晰的项目结构，便于扩展和维护
6. **丰富的功能**：涵盖了音乐播放器的核心功能，满足用户需求

## 📖 开发指南

### 代码规范

- 使用 ESLint 进行代码检查
- 使用 Prettier 进行代码格式化
- 遵循 Vue 3 组合式 API 规范
- 为所有组件和函数添加 TypeScript 类型定义

### 状态管理

- 使用 Pinia 进行状态管理
- 按功能模块划分 store
- 避免 store 之间的循环依赖
- 合理使用本地缓存

### API 调用

- 所有 API 调用封装在 services 目录下
- 实现请求缓存机制，减少重复请求
- 统一的错误处理

## 🤝 贡献指南

欢迎各位开发者贡献代码！请遵循以下步骤：

1. Fork 本仓库
2. 创建特性分支：`git checkout -b feature/xxx`
3. 提交代码：`git commit -m 'Add some feature'`
4. 推送到分支：`git push origin feature/xxx`
5. 提交 Pull Request

## 📄 许可证

本项目采用 MIT 许可证，详见 [LICENSE](LICENSE) 文件。

## 📞 联系方式

如有问题或建议，欢迎通过以下方式联系：

- GitHub Issues：[https://github.com/coderxiaoluo/vue3-ts-netease-music](https://github.com/coderxiaoluo/vue3-ts-netease-music)
- 邮箱：1195646651@qq.com

## 🙏 致谢

感谢所有为这个项目做出贡献的开发者！

---

**小罗音乐** - 让音乐伴随你的每一天 🎵
