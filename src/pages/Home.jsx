import { Link } from 'react-router-dom'

const stats = [
  { label: '项目文件', value: '4' },
  { label: '调研报告', value: '12' },
  { label: '开发阶段', value: '7' },
  { label: '云服务成本', value: '¥600-1000/月' },
]

const conclusions = [
  { dim: '技术选型', val: '网站版替代小程序（上线快、SEO可做、视频体验好）', level: '必须' },
  { dim: '护城河', val: '设备码 US/IC/MX 三类型权限体系', level: '核心' },
  { dim: '最大风险', val: '医疗合规（直播隐私+AI诊断）；视频防盗是持续投入', level: '⚠️高风险' },
  { dim: 'AI 能力', val: 'Phase 5 暂不上（省 ¥2000-5000/月），仅预留接口', level: '暂缓' },
  { dim: '开发周期', val: '4人并行 10 周；单人开发 16 周以上', level: '参考' },
  { dim: '启动成本', val: '云服务 ¥600-1000/月；上线准备 ¥5,000-20,000', level: '参考' },
]

const levelColors = {
  '必须': { bg: '#fee2e2', color: '#dc2626' },
  '核心': { bg: '#fee2e2', color: '#dc2626' },
  '⚠️高风险': { bg: '#fee2e2', color: '#dc2626' },
  '暂缓': { bg: '#dcfce7', color: '#16a34a' },
  '参考': { bg: '#fef3c7', color: '#d97706' },
}

export default function Home() {
  return (
    <div style={{ flex: 1, overflowY: 'auto', padding: '32px 36px' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <h2 style={{
            fontSize: 22, fontWeight: 700, color: '#1a1a1a',
            marginBottom: 8, paddingBottom: 10,
            borderBottom: '3px solid #8b2635', display: 'inline-block'
          }}>
            📋 小动物科研培训平台 · 项目概览
          </h2>
          <p style={{ fontSize: 13.5, color: '#555', lineHeight: 1.7, marginTop: 12 }}>
            垂直领域在线教育平台，为小动物（犬/猫/兔/鼠等）科研人员、兽医、工程师提供专业培训课程与直播服务。基于设备码实现权限管理，内容覆盖超声诊断、智能笼系统、医学影像等方向。
          </p>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 28 }}>
          {stats.map(s => (
            <div key={s.label} style={{
              background: '#fff', border: '1px solid #e8e0d5',
              borderRadius: 10, padding: '16px 12px', textAlign: 'center'
            }}>
              <div style={{ fontSize: 22, fontWeight: 700, color: '#8b2635' }}>{s.value}</div>
              <div style={{ fontSize: 11, color: '#999', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Core conclusions */}
        <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', marginBottom: 12 }}>📌 核心结论</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12.5, marginBottom: 28 }}>
          <thead>
            <tr>
              {['维度', '结论', '优先级'].map(h => (
                <th key={h} style={{
                  textAlign: 'left', fontSize: 10.5, textTransform: 'uppercase',
                  letterSpacing: '0.05em', color: '#999',
                  padding: '7px 10px', borderBottom: '2px solid #e8e0d5'
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {conclusions.map(c => (
              <tr key={c.dim}>
                <td style={{ padding: '8px 10px', borderBottom: '1px solid #e8e0d5', color: '#333', fontWeight: 600 }}>{c.dim}</td>
                <td style={{ padding: '8px 10px', borderBottom: '1px solid #e8e0d5', color: '#555' }}>{c.val}</td>
                <td style={{ padding: '8px 10px', borderBottom: '1px solid #e8e0d5' }}>
                  <span style={{
                    fontSize: 10, fontWeight: 600, padding: '1px 6px', borderRadius: 3,
                    background: levelColors[c.level]?.bg, color: levelColors[c.level]?.color
                  }}>{c.level}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Tech stack */}
        <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', marginBottom: 12 }}>⚙️ 技术栈</h3>
        <div style={{ background: '#fff', border: '1px solid #e8e0d5', borderRadius: 10, padding: '16px 20px', marginBottom: 28 }}>
          <p style={{ fontSize: 13, color: '#555', lineHeight: 2 }}>前端：Next.js 14 / Vue3 · 后端：NestJS / Go / MySQL / Redis</p>
          <p style={{ fontSize: 13, color: '#555', lineHeight: 2 }}>基础设施：腾讯云 VOD · CSS · COS · Cloudflare · Vercel</p>
          <p style={{ fontSize: 13, color: '#555', lineHeight: 2 }}>视频：Video.js / flv.js · AI：智谱 GLM-4 + QDrant</p>
        </div>

        {/* Quick links */}
        <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1a1a1a', marginBottom: 12 }}>🚀 快速入口</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {[
            { icon: '📋', title: 'PRD v4.0 可行性分析', to: '/doc/prd-v4', color: '#8b2635' },
            { icon: '🌳', title: '功能模块树状图 v2', to: '/doc/tree-v2', color: '#16a34a' },
            { icon: '🎨', title: 'Demo 原型展示', to: '/doc/demo', color: '#7c3aed' },
            { icon: '⚠️', title: '合规资质（最高风险）', to: '/doc/report-6', color: '#dc2626' },
          ].map(item => (
            <Link key={item.to} to={item.to} style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '14px 16px', background: '#fff',
              border: '1px solid #e8e0d5', borderRadius: 10,
              textDecoration: 'none', color: '#1a1a1a',
              transition: 'box-shadow 0.15s'
            }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              <span style={{ fontSize: 20 }}>{item.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 600 }}>{item.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
