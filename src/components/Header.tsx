interface HeaderProps {
  children: React.ReactNode
}

export function Header({ children }: HeaderProps) {
  return (
    <header>
      <span className="category">Categoria:<span> {children}</span></span>
    </header>
  )
}