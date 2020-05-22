# Recuperação de Senha

**RF**
- O usuário deve recuperar sua senha informando o seu e-mail;
- O usuário deve receber um email com instruções de recuperação de senha;
- O usário deve poder resetar sua senha;

**RNF**

-Utilizar Miltrap para testar envios em ambiente de dev;
-utilizar Amazon SES para envios de email em produção;
-O envio de email deve acontecer em segundo plano;

**RN**
- O link enviado por email para resetar a senha ao resetar sua senha;

# Atualização do perfil

**Requisitos Funcionais**
- O usuário deve poder atualizar seu  nome, email e senha;

**R Não Funcio**

**Regra de Negócio**
- O usuário não pode alterar seu email para um email já utilizado;
- Para atualizar sua senha, o usuário deve informar a senha antiga;
- Para atualizar dua senha, o usuário precisa confirmar a nova senha;

# Painel do Prestador
**RF**
- Usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre que houver uma notificação;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**
- Os agendamentos do prestador no dia devem ser armazenados em cache;
- As notificações do prestador devem ser armazenadas no MongoDB;
- As notificações do prestador devem ser enviadas em tempo-real utilizando Socket.io;

**RN**
- A notificação deve ter um status de lida e não lida para o prestador controlar

# Agendamento de serviços

**RF**
- O usuário deve poder listar todos os prestadores cadastrados;
- O usuário deve poder listar os dias de um mês com pelo menos um hiorário disponível de um prestador;
- O usuário deve poder listar horários disponíves em um dia específico de um prestador;
- O usuário deve poder realizar um novo agendamento com um prestador;

**RNF**
- A listagem de prestadores deve ser armazenada em cache;

**RN**
- Cada agendamento deve durar 1h exatamente;
- Os agendamentos devem estar disponíveis entre 8 até 18h (primeiro 8, último às 17)
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode agendar em um horário que ja passou;
- O usuário não pode agendar serviços consigo mesmo;
