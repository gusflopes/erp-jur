# Roadmap for Backend

## Structure
### Tables/Fields

#### User
- name
- email
- password
- active

### Company
- name
- slug
- owner_id
- active
Relationships:
- User:

#### Client
- name
- cpf
- email
- rg
- birth_date
- nit
- marital_status
- occupattion
Relationships:
- Address: zipcode, street, number, street2, neighborhood, city, state
- Telephone: ddd, number, main
- Banking: banco_codigo, banco_descricao, agencia, account, titular, cpf, operacao

#### Lawsuit
