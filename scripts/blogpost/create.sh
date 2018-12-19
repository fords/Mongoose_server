API="http://localhost:4741"
URL_PATH="/blogposts"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "blogpost": {
      "title": "'"${TITLE}"'",
      "img_url": "'"${IMG_URL}"'",
      "description": "'"${DESCRIPTION}"'"
    }
  }'

echo
# "time": "'"${TIME}"'",
