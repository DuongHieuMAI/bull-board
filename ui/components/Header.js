import React from 'react'
import useScrolled from './hooks/useScrolled'

export default function Header() {
  const scrolled = useScrolled()

  return (
    <nav
      id="header"
      style={{ boxShadow: scrolled ? '0 3px 3px rgba(0,0,0,0.1)' : 'none' }}
    >
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
        <span>🎯 Bull Dashboard</span>
        <a class="btn-style" style={{ backgroundColor: '#bdbdbd', color: 'inherit', lineHeight: 'initial' }} href="javascript:history.back()">Back</a>
      </div>
    </nav>
  )
}
