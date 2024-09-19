import { getCurrentDate } from "../../utils/common";

const UpperBody = () => {
  return (
    <>
      <section className="grid grid-cols-[1.2fr_0.80fr_1fr_0.5fr_1fr]">
        <p className="col-start-3 justify-self-center uppercase text-lg underline underline-offset-2">Quotation</p>
        <p className="row-start-2">
          To, <br /> Moti Mahal,
          <br /> Dinshaw, Vacha Road, <br /> Churuchgate,
          <br /> Mumbai-400020
        </p>
        <p className="-col-start-1 row-start-2">{getCurrentDate(new Date())}</p>
        <div className="col-span-7 row-start-3 px-12 py-4 flex gap-2">
          <strong>Sub:</strong>
          <p>
            QUOTATION FOR MEMBRANE WATER PROOFING WORK TO BE DONE AT TERRACE,
            6th, 9th and 10th FLOOR with our LABOUR AND MATERIALS COMPLETE
          </p>
        </div>
      </section>
    </>
  );
};

export default UpperBody;
