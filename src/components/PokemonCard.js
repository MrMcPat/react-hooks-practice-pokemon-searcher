import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({name, hp, image}) {
  const [flip, setFlip] = useState(false)

  function handleClick () {
    setFlip(flip => !flip)
  }

  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img alt="oh no!" src={flip ? image.back : image.front} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
