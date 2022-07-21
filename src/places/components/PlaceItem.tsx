import { motion } from "framer-motion";
import React, { useState } from "react";
import { placeItems } from "../../types";
import Map from "../../shared/UIElements/Map";
import Card from "../../shared/UIElements/Card";
import Modal from "../../shared/UIElements/Modals/Modal";
import Button from "../../shared/form Elements/Button";

const PlaceItem: React.FC<placeItems> = ({ placeItem }) => {
  const [showMap, setShowMap] = useState<boolean>(false);

  return (
    <>
      <Modal
        show={showMap}
        onCancel={() => setShowMap(false)}
        header={placeItem.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={() => setShowMap(false)}>CLOSE</Button>}
      >
        <div className="map-container">
          <Map center={placeItem.loation} zoom={16} style = {{width:'100%', height:'100%' }} />
        </div>
      </Modal>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={placeItem.image} alt={placeItem.title} />
          </div>
          <div className="place-item__info">
            <h2>{placeItem.title}</h2>
            <h3>{placeItem.address}</h3>
            <p>{placeItem.description}</p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={() => setShowMap(true)}>
              view on map
            </Button>
            <Button to={`/places/${placeItem.id}`}>edit</Button>
            <Button danger>delete</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
