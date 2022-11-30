function preload() {

}

function setup() {
    canvas1 = createCanvas(500,500)
    canvas1.center()

    vd = createCapture(VIDEO)
    vd.hide()

    mypose = ml5.poseNet(vd, modelLoaded)
    mypose.on("pose", gotposes)
}

function draw() {
    image(vd, 0, 0, 500, 500 )
}

function takepict() {
    save("clown_filter_picture.png")
}

function modelLoaded() {
    console.log("Code is working")
}

function gotposes(recievedposes) {
    if( recievedposes.length > 0)
    {
        console.log(recievedposes)
    }
}