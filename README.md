# Flor de Lis · Blumenau

Site da Floricultura Flor de Lis, adaptado da demo `lezkwq/demofloricultura`.

## Desenvolvimento

Node.js 22+ e pnpm (lockfile incluído):

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
pnpm test
```

O projeto mantém React, TanStack Start e Tailwind da demo. A configuração existente gera a versão de produção em `.output/` com Nitro para Cloudflare.

## Conteúdo

- Identidade roxa, logotipo original e favicon com o símbolo da marca.
- Fotos reais fornecidas pelo usuário, recortadas e comprimidas em PNG, importadas de `src/assets/`.
- Catálogo de rosas interativo: 1 a 6 unidades, de R$ 22,00 a R$ 132,00, conforme a tabela fornecida. Os exemplos foram extraídos das artes enviadas; acessórios e apresentação devem ser confirmados com a loja.
- Pedidos e consultas pelo WhatsApp: +55 47 99106-5803.
- Endereço: Rua Franz Volles, 1190, Itoupava Central, Blumenau, SC, CEP 89066-101.
- Horário regular transcrito do perfil enviado: segunda a sexta, 08h–12h e 13h30–18h30; sábado, 08h–12h. Artes sazonais de feriados não foram tratadas como horário regular.
- Uma avaliação fornecida: Pedro Machado, “Excelente atendimento!”, nota 5,0 no Google.

Valores, disponibilidade e possibilidade de entrega são confirmados com a loja pelo WhatsApp. Não há checkout ou confirmação automática de pedido.

## Validação

`pnpm build`, `tsc --noEmit` e três testes (rota inicial, seleção de rosas e composição da mensagem do pedido).

O único remoto Git deve apontar para `https://github.com/lezkwq/flordelisblumenau.git`.
