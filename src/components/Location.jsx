function Location() {
  return (
    <div className="bg-green-700 h-150 pb-20 ">
      <p className="text-4xl pt-10 text-center font-bold">Onde estamos</p>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7458.710617096513!2d-49.39148500000001!3d-20.817354!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94bdad63f9b32fbf%3A0xce48f578e90ebc08!2sR.%20Redentora%2C%202674%20-%20Vila%20Redentora%2C%20S%C3%A3o%20Jos%C3%A9%20do%20Rio%20Preto%20-%20SP%2C%2015015-780%2C%20Brasil!5e0!3m2!1spt-BR!2sus!4v1761878995817!5m2!1spt-BR!2sus"
        allowFullScreen=""
        loading="lazy"
        className="rounded-lg shadow-md size-full p-10"
      ></iframe>
    </div>
  );
}
export default Location;
