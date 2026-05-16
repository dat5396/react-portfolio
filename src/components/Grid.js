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
  showButton = true,
  backgroundColor,        // ← new prop
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
      style={backgroundColor ? { '--bento-bg': backgroundColor } : undefined}  // ← apply it
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