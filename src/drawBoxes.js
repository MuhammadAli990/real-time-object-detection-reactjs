export default function drawBoxes(detections, ctx) {
    detections.forEach(element => {
        const [x, y, width, height] = element['bbox'];
        const text = element['class'];
        const score = element['score'].toFixed(2);
        
        ctx.strokeStyle = "red";
        ctx.font = '20px Arial';
        ctx.fillStyle = "red";

        ctx.beginPath();
        ctx.fillText(text, x, y-5);
        ctx.fillText(`Score:${score}`,x,y+25);
        ctx.rect(x, y, width, height);
        ctx.stroke();
    });
}