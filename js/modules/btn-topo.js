export default function initBotaoTopo(){
  const btnTopo = document.querySelector(".btn-topo");
  btnTopo.addEventListener("click", () =>{
      window.scrollTo(0,0)
  });
}