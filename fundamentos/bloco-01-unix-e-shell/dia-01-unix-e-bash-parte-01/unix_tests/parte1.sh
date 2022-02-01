#!/bin/bash

# Exercícios Parte 1

# 1

mkdir unix_tests
cd unix_tests

# 2

touch trybe.txt

# 3

cp trybe.txt trybe_backup.txt

# 4

mv trybe.txt rename.txt

# 5

mkdir backup

# 6

mv trybe_backup backup

# 7

mkdir backup2

# 8

mv backup/trybe_backup backup2

# 9

rmdir backup

# 10 

mv backup2 backup

# 11

pwd
ls -l

# 12

rm -rf backup

# 13 

clear

# 14

head -n 5 skills.txt

# 15

tail -n 4 skills.txt

# 16

rm *.txt