import { getPriceInRupeeFormat } from "../../../utils/common";
import { ITableData } from "../../../utils/types";

export interface ITableProps {
  data: ITableData[];
}

const Table = ({ data }: ITableProps) => {
  const getAmountPrice = (data: ITableData): number => {
    if (data.amount) return data.amount;
    if (!data.quantity || !data.rate) return 0;
    return data.quantity * data.rate;
  };
  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th>Sr.</th>
          <th>Description</th>
          <th>QTY.</th>
          <th>RATE</th>
          <th>PER</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {data.map((x, idx) => (
          <tr key={idx}>
            <td>{idx + 1}</td>
            <td>{x.description}</td>
            <td className="text-right">{x.quantity}</td>
            <td className="text-right">{getPriceInRupeeFormat(x.rate)}</td>
            <td>{x.per}</td>
            <td className="text-right">
              {getPriceInRupeeFormat(getAmountPrice(x))}
            </td>
          </tr>
        ))}
        <tr>
          <td></td>
          <td className="text-right">Total</td>
          <td></td>
          <td></td>
          <td></td>
          <td className="text-right">
            {getPriceInRupeeFormat(
              data.reduce((acc, curr) => acc + getAmountPrice(curr), 0),
            )}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
