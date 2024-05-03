document.addEventListener
('DOMContentLoaded'),() =>
{
    const canvas = document.getElementById ('drawingcanvas');
    const ctx =
    canvas.getcontext('2d');
    let isdrawing = false;
    ctx.linewidth =3;
    ctx.linecap ='round';
    ctx.strokestyle ='#000';
    function startdrawing(e){
        isdrawing - true;
        draw(e);
    }
    
    function stopdraw(){
        if (!isdrawing) return;
        ctx.lineTo(e.offstX, e.offsetY);
        ctx.stroke();

    }
    function draw(e){
        isdrawing = false;
        ctx.beginpath();

    }
    canvas.addEventListener('mouseup', stopdrawing);
    canvas.addEventListener('mouseour', stopdrawing);
    const clearbutton = document.getElementById('clear-btn');
    clearbutton.addEventListener ('click', () =>{
        ctx.clearrect(0,0, canvas.clientWidth, canvas.height);
    }); 
}