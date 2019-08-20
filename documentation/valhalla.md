# Valhalla

## Getting started

[README Running Section](https://github.com/valhalla/valhalla#running)
[API Reference](https://github.com/valhalla/valhalla-docs/blob/master/turn-by-turn/api-reference.md)

## docker

[valhalla docker](https://hub.docker.com/r/valhalla/docker)
[valhalla dockerfile](https://hub.docker.com/r/valhalla/docker/dockerfile)

## OSM

[OSM tags for routing](https://wiki.openstreetmap.org/wiki/OSM_tags_for_routing/Valhalla)

## Read speed CSV file and update the tile_speeds in unique_data

[Release Date: 2018-10-02 Valhalla 2.7.1](https://valhalla.readthedocs.io/en/latest/changelog/#release-date-2018-10-02-valhalla-271)
  > Release Date: 2018-10-02 Valhalla 2.7.1
  > Enhancement
  >   * UPDATED: Added date time support to forward and reverse isochrones. Add speed lookup (predicted speeds and/or free-flow or constrained flow speed) if date_time is present.


[script source code](https://github.com/valhalla/valhalla/blob/9f07205f58ab2d4b85bcd33d2f9e621f7c62c5bc/src/mjolnir/valhalla_add_predicted_traffic.cc)
[calling the script](https://github.com/valhalla/valhalla/blob/master/test/CMakeLists.txt#L52-L54)
[baldr/predictedspeeds.h](https://github.com/valhalla/valhalla/blob/59df479147b695f80e04c1d9de97a431a5c47119/valhalla/baldr/predictedspeeds.h#L93-L116)
[Discrete Cosine Transform (DCT III)](https://en.wikipedia.org/wiki/Discrete_cosine_transform)


[Predicted traffic: Post process to add speeds and predicted traffic records](https://github.com/valhalla/valhalla/issues/1292)
[Predicted traffic: DE speed updates](https://github.com/valhalla/valhalla/issues/1291)
[Predicted speeds calculation and data feed](https://github.com/valhalla/valhalla/issues/1898)
[COMMIT Add date_time and speed lookup to isochrones](https://github.com/valhalla/valhalla/pull/1528/commits/7be47ab480dfba8f9329f32bb5bf9066d6cdd533)

[Python: Discrete Cosine Transform](https://docs.scipy.org/doc/scipy-0.14.0/reference/generated/scipy.fftpack.dct.html)
