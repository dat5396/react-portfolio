// BentoGrid.jsx
// A reusable bento-box grid layout component for React portfolios.
//
// Usage:
//   import BentoGrid, { BentoRow, BentoCell } from './BentoGrid';
//
// Row types:
//   type="halves"   → 2 equal columns        (Type 1)
//   type="thirds"   → 3 equal columns        (Type 2)
//   type="full"     → 1 full-width rectangle (Type 3)
//
// BentoCell props:
//   span={1|2}     only inside type="thirds" rows
//   label          text shown inside the GlassButton on hover  (default "View Project")
//   buttonVariant  any GlassButton variant                     (default "dark")
//   onView         click handler for the GlassButton

import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import './Grid.css';

// ─── Root grid wrapper ────────────────────────────────────────────────────────
export function BentoGrid({ children, className = '', ...props }) {
  return (
    <div className={`bento-grid ${className}`} {...props}>
      {children}
    </div>
  );
}

// ─── Horizontal row ───────────────────────────────────────────────────────────
export function BentoRow({ type = 'halves', children, className = '', ...props }) {
  return (
    <div className={`bento-row bento-row--${type} ${className}`} {...props}>
      {children}
    </div>
  );
}

// ─── Individual cell ──────────────────────────────────────────────────────────
export function BentoCell({
  span = 1,
  hoverable = false,
  interactive = false,
  zoomOnHover = true,
  href,
  label = '',
  onView,
  showButton = true,       // ← add this
  children,
  className = '',
  ...props
}) {
  return (
    <div
      className={`
        bento-cell bento-cell--span-${span}
        ${hoverable ? 'bento-cell--hoverable' : ''}
        ${hoverable && !zoomOnHover ? 'bento-cell--no-zoom' : ''}
        ${className}
      `}
      {...props}
    >
      <div className="bento-cell__inner">{children}</div>

      {hoverable && showButton && (
        <div className="bento-cell__overlay">
          <Button variant="secondary" onClick={(e) => { e.stopPropagation(); onView?.(); }}>
            {label}
          </Button>
        </div>
      )}

      {hoverable && href && !interactive && (
        <Link to={href} className="bento-cell__link" aria-label={label} />
      )}
    </div>
  );
}

export default BentoGrid;