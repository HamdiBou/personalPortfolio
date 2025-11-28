function SectionHeader({ eyebrow, title, description, align = 'center' }) {
  return (
    <div className={`section-header align-${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p className="section-lead">{description}</p>}
    </div>
  );
}

export default SectionHeader;
