'use client'

import React from 'react';
import {APIProvider, AdvancedMarker, Map} from '@vis.gl/react-google-maps';

const MapComponenet = () => {

    const position = {lat: 53.34, lng:10};

    return (
      <APIProvider apiKey={'AIzaSyBfpdxtSZKaZKGhTRcI5P7n2Uz-nEkcBNk'}>
        <Map
          style={{width: '100%', height: '350px'}}
          defaultCenter={{lat: 22.54992, lng: 0}}
          defaultZoom={9}
          mapId={'84d5107d6e6b8d6a'}
        >
          <AdvancedMarker position={position}>

          </AdvancedMarker>
        </Map>
      </APIProvider>
    )
};


export default MapComponenet
