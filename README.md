<h2>CodeLeap Network</h2>
<br />
<h3>🎯 Objetivo</h3>
Desenvolvimento de uma rede social dinâmica integrada à API da CodeLeap. O projeto foca em gerenciamento de estado complexo, persistência de dados local e otimização de performance através de carregamento sob demanda (Infinite Scroll).
<br />
<br />
<h3>🛠️ Tech Stack & Decisões Técnicas</h3>
<ul>
  <li>React.js + Vite: Escolhidos pela agilidade no desenvolvimento e performance de bundle.</li>
  <li>Context API: Utilizada para centralizar o estado de autenticação e garantir que o fluxo de login/logout fosse consistente em toda a aplicação sem prop drilling.</li>
  <li>Infinite Scroll (Custom Implementation): Implementado para otimizar o consumo da API, carregando dados em lotes (5 em 5) e melhorando a retenção do usuário.</li>
  <li>Date-fns: Escolhida para garantir que o tempo de postagem fosse exibido de forma humana e relativa, aumentando o aspecto de "tempo real" do feed.</li>
  <li>LocalStorage Sync: Implementado para persistir o sistema de curtidas e a sessão do usuário, garantindo que os dados não sejam perdidos ao recarregar a página.</li>
</ul>
<br />
<h3>✨ Funcionalidades:</h3>
<ul>
  <li>📄 Fluxo CRUD Completo: Interface reativa para criação, edição e exclusão de posts com feedback visual imediato.</li>
  <li>🌐 Listagem de posts consumindo a API REST da CodeLeap</li>
  <li>🔄 Infinite Scroll para os posts carregando de 5 em 5</li>
  <li>👍 Sistema de curtidas para cada post (Like)</li>
  <li>🔑 Segurança de Interface: Rotas protegidas e modais de confirmação para ações críticas (como deletar posts).</li>
</ul>
<br />
<h3>🚀 Como rodar:</h3>
<pre><code>
# Instale as dependências
npm install
# Inicie o servidor de desenvolvimento
npm run dev
</code></pre>
<br />
✒️ Autores
Vitor Martins Ramires - Desenvolvedor principal
