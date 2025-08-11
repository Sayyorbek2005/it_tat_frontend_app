#!/bin/bash
set -e

# 1. Build papkani tozalash
echo ">>> Eski build papkasini o'chirayapman..."
rm -rf ./build

# 2. Frontendni build qilish
echo ">>> Frontendni build qilyapman..."
npm install
npm run build

# 3. Docker-compose konteynerlarni qayta ishga tushirish
echo ">>> Docker konteynerlarni qayta ishga tushiryapman..."
docker compose down
docker compose up -d --build

# 4. Loglarni tekshirish
echo ">>> Docker loglarini tekshirish..."
docker compose logs -f
