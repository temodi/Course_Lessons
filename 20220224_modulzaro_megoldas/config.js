


export function initialConfig({ initialSpeed,  position }) {  
    if ( initialSpeed == null) {
      throw new Error('initialSpeed valtozo null!')
    }
    if ( position == null) {
      throw new Error('position valtozo null!')
    }
    
    console.log(`Module: Sebesség: ${initialSpeed} x,y coordinák: ${position.x}, ${position.y}`)  
  }
