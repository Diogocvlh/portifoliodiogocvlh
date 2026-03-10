import TerminalSimulator from "@/components/TerminalSimulator";
import SectionDivider from "@/components/SectionDivider";
import FileEntry from "@/components/FileEntry";

const Index = () => {
  const rodarTudoOutput = [
    "[OK] Conectando ao Google via service_account...",
    "[OK] Planilha localizada: Preço teste TRRs 03/26",
    "     Verificando aba do dia: Preço 10-03...",
    "[OK] Aba não encontrada. Duplicando aba base.",
    "     Atualizando cabeçalhos FOB - ...",
    "[OK] Coluna 'ontem' atualizada com valores de 'hoje'.",
    "[OK] Coluna 'hoje' limpa (fórmulas preservadas).",
    "[!]  Coluna 'Dif.' intacta.",
    "[OK] Validações de dados removidas do intervalo.",
    "[OK] Aba Preço 10-03 criada com sucesso.",
    "",
    "[OK] Iniciando vibra.py...",
    "     Processando base GOIÂNIA...",
    "[OK] Login automático realizado.",
    "[OK] S10: R$ 4,2390 → gravado em E13",
    "[OK] S500: R$ 4,1850 → gravado em I13",
    "[OK] Coleta Vibra finalizada.",
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* === HEADER === */}
        <header className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-heading font-bold text-foreground tracking-tight">
            Automação de Preços (TRRs)
          </h1>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Projeto em Python para automação de planilhas de preços com integração
            em Google Sheets e coleta via Selenium nos portais de fornecedores.
          </p>
          <div className="mt-6 flex gap-6 text-xs text-muted-foreground">
            <span>Python 3.10+</span>
            <span className="text-muted-foreground/30">|</span>
            <span>Selenium</span>
            <span className="text-muted-foreground/30">|</span>
            <span>Google Sheets API</span>
          </div>
        </header>

        <SectionDivider />

        {/* === VISÃO GERAL === */}
        <section>
          <h2 className="text-lg font-heading font-semibold text-foreground mb-6">
            Visão geral
          </h2>
          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
            Este repositório possui três fluxos principais, executados em sequência
            para atualizar preços diários de combustíveis em planilhas compartilhadas.
          </p>

          <div className="space-y-6">
            <FlowBlock
              number="01"
              title="Preparar aba do dia"
              file="rodar_tudo.py"
              items={[
                "Localiza a planilha do mês pelo padrão de nome.",
                "Duplica aba base anterior e atualiza cabeçalhos de data.",
                "Move valores de 'hoje' para 'ontem' com regras seguras.",
                "Ao finalizar, dispara automaticamente o vibra.py.",
              ]}
            />
            <FlowBlock
              number="02"
              title="Coleta da Vibra"
              file="vibra.py"
              items={[
                "Login automático por base na Vibra.",
                "Captura preços de S10 e S500.",
                "Grava diretamente em células específicas da planilha.",
              ]}
            />
            <FlowBlock
              number="03"
              title="Coleta da Ipiranga"
              file="ipiranga.py"
              items={[
                "Abre portal Ipiranga com login manual.",
                "Seleciona CNPJ/base de teste.",
                "Captura preços S10, S500 e Gasolina.",
                "Grava na linha da companhia dentro do bloco alvo.",
              ]}
            />
          </div>
        </section>

        <SectionDivider />

        {/* === ESTRUTURA === */}
        <section>
          <h2 className="text-lg font-heading font-semibold text-foreground mb-6">
            Estrutura do projeto
          </h2>
          <div className="space-y-0">
            <FileEntry name="rodar_tudo.py" description="Preparação da aba diária na planilha do mês." variant="executable" />
            <FileEntry name="vibra.py" description="Robô Selenium para Vibra + escrita em planilha por célula." variant="executable" />
            <FileEntry name="ipiranga.py" description="Robô Selenium para Ipiranga + escrita por bloco/coluna dinâmica." variant="executable" />
            <FileEntry name="dados-google.json" description="Credencial de conta de serviço do Google." variant="sensitive" />
            <FileEntry name=".env" description="Variáveis locais sensíveis." variant="sensitive" />
          </div>
        </section>

        <SectionDivider />

        {/* === COMO EXECUTAR === */}
        <section>
          <h2 className="text-lg font-heading font-semibold text-foreground mb-6">
            Como executar
          </h2>

          <h3 className="text-sm font-heading text-foreground mb-2">
            1) Preparar aba diária + iniciar Vibra
          </h3>

          <TerminalSimulator
            command="python rodar_tudo.py"
            outputLines={rodarTudoOutput}
          />

          <h3 className="text-sm font-heading text-foreground mt-10 mb-2">
            2) Coletar Vibra (isolado)
          </h3>
          <div className="bg-muted border border-muted-foreground/20 p-4 my-4">
            <div className="flex items-center">
              <span className="text-primary mr-2 font-heading text-sm">&gt;</span>
              <span className="text-primary font-heading text-sm">python vibra.py</span>
            </div>
            <p className="text-xs text-muted-foreground mt-3 pl-6">
              Executa somente a coleta Vibra, sem preparar nova aba.
            </p>
          </div>

          <h3 className="text-sm font-heading text-foreground mt-10 mb-2">
            3) Coletar Ipiranga (teste)
          </h3>
          <div className="bg-muted border border-muted-foreground/20 p-4 my-4">
            <div className="flex items-center">
              <span className="text-primary mr-2 font-heading text-sm">&gt;</span>
              <span className="text-primary font-heading text-sm">python ipiranga.py</span>
            </div>
            <p className="text-xs text-muted-foreground mt-3 pl-6">
              Preenche preços Ipiranga no bloco alvo com login manual.
            </p>
          </div>
        </section>

        <SectionDivider />

        {/* === CONFIGURAÇÃO === */}
        <section>
          <h2 className="text-lg font-heading font-semibold text-foreground mb-6">
            Configuração
          </h2>

          <div className="space-y-6">
            <ConfigBlock
              title="Requisitos"
              items={[
                "Python 3.10+ (compatível com 3.14)",
                "Google Chrome instalado",
                "Permissão para abrir navegador com Selenium",
                "Conta de serviço no Google Cloud com chave JSON válida",
              ]}
            />

            <h3 className="text-sm font-heading text-secondary mb-3">
              Dependências Python
            </h3>
            <div className="bg-muted border border-muted-foreground/20 p-4">
              <div className="text-xs font-body text-muted-foreground space-y-1">
                <p><span className="text-primary">&gt;</span> python -m venv .venv</p>
                <p><span className="text-primary">&gt;</span> .venv\Scripts\activate</p>
                <p><span className="text-primary">&gt;</span> pip install gspread google-auth selenium webdriver-manager oauth2client</p>
              </div>
            </div>

            <h3 className="text-sm font-heading text-secondary mt-8 mb-3">
              Google Cloud / Google Sheets
            </h3>
            <div className="text-xs text-muted-foreground space-y-2 leading-relaxed">
              <p>1. Crie uma Conta de serviço no Google Cloud.</p>
              <p>2. Gere uma chave JSON e salve como <span className="text-secondary">dados-google.json</span>.</p>
              <p>3. Ative Google Sheets API e Google Drive API.</p>
              <p>4. Compartilhe a planilha com o e-mail da conta de serviço.</p>
            </div>

            <h3 className="text-sm font-heading text-secondary mt-8 mb-3">
              Checklist da credencial
            </h3>
            <div className="bg-muted border border-muted-foreground/20 p-4 text-xs text-muted-foreground space-y-1">
              <p>type = <span className="text-foreground">service_account</span></p>
              <p>client_email = <span className="text-foreground">correto</span></p>
              <p>private_key = <span className="text-foreground">-----BEGIN PRIVATE KEY-----</span></p>
              <p>chave = <span className="text-foreground">não revogada</span></p>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* === SEGURANÇA === */}
        <section>
          <h2 className="text-lg font-heading font-semibold text-secondary mb-6">
            Segurança
          </h2>
          <p className="text-xs text-muted-foreground mb-6 leading-relaxed">
            Este projeto contém dados sensíveis por natureza (credenciais de portal e chave privada Google).
          </p>

          <div className="space-y-3 text-xs text-muted-foreground">
            <p className="text-secondary">Boas práticas obrigatórias:</p>
            <ul className="space-y-2 pl-4">
              <li>Nunca versionar <span className="text-secondary">dados-google.json</span> em repositórios públicos.</li>
              <li>Não manter usuário/senha hardcoded no código.</li>
              <li>Mover segredos para variáveis de ambiente (<span className="text-secondary">.env</span>) e usar carregamento seguro.</li>
              <li>Rotacionar chaves e senhas periodicamente.</li>
              <li>Restringir permissões da conta de serviço ao mínimo necessário.</li>
            </ul>
          </div>

          <h3 className="text-sm font-heading text-secondary mt-8 mb-3">
            .gitignore sugerido
          </h3>
          <div className="bg-muted border border-muted-foreground/20 p-4 text-xs font-body text-muted-foreground space-y-1">
            <p className="text-muted-foreground/50"># Segredos</p>
            <p><span className="text-secondary">.env</span></p>
            <p><span className="text-secondary">dados-google.json</span></p>
            <p className="mt-2 text-muted-foreground/50"># Ambiente Python</p>
            <p>.venv/</p>
            <p>__pycache__/</p>
            <p>*.pyc</p>
          </div>
        </section>

        <SectionDivider />

        {/* === ERROS COMUNS === */}
        <section>
          <h2 className="text-lg font-heading font-semibold text-foreground mb-6">
            Erros comuns
          </h2>
          <div className="space-y-6">
            <ErrorBlock
              code="invalid_grant: Invalid JWT Signature"
              cause="Credencial inválida/incompatível, chave revogada ou relógio fora de sincronia."
              fix="Gerar nova chave JSON, substituir dados-google.json, sincronizar data/hora."
            />
            <ErrorBlock
              code="SpreadsheetNotFound"
              cause="Conta de serviço sem acesso ou nome da planilha incorreto."
              fix="Compartilhar planilha com o e-mail da conta de serviço."
            />
            <ErrorBlock
              code="WorksheetNotFound"
              cause="Aba do dia ainda não existe."
              fix="Rodar rodar_tudo.py antes dos coletores."
            />
            <ErrorBlock
              code="Selenium não encontra elemento"
              cause="Mudança de layout, pop-up, timeout curto ou sessão não autenticada."
              fix="Revalidar seletores, aumentar timeout, tratar pop-ups."
            />
          </div>
        </section>

        <SectionDivider />

        {/* === MELHORIAS === */}
        <section>
          <h2 className="text-lg font-heading font-semibold text-foreground mb-6">
            Próximos passos
          </h2>
          <div className="space-y-2 text-xs text-muted-foreground">
            <p>Padronizar autenticação Google (usar google-auth em todos scripts).</p>
            <p>Centralizar configuração em config.py + <span className="text-secondary">.env</span>.</p>
            <p>Criar requirements.txt com versões fixas.</p>
            <p>Implementar logs estruturados em arquivo.</p>
            <p>Adicionar modo de teste (sem escrita em planilha).</p>
            <p>Implementar abertura por ID da planilha para evitar falhas por nome.</p>
          </div>
        </section>

        <SectionDivider />

        {/* === FOOTER === */}
        <footer className="py-8 text-xs text-muted-foreground">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="text-foreground font-heading">Diogo Carvalho</span>
              <span className="mx-2 text-muted-foreground/30">|</span>
              <span>Dev Python</span>
            </div>
            <div className="flex gap-6">
              <a
                href="mailto:diogocarvalho12129@gmail.com"
                className="text-primary hover:text-primary/80 transition-colors font-heading"
              >
                diogocarvalho12129@gmail.com
              </a>
              <a
                href="https://github.com/diloco06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors font-heading"
              >
                github.com/diloco06
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

/* === SUB-COMPONENTS === */

const FlowBlock = ({
  number,
  title,
  file,
  items,
}: {
  number: string;
  title: string;
  file: string;
  items: string[];
}) => (
  <div className="border-l-2 border-primary/30 pl-6 py-2">
    <div className="flex items-baseline gap-3 mb-3">
      <span className="text-muted-foreground/40 text-xs font-heading">{number}</span>
      <h3 className="text-sm font-heading text-foreground">{title}</h3>
      <span className="text-primary text-xs font-heading ml-auto">{file}</span>
    </div>
    <ul className="space-y-1">
      {items.map((item, idx) => (
        <li key={idx} className="text-xs text-muted-foreground leading-relaxed">
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const ConfigBlock = ({
  title,
  items,
}: {
  title: string;
  items: string[];
}) => (
  <div>
    <h3 className="text-sm font-heading text-foreground mb-3">{title}</h3>
    <ul className="space-y-1">
      {items.map((item, idx) => (
        <li key={idx} className="text-xs text-muted-foreground">{item}</li>
      ))}
    </ul>
  </div>
);

const ErrorBlock = ({
  code,
  cause,
  fix,
}: {
  code: string;
  cause: string;
  fix: string;
}) => (
  <div className="border-l-2 border-secondary/40 pl-6 py-2">
    <p className="text-sm font-heading text-secondary mb-2">{code}</p>
    <p className="text-xs text-muted-foreground">
      <span className="text-muted-foreground/60">Causa: </span>{cause}
    </p>
    <p className="text-xs text-muted-foreground mt-1">
      <span className="text-muted-foreground/60">Correção: </span>{fix}
    </p>
  </div>
);

export default Index;
