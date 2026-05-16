# Luiz Mamprim — Plataforma Jurídica

Monorepo do site institucional + SaaS de gestão jurídica do escritório Dr. Luiz Henrique Mamprim e demais advogados.

## Estrutura

```
.
├── src/                      # Site institucional atual (drluizmamprin.adv.br)
├── apps/
│   └── saas/                 # SaaS multi-tenant (app.drluizmamprin.adv.br)
├── worker/                   # Worker Python: scraping e-SAJ + engine de prazos
├── supabase/
│   ├── migrations/           # Schema + RLS + pgsodium
│   └── functions/            # Edge Functions (Deno): llm-proxy, analyze-pdf
└── deploy/                   # Dockerfiles + docker-compose + Coolify guide
```

## Componentes

| Componente | Stack | Onde roda |
|---|---|---|
| Site institucional | React 19 + Vite + Tailwind | `drluizmamprin.adv.br` (Vercel ou Coolify) |
| SaaS frontend | React 19 + Vite + Tailwind + shadcn/ui | `app.drluizmamprin.adv.br` (Coolify) |
| Worker scraper | Python 3.12 + Selenium + APScheduler | Coolify (container persistente) |
| Banco/Auth/Storage | Supabase (Postgres + RLS) | Cloud ou self-hosted (Coolify) |
| LLM proxy | Supabase Edge Functions (Deno) | Supabase |

## Quick start (dev local)

```bash
# 1. Site institucional
npm install && npm run dev          # http://localhost:3000

# 2. SaaS
cd apps/saas
cp .env.example .env.local
npm install && npm run dev          # http://localhost:5173

# 3. Supabase local (precisa do Supabase CLI)
supabase start
supabase db reset                   # aplica migrations

# 4. Worker
cd worker
python -m venv .venv && source .venv/bin/activate    # Linux/Mac
# ou: .venv\Scripts\activate                          # Windows
pip install -r requirements.txt
cp .env.example .env
python -m worker.main

# 5. Tudo em Docker (produção-like)
docker compose -f deploy/docker-compose.yml up -d
```

## Decisões arquiteturais chave

- **Multi-tenant** com Postgres RLS (cada advogado é um tenant isolado)
- **Prazos calculados em Python** (lib `workalendar` + regras CPC), nunca por LLM
- **LLM BYOK**: cada advogado pluga sua própria chave (OpenAI / Anthropic / Gemini / DeepSeek), proxy via Edge Function
- **Scraper** roda em cron diário 03:00 + sob demanda via tabela `scraping_jobs`
- **e-SAJ 2FA** resolvido lendo OTP do Gmail via OAuth do advogado

Veja o plano completo em `C:\Users\Usuario\.claude\plans\boa-tarde-chat-quero-replicated-lampson.md`.
