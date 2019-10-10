import {System} from "./node_modules/ecsy/build/ecsy.module.js"
import {ThreeCore} from './threesystem'

export class KeyboardInputSystem extends System {

    init() {
        console.log("doing init")
        console.log('attaching keyboard listeners')
        document.addEventListener('keypress',(e)=>{
            if(e.key === 'a') this.turnLeft()
            if(e.key === 'd') this.turnRight()
        })
    }
    execute() {
    }

    initialize() {
    }

    turnLeft() {
        this.queries.three.results.forEach(ent => {
            const core = ent.getMutableComponent(ThreeCore)
            core.camera.rotation.y += 0.05
        })
    }

    turnRight() {
        this.queries.three.results.forEach(ent => {
            const core = ent.getMutableComponent(ThreeCore)
            core.camera.rotation.y -= 0.05
        })
    }
}
KeyboardInputSystem.queries = {
    three: {
        components:[ThreeCore]
    }
}
