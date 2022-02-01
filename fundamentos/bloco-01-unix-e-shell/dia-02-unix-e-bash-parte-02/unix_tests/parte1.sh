#!/bin/bash

# Exercicios Parte 1

# 1

ls -l
cd trybe-exercicios
ls *
cd fundamentos/bloco-01-unix-e-shell/
ls *
cd dia-02-unix-e-bash-parte-02/unix_tests/

# 2

cat > skills2.txt
Internet
Unix
Bash

# 3

cat >> skills2.txt
JavaScript
React
Html
Css
SQL

sort < skills2.txt

# 4

wc -l skills2.txt

# 5

sort < skills2.txt | head -n 3 > top_skills.txt

# 6

cat > phrases2.txt
Dia 02 de conteudo na trybe.
Finalizando Bloco 1.
br

# 7

grep br phrases2.txt | wc -l

# 8

grep -v br phrases2.txt | wc -l

# 9

cat >> phrases2
Alemanha
Algéria

# 10

cat phrases2.txt countries.txt > bunch_of_things.txt

# 11

sort < bunch_of_things.txt -o > bunch_of_things.txt