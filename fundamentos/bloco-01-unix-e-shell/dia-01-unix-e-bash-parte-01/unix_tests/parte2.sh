#!/bin/bash

# Exercícios Parte 2

# 1

curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

# 2

cat countries.txt

# 3

less countries.txt

# 4

less countries.txt
/Zambia

# 5

grep Brazil countries.txt

# 6

grep -i brasil countries.txt

# 7

grep -v fox phrases.txt

# 8

wc -w phrases.txt

# 9

wc -l phrases.txt

# 10

touch empty.tbt empty.pdf

# 11

ls -l

# 12

ls *.txt

# 13

ls *.t?t

# 14

man ls