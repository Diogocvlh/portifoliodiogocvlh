const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold gradient-text">DC</span>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Diogo Carvalho. Todos os direitos reservados.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/diloco06"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/dev.diogocvlh/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Instagram
            </a>
            <a
              href="mailto:diogocarvalho12129@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
