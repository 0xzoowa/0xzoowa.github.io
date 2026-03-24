#!/bin/bash

node build-journal.js
git add .
timestamp=$(date +"%Y%m%d%H%M%S")
git commit -m "journal update #$timestamp"
git push

echo "🚀 Published"