'use strict';
let countA=0,countB=0;
const get=id=>document.getElementById(id);
function render(){const total=countA+countB;get('total').textContent=total;get('a-count').textContent=countA;get('b-count').textContent=countB;for(const [id,value] of [['a',countA],['b',countB]]){const percent=total?Math.round(value/total*100):0;get(id+'-percent').textContent=percent+'%';get(id+'-bar').style.width=percent+'%';}}
get('send').addEventListener('click',()=>{const raw=get('request-count').value.trim();const quantity=Number(raw);if(!raw||!Number.isInteger(quantity)||quantity<1||quantity>100){get('message').textContent='Enter a whole number of requests from 1 to 100.';return;}for(let i=0;i<quantity;i++){if((countA+countB)%2===0){countA++;}else{countB++;}}render();get('message').textContent=`Simulated ${quantity} request${quantity===1?'':'s'} successfully.`;get('server-a').classList.toggle('active',countA>0);get('server-b').classList.toggle('active',countB>0);});
get('reset').addEventListener('click',()=>{countA=0;countB=0;render();get('message').textContent='Counters reset.';get('server-a').classList.remove('active');get('server-b').classList.remove('active');});
render();
