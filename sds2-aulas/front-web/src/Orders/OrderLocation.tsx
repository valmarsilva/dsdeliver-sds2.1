import { useState } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import AsyncSelect from "react-select/async";

const InitialPosition = {
  lat: -26.8782873,
  lng: -48.7492773
};

type Place = {
  label?: string;
  value?: string;
  position: {
    lat: number;
    lng: number;
  };
};

function OrderLocation() {
  const [address, setAddress] = useState<Place>({
    position: InitialPosition
  });

  const loadOptions = async (
    inputValue: string,
    callback: (places: Place[]) => void
  ) => {
    const response = await fetchLocalMapBox(inputValue);

    const places = response.data.features.map((item: any) => {
      return {
        label: item.place_name,
        value: item.place_name,
        position: {
          lat: item.center[1],
          lng: item.center[0]
        }
      };
    });

    callback(places);
  };

  const handleChangeSelect = (place: Place) => {
    setAddress(place);
    // onChangeLocation
    //  latitude: place.position.lat,
    //  longitude: place.position.lng,
    //  address: place.label!
    //;tem um parenteses e uma chave deletados por enquanto
  };
  return (
    <div className="order-location-container">
      <div className="order-location-content">
        <h3 className="order-location-title">
          Selecione onde o pedido deve se entregue:
        </h3>
        <div className="filter-container">
          <AsyncSelect
            placeHolder="digite um endereço"
            className="filter"
            loadOptions={loadOptions}
            onChange={(value) => handleChangeSelect(value as Place)}
          />
        </div>

        <MapContainer
          center={address.position}
          zoom={13}
          key={address.position.lat}
          scrollWheelZoom
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={address.position}>
            <Popup>meu marcador</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default OrderLocation;
function fetchLocalMapBox(inputValue: string) {
  throw new Error("Function not implemented.");
}
