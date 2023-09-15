function fall()
{
    let main = document.querySelector('.main');
    let n = 150;
    let i = 0;
   
    while(i<n)
    {
     
        let size = Math.random() * 3;
        let x = Math.floor(Math.random() * window.innerWidth);
        let time = Math.random() * 4;
        let lag = Math.random() * -10;
        let drop = document.createElement('i');
        main.appendChild(drop);
        drop.style.animationDuration = `${1+time}s`; 
        drop.style.animationDelay = `${lag}s`;
        drop.style.width = `${0.3 + size}px`;
        drop.style.left = `${x}px`;
        i++
    }
   
}
fall();
