# Como subir um projeto no GitHub

1. criar um repositório no GitHub 

2. copiar o link https que ele fornece do repositório

3. **git init** - cria uma pasta oculta lá no projeto chamada .git 

4. **git config user.name** - mostra qual o nome de usuário que está na máquina, se não estiver com o nome certo, bas digitar "git config user.name nomeNovo";

5. **git config --global user.email teste@gmail.com** - insere o email da sua conta do github e depois para confirmar basta apenas digitar "git config --global user.email"

6. criar um arquivo chamado .gitignore. Lá vai ser decidido o que não vai ser subido do projeto

7. **git add .**- sobe os arquivos para um stage branch_master
Stage - um passo antes de comitar
O ponto significa que ele vai subir todos os arquivos que não estão adicionados

8. **git commit -m "Mensagem"** - manda para nosso repositório local

9. **git remote add origin linkDoPasso2** - adiciona um repositório remoto la na web

10. **git push origin master** - indica que vai subir para o repositório o que está na branch_master