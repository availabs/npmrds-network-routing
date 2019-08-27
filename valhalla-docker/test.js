#!/usr/bin/env node

const request = require('request-promise-native');

// const HOST = '127.0.0.1:8002'
const HOST = 'ares.availabs.org:8003'

const options = {
  method: 'POST',
  uri: `http://${HOST}/route`,
  body: {
    locations: [
      { lat: 42.676182, lon: -73.82227, type: 'break' },
      { lat: 42.679484, lon: -73.782496, type: 'break' }
    ],
    costing: 'auto',
    directions_options: { units: 'miles' }
  },
  headers: {
    'User-Agent': 'Request-Promise'
  },
  json: true // Automatically parses the JSON string in the response
};

(async () => {
  const response = await request(options);

  const { shape } = response.trip.legs[0];

  const matchOpts = {
    method: 'POST',
    uri: `http://${HOST}/trace_attributes`,
    body: {
      // filters: { attributes: ['edge.way_id'], action: 'include' },
      encoded_polyline: shape,
      shape_match: 'map_snap',
      costing: 'auto',
      directions_options: { units: 'miles' }
    },
    headers: {
      'User-Agent': 'Request-Promise'
    },
    json: true // Automatically parses the JSON string in the response
  };

  const matched = await request(matchOpts);
  // console.log(JSON.stringify(matched, null, 4));
  // const wayIds = uniqWith(matched.edges.map(({ way_id }) => way_id), isEqual);
  console.log(JSON.stringify(matched));
})();
