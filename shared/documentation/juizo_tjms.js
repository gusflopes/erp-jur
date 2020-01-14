/* eslint-disable */
const judiciario = {
  sigla: 'J',
  descricao: 'Judiciário',
  codigos: [
    { codigo: "1", descricao: 'Supremo Tribunal Federal' },
    { codigo: "2", descricao: 'Conselho Nacional de Justiça' },
    { codigo: "3", descricao: 'Superior Tribunal de Justiça' },
    { codigo: "4", descricao: 'Justiça Federal' },
    { codigo: "5", descricao: 'Justiça do Trabalho' },
    { codigo: "6", descricao: 'Justiça Eleitoral' },
    { codigo: "7", descricao: 'Justiça Militar da União' },
    { codigo: "8", descricao: 'Justiça dos Estados' },
    { codigo: "9", descricao: 'Justiça Militar Estadual' },
  ],
};

// certo seria TRF
const tribunal = {
  sigla: 'TR',
  descricao: 'Tribunal ou Conselho',
  codigos: [
    { judiciario: "1", codigo: "00", sigla: 'STF', descricao: 'Supremo Tribunal Federal' },
    { judiciario: "8", codigo: "12", sigla: 'TJ/MS', descricao: 'Tribunal de Justiça do Estado de Mato Grosso do Sul' },
    { judiciario: "5", codigo: "24", sigla: 'TRT/24', descricao: 'Tribunal Regional do Trabalho da 24ª Região' },
    { judiciario: "4", codigo: "03", sigla: 'JF/MS', descricao: 'Justiça Federal do Estado de Mato Grosso do Sul' },
  ]
}

const unidade = {
  sigla: 'nao tem',
  descricao: 'Unidade de Origem',
  codigos: [

    // ## JUSTIÇA FEDERAL ##

    // ## JUSTIÇA TRABALHISTA ##

    // ## JUSTIÇA ESTADUAL ##
    { judiciario_id: "8", tribunal_id: "12", codigo: "0000", descricao: 'Tribunal de Justiça' },

    // Comarcas
    // - Etrância Especial
    { judiciario_id: "8", tribunal_id: "12", codigo: "0001", prefixo: 'da', descricao: 'Comarca de Campo Grande/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0002", descricao: 'Comarca de Dourados/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0008", descricao: 'Comarca de Corumbá/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0021", descricao: 'Comarca de Três Lagoas/MS' },

    // - Segunda Entrância
    { judiciario_id: "8", tribunal_id: "12", codigo: "0004", descricao: 'Comarca de Amambai/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0052", descricao: 'Comarca de Anastácio/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0024", descricao: 'Comarca de Aparecida do Taboado/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0005", descricao: 'Comarca de Aquidauana/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0026", descricao: 'Comarca de Bataguassu/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0003", descricao: 'Comarca de Bela Vista/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0028", descricao: 'Comarca de Bonito/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0031", descricao: 'Comarca de Caarapó/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0006", descricao: 'Comarca de Camapuã/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0007", descricao: 'Comarca de Cassilândia/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0046", descricao: 'Comarca de Chapadão do Sul/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0009", descricao: 'Comarca de Costa Rica/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0011", descricao: 'Comarca de Coxim/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0010", descricao: 'Comarca de Fátima do Sul/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0012", descricao: 'Comarca de Ivinhema/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0013", descricao: 'Comarca de Jardim/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0014", descricao: 'Comarca de Maracaju/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0015", descricao: 'Comarca de Miranda/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0016", descricao: 'Comarca de Mundo Novo/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0029", descricao: 'Comarca de Naviraí/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0054", descricao: 'Comarca de Nova Andradina/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0018", descricao: 'Comarca de Paranaíba/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0019", descricao: 'Comarca de Ponta Porã/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0020", descricao: 'Comarca de Rio Brilhante/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0042", descricao: 'Comarca de Rio Verde de Mato Grosso/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0043", descricao: 'Comarca de São Gabriel do Oeste/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0045", descricao: 'Comarca de Sidrolândia/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0047", descricao: 'Comarca de Terenos/MS' },

    // - Primeira Entrância: Possui apenas Vara Única
    { judiciario_id: "8", tribunal_id: "12", codigo: "0049", descricao: 'Comarca de Água Clara/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0022", descricao: 'Comarca de Anaurilândia/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0073", descricao: 'Comarca de Angélica/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0025", descricao: 'Comarca de Bandeirantes/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0027", descricao: 'Comarca de Batayporã/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0030", descricao: 'Comarca de Brasilândia/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0058", descricao: 'Comarca de Coronel Sapucaia/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0032", descricao: 'Comarca de Deodápolis/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0053", descricao: 'Comarca de Dois Irmãos do Buriti/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0033", descricao: 'Comarca de Eldorado/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0034", descricao: 'Comarca de Glória de Dourados/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0035", descricao: 'Comarca de Iguatemi/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0036", descricao: 'Comarca de Inocência/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0037", descricao: 'Comarca de Itaporã/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0051", descricao: 'Comarca de Itaquiraí/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0038", descricao: 'Comarca de Nioaque/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0054", descricao: 'Comarca de Nova Alvorada do Sul/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0039", descricao: 'Comarca de Pedro Gomes/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0040", descricao: 'Comarca de Porto Murtinho/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0041", descricao: 'Comarca de Ribas do Rio Pardo/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0048", descricao: 'Comarca de Rio Negro/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0044", descricao: 'Comarca de Sete Quedas/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0055", descricao: 'Comarca de Sonora/MS' },


    // juizados
    { judiciario_id: "8", tribunal_id: "12", codigo: "0110", descricao: 'Juizado Especial Central de Campo Grande/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0101", descricao: 'Juizado Especial de Dourados/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0114", descricao: 'Juizado Especial de Três Lagoas/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0600", descricao: 'Justiça Itinerante do Estado de MS' },

    // juizados antigos
    { judiciario_id: "8", tribunal_id: "12", codigo: "0111", descricao: '1ª Vara do Juizado Especial de Campo Grande/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0104", descricao: '4ª Vara do Juizado Especial de Campo Grande/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0105", descricao: '5ª Vara do Juizado Especial de Campo Grande/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0107", descricao: '7ª Vara do Juizado Especial de Campo Grande/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0108", descricao: '8ª Vara do Juizado Especial de Campo Grande/MS' },
    { judiciario_id: "8", tribunal_id: "12", codigo: "0109", descricao: '9ª Vara do Juizado Especial de Campo Grande/MS' },
  ]
}

const varas = {
  itens: [
  { codigo: '1VUni', descricao: 'Vara Única'},
  { codigo: '1VCiv', descricao: '1ª Vara Cível'},
  { codigo: '1VCri', descricao: '1ª Vara Criminal'},
  { codigo: '1VCCr', descricao: '1ª Vara Cível e Criminal'},

  ]
}

const competencia = [
  {id: 0, prefixo: 'Vara', descricao: 'Única'},
  {id: 1, prefixo: 'Vara', descricao: 'Cível'}, // sinonimo de Cível de Competência Residual
  {id: 2, prefixo: 'Vara', descricao: 'Criminal'}, // sinonimo de Criminal Residual
  {id: 3, prefixo: '', descricao: 'Juizado Especial Adjunto'},
  {id: 4, prefixo: 'Vara', descricao: 'Infância e Juventude'}, //Verificar
  {id: 5, prefixo: '', descricao: 'Juizado Especial Adjunto Cível'},
  {id: 6, prefixo: '', descricao: 'Juizado Especial Adjunto Criminal'},
  {id: 7, prefixo: 'Vara', descricao: 'Violência Doméstica'},
  {id: 8, prefixo: 'Vara', descricao: 'Infância e Adolescência'},
  {id: 9, prefixo: 'Vara', descricao: 'Fazenda Pública e Registros Públicos'},
  {id: 10, prefixo: 'Vara', descricao: 'Execução Fiscal da Fazenda Pública Municipal'},
  {id: 11, prefixo: 'Vara', descricao: 'Execução Fiscal da Fazenda Pública Estadual'},
  {id: 12, prefixo: 'Vara', descricao: 'Falência, Recuperações, Insolvências e cumprimento de cartas precatórias cíveis em geral'},
  {id: 13, prefixo: 'Vara', descricao: 'Justiça Militar Estadual'},
  {id: 14, prefixo: 'Vara', descricao: 'Execução Penal'},
  {id: 15, prefixo: 'Vara', descricao: 'Violência Doméstica e Familiar contra a Mulher'},
  {id: 16, prefixo: 'Vara', descricao: 'Criminal de Competência Especial'},
  {id: 17, prefixo: 'Vara', descricao: 'Infância, Adolescência e do Idoso'},
  {id: 18, prefixo: 'Vara', descricao: 'Tribunal do Júri'},
  {id: 19, prefixo: 'Vara', descricao: 'Cível Virtual'},
  {id: 20, prefixo: 'Vara', descricao: 'Família e Sucessões'},
  {id: 21, prefixo: 'Vara', descricao: 'Direitos Difusos, Coletivos e Individuais Homogêneos'},
];

const vara = [
  {id: 1, }
]

const juizo_exemplo = `1ª ${competencia[1].prefixo} ${competencia[1].descricao} ${comarca.codigos[1].prefixo} ${comarca.codigos[1].descricao}`
const juizo_exemplo2 = `${competencia[0].prefixo} ${competencia[0].descricao} ${comarca.codigos[1].prefixo} ${comarca.codigos[1].descricao}`
console.log(juizo_exemplo);
console.log('1ª Vara Cível da Comarca de Campo Grande/MS');
console.log('----');
console.log(juizo_exemplo2)

// NNNNNNN-DD.AAAA.J.TR.0000

