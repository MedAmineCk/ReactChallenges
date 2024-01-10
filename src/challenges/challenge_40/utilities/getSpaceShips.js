import { nanoid } from "nanoid"

export default function getSpaceShips() {
        
        const positionArray = new Array(25).fill().map( (element, index) => index).sort(() => 0.5 - Math.random()) 
        
        const numberOfShips = getNumberOfShips()
        
        function getRandomNumber(num) {
            return Math.floor(Math.random() * num + 1)
        }
        
        function getNumberOfShips() {
            const randomNumber = getRandomNumber(20)
            return randomNumber >= 10 ? randomNumber : 10
        }

        function getPositionNumber() {
            const nextPosition = positionArray[0]
            positionArray.shift()
            return nextPosition
        }
        
        function createShip() {
            const shipBoilerplate = {
                                      id: nanoid(),
                                      isShot: false,
                                      position: `p${getPositionNumber()}`
                                    }
            let shipSpecs
            let randomNumber = getRandomNumber(4)
            
            switch(randomNumber) {
                case 1:
                   shipSpecs = {icon: "🛸", type: "saucer", points: 20} 
                   break
                case 2: 
                    shipSpecs = {icon: "🚀", type: "rocket", points: 10}
                    break
                case 3: 
                    shipSpecs = {icon: "🛰", type: "satellite", points: 5}
                    break
                case 4: 
                    shipSpecs = {icon: "👾", type: "invader", points: 15}
                    break
            }
            return {...shipSpecs, ...shipBoilerplate}
         }
         
        return new Array(numberOfShips).fill().map(createShip)
    }