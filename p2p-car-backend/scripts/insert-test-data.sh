#!/bin/bash

# ============================================
# P2P Car Rental - Test Data Insertion Script
# ============================================
#
# This script inserts test data into the P2P Car Rental database
#
# Usage:
#   ./insert-test-data.sh
#
# ============================================

set -e

# Database configuration
DB_CONTAINER=${DB_CONTAINER:-"p2pcar-postgres"}
DB_NAME=${DB_NAME:-"p2pcar"}
DB_USER=${DB_USER:-"p2pcar"}

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Print header
echo -e "${BLUE}=====================================${NC}"
echo -e "${BLUE}P2P Car Rental - Test Data Insertion${NC}"
echo -e "${BLUE}=====================================${NC}"
echo ""

# Check if Docker container is running
echo -e "${YELLOW}Checking if database container is running...${NC}"
if ! docker ps | grep -q ${DB_CONTAINER}; then
    echo -e "${RED}Error: Database container '${DB_CONTAINER}' is not running!${NC}"
    echo -e "${YELLOW}Please start the database first using:${NC}"
    echo "  docker-compose up -d postgres"
    exit 1
fi
echo -e "${GREEN}✓ Database container is running${NC}"
echo ""

# Get script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
SQL_FILE="${SCRIPT_DIR}/insert-test-data.sql"

# Check if SQL file exists
if [ ! -f "${SQL_FILE}" ]; then
    echo -e "${RED}Error: SQL file not found at ${SQL_FILE}${NC}"
    exit 1
fi

# Execute SQL script
echo -e "${YELLOW}Inserting test data...${NC}"
docker exec -i ${DB_CONTAINER} psql -U ${DB_USER} -d ${DB_NAME} < "${SQL_FILE}"

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}=====================================${NC}"
    echo -e "${GREEN}✓ Test data inserted successfully!${NC}"
    echo -e "${GREEN}=====================================${NC}"
    echo ""
    echo -e "${BLUE}To verify the data, run:${NC}"
    echo "  docker exec -it ${DB_CONTAINER} psql -U ${DB_USER} -d ${DB_NAME}"
    echo ""
    echo -e "${BLUE}Then run:${NC}"
    echo "  SELECT COUNT(*) FROM users;"
    echo "  SELECT COUNT(*) FROM vehicles;"
    echo "  SELECT COUNT(*) FROM vehicle_images;"
else
    echo ""
    echo -e "${RED}=====================================${NC}"
    echo -e "${RED}✗ Failed to insert test data${NC}"
    echo -e "${RED}=====================================${NC}"
    exit 1
fi
