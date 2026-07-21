# Screenshots dos projetos

Coloque aqui as imagens que aparecem na galeria "EM FUNCIONAMENTO" de cada case.

## Como adicionar

1. Salve a imagem nesta pasta (ex.: `radar-n8n.png`).
2. No arquivo `src/data/projects.js`, ache o projeto e preencha o campo `shots`:

   shots: [
     { src: '/shots/radar-n8n.png', caption: 'Workflow n8n em execução' },
   ],

3. O `src` sempre começa com `/shots/` (a pasta public é servida pela raiz).

## IMPORTANTE — antes de subir qualquer print

- Tarje/borre TODO dado sensível: nomes, CPF, CNS, dados de paciente ou unidade.
- Use PNG otimizado ou WebP para não pesar o site.
- Enquanto `src` estiver vazio (''), a galeria mostra um placeholder "screenshot em breve".
