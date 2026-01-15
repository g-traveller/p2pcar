#!/bin/bash

# P2P Car Rental - Login API Test Script
# This script tests the authentication endpoints

BASE_URL="http://localhost:8080/api/v1"

echo "========================================="
echo "P2P Car Rental - Login API Test"
echo "========================================="
echo ""

# Test 1: Login with email (test@example.com / password123)
echo "Test 1: Login with email"
echo "POST /auth/login"
echo "Request: {\"emailOrPhone\":\"test@example.com\",\"password\":\"password123\"}"
echo ""
RESPONSE=$(curl -s -X POST "${BASE_URL}/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"emailOrPhone":"test@example.com","password":"password123"}')
echo "Response:"
echo "$RESPONSE" | jq '.'
echo ""

# Extract token for subsequent tests
TOKEN=$(echo "$RESPONSE" | jq -r '.data.token')
USER_ID=$(echo "$RESPONSE" | jq -r '.data.user.id')

echo "Token: ${TOKEN:0:50}..."
echo "User ID: $USER_ID"
echo ""

# Test 2: Login with phone (13900000001 / password123)
echo "Test 2: Login with phone"
echo "POST /auth/login"
echo "Request: {\"emailOrPhone\":\"13900000001\",\"password\":\"password123\"}"
echo ""
curl -s -X POST "${BASE_URL}/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"emailOrPhone":"13900000001","password":"password123"}' | jq '.'
echo ""

# Test 3: Login with admin credentials
echo "Test 3: Login with admin credentials"
echo "POST /auth/login"
echo "Request: {\"emailOrPhone\":\"admin@example.com\",\"password\":\"admin123\"}"
echo ""
curl -s -X POST "${BASE_URL}/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"emailOrPhone":"admin@example.com","password":"admin123"}' | jq '.'
echo ""

# Test 4: Login with invalid credentials
echo "Test 4: Login with invalid credentials (should fail)"
echo "POST /auth/login"
echo "Request: {\"emailOrPhone\":\"test@example.com\",\"password\":\"wrongpassword\"}"
echo ""
curl -s -X POST "${BASE_URL}/auth/login" \
  -H "Content-Type: application/json" \
  -d '{"emailOrPhone":"test@example.com","password":"wrongpassword"}' | jq '.'
echo ""

# Test 5: Get current user (using token from Test 1)
echo "Test 5: Get current user"
echo "GET /auth/me"
echo "Authorization: Bearer ${TOKEN:0:20}..."
echo ""
curl -s -X GET "${BASE_URL}/auth/me" \
  -H "Authorization: Bearer $TOKEN" | jq '.'
echo ""

# Test 6: Logout
echo "Test 6: Logout"
echo "POST /auth/logout"
echo "Authorization: Bearer ${TOKEN:0:20}..."
echo ""
curl -s -X POST "${BASE_URL}/auth/logout" \
  -H "Authorization: Bearer $TOKEN" | jq '.'
echo ""

echo "========================================="
echo "Tests completed!"
echo "========================================="
