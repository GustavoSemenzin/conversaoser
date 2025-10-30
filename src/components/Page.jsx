import { FiCheckCircle } from "react-icons/fi";
function Page() {
  return (
    <div className=" h-full lg:mx-55  pt-10 grid grid-cols-2 text-black gap-5 bg-white">
      {/* Nossa Historia */}
      <div className="col-span-3 lg:col-span-1">
        <p className="text-4xl text-blue-950 font-bold text-center lg:text-left">
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
        src="../src/assets/History-image.jpg"
        alt=""
      />
      <div className="col-span-3 grid grid-cols-3 gap-2 h-70">
        <div className="h-full col-span-3 lg:col-span-1 mx-5 lg:mx-0 border rounded-md border-gray-300 bg-white">
          <div className="border-b border-gray-300 bg-gray-100 rounded-t-md h-10 flex items-center justify-center">
            <FiCheckCircle className="text-3xl text-green-400" />
            <p className="text-lg pl-2">Missão</p>
          </div>
          <p className="text-center px-10 pt-3">
            Manter o mais alto padrão de qualidade dos nossos produtos e atender
            com comprometimento todos os nossos parceiros buscando sempre
            atendimento com qualidade, transparência e rapidez.
          </p>
        </div>{" "}
        <div className="h-full col-span-3 lg:col-span-1 mx-5 lg:mx-0 border rounded-md border-gray-300 bg-white">
          <div className="border-b border-gray-300 bg-gray-100 rounded-t-md h-10 flex items-center justify-center">
            <FiCheckCircle className="text-3xl text-green-400" />
            <p className="text-lg pl-2">Visão</p>
          </div>
          <p className="text-center px-10 pt-3">
            Entendemos que a base para o futuro sempre foi e continua sendo
            trabalho, ética, compromisso e comprometimento em fazer o melhor
            hoje.
          </p>
        </div>
        <div className="h-full col-span-3 lg:col-span-1 mx-5 lg:mx-0 border rounded-md border-gray-300 bg-white">
          <div className="border-b border-gray-300 bg-gray-100 rounded-t-md h-10 flex items-center justify-center">
            <FiCheckCircle className="text-3xl text-green-400" />
            <p className="text-lg pl-2">Valores</p>
          </div>
          <p className="text-center px-10 pt-3">
            Compromisso e comprometimento rigoroso com ética, honestidade e
            integridade em todas as relações que temos e em todas as ações que
            tomamos, respeito absoluto com todos com os quais lidamos, e uma
            busca constante por melhorias em tudo que fazemos.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
