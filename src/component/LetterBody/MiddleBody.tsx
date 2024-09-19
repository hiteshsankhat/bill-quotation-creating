import { ITableData } from "../../utils/types";
import Table from "../common/Table/Table";

const MiddleBody = () => {
  const tableData: ITableData[] = [
    {
      description:
        "Charges towards erecting the bamboo scaffolding from ground floor to top floor and after done the work removing the same. Wire brushing and cleaning the surface of the outside chajja and terrace flooring and removing the dust and debris lowering down the same. Open the cracks and fill the cracks with crack fill. Providing and applying one coat of good make primer coating. Providing and applying one coat of good make hot bitumen along with one layer of good make 2mm thick STP membrance water proofing with propor joint sealing by the help of khadi cloth etc. complete.",
      quantity: 1850,
      rate: 90,
      per: "sq. ft.",
    },
    {
      description: "Side wall work",
      amount: 32_000,
    },
    {
      description: "Scaffolding charges",
      amount: 18_000,
    },
  ];
  return (
    <div className="px-1">
      <Table data={tableData} />
    </div>
  );
};

export default MiddleBody;
