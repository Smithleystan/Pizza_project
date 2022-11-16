git add .

echo "saisissez commit message"
read message

git commit -m "$message"

git push origin main

read