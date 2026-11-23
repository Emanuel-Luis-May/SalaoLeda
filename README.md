# Centro de Beleza Leda May — Landing Page

Landing page estática (HTML + CSS + JS puro) do **Centro de Beleza Leda May**.
Objetivo principal: levar a visitante a **agendar pelo WhatsApp**.

## Dados do salão
- Endereço: Av. Brasil, 1400 — Ipê Med — PR
- Telefone: (45) 3189-0748
- WhatsApp: (45) 9991-1991 — https://wa.me/554599911991
- Instagram: https://www.instagram.com/leda_may/

## Serviços
Escova e cortes · Mechas · Botox e Progressiva · Penteados · Limpeza de pele ·
Sobrancelha · Unhas · Maquiagem

## Rodar localmente
```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

## Estrutura
```
index.html                 home (landing page)
cabelo/ estetica/ unhas/ maquiagem/   uma página por categoria de serviço (index.html)
robots.txt · sitemap.xml · site.webmanifest
css/style.css
js/main.js
assets/img/
```

## Pendências (enviar pelo salão)
- [ ] Fotos reais (fachada, ambiente, trabalhos, Leda) — a galeria usa fotos de exemplo do Unsplash; hero e "Sobre" ainda são ilustrações
- [ ] Logotipo (se houver)
- [ ] Horário de funcionamento
- [x] Cidade confirmada: Medianeira – PR · domínio: https://ledamay.com
- [ ] Texto da seção "Sobre"

## SEO
Veja [SEO.md](SEO.md): o que já está implementado e o passo a passo pós-publicação (Google Meu Negócio, Search Console etc.).

## Deploy
Qualquer hospedagem estática: Netlify, Vercel ou GitHub Pages — basta publicar a pasta raiz.

## Créditos das fotos de exemplo (galeria)
Fotos de [Unsplash](https://unsplash.com/license), licença livre (uso comercial, sem atribuição obrigatória).
São **apenas exemplos** — trocar por fotos reais dos trabalhos do salão antes de publicar.

| Arquivo | Foto |
|---|---|
| `galeria-1.webp` (Mechas) | https://unsplash.com/photos/D_1tyuWWbeY — Kimia Zarifi |
| `galeria-2.webp` (Unhas) | https://unsplash.com/photos/fa1nAnK8xpA |
| `galeria-3.webp` (Makes) | https://unsplash.com/photos/2rEFgXcAZLA |
| `galeria-4.webp` (Limpeza de pele) | https://unsplash.com/photos/Pe9IXUuC6QU — Rosa Rafael |
| `galeria-5.webp` (Penteados) | https://unsplash.com/photos/yMOnT7VUowA — Guillaume DHALLUIN |
| `galeria-6.webp` (Sobrancelha) | https://unsplash.com/photos/nt6KRD9im7A — Linh Ha |
