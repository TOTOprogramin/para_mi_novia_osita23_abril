const yesBtn= document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('jijiji ahi mami queria que le des al si para que encuentres este mensajito :) hoy pense mucho en ti todo 3el dia de echo y solo quiero decirte que un bb si seria bueno pero me gustaria ser contigo primero  veo tu amor , veo tu manera de ser conmigo y ya no cabe duda , estar contigo definitivamente fue lo mas genial que me pudoo pasar en la vida ,,, gracias mami por ser tu  y ya quiero verte muy prontito para tenerte en mis brazos y llenarte de amor amor de los puros .... te amo ...')

});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover',function () {
   const randomX = parseInt(Math.random()*100);
   const randomY = parseInt(Math.random()*100);
   noBtn.style.setProperty('top',randomY+'%');
   noBtn.style.setProperty('left',randomX+'%');
   noBtn.style.setProperty('transform',`traslate(-${randomX}%,-${randomY}%)`);

})
