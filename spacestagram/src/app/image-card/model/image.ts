
export class Image {
    public id: number; 
    public sol: number; 
    public camera: Camera;
    public img_src: string;
    public earth_date: string;
    public rover: Rover;

        constructor(
            id: number, 
            sol: number, 
            camera: Camera,
            img_src: string,
            earth_date: string,
            rover: Rover ){

                this.id = id;
                this.sol = sol;
                this.camera = camera;
                this.img_src = img_src;
                this.earth_date = earth_date;
                this.rover = rover;
            
        }
    
}

export class Camera{
    public id: number; 
    public name: string;
    public rover_id: number;
    public full_name: string;

    constructor(
        id: number, 
        name: string,
        rover_id: number,
        full_name: string){

            this.id = id;
            this.name = name;
            this.rover_id = rover_id;
            this.full_name = full_name;

        }


}

export class Rover {

    public id: number; 
    public name: string;
    public landing_date: string;
    public launch_date: string;
    public status: string;

    constructor(
        id: number, 
        name: string,
        landing_date: string,
        launch_date: string,
        status: string){
            this.id = id;
            this.name = name;
            this.landing_date = landing_date;
            this.launch_date = launch_date;
            this.status = status;
            
        }


}