import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import DocumentViewer from './pages/DocumentViewer'

const docs = [
  {
    id: 'overview',
    title: '🏠 项目首页',
    path: '/',
    type: 'page',
    icon: '🏠',
    desc: '项目概览、核心结论、技术栈、统计数据'
  },
  {
    id: 'prd-v4',
    title: '📋 PRD v4.0',
    path: '/doc/prd-v4',
    type: 'pdf',
    icon: '📋',
    desc: '最新版可行性分析，含技术架构/成本/风险评估'
  },
  {
    id: 'tree-v2',
    title: '🌳 功能模块树状图',
    path: '/doc/tree-v2',
    type: 'html',
    icon: '🌳',
    desc: '11个一级模块，Phase 1-7 开发阶段标注，颜色分级'
  },
  {
    id: 'demo',
    title: '🎨 Demo 原型',
    path: '/doc/demo',
    type: 'html',
    icon: '🎨',
    desc: 'Next.js+shadcn/ui 风格前端展示'
  },
  {
    id: 'report-1',
    title: '📊 竞品分析',
    path: '/doc/report-1',
    type: 'page',
    icon: '📊',
    desc: '国内外竞品对比，差异化定位'
  },
  {
    id: 'report-2',
    title: '👤 用户画像',
    path: '/doc/report-2',
    type: 'page',
    icon: '👤',
    desc: '目标用户分类、需求分析'
  },
  {
    id: 'report-3',
    title: '🎬 课程内容',
    path: '/doc/report-3',
    type: 'page',
    icon: '🎬',
    desc: '课程体系规划、内容来源渠道'
  },
  {
    id: 'report-4',
    title: '🔐 设备码',
    path: '/doc/report-4',
    type: 'page',
    icon: '🔐',
    desc: '设备码地推策略、US/IC/MX权限体系'
  },
  {
    id: 'report-5',
    title: '💰 定价策略',
    path: '/doc/report-5',
    type: 'page',
    icon: '💰',
    desc: '会员/单课/机构定价方案'
  },
  {
    id: 'report-6',
    title: '⚠️ 合规资质',
    path: '/doc/report-6',
    type: 'page',
    icon: '⚠️',
    desc: '医疗合规红线、资质申请清单'
  },
  {
    id: 'report-7',
    title: '🌐 域名品牌',
    path: '/doc/report-7',
    type: 'page',
    icon: '🌐',
    desc: '域名选择，品牌命名建议'
  },
  {
    id: 'report-8',
    title: '📣 推广获客',
    path: '/doc/report-8',
    type: 'page',
    icon: '📣',
    desc: '冷启动策略、流量获取路径'
  },
  {
    id: 'report-9',
    title: '💳 支付接入',
    path: '/doc/report-9',
    type: 'page',
    icon: '💳',
    desc: '微信/支付宝接入、手续费测算'
  },
  {
    id: 'report-10',
    title: '🛠️ 运维保障',
    path: '/doc/report-10',
    type: 'page',
    icon: '🛠️',
    desc: '云服务选型、技术架构、监控体系'
  },
  {
    id: 'report-11',
    title: '👥 团队协作',
    path: '/doc/report-11',
    type: 'page',
    icon: '👥',
    desc: 'GitHub协作流程、代码规范'
  },
  {
    id: 'report-12',
    title: '📹 直播功能',
    path: '/doc/report-12',
    type: 'page',
    icon: '📹',
    desc: '直播技术链路、功能清单、合规要求'
  },
]

export { docs }

export default function App() {
  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: '"PingFang SC", "Microsoft YaHei", sans-serif' }}>
      {/* Sidebar */}
      <aside style={{
        width: 220,
        background: '#fff',
        borderRight: '1px solid #e8e0d5',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        flexShrink: 0
      }}>
        <div style={{
          padding: '14px 16px',
          borderBottom: '1px solid #e8e0d5',
          background: '#8b2635',
          color: '#fff'
        }}>
          <div style={{ fontSize: 13, fontWeight: 700 }}>🐾 小动物科研培训平台</div>
          <div style={{ fontSize: 10, opacity: 0.75, marginTop: 3 }}>村口情报社 · 文档中心</div>
        </div>
        <nav style={{ flex: 1, overflowY: 'auto', padding: '8px 0' }}>
          {docs.map(doc => (
            <Link
              key={doc.id}
              to={doc.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 14px',
                fontSize: 12.5,
                color: '#555',
                textDecoration: 'none',
                borderLeft: '3px solid transparent',
                transition: 'all 0.12s',
              }}
              activeStyle={{
                background: '#fdf5f5',
                color: '#8b2635',
                borderLeftColor: '#8b2635',
                fontWeight: 600
              }}
            >
              <span style={{ fontSize: 14 }}>{doc.icon}</span>
              <span>{doc.title.replace(/^[^\s]+\s/, '')}</span>
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#faf8f3' }}>
        <Routes>
          <Route path="/" element={<Home docs={docs} />} />
          <Route path="/doc/:docId" element={<DocumentViewer docs={docs} />} />
        </Routes>
      </main>
    </div>
  )
}
