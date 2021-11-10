import { Event } from "./Event";
import { Block } from "../../block/Block";

export class BlockEvent extends Event {

    public getBlock(): Block {
        return new Block(this.toJava().getBlock());
    }

}