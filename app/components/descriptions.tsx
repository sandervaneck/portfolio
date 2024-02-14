"use client";
import { Project } from "../page";

export function describeProject(project: Project) {

    let result;
    switch (true) {
        case (project.name === "MyChefsbase"):
            result = (
                <>
                Platform for restaurant owners to optimize their operations.<br/>
                Services include kitchen management, supplier integration, costs analysis, smart menu creation, nutrition analysis, allergene lists <br/>
                Using cloud-based databases <br/>
                <code className="font-mono font-bold">(commercial and private)</code>
                </>
            )
        break;
        case (project.name === "EquisMate"):
            result = (
                <>
                Platform for restaurant owners to optimize their operations.<br/>
                Services include kitchen management, supplier integration, costs analysis, smart menu creation, nutrition analysis, allergene lists <br/>
                Using cloud-based databases <br/>
                <code className="font-mono font-bold">(commercial and private)</code>
                </>
            )
        break;
        default:
            result = (
                <>
                Private label Yerba Mate products, here is the self-developed webshop. 
                </>
            )
    }
    return result
}