# Next Shop 🛒

Next Shop é uma aplicação e-commerce desenvolvida com **Next.js, TypeScript e Stitches**, focada em performance e experiência do usuário. O projeto conta com **integração com Stripe** para pagamentos, consumo de **APIs externas**, gerenciamento de estado eficiente e um design responsivo seguindo o conceito **Mobile First**.

## 🚀 Tecnologias Utilizadas

- **Next.js** – Framework React para renderização otimizada.
- **TypeScript** – Tipagem estática para maior segurança e escalabilidade.
- **Stitches** – Solução de estilização para performance e flexibilidade.
- **Stripe** – Integração para pagamentos seguros.
- **React Toastify** – Exibição de notificações para melhor experiência do usuário.
- **Axios** – Consumo eficiente de APIs.

## 📦 Instalação e Execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/Murillou/next-shop.git
   ```
2. Acesse o diretório do projeto:
   ```bash
   cd next-shop
   ```
3. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn install
   ```
4. Configure as variáveis de ambiente:
   - Copie o arquivo de exemplo e edite com suas credenciais:
     ```bash
     cp .env.example .env.local
     ```
   - Exemplo do arquivo `.env.example`:
     ```
     STRIPE_PUBLIC_KEY=your_public_key_here
     STRIPE_SECRET_KEY=your_secret_key_here
     ```
5. Execute o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   ```
6. Acesse **http://localhost:3000** no navegador.

## 📷 Demonstração

O projeto pode ser acessado online em: [next-shop.murillou.dev](https://next-shop.murillou.dev)

Se você deseja testar os pagamentos na versão hospedada do projeto, você pode usar um **cartão de crédito de teste** fornecido pelo Stripe. Para realizar uma compra, utilize os seguintes dados de teste:

- **Número do cartão:** `4242 4242 4242 4242`
- **Data de vencimento:** Qualquer data futura (por exemplo, `12/25`)
- **Código de segurança (CVV):** Qualquer número de 3 dígitos (por exemplo, `123`)

Esses dados simulam um pagamento bem-sucedido e não irão realizar cobranças reais. Isso permite testar a funcionalidade de pagamento sem utilizar um cartão real.

O pagamento será processado normalmente, mas não haverá transação financeira real.

## 🛠️ Funcionalidades

- 🛍️ Listagem de produtos com detalhes.
- 💳 Pagamentos integrados via Stripe.
- 🛒 Carrinho de compras dinâmico.
- 📱 Layout responsivo e otimizado para mobile.
- 🔥 Notificações para feedback instantâneo.

Desenvolvido com 💙 por [Murillo Vinícius](https://github.com/Murillou)
