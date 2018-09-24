import {Pipe, PipeTransform} from "@angular/core"

@Pipe({name: "pruebas"})
export class PruebasPipe implements PipeTransform{
    transform(value, por) : string {
        let porv = parseInt(por);
        let valuev = parseInt(value);
        let result = "La multiplicación: "+value+" x "+ por + " = " + (value * por);

        return result;
    }
}

// En componente

// import {PruebasPipe} from "./pipes/pruebas.pipe";

//@Component intro
    // pipes: [PruebasPipe]

// En HTML
// {{ 4 | pruebas:7 }}