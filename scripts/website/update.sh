#!/bin/bash

API="http://localhost:4741"
URL_PATH="/websites"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
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
