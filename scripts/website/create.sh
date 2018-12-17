API="http://localhost:4741"
URL_PATH="/websites"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "website": {
      "url": "'"${URL}"'",
      "title": "'"${TITLE}"'",
      "description": "'"${DESCRIPTION}"'",
      "blogpost":"'"${BLOGPOST}"'"
    }
  }'

echo
