import HistoryImage from "/src/assets/History-image.jpg";
import Card from "./Card";
function OurHistory() {
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
    <div
      className="  lg:mx-55  pt-10 grid grid-cols-2 text-black gap-5 bg-white"
      id="OurHistory"
    >
      {/* Nossa Historia */}
      <div className="col-span-3 lg:col-span-1">
        <p className="text-2xl lg:text-4xl text-blue-950 font-bold text-center lg:text-left">
          UM POUCO DA NOSSA HISTÓRIA
        </p>
        <p className="font-extralight text-lg mt-4 text-center lg:text-justify mx-3">
          Com mais de 30 anos de experiencia na área da saúde, Hugues Rezende
          Souza trabalhou como funcionário e proprietário de farmácia, também
          atuou como representante de vendas, até que em 2010 junto com Tatiane
          P. T. Rezende Fundou a Souza e Rezende Medical – LTDA. Priorizando
          sempre a qualidade e comercializando as melhores marcas de produtos
          farmacêuticos, ortopédicos, laboratoriais, cosméticos e medico
          hospitalares para atender farmácias, drogarias, clinicas, laboratórios
          profissionais liberais (médicos veterinários, dentistas , etc) e home
          Care (atendimento domiciliar). Nosso Almoxarifado conta com amplo
          espaço físico, arejado e climatizado, as mercadorias passam por
          fiscalização interna antes de entrarem no estoque para manter sua
          qualidade, inspeções diárias de limpeza e controle de pragas; área de
          segregação e quarentena. O envio é feito por transportadoras
          qualificadas e documentadas....
        </p>
      </div>

      <img
        className="col-span-3 lg:col-span-1 w-full "
        src={HistoryImage}
        alt=""
      />
    </div>
  );
}

export default OurHistory;
