import { Download, Languages } from "lucide-react";

export function Header({ navItems, currentLanguage, nextLanguage, onToggleLanguage }) {
  return (
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Home">
        <span>ES</span>
      </a>

      <nav className="topnav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <div className="toolbar">
        <button
          type="button"
          className="lang-toggle"
          onClick={onToggleLanguage}
          aria-label={`Switch to ${nextLanguage}`}
        >
          <Languages size={16} />
          <span>{currentLanguage}</span>
        </button>
        <a className="download-link" href="/Elmehdi_Sadki_CV-final.docx" download>
          <Download size={16} />
          <span>CV</span>
        </a>
      </div>
    </header>
  );
}
