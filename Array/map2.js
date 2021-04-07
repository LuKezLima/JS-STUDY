const carrinho = [
    '{"nome": "Borracha", "preço": 3.45}',
    '{"nome": "Caderno", "preço": 13.90}',
    '{"nome": "Kit de Lapis", "preço": 41.22}',
    '{"nome": "Canera", "preço": 7.5}'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preço

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)