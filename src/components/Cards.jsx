import Card from "./Card";
function Cards() {
  const cards = [
    {
      name: "Missão",
      text: " Manter o mais alto padrão de qualidade dos nossos produtos e atender com comprometimento todos os nossos parceiros buscando sempre atendimento com qualidade, transparência e rapidez.",
    },
    {
      name: "Visão",
      text: "Entendemos que a base para o futuro sempre foi e continua sendo trabalho, ética, compromisso e comprometimento em fazer o melhor hoje.",
    },

    {
      name: "Valores",
      text: "Compromisso e comprometimento rigoroso com ética, honestidade e integridade em todas as relações que temos e em todas as ações que tomamos, respeito absoluto com todos com os quais lidamos, e uma busca constante por melhorias em tudo que fazemos. ",
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-2  lg:mx-50 my-5">
      {cards.map((card, index) => (
        <Card data={card} key={index} />
      ))}
    </div>
  );
}

export default Cards;
