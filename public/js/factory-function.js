// Factory function

function createCircle(radius){
    return{
        radius,
        draw(){
            console.log('draw ' + radius);
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

let circle3 = createCircle(3);
console.log(circle3);