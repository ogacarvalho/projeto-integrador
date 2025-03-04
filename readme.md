![image](https://github.com/user-attachments/assets/780d0367-a65f-4fe9-91f8-2962fc2b517b)REQUISITOS:
→ node 20.18.0
→ npm  10.8.2
→ sqlite3 3.45.1

EXECUÇÃO:
→ node server.js


ROTAS:

![image](https://github.com/user-attachments/assets/710c47ff-47b6-45f4-ae0c-70101bb59d05)

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


3. Consultar Produto pelo ID:
→ GET http://localhost:3000/api/produtos/2


4. Atualizar Produto:
→ PATCH http://localhost:3000/api/produtos/2

BODY {
  "quantidade": 25
}


5. Deletar Produto:
→ DELETE http://localhost:3000/api/produtos/2


6. Movimentar Estoque:
→ POST http://localhost:3000/api/produtos/1/baixa

BODY {
  "quantidade": 5,
  "motivo": "Venda realizada"
}

7. Relatórios: 
→ GET http://localhost:3000/api/relatorios/estoque-baixo?limite=9
