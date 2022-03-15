import {useRef, useEffect} from 'react';
import {Icon, Marker} from 'leaflet';
import useMap from '../../hooks/useMap';
import {Offer, Location} from '../../types/offers';
import 'leaflet/dist/leaflet.css';
import {URL_MARKER_DEFAULT, URL_MARKER_ACTIVE, MARKER_SIZE_X, MARKER_SIZE_Y, MARKER_ANCHOR_X, MARKER_ANCHOR_Y} from '../../const';

type MapProps = {
  offers: Offer[];
  point: Location;
  selectedPoint: number | undefined;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [MARKER_SIZE_X, MARKER_SIZE_Y],
  iconAnchor: [MARKER_ANCHOR_X, MARKER_ANCHOR_Y],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_ACTIVE,
  iconSize: [MARKER_SIZE_X, MARKER_SIZE_Y],
  iconAnchor: [MARKER_ANCHOR_X, MARKER_ANCHOR_Y],
});

function Map({offers, point, selectedPoint}:MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, point);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude,
        });

        marker.setIcon(selectedPoint !== undefined && offer.id === selectedPoint
          ? currentCustomIcon
          : defaultCustomIcon,
        ).addTo(map);
      });
    }
  }, [map, offers, selectedPoint]);

  return (
    <div style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}
export default Map;
