#! /bin/bash

#cd current path
cd `dirname $0`

#get post name
postName=$1

#split post name with '-'
array=(${postName//,/})
printf -v var "%s-" "${array[@]}"
var=${var%?}

#get date
dateName=$(date +%Y-%m-%d-)

#create .md file
fileName=$dateName$var'.md'
touch $fileName

#get post time
postTime=$(date +%Y-%m-%d%t%H:%M:%S)

#write template into .md file
cat > $fileName << EOF
---
layout: post
title:  "$postName"
date:   $postTime
categories: []
tags: []

---
EOF
