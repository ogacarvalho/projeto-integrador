# PI - 5º Semestre

## Participantes do grupo:

Eriberto Simão da Silva

Rolf Santana Sokolonski

Luís Marcelo Bartz de Ávila 

Caroleen Ahmad Fadel


LANDING PAGE:
https://ogacarvalho.github.io/projeto-integrador/

INSTALAÇÃO:
https://github.com/user-attachments/assets/af290415-f094-4905-a541-8bb8f3f1edcb




REQUISITOS:
→ node 20.18.0
→ npm  10.8.2
→ sqlite3 3.45.1
→ npm install bcryptjs

EXECUÇÃO:
→ node server.js


ROTAS:

1. Criar Produto:
→ POST http://localhost:3000/api/produtos

BODY {
  "nome": "Sabonete Dove",
  "quantidade": 4,
  "dataValidade": "2025-12-31",
  "cor": "",
  "tamanho": null,
  "localArmazenamento": "Deposito B"
}

![image](https://github.com/user-attachments/assets/f9c835ca-e2f1-4550-9d80-2e679640bb88)



2. Consultar Produtos:
→ GET http://localhost:3000/api/produtos

![image](https://github.com/user-attachments/assets/13fddcbf-ed93-4835-8637-016d25966536)




3. Consultar Produto pelo ID:
→ GET http://localhost:3000/api/produtos/2
![image](https://github.com/user-attachments/assets/b22b9c2c-6673-4c88-8e81-717e6a3e7973)


4. Atualizar Produto:
→ PATCH http://localhost:3000/api/produtos/2

BODY {
  "quantidade": 25
}

![image](https://github.com/user-attachments/assets/58f2c533-3990-4feb-b340-4deabd82ad12)



5. Deletar Produto:
→ DELETE http://localhost:3000/api/produtos/2
![image](https://github.com/user-attachments/assets/ba17e90e-1ce3-4791-8ce6-58bd1a1fddb4)



6. Movimentar Estoque:
→ POST http://localhost:3000/api/produtos/1/baixa

BODY {
  "quantidade": 5,
  "motivo": "Venda realizada"
}

![image](https://github.com/user-attachments/assets/700eaff6-c1fc-499b-a805-94461ebf26e2)


7. Relatórios: 
→ GET http://localhost:3000/api/relatorios/estoque-baixo?limite=9

![image](https://github.com/user-attachments/assets/dd90ef51-ce7d-45ad-8c2b-2e0421ed98c7)



8. Cadastro de Usuario:
→ POST http://localhost:3000/api/usuarios

{
  "nome": "Usuario",
  "email": "usuario@email.com",
  "senha": "123456"
}
![image](https://github.com/user-attachments/assets/810d50a0-4dc8-44e5-b97a-14728a56daf2)


9. Login:
→ POST http://localhost:3000/api/usuarios/login

{
  "email": "usuario@email.com",
  "senha": "123456"
}

![image](https://github.com/user-attachments/assets/f3975a3b-d9c2-45aa-af95-939c0f049f16)
