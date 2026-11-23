# SEO — Centro de Beleza Leda May

Objetivo: aparecer quando alguém em Medianeira pesquisa **"salão de beleza em Medianeira"**, **"progressiva Medianeira"**, **"manicure perto de mim"** etc.

## O que já está no site

| Item | Onde |
|---|---|
| Título e descrição com "Salão de beleza em Medianeira – PR" | `<head>` do `index.html` |
| H1 com a cidade, textos citando Medianeira | hero, serviços, sobre |
| URL canônica `https://ledamay.com/` | `<link rel="canonical">` |
| Dados estruturados: `BeautySalon` (endereço, contatos, serviços), `WebSite`, `FAQPage` | bloco `application/ld+json` |
| Seção de Perguntas frequentes | `#duvidas` |
| Imagem de compartilhamento (WhatsApp/Facebook) 1200×630 | `assets/img/og-cover.jpg` |
| `robots.txt`, `sitemap.xml`, `site.webmanifest`, ícones | raiz do projeto |
| Imagens com `alt`, `width/height`, `loading="lazy"`, WebP | galeria |
| **Páginas por serviço** com title, description, H1, canonical, imagem de compartilhamento e FAQ próprios: `/cabelo/`, `/estetica/`, `/unhas/`, `/maquiagem/` | pastas na raiz (`<pasta>/index.html`) |
| Dados estruturados nas páginas de serviço: `Service` (um por serviço), `BreadcrumbList`, `WebPage`, `FAQPage` | `<head>` de cada página |
| Links internos: cards da home, FAQ da home, rodapé e "Outros serviços" ligam as páginas entre si | todas as páginas |

## Passo a passo depois de publicar (em ordem de impacto)

### 1. Google Meu Negócio (Perfil da Empresa no Google) — o mais importante
É ele que faz o salão aparecer no **mapa** e no bloco de "salões perto de você".
1. Acesse https://business.google.com e crie/reivindique o perfil "Centro de Beleza Leda May".
2. Categoria principal: **Salão de beleza**. Secundárias: Manicure, Maquiador, Clínica de estética, Designer de sobrancelhas.
3. Endereço **exatamente igual** ao do site: `Av. Brasil, 1400 - Ipê Med, Medianeira - PR`.
4. Telefone, WhatsApp, horário de funcionamento e site `https://ledamay.com`.
5. Adicione **fotos reais** (fachada, ambiente, trabalhos) — perfis com fotos recebem muito mais cliques.
6. Cadastre os serviços (mesmos nomes do site).
7. **Peça avaliações** às clientes satisfeitas (mande o link de avaliação pelo WhatsApp depois do atendimento). Responda todas.
8. Publique novidades/promoções de vez em quando (pode reaproveitar posts do Instagram).

### 2. Google Search Console
1. https://search.google.com/search-console → adicionar propriedade `ledamay.com` (verificação por DNS no registrador do domínio).
2. Em **Sitemaps**, envie `https://ledamay.com/sitemap.xml`.
3. Em **Inspeção de URL**, cole `https://ledamay.com/` e clique em "Solicitar indexação". Repita para `/cabelo/`, `/estetica/`, `/unhas/` e `/maquiagem/`.
4. Volte em 1–2 semanas para ver por quais buscas o site aparece.

### 3. Bing Webmaster Tools (também alimenta o ChatGPT/Copilot)
https://www.bing.com/webmasters → "Importar do Google Search Console".

### 4. Instagram e WhatsApp
- Coloque `ledamay.com` no **link da bio** do @leda_may (pode manter o WhatsApp como segundo link).
- No WhatsApp Business, preencha endereço, horário e site.

### 5. Consistência do nome, endereço e telefone (NAP)
Use **sempre o mesmo** nome, endereço e telefone em: Google, Instagram, Facebook, WhatsApp Business, Apple Maps (https://businessconnect.apple.com), Waze e guias locais de Medianeira.

## Pendências no site que melhoram o SEO

- [ ] **Fotos reais** no hero, sobre e galeria (as atuais são ilustrações / fotos de exemplo do Unsplash). Nomeie os arquivos com palavras-chave, ex.: `mechas-loiras-medianeira.webp`.
- [ ] **Horário de funcionamento**: quando tiver, adicionar `openingHoursSpecification` no JSON-LD e na seção de contato.
- [ ] **Coordenadas** (latitude/longitude) do salão no JSON-LD (`geo`) — pegar no Google Maps clicando com o botão direito no local.
- [ ] Atualizar `<lastmod>` do `sitemap.xml` sempre que o site mudar.
- [ ] **Revisar os textos das páginas de serviço** com o salão (há um `TODO salão` em cada uma). Se fizer outros serviços (ex.: unha em gel, alongamento, noiva com teste de make), acrescentar na página da categoria.
- [ ] Nova página de serviço: copiar uma das pastas, trocar title/description/canonical/og, H1, textos e JSON-LD, gerar `og-<servico>.jpg` (1200×630), linkar na home e no rodapé, e incluir no `sitemap.xml`.
- [ ] Se o domínio usar `www.`, configurar redirecionamento 301 de `www.ledamay.com` → `ledamay.com` (ou o contrário) na hospedagem.
- [ ] Garantir **HTTPS** ativo (Netlify/Vercel/GitHub Pages fazem automático).

## Como conferir

- Dados estruturados: https://search.google.com/test/rich-results e https://validator.schema.org (colar `https://ledamay.com`).
- Prévia do WhatsApp/Facebook: https://developers.facebook.com/tools/debug/
- Velocidade e SEO técnico: https://pagespeed.web.dev
- Busca: pesquisar `site:ledamay.com` no Google (aparece só depois de indexado).

> Observação: desde 2023 o Google só mostra FAQ como resultado expandido para sites de governo/saúde. O `FAQPage` continua útil porque ajuda buscadores e assistentes de IA a entender o conteúdo, mas não espere ver as perguntas abertas no resultado do Google.
