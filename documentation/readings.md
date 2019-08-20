# Research

## Algorithms

* Uber Tech Day: What's My ETA?
	* [Routing Algorithms -- Partitioning Algorithms](https://youtu.be/FEebOd-Pdwg?t=544)
	* [Historical & Real-time speed info](https://youtu.be/FEebOd-Pdwg?t=815)
		> Bias vs Variance

## Valhalla

* https://valhalla.readthedocs.io/en/latest/speeds/

  > Real-time or historical traffic information is not currently included in speed calculations. Valhalla is working towards these capabilities, and the tiled data structures of Valhalla and dynamic costing approach can readily support traffic information when available.  

* Traffic Influenced Routing - Proof of Concept

	> This type of change to the Valhalla routing graph will need to be developed, validated, and tested to make sure routing performance and quality remains high. However, this idea seems promising and is worth pursuing as we move forward with traffic investigation and integration.

* [mapzen OSRM Sunset](https://www.mapzen.com/blog/osrm-sunset/)

  > After working with OSRM, we soon realized that routing with open source data could be made even better by embedding road characteristics and connectivity information in tiles, along with providing dynamic, run-time costing for custom transportation modes. In under six months, the Valhalla development team came on board and created a open source, world-class routing and navigation tool using OpenStreetMap road network data.

* [Recommended approach for precise linear references](https://github.com/valhalla/valhalla/issues/1374)

  > Valhalla edge Ids are not persistent.
	> 
	> If you update OSM and create new Valhalla data the edge Ids will be different. We are currently focused on Valhalla being used as a routing engine with externally defined traffic and other information associated to the graph using OpenLR rather than OSMLR. External systems will be responsible for creating the OpenLR references and maintaining their data. This reduces the scope of what Valhalla is responsible for (at least within our current efforts).
	> 
	> Not sure this helps. Basically creating traffic data is hard and Valhalla is currently focusing on using externally created data, rather than being used within systems to create such data.

* [Valhalla is live on Mapbox](https://blog.mapbox.com/valhalla-is-live-on-mapbox-d868e8d41611)

  > Valhalla running at scale allows us to combine its open source APIs with real-time traffic, powered by 225 million miles of anonymized mobile sensor data we collect each day.

* [SIF - Dynamic Costing within Valhalla](https://valhalla.readthedocs.io/en/latest/sif/dynamic-costing/)

  > Costing methods have access to all attributes of an edge (road section between 2 intersections) to form the cost along the edge and when transitoning between edges. Within Sif, costing methods are created by deriving a class from the base dynamic costing class or one of the existing costing classes.  

## pgRouting

* [Shortest Path search in your Database and more with pgRouting — Daniel Kastl](https://vimeo.com/106226249#t=368s)

	Conference talk on Vimeo.

* [Identification of Optimum Shortest Path using Multipath Dijkstra’s Algorithm Approach](https://pdfs.semanticscholar.org/df7b/9ac6283bccf781a2360e095e53a9efbd75f3.pdf)

	>  But in our application, it is not only the shortest path distance in general geographic sense but it also provides cost parameter dynamically including time and the capacity of the line. We propose a road-routing web based geographic information system which helps to find the shortest path between source and destination in order to optimize it by implementing new technologies through which cost parameters are calculated dynamically with the help of PgRouting.

## GraphHopper

* [GRAPHHOPPER WITH POSTGIS DATA READER](https://georepublic.info/en/blog/2018/graphhopper-with-postgis-data-reader/)

  > Now if there are traffic information in an another table, another View can be created that links the traffic information table with the road network table via SQL that gives the maxspeed a higher value for roads that have less traffic and lower values that have more traffic. This will give priority to roads with less traffic when doing path searches.

* [Putting “Uber Movement” Data into Action — Machine Learning Approach](https://towardsdatascience.com/putting-uber-movement-data-into-action-machine-learning-approach-71a4b9ed0acd)

 > Mobility is the catchy term for Smart City projects and location intelligence. Think of it as a service that gives you an estimated travel time in the city that you live based on the origin and destination pair of your travel and time of the day. The time of day can even cover seasonality since you wouldn’t expect the same travel times in the thick summer afternoon heat and the grey winter morning fog. Moreover, the selection of a precise date can yield endless searches: morning peaks just on weekends in May, since you are traveling to Barcelona at that time of the year, or summer middays around 15:20 pm on Fridays, since you have a summer internship in London. Uber Movement data is just the beginning.


## SharedStreets

[OSMLR and SharedStreets](https://github.com/sharedstreets/sharedstreets-ref-system/blob/master/OSMLR.md)

	> OSMLR v1.x was developed to support OpenTraffic under contract from the World Bank. SharedStreets is the continuation of this work as part of the Open Transport Partnership. The SharedStreets Referencing system is effectively "OSMLR v2.0" but drops the OSMLR name as it intends to support broad range of map data formats including, but not limited to, OpenStreetMap.

[OSMLR traffic segments for the entire planet](https://www.mapzen.com/blog/osmlr-2nd-technical-preview/)

	> Similarly to how the Valhalla stores its routing graph in hierarchical tiles, OSMLR segments are available as geographic tiles at three levels of roadway hierarchy

[Using reference IDs as stable identifiers in historical time series data](https://github.com/sharedstreets/sharedstreets-ref-system/issues/23)

[Geometry length mismatched between Java/Javascript](https://github.com/sharedstreets/sharedstreets-js/issues/16)
