export default function shootShip(id, points, setCurrentShips, setScore, playExplosion) {   
        setCurrentShips(ships => ships.map(ship => {
            playExplosion()
            return ship.id === id ? 
                {...ship, isShot: true} :
                ship
        }))
        setScore(oldScore => oldScore + points)
    }