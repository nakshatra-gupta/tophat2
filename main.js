noseX=0;
noseY=0;
function preload()
{
  top_Hat = loadImage("https://i.postimg.cc/xTgVhSm6/TH1-removebg-preview.png");
}

function setup()
{
canvas = createCanvas(800, 600);
canvas.center();

video = createCapture(VIDEO);
video.size(800,600);
video.hide();
PoseNet = ml5.poseNet(video, modelloaded);
PoseNet.on('pose', gotPoses);
}

function draw()
{
translate(width,0);
scale(-1,1);
image(video, 0,0,800,600);
image(top_Hat, noseX - 225, noseY - 350, 450, 200);
}

function modelloaded()
{
console.log("The Model is Loaded.  Go eat pizza!")
}

function gotPoses(results)
{
if (results.length > 0)
{
    console.log(results);
    console.log("the x is" + results[0].pose.nose.x);
    console.log("the y is" + results[0].pose.nose.y);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
}
}