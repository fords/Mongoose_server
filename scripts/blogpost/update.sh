#!/bin/bash

API="http://localhost:4741"
URL_PATH="/blogposts"

curl "${API}${URL_PATH}/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
  "blogpost": {
    "time": "'"${TIME}"'",
    "title": "'"${TITLE}"'",
    "img_url": "'"${IMG_URL}"'",
    "description": "'"${DESCRIPTION}"'",
    "owner":"'"${OWNER}"'"
  }
}'

echo
