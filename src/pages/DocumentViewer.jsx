import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Paths to source files (relative to the static server root)
const DOC_PATHS = {
  'prd-v4':   '/小动物科研培训平台/PRD/小动物科研培训网站_PRD_v4.0_可行性分析_1---986d224b-fee5-4699-abf0-0bdf2f65c33e.pdf',
  'tree-v2':  '/小动物科研培训平台/功能图/功能模块树状图_v2.html',
  'demo':     '/小动物科研培训平台/demo/index.html',
}

// Reports are embedded as HTML sections
const REPORT_IDS = ['report-1','report-2','report-3','report-4','report-5','report-6','report-7','report-8','report-9','report-10','report-11','report-12']

export default function DocumentViewer({ docs }) {
  const { docId } = useParams()
  const [content, setContent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const doc = docs.find(d => d.id === docId)

  useEffect(() => {
    setLoading(true)
    setError(null)
    setContent(null)

    // Reports are embedded in the main index.html - we load that once and extract
    if (REPORT_IDS.includes(docId)) {
      fetch('/小动物科研培训平台/index.html')
        .then(r => r.text())
        .then(html => {
          const parser = new DOMParser()
          const doc = parser.parseFromString(html, 'text/html')
          const tab = doc.getElementById(`report-${docId.replace('report-', '')}`)
          if (tab) {
            // Get the inner HTML but fix relative links
            let bodyHtml = tab.innerHTML
            setContent(bodyHtml)
          } else {
            setError('未找到该报告内容')
          }
          setLoading(false)
        })
        .catch(err => {
          setError('加载失败: ' + err.message)
          setLoading(false)
        })
    } else if (DOC_PATHS[docId]) {
      fetch(DOC_PATHS[docId])
        .then(r => {
          if (!r.ok) throw new Error(`HTTP ${r.status}`)
          return r.text()
        })
        .then(html => setContent(html))
        .catch(err => setError('加载失败: ' + err.message))
        .finally(() => setLoading(false))
    } else {
      setError('未知文档')
      setLoading(false)
    }
  }, [docId])

  if (!doc) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#999' }}>
        <p>文档不存在，<Link to="/">返回首页</Link></p>
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Doc header */}
      <div style={{
        padding: '12px 20px',
        borderBottom: '1px solid #e8e0d5',
        background: '#fff',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        flexShrink: 0
      }}>
        <span style={{ fontSize: 18 }}>{doc.icon}</span>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#1a1a1a' }}>{doc.title}</div>
          <div style={{ fontSize: 11, color: '#999' }}>{doc.desc}</div>
        </div>
        <Link to="/" style={{
          marginLeft: 'auto', fontSize: 12, color: '#8b2635',
          textDecoration: 'none', padding: '4px 12px',
          border: '1px solid #8b2635', borderRadius: 6
        }}>← 返回首页</Link>
      </div>

      {/* Content area */}
      <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
        {loading && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#999' }}>
            <span>加载中...</span>
          </div>
        )}
        {error && (
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: '#dc2626' }}>
            <span>{error}</span>
          </div>
        )}

        {/* PDF viewer */}
        {!loading && !error && doc.type === 'pdf' && content === null && (
          <iframe
            key={docId}
            src={DOC_PATHS[docId]}
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        )}

        {/* HTML iframe for tree-v2 and demo */}
        {!loading && !error && (doc.type === 'html') && (
          <iframe
            key={docId}
            src={DOC_PATHS[docId]}
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        )}

        {/* Embedded report HTML */}
        {!loading && !error && REPORT_IDS.includes(docId) && content && (
          <iframe
            key={docId}
            srcDoc={`<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  * {{ margin:0; padding:0; box-sizing:border-box; }}
  body {{ font-family:"PingFang SC","Microsoft YaHei",sans-serif; background:#faf8f3; padding:24px 32px; }}
  .report-body {{ max-width:860px; margin:0 auto; background:#fff; border:1px solid #e8e0d5; border-radius:10px; padding:24px 32px; }}
  .report-body h1 {{ font-size:22px; font-weight:700; color:#8b2635; margin-bottom:16px; padding-bottom:10px; border-bottom:2px solid #8b2635; }}
  .report-body h2 {{ font-size:16px; font-weight:700; color:#1a1a1a; margin:20px 0 10px; }}
  .report-body h3 {{ font-size:14px; font-weight:600; color:#333; margin:14px 0 8px; }}
  .report-body p {{ font-size:13px; color:#555; line-height:1.7; margin-bottom:8px; }}
  .report-body table {{ width:100%;border-collapse:collapse;font-size:12px;margin:10px 0; }}
  .report-body th {{ text-align:left;background:#f5f3ef;padding:6px 10px;border:1px solid #e8e0d5;font-size:11px;color:#666; }}
  .report-body td {{ padding:6px 10px;border:1px solid #e8e0d5;color:#555;font-size:12px; }}
  .report-body ul,.report-body ol {{ margin:8px 0 8px 20px;font-size:13px;color:#555; }}
  .report-body li {{ margin-bottom:4px; }}
  .report-body strong {{ color:#1a1a1a;font-weight:600; }}
</style>
</head>
<body>
<div class="report-body">
${content}
</div>
</body>
</html>`}
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        )}
      </div>
    </div>
  )
}
