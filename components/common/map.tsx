'use client'

import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const containerStyle = {
    width: '100%',
    height: '400px',
};

// 고은님 주소에 해당하는 위도/경도 (대략적 위치 기준)
const center = {
    lat: 37.2881023,
    lng: 127.0606465,
};

export default function Map() {
    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={18}
            >
                <Marker position={center} />
            </GoogleMap>
        </LoadScript>
    );
}
