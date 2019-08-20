#!/usr/bin/env node

const request = require('request-promise-native');
const { uniqWith, isEqual } = require('lodash');

const options = {
  method: 'POST',
  uri: 'http://127.0.0.1:8002/route',
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
    uri: 'http://127.0.0.1:8002/trace_attributes',
    body: {
      filters: { attributes: ['edge.way_id'], action: 'include' },
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
  const wayIds = uniqWith(matched.edges.map(({ way_id }) => way_id), isEqual);
  // console.log(JSON.stringify(legsGeoJSON, null, 4));
  console.log(JSON.stringify(wayIds));
})();
