import * as wkstr from "../config/worktops.json"
import { Point } from "../stores/WorktopStores/Point"
import { Vector } from "../stores/WorktopStores/Vector"
import { Worktop } from "../stores/WorktopStores/Worktop"

export function getWorktopFromConfig(id:string) {   
    const worktopConf = wkstr.worktops.find(x => x.id === id)// Get worktop from configuration by id

    if(worktopConf === undefined){ //Error handler 1
        throw "There is no worktop of that configuration"
    }

    var points: Point[] = [] //Declare new array of points 
    for(const pointConf of worktopConf.points){ //Push points fron configuration to array
        const point = new Point(pointConf[0] as number, pointConf[1] as number, pointConf[2] as string)
        points.push(point)
    }
    
    if (points.length = 0){ //Error handler 2
        throw "There are no points in this worktop"
    }

    var vectors: Vector[] = [] //Declare new array of vectors 
    for(const vectorConf of worktopConf.vectors){ //Push vectors fron configuration to array
        const vector = new Vector(points[vectorConf[0]], points[vectorConf[1]]) 
        vectors.push(vector)
    }

    if (vectors.length = 0){ //Error handler 3
        throw "There are no vectors in this worktop"
    }
    
    connectVectors(vectors)

    const worktop = new Worktop(points,vectors)
    return worktop
}

function connectVectors(vectors: Vector[]){
    for(const vect of vectors){
        const conn = vectors.find(x => x.startpoint === vect.endpoint)
        if(conn != undefined){
            vect.connectVector(vect)
        }
    }
}