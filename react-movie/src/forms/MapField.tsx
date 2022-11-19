import { useFormikContext } from "formik";
import coordinateDTO from "../utils/coordinates.model";
import Map from "../utils/Map";

export default function MapField(props: mapFieldProps) {
  const { values } = useFormikContext<any>();
  function handleMapClick(coordiantes: coordinateDTO) {
    values[props.latField] = coordiantes.lat;
    values[props.lngField] = coordiantes.lng;
  }
  return (
    <Map coordinates={props.coordinates} handleMapClick={handleMapClick} />
  );
}

interface mapFieldProps {
  coordinates: coordinateDTO[];
  latField: string;
  lngField: string;
}

MapField.defaultProps = {
  coordinates: [],
};
