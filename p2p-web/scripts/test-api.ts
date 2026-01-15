/**
 * Manual API Test Script
 *
 * This script tests the backend API connection manually.
 * Run with: npx ts-node --esm scripts/test-api.ts
 *
 * Or test directly with curl:
 * curl http://localhost:8080/api/v1/vehicles
 */

const API_BASE_URL = 'http://localhost:8080/api/v1';

async function testAPI() {
  console.log('Testing Backend API Connection...\n');
  console.log(`API Base URL: ${API_BASE_URL}\n`);

  try {
    // Test 1: Get all vehicles
    console.log('Test 1: GET /vehicles');
    const response1 = await fetch(`${API_BASE_URL}/vehicles`);
    const data1 = await response1.json();
    console.log('Status:', response1.status);
    console.log('Response:', JSON.stringify(data1, null, 2));
    console.log('\n---\n');

    // Test 2: Get vehicles with filters
    console.log('Test 2: GET /vehicles?location=北京市');
    const response2 = await fetch(`${API_BASE_URL}/vehicles?location=北京市`);
    const data2 = await response2.json();
    console.log('Status:', response2.status);
    console.log('Response:', JSON.stringify(data2, null, 2));
    console.log('\n---\n');

    // Test 3: Get distinct locations
    console.log('Test 3: GET /vehicles/search/locations');
    const response3 = await fetch(`${API_BASE_URL}/vehicles/search/locations`);
    const data3 = await response3.json();
    console.log('Status:', response3.status);
    console.log('Response:', JSON.stringify(data3, null, 2));
    console.log('\n---\n');

    console.log('✅ All tests completed successfully!');
  } catch (error) {
    console.error('❌ Error testing API:', error);
    console.error('\nMake sure the backend is running on http://localhost:8080');
    console.error('Start the backend with: cd p2p-car-backend && ./gradlew bootRun');
  }
}

// Run the test
testAPI();
