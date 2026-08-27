#!/usr/bin/env bash
# Automated Health Check Script for GS Gacuba Website & API

API_URL="${API_URL:-http://localhost:3000/api/health}"

echo "Checking health status at: $API_URL"
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$API_URL")

if [ "$HTTP_STATUS" -eq 200 ]; then
  echo "✅ Service Healthy: HTTP $HTTP_STATUS"
  exit 0
else
  echo "❌ Service Degraded or Down: HTTP $HTTP_STATUS"
  exit 1
fi
